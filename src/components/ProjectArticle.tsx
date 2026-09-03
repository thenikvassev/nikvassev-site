import type { ReactNode } from "react";
import Link from "next/link";
import { MediaFrame } from "./MediaFrame";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  extra?: ReactNode;
};

export function ProjectArticle({ project, extra }: Props) {
  return (
    <article className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <p className="section-label">
        Project · {project.status === "active" ? "Active" : "Prior"}
      </p>
      <h1 className="mt-4 text-4xl tracking-display md:text-5xl">
        {project.name}
      </h1>
      <p className="mt-3 text-sm font-medium text-forest">{project.role}</p>
      <p className="mt-4 text-lg text-ink-muted">{project.oneLiner}</p>

      <MediaFrame
        src={project.image}
        alt={project.imageAlt}
        ratio="video"
        priority
        className="mt-10"
      />

      {project.stats.length > 0 && (
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="card">
              <dt className="section-label">{stat.label}</dt>
              <dd className="mt-2 font-serif text-2xl text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="prose-nik mt-10 max-w-reading">
        <p>{project.summary}</p>
        {project.facts.map((fact) => (
          <p key={fact}>{fact}</p>
        ))}
      </div>

      {extra}

      {project.ctaHref && (
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.ctaHref}
            className="pill-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.ctaLabel ?? "Visit"}
          </a>
        </div>
      )}

      {project.href && !project.ctaHref && (
        <div className="mt-10">
          <a
            href={project.href}
            className="pill-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name} site
          </a>
        </div>
      )}

      <p className="mt-12">
        <Link href="/about#projects" className="text-sm font-medium text-forest">
          ← All projects
        </Link>
      </p>
    </article>
  );
}
