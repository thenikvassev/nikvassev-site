import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicPhoto } from "@/components/CinematicPhoto";
import { ContactForm } from "@/components/ContactForm";
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

const heroGraf =
  "Scale revenue with brand strategy and AI visibility. GEO and AI agents, used at Guide IQ and Storyline Pros. I'm Nik Vassev, a serial founder, brand strategist and growth marketer. I run Guide IQ and Storyline Pros.";

const proof = [
  { kicker: "Author", value: "Entrepreneur" },
  { kicker: "Featured", value: "Forbes and The Guardian" },
  { kicker: "Startups mentored", value: "50+" },
] as const;

const homepagePress = pressLogos.filter((logo) =>
  ["Entrepreneur", "Forbes", "The Guardian"].includes(logo.alt),
);

const splitSizes = "(min-width: 1024px) 50vw, 100vw";

function IdentityHeadline({
  className = "",
}: {
  className?: string;
}) {
  return (
    <h1 className={`hero-stack ${className}`}>
      {identity.map((line) => (
        <span key={line} className="identity-line block">
          {line}
        </span>
      ))}
    </h1>
  );
}

export default function HomePage() {
  const ticker = [...homepagePress, ...homepagePress, ...homepagePress];

  return (
    <>
      <section className="relative h-[760px] overflow-hidden bg-cream lg:hidden">
        <CinematicPhoto
          src="/photos/nik-hero-portrait.jpg"
          alt="Nik Vassev smiling outdoors in a cream polo and glasses, palms behind him."
          className="absolute inset-0 h-full w-full"
          objectPosition="72% 28%"
          priority
        />
        <div className="absolute inset-x-0 top-[168px] px-9">
          <IdentityHeadline />
          <p className="hero-bio mt-5 max-w-[220px]">{heroGraf}</p>
        </div>
      </section>

      <section className="hidden bg-cream lg:block">
        <div className="grid min-h-screen lg:grid-cols-2">
          <div className="flex min-h-screen flex-col justify-between px-16 pb-12 pt-[160px] xl:px-20">
            <div className="copy-measure">
              <IdentityHeadline />
              <p className="hero-bio mt-8">{heroGraf}</p>
            </div>
            <div
              className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-tan"
              aria-label="Proof"
            >
              {proof.map((item) => (
                <p key={item.value} className="min-w-0 px-5 first:pl-0 last:pr-0">
                  <span className="block font-serif text-3xl tracking-display">
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
            className="min-h-screen w-full"
            objectPosition="center 28%"
            priority
            sizes={splitSizes}
          />
        </div>
      </section>

      <section className="bg-forest-dark px-6 py-16 lg:hidden" aria-label="Proof">
        <ul className="mx-auto flex max-w-[230px] flex-col items-center gap-[60px] text-center">
          {proof.map((item) => (
            <li key={item.value} className="w-full">
              <p className="font-serif text-4xl tracking-display text-white">
                {item.value}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-section text-white/60">
                {item.kicker}
              </p>
              <span className="mx-auto mt-6 block h-px w-full bg-white/25" />
            </li>
          ))}
        </ul>
      </section>

      <div id="newsletter" className="scroll-mt-8">
      <section
        className="bg-forest-dark px-[30px] pb-16 pt-4 lg:hidden"
      >
        <div className="relative mx-auto h-[300px] w-full max-w-[330px] overflow-hidden">
          <Image
            src="/photos/nik-speaking.jpg"
            alt="Nik Vassev speaking on stage, pointing at a slide titled What Not To Do."
            fill
            className="object-cover"
            sizes="330px"
          />
        </div>
        <div className="mx-auto mt-10 max-w-[330px] text-center text-white">
          <p className="section-label !text-white/55">Systems Over Hustle</p>
          <p className="mt-4 font-serif text-3xl tracking-display">
            {siteConfig.newsletterPitch}
          </p>
          <p className="mt-4 text-sm text-white/75">One email every Thursday.</p>
          <div className="mt-8">
            <NewsletterForm variant="dark" stacked />
          </div>
        </div>
      </section>

      <section className="relative hidden min-h-[85vh] lg:block">
        <CinematicPhoto
          src="/photos/nik-speaking.jpg"
          alt="Nik Vassev speaking on stage, pointing at a slide titled What Not To Do."
          className="absolute inset-0 h-full w-full"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-forest-dark/55" />
        <div className="relative grid min-h-[85vh] lg:grid-cols-2">
          <div />
          <div className="flex items-center justify-center px-12 py-20">
            <div className="copy-measure bg-white p-10">
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
      </div>

      <div id="work" className="scroll-mt-8">
      <section className="bg-white px-12 py-16 lg:hidden">
        <p className="section-label">Guide IQ</p>
        <h2 className="mt-4 text-4xl">Build your brand strategy</h2>
        <p className="mt-6 text-base leading-relaxed text-ink-muted">
          Twelve founder questions. A full brand strategy and a 90-day plan, in
          about 15 minutes.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3">
          <a
            href="https://guideiq.ai"
            className="rect-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start with Guide IQ
          </a>
          <Link href="/brand-strategy#book" className="rect-btn-outline">
            Book a call
          </Link>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-portrait-studio.jpg"
        alt="Nik Vassev seated in a studio, black blazer and glasses, smiling at the camera."
        className="h-[400px] w-full lg:hidden"
        objectPosition="center 18%"
      />

      <section className="bg-white px-12 py-16 lg:hidden">
        <p className="section-label">Storyline Pros</p>
        <h2 className="mt-4 text-4xl">
          AI visibility for later-stage companies.
        </h2>
        <div className="mt-8">
          <a
            href="https://storylinepros.com"
            className="rect-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storyline Pros
          </a>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-keynote.png"
        alt="Nik Vassev on stage in a dark suit, holding a microphone during a keynote."
        className="h-[400px] w-full lg:hidden"
        objectPosition="center 20%"
      />

      <section className="hidden bg-white lg:block">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center px-16 py-24">
            <div className="copy-measure">
              <p className="section-label">Guide IQ</p>
              <h2 className="mt-4 text-5xl lg:text-6xl">
                Build your brand strategy
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Twelve founder questions. A full brand strategy and a 90-day
                plan, in about 15 minutes.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <a
                  href="https://guideiq.ai"
                  className="rect-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start with Guide IQ
                </a>
                <Link href="/brand-strategy#book" className="rect-btn-outline">
                  Book a call
                </Link>
              </div>
            </div>
          </div>
          <CinematicPhoto
            src="/photos/nik-portrait-studio.jpg"
            alt="Nik Vassev seated in a studio, black blazer and glasses, smiling at the camera."
            className="min-h-[85vh] w-full"
            objectPosition="center 18%"
            sizes={splitSizes}
          />
        </div>
      </section>

      <section className="hidden bg-white lg:block">
        <div className="grid lg:grid-cols-2">
          <CinematicPhoto
            src="/photos/nik-keynote.png"
            alt="Nik Vassev on stage in a dark suit, holding a microphone during a keynote."
            className="min-h-[85vh] w-full"
            objectPosition="center 20%"
            sizes={splitSizes}
          />
          <div className="flex items-center justify-center px-16 py-24">
            <div className="copy-measure">
              <p className="section-label">Storyline Pros</p>
              <h2 className="mt-4 text-5xl">
                AI visibility for later-stage companies.
              </h2>
              <div className="mt-8">
                <a
                  href="https://storylinepros.com"
                  className="rect-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Storyline Pros
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="overflow-hidden bg-forest-dark py-8" aria-label="Press">
        <div className="flex w-max press-marquee items-center gap-16 px-8">
          {ticker.map((logo, i) => (
            <Image
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={220}
              height={64}
              className="h-8 w-auto max-h-8 object-contain brightness-0 invert"
            />
          ))}
        </div>
      </section>

      <section className="bg-white px-12 py-16 lg:hidden">
        <h2 className="text-4xl">I AM NIK VASSEV</h2>
        <p className="mt-8 text-base leading-relaxed text-ink-muted">
          I&apos;m a founder and brand strategist. I write Systems Over Hustle,
          I built Guide IQ for early-stage brand strategy, and I run Storyline
          Pros for companies that need AI visibility. I work from the chair, on
          companies I still run.
        </p>
        <div className="mt-10">
          <Link href="/about" className="rect-btn">
            About Nik
          </Link>
        </div>
      </section>

      <CinematicPhoto
        src="/photos/nik-portrait-mexico.jpg"
        alt="Nik Vassev seated outdoors in Mexico, cream polo and glasses, smiling at the camera."
        className="h-[400px] w-full lg:hidden"
        objectPosition="center 18%"
      />

      <section className="hidden bg-white lg:block">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center px-16 py-24">
            <div className="copy-measure">
              <h2 className="text-6xl lg:text-7xl">I AM NIK VASSEV</h2>
              <p className="mt-8 text-lg leading-relaxed text-ink-muted">
                I&apos;m a founder and brand strategist. I write Systems Over
                Hustle, I built Guide IQ for early-stage brand strategy, and I
                run Storyline Pros for companies that need AI visibility. I work
                from the chair, on companies I still run.
              </p>
              <div className="mt-10">
                <Link href="/about" className="rect-btn">
                  About Nik
                </Link>
              </div>
            </div>
          </div>
          <CinematicPhoto
            src="/photos/nik-portrait-mexico.jpg"
            alt="Nik Vassev seated outdoors in Mexico, cream polo and glasses, smiling at the camera."
            className="min-h-[85vh] w-full"
            objectPosition="center 18%"
            sizes={splitSizes}
          />
        </div>
      </section>

      <section id="contact" className="relative min-h-[85vh] scroll-mt-8">
        <CinematicPhoto
          src="/photos/nik-beach.jpg"
          alt="Nik Vassev working at the beach."
          className="absolute inset-0 h-full w-full"
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 bg-forest-dark/50" />
        <div className="relative flex min-h-[85vh] items-center justify-center px-6 py-20 lg:justify-start lg:px-16">
          <div className="w-full max-w-[330px] bg-cream/45 p-6 backdrop-blur-md md:p-8">
            <h2 className="text-center font-serif text-3xl tracking-display text-white">
              Contact
            </h2>
            <p className="mt-3 text-center text-sm text-white/80">
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
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
