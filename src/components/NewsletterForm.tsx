"use client";

import { FormEvent, useState } from "react";

type Props = {
  variant?: "light" | "dark";
};

export function NewsletterForm({ variant = "light" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Placeholder: wire to ESP later
    setStatus("done");
  }

  const isDark = variant === "dark";

  if (status === "done") {
    return (
      <p
        className={`rounded-btn px-4 py-3 text-sm ${
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
      className="flex w-full flex-col gap-3 sm:flex-row"
      aria-label="Join the newsletter"
    >
      <label htmlFor={`email-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`email-${variant}`}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`min-w-0 flex-1 rounded-btn border px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-offset-1 ${
          isDark
            ? "border-white/25 bg-white/10 text-white placeholder:text-white/50 focus:ring-white/40 focus:ring-offset-forest-dark"
            : "border-tan bg-white text-ink placeholder:text-ink-faint focus:ring-forest/40 focus:ring-offset-white"
        }`}
      />
      <button
        type="submit"
        className={
          isDark
            ? "pill-btn shrink-0 bg-white text-forest hover:bg-cream"
            : "pill-btn-primary shrink-0"
        }
      >
        Join the newsletter
      </button>
    </form>
  );
}
