import type { Metadata } from "next";
import Link from "next/link";
import { CinematicPhoto } from "@/components/CinematicPhoto";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Systems Over Hustle`,
  description: "Scale revenue with brand strategy and AI visibility.",
  openGraph: {
    title: `${siteConfig.name} | Systems Over Hustle`,
    description: "Scale revenue with brand strategy and AI visibility.",
  },
};

const identity = ["Founder.", "Brand strategist.", "Growth marketer."];

const proof = [
  { kicker: "Author", value: "Entrepreneur" },
  { kicker: "Featured", value: "Forbes and The Guardian" },
  { kicker: "Startups mentored", value: "50+" },
] as const;

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
            Scale revenue with brand strategy and AI visibility.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            GEO and AI agents, used on companies I still run.
          </p>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-hero-portrait.jpg"
        alt="Nik Vassev smiling outdoors in a cream polo and glasses, palms behind him."
        className="h-[88vh] min-h-[32rem] w-full"
        objectPosition="center 32%"
        priority
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            I&apos;m Nik Vassev, a serial founder, brand strategist and growth
            marketer. I help founders scale revenue with brand strategy, GEO and
            AI agents.
          </p>
        </div>
      </section>

      <section className="border-y border-tan/40 bg-cream" aria-label="Proof">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3 md:px-10 lg:gap-10 lg:py-16">
          {proof.map((item) => (
            <p key={item.value} className="min-w-0">
              <span className="section-label block">{item.kicker}</span>
              <span className="mt-3 block font-serif text-2xl tracking-display md:text-3xl">
                {item.value}
              </span>
            </p>
          ))}
        </div>
      </section>

      <section id="work" className="scroll-mt-28 bg-forest-dark text-white">
        <div className="grid lg:grid-cols-2">
          <CinematicPhoto
            src="/photos/nik-portrait-studio.jpg"
            alt="Nik Vassev seated in a studio, black blazer and glasses, smiling at the camera."
            className="min-h-[70vh] w-full lg:min-h-[85vh]"
            objectPosition="center 20%"
          />
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-20 lg:px-16 xl:px-20">
            <p className="section-label !text-white/55">Guide IQ</p>
            <h2 className="mt-4 max-w-xl text-4xl text-white md:text-5xl lg:text-6xl">
              Build your brand strategy
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              Twelve founder questions. A full brand strategy and a 90-day plan,
              in about 15 minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://guideiq.ai"
                className="pill-btn-invert"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start with Guide IQ
              </a>
              <Link
                href="/brand-strategy#book"
                className="pill-btn border border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-novobeing.jpg"
        alt="Nik Vassev in a studio holding a Novobeing VR headset."
        className="h-[75vh] min-h-[28rem] w-full"
        objectPosition="center 25%"
      />

      <CinematicPhoto
        src="/photos/nik-team.jpg"
        alt="Nik Vassev with a team in a coworking space under a Find New Perspective sign."
        className="h-[75vh] min-h-[28rem] w-full"
        objectPosition="center"
      />

      <CinematicPhoto
        src="/photos/nik-keynote.png"
        alt="Nik Vassev on stage in a dark suit, holding a microphone during a keynote."
        className="h-[80vh] min-h-[30rem] w-full"
        objectPosition="center 20%"
      />

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
            <h2 className="text-5xl md:text-7xl lg:text-8xl">I AM NIK VASSEV</h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              I&apos;m a founder and brand strategist. I write Systems Over
              Hustle and I built Guide IQ so early-stage founders can get a
              brand strategy without an agency retainer. I work from the chair,
              on companies I still run.
            </p>
            <div className="mt-10">
              <Link href="/about" className="pill-btn-primary">
                About Nik
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
