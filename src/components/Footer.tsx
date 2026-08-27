import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 md:mt-24">
      <div className="bg-forest-dark text-white">
        <div className="section-shell py-16 md:py-24">
          <p className="section-label !text-white/60 before:!bg-white/30">
            Stay in the loop
          </p>
          <p className="mt-5 max-w-2xl font-serif text-3xl tracking-display md:text-4xl lg:text-5xl">
            {siteConfig.newsletterPitch}
          </p>
          <p className="mt-5 max-w-lg font-sans text-white/75">
            Thursdays. Free.
          </p>
          <div className="mt-8 max-w-md">
            <NewsletterForm variant="dark" />
          </div>
          <p className="mt-10 font-sans text-sm text-white/70">
            Prefer a conversation?{" "}
            <Link
              href="/brand-strategy#book"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              Book a strategy call
            </Link>{" "}
            or write{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-tan bg-white">
        <div className="section-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">
              © {year} Nik Vassev / Systems Over Hustle
            </p>
            <p className="mt-1 text-sm text-ink-faint">
              Based in {siteConfig.location}
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
