import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div id="newsletter" className="scroll-mt-28 bg-forest-dark text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
          <p className="section-label !text-white/55">Newsletter</p>
          <p className="mt-5 max-w-2xl font-serif text-3xl tracking-display md:text-5xl">
            {siteConfig.newsletterPitch}
          </p>
          <p className="mt-4 max-w-lg font-sans text-white/75">
            Thursdays. Free.
          </p>
          <div className="mt-8 max-w-md">
            <NewsletterForm variant="dark" />
          </div>
          <p className="mt-10 font-sans text-sm text-white/70">
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
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-sm font-semibold text-ink">
            © {year} Nik Vassev
          </p>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-section text-ink-muted"
          >
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
