import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { jsonLd } from "@/lib/json-ld";
import { formatArticleMeta, type BlogPost } from "@/lib/resources";
import { siteConfig } from "@/lib/site";

type Props = {
  post: BlogPost;
  Body: ComponentType;
};

function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const pageUrl = `${siteConfig.url}/resources/${post.slug}`;
  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: "Nik Vassev",
    url: siteConfig.url,
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: person,
    publisher: person,
    image: `${siteConfig.url}${post.cover}`,
    mainEntityOfPage: pageUrl,
    url: pageUrl,
    ...(post.description ? { description: post.description } : {}),
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
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }}
      />
    </>
  );
}

export function BlogArticle({ post, Body }: Props) {
  const isAnimatedCover = post.cover.endsWith(".gif");

  return (
    <article className="blog-article">
      <BlogPostingJsonLd post={post} />
      <header className="blog-article-header">
        <p className="blog-article-badge">Blog</p>
        <p className="blog-article-meta">
          {formatArticleMeta(post.date, post.readingMinutes)}
        </p>
        <h1 className="blog-article-title">{post.title}</h1>
        <p className="blog-article-dek">{post.excerpt}</p>
      </header>

      <figure className="blog-article-cover">
        <div className="blog-article-cover-frame">
          {isAnimatedCover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.cover} alt={post.coverAlt} />
          ) : (
            <Image
              src={post.cover}
              alt={post.coverAlt}
              width={post.coverWidth ?? 1600}
              height={post.coverHeight ?? 900}
              priority
            />
          )}
        </div>
        {post.coverCaption && (
          <figcaption>{post.coverCaption}</figcaption>
        )}
      </figure>

      <div className="prose-nik blog-article-body">
        <Body />
      </div>

      <footer className="blog-article-footer">
        <Link href="/resources" className="blog-article-back">
          ← Resources
        </Link>
        <div className="blog-article-ctas">
          <a
            href={siteConfig.bookingUrl}
            className="pill-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
          <Link href="/newsletter" className="pill-btn-secondary">
            Get the newsletter
          </Link>
        </div>
      </footer>
    </article>
  );
}
