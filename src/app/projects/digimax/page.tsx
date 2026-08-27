import type { Metadata } from "next";
import Image from "next/image";
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

  return (
    <ProjectArticle
      project={project}
      extra={
        <div className="mt-10 flex flex-col justify-center gap-4 rounded-card bg-forest px-6 py-8">
          <p className="section-label !text-white/60">Technology partner</p>
          <Image
            src="/logos/ibm-watson.png"
            alt="IBM Watson"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </div>
      }
    />
  );
}
