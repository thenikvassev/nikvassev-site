import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";

const project = getProject("digimax");

export const metadata: Metadata = {
  title: "Digimax",
  description:
    "I joined the Digimax board for a strategic turnaround: rebrand, three acquisitions, AI crypto prediction and IBM Watson. Roughly $20M raised. Near $100M valuation.",
  openGraph: {
    title: "Digimax | Nik Vassev",
    description: "Prior board work. Turnaround, acquisitions and IBM Watson.",
  },
};

export default function DigimaxPage() {
  if (!project) notFound();

  return <ProjectArticle project={project} />;
}
