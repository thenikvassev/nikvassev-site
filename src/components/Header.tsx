"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }

    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = [
    "nv nv-header",
    isHome ? "is-home" : "is-inner",
    solid ? "is-solid" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className="nv-header-bar">
          <Link href="/" className="nv-wordmark" onClick={() => setOpen(false)}>
            <span className="nv-mark" aria-hidden>
              ✻
            </span>
            <span className="nv-word-first">Nik</span>
            <span className="nv-word-last">Vassev</span>
          </Link>

          <nav aria-label="Primary" className="nv-links">
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
                  className={`${active ? "is-active" : ""}${
                    nowrap ? " is-nowrap" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="nv-header-right">
            <Link href="https://tally.so/r/QKQbBk" className="nv-cta" target="_blank" rel="noopener noreferrer">
              Let&apos;s Talk
              <ArrowIcon />
            </Link>
            <button
              type="button"
              className={`nv-burger${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`nv-panel${open ? " is-open" : ""}`}
          hidden={!open}
        >
          <nav aria-label="Mobile">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "is-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      {!isHome && <div className="nv-nav-spacer" aria-hidden />}
    </>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 12L12 4M6.5 4H12v5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
