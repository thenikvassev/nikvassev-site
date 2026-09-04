import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";

const project = getProject("digimax");

export const metadata: Metadata = {
  title: "Digimax",
  description:
    "Board turnaround at Digimax: rebrand, three acquisitions, AI crypto price prediction and an expanded IBM Watson partnership. About $20M raised. About $100M valuation.",
  openGraph: {
    title: "Digimax | Nik Vassev",
    description: "Prior board work. Turnaround, acquisitions and IBM Watson.",
  },
};

export default function DigimaxPage() {
  if (!project) notFound();

  return <ProjectArticle project={project} />;
}
