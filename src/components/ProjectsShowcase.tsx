import { CardLink } from "@/components/CardLink";
import {
  activeProjects,
  priorProjects,
  storylineProsOverview,
} from "@/lib/projects";

type Props = {
  variant: "home" | "page";
};

function ActiveProjectCards() {
  return (
    <>
      {activeProjects.map((p) => (
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
        href={storylineProsOverview.href}
        title={storylineProsOverview.title}
        benefit={storylineProsOverview.benefit}
        meta={storylineProsOverview.meta}
        image={storylineProsOverview.image}
        imageAlt={storylineProsOverview.imageAlt}
      />
    </>
  );
}

function PriorProjectCards() {
  return (
    <>
      {priorProjects.map((p) => (
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
    </>
  );
}

export function ProjectsShowcase({ variant }: Props) {
  if (variant === "page") {
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
            <ActiveProjectCards />
          </div>
        </section>

        <section className="mt-16">
          <p className="section-label">Prior</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <PriorProjectCards />
          </div>
        </section>
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="nv nv-projects scroll-mt-28"
      aria-labelledby="projects-heading"
    >
      <div className="nv-projects-inner">
        <p className="nv-eyebrow">Projects</p>
        <h2 id="projects-heading" className="nv-section-title">
          Ventures I have built and the work still shipping.
        </h2>
        <p className="nv-projects-lead">
          Active products first. Prior companies for context and track record.
        </p>

        <section className="nv-projects-group">
          <p className="nv-projects-group-label">Active</p>
          <div className="nv-projects-grid">
            <ActiveProjectCards />
          </div>
        </section>

        <section className="nv-projects-group nv-projects-group--prior">
          <p className="nv-projects-group-label">Prior</p>
          <div className="nv-projects-grid">
            <PriorProjectCards />
          </div>
        </section>
      </div>
    </section>
  );
}
