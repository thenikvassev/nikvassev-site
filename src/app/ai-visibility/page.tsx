import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";

export const metadata: Metadata = {
  title: "AI Visibility",
  description:
    "Storyline Pros: narrative engineering and GEO for later-stage B2B emerging tech. Earned media, podcasts, Reddit and GeoView. Performance-based PR. No guaranteed rankings.",
  openGraph: {
    title: "AI Visibility | Storyline Pros",
    description:
      "Become the answer AI recommends. Narrative engineering for later-stage B2B emerging tech.",
  },
};

export default function AiVisibilityPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">AI Visibility · Storyline Pros</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        Become the answer AI recommends.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        Buyers and investors ask AI before they visit your site. Storyline Pros
        builds the verifiable digital footprint later-stage B2B emerging tech
        companies need to show up in those answers.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://storylinepros.com"
          className="pill-btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply at Storyline Pros
        </a>
        <Link href="/brand-strategy" className="pill-btn-secondary">
          Need early-stage brand work?
        </Link>
      </div>

      <section className="mt-16">
        <p className="section-label">GEO in plain terms</p>
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
        <p className="section-label">GeoView</p>
        <h2 className="mt-3 text-2xl tracking-display">
          Proprietary tech for AI visibility
        </h2>
        <p className="mt-4 max-w-reading text-ink-muted">
          GeoView is Storyline&apos;s proprietary GEO layer. It is the
          AI-native technical stack behind the work: analytics and agents that
          show where you appear in AI answers, what claims you own and where
          the footprint is thin. Decisions sit on that data, not on guesswork.
        </p>
        <MediaFrame
          src="/placeholders/geoview-diagram.svg"
          alt="Placeholder diagram for GeoView, Storyline proprietary GEO technology"
          label="Diagram: GeoView"
          ratio="wide"
          className="mt-6"
        />
      </section>

      <section className="mt-14">
        <p className="section-label">Who this is for</p>
        <p className="mt-4 max-w-reading text-ink-muted">
          Later-stage B2B companies in cleantech, fintech, biotech, healthtech
          and related emerging tech. Not a fit for early e-commerce or consumer
          brands looking for vanity coverage.
        </p>
      </section>

      <section className="mt-14">
        <p className="section-label">What we place</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="font-sans text-base">Earned media</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Pitched editorial features and executive interviews. The
              high-authority coverage AI and investors trust most.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Podcasts</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Strategic guest appearances. Audio transcripts become searchable,
              quotable answers to the questions buyers actually ask.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Reddit communities</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Presence in the subreddits your buyers trust, where AI checks
              real-world sentiment.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">News, listicles and reports</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Company announcements, product launches and high-value assets
              built to own category queries. Access to 500+ media sites.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <p className="section-label">How it is priced</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="font-sans text-base">Performance-based PR</h2>
            <p className="mt-2 text-sm text-ink-muted">
              You pay for placements delivered, not retainers for promises. If
              a story does not publish, you do not pay. That is the make-good.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Narrative engineering</h2>
            <p className="mt-2 text-sm text-ink-muted">
              We define the claims you should own and deploy them into earned
              media, podcasts, news and Reddit. Citation evidence is built on
              purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <p className="section-label">How it works</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          <li className="card">
            <p className="text-xs font-medium text-forest">01</p>
            <h2 className="mt-2 font-sans text-base">GEO audit</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Full audit of AI search for your category. Strategy for the
              footprint you still need.
            </p>
          </li>
          <li className="card">
            <p className="text-xs font-medium text-forest">02</p>
            <h2 className="mt-2 font-sans text-base">Narrative deploy</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Place the storyline into trusted media and communities. GeoView
              tracks where you surface.
            </p>
          </li>
          <li className="card">
            <p className="text-xs font-medium text-forest">03</p>
            <h2 className="mt-2 font-sans text-base">Results</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Share of voice across AI answers. More placements as authority
              compounds. No ranking guarantee.
            </p>
          </li>
        </ol>
      </section>

      <MediaFrame
        src="/placeholders/storyline-media.svg"
        alt="Placeholder for a Storyline earned media still"
        label="Photo: Earned media and citations"
        ratio="wide"
        className="mt-14"
      />

      <section className="mt-16 panel-invert px-6 py-10 md:px-10">
        <h2 className="text-2xl tracking-display">
          Ready to get in the sources AI trusts?
        </h2>
        <p className="mt-3 max-w-lg text-white/75">
          Apply on the Storyline Pros site. If you are earlier stage and still
          shaping brand fundamentals, start with Guide IQ.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://storylinepros.com"
            className="pill-btn bg-white text-forest hover:bg-cream"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply to work with us
          </a>
          <Link
            href="/brand-strategy"
            className="pill-btn border border-white/30 text-white hover:bg-white/10"
          >
            Brand strategy lane
          </Link>
        </div>
      </section>
    </div>
  );
}
