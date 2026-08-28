"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={
        home
          ? "absolute inset-x-0 top-0 z-50"
          : "relative z-50 border-b border-tan/50 bg-white"
      }
    >
      <div
        className={`mx-auto flex max-w-[88rem] items-center justify-between px-5 md:px-8 ${
          home ? "h-[134px]" : "h-16"
        }`}
      >
        <Link
          href="/"
          className="shrink-0 font-serif text-xl tracking-display text-ink md:text-2xl"
        >
          Nik Vassev
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {siteConfig.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-semibold uppercase tracking-section transition-colors ${
                  active ? "text-forest" : "text-ink-muted hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-ink" />
          <span className="block h-px w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[60] flex flex-col bg-forest-dark"
        >
          <div className="flex h-[134px] items-center justify-between px-5">
            <Link
              href="/"
              className="font-serif text-xl tracking-display text-white"
              onClick={() => setOpen(false)}
            >
              Nik Vassev
            </Link>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center text-2xl leading-none text-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-6 text-[11px] font-semibold uppercase tracking-section text-white/70">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
