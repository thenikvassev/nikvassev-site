"use client";

import { FormEvent, useRef, useState } from "react";
import { NitrosendPublicError } from "@nitrosend/sdk/browser";
import { NEWSLETTER_LIST_ID, nitro } from "@/lib/nitrosend";

type Props = {
  variant?: "light" | "dark";
};

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function NewsletterForm({ variant = "light" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const submittingRef = useRef(false);

  const isDark = variant === "dark";
  const isLoading = status === "loading";
  const emailId = `email-${variant}`;
  const errorId = `${emailId}-error`;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submittingRef.current) return;

    const trimmed = email.trim();
    if (!trimmed || !isValidEmail(trimmed)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    submittingRef.current = true;
    setStatus("loading");
    setError(null);

    try {
      await nitro.contacts.signup({
        listId: NEWSLETTER_LIST_ID,
        email: trimmed,
      });
      setEmail("");
      setError(null);
      setStatus("success");
    } catch (err) {
      const message =
        err instanceof NitrosendPublicError && err.message
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <p
        className={`rounded-full px-4 py-3 text-sm ${
          isDark ? "bg-cream text-forest" : "bg-forest text-white"
        }`}
        role="status"
        aria-live="polite"
      >
        Thanks. You are on the list for Systems Over Hustle.
      </p>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
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
          onChange={(e) => {
            setEmail(e.target.value);
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
      </form>
      <p
        id={errorId}
        role="alert"
        aria-live="assertive"
        className={`mt-2 text-sm ${
          error ? (isDark ? "text-white/85" : "text-ink-muted") : "sr-only"
        }`}
      >
        {error ?? ""}
      </p>
    </div>
  );
}
