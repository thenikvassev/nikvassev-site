import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { PressRow } from "@/components/PressRow";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { TrackRecord } from "@/components/TrackRecord";
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
          Exited tech founder, brand strategist and growth marketer helping entrepreneurs build high-impact companies.
        </h1>

        <MediaFrame
          src="/photos/nik-portrait-studio.jpg"
          alt="Nik Vassev, chest-up studio portrait in a black blazer and glasses."
          ratio="tall"
          priority
          imageClassName="object-cover object-top"
          className="mt-10 w-full md:max-w-2xl"
        />

        <div className="prose-nik mt-10 max-w-reading text-base md:text-lg">
          <p>
            Nik Vassev is a serial entrepreneur and brand strategist who turns
            startup narratives into category-dominating authority. Across his
            career building and exiting tech ventures, his companies have
            reached nine-figure valuations and closed tens of millions in
            enterprise deals with global institutions and Fortune 500 companies.
            Today, he translates that real-world track record into actionable
            systems for growth marketing, AI visibility and predictable growth
            for innovative startups.
          </p>
          <p>
            After co-founding Novobeing (a therapeutic VR platform validated in
            clinical trials alongside researchers at Harvard and Penn Medicine)
            and scaling Mindleap Health through to its acquisition, Nik
            reshaped his entire approach to business. Today, he advocates for a
            radical redefinition of entrepreneurial success: building
            high-impact, category-defining companies through intelligent brand
            strategy, modern growth marketing, and practical AI systems, without
            trading away your health, sanity or freedom in the process.
          </p>
          <p>
            Currently writing from the Caribbean coast of Mexico, Nik is the
            founder of{" "}
            <a
              href="https://guideiq.ai"
              className="font-medium text-forest underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide IQ
            </a>{" "}
            (an AI brand strategy engine) and{" "}
            <a
              href="https://storylinepros.com"
              className="font-medium text-forest underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storyline Pros
            </a>{" "}
            (an AI visibility and narrative engineering firm). He is a regular
            contributor to Entrepreneur magazine, a mentor to dozens of
            early-stage founders through Futurepreneur Canada, and the author
            of the weekly newsletter Systems Over Hustle.
          </p>
          <p>
            When he’s not designing AI workflows or helping founders scale
            their market presence, you can find him exploring the outdoors,
            studying human performance, and proving that the best businesses
            are built to support your life, not consume it.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/#newsletter" className="pill-btn-primary">
            Subscribe to the newsletter
          </Link>
          <Link
            href="https://tally.so/r/QKQbBk"
            className="pill-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
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

      </section>

      <TrackRecord />
      <ProjectsIndex />
    </>
  );
}