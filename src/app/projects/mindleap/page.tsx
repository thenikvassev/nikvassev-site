import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";

const project = getProject("mindleap");

export const metadata: Metadata = {
  title: "Mindleap Health",
  description:
    "Digital mental health platform for psychedelic preparation and integration. Founded by Nik Vassev. 30,000 users. $3.5M acquisition.",
  openGraph: {
    title: "Mindleap Health | Nik Vassev",
    description: "Built and acquired. Track record in digital mental health.",
  },
};

export default function MindleapPage() {
  if (!project) notFound();

  return (
    <ProjectArticle
      project={project}
      extra={
        <p className="mt-6 text-sm text-ink-muted">
          Mindleap is track record, not an active offering. The work of
          building, shipping and exiting that company sits behind the brand and
          systems work I do with founders today.
        </p>
      }
    />
  );
}
