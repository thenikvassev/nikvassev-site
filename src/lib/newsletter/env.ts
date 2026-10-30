/** Live Systems Over Hustle list. Joining it starts welcome flow 13494. */
export const NEWSLETTER_LIST_ID = 10418;

/** Stored on new contacts so the signup source is visible in Nitrosend. */
export const SIGNUP_SOURCE = "nikvassev.com";

export const MIN_FILL_MS = 3_000;
export const FORM_MAX_AGE_MS = 2 * 60 * 60 * 1000;
export const CLOCK_SKEW_MS = 30_000;

export const IP_RATE_LIMIT = 5;
export const IP_RATE_WINDOW_MS = 10 * 60 * 1000;
export const EMAIL_RATE_LIMIT = 5;
export const EMAIL_RATE_WINDOW_MS = 60 * 60 * 1000;
export const CHALLENGE_RATE_LIMIT = 30;
export const CHALLENGE_RATE_WINDOW_MS = 10 * 60 * 1000;

export const STARTED_COOKIE = "soh_started";

export type NewsletterEnv = {
  turnstileSiteKey: string;
  turnstileSecretKey: string;
  nitrosendApiKey: string;
  nodeEnv: string;
  vercelEnv: string;
};

export function readNewsletterEnv(
  source: NodeJS.ProcessEnv = process.env,
): NewsletterEnv {
  return {
    turnstileSiteKey: source.TURNSTILE_SITE_KEY?.trim() ?? "",
    turnstileSecretKey: source.TURNSTILE_SECRET_KEY?.trim() ?? "",
    nitrosendApiKey: source.NITROSEND_API_KEY?.trim() ?? "",
    nodeEnv: source.NODE_ENV ?? "development",
    vercelEnv: source.VERCEL_ENV ?? "",
  };
}

/**
 * Production fails closed when Turnstile is missing.
 * Vercel preview and local dev keep working on the honeypot and rate limit.
 * A production Node process outside Vercel (next start) also fails closed.
 */
export function turnstileRequired(env: NewsletterEnv): boolean {
  if (env.vercelEnv === "preview" || env.vercelEnv === "development") {
    return false;
  }
  if (env.vercelEnv === "production") return true;
  return env.nodeEnv === "production";
}
