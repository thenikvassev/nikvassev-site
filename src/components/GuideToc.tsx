"use client";

import { useEffect, useState } from "react";
import type { GuideTocItem } from "@/lib/guides";

type Props = {
  items: GuideTocItem[];
};

export function GuideToc({ items }: Props) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    headings.forEach((heading) => io.observe(heading));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="guide-toc" aria-label="On this page">
      <p className="guide-toc-label">On this page</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
