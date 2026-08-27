"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { editorialEase } from "./motion";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-tan/50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ease-editorial">
      <div className="mx-auto flex max-w-wide items-center justify-between gap-3 overflow-hidden px-5 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="shrink-0 font-serif text-2xl tracking-display text-ink transition-colors duration-300 hover:text-forest md:text-[1.85rem]"
        >
          Nik Vassev
        </Link>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center xl:flex xl:gap-1"
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
                className={`relative rounded-btn px-2.5 py-1.5 text-sm font-semibold transition-colors duration-300 ${
                  nowrap ? "whitespace-nowrap" : ""
                } ${
                  active
                    ? "text-forest"
                    : "text-ink-muted hover:text-forest"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-2.5 -bottom-0.5 h-px bg-forest transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link
            href="/#newsletter"
            className="pill-btn-secondary !px-4 !py-2 text-xs"
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
          className="inline-flex items-center justify-center rounded-btn border border-tan px-3 py-2 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-cream xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            className="overflow-hidden border-t border-tan/50 bg-white xl:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: 0, opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.38, ease: editorialEase }}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-btn px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-cream"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
