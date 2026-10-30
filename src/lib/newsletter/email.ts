const EMAIL =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (email.length < 6 || email.length > 254) return null;
  const [local, domain, extra] = email.split("@");
  if (!local || !domain || extra) return null;
  if (local.length > 64 || domain.includes("..") || local.includes("..")) {
    return null;
  }
  if (!EMAIL.test(email)) return null;
  return email;
}
