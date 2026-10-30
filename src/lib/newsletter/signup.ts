import { messages } from "./copy";
import {
  CLOCK_SKEW_MS,
  EMAIL_RATE_LIMIT,
  EMAIL_RATE_WINDOW_MS,
  FORM_MAX_AGE_MS,
  IP_RATE_LIMIT,
  IP_RATE_WINDOW_MS,
  MIN_FILL_MS,
  NEWSLETTER_LIST_ID,
  type NewsletterEnv,
} from "./env";
import { normalizeEmail } from "./email";
import {
  NitrosendClient,
  NitrosendRequestError,
  readListIds,
} from "./nitrosend";
import { rateLimit, resetRateLimits } from "./rate-limit";

export type SignupBody = {
  email?: unknown;
  honeypot?: unknown;
  /** When the form was issued, in epoch ms. Null when the cookie is missing. */
  startedAt: number | null;
  ip: string;
};

export type SignupResult = {
  status: number;
  body: { ok: true } | { ok: false; error: string };
  retryAfterSeconds?: number;
};

type Logger = {
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

type Deps = {
  env: NewsletterEnv;
  now: number;
  fetchImpl: typeof fetch;
  log: Logger;
};

export function resetNewsletterStateForTests() {
  resetRateLimits();
}

export function honeypotFilled(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some((item) => honeypotFilled(item));
  return true;
}

export async function submitSignup(
  input: SignupBody,
  deps: Deps,
): Promise<SignupResult> {
  const ipLimit = rateLimit(
    `ip:${input.ip || "unknown"}`,
    IP_RATE_LIMIT,
    IP_RATE_WINDOW_MS,
    deps.now,
  );

  if (honeypotFilled(input.honeypot)) {
    return { status: 200, body: { ok: true } };
  }

  if (!ipLimit.ok) {
    return {
      status: 429,
      body: { ok: false, error: messages.rateLimited },
      retryAfterSeconds: ipLimit.retryAfterSeconds,
    };
  }

  const email = normalizeEmail(input.email);
  if (!email) {
    return { status: 400, body: { ok: false, error: messages.invalidEmail } };
  }

  const emailLimit = rateLimit(
    `email:${email}`,
    EMAIL_RATE_LIMIT,
    EMAIL_RATE_WINDOW_MS,
    deps.now,
  );
  if (!emailLimit.ok) {
    return {
      status: 429,
      body: { ok: false, error: messages.rateLimited },
      retryAfterSeconds: emailLimit.retryAfterSeconds,
    };
  }

  const fill = checkFillTime(input.startedAt, deps.now);
  if (fill) return fill;

  if (!deps.env.nitrosendApiKey) {
    deps.log.error("NITROSEND_API_KEY is not set. Refusing newsletter signup.");
    return { status: 500, body: { ok: false, error: messages.generic } };
  }

  const client = new NitrosendClient(deps.env.nitrosendApiKey, deps.fetchImpl);

  try {
    await addToNewsletter(client, email);
  } catch (error) {
    if (error instanceof NitrosendRequestError) {
      deps.log.error("newsletter signup failed", {
        status: error.status,
        errorCode: error.errorCode,
      });
    } else {
      deps.log.error("newsletter signup failed", {
        message: error instanceof Error ? error.message : "unknown",
      });
    }
    return { status: 502, body: { ok: false, error: messages.generic } };
  }

  return { status: 200, body: { ok: true } };
}

function checkFillTime(startedAt: number | null, now: number): SignupResult | null {
  if (startedAt == null || !Number.isFinite(startedAt)) {
    return { status: 400, body: { ok: false, error: messages.refresh } };
  }
  if (startedAt > now + CLOCK_SKEW_MS) {
    return { status: 400, body: { ok: false, error: messages.refresh } };
  }
  const age = now - startedAt;
  if (age < MIN_FILL_MS) {
    return { status: 400, body: { ok: false, error: messages.tooFast } };
  }
  if (age > FORM_MAX_AGE_MS) {
    return { status: 400, body: { ok: false, error: messages.refresh } };
  }
  return null;
}

async function addToNewsletter(client: NitrosendClient, email: string) {
  const existing = await client.findByEmail(email);
  if (existing) {
    if (existing.listIds.includes(NEWSLETTER_LIST_ID)) return;
    await client.addToNewsletter(email);
    return;
  }

  const created = await client.createOnNewsletter(email);
  if (created.status !== 201 && created.status !== 200) {
    throw new NitrosendRequestError("create_failed", created.status);
  }
  const listIds = readListIds(created.body);
  if (!listIds?.includes(NEWSLETTER_LIST_ID)) {
    await client.addToNewsletter(email);
  }
}
