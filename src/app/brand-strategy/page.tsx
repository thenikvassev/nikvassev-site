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

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://guideiq.ai"
          className="pill-btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with Guide IQ
        </a>
        <a href="https://tally.so/r/QKQbBk" className="pill-btn-secondary" target="_blank" rel="noopener noreferrer">
          Book a strategist session
        </a>
      </div>

      <MediaFrame
        src="/photos/guide-iq-product-ui.png"
        alt="Guide IQ Brand Soul workspace with tone calibration, personality dials, and brand colors."
        ratio="video"
        className="mt-12"
      />

      <section className="mt-16">
        <p className="section-label">What Guide IQ builds</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="font-sans text-base">Brand DNA</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Positioning, messaging, UVP and buyer personas from a focused set
              of founder inputs. The foundation every output is built on.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Brand Soul</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Tone, personality, point of view and visual identity. Calibration
              so AI output stops sounding generic.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">90-day GTM</h2>
            <p className="mt-2 text-sm text-ink-muted">
              A growth plan with campaigns, playbooks and a tool stack matched
              to your stage and budget.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Marketing skills</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Frameworks across content, copy, email, SEO, AI search, outreach,
              paid ads and PR. Judgment you can reuse, not a one-off prompt.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Loads into your AI</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Claude MCP loads automatically. ChatGPT and Gemini take a custom
              GPT or Gem. You keep the asset.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">You stay in charge</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Guide IQ is not an unsupervised campaign agent. It gives your AI
              the brand context it is missing. You still decide what ships.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <p className="section-label">How a Brand Brain gets made</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          <li className="card">
            <p className="text-xs font-medium text-forest">01 Answer</p>
            <p className="mt-2 text-sm text-ink-muted">
              Walk through twelve questions about the business, the buyers and
              where you are headed. No marketing background needed.
            </p>
          </li>
          <li className="card">
            <p className="text-xs font-medium text-forest">02 Refine</p>
            <p className="mt-2 text-sm text-ink-muted">
              Review what Guide IQ builds and adjust until it sounds like you.
            </p>
          </li>
          <li className="card">
            <p className="text-xs font-medium text-forest">03 Load</p>
            <p className="mt-2 text-sm text-ink-muted">
              Drop the Brand Brain into Claude, ChatGPT or Gemini.
            </p>
          </li>
          <li className="card">
            <p className="text-xs font-medium text-forest">04 Prompt as usual</p>
            <p className="mt-2 text-sm text-ink-muted">
              Ask for a post, an email or a campaign. The output stays on brand
              because the context is already there.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt-14">
        <p className="section-label">Paths</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card">
            <p className="text-xs font-medium text-forest">Start</p>
            <h2 className="mt-2 font-sans text-lg">Free Brand DNA</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Begin with the foundation layer and see how the system thinks.
            </p>
          </div>
          <div className="card">
            <p className="text-xs font-medium text-forest">Full</p>
            <h2 className="mt-2 font-sans text-lg">Brand Brain · $99</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Complete strategy package with lifetime updates. One-time
              purchase.
            </p>
          </div>
          <div className="card">
            <p className="text-xs font-medium text-forest">With Nik</p>
            <h2 className="mt-2 font-sans text-lg">Strategist session · $750</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Hands-on coaching to refine Brand DNA and lock your next 90 days.
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-ink-faint">
          Pricing shown as specified for this site. Confirm live on guideiq.ai.
        </p>
      </section>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <MediaFrame
          src="/photos/guide-iq-product-ui.png"
          alt="Guide IQ product UI showing Brand Soul tone, personality, and color modules."
          ratio="video"
        />
        <MediaFrame
          src="/placeholders/guide-iq-session.svg"
          alt="Placeholder for a Guide IQ coaching session"
          label="Photo: Strategist session"
          ratio="video"
        />
      </div>

      <section
        id="book"
        className="mt-16 scroll-mt-28 panel-invert px-6 py-10 md:px-10"
      >
        <h2 className="text-2xl tracking-display">Book a strategist session</h2>
        <p className="mt-3 max-w-lg text-white/75">
          Prefer to work directly with me after Guide IQ, or talk through fit
          first? Reach out and we will find a time.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://tally.so/r/QKQbBk"
            className="pill-btn bg-cream text-forest hover:bg-forest hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
          <a
            href="https://guideiq.ai"
            className="pill-btn border border-white/40 text-white hover:bg-forest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Guide IQ
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
