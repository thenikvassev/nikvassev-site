import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">404</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        This page isn&apos;t here.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        The link may be old, or I never published this URL. Home, Resources,
        and the newsletter are still here.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="pill-btn-primary">
          Home
        </Link>
        <Link href="/resources" className="pill-btn-secondary">
          Resources
        </Link>
        <Link href="/newsletter" className="pill-btn-secondary">
          Newsletter
        </Link>
      </div>
    </article>
  );
}
