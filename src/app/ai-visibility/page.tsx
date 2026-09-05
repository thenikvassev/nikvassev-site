import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";

export const metadata: Metadata = {
  title: "AI Visibility",
  description:
    "Storyline Pros: narrative engineering and AI visibility for emerging tech companies. Earned media, podcasts, Reddit and community authority. Performance-based PR. No guaranteed rankings.",
  openGraph: {
    title: "AI Visibility | Storyline Pros",
    description:
      "Become the answer AI recommends. Narrative engineering for emerging tech companies.",
  },
};

export default function AiVisibilityPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">AI Visibility</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        Become the answer AI recommends.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        Buyers and investors ask AI before they visit your site. Storyline Pros
        builds the verifiable digital footprint emerging tech companies need to
        show up in those answers. We work with fast-growth startups that want a
        proven system to get into the media AI trusts, so they become the answer.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://storylinepros.com"
          className="pill-btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply to work with us
        </a>
      </div>

      <MediaFrame
        src="/photos/aiv-earned-media.png"
        alt="Rolled Wall Street Journal with the line: Earned media shows AI who matters."
        ratio="wide"
        className="mt-12"
        imageClassName="object-contain"
      />

      <section className="mt-16">
        <h2 className="mt-3 text-2xl tracking-display">
          Our narrative engineering system
        </h2>
        <p className="mt-4 max-w-reading text-ink-muted">
          Storyline Pros is a narrative engineering and AI visibility firm for
          high-growth tech startups and ambitious founders who need category
          authority. We turn company milestones into tier-one media placements,
          podcast features, community authority, and AI search recommendations.
        </p>
        <p className="mt-4 max-w-reading text-ink-muted">
          Delivery is performance-based. You pay for placements that publish.
          The system covers high-impact narrative engineering, tier-one media,
          and AI search visibility across a 6-channel ecosystem.
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
          <article className="nv-ways-card">
            <h3>Earned media</h3>
            <p>
              Pitched editorial features and executive interviews. The
              high-authority coverage AI and investors trust most.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Podcasts</h3>
            <p>
              Strategic guest appearances. Audio transcripts become searchable,
              quotable answers to the questions buyers actually ask.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Reddit</h3>
            <p>
              Presence in the subreddits your buyers trust, where AI checks
              real-world sentiment.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Company news</h3>
            <p>
              Company announcements and product launches placed where AI and
              the market notice momentum.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Listicles</h3>
            <p>
              High-value roundups and ranked lists built to own category
              queries buyers already search.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Industry websites</h3>
            <p>
              Trade and niche sites in your category that train AI on who
              belongs in the conversation.
            </p>
          </article>
        </div>
      </section>

      <section className="nv mt-14">
        <p className="section-label">How it is priced</p>
        <div className="nv-ways-grid md:!grid-cols-2">
          <article className="nv-ways-card">
            <h3>Performance-based PR</h3>
            <p>
              You pay for placements delivered, not retainers for promises. If
              a story does not publish, you do not pay. That is the make-good.
            </p>
          </article>
          <article className="nv-ways-card">
            <h3>Narrative engineering</h3>
            <p>
              We define the claims you should own and deploy them into earned
              media, podcasts, news and Reddit. Citation evidence is built on
              purpose.
            </p>
          </article>
        </div>
      </section>

      <section className="nv mt-14">
        <p className="section-label">How it works</p>
        <div className="nv-ways-grid">
          <article className="nv-ways-card">
            <p className="nv-ways-label">01</p>
            <h3>GEO audit</h3>
            <p>
              Full audit of AI search for your category. Strategy for the
              footprint you still need.
            </p>
          </article>
          <article className="nv-ways-card">
            <p className="nv-ways-label">02</p>
            <h3>Narrative deploy</h3>
            <p>
              Place the storyline into trusted media and communities. We track
              where you surface in AI answers.
            </p>
          </article>
          <article className="nv-ways-card">
            <p className="nv-ways-label">03</p>
            <h3>Results</h3>
            <p>
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
          Ready to become the answer AI recommends?
        </h2>
        <p className="mt-3 max-w-lg text-white/75">
          We help high-growth startups build the verifiable digital footprint
          required to dominate AI search engines and get noticed by investors
          and customers.
        </p>
        <div className="mt-6">
          <a
            href="https://storylinepros.com"
            className="pill-btn bg-cream text-forest hover:bg-forest hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply to work with us
          </a>
        </div>
      </section>
    </div>
  );
}
