import { createHmac, timingSafeEqual } from "node:crypto";
import { STARTED_COOKIE } from "./env";

export function signStartedAt(secret: string, startedAt: number): string {
  const payload = String(startedAt);
  const signature = createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

export function readStartedCookie(
  cookieHeader: string | null,
  options: { secret: string; allowUnsigned: boolean },
): number | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(
    new RegExp(`(?:^|;\\s*)${STARTED_COOKIE}=([^;]+)`),
  );
  if (!match) return null;
  const raw = decodeURIComponent(match[1].trim());
  const parts = raw.split(".");

  if (parts.length === 2) {
    if (!options.secret) return null;
    const [payload, signature] = parts;
    if (!/^\d+$/.test(payload)) return null;
    const expected = createHmac("sha256", options.secret)
      .update(payload)
      .digest("base64url");
    const actualBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expected);
    if (
      actualBuf.length !== expectedBuf.length ||
      !timingSafeEqual(actualBuf, expectedBuf)
    ) {
      return null;
    }
    return Number(payload);
  }

  if (options.allowUnsigned && parts.length === 1 && /^\d+$/.test(raw)) {
    return Number(raw);
  }
  return null;
}
