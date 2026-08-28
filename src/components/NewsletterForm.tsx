"use client";

import { FormEvent, useState } from "react";

type Props = {
  variant?: "light" | "dark";
  stacked?: boolean;
};

export function NewsletterForm({ variant = "light", stacked = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("done");
  }

  const isDark = variant === "dark";

  if (status === "done") {
    return (
      <p
        className={`px-4 py-3 text-sm ${
          isDark ? "bg-white/10 text-white" : "bg-cream text-forest"
        }`}
        role="status"
      >
        You&apos;re in. First email hits Thursday.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full gap-3 ${stacked ? "flex-col" : "flex-col sm:flex-row"}`}
      aria-label="Join the newsletter"
    >
      <label htmlFor={`email-${variant}-${stacked ? "stack" : "row"}`} className="sr-only">
        Email address
      </label>
      <input
        id={`email-${variant}-${stacked ? "stack" : "row"}`}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`min-w-0 flex-1 border px-5 py-3 text-sm outline-none focus:ring-2 ${
          isDark
            ? "border-white/25 bg-white/10 text-white placeholder:text-white/50 focus:ring-white/40"
            : "border-tan bg-white text-ink placeholder:text-ink-faint focus:ring-forest/40"
        }`}
      />
      <button
        type="submit"
        className={
          stacked || isDark
            ? "rect-btn w-full shrink-0"
            : "rect-btn shrink-0 sm:w-auto"
        }
      >
        Join the newsletter
      </button>
    </form>
  );
}
