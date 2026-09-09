import type { MetadataRoute } from "next";
import { longGuides } from "@/lib/guides";
import { projects } from "@/lib/projects";
import { blogPosts } from "@/lib/resources";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/ai-visibility",
    "/brand-strategy",
    "/humanizer",
    "/newsletter",
    "/resources",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = blogPosts.map((p) => ({
    url: `${base}/resources/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guideRoutes = longGuides.map((g) => ({
    url: `${base}${g.href}`,
    lastModified: new Date(g.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes, ...guideRoutes, ...postRoutes];
}
