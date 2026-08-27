import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/MediaFrame";
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
        <>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <MediaFrame
              src="/photos/nik-novobeing.jpg"
              alt="Nik Vassev holding a white Novobeing VR headset."
              ratio="photo"
            />
            <div className="flex flex-col justify-center gap-4 rounded-card bg-forest px-6 py-8">
              <p className="section-label !text-white/60">Research partners</p>
              <div className="flex flex-wrap items-center gap-6">
                <Image
                  src="/logos/harvard.png"
                  alt="Harvard University"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/logos/penn.png"
                  alt="University of Pennsylvania"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Listed here for track record in healthtech. Current offerings live
            on Guide IQ and Storyline Pros.
          </p>
        </>
      }
    />
  );
}
