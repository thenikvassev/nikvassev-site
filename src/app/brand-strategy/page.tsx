import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Strategy",
  description:
    "Early-stage brand strategy with Guide IQ and coaching from Nik Vassev. Brand DNA, voice, and a 90-day GTM you can run.",
  openGraph: {
    title: "Brand Strategy | Nik Vassev",
    description:
      "Guide IQ plus strategist coaching for founders who need clarity before they scale.",
  },
};

export default function BrandStrategyPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">Brand Strategy · Guide IQ</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        Get brand clarity before you scale channels.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        Early-stage founders do not need more random prompts. You need Brand
        DNA, a voice that sounds like you, and a 90-day plan you can actually
        run. That is Guide IQ, with optional coaching from me.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://guideiq.ai"
          className="pill-btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with Guide IQ
        </a>
        <a href="#book" className="pill-btn-secondary">
          Book a strategist session
        </a>
      </div>

      <section className="mt-16">
        <p className="section-label">What Guide IQ builds</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="font-sans text-base">Brand DNA</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Positioning, messaging, UVP, and buyer clarity from a focused set
              of founder inputs.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Voice and visuals</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Tone and identity calibration so AI output stops sounding generic.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">90-day GTM</h2>
            <p className="mt-2 text-sm text-ink-muted">
              A practical growth plan matched to your stage and budget, not a
              generic playbook dump.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Loads into your AI</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Embed into ChatGPT, Claude MCP, or Gemini. You keep the asset. Not
              an unsupervised agent replacing judgment.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <p className="section-label">Paths</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card">
            <p className="text-xs font-medium text-forest">Start</p>
            <h2 className="font-sans mt-2 text-lg">Free Brand DNA</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Begin with the foundation layer and see how the system thinks.
            </p>
          </div>
          <div className="card">
            <p className="text-xs font-medium text-forest">Full</p>
            <h2 className="font-sans mt-2 text-lg">Brand Brain · $99</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Complete strategy package with lifetime updates. One-time purchase.
            </p>
          </div>
          <div className="card">
            <p className="text-xs font-medium text-forest">With Nik</p>
            <h2 className="font-sans mt-2 text-lg">Strategist Session · $750</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Hands-on coaching to refine Brand DNA and lock your next 90 days.
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-ink-faint">
          Pricing shown as published on Guide IQ at build time. Confirm live on
          guideiq.ai.
        </p>
      </section>

      <section id="book" className="mt-16 scroll-mt-28 panel-invert px-6 py-10 md:px-10">
        <h2 className="text-2xl tracking-display">
          Book a strategist session
        </h2>
        <p className="mt-3 max-w-lg text-white/75">
          Prefer to work directly with me after Guide IQ, or talk through fit
          first? Reach out and we will find a time.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:hello@nikvassev.com?subject=Brand%20strategy%20session"
            className="pill-btn bg-white text-forest hover:bg-cream"
          >
            Email to book
          </a>
          <a
            href="https://guideiq.ai"
            className="pill-btn border border-white/30 text-white hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Guide IQ
          </a>
        </div>
      </section>

      <p className="mt-10 text-sm text-ink-muted">
        Later-stage and need AI visibility instead?{" "}
        <Link href="/ai-visibility" className="font-medium text-forest underline underline-offset-4">
          See Storyline Pros
        </Link>
        .
      </p>
    </div>
  );
}
