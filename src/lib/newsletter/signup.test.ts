import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { afterEach, describe, it } from "node:test";
import { signStartedAt } from "./cookie";
import { messages } from "./copy";
import { NEWSLETTER_LIST_ID, type NewsletterEnv } from "./env";
import { handleSignupRequest, resetHttpWarningsForTests } from "./http";
import { resetNewsletterStateForTests, submitSignup } from "./signup";

const NOW = Date.parse("2026-10-30T15:00:00.000Z");
const EMAIL = "founder@example.com";
const COOKIE_SECRET = "cookie-secret-for-tests";

afterEach(() => {
  resetNewsletterStateForTests();
  resetHttpWarningsForTests();
});

function env(overrides: Partial<NewsletterEnv> = {}): NewsletterEnv {
  return {
    nitrosendApiKey: "nskey_test",
    cookieSecret: COOKIE_SECRET,
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

  it("rejects a bot in production before Nitrosend", async () => {
    const response = await handleSignupRequest(signupRequest(), {
      env: env(),
      now: NOW,
      log: silentLog(),
      botCheck: async () => ({ isBot: true }),
      fetchImpl: async () => {
        throw new Error("network should not be called");
      },
    });

    assert.equal(response.status, 403);
    assert.deepEqual(await response.json(), { ok: false, error: messages.bot });
  });

  it("fails closed in production when the BotID check throws", async () => {
    const errors: unknown[] = [];
    const response = await handleSignupRequest(signupRequest(), {
      env: env(),
      now: NOW,
      log: {
        warn() {},
        error(...args) {
          errors.push(args);
        },
      },
      botCheck: async () => {
        throw new Error("oidc missing");
      },
      fetchImpl: async () => {
        throw new Error("network should not be called");
      },
    });

    assert.equal(response.status, 503);
    assert.match(JSON.stringify(errors), /BotID check failed/);
  });

  it("rejects a forged fill-time cookie", async () => {
    const signed = signStartedAt(COOKIE_SECRET, NOW - 10_000);
    const [payload, signature] = signed.split(".");
    const forged = `${payload}.${signature.slice(0, -1)}${signature.endsWith("a") ? "b" : "a"}`;
    const response = await handleSignupRequest(
      signupRequest({ cookie: `soh_started=${forged}` }),
      {
        env: env(),
        now: NOW,
        log: silentLog(),
        botCheck: async () => ({ isBot: false }),
        fetchImpl: async () => {
          throw new Error("network should not be called");
        },
      },
    );

    assert.equal(response.status, 400);
    const body = (await response.json()) as { ok: boolean; error?: string };
    assert.equal(body.ok, false);
    assert.equal(body.error, messages.refresh);
  });

  it("adds a valid submission to list 10418 with source nikvassev.com", async () => {
    const calls: Call[] = [];
    const result = await submitSignup(
      {
        email: EMAIL,
        startedAt: NOW - 10_000,
        ip: "203.0.113.15",
      },
      {
        env: env(),
        now: NOW,
        log: silentLog(),
        fetchImpl: async (url, init) => {
          const call = record(calls, url, init);
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

  it("accepts an unsigned fill-time cookie in preview when the secret is unset", async () => {
    const warnings: unknown[] = [];
    const calls: Call[] = [];
    const response = await handleSignupRequest(
      signupRequest({ cookie: `soh_started=${NOW - 10_000}` }),
      {
        env: env({ vercelEnv: "preview", cookieSecret: "" }),
        now: NOW,
        log: {
          warn(...args) {
            warnings.push(args);
          },
          error() {},
        },
        botCheck: async () => ({ isBot: false }),
        fetchImpl: async (url, init) => {
          const call = record(calls, url, init);
          if (call.method === "GET") return jsonResponse([]);
          if (call.url.endsWith("/v1/my/contacts")) {
            return jsonResponse(
              {
                id: 1,
                email: EMAIL,
                source: "nikvassev.com",
                list_ids: [NEWSLETTER_LIST_ID],
              },
              201,
            );
          }
          throw new Error(`unexpected ${call.url}`);
        },
      },
    );

    assert.equal(response.status, 200);
    assert.match(JSON.stringify(warnings), /NEWSLETTER_COOKIE_SECRET/);
    assert.equal(
      calls.some(
        (call) =>
          call.method === "POST" &&
          call.url.endsWith("/v1/my/contacts") &&
          (call.body as { list_ids?: number[] }).list_ids?.[0] ===
            NEWSLETTER_LIST_ID,
      ),
      true,
    );
  });

  it("treats a company field as a honeypot on the HTTP route", async () => {
    const request = new Request("https://nikvassev.com/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "203.0.113.18",
      },
      body: JSON.stringify({
        email: EMAIL,
        company: "Bot Co",
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
      assert.equal(text.includes("TURNSTILE_"), false, file);
    }
    const form = readFileSync("src/components/NewsletterForm.tsx", "utf8");
    assert.equal(form.includes("api.nitrosend.com"), false);
    assert.equal(form.includes("challenges.cloudflare.com"), false);
  });
});

function signupRequest(options?: { cookie?: string }) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-forwarded-for": "203.0.113.20",
  });
  if (options?.cookie) headers.set("cookie", options.cookie);
  else {
    headers.set(
      "cookie",
      `soh_started=${signStartedAt(COOKIE_SECRET, NOW - 10_000)}`,
    );
  }
  return new Request("https://nikvassev.com/api/newsletter", {
    method: "POST",
    headers,
    body: JSON.stringify({ email: EMAIL }),
  });
}

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
