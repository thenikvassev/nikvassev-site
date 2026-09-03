import type { Metadata } from "next";
import { CardLink } from "@/components/CardLink";
import { projects } from "@/lib/projects";

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
  const active = projects.filter((p) => p.status === "active");
  const prior = projects.filter((p) => p.status === "prior");

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">Projects</p>
      <h1 className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl">
        Ventures I have built and the work still shipping.
      </h1>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        Active products first. Prior companies for context and track record.
      </p>

      <section className="mt-14">
        <p className="section-label">Active</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {active.map((p) => (
            <CardLink
              key={p.slug}
              href={`/projects/${p.slug}`}
              title={p.name}
              benefit={p.oneLiner}
              meta={p.role}
              image={p.image}
              imageAlt={p.imageAlt}
            />
          ))}
          <CardLink
            href="/ai-visibility"
            title="Storyline Pros"
            benefit="Narrative engineering and AI visibility for later-stage B2B emerging tech. Co-founded with Cynthia Salarizadeh."
            meta="Co-Founder"
            image="/placeholders/storyline-media.svg"
            imageAlt="Placeholder for Storyline Pros"
          />
        </div>
      </section>

      <section className="mt-16">
        <p className="section-label">Prior</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {prior.map((p) => (
            <CardLink
              key={p.slug}
              href={`/projects/${p.slug}`}
              title={p.name}
              benefit={p.oneLiner}
              meta={p.role}
              image={p.image}
              imageAlt={p.imageAlt}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
