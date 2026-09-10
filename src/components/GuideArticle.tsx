import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { GuideToc } from "@/components/GuideToc";
import type { LongGuide } from "@/lib/guides";
import { formatArticleMeta } from "@/lib/resources";
import { articleShareImage, siteConfig } from "@/lib/site";

function GuideJsonLd({ guide }: { guide: LongGuide }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: articleShareImage(guide.cover, guide.coverAlt).url,
    mainEntityOfPage: `${siteConfig.url}${guide.href}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

type Props = {
  guide: LongGuide;
  Body: ComponentType;
};

export function GuideArticle({ guide, Body }: Props) {
  return (
    <article className="guide-article">
      <GuideJsonLd guide={guide} />
      <header className="guide-hero">
        <p className="guide-badge">Guide</p>
        <p className="guide-meta">
          {formatArticleMeta(guide.date, guide.readingMinutes)}
        </p>
        <h1 className="guide-title">{guide.title}</h1>
        <p className="guide-lede">{guide.excerpt}</p>
        <figure className="guide-cover">
          <div className="guide-cover-frame">
            <Image
              src={guide.cover}
              alt={guide.coverAlt}
              width={1600}
              height={900}
              priority
            />
          </div>
        </figure>
        <a className="guide-scroll" href={`#${guide.toc[0]?.id ?? "what-is-an-agent"}`}>
          <span>Read the guide</span>
        </a>
      </header>

      <GuideToc items={guide.toc} />

      <div className="guide-body">
        <Body />
      </div>

      <footer className="guide-footer">
        <Link href="/resources" className="guide-back">
          ← Resources
        </Link>
        <div className="guide-footer-ctas">
          <a
            href="https://guideiq.ai"
            className="pill-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guide IQ
          </a>
          <Link href="/newsletter" className="pill-btn-secondary">
            {siteConfig.newsletter}
          </Link>
        </div>
      </footer>
    </article>
  );
}
