import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NovobeingResults } from "@/components/NovobeingResults";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";

const project = getProject("novobeing");

export const metadata: Metadata = {
  title: "Novobeing",
  description:
    "I co-founded Novobeing to bring relief to patients in hospitals using virtual reality. Four clinical trials with Harvard and Penn Medicine. $1.5M raised. CB Insights Top 150.",
  openGraph: {
    title: "Novobeing | Nik Vassev",
    description: "Prior venture. Therapeutic VR validated with Harvard and Penn Medicine.",
  },
};

export default function NovobeingPage() {
  if (!project) notFound();

  return (
    <ProjectArticle
      project={project}
      extra={
        <>
          <figure className="mt-12 overflow-hidden rounded-card border border-tan/40 bg-cream">
            <Image
              src="/photos/novobeing-product-features.png"
              alt="Novobeing product features: controller-free operation, outcomes tracking, plug-and-play integration, preloaded clinical programs, and sanitization options."
              width={1280}
              height={844}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 896px, 100vw"
            />
          </figure>

          <NovobeingResults />

          <p className="mt-6 text-sm text-ink-muted">
            Listed here for track record in healthtech. Current offerings live on
            Guide IQ and Storyline Pros.
          </p>
        </>
      }
    />
  );
}
