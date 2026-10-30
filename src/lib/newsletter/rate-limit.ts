import { EMAIL_RATE_WINDOW_MS } from "./env";

const buckets = new Map<string, number[]>();

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now: number,
) {
  const recent = (buckets.get(key) ?? []).filter((ts) => now - ts < windowMs);
  if (recent.length >= limit) {
    buckets.set(key, recent);
    const retryAfterMs = windowMs - (now - recent[0]);
    return {
      ok: false as const,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
  }
  recent.push(now);
  buckets.set(key, recent);
  if (buckets.size > 5000) {
    for (const [bucketKey, stamps] of buckets) {
      const newest = stamps[stamps.length - 1] ?? 0;
      if (now - newest > EMAIL_RATE_WINDOW_MS) buckets.delete(bucketKey);
    }
  }
  return { ok: true as const };
}

export function resetRateLimits() {
  buckets.clear();
}
