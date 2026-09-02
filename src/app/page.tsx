import type { Metadata } from "next";
import Link from "next/link";
import { CardLink } from "@/components/CardLink";
import { MediaFrame } from "@/components/MediaFrame";
import { HomeHero } from "@/components/HomeHero";
import { AboutIntro } from "@/components/AboutIntro";
import { TrackRecord } from "@/components/TrackRecord";
import { guides } from "@/lib/resources";
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

      <section className="nv nv-home-block border-t border-tan/40">
        <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <p className="nv-eyebrow">Founder resources</p>
          <h2 className="nv-section-title">Explore my blog and free guides</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
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
          <div className="mt-8">
            <Link href="/resources" className="pill-btn-secondary">
              Resources
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="nv nv-ways scroll-mt-28">
        <p className="nv-ways-eyebrow">What I&apos;m building now</p>
        <h2>Three ways to work with me</h2>
        <div className="nv-ways-grid">
          <article className="nv-ways-card">
            <p className="nv-ways-label">For early-stage startups</p>
            <h3>Guide IQ</h3>
            <p>
              An AI-powered brand strategy engine I built. Give it your inputs,
              get a complete brand strategy and 90-day go-to-market plan in 15
              minutes.
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
            <Link href="/#newsletter">Get the newsletter →</Link>
          </article>
        </div>
      </section>

      <section className="nv nv-speaking">
        <div className="nv-speaking-inner">
          <p className="nv-eyebrow">Speaking and media</p>
          <h2 className="nv-section-title">
            Get in touch for speaking, podcasts and press.
          </h2>
          <div className="nv-speaking-row">
            <MediaFrame
              src="/photos/nik-keynote.png"
              alt="Nik Vassev on stage in a dark suit, holding a microphone during a keynote."
              ratio="photo"
            />
            <div>
              <p className="max-w-reading text-ink-muted">
                I speak on brand strategy, AI visibility and building companies
                that leave room for a life. For podcasts, press or a stage, write
                or send a LinkedIn note.
              </p>
              <p className="mt-4 text-sm text-ink">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-forest underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-2 text-sm">
                <a
                  href={siteConfig.social.linkedin}
                  className="font-medium text-forest underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <div className="mt-6">
                <Link href="/brand-strategy#book" className="pill-btn-primary">
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
