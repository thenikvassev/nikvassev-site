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
  nitrosendApiKey: string;
  cookieSecret: string;
  nodeEnv: string;
  vercelEnv: string;
};

export function readNewsletterEnv(
  source: NodeJS.ProcessEnv = process.env,
): NewsletterEnv {
  return {
    nitrosendApiKey: source.NITROSEND_API_KEY?.trim() ?? "",
    cookieSecret: source.NEWSLETTER_COOKIE_SECRET?.trim() ?? "",
    nodeEnv: source.NODE_ENV ?? "development",
    vercelEnv: source.VERCEL_ENV ?? "",
  };
}

/**
 * Production fails closed for BotID and for an unsigned fill-time cookie.
 * Vercel preview and local dev can fall back when BotID or the cookie
 * secret is unavailable.
 */
export function strictProtection(env: NewsletterEnv): boolean {
  if (env.vercelEnv === "preview" || env.vercelEnv === "development") {
    return false;
  }
  if (env.vercelEnv === "production") return true;
  return env.nodeEnv === "production";
}
