import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { siteConfig } from "@/lib/site";

const title = "Systems Over Hustle | Newsletter";
const description =
  "Join Systems Over Hustle, the weekly newsletter from Nik Vassev. Practical tools and strategies for growing your startup without the grind. One framework every Thursday.";

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
    title: "Frameworks you can run",
    body: "One idea each week on brand strategy, growth, or AI systems. Written so you can use it the same day.",
  },
  {
    label: "02",
    title: "Thursday, every week",
    body: "The letter lands on Thursday. Same cadence, so it becomes part of how you work.",
  },
  {
    label: "03",
    title: "Built for founders",
    body: "For entrepreneurs building real companies who want systems and freedom as they grow.",
  },
  {
    label: "04",
    title: "Short and usable",
    body: "One framework. Clear language. You can read it between meetings and put it to work.",
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
              I write this letter for founders building real companies.
              Practical tools and strategies for growing your startup without
              the grind.
            </p>
            <p className="nl-hero-body">
              Every Thursday I share one actionable framework on brand
              strategy, growth, or AI systems you can actually run, so you
              build a company you don&apos;t need a vacation from.
            </p>
          </div>
          <div className="nl-hero-card">
            <p className="nl-hero-card-label">Subscribe</p>
            <p className="nl-hero-card-title">Get the next letter</p>
            <p className="nl-hero-card-body">
              Join the founders who want systems over hustle. I send it every
              Thursday.
            </p>
            <NewsletterForm variant="dark" id="newsletter-hero-email" />
            <p className="nl-hero-card-note">
              One framework delivered every Thursday.
            </p>
          </div>
        </div>
      </section>

      <section className="nl-benefits" aria-labelledby="benefits-heading">
        <div className="nl-benefits-inner">
          <p className="section-label">What you get</p>
          <h2 id="benefits-heading">One idea a week you can actually use</h2>
          <div className="nl-benefits-grid">
            {benefits.map((item) => (
              <article key={item.label} className="nl-benefit-card">
                <p className="nl-benefit-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nl-about" aria-labelledby="about-nik-heading">
        <div className="nl-about-photo">
          <Image
            src="/photos/nik-portrait-studio.jpg"
            alt="Nik Vassev, chest-up studio portrait in a black blazer and glasses."
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
            className="nl-about-img"
            priority
          />
        </div>
        <div className="nl-about-card">
          <p className="section-label">About Nik</p>
          <h2 id="about-nik-heading">Who writes this</h2>
          <p>
            I am a serial founder, brand strategist, and growth marketer. I
            built Guide IQ and co-founded Storyline Pros. I help visionary
            startups tell their story, grow customers, and become the name in
            their category.
          </p>
          <p>
            I write Systems Over Hustle from Mexico and the Caribbean coast.
            The work is the same wherever I sit: systems that let a company
            grow without living in the grind.
          </p>
          <div className="nl-about-actions">
            <Link href="/about" className="pill-btn-secondary">
              More about me
            </Link>
            <a
              href={siteConfig.bookingUrl}
              className="pill-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      <section className="nl-close" aria-labelledby="close-heading">
        <div className="nl-close-inner">
          <p className="section-label">Subscribe</p>
          <h2 id="close-heading">Get Thursday&apos;s letter</h2>
          <p className="nl-close-body">
            Leave your email and I will send the next framework on Thursday.
            Practical tools and strategies for growing your startup without the
            grind.
          </p>
          <div className="nl-close-form">
            <NewsletterForm id="newsletter-close-email" />
          </div>
          <a
            href={siteConfig.bookingUrl}
            className="nl-close-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Or book a call
          </a>
        </div>
      </section>
    </div>
  );
}
