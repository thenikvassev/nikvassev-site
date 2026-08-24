import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24">
      {/* Restrained inverted band — Storyline key1 */}
      <div className="bg-forest-dark text-white">
        <div className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-16">
          <p className="section-label !text-white/60">Stay in the loop</p>
          <h2 className="mt-3 max-w-xl text-2xl tracking-display md:text-3xl">
            {siteConfig.newsletter}
          </h2>
          <p className="mt-3 max-w-lg font-sans text-white/75">
            {siteConfig.newsletterOneLiner} Thursdays. Free.
          </p>
          <div className="mt-6 max-w-md">
            <NewsletterForm variant="dark" />
          </div>
          <p className="mt-8 font-sans text-sm text-white/70">
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
        </div>
      </div>

      <div className="border-t border-tan/50 bg-white">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-semibold text-ink">
              © {year} Nik Vassev / Systems Over Hustle
            </p>
            <p className="mt-1 text-sm text-ink-faint">
              Based in {siteConfig.location}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-forest">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
