import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicPhoto } from "@/components/CinematicPhoto";
import { NewsletterForm } from "@/components/NewsletterForm";
import { pressLogos, siteConfig } from "@/lib/site";

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

const homepagePress = pressLogos.filter((logo) =>
  ["Entrepreneur", "Forbes", "The Guardian"].includes(logo.alt),
);

const splitSizes = "(min-width: 1024px) 50vw, 100vw";

export default function HomePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="grid min-h-screen lg:grid-cols-2">
          <div className="flex min-h-screen flex-col justify-between px-5 pb-10 pt-28 md:px-12 lg:px-16 xl:px-20">
            <div className="copy-measure">
              <div className="hero-stack space-y-1">
                {identity.map((line) => (
                  <p key={line} className="identity-line">
                    {line}
                  </p>
                ))}
              </div>
              <h1 className="mt-10 text-3xl md:text-4xl">
                Scale revenue with brand strategy and AI visibility.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                GEO and AI agents, used on companies I still run.
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
                I&apos;m Nik Vassev, a serial founder, brand strategist and
                growth marketer. I help founders scale revenue with brand
                strategy, GEO and AI agents.
              </p>
            </div>

            <div
              className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-tan"
              aria-label="Proof"
            >
              {proof.map((item) => (
                <p key={item.value} className="min-w-0 px-4 first:pl-0 last:pr-0">
                  <span className="block font-serif text-2xl tracking-display md:text-3xl">
                    {item.value}
                  </span>
                  <span className="mt-2 block font-sans text-[11px] font-semibold uppercase tracking-section text-forest">
                    {item.kicker}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <CinematicPhoto
            src="/photos/nik-hero-portrait.jpg"
            alt="Nik Vassev smiling outdoors in a cream polo and glasses, palms behind him."
            className="min-h-[70vh] w-full lg:min-h-screen"
            objectPosition="center 28%"
            priority
            sizes={splitSizes}
          />
        </div>
      </section>

      <section id="newsletter" className="relative min-h-[85vh] scroll-mt-8">
        <CinematicPhoto
          src="/photos/nik-speaking.jpg"
          alt="Nik Vassev speaking on stage, pointing at a slide titled What Not To Do."
          className="absolute inset-0 h-full w-full"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-forest-dark/55" />
        <div className="relative grid min-h-[85vh] lg:grid-cols-2">
          <div className="hidden lg:block" />
          <div className="flex items-center justify-center px-5 py-20 md:px-12">
            <div className="copy-measure bg-white p-8 md:p-10">
              <p className="section-label">Systems Over Hustle</p>
              <p className="mt-4 font-serif text-3xl tracking-display text-ink md:text-4xl">
                {siteConfig.newsletterPitch}
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                One email every Thursday.
              </p>
              <div className="mt-8">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-8 bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center px-5 py-20 md:px-12 lg:px-16">
            <div className="copy-measure">
              <p className="section-label">Guide IQ</p>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">
                Build your brand strategy
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
                Twelve founder questions. A full brand strategy and a 90-day
                plan, in about 15 minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://guideiq.ai"
                  className="pill-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start with Guide IQ
                </a>
                <Link href="/brand-strategy#book" className="pill-btn-secondary">
                  Book a call
                </Link>
              </div>
            </div>
          </div>
          <CinematicPhoto
            src="/photos/nik-portrait-studio.jpg"
            alt="Nik Vassev seated in a studio, black blazer and glasses, smiling at the camera."
            className="min-h-[70vh] w-full lg:min-h-[85vh]"
            objectPosition="center 18%"
            sizes={splitSizes}
          />
        </div>
      </section>

      <section className="bg-forest-dark" aria-label="Press">
        <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 px-5 py-12 md:py-14">
          {homepagePress.map((logo) => (
            <li key={logo.src} className="flex h-10 items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={64}
                className="h-8 w-auto max-h-8 object-contain brightness-0 invert md:h-9 md:max-h-9"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center px-5 py-20 md:px-12 lg:px-16">
            <div className="copy-measure">
              <h2 className="text-4xl md:text-6xl lg:text-7xl">
                I AM NIK VASSEV
              </h2>
              <p className="mt-8 text-base leading-relaxed text-ink-muted md:text-lg">
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
          </div>
          <CinematicPhoto
            src="/photos/nik-portrait-mexico.jpg"
            alt="Nik Vassev seated outdoors in Mexico, cream polo and glasses, smiling at the camera."
            className="min-h-[70vh] w-full lg:min-h-[85vh]"
            objectPosition="center 18%"
            sizes={splitSizes}
          />
        </div>
      </section>

      <section id="contact" className="relative min-h-[75vh] scroll-mt-8">
        <CinematicPhoto
          src="/photos/nik-beach.jpg"
          alt="Nik Vassev working at the beach."
          className="absolute inset-0 h-full w-full"
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 bg-forest-dark/55" />
        <div className="relative grid min-h-[75vh] lg:grid-cols-2">
          <div className="flex items-center px-5 py-20 md:px-12 lg:px-16">
            <div className="copy-measure text-white">
              <p className="text-lg leading-relaxed text-white/80">
                Prefer a conversation?{" "}
                <Link
                  href="/brand-strategy#book"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Book a strategy call
                </Link>{" "}
                or write{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="underline underline-offset-4 hover:text-white"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
              <div className="mt-8">
                <Link href="/brand-strategy#book" className="pill-btn-invert">
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
