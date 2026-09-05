import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";

export const metadata: Metadata = {
  title: "Brand Strategy",
  description:
    "Complete brand strategy and go-to-market clarity in 15 minutes. Brand foundation and a 90-day GTM plan embedded in the AI tools you already use.",
  openGraph: {
    title: "Brand Strategy | Nik Vassev",
    description:
      "Complete brand strategy and go-to-market clarity in 15 minutes for early-stage startups.",
  },
};

export default function BrandStrategyPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">Brand Strategy · Guide IQ</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        Complete brand strategy and go-to-market clarity in 15 minutes.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        Transform your early-stage startup with a complete brand foundation and
        actionable 90-day go-to-market strategy, seamlessly embedded into the AI
        tools you already use every day.
      </p>

      <MediaFrame
        src="/photos/guide-iq-product-ui.png"
        alt="Guide IQ Brand Soul workspace with tone calibration, personality dials, and brand colors."
        ratio="video"
        className="mt-12"
      />

      <div className="mt-8">
        <a
          href="https://guideiq.ai"
          className="pill-btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build your brand strategy with Guide IQ
        </a>
      </div>

      <section className="nv mt-16">
        <p className="section-label">What Guide IQ builds</p>
        <div className="nv-ways-grid">
          <article className="nv-ways-card">
            <h3>Brand DNA</h3>
            <p>
              Positioning, messaging, UVP and buyer personas from a focused set
              of founder inputs. The foundation every output is built on.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Brand Soul</h3>
            <p>
              Tone, personality, point of view and visual identity. Calibration
              so AI output stops sounding generic.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>90-day GTM</h3>
            <p>
              A growth plan with campaigns, playbooks and a tool stack matched
              to your stage and budget.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Marketing skills</h3>
            <p>
              Frameworks across content, copy, email, SEO, AI search, outreach,
              paid ads and PR. Judgment you can reuse, not a one-off prompt.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Loads into your AI</h3>
            <p>
              Claude MCP loads automatically. ChatGPT and Gemini take a custom
              GPT or Gem. You keep the asset.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>You stay in charge</h3>
            <p>
              Guide IQ is not an unsupervised campaign agent. It gives your AI
              the brand context it is missing. You still decide what ships.
            </p>
          </article>
        </div>
      </section>

      <section className="nv mt-14">
        <p className="section-label">How a Brand Brain gets made</p>
        <div className="nv-ways-grid">
          <article className="nv-ways-card">
            <p className="nv-ways-label">01</p>
            <h3>Answer</h3>
            <p>
              Walk through twelve questions about the business, the buyers and
              where you are headed. No marketing background needed.
            </p>
          </article>
          <article className="nv-ways-card">
            <p className="nv-ways-label">02</p>
            <h3>Refine</h3>
            <p>
              Review what Guide IQ builds and adjust until it sounds like you.
            </p>
          </article>
          <article className="nv-ways-card">
            <p className="nv-ways-label">03</p>
            <h3>Load</h3>
            <p>Drop the Brand Brain into Claude, ChatGPT or Gemini.</p>
          </article>
          <article className="nv-ways-card">
            <p className="nv-ways-label">04</p>
            <h3>Prompt as usual</h3>
            <p>
              Ask for a post, an email or a campaign. The output stays on brand
              because the context is already there.
            </p>
          </article>
        </div>
      </section>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <MediaFrame
          src="/photos/guide-iq-strategy-ui.jpg"
          alt="Guide IQ Strategy workspace with campaign cards for pilot acquisition and webinar launch."
          ratio="video"
        />
        <MediaFrame
          src="/photos/guide-iq-brand-dna-ui.jpg"
          alt="Guide IQ Brand DNA workspace with ICP analysis cards and messaging tone guide."
          ratio="video"
        />
      </div>

      <section className="mt-16 panel-invert px-6 py-10 md:px-10">
        <h2 className="text-2xl tracking-display">Get started with Guide IQ</h2>
        <p className="mt-3 max-w-lg text-white/75">
          Complete brand strategy and go-to-market clarity in 15 minutes. Visit
          guideiq.ai.
        </p>
        <div className="mt-6">
          <a
            href="https://guideiq.ai"
            className="pill-btn bg-cream text-forest hover:bg-forest hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started with Guide IQ
          </a>
        </div>
      </section>

      <p className="mt-10 text-sm text-ink-muted">
        Later-stage and need AI visibility instead?{" "}
        <Link
          href="/ai-visibility"
          className="font-medium text-forest underline underline-offset-4"
        >
          See Storyline Pros
        </Link>
        .
      </p>
    </div>
  );
}
