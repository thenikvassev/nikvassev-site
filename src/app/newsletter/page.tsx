import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/NewsletterForm";
import { siteConfig } from "@/lib/site";

const title = "Systems Over Hustle | Nik Vassev's weekly founder letter";
const description =
  "Weekly letter from brand strategist Nik Vassev on brand strategy, growth marketing, and AI systems for founders building high-impact companies.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/newsletter",
  },
  openGraph: {
    title,
    description,
    url: "/newsletter",
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const benefits = [
  {
    label: "01",
    title: "Proven Growth Frameworks",
    body: "Timeless marketing and growth playbooks as well as new strategies that are working right now.",
  },
  {
    label: "02",
    title: "Contrarian Insights",
    body: "Reality checks on startup advice that does not hold up in real life. Plus what actually works instead.",
  },
  {
    label: "03",
    title: "Growth Tools That Actually Matter",
    body: "Honest takes on the latest marketing tech, what is worth using right now, what to skip, and how to build leverage with AI automation.",
  },
  {
    label: "04",
    title: "Freedom-First Business",
    body: "How to build companies that grow without consuming your life. Location independence, time freedom, and sustainable performance.",
  },
] as const;

export default function NewsletterPage() {
  return (
    <div className="nl-page">
      <section className="nl-hero" aria-labelledby="newsletter-heading">
        <div className="nl-hero-inner">
          <div className="nl-hero-copy">
            <p className="section-label">Weekly newsletter</p>
            <h1 id="newsletter-heading">Systems Over Hustle</h1>
            <p className="nl-hero-lede">
              The weekly letter for founders who want brand strategy, growth
              marketing, and AI systems they can actually run.
            </p>
            <p className="nl-hero-body">
              I&apos;m Nik Vassev, a brand strategist for visionary startups.
              Each issue teaches one move from the work I do with founders
              building high-impact companies: clearer positioning, sharper
              growth loops, or an AI workflow that saves real time.
            </p>
          </div>
          <figure className="nl-hero-visual">
            <Image
              src="/photos/systems-hustle-window.png"
              alt="Systems Over Hustle window graphic"
              width={2560}
              height={1440}
              className="nl-hero-window"
              priority
              sizes="(min-width: 900px) 760px, 92vw"
            />
          </figure>
        </div>
      </section>

      {/* Same forest signup band used across the rest of the site */}
      <section id="newsletter" className="nv nv-newsletter scroll-mt-28">
        <div className="nv-newsletter-inner">
          <h2>Brand strategy &amp; AI systems to dominate your category.</h2>
          <p className="nv-newsletter-body">
            I write a weekly letter called Systems Over Hustle. Every Thursday,
            it&apos;s packed with real-world brand strategy, AI workflows, and
            practical insights to help you build a high-impact company without
            outworking a broken process.
          </p>
          <p className="nv-newsletter-lead">
            Join the entrepreneurs building smarter, not harder.
          </p>
          <div className="nv-newsletter-form">
            <NewsletterForm variant="dark" id="newsletter-hero-email" />
          </div>
          <p className="nv-newsletter-note">
            1 actionable framework delivered every Thursday.
          </p>
        </div>
      </section>

      <section className="nl-benefits" aria-labelledby="benefits-heading">
        <div className="nl-benefits-inner">
          <h2 id="benefits-heading">What this newsletter is about</h2>
          <div className="nl-benefits-grid">
            {benefits.map((item) => (
              <article key={item.label} className="nl-benefit-card">
                <p className="nl-benefit-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="nl-benefit-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nl-about" aria-labelledby="about-nik-heading">
        <div className="nl-about-photo">
          <Image
            src="/photos/nik-portrait-newsletter-v3.jpg"
            alt="Nik Vassev smiling outdoors in a cream polo and glasses, with tropical palms behind him."
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
            className="nl-about-img"
          />
        </div>
        <div className="nl-about-card">
          <h2 id="about-nik-heading">About Nik</h2>
          <p>
            Nik Vassev is a serial entrepreneur and brand strategist who turns
            startup narratives into category-dominating authority. Across his
            career building and exiting tech ventures, his companies have
            reached nine-figure valuations and closed tens of millions in
            enterprise deals with global institutions and Fortune 500
            companies. Today, he translates that real-world track record into
            actionable systems for growth marketing, AI visibility and
            predictable growth for innovative startups.
          </p>
        </div>
      </section>
    </div>
  );
}
