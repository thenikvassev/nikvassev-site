import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 py-14 text-center md:py-16">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-section text-white/70"
        >
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-white/60">
          Nik Vassev. Systems Over Hustle. © 2026
        </p>
      </div>
    </footer>
  );
}
