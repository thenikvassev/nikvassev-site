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
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-tight text-ink hover:text-forest"
        >
          Nik Vassev
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-btn px-3 py-1.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-forest text-white"
                    : "text-ink-muted hover:bg-cream hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/#newsletter" className="pill-btn-secondary !py-2 !px-4 text-xs">
            Subscribe
          </Link>
          <Link href="/brand-strategy#book" className="pill-btn-primary !py-2 !px-4 text-xs">
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-btn border border-tan px-3 py-2 text-sm font-semibold text-ink lg:hidden"
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
          className="border-t border-tan/50 bg-white px-5 py-4 lg:hidden"
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
              className="pill-btn-primary text-center"
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
