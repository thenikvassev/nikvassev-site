import type { Metadata } from "next";
import Link from "next/link";
import { getPost } from "@/lib/resources";
import { notFound } from "next/navigation";

const post = getPost("brand-before-channels");

export const metadata: Metadata = {
  title: post?.title ?? "Brand before channels",
  description: post?.excerpt,
  openGraph: {
    title: post?.title,
    description: post?.excerpt,
  },
};

export default function BrandBeforeChannelsPost() {
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">
        Blog · {post.date} · {post.readingMinutes} min
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl tracking-display md:text-4xl">
        {post.title}
      </h1>
      <div className="prose-nik mt-10 max-w-reading">
        <p>
          Channel tips are everywhere. Posting cadence. Hook formulas. Ad
          creative swaps. Useful later. Expensive early if your brand foundation
          is fuzzy.
        </p>
        <p>
          When positioning is unclear, every LinkedIn post becomes a debate.
          Every landing page rewrite starts from scratch. AI tools make the
          problem louder because they will happily generate fluent copy that
          still does not sound like you or speak to the right buyer.
        </p>
        <p>
          Brand before channels means locking Brand DNA first: who you serve,
          what you stand for, how you sound, and what offer sits at the center.
          Then load that context into the tools you already use. Output gets
          cheaper. Decisions get faster. Campaigns stop fighting each other.
        </p>
        <p>
          That sequence is why Guide IQ exists. Fifteen focused minutes of
          inputs beat months of random prompting. Once the foundation is solid,
          channels become execution instead of therapy.
        </p>
      </div>
      <div className="mt-10">
        <Link href="/brand-strategy" className="pill-btn-primary">
          Explore brand strategy
        </Link>
      </div>
      <p className="mt-12">
        <Link href="/resources" className="text-sm font-medium text-forest">
          ← Resources
        </Link>
      </p>
    </article>
  );
}
