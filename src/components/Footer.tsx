import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24">
      <div id="newsletter" className="nv nv-newsletter scroll-mt-28">
        <div className="nv-newsletter-inner">
          <h2>Brand strategy &amp; AI systems to dominate your category.</h2>
          <p className="nv-newsletter-body">
            I write a weekly letter called Systems Over Hustle. Every Thursday,
            it&apos;s packed with real-world brand strategy, AI workflows, and
            practical insights to help you build a high-impact company without
            outworking a broken process.
          </p>
          <p className="nv-newsletter-lead">
            Join the entrepreneurs building smarter, not harder.
          </p>
          <div className="nv-newsletter-form">
            <NewsletterForm variant="dark" />
          </div>
          <p className="nv-newsletter-note">
            1 actionable framework delivered every Thursday. Zero fluff.
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
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted"
          >
            {footerNav.map((item) => (
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
