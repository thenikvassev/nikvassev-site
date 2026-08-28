"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="bg-white px-4 py-3 text-sm text-forest" role="status">
        Thanks.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3" aria-label="Contact">
      <label htmlFor="contact-name" className="sr-only">
        Name
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        required
        placeholder="Name"
        className="w-full border-0 bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
      />
      <label htmlFor="contact-email" className="sr-only">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className="w-full border-0 bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
      />
      <label htmlFor="contact-message" className="sr-only">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        required
        rows={4}
        placeholder="Message"
        className="w-full resize-none border-0 bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
      />
      <button type="submit" className="rect-btn w-full">
        Submit
      </button>
    </form>
  );
}
