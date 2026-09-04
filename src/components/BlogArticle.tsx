import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { formatPostMeta, type BlogPost } from "@/lib/resources";

type Props = {
  post: BlogPost;
  Body: ComponentType;
};

export function BlogArticle({ post, Body }: Props) {
  const isAnimatedCover = post.cover.endsWith(".gif");

  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">
        Blog · {formatPostMeta(post.date, post.readingMinutes)}
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl tracking-display md:text-4xl">
        {post.title}
      </h1>

      <figure className="mt-10">
        {isAnimatedCover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt={post.coverAlt}
            className="w-full rounded-card border border-tan/40"
          />
        ) : (
          <Image
            src={post.cover}
            alt={post.coverAlt}
            width={1600}
            height={900}
            priority
            className="h-auto w-full rounded-card border border-tan/40"
          />
        )}
        {post.coverCaption && (
          <figcaption className="mt-3 text-center text-sm text-ink-faint">
            {post.coverCaption}
          </figcaption>
        )}
      </figure>

      <div className="prose-nik mt-10 max-w-reading">
        <Body />
      </div>

      {post.sourceUrl && (
        <p className="mt-10 text-sm text-ink-faint">
          Originally published on{" "}
          <a
            href={post.sourceUrl}
            className="font-medium text-forest underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nik&apos;s Scribbles
          </a>
          .
        </p>
      )}

      <p className="mt-12">
        <Link href="/resources" className="text-sm font-medium text-forest">
          ← Resources
        </Link>
      </p>
    </article>
  );
}
