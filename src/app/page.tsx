import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CardLink } from "@/components/CardLink";
import { MediaFrame } from "@/components/MediaFrame";
import { ClientsRow } from "@/components/ClientsRow";
import { PressRow } from "@/components/PressRow";
import { projects } from "@/lib/projects";
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
      <section className="mx-auto max-w-content px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <p className="section-label">Systems Over Hustle</p>
            <h1 className="mt-4 max-w-2xl text-4xl tracking-display text-ink md:text-5xl">
              Scale revenue with brand strategy, GEO and AI agents.
            </h1>
            <p className="mt-6 max-w-reading text-lg leading-relaxed text-ink-muted">
              Growth marketing, brand strategy and AI visibility for startup founders.
            </p>

            <div id="newsletter" className="mt-10 max-w-lg scroll-mt-28">
              <p className="mb-3 text-sm font-medium text-ink">
                {siteConfig.newsletterPitch}
              </p>
              <NewsletterForm />
              <p className="mt-3 text-xs text-ink-faint">
                Weekly on Thursdays. Unsubscribe anytime.
              </p>
            </div>

            <p className="mt-8 text-sm text-ink-muted">
              Founder of{" "}
              <a
                href="https://guideiq.ai"
                className="font-medium text-forest underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide IQ
              </a>{" "}
              and co-founder of{" "}
              <a
                href="https://storylinepros.com"
                className="font-medium text-forest underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storyline Pros
              </a>
              . Writing at Entrepreneur. Mentoring at Futurpreneur Canada.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <MediaFrame
              src="/photos/nik-hero-portrait.jpg"
              alt="Nik Vassev smiling outdoors in a cream polo and glasses, palms behind him."
              ratio="portrait"
              priority
            />
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              I&apos;m Nik Vassev, a serial founder, brand strategist and growth
              marketer. I help startups scale revenue using modern brand
              strategy, GEO and AI agents.
            </p>
          </div>
        </div>
      </section>

      <PressRow invert />

      <ClientsRow />

      <section className="border-t border-tan/40 bg-cream">
        <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <p className="section-label">Ventures</p>
          <h2 className="mt-3 text-2xl tracking-display md:text-3xl">
            Tools and teams I run today
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <CardLink
              href="/brand-strategy"
              title="Guide IQ"
              benefit="AI Brand Strategist for early-stage founders. Brand DNA, voice and a 90-day GTM in about 15 minutes."
              meta="Brand strategy"
              image="/photos/guide-iq-tablet.png"
              imageAlt="Guide IQ on a tablet"
            />
            <CardLink
              href="/ai-visibility"
              title="Storyline Pros"
              benefit="Narrative engineering and AI visibility for later-stage B2B emerging tech. Performance-based PR with a make-good if a story does not publish."
              meta="AI visibility"
              image="/placeholders/storyline-media.svg"
              imageAlt="Placeholder for Storyline earned media"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <p className="section-label">Selected work</p>
        <h2 className="mt-3 text-2xl tracking-display md:text-3xl">
          Companies I have built and scaled
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <CardLink
              key={p.slug}
              href={`/projects/${p.slug}`}
              title={p.name}
              benefit={p.oneLiner}
              meta={p.status === "active" ? "Active" : "Prior"}
              image={p.image}
              imageAlt={p.imageAlt}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="pill-btn-secondary">
            All projects
          </Link>
        </div>
      </section>

      <section className="border-t border-tan/40">
        <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
          <p className="section-label">Popular guides</p>
          <h2 className="mt-3 text-2xl tracking-display md:text-3xl">
            Start here
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

      <section className="border-t border-tan/40 bg-cream">
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
