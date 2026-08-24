import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

const project = getProject("novobeing");

export const metadata: Metadata = {
  title: "Novobeing",
  description:
    "Therapeutic VR co-founded by Nik Vassev. Clinical research context with Harvard-affiliated and Penn Medicine partners.",
  openGraph: {
    title: "Novobeing | Nik Vassev",
    description: "Prior venture. Therapeutic VR with clinical research partners.",
  },
};

export default function NovobeingPage() {
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">Project · Prior</p>
      <h1 className="mt-4 text-4xl tracking-display md:text-5xl">
        {project.name}
      </h1>
      <p className="mt-4 text-lg text-ink-muted">{project.oneLiner}</p>

      <div className="prose-nik mt-10 max-w-reading">
        <p>{project.summary}</p>
        <p>
          Listed here for credibility in healthtech and product building. For
          current product offerings see Guide IQ and Storyline Pros.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="https://novobeing.com"
          className="pill-btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Novobeing site
        </a>
      </div>

      <p className="mt-12">
        <Link href="/projects" className="text-sm font-medium text-forest">
          ← All projects
        </Link>
      </p>
    </article>
  );
}
