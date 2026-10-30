import { checkBotId } from "botid/server";
import { readStartedCookie, signStartedAt } from "./cookie";
import { messages } from "./copy";
import {
  CHALLENGE_RATE_LIMIT,
  CHALLENGE_RATE_WINDOW_MS,
  IP_RATE_LIMIT,
  IP_RATE_WINDOW_MS,
  readNewsletterEnv,
  STARTED_COOKIE,
  strictProtection,
  type NewsletterEnv,
} from "./env";
import { rateLimit } from "./rate-limit";
import { honeypotFilled, submitSignup } from "./signup";

type Logger = {
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

export type BotVerdict = { isBot: boolean };

type HttpDeps = {
  env?: NewsletterEnv;
  now?: number;
  fetchImpl?: typeof fetch;
  log?: Logger;
  botCheck?: () => Promise<BotVerdict>;
};

let warnedCookieSecret = false;
let warnedBotCheck = false;

export function resetHttpWarningsForTests() {
  warnedCookieSecret = false;
  warnedBotCheck = false;
}

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

export async function handleSignupRequest(
  request: Request,
  deps: HttpDeps = {},
): Promise<Response> {
  const env = deps.env ?? readNewsletterEnv();
  const now = deps.now ?? Date.now();
  const log = deps.log ?? console;
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
  if (honeypotValues.some((value) => honeypotFilled(value))) {
    rateLimit(
      `ip:${clientIp(request.headers) || "unknown"}`,
      IP_RATE_LIMIT,
      IP_RATE_WINDOW_MS,
      now,
    );
    return json(200, { ok: true });
  }

  const bot = await guardBot(env, log, deps.botCheck);
  if (bot) return bot;

  const cookie = cookiePolicy(env, log);
  if (!cookie.ok) {
    log.error(
      "NEWSLETTER_COOKIE_SECRET is not set. Refusing newsletter signup.",
    );
    return json(500, { ok: false, error: messages.generic });
  }

  const result = await submitSignup(
    {
      email: record.email,
      startedAt: readStartedCookie(request.headers.get("cookie"), cookie),
      ip: clientIp(request.headers),
    },
    {
      env,
      now,
      fetchImpl: deps.fetchImpl ?? fetch,
      log,
    },
  );

  return json(result.status, result.body, result.retryAfterSeconds);
}

export async function handleChallengeRequest(
  request: Request,
  deps: HttpDeps = {},
): Promise<Response> {
  const env = deps.env ?? readNewsletterEnv();
  const now = deps.now ?? Date.now();
  const log = deps.log ?? console;
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

  const cookie = cookiePolicy(env, log);
  if (!cookie.ok) {
    log.error(
      "NEWSLETTER_COOKIE_SECRET is not set. Refusing newsletter challenge.",
    );
    return json(500, { ok: false, error: messages.generic });
  }

  const value = cookie.secret
    ? signStartedAt(cookie.secret, now)
    : String(now);
  const secure = new URL(request.url).protocol === "https:";
  const response = json(200, { ok: true });
  response.headers.set(
    "Set-Cookie",
    [
      `${STARTED_COOKIE}=${value}`,
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

async function guardBot(
  env: NewsletterEnv,
  log: Logger,
  botCheck: HttpDeps["botCheck"],
): Promise<Response | null> {
  const strict = strictProtection(env);
  try {
    const verdict = await (botCheck ?? checkBotId)();
    if (verdict.isBot) {
      if (strict) {
        return json(403, { ok: false, error: messages.bot });
      }
      log.warn(
        "BotID classified this signup as a bot outside production. Continuing with the honeypot and rate limit.",
      );
    }
    return null;
  } catch {
    if (strict) {
      log.error("BotID check failed. Refusing newsletter signup.");
      return json(503, { ok: false, error: messages.generic });
    }
    if (!warnedBotCheck) {
      warnedBotCheck = true;
      log.warn(
        "BotID check failed outside production. Newsletter signup is continuing with the honeypot and rate limit.",
      );
    }
    return null;
  }
}

function cookiePolicy(
  env: NewsletterEnv,
  log: Logger,
): { ok: true; secret: string; allowUnsigned: boolean } | { ok: false } {
  if (env.cookieSecret) {
    return { ok: true, secret: env.cookieSecret, allowUnsigned: false };
  }
  if (strictProtection(env)) return { ok: false };
  if (!warnedCookieSecret) {
    warnedCookieSecret = true;
    log.warn(
      "NEWSLETTER_COOKIE_SECRET is not set. The fill-time cookie is unsigned outside production.",
    );
  }
  return { ok: true, secret: "", allowUnsigned: true };
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
