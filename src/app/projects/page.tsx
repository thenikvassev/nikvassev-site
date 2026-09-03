import type { Metadata } from "next";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Active ventures and prior companies from Nik Vassev: Guide IQ, Novobeing, Mindleap Health, Digimax and Storyline Pros.",
  openGraph: {
    title: "Projects | Nik Vassev",
    description:
      "Active ventures and prior companies: Guide IQ, Novobeing, Mindleap Health, Digimax.",
  },
};

export default function ProjectsPage() {
  return <ProjectsShowcase variant="page" />;
}
