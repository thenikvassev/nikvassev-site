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
    body: "I started my career in commission-only, door-to-door sales. The conditions were brutal and rejection was constant, but at that stage of my life hustle wasn't a philosophy, it was the only option. I learned to push through discomfort and to believe that outworking everyone else was the answer. For a while it worked. I made good money and paid my way through school, becoming a top performer at a young age. Effort felt like the solution to every problem, and I carried that belief into everything that followed.",
    image: "/photos/timeline-2011.jpg",
    imageAlt: "Nik receiving a trophy at an outdoor awards ceremony early in his career.",
  },
  {
    year: "2015",
    title: "Tech Sales",
    body: "I moved into tech and started as a business development rep, cold-calling leads and working my way up. Within a few years I hit President's Club and closed enterprise deals with organizations like the NFL, Volkswagen and government agencies in both the U.S. and Canada. On paper, I had made it. The income was strong and the career path was clear, but the reality of a high-performing nine-to-five still felt limiting. I wanted more ownership and autonomy, something that was mine to build.",
    image: "/photos/timeline-2015-qlik.jpg",
    imageAlt:
      "Nik presenting a Qlik analytics whiteboard in a tech sales office.",
  },
  {
    year: "2018",
    title: "First Startup Failure",
    body: "That desire led me to my first company, an e-commerce dropshipping business. Sales came quickly and volume looked promising, but profits never followed. The model was flawed, and eventually the business collapsed. That failure took more from me than I expected. Burnout set in, followed by a period of depression, and I found myself back in a cubicle selling software again. It was my first real lesson that building companies requires far more than effort alone.",
    image: "/photos/timeline-2018.jpg",
    imageAlt:
      "Shopify overview dashboard showing Tip Top Gizmos sales from late 2018.",
  },
  {
    year: "2020",
    title: "My First Exit",
    body: "I tried again, this time with better judgment and sharper execution. Within 24 months I exited my second startup, made my first million before thirty and checked every external box of success. I helped my parents and bought the things I'd once only dreamed about. But the win didn't feel the way I expected it to. What actually mattered was the impact of building something real and useful. Founders began reaching out, so I started mentoring and sharing what I'd learned along the way.",
    image: "/photos/timeline-2020.jpg",
    imageAlt:
      "Nik with his team under a Find New Perspective sign after his first exit.",
  },
  {
    year: "2021",
    title: "My Third Startup",
    body: "That path led me to co-found Novobeing, a therapeutic VR company designed to help patients in hospitals. We co-developed the technology with Harvard, raised capital and built a strong team around a mission that genuinely mattered. Yet despite the progress, I fell back into familiar patterns: ten-hour days and constant pressure, then another cycle of burnout. My outcomes had improved. The way I was building had not.",
    image: "/photos/timeline-2021.jpg",
    imageAlt:
      "Nik presenting Novobeing at The Roux Institute with Sid Desai.",
  },
  {
    year: "2024",
    title: "The Shift to Systems",
    body: "The real change came when I stopped optimizing for hustle and started designing systems. I focused on building companies that could scale without my constant presence, with decisions that didn't require being online at all hours. I built Guide IQ, an AI-powered marketing system for founders, and started helping other founders build companies that support their lives. My businesses now run on less of my time and more leverage. Systems over hustle is how everything I build works now.",
    image: "/photos/guide-iq.jpg",
    imageAlt:
      "Human and robotic hands reaching toward a glowing orange brain on a black background.",
  },
  {
    year: "2025",
    title: "The Move to Mexico",
    body: "Leaving Vancouver for Mexico was the whole point. I traded grey mornings and a packed calendar for the Caribbean coast, for warmer weather year-round and more time outdoors. Now there's a beach I can walk to whenever I want to think. The work is still demanding. My life finally has room in it.",
    image: "/photos/nik-portrait-mexico.jpg",
    imageAlt: "Nik Vassev portrait from Mexico.",
  },
  {
    year: "2026",
    title: "Storyline Pros",
    body: "By 2026 it was clear: AI was becoming the new front door, and buyers were asking it who to trust instead of reading landing pages. I'd spent years building narrative engineering experience and real relationships in the media, so I co-founded Storyline Pros with Cynthia Salarizadeh to help companies become the answer AI recommends.",
    image: "/photos/storyline-pros.jpg",
    imageAlt:
      "Founder pointing at stacked AI search prompts that all resolve to you.",
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