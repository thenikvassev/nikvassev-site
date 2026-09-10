import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";
import { defaultShareImage } from "@/lib/site";

const project = getProject("digimax");

export const metadata: Metadata = {
  title: "Digimax",
  description:
    "I joined the Digimax board for a strategic turnaround: rebrand, three acquisitions, AI crypto prediction and IBM Watson. Roughly $20M raised. Near $100M valuation.",
  alternates: { canonical: "/projects/digimax" },
  openGraph: {
    title: "Digimax | Nik Vassev",
    description: "Prior board work. Turnaround, acquisitions and IBM Watson.",
    images: [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultShareImage.url],
  },
};

export default function DigimaxPage() {
  if (!project) notFound();

  return <ProjectArticle project={project} />;
}
