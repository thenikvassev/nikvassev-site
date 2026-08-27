import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { PressRow } from "@/components/PressRow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nik Vassev is a brand strategist, serial founder and growth marketer. He founded Guide IQ and Mindleap Health, co-founded Storyline Pros and Novobeing, and writes Systems Over Hustle from Mexico and the Caribbean.",
  openGraph: {
    title: "About Nik Vassev",
    description:
      "Brand strategist, serial founder and growth marketer. Systems Over Hustle.",
  },
};

const timeline = [
  {
    year: "2011",
    title: "How it began",
    body: "I started in commission-only, door-to-door sales. The conditions were brutal and rejection was constant. At that stage of my life hustle was not a philosophy. It was the only option. I learned to grind, to push through discomfort and to believe that outworking everyone else was the answer. For a while it worked. I made good money, put myself through school and became a top performer at a young age.",
  },
  {
    year: "2015",
    title: "Tech sales",
    body: "I moved into tech as a business development rep, cold-calling leads and working my way up. Within a few years I hit President's Club and closed enterprise deals with organizations like the NFL, Volkswagen and government agencies in both the U.S. and Canada. The income was strong and the career path was clear. A high-performing nine-to-five still felt limiting. I wanted ownership, autonomy and something of my own.",
  },
  {
    year: "2018",
    title: "First startup failure",
    body: "That desire led to an e-commerce dropshipping business. Sales came quickly and volume looked promising. Profits never followed. The model was flawed and the business collapsed. Burnout set in, then a period of depression, and I found myself back in a cubicle selling software. Building companies takes more than effort alone.",
  },
  {
    year: "2020",
    title: "First exit",
    body: "I tried again with better judgment and sharper execution. Within 24 months I exited my second startup, made my first million before thirty and checked every external box of success. The win did not feel the way I expected. What mattered most was the impact of building something real and useful. Founders began reaching out. I started mentoring, investing and sharing what I had learned.",
  },
  {
    year: "2021",
    title: "Novobeing",
    body: "That path led me to co-found Novobeing, a therapeutic VR company designed to help patients in hospitals. We co-developed the technology with Harvard, raised capital and built a strong team around a mission that mattered. I fell back into familiar patterns: long days, non-stop meetings, constant pressure and another cycle of burnout. Outcomes improved. The way I was building had not.",
  },
  {
    year: "2024+",
    title: "Systems, Guide IQ, Mexico",
    body: "The real change came when I stopped optimizing for hustle and started designing systems. I built Guide IQ, an AI-powered marketing system for founders, left Vancouver for Mexico and redesigned my life around freedom rather than output. I operate from Mexico and the Caribbean, build tech companies and help other founders scale with systems that support a life instead of consuming it.",
  },
];

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nik Vassev",
    jobTitle: "Brand strategist, serial founder and growth marketer",
    email: siteConfig.email,
    url: siteConfig.url,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressCountry: "MX",
    },
    description: siteConfig.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
        <p className="section-label">About</p>
        <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
          Brand strategy and systems for founders who want freedom.
        </h1>

        <MediaFrame
          src="/photos/nik-portrait-studio.jpg"
          alt="Nik Vassev seated in a studio, black blazer and glasses, smiling at the camera."
          ratio="portrait"
          priority
          className="mt-10 max-h-[42rem] w-full md:max-w-2xl"
        />

        <div className="prose-nik mt-10 max-w-reading text-base md:text-lg">
          <p>
            Nik Vassev is a brand strategist, serial founder and growth
            marketer. He helps entrepreneurs build high-impact companies using
            brand strategy, growth marketing and AI systems, without trading
            away health, relationships or life.
          </p>
          <p>
            He founded{" "}
            <a
              href="https://guideiq.ai"
              className="font-medium text-forest underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide IQ
            </a>
            , an AI Brand Strategist for early-stage companies, and co-founded{" "}
            <a
              href="https://storylinepros.com"
              className="font-medium text-forest underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storyline Pros
            </a>{" "}
            with Cynthia Salarizadeh for later-stage B2B emerging tech that
            needs narrative engineering and AI visibility. Earlier he founded
            Mindleap Health (acquired for $3.5M) and co-founded Novobeing
            (therapeutic VR with Harvard and Penn Medicine). He has served on
            the board at Digimax.
          </p>
          <p>
            He is a Canadian expat with Bulgarian roots, based in{" "}
            {siteConfig.location} and working across {siteConfig.region}.{" "}
            <strong className="font-semibold text-ink">
              Systems Over Hustle
            </strong>{" "}
            is his weekly newsletter for founders who want practical tools
            instead of more grind.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/#newsletter" className="pill-btn-primary">
            Subscribe to the newsletter
          </Link>
          <Link href="/brand-strategy#book" className="pill-btn-secondary">
            Book a call
          </Link>
        </div>
      </article>

      <PressRow invert />

      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <p className="section-label">My story</p>
        <h2 className="mt-3 text-2xl tracking-display md:text-3xl">
          From hustle to systems
        </h2>
        <ol className="mt-10 space-y-8">
          {timeline.map((item) => (
            <li
              key={item.year}
              className="grid gap-3 border-t border-tan/40 pt-8 md:grid-cols-[7rem_1fr]"
            >
              <p className="section-label md:pt-1">{item.year}</p>
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <MediaFrame
            src="/photos/nik-beach.jpg"
            alt="Nik Vassev working at the beach."
            ratio="photo"
          />
          <MediaFrame
            src="/photos/nik-speaking.jpg"
            alt="Nik Vassev speaking on stage, pointing at a slide titled What Not To Do."
            ratio="photo"
          />
        </div>

        <div className="mt-12">
          <p className="section-label">Logos from the path</p>
          <div className="mt-4 flex flex-wrap items-center gap-6 rounded-card bg-forest px-6 py-6">
            {[
              ["/logos/nfl.png", "NFL"],
              ["/logos/volkswagen.png", "Volkswagen"],
              ["/logos/harvard.png", "Harvard University"],
              ["/logos/penn.png", "University of Pennsylvania"],
              ["/logos/futurpreneur.png", "Futurpreneur Canada"],
            ].map(([src, alt]) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={120}
                height={48}
                className="h-8 w-auto object-contain md:h-10"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
