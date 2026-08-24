import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

const project = getProject("guide-iq");

export const metadata: Metadata = {
  title: "Guide IQ",
  description:
    "AI Brand Strategist for early-stage founders. Brand DNA, voice and visuals, and a 90-day GTM in about 15 minutes.",
  openGraph: {
    title: "Guide IQ | Nik Vassev",
    description:
      "AI Brand Strategist for early-stage founders. Brand DNA and 90-day GTM.",
  },
};

export default function GuideIqPage() {
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">Project · Active</p>
      <h1 className="mt-4 text-4xl tracking-display md:text-5xl">
        {project.name}
      </h1>
      <p className="mt-4 text-lg text-ink-muted">{project.oneLiner}</p>

      <div className="prose-nik mt-10 max-w-reading">
        <p>{project.summary}</p>
        <p>
          This is not an unsupervised marketing agent. Guide IQ builds the
          brand and strategy foundation a founder needs, then embeds that
          context into the AI tools you already use so output stays on brand.
        </p>
        <p>
          Typical path: free Brand DNA start, full Brand Brain around $99, and
          optional Strategist Session for deeper work. Built for early-stage
          brand strategy when you need clarity before you scale channels.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="https://guideiq.ai"
          className="pill-btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Guide IQ
        </a>
        <Link href="/brand-strategy" className="pill-btn-secondary">
          Brand strategy with Nik
        </Link>
      </div>

      <p className="mt-12">
        <Link href="/projects" className="text-sm font-medium text-forest">
          ← All projects
        </Link>
      </p>
    </article>
  );
}
