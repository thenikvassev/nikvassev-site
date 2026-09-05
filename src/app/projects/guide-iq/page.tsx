import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/MediaFrame";
import { ProjectArticle } from "@/components/ProjectArticle";
import { getProject } from "@/lib/projects";

const project = getProject("guide-iq");

export const metadata: Metadata = {
  title: "Guide IQ",
  description:
    "AI Brand Strategist for early-stage founders. Twelve inputs, about 15 minutes. Free Brand DNA, $99 Brand Brain, $750 strategist session.",
  alternates: { canonical: "/projects/guide-iq" },
  openGraph: {
    title: "Guide IQ | Nik Vassev",
    description:
      "AI Brand Strategist for early-stage founders. Brand DNA and 90-day GTM.",
  },
};

export default function GuideIqPage() {
  if (!project) notFound();

  return (
    <ProjectArticle
      project={project}
      extra={
        <>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <MediaFrame
              src="/placeholders/guide-iq-product.svg"
              alt="Placeholder for a Guide IQ product still"
              label="Photo: Guide IQ product"
              ratio="video"
            />
            <MediaFrame
              src="/placeholders/guide-iq-session.svg"
              alt="Placeholder for a Guide IQ strategist session"
              label="Photo: Strategist session"
              ratio="video"
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/brand-strategy" className="pill-btn-secondary">
              Brand strategy with Nik
            </Link>
          </div>
        </>
      }
    />
  );
}
