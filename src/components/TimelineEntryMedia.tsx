"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: readonly string[];
  alt: string;
};

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d={
          direction === "prev"
            ? "M10 3.5 5.5 8 10 12.5"
            : "M6 3.5 10.5 8 6 12.5"
        }
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TimelineEntryMedia({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const src = images[index] ?? images[0];

  if (!src) return null;

  function step(delta: number) {
    setIndex((current) => (current + delta + count) % count);
  }

  return (
    <div className="relative w-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-card">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 248px, 216px"
        />
      </div>
      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => step(-1)}
        className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-forest-dark shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        <Chevron direction="prev" />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => step(1)}
        className="absolute right-0 top-1/2 z-10 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-forest-dark shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        <Chevron direction="next" />
      </button>
    </div>
  );
}
