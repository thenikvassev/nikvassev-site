import type { Metadata } from "next";

/**
 * Next.js App Router shallow-merges metadata. A child `openGraph: { title }`
 * block replaces the parent `openGraph` object, so inherited `images` are
 * dropped unless every child sets them again. Same for `twitter.images`.
 */

export type OgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

const OG_SIZE = { width: 1200, height: 630 } as const;

export function ogImage(url: string, alt: string): OgImage {
  return { url, ...OG_SIZE, alt };
}

export const defaultOgImage = ogImage(
  "/og/default.jpg",
  "Nik Vassev — Brand Strategist for Visionary Startups",
);

export const newsletterOgImage = ogImage(
  "/og/newsletter.jpg",
  "Systems Over Hustle — practical tools and strategies for growing your startup",
);

export function withOgImages(
  metadata: Metadata,
  image: OgImage = defaultOgImage,
): Metadata {
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
      images: [image.url],
    },
  };
}
