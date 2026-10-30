import { turnstileRequired, type NewsletterEnv } from "./env";

const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

let warnedSecret = false;
let notedSiteKey = false;

export function resetTurnstileWarnings() {
  warnedSecret = false;
  notedSiteKey = false;
}

export function noteTurnstileSiteKey(
  env: NewsletterEnv,
  log: { warn: (...args: unknown[]) => void; error: (...args: unknown[]) => void } = console,
) {
  if (notedSiteKey || env.turnstileSiteKey) return;
  notedSiteKey = true;
  if (turnstileRequired(env)) {
    log.error(
      "TURNSTILE_SITE_KEY is not set. Production newsletter signup will fail closed.",
    );
    return;
  }
  log.warn(
    "TURNSTILE_SITE_KEY is not set. The newsletter form is rendering without Turnstile.",
  );
}

export function warnTurnstileSecretSkipped(log: {
  warn: (...args: unknown[]) => void;
}) {
  if (warnedSecret) return;
  warnedSecret = true;
  log.warn(
    "TURNSTILE_SECRET_KEY is not set. Newsletter signup is skipping Turnstile outside production.",
  );
}

export async function verifyTurnstileToken(options: {
  secret: string;
  token: string;
  ip: string;
  fetchImpl: typeof fetch;
}): Promise<boolean> {
  const body = new URLSearchParams();
  body.set("secret", options.secret);
  body.set("response", options.token);
  if (options.ip && options.ip !== "unknown") {
    body.set("remoteip", options.ip);
  }

  let response: Response;
  try {
    response = await options.fetchImpl(SITEVERIFY, {
      method: "POST",
      body,
      signal: AbortSignal.timeout(12_000),
    });
  } catch {
    return false;
  }
  if (!response.ok) return false;

  try {
    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
