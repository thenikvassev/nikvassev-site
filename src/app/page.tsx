import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CardLink } from "@/components/CardLink";
import { MediaFrame } from "@/components/MediaFrame";
import { ClientsRow } from "@/components/ClientsRow";
import { PressRow } from "@/components/PressRow";
import {
  HeroItem,
  HeroStagger,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
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
      <section className="relative overflow-hidden">
        <div
          className="editorial-lines pointer-events-none absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="section-shell relative pb-20 pt-16 md:pb-28 md:pt-24">
          <HeroStagger className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <HeroItem>
                <p className="section-label">Systems Over Hustle</p>
                <h1 className="mt-5 max-w-3xl text-4xl leading-[1.15] tracking-display text-ink md:text-6xl md:leading-[1.12] lg:text-[4.25rem]">
                  Scale revenue with brand strategy, GEO and AI agents.
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="mt-7 max-w-reading text-lg leading-relaxed text-ink-muted md:text-xl">
                  Growth marketing, brand strategy and AI visibility for startup
                  founders.
                </p>
              </HeroItem>

              <HeroItem>
                <div id="newsletter" className="mt-10 max-w-lg scroll-mt-28">
                  <p className="mb-3 text-sm font-medium text-ink">
                    {siteConfig.newsletterPitch}
                  </p>
                  <NewsletterForm />
                  <p className="mt-3 text-xs text-ink-faint">
                    Weekly on Thursdays. Unsubscribe anytime.
                  </p>
                </div>
              </HeroItem>

              <HeroItem>
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
              </HeroItem>
            </div>

            <HeroItem>
              <div className="mx-auto w-full max-w-sm lg:max-w-none">
                <MediaFrame
                  src="/photos/nik-hero-portrait.jpg"
                  alt="Nik Vassev smiling outdoors in a cream polo and glasses, palms behind him."
                  ratio="portrait"
                  priority
                />
                <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
                  I&apos;m Nik Vassev, a serial founder, brand strategist and
                  growth marketer. I help startups scale revenue using modern
                  brand strategy, GEO and AI agents.
                </p>
              </div>
            </HeroItem>
          </HeroStagger>
        </div>
      </section>

      <PressRow invert />

      <ClientsRow />

      <section className="border-t border-tan bg-cream">
        <div className="section-shell section-pad">
          <Reveal>
            <p className="section-label">Ventures</p>
            <h2 className="mt-4 text-3xl tracking-display md:text-4xl lg:text-5xl">
              Tools and teams I run today
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2" delay={0.05}>
            <StaggerItem>
              <CardLink
                href="/brand-strategy"
                title="Guide IQ"
                benefit="AI Brand Strategist for early-stage founders. Brand DNA, voice and a 90-day GTM in about 15 minutes."
                meta="Brand strategy"
                image="/photos/guide-iq-tablet.png"
                imageAlt="Guide IQ on a tablet"
              />
            </StaggerItem>
            <StaggerItem>
              <CardLink
                href="/ai-visibility"
                title="Storyline Pros"
                benefit="Narrative engineering and AI visibility for later-stage B2B emerging tech. Performance-based PR with a make-good if a story does not publish."
                meta="AI visibility"
                image="/placeholders/storyline-media.svg"
                imageAlt="Placeholder for Storyline earned media"
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="section-shell section-pad">
        <Reveal>
          <p className="section-label">Selected work</p>
          <h2 className="mt-4 text-3xl tracking-display md:text-4xl lg:text-5xl">
            Companies I have built and scaled
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2" delay={0.04}>
          {projects.map((p) => (
            <StaggerItem key={p.slug}>
              <CardLink
                href={`/projects/${p.slug}`}
                title={p.name}
                benefit={p.oneLiner}
                meta={p.status === "active" ? "Active" : "Prior"}
                image={p.image}
                imageAlt={p.imageAlt}
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10" delay={0.08}>
          <Link href="/projects" className="pill-btn-secondary">
            All projects
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-tan">
        <div className="section-shell section-pad">
          <Reveal>
            <p className="section-label">Popular guides</p>
            <h2 className="mt-4 text-3xl tracking-display md:text-4xl lg:text-5xl">
              Start here
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" delay={0.04}>
            {guides.map((g) => (
              <StaggerItem key={g.slug}>
                <CardLink
                  href={g.href}
                  title={g.title}
                  benefit={g.benefit}
                  image={g.image}
                  imageAlt={g.imageAlt}
                />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10" delay={0.08}>
            <Link href="/resources" className="pill-btn-secondary">
              Resources
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-tan bg-cream">
        <div className="section-shell section-pad">
          <Reveal>
            <p className="section-label">Work together</p>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-display md:text-4xl lg:text-5xl">
              Two clear lanes. Pick the stage you are in.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2" delay={0.05}>
            <StaggerItem>
              <div className="card-lift h-full p-7 md:p-8">
                <p className="section-label">Early stage</p>
                <h3 className="mt-4 text-xl">Brand strategy</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  Guide IQ plus strategist coaching. Get clear Brand DNA and a
                  plan you can run with the AI tools you already use.
                </p>
                <Link
                  href="/brand-strategy"
                  className="mt-6 inline-block text-sm font-medium text-forest"
                >
                  Explore brand strategy →
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card-lift h-full p-7 md:p-8">
                <p className="section-label">Later stage B2B</p>
                <h3 className="mt-4 text-xl">AI visibility</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  Storyline Pros. Narrative engineering and earned media so AI
                  systems can cite your company when buyers and investors ask.
                </p>
                <Link
                  href="/ai-visibility"
                  className="mt-6 inline-block text-sm font-medium text-forest"
                >
                  Explore AI visibility →
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="section-shell section-pad">
        <Reveal>
          <p className="section-label">Speaking and media</p>
          <h2 className="mt-4 max-w-2xl text-3xl tracking-display md:text-4xl lg:text-5xl">
            Get in touch for speaking, podcasts and press.
          </h2>
        </Reveal>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <MediaFrame
              src="/photos/nik-keynote.png"
              alt="Nik Vassev on stage in a dark suit, holding a microphone during a keynote."
              ratio="photo"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="max-w-reading text-ink-muted md:text-lg">
                I speak on brand strategy, AI visibility and building companies
                that leave room for a life. For podcasts, press or a stage, write
                or send a LinkedIn note.
              </p>
              <p className="mt-5 text-sm text-ink">
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
              <div className="mt-7">
                <Link href="/brand-strategy#book" className="pill-btn-primary">
                  Book a call
                </Link>
              </div>
              <MediaFrame
                src="/placeholders/speaking-media.svg"
                alt="Placeholder for a podcast or press photo"
                ratio="wide"
                className="mt-8"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
