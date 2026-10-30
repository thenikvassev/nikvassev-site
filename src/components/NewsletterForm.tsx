"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { messages } from "@/lib/newsletter/copy";
import { normalizeEmail } from "@/lib/newsletter/email";

type Props = {
  variant?: "light" | "dark";
  /** Unique field id when more than one form is on the page. */
  id?: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ variant = "light", id }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [formReady, setFormReady] = useState(false);
  const submittingRef = useRef(false);

  const isDark = variant === "dark";
  const isLoading = status === "loading";
  const emailId = id ?? `email-${variant}`;
  const errorId = `${emailId}-error`;

  useEffect(() => {
    let cancelled = false;
    fetch("/api/newsletter/challenge")
      .then((response) => {
        if (!cancelled && response.ok) setFormReady(true);
      })
      .catch(() => {
        /* Submit tells the person to refresh if the timer cookie never arrives. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = new FormData(event.currentTarget);
    const honeypot = String(form.get("soh_hp") ?? "");
    const trimmed = email.trim();
    if (!normalizeEmail(trimmed)) {
      setStatus("error");
      setError(messages.invalidEmail);
      return;
    }
    if (!formReady) {
      setStatus("error");
      setError(messages.tooFast);
      return;
    }

    submittingRef.current = true;
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          soh_hp: honeypot,
        }),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (response.ok && data?.ok) {
        setEmail("");
        setError(null);
        setStatus("success");
        return;
      }
      setError(typeof data?.error === "string" ? data.error : messages.generic);
      setStatus("error");
    } catch {
      setError(messages.generic);
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <p
        className={`rounded-full px-4 py-3 text-pretty text-sm ${
          isDark ? "bg-cream text-forest" : "bg-forest text-white"
        }`}
        role="status"
        aria-live="polite"
      >
        {messages.success}
      </p>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="relative flex w-full flex-col gap-3 sm:flex-row"
        aria-label="Subscribe to Systems Over Hustle"
        aria-busy={isLoading}
      >
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          disabled={isLoading}
          aria-invalid={status === "error"}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setError(null);
            }
          }}
          className={`min-w-0 flex-1 rounded-full border-2 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-70 ${
            isDark
              ? "border-tan bg-cream text-forest placeholder:text-ink-faint focus:ring-white/50 focus:ring-offset-forest-dark"
              : "border-forest bg-cream text-forest placeholder:text-ink-faint focus:ring-forest/40 focus:ring-offset-cream"
          }`}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={
            isDark
              ? "pill-btn shrink-0 bg-forest text-white hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-70"
              : "pill-btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-70"
          }
        >
          {isLoading ? "Subscribing…" : "Subscribe"}
        </button>
        <div
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor={`${emailId}-hp`}>Leave this field blank</label>
          <input
            id={`${emailId}-hp`}
            type="text"
            name="soh_hp"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
      </form>
      <p
        id={errorId}
        role="alert"
        aria-live="assertive"
        className={`mt-2 text-pretty text-sm ${
          error ? (isDark ? "text-white/85" : "text-ink-muted") : "sr-only"
        }`}
      >
        {error ?? ""}
      </p>
    </div>
  );
}
