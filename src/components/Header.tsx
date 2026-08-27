"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tan/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-3 overflow-hidden px-5 py-4 md:px-8">
        <Link
          href="/"
          className="shrink-0 font-serif text-2xl tracking-display text-ink hover:text-forest md:text-[1.85rem]"
        >
          Nik Vassev
        </Link>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center xl:flex xl:gap-6"
        >
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const nowrap = "nowrap" in item && item.nowrap;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-semibold uppercase tracking-section transition-colors ${
                  nowrap ? "whitespace-nowrap" : ""
                } ${
                  active
                    ? "text-forest underline decoration-tan underline-offset-8"
                    : "text-ink-muted hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <Link
            href="/#newsletter"
            className="text-[11px] font-semibold uppercase tracking-section text-ink-muted hover:text-forest"
          >
            Subscribe
          </Link>
          <Link
            href="/brand-strategy#book"
            className="pill-btn-primary whitespace-nowrap !px-4 !py-2 text-xs"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-btn border border-tan px-3 py-2 text-sm font-semibold text-ink xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-tan/50 bg-white px-5 py-4 xl:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-btn px-3 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#newsletter"
              className="mt-2 pill-btn-secondary text-center"
              onClick={() => setOpen(false)}
            >
              Subscribe
            </Link>
            <Link
              href="/brand-strategy#book"
              className="pill-btn-primary text-center whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
