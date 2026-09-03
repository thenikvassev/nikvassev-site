import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CardLink } from "@/components/CardLink";
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

      <section className="nv nv-speaking" aria-labelledby="speaking-heading">
        <div className="nv-speaking-photo">
          <Image
            src="/photos/nik-speaker.jpg"
            alt="Nik Vassev on stage with a microphone, presenting a slide on AI content."
            fill
            sizes="(min-width: 900px) 58vw, 100vw"
            className="nv-speaking-img"
          />
        </div>
        <div className="nv-speaking-card">
          <p className="nv-speaking-eyebrow">Speaker</p>
          <h2 id="speaking-heading">
            Real-World Exits. Actionable Systems. Zero Hype.
          </h2>
          <p className="nv-speaking-body">
            Bring Nik to your podcast or stage to break down the exact AI
            workflows, brand strategies, and growth systems he uses to
            actively scale tech startups and build high-impact brands.
          </p>
          <p className="nv-speaking-contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <a
            className="nv-speaking-cta"
            href={`mailto:${siteConfig.email}`}
          >
            Hire Nik to speak →
          </a>
        </div>
      </section>
    </>
  );
}
