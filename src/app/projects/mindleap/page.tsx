import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";
import { defaultShareImage } from "@/lib/site";

const project = getProject("mindleap");

export const metadata: Metadata = {
  title: "Mindleap Health",
  description:
    "I founded Mindleap for psychedelic preparation and integration. 30,000 users. Acquired by Mydecine for $3.5M in 24 months.",
  alternates: { canonical: "/projects/mindleap" },
  openGraph: {
    title: "Mindleap Health | Nik Vassev",
    description: "Prior venture. Founded, shipped and acquired.",
    images: [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultShareImage.url],
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
