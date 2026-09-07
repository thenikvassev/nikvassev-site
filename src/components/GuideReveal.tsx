"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function isNearViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 1.2 && rect.bottom > 0;
}

export function GuideReveal({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("is-in");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    if (isNearViewport(el)) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 20% 0px" },
    );

    io.observe(el);

    const fallback = window.setTimeout(() => {
      reveal();
      io.disconnect();
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className={`guide-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
