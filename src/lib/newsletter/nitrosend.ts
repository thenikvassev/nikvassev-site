import { NEWSLETTER_LIST_ID, SIGNUP_SOURCE } from "./env";

const API = "https://api.nitrosend.com";

export type ContactRecord = {
  email: string;
  listIds: number[];
};

export class NitrosendRequestError extends Error {
  status: number;
  errorCode?: string;

  constructor(message: string, status: number, errorCode?: string) {
    super(message);
    this.name = "NitrosendRequestError";
    this.status = status;
    this.errorCode = errorCode;
  }
}

/** Server API only. Signups join list 10418, the same list the public form used. */
export class NitrosendClient {
  constructor(
    private apiKey: string,
    private fetchImpl: typeof fetch,
  ) {}

  async findByEmail(email: string): Promise<ContactRecord | null> {
    const { status, body } = await this.request(
      `/v1/my/contacts?search=${encodeURIComponent(email)}&limit=20`,
      { method: "GET" },
    );
    if (status !== 200 || !Array.isArray(body)) {
      throw new NitrosendRequestError("lookup_failed", status, errorCode(body));
    }
    for (const item of body) {
      const record = readContact(item);
      if (record && record.email === email) return record;
    }
    return null;
  }

  async createOnNewsletter(email: string) {
    return this.request("/v1/my/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        source: SIGNUP_SOURCE,
        list_ids: [NEWSLETTER_LIST_ID],
        data: { signup_source: SIGNUP_SOURCE },
      }),
    });
  }

  async addToNewsletter(email: string) {
    const { status, body } = await this.request(
      `/v1/my/lists/${NEWSLETTER_LIST_ID}/contacts/bulk`,
      {
        method: "POST",
        body: JSON.stringify({ action: "add", emails: [email] }),
      },
    );
    if (status !== 200) {
      throw new NitrosendRequestError("list_add_failed", status, errorCode(body));
    }
    const notFound = readStringList(body, "not_found").map((value) =>
      value.toLowerCase(),
    );
    const invalid = readStringList(body, "invalid_emails");
    if (notFound.includes(email) || invalid.length > 0) {
      throw new NitrosendRequestError("list_add_missed", status);
    }
  }

  private async request(path: string, init: RequestInit) {
    const headers = new Headers(init.headers);
    headers.set("Authorization", `Bearer ${this.apiKey}`);
    if (init.body) headers.set("Content-Type", "application/json");
    const response = await this.fetchImpl(`${API}${path}`, {
      ...init,
      headers,
      signal: init.signal ?? AbortSignal.timeout(12_000),
    });
    const text = await response.text();
    let body: unknown = null;
    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = null;
      }
    }
    return { status: response.status, body };
  }
}

export function readListIds(body: unknown): number[] | null {
  if (!body || typeof body !== "object" || !("list_ids" in body)) return null;
  const value = (body as { list_ids?: unknown }).list_ids;
  if (!Array.isArray(value)) return null;
  return value.map((id) => Number(id)).filter((id) => Number.isInteger(id));
}

function readContact(value: unknown): ContactRecord | null {
  if (!value || typeof value !== "object") return null;
  const email = (value as { email?: unknown }).email;
  if (typeof email !== "string") return null;
  return {
    email: email.trim().toLowerCase(),
    listIds: readListIds(value) ?? [],
  };
}

function readStringList(body: unknown, key: string): string[] {
  if (!body || typeof body !== "object" || !(key in body)) return [];
  const value = (body as Record<string, unknown>)[key];
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

function errorCode(body: unknown): string | undefined {
  if (!body || typeof body !== "object" || !("error_code" in body)) return;
  const code = (body as { error_code?: unknown }).error_code;
  return typeof code === "string" ? code : undefined;
}
