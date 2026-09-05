"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function HomeHero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const media = mediaRef.current;
    const badge = badgeRef.current;
    if (!media) return;

    const isBadgeVisible = (el: HTMLElement | null): el is HTMLElement =>
      !!el && el.getClientRects().length > 0;

    const onScroll = () => {
      if (reduceMotion.current) return;
      const y = window.scrollY;
      media.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
      if (isBadgeVisible(badge)) {
        badge.style.transform = `translate3d(0, ${y * 0.05}px, 0)`;
      }
    };

    if (reduceMotion.current) {
      return;
    }

    const mark = document.querySelector<HTMLElement>(".nv-mark");
    if (mark && isBadgeVisible(badge) && window.scrollY < 8) {
      const markBox = mark.getBoundingClientRect();
      const restBox = badge.getBoundingClientRect();
      const fromX =
        markBox.left + markBox.width / 2 - (restBox.left + restBox.width / 2);
      const fromY =
        markBox.top + markBox.height / 2 - (restBox.top + restBox.height / 2);
      badge.style.transition = "none";
      badge.style.transform = `translate3d(${fromX}px, ${fromY}px, 0) scale(0.18)`;
      requestAnimationFrame(() => {
        badge.style.transition =
          "transform 0.95s cubic-bezier(0.22, 1, 0.36, 1)";
        badge.style.transform = "translate3d(0, 0, 0) scale(1)";
      });
      window.setTimeout(() => {
        badge.style.transition = "";
      }, 1000);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="nv nv-hero" aria-label="Introduction">
      <div className="nv-hero-media" ref={mediaRef}>
        <Image
          src="/photos/nik-hero-mobile.jpg"
          alt="Nik Vassev in a cream sweater, looking at the camera against a sunlit studio wall."
          fill
          priority
          sizes="100vw"
          className="nv-hero-photo nv-hero-photo--mobile"
        />
        <Image
          src="/photos/nik-hero-desktop.jpg"
          alt="Nik Vassev walking across a stage with a microphone, a glowing screen behind him."
          fill
          priority
          sizes="100vw"
          className="nv-hero-photo nv-hero-photo--desktop"
        />
      </div>
      <div className="nv-hero-overlay" />

      <div className="nv-hero-stage">
        <div className="nv-hero-panel">
          <Link
            href="/about"
            className="nv-badge"
            ref={badgeRef}
            aria-label="About"
          >
            <svg className="nv-badge-spin" viewBox="0 0 200 200" aria-hidden>
              <defs>
                <path
                  id="nv-badge-circle"
                  d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontSize="13.2"
                fontFamily="var(--font-inter), system-ui, sans-serif"
                letterSpacing="3.2"
              >
                <textPath href="#nv-badge-circle">
                  BRAND STRATEGIST * GROWTH MARKETER * BRAND STRATEGIST *
                  GROWTH MARKETER *
                </textPath>
              </text>
            </svg>
            <div className="nv-badge-core" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          <div className="nv-hero-copy">
            <h1 className="nv-hero-name">
              <span className="first">Nik</span>
              <span className="last">Vassev</span>
            </h1>
            <p className="nv-hero-tagline">
              <span className="founder">Serial Founder · </span>
              Brand Strategist · Growth Marketer
            </p>
            <p className="nv-hero-seen">
              <strong>As Seen In</strong>
              <span className="nv-hero-press">
                <span className="press-forbes">Forbes</span>
                <span className="press-guardian">The Guardian</span>
                <span className="press-entrepreneur">Entrepreneur</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <a className="nv-scroll" href="#about">
        <span>Scroll</span>
      </a>
    </section>
  );
}
