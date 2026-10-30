import { messages } from "./copy";
import {
  CHALLENGE_RATE_LIMIT,
  CHALLENGE_RATE_WINDOW_MS,
  readNewsletterEnv,
  STARTED_COOKIE,
  type NewsletterEnv,
} from "./env";
import { rateLimit } from "./rate-limit";
import { honeypotFilled, submitSignup } from "./signup";

type Logger = {
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

type HttpDeps = {
  env?: NewsletterEnv;
  now?: number;
  fetchImpl?: typeof fetch;
  log?: Logger;
};

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = headers.get("x-real-ip")?.trim();
  if (real) return real;
  return "unknown";
}

export function readStartedAt(cookieHeader: string | null): number | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(
    new RegExp(`(?:^|;\\s*)${STARTED_COOKIE}=(\\d+)`),
  );
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : null;
}

export async function handleSignupRequest(
  request: Request,
  deps: HttpDeps = {},
): Promise<Response> {
  const env = deps.env ?? readNewsletterEnv();
  const now = deps.now ?? Date.now();
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json(400, { ok: false, error: messages.refresh });
  }

  const record =
    payload && typeof payload === "object"
      ? (payload as Record<string, unknown>)
      : {};
  const honeypotValues = [record.soh_hp, record.company, record.website];
  const result = await submitSignup(
    {
      email: record.email,
      honeypot: honeypotValues.find((value) => honeypotFilled(value)),
      turnstileToken: record.turnstileToken,
      startedAt: readStartedAt(request.headers.get("cookie")),
      ip: clientIp(request.headers),
    },
    {
      env,
      now,
      fetchImpl: deps.fetchImpl ?? fetch,
      log: deps.log ?? console,
    },
  );

  return json(result.status, result.body, result.retryAfterSeconds);
}

export async function handleChallengeRequest(
  request: Request,
  deps: HttpDeps = {},
): Promise<Response> {
  const now = deps.now ?? Date.now();
  const limit = rateLimit(
    `challenge:${clientIp(request.headers)}`,
    CHALLENGE_RATE_LIMIT,
    CHALLENGE_RATE_WINDOW_MS,
    now,
  );
  if (!limit.ok) {
    return json(
      429,
      { ok: false, error: messages.rateLimited },
      limit.retryAfterSeconds,
    );
  }

  const secure = new URL(request.url).protocol === "https:";
  const response = json(200, { ok: true });
  response.headers.set(
    "Set-Cookie",
    [
      `${STARTED_COOKIE}=${now}`,
      "HttpOnly",
      "SameSite=Lax",
      "Path=/",
      "Max-Age=7200",
      secure ? "Secure" : "",
    ]
      .filter(Boolean)
      .join("; "),
  );
  return response;
}

function json(status: number, body: unknown, retryAfterSeconds?: number) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  });
  if (retryAfterSeconds) {
    headers.set("Retry-After", String(retryAfterSeconds));
  }
  return new Response(JSON.stringify(body), { status, headers });
}
