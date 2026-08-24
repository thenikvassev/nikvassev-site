import type { Metadata } from "next";
import Link from "next/link";
import { getPost } from "@/lib/resources";
import { notFound } from "next/navigation";

const post = getPost("systems-over-hustle");

export const metadata: Metadata = {
  title: post?.title ?? "Systems Over Hustle",
  description: post?.excerpt,
  openGraph: {
    title: post?.title,
    description: post?.excerpt,
  },
};

export default function SystemsOverHustlePost() {
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
          Most founders I meet are not short on effort. They are short on
          systems that turn effort into something repeatable. The grind feels
          productive until you notice the company only moves when you personally
          push every lever.
        </p>
        <p>
          Hustle has a season. Early days often need raw output. The trap is
          treating that season as a permanent identity. If growth only happens
          when you are online, you do not have a company yet. You have a job
          with extra anxiety.
        </p>
        <p>
          Systems Over Hustle is the shift: brand clarity so messaging does not
          reinvent itself every week, growth loops you can hand off, and AI
          workflows that carry context instead of starting from zero. Freedom is
          not a vacation. It is a design choice.
        </p>
        <p>
          If you want a business that can run without you glued to every task,
          start by naming the work only you should do, then build tools and
          rituals for everything else. That is the work behind Guide IQ, the
          newsletter, and how I coach founders.
        </p>
      </div>
      <p className="mt-12">
        <Link href="/resources" className="text-sm font-medium text-forest">
          ← Resources
        </Link>
      </p>
    </article>
  );
}
