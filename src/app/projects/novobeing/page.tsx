import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";

const project = getProject("novobeing");

export const metadata: Metadata = {
  title: "Novobeing",
  description:
    "Therapeutic VR co-founded by Nik Vassev. Clinical research with Harvard and Penn Medicine. Four trials, $1.5M raised, CB Insights Top 150.",
  openGraph: {
    title: "Novobeing | Nik Vassev",
    description: "Prior venture. Therapeutic VR with clinical research partners.",
  },
};

export default function NovobeingPage() {
  if (!project) notFound();

  return (
    <ProjectArticle
      project={project}
      extra={
        <p className="mt-6 text-sm text-ink-muted">
          Listed here for track record in healthtech. Current offerings live on
          Guide IQ and Storyline Pros.
        </p>
      }
    />
  );
}
