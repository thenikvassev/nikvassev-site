import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

const project = getProject("mindleap");

export const metadata: Metadata = {
  title: "Mindleap Health",
  description:
    "Digital mental health platform for psychedelic preparation and integration. Founded by Nik Vassev and acquired.",
  openGraph: {
    title: "Mindleap Health | Nik Vassev",
    description: "Built and acquired. Track record in digital mental health.",
  },
};

export default function MindleapPage() {
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
          Mindleap is track record, not an active offering. The lessons from
          building, shipping, and exiting that company sit behind the brand and
          systems work I do with founders today.
        </p>
      </div>

      <p className="mt-12">
        <Link href="/projects" className="text-sm font-medium text-forest">
          ← All projects
        </Link>
      </p>
    </article>
  );
}
