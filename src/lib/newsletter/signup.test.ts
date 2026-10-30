import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { afterEach, describe, it } from "node:test";
import { messages } from "./copy";
import { NEWSLETTER_LIST_ID, type NewsletterEnv } from "./env";
import { handleSignupRequest } from "./http";
import { resetNewsletterStateForTests, submitSignup } from "./signup";

const NOW = Date.parse("2026-10-30T15:00:00.000Z");
const EMAIL = "founder@example.com";
const SECRET = "turnstile-secret";

afterEach(() => {
  resetNewsletterStateForTests();
});

function env(overrides: Partial<NewsletterEnv> = {}): NewsletterEnv {
  return {
    turnstileSiteKey: "site-key",
    turnstileSecretKey: SECRET,
    nitrosendApiKey: "nskey_test",
    nodeEnv: "test",
    vercelEnv: "production",
    ...overrides,
  };
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

type Call = {
  url: string;
  method: string;
  body: unknown;
  headers: Headers;
};

describe("newsletter signup guards", () => {
  it("rejects a honeypot submission with fake success and no Nitrosend call", async () => {
    const result = await submitSignup(
      {
        email: EMAIL,
        honeypot: "filled by a bot",
        turnstileToken: "token",
        startedAt: NOW - 10_000,
        ip: "203.0.113.10",
      },
      {
        env: env(),
        now: NOW,
        log: silentLog(),
        fetchImpl: async () => {
          throw new Error("network should not be called");
        },
      },
    );

    assert.equal(result.status, 200);
    assert.deepEqual(result.body, { ok: true });
  });

  it("rejects a missing Turnstile token in production before Nitrosend", async () => {
    const result = await submitSignup(
      {
        email: EMAIL,
        turnstileToken: "   ",
        startedAt: NOW - 10_000,
        ip: "203.0.113.11",
      },
      {
        env: env(),
        now: NOW,
        log: silentLog(),
        fetchImpl: async () => {
          throw new Error("network should not be called");
        },
      },
    );

    assert.equal(result.status, 400);
    assert.equal(result.body.ok, false);
    if (!result.body.ok) assert.equal(result.body.error, messages.turnstile);
  });

  it("rejects an invalid Turnstile token in production before Nitrosend", async () => {
    const calls: string[] = [];
    const result = await submitSignup(
      {
        email: EMAIL,
        turnstileToken: "bad-token",
        startedAt: NOW - 10_000,
        ip: "203.0.113.12",
      },
      {
        env: env(),
        now: NOW,
        log: silentLog(),
        fetchImpl: async (url) => {
          const href = String(url);
          calls.push(href);
          if (href.includes("siteverify")) return jsonResponse({ success: false });
          throw new Error(`unexpected ${href}`);
        },
      },
    );

    assert.equal(result.status, 400);
    assert.equal(calls.some((href) => href.includes("nitrosend.com")), false);
    assert.equal(calls.some((href) => href.includes("siteverify")), true);
  });

  it("fails closed in production when the Turnstile secret is missing", async () => {
    const errors: unknown[] = [];
    const result = await submitSignup(
      {
        email: EMAIL,
        turnstileToken: "token",
        startedAt: NOW - 10_000,
        ip: "203.0.113.13",
      },
      {
        env: env({ turnstileSecretKey: "" }),
        now: NOW,
        log: {
          warn() {},
          error(...args) {
            errors.push(args);
          },
        },
        fetchImpl: async () => {
          throw new Error("network should not be called");
        },
      },
    );

    assert.equal(result.status, 503);
    assert.match(JSON.stringify(errors), /TURNSTILE_SECRET_KEY/);
  });

  it("adds a valid submission to list 10418 with source nikvassev.com", async () => {
    const calls: Call[] = [];
    const result = await submitSignup(
      {
        email: EMAIL,
        turnstileToken: "token-ok",
        startedAt: NOW - 10_000,
        ip: "203.0.113.15",
      },
      {
        env: env(),
        now: NOW,
        log: silentLog(),
        fetchImpl: async (url, init) => {
          const call = record(calls, url, init);
          if (call.url.includes("siteverify")) {
            const raw = typeof call.body === "string" ? call.body : "";
            assert.match(raw, /response=token-ok/);
            return jsonResponse({ success: true });
          }
          if (call.method === "GET" && call.url.includes("/v1/my/contacts?")) {
            return jsonResponse([]);
          }
          if (call.method === "POST" && call.url.endsWith("/v1/my/contacts")) {
            const body = call.body as {
              source?: string;
              list_ids?: number[];
            };
            return jsonResponse(
              {
                id: 1,
                email: EMAIL,
                source: body.source,
                list_ids: body.list_ids,
              },
              201,
            );
          }
          throw new Error(`unexpected ${call.method} ${call.url}`);
        },
      },
    );

    assert.equal(result.status, 200);
    assert.deepEqual(result.body, { ok: true });
    const create = calls.find(
      (call) => call.method === "POST" && call.url.endsWith("/v1/my/contacts"),
    );
    assert.ok(create);
    const body = create.body as { source: string; list_ids: number[] };
    assert.equal(body.source, "nikvassev.com");
    assert.deepEqual(body.list_ids, [NEWSLETTER_LIST_ID]);
    assert.equal(create.headers.get("Authorization"), "Bearer nskey_test");
  });

  it("still accepts a signup in preview when Turnstile keys are missing", async () => {
    const warnings: unknown[] = [];
    const calls: Call[] = [];
    const result = await submitSignup(
      {
        email: EMAIL,
        startedAt: NOW - 10_000,
        ip: "203.0.113.14",
      },
      {
        env: env({
          vercelEnv: "preview",
          turnstileSecretKey: "",
          turnstileSiteKey: "",
        }),
        now: NOW,
        log: {
          warn(...args) {
            warnings.push(args);
          },
          error() {},
        },
        fetchImpl: async (url, init) => {
          const call = record(calls, url, init);
          if (call.method === "GET") return jsonResponse([]);
          if (call.url.endsWith("/v1/my/contacts")) {
            return jsonResponse(
              { id: 1, email: EMAIL, source: "nikvassev.com", list_ids: [10418] },
              201,
            );
          }
          throw new Error(`unexpected ${call.url}`);
        },
      },
    );

    assert.equal(result.status, 200);
    assert.match(JSON.stringify(warnings), /TURNSTILE_SECRET_KEY/);
    assert.equal(
      calls.some((call) => call.url.includes("siteverify")),
      false,
    );
  });

  it("treats a company field as a honeypot on the HTTP route", async () => {
    const request = new Request("https://nikvassev.com/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "203.0.113.18",
        cookie: `soh_started=${NOW - 10_000}`,
      },
      body: JSON.stringify({
        email: EMAIL,
        company: "Bot Co",
        turnstileToken: "token",
      }),
    });
    const response = await handleSignupRequest(request, {
      env: env(),
      now: NOW,
      log: silentLog(),
      fetchImpl: async () => {
        throw new Error("network should not be called");
      },
    });
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
  });

  it("keeps the original success message and the public key out of client source", () => {
    assert.equal(
      messages.success,
      "Thanks. You are on the list for Systems Over Hustle.",
    );
    assert.doesNotMatch(Object.values(messages).join("\n"), /[\u2013\u2014]/);

    const files = walk("src").filter((file) => /\.(ts|tsx|js|jsx)$/.test(file));
    for (const file of files) {
      if (file.endsWith("signup.test.ts")) continue;
      const text = readFileSync(file, "utf8");
      assert.equal(text.includes("wpkey_live_"), false, file);
      assert.equal(text.includes("nskey_live_"), false, file);
      assert.equal(text.includes("@nitrosend/sdk"), false, file);
    }
    const form = readFileSync("src/components/NewsletterForm.tsx", "utf8");
    assert.equal(form.includes("api.nitrosend.com"), false);
    assert.match(form, /messages\.success/);
  });
});

function silentLog() {
  return { warn() {}, error() {} };
}

function record(
  calls: Call[],
  url: string | URL | Request,
  init?: RequestInit,
): Call {
  const href =
    typeof url === "string" ? url : url instanceof URL ? url.href : url.url;
  let body: unknown = null;
  if (typeof init?.body === "string") {
    try {
      body = JSON.parse(init.body);
    } catch {
      body = init.body;
    }
  } else if (init?.body instanceof URLSearchParams) {
    body = init.body.toString();
  }
  const call = {
    url: href,
    method: init?.method ?? "GET",
    body,
    headers: new Headers(init?.headers),
  };
  calls.push(call);
  return call;
}

function walk(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}
