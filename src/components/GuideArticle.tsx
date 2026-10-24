import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { GuideToc } from "@/components/GuideToc";
import type { LongGuide } from "@/lib/guides";
import { formatArticleMeta } from "@/lib/resources";
import { shapeLine } from "@/lib/shape-line";
import { siteConfig } from "@/lib/site";

function GuideJsonLd({ guide }: { guide: LongGuide }) {
  const pageUrl = `${siteConfig.url}${guide.href}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.dateModified ?? guide.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/og/nikvassev-home.png`,
    },
    image: `${siteConfig.url}${guide.ogImage}`,
    mainEntityOfPage: pageUrl,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${siteConfig.url}/resources`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: pageUrl,
      },
    ],
  };
  const faq = guide.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faq ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      ) : null}
    </>
  );
}

type Props = {
  guide: LongGuide;
  Body: ComponentType;
};

export function GuideArticle({ guide, Body }: Props) {
  const shape = guide.slug === "how-to-market-to-ai-agents";
  const title = shape ? shapeLine(guide.title) : guide.title;
  const lede = guide.excerpt ? (shape ? shapeLine(guide.excerpt) : guide.excerpt) : "";

  return (
    <article className="guide-article" data-guide={guide.slug}>
      <GuideJsonLd guide={guide} />
      <header className="guide-hero">
        <p className="guide-badge">Guide</p>
        <p className="guide-meta">
          {formatArticleMeta(guide.date, guide.readingMinutes)}
        </p>
        <h1 className="guide-title">{title}</h1>
        {lede ? <p className="guide-lede">{lede}</p> : null}
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
