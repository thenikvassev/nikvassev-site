import type { Metadata } from "next";
import Link from "next/link";
import { CardLink } from "@/components/CardLink";
import { NewsletterForm } from "@/components/NewsletterForm";
import { blogPosts, guides } from "@/lib/resources";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Systems Over Hustle newsletter, guides, and writing for founders building with brand strategy and practical AI systems.",
  openGraph: {
    title: "Resources | Nik Vassev",
    description: "Newsletter, guides, and sample posts from Systems Over Hustle.",
  },
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">Resources</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        Tools and writing for founders who want systems.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        {siteConfig.newsletterOneLiner}
      </p>

      <section className="mt-12 rounded-2xl border border-tan/40 bg-white p-6 md:p-8">
        <p className="section-label">Newsletter</p>
        <h2 className="mt-3 text-xl">{siteConfig.newsletter}</h2>
        <p className="mt-2 max-w-lg text-sm text-ink-muted">
          Weekly on Thursdays. Practical tools and strategies. No hustle worship.
        </p>
        <div className="mt-5 max-w-md">
          <NewsletterForm />
        </div>
      </section>

      <section className="mt-16">
        <p className="section-label">Guides</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guides.map((g) => (
            <CardLink
              key={g.slug}
              href={g.href}
              title={g.title}
              benefit={g.benefit}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="section-label">From the blog</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <CardLink
              key={post.slug}
              href={`/resources/${post.slug}`}
              title={post.title}
              benefit={post.excerpt}
              meta={`${post.date} · ${post.readingMinutes} min`}
            />
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-faint">
          Sample posts for the reposition. More writing to come. Bylines at
          Entrepreneur may be linked here later.
        </p>
      </section>

      <section className="mt-16">
        <p className="section-label">Offers</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <CardLink
            href="/brand-strategy"
            title="Brand strategy"
            benefit="Guide IQ and coaching for early-stage brand clarity."
          />
          <CardLink
            href="/ai-visibility"
            title="AI visibility"
            benefit="Storyline Pros for later-stage B2B emerging tech."
          />
        </div>
      </section>

      <p className="mt-12 text-sm">
        <Link href="/" className="font-medium text-forest">
          ← Home
        </Link>
      </p>
    </div>
  );
}
