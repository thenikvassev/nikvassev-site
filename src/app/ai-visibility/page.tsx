import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { withOgImages } from "@/lib/og";
import { shapeLine } from "@/lib/shape-line";

const description =
  "Why AI answers pull from press, podcasts and communities, and how I run AI visibility for tech startups through Storyline Pros.";

export const metadata: Metadata = withOgImages({
  title: "AI Visibility",
  description,
  alternates: { canonical: "/ai-visibility" },
  openGraph: {
    title: "AI Visibility | Nik Vassev",
    description,
  },
  twitter: {
    title: "AI Visibility | Nik Vassev",
    description,
  },
});

function CtaButtons({ invert = false }: { invert?: boolean }) {
  const primary = invert
    ? "pill-btn bg-cream text-forest hover:bg-forest hover:text-white"
    : "pill-btn-primary";
  const secondary = invert
    ? "pill-btn border border-cream/40 bg-transparent text-cream hover:bg-white/10"
    : "pill-btn-secondary";

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href="https://www.storylinepros.com/ai-visibility-audit"
        className={primary}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get your free AI Visibility Audit
      </a>
      <a
        href="https://cal.com/nik-vassev/30min"
        className={secondary}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a strategy session
      </a>
    </div>
  );
}

export default function AiVisibilityPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">AI Visibility</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        How I think about AI visibility for startups
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        Buyers and investors ask AI before they visit your site.{" "}
        <a
          href="https://www.storylinepros.com/ai-visibility"
          className="font-medium text-forest underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storyline Pros
        </a>{" "}
        is a communications firm that helps disruptive companies become
        impossible to ignore. We get you in the press and named by AI. GeoView
        shows you what moved. I co-founded it with Cynthia Salarizadeh, and the
        two of us lead every account.
      </p>

      <CtaButtons />

      <MediaFrame
        src="/photos/aiv-earned-media.png"
        alt="Rolled Wall Street Journal with the line: Earned media shows AI who matters."
        ratio="wide"
        className="mt-12"
        imageClassName="object-contain"
      />

      <section className="mt-16">
        <h2 className="mt-3 text-2xl tracking-display">
          {shapeLine("How Storyline Pros works")}
        </h2>
        <p className="mt-4 max-w-reading text-ink-muted">
          We work with health tech, biotech, fintech, cleantech and B2B software
          companies whose buyers and investors check before they trust. Our
          publicists earn the coverage. GeoBuild, our on-site agent, builds the
          pages, and GeoView tracks how often AI names you.
        </p>
        <p className="mt-4 max-w-reading text-ink-muted">
          Working with us starts at $5,000. Early-stage companies start with the
          AI Visibility Boost, a 90-day program paid once with no retainer, and
          companies that need steady news flow work with us on Full-Service PR.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="mt-3 text-2xl tracking-display">
          Generative engine optimization
        </h2>
        <p className="mt-4 max-w-reading text-ink-muted">
          GEO is the work of getting your company cited when someone asks
          ChatGPT, Perplexity, Gemini or an AI overview about your category. AI
          systems pull from third-party press, podcast transcripts and
          communities like Reddit more than they pull from your own site. If
          those sources do not mention you, you are outside the answer.
        </p>
        <p className="mt-4 max-w-reading text-ink-muted">
          Storyline Pros does not sell guaranteed rankings. We place your story
          in media AI already trusts, then measure share of voice across
          answers. Progress is earned coverage and citations, not a promised
          position.
        </p>
      </section>

      <section className="mt-14">
        <p className="section-label">Who this is for</p>
        <p className="mt-4 max-w-reading text-ink-muted">
          Emerging tech companies in cleantech, fintech, biotech, healthtech
          and related categories. Teams that need their category story cited
          when buyers, investors and analysts ask AI who leads the space, with
          placements built for GEO and share of voice, not one-off coverage.
        </p>
      </section>

      <section className="nv mt-14">
        <p className="section-label">We build an ecosystem of media</p>
        <div className="nv-ways-grid md:!grid-cols-2">
          <article className="nl-benefit-card">
            <h3>Earned media</h3>
            <p className="nl-benefit-body">
              Pitched editorial features and executive interviews. The
              high-authority coverage AI and investors trust most.
            </p>
          </article>
          <article className="nl-benefit-card">
            <h3>Podcasts</h3>
            <p className="nl-benefit-body">
              Strategic guest appearances. Audio transcripts become searchable,
              quotable answers to the questions buyers actually ask.
            </p>
          </article>
          <article className="nl-benefit-card">
            <h3>Reddit</h3>
            <p className="nl-benefit-body">
              Presence in the subreddits your buyers trust, where AI checks
              real-world sentiment.
            </p>
          </article>
          <article className="nl-benefit-card">
            <h3>Company news</h3>
            <p className="nl-benefit-body">
              Company announcements and product launches placed where AI and
              the market notice momentum.
            </p>
          </article>
          <article className="nl-benefit-card">
            <h3>Listicles</h3>
            <p className="nl-benefit-body">
              High-value roundups and ranked lists built to own category
              queries buyers already search.
            </p>
          </article>
          <article className="nl-benefit-card">
            <h3>Industry websites</h3>
            <p className="nl-benefit-body">
              Trade and niche sites in your category that train AI on who
              belongs in the conversation.
            </p>
          </article>
        </div>
      </section>

      <section className="nv mt-14">
        <p className="section-label">{shapeLine("How to start")}</p>
        <div className="nv-ways-grid md:!grid-cols-2">
          <article className="nl-benefit-card">
            <h3>AI Visibility Boost</h3>
            <p className="nl-benefit-body">
              For pre-seed and seed companies. Ten deliverables over 90 days,
              $5,000 paid once.
            </p>
          </article>
          <article className="nl-benefit-card">
            <h3>Full-Service PR</h3>
            <p className="nl-benefit-body">
              A monthly program for companies with proof in market, scoped on a
              strategy session with me.
            </p>
          </article>
        </div>
      </section>

      <section className="nv mt-14">
        <p className="section-label">How it works</p>
        <div className="nv-ways-grid">
          <article className="nl-benefit-card">
            <p className="nl-benefit-label">01</p>
            <h3>GEO audit</h3>
            <p className="nl-benefit-body">
              Full audit of AI search for your category. Strategy for the
              footprint you still need.
            </p>
          </article>
          <article className="nl-benefit-card">
            <p className="nl-benefit-label">02</p>
            <h3>Narrative deploy</h3>
            <p className="nl-benefit-body">
              Place the storyline into trusted media and communities. We track
              where you surface in AI answers.
            </p>
          </article>
          <article className="nl-benefit-card">
            <p className="nl-benefit-label">03</p>
            <h3>Results</h3>
            <p className="nl-benefit-body">
              Share of voice across AI answers. More placements as authority
              compounds. No ranking guarantee.
            </p>
          </article>
        </div>
      </section>

      <MediaFrame
        src="/photos/aiv-answer-you.png"
        alt="Founder pointing at stacked AI search prompts that all resolve to you."
        ratio="video"
        className="mt-14"
        imageClassName="object-cover object-[center_72%] scale-125 origin-center"
      />

      <section className="mt-16 panel-invert px-6 py-10 md:px-10">
        <h2 className="text-2xl tracking-display">
          {shapeLine("Want to see how AI describes your company today?")}
        </h2>
        <p className="mt-3 max-w-lg text-white/75">
          Run the free AI Visibility Audit to see where you stand, or book a
          strategy session with me and we&apos;ll go through your category
          together.
        </p>
        <CtaButtons invert />
      </section>
    </div>
  );
}
