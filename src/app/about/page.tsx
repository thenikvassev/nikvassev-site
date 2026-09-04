import type { Metadata } from "next";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { PressRow } from "@/components/PressRow";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { TimelineJourney } from "@/components/TimelineJourney";
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
    images: ["/photos/nik-beach.jpg"],
    imageAlt: "Nik Vassev working at the beach.",
  },
  {
    year: "2015",
    title: "Tech sales",
    body: "I moved into tech as a business development rep, cold-calling leads and working my way up. Within a few years I hit President's Club and closed enterprise deals with organizations like the NFL, Volkswagen and government agencies in both the U.S. and Canada. The income was strong and the career path was clear. A high-performing nine-to-five still felt limiting. I wanted ownership, autonomy and something of my own.",
    images: ["/photos/nik-speaking.jpg"],
    imageAlt:
      "Nik Vassev speaking on stage, pointing at a slide titled What Not To Do.",
  },
  {
    year: "2018",
    title: "First startup failure",
    body: "That desire led to an e-commerce dropshipping business. Sales came quickly and volume looked promising. Profits never followed. The model was flawed and the business collapsed. Burnout set in, then a period of depression, and I found myself back in a cubicle selling software. Building companies takes more than effort alone.",
    images: ["/photos/nik-portrait-studio.jpg"],
    imageAlt:
      "Nik Vassev, chest-up studio portrait in a black blazer and glasses.",
  },
  {
    year: "2020",
    title: "First exit",
    body: "I tried again with better judgment and sharper execution. Within 24 months I exited my second startup, made my first million before thirty and checked every external box of success. The win did not feel the way I expected. What mattered most was the impact of building something real and useful. Founders began reaching out. I started mentoring, investing and sharing what I had learned.",
    images: ["/photos/nik-speaker.jpg"],
    imageAlt:
      "Nik Vassev on stage with a microphone, presenting a slide on AI content.",
  },
  {
    year: "2021",
    title: "Novobeing",
    body: "That path led me to co-found Novobeing, a therapeutic VR company designed to help patients in hospitals. We co-developed the technology with Harvard, raised capital and built a strong team around a mission that mattered. I fell back into familiar patterns: long days, non-stop meetings, constant pressure and another cycle of burnout. Outcomes improved. The way I was building had not.",
    images: ["/photos/novobeing-vr.jpg"],
    imageAlt:
      "Patient wearing a Novobeing VR headset with a calm mountain waterfall and butterflies around him.",
  },
  {
    year: "2024+",
    title: "Systems, Guide IQ, Mexico",
    body: "The real change came when I stopped optimizing for hustle and started designing systems. I built Guide IQ, an AI-powered marketing system for founders, left Vancouver for Mexico and redesigned my life around freedom rather than output. I operate from Mexico and the Caribbean, build tech companies and help other founders scale with systems that support a life instead of consuming it.",
    images: ["/photos/guide-iq.jpg"],
    imageAlt:
      "Human and robotic hands reaching toward a glowing orange brain on a black background.",
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
          Brand strategist and growth marketer helping entrepreneurs build high-impact companies.
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
            I am an entrepreneur and a brand strategist for visionary
            companies. I help them tell their story, grow their customers, get
            investors and become the leader in their category.
          </p>
          <p>
            I have done that as a founder, and I have done it with the
            companies I work with. The job is the same every time: take
            something very new, build a brand and narrative that stand out, and
            put it in front of the people who can buy it and fund it.
          </p>
          <p>
            Brand strategy is how the story holds. Growth marketing is how
            customers and capital show up. AI systems are how that work scales.
            That is the operating logic inside{" "}
            <a
              href="https://guideiq.ai"
              className="font-medium text-forest underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide IQ
            </a>{" "}
            and{" "}
            <a
              href="https://storylinepros.com"
              className="font-medium text-forest underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storyline Pros
            </a>
            , and it is what I write about in my{" "}
            <Link
              href="/#newsletter"
              className="font-medium text-forest underline underline-offset-4"
            >
              newsletter
            </Link>
            .
          </p>
        </div>

        <section className="mt-16 max-w-reading" aria-labelledby="from-unknown-heading">
          <h2
            id="from-unknown-heading"
            className="text-3xl tracking-display md:text-4xl"
          >
            From unknown to recognized
          </h2>
          <div className="prose-nik mt-8 text-base md:text-lg">
            <p>
              It does not matter if you have the cure for cancer if nobody knows
              about it.
            </p>
            <p>
              I have watched that happen to founders who had the real thing.
              Better technology, better science, and a market that was not
              looking for any of it. Buyers kept buying the name they already
              knew. Investors passed because nobody else had heard of them. The
              work held up in the lab and still went nowhere, because nobody
              knew it existed.
            </p>
            <p>
              You can feel that from the inside. You built something that should
              move the category, and you still have to explain it twice in every
              room. The people with the money and the people with the customers
              already have a name they trust, and it is not yours yet.
            </p>
            <p>
              I have spent my career on that problem. I work with emerging
              technologies nobody was looking for, make them undeniable, and
              brand and market those companies until the sales show up. Millions
              of dollars of them. I have founded, scaled and exited companies
              across healthtech, AI and marketing.
            </p>
            <p>
              I have raised tens of millions across private and public markets,
              closed enterprise deals with Fortune 500s, the NFL, Volkswagen and
              federal agencies, and co-built a therapeutic VR platform with
              psychologists at Harvard and Penn Medicine that was validated in
              clinical trials. That is the work, and I still do it.
            </p>
          </div>
        </section>

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

      <TimelineJourney
        eyebrow="My story"
        title="From hustle to systems"
        headingId="from-hustle-heading"
        entries={timeline}
      />

      <TrackRecord />
      <ProjectsIndex />
    </>
  );
}