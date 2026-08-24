import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Visibility",
  description:
    "Storyline Pros: narrative engineering and AI visibility for later-stage B2B emerging tech. Performance-based PR with a make-good guarantee.",
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
        <p className="section-label">Who this is for</p>
        <p className="mt-4 max-w-reading text-ink-muted">
          Later-stage B2B companies in cleantech, fintech, biotech, healthtech,
          and related emerging tech. Not a fit for early e-commerce or consumer
          brands looking for vanity coverage.
        </p>
      </section>

      <section className="mt-14">
        <p className="section-label">What you get</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="font-sans text-base">Narrative engineering</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Define the claims you should own. Deploy them into earned media,
              podcasts, news, and communities AI systems trust.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">GEO and citations</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Build authority in the sources that shape AI answers so your
              company can surface when category questions get asked.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Performance-based PR</h2>
            <p className="mt-2 text-sm text-ink-muted">
              You pay for placements delivered. Make-good guarantee if a story
              does not publish. No empty retainers for promises alone.
            </p>
          </div>
          <div className="card">
            <h2 className="font-sans text-base">Founder-led delivery</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Co-founded by Nik Vassev and Cynthia Salarizadeh. Exited founders
              with real media relationships and operator experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <p className="section-label">How it works</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          <li className="card">
            <p className="text-xs font-medium text-forest">01</p>
            <h2 className="font-sans mt-2 text-base">GEO audit</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Map how AI talks about your category and where your footprint is
              thin.
            </p>
          </li>
          <li className="card">
            <p className="text-xs font-medium text-forest">02</p>
            <h2 className="font-sans mt-2 text-base">Narrative deploy</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Place your storyline into trusted media and communities.
            </p>
          </li>
          <li className="card">
            <p className="text-xs font-medium text-forest">03</p>
            <h2 className="font-sans mt-2 text-base">Results</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Track share of voice in AI answers and keep adding placements.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt-16 panel-invert px-6 py-10 md:px-10">
        <h2 className="text-2xl tracking-display">
          Ready to get in the sources AI trusts?
        </h2>
        <p className="mt-3 max-w-lg text-white/75">
          Apply on the Storyline Pros site. If you are earlier stage and still
          shaping brand fundamentals, start with Guide IQ instead.
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
