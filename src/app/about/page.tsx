import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nik Vassev is a brand strategist, serial founder, and growth marketer helping entrepreneurs build high-impact companies without burning out.",
  openGraph: {
    title: "About Nik Vassev",
    description:
      "Brand strategist, serial founder, and growth marketer. Systems Over Hustle.",
  },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">About</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        Brand strategy and systems for founders who want freedom.
      </h1>

      <div className="prose-nik mt-10 max-w-reading text-base md:text-lg">
        <p>
          I am Nik Vassev: brand strategist, serial founder, and growth
          marketer. I help entrepreneurs build high-impact companies using brand
          strategy, growth marketing, and AI systems without burning out or
          trading away health, relationships, or life.
        </p>
        <p>
          The through-line is simple. Hustle can get you started. Systems are
          what let a business grow while you stay human. That is the promise
          behind <strong className="font-semibold text-ink">Systems Over Hustle</strong>,
          my weekly newsletter, and the work I do with founders.
        </p>
        <p>
          I founded{" "}
          <a
            href="https://guideiq.ai"
            className="font-medium text-forest underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guide IQ
          </a>
          , an AI Brand Strategist for early-stage companies. I co-founded{" "}
          <a
            href="https://storylinepros.com"
            className="font-medium text-forest underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storyline Pros
          </a>{" "}
          with Cynthia Salarizadeh for later-stage B2B emerging tech that needs
          narrative engineering and AI visibility.
        </p>
        <p>
          Before that I founded Mindleap Health (acquired), co-founded Novobeing
          (therapeutic VR with clinical research partners), raised capital
          across ventures, and worked on enterprise deals with Fortune 500s and
          public brands. I write for Entrepreneur and mentor founders at
          Futurepreneur Canada.
        </p>
        <p>
          I am a Canadian expat with Bulgarian roots, based in{" "}
          {siteConfig.location}. If you want a company that performs and a life
          that still feels like yours, you are in the right place.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/#newsletter" className="pill-btn-primary">
          Subscribe to the newsletter
        </Link>
        <Link href="/brand-strategy#book" className="pill-btn-secondary">
          Book a call
        </Link>
      </div>

      <section className="mt-16 border-t border-tan/40 pt-12">
        <p className="section-label">How I work</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          <li className="card">
            <h2 className="font-sans text-base">Systems Over Hustle</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Build leverage into the business so growth does not require living
              in the grind.
            </p>
          </li>
          <li className="card">
            <h2 className="font-sans text-base">Brand and AI visibility</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Clear Brand DNA early. Credible narrative and citations later when
              buyers ask AI.
            </p>
          </li>
          <li className="card">
            <h2 className="font-sans text-base">Freedom by design</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Success and well-being can coexist. Design the company for that
              outcome from day one.
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
}
