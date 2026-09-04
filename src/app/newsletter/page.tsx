import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    title: "One usable idea",
    body: "Each letter covers a single move on brand, growth, or AI. Written so you can put it to work between meetings.",
  },
  {
    label: "02",
    title: "Operator proof, not theory",
    body: "The frameworks come from companies I have built, sold, or advised. One receipt max. No guru stack.",
  },
  {
    label: "03",
    title: "Built for founders shipping real work",
    body: "For entrepreneurs building high-impact companies who want leverage as they grow, not another content hobby.",
  },
  {
    label: "04",
    title: "A steady Thursday drop",
    body: "It lands once a week so it can become part of how you run the business. Same day, same promise.",
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
          <div className="nl-hero-card">
            <p className="nl-hero-card-label">Join Systems Over Hustle</p>
            <p className="nl-hero-card-title">
              Brand strategy and AI systems to dominate your category
            </p>
            <p className="nl-hero-card-body">
              Real-world brand strategy, growth marketing, and AI workflows to
              build a high-impact company without outworking a broken process.
            </p>
            <NewsletterForm variant="dark" id="newsletter-hero-email" />
            <p className="nl-hero-card-note">
              One actionable framework every Thursday. Zero fluff.
            </p>
          </div>
        </div>
      </section>

      <section className="nl-benefits" aria-labelledby="benefits-heading">
        <div className="nl-benefits-inner">
          <p className="section-label">What you get</p>
          <h2 id="benefits-heading">What you get</h2>
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
            I&apos;m a brand strategist, serial founder, and growth marketer. I
            founded Guide IQ and co-founded Storyline Pros after building,
            raising, and exiting tech companies. I help visionary startups tell
            their story, win customers, and become the name AI and buyers
            recommend in their category.
          </p>
          <p>
            I write Systems Over Hustle because I burned out twice chasing
            broken process. The letter is the personal layer of that lesson:
            systems that let a company grow without eating the week.
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
          <h2 id="close-heading">
            Join the entrepreneurs building smarter, not harder
          </h2>
          <p className="nl-close-body">
            Systems Over Hustle is the weekly letter on brand strategy, growth
            marketing, and AI systems.
          </p>
          <p className="nl-close-sub">
            One actionable framework every Thursday. Zero fluff.
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
