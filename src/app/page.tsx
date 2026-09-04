import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CardLink } from "@/components/CardLink";
import { HomeHero } from "@/components/HomeHero";
import { AboutIntro } from "@/components/AboutIntro";
import { TrackRecord } from "@/components/TrackRecord";
import { blogPosts, formatPostMeta, guides } from "@/lib/resources";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Systems Over Hustle`,
  description:
    "Brand strategy, growth marketing and AI visibility for startups scaling revenue with GEO and AI agents.",
  openGraph: {
    title: `${siteConfig.name} | Systems Over Hustle`,
    description:
      "Brand strategy, growth marketing and AI visibility for startups scaling revenue with GEO and AI agents.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutIntro />
      <TrackRecord />

      <section id="work" className="nv nv-ways scroll-mt-28">
        <p className="nv-ways-eyebrow">What I&apos;m building now</p>
        <h2>Three ways to work with me</h2>
        <div className="nv-ways-grid">
          <article className="nv-ways-card">
            <p className="nv-ways-label">For early-stage startups</p>
            <h3>Guide IQ</h3>
            <p>
              Transform your early-stage startup with a complete brand foundation
              and actionable 90-day go-to-market strategy, seamlessly embedded
              into the AI tools you already use every day.
            </p>
            <Link href="/brand-strategy">Build your strategy →</Link>
          </article>
          <article className="nv-ways-card">
            <p className="nv-ways-label">For growth-stage startups</p>
            <h3>Storyline Pros</h3>
            <p>
              My AI visibility and narrative engineering firm, for startups who
              need to become the answer AI search engines recommend in their
              category.
            </p>
            <Link href="/ai-visibility">See how it works →</Link>
          </article>
          <article className="nv-ways-card">
            <p className="nv-ways-label">My weekly newsletter</p>
            <h3>Systems Over Hustle</h3>
            <p>
              Every Thursday, I share one actionable framework on brand
              strategy, growth marketing, AI systems, and building a life you
              don&apos;t need a vacation from.
            </p>
            <Link href="/newsletter">Get the newsletter →</Link>
          </article>
        </div>
      </section>

      <section className="nv nv-home-block nv-resources border-t border-tan/40">
        <div className="nv-resources-inner">
          <p className="nv-eyebrow">Founder resources</p>
          <h2 className="nv-section-title">Explore my blog and free guides</h2>
          <div className="nv-resources-grid">
            {guides.map((g) => (
              <CardLink
                key={g.slug}
                href={g.href}
                title={g.title}
                benefit={g.benefit}
                image={g.image}
                imageAlt={g.imageAlt}
              />
            ))}
          </div>
          <div className="nv-blog-strip">
            <p className="nv-eyebrow">From the blog</p>
            <div className="nv-blog-list">
              {blogPosts.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/${post.slug}`}
                  className="nv-blog-item"
                >
                  <p className="nv-blog-meta">
                    {formatPostMeta(post.date, post.readingMinutes)}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Link>
              ))}
            </div>
            <Link href="/resources" className="nv-resources-more">
              Browse all resources →
            </Link>
          </div>
        </div>
      </section>

      <section className="nv nv-speaking" aria-labelledby="speaking-heading">
        <div className="nv-speaking-photo">
          <Image
            src="/photos/nik-speaker.jpg"
            alt="Nik Vassev on stage with a microphone, presenting a slide on AI content."
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className="nv-speaking-img"
          />
        </div>
        <div className="nv-speaking-card">
          <p className="nv-speaking-eyebrow">Speaker</p>
          <h2 id="speaking-heading">
            Real-World Exits.
            <br />
            Actionable Systems.
            <br />
            Zero Hype.
          </h2>
          <p className="nv-speaking-body">
            Bring Nik to your podcast or stage to break down the exact AI
            workflows, brand strategies, and growth systems he uses to
            actively scale tech startups and build high-impact brands.
          </p>
          <a
            className="nv-speaking-cta"
            href="https://tally.so/r/7RkyqR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Nik
          </a>
        </div>
      </section>
    </>
  );
}