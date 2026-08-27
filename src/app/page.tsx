import type { Metadata } from "next";
import Link from "next/link";
import { CinematicPhoto } from "@/components/CinematicPhoto";
import { PhotoCopyBand } from "@/components/PhotoCopyBand";
import { ClientsRow } from "@/components/ClientsRow";
import { PressRow } from "@/components/PressRow";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Systems Over Hustle`,
  description:
    "Brand strategy, growth marketing and AI visibility for startups scaling revenue with GEO and AI agents.",
  openGraph: {
    title: `${siteConfig.name} | Systems Over Hustle`,
    description:
      "Brand strategy, growth marketing and AI visibility for startups scaling revenue with GEO and AI agents.",
  },
};

const identity = ["Serial founder.", "Brand strategist.", "Growth marketer."];

const bio =
  "I'm Nik Vassev, a serial founder, brand strategist and growth marketer. I help startups scale revenue using modern brand strategy, GEO and AI agents.";

const proof = [
  { label: "Founder", value: "Guide IQ" },
  { label: "Co-founder", value: "Storyline Pros" },
  { label: "Writing", value: "Entrepreneur" },
  { label: "Mentoring", value: "Futurpreneur Canada" },
] as const;

const selectedWork = [
  {
    href: "/ai-visibility",
    name: "Storyline Pros",
    oneLiner:
      "Narrative engineering and AI visibility for later-stage B2B emerging tech. Performance-based PR with a make-good if a story does not publish.",
  },
  ...projects
    .filter((project) => project.slug !== "guide-iq")
    .map((project) => ({
      href: `/projects/${project.slug}`,
      name: project.name,
      oneLiner: project.oneLiner,
    })),
];

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24 lg:pt-28">
          <div className="space-y-1 md:space-y-2">
            {identity.map((line) => (
              <p key={line} className="identity-line">
                {line}
              </p>
            ))}
          </div>
          <h1 className="mt-12 max-w-3xl text-3xl md:text-5xl lg:text-6xl">
            Scale revenue with brand strategy, GEO and AI agents.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            {bio}
          </p>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-hero-portrait.jpg"
        alt="Nik Vassev smiling outdoors in a cream polo and glasses, palms behind him."
        className="h-[88vh] min-h-[32rem] w-full"
        objectPosition="center 18%"
        priority
      />

      <section className="border-y border-tan/40 bg-cream" aria-label="Roles">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-6 lg:py-16">
          {proof.map((item) => (
            <p key={item.value} className="min-w-0">
              <span className="section-label block">{item.label}</span>
              <span className="mt-3 block font-serif text-2xl tracking-display md:text-3xl">
                {item.value}
              </span>
            </p>
          ))}
        </div>
      </section>

      <PhotoCopyBand
        invert
        eyebrow="Ventures"
        title="Guide IQ"
        body="AI Brand Strategist for early-stage founders. Brand DNA, voice and a 90-day GTM in about 15 minutes."
        href="/brand-strategy"
        cta="Explore brand strategy"
        image="/photos/nik-portrait-studio.jpg"
        imageAlt="Nik Vassev seated in a studio, black blazer and glasses, smiling at the camera."
        objectPosition="center 20%"
      />

      <PressRow />
      <ClientsRow invert />

      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <CinematicPhoto
            src="/photos/nik-novobeing.jpg"
            alt="Nik Vassev in a studio holding a Novobeing VR headset."
            className="min-h-[70vh] w-full lg:min-h-[85vh]"
            objectPosition="center 25%"
          />
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-20 lg:px-16">
            <p className="section-label">Selected work</p>
            <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">
              Companies I have built and scaled
            </h2>
            <ul className="mt-10 space-y-8">
              {selectedWork.map((item) => (
                <li key={item.name} className="border-t border-tan/40 pt-8">
                  <Link
                    href={item.href}
                    className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                  >
                    <h3 className="font-serif text-2xl font-normal tracking-display text-ink group-hover:text-forest md:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
                      {item.oneLiner}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/projects" className="pill-btn-secondary">
                All projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-team.jpg"
        alt="Nik Vassev with a team in a coworking space under a Find New Perspective sign."
        className="h-[75vh] min-h-[28rem] w-full"
        objectPosition="center"
      />

      <section className="bg-forest-dark text-white">
        <div className="grid lg:grid-cols-2">
          <CinematicPhoto
            src="/photos/nik-keynote.png"
            alt="Nik Vassev on stage in a dark suit, holding a microphone during a keynote."
            className="min-h-[70vh] w-full lg:min-h-[85vh]"
            objectPosition="center 20%"
          />
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-20 lg:px-16">
            <p className="section-label !text-white/55">Speaking and media</p>
            <h2 className="mt-4 max-w-xl text-4xl text-white md:text-5xl">
              Get in touch for speaking, podcasts and press.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              I speak on brand strategy, AI visibility and building companies
              that leave room for a life. For podcasts, press or a stage, write
              or send a LinkedIn note.
            </p>
            <p className="mt-6 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-white underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href={siteConfig.social.linkedin}
                className="font-medium text-white underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <div className="mt-8">
              <Link href="/brand-strategy#book" className="pill-btn-invert">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-speaking.jpg"
        alt="Nik Vassev speaking on stage, pointing at a slide titled What Not To Do."
        className="h-[70vh] min-h-[28rem] w-full"
        objectPosition="center"
      />

      <CinematicPhoto
        src="/photos/nik-beach.jpg"
        alt="Nik Vassev working at the beach."
        className="h-[80vh] min-h-[30rem] w-full"
        objectPosition="center 30%"
      />

      <section className="bg-cream">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-20 md:px-12 lg:px-16">
            <p className="text-lg text-ink-muted md:text-xl">
              {identity.join(" ")}
            </p>
            <h2 className="mt-6 text-5xl md:text-7xl lg:text-8xl">
              I am Nik Vassev
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              {bio}
            </p>
            <div className="mt-10">
              <Link href="/about" className="pill-btn-primary">
                About
              </Link>
            </div>
          </div>
          <CinematicPhoto
            src="/photos/nik-portrait-mexico.jpg"
            alt="Nik Vassev seated outdoors in Mexico, cream polo and glasses, smiling at the camera."
            className="min-h-[70vh] w-full lg:min-h-[85vh]"
            objectPosition="center 20%"
          />
        </div>
      </section>
    </>
  );
}
