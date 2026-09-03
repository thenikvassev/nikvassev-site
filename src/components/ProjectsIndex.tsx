import { CardLink } from "@/components/CardLink";
import {
  activeProjects,
  priorProjects,
  storylineProsOverview,
} from "@/lib/projects";

export function ProjectsIndex() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 mx-auto max-w-content px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="projects-heading"
    >
      <p className="section-label">Projects</p>
      <h2
        id="projects-heading"
        className="mt-4 max-w-2xl text-4xl tracking-display md:text-5xl"
      >
        Ventures I have built and the work still shipping.
      </h2>
      <p className="mt-6 max-w-reading text-lg text-ink-muted">
        Active products first. Prior companies for context and track record.
      </p>

      <section className="mt-14">
        <p className="section-label">Active</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
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
        </div>
      </section>

      <section className="mt-16">
        <p className="section-label">Prior</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
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
        </div>
      </section>
    </section>
  );
}
