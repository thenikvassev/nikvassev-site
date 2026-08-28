import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="flex flex-col items-center gap-8 px-5 py-16 text-center">
        <p className="font-serif text-xl tracking-display">Nik Vassev</p>
        <nav
          aria-label="Footer"
          className="flex flex-col items-center gap-5 text-[11px] font-semibold uppercase tracking-section text-white/70 md:flex-row md:gap-6"
        >
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6 text-[11px] font-semibold uppercase tracking-section text-white/70">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
        <p className="text-xs uppercase tracking-section text-white/50">
          Nik Vassev. Systems Over Hustle. © 2026
        </p>
      </div>
    </footer>
  );
}
