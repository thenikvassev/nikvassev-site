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

      <section className="border-t border-tan/40">
        <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <p className="section-label">Founder resources</p>
          <h2 className="mt-3 text-2xl tracking-display md:text-3xl">
            Explore my blog and free guides
          </h2>
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

      <section id="work" className="scroll-mt-28 border-t border-tan/40 bg-cream">
        <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <p className="section-label">Work together</p>
          <h2 className="mt-3 max-w-xl text-2xl tracking-display md:text-3xl">
            Two clear lanes. Pick the stage you are in.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card">
              <p className="section-label">Early stage</p>
              <h3 className="mt-3 text-lg">Brand strategy</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Guide IQ plus strategist coaching. Get clear Brand DNA and a
                plan you can run with the AI tools you already use.
              </p>
              <Link
                href="/brand-strategy"
                className="mt-5 inline-block text-sm font-medium text-forest"
              >
                Explore brand strategy →
              </Link>
            </div>
            <div className="card">
              <p className="section-label">Later stage B2B</p>
              <h3 className="mt-3 text-lg">AI visibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Storyline Pros. Narrative engineering and earned media so AI
                systems can cite your company when buyers and investors ask.
              </p>
              <Link
                href="/ai-visibility"
                className="mt-5 inline-block text-sm font-medium text-forest"
              >
                Explore AI visibility →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <p className="section-label">Speaking and media</p>
        <h2 className="mt-3 max-w-xl text-2xl tracking-display md:text-3xl">
          Get in touch for speaking, podcasts and press.
        </h2>
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
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
            <MediaFrame
              src="/placeholders/speaking-media.svg"
              alt="Placeholder for a podcast or press photo"
              ratio="wide"
              className="mt-6"
            />
          </div>
        </div>
      </section>
    </>
  );
}
