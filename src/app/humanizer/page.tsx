import type { Metadata } from "next";
import Link from "next/link";
import {
  HUMANIZER_DATE,
  HUMANIZER_DESCRIPTION,
  HUMANIZER_READING_MINUTES,
  HUMANIZER_TITLE,
  HumanizerBody,
} from "@/content/humanizer";
import { formatArticleMeta } from "@/lib/resources";
import { siteConfig } from "@/lib/site";

const canonical = "/humanizer";

export const metadata: Metadata = {
  title: HUMANIZER_TITLE,
  description: HUMANIZER_DESCRIPTION,
  alternates: { canonical },
  openGraph: {
    title: HUMANIZER_TITLE,
    description: HUMANIZER_DESCRIPTION,
    url: canonical,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: HUMANIZER_TITLE,
    description: HUMANIZER_DESCRIPTION,
  },
};

function HumanizerJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: HUMANIZER_TITLE,
    description: HUMANIZER_DESCRIPTION,
    datePublished: HUMANIZER_DATE,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}${canonical}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function HumanizerPage() {
  return (
    <article className="blog-article">
      <HumanizerJsonLd />
      <header className="blog-article-header">
        <p className="blog-article-meta">
          {formatArticleMeta(HUMANIZER_DATE, HUMANIZER_READING_MINUTES)}
        </p>
        <h1 className="blog-article-title">{HUMANIZER_TITLE}</h1>
      </header>

      <div className="prose-nik blog-article-body">
        <HumanizerBody />
      </div>

      <footer className="blog-article-footer">
        <Link href="/" className="blog-article-back">
          ← Home
        </Link>
        <div className="blog-article-ctas">
          <Link href="/newsletter" className="pill-btn-primary">
            Systems Over Hustle
          </Link>
        </div>
      </footer>
    </article>
  );
}
