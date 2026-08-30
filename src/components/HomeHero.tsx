"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HomeHero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion.current) return;

    const media = mediaRef.current;
    const badge = badgeRef.current;
    if (!media || !badge) return;

    const onScroll = () => {
      const y = window.scrollY;
      media.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;

      const mark = document.querySelector<HTMLElement>(".nv-mark");
      if (!mark) return;
      badge.style.transform = "none";
      const markBox = mark.getBoundingClientRect();
      const restBox = badge.getBoundingClientRect();
      const progress = Math.min(1, y / 280);
      const eased = 1 - (1 - progress) ** 3;
      const fromX =
        markBox.left + markBox.width / 2 - (restBox.left + restBox.width / 2);
      const fromY =
        markBox.top + markBox.height / 2 - (restBox.top + restBox.height / 2);
      const x = fromX * (1 - eased);
      const yMove = fromY * (1 - eased);
      const scale = 0.18 + 0.82 * eased;
      badge.style.transform = `translate3d(${x}px, ${yMove}px, 0) scale(${scale})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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

      <div className="nv-badge" ref={badgeRef} aria-hidden>
        <svg className="nv-badge-spin" viewBox="0 0 200 200">
          <defs>
            <path
              id="nv-badge-circle"
              d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
            />
          </defs>
          <text
            fill="currentColor"
            fontSize="13.2"
            fontFamily="var(--nv-sans), system-ui, sans-serif"
            letterSpacing="3.2"
          >
            <textPath href="#nv-badge-circle">
              SERIAL FOUNDER * BRAND STRATEGIST * GROWTH MARKETER *
            </textPath>
          </text>
        </svg>
        <div className="nv-badge-core">
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
      </div>

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
          Forbes · The Guardian · Entrepreneur
        </p>
      </div>

      <a className="nv-scroll" href="#about">
        Scroll
      </a>
    </section>
  );
}
