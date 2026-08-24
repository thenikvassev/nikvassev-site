export type Project = {
  slug: string;
  name: string;
  role: string;
  status: "active" | "prior";
  oneLiner: string;
  summary: string;
  href?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const projects: Project[] = [
  {
    slug: "guide-iq",
    name: "Guide IQ",
    role: "Founder",
    status: "active",
    oneLiner:
      "AI Brand Strategist that turns founder inputs into brand strategy and a 90-day GTM plan.",
    summary:
      "Guide IQ is built for early-stage founders who need a real brand foundation before they scale content and campaigns. Answer a focused set of inputs. Get Brand DNA, voice and visuals, and a 90-day go-to-market plan in about 15 minutes. Load it into ChatGPT, Claude MCP, or Gemini so every output stays on brand.",
    href: "https://guideiq.ai",
    ctaLabel: "Visit Guide IQ",
    ctaHref: "https://guideiq.ai",
  },
  {
    slug: "novobeing",
    name: "Novobeing",
    role: "Co-Founder & COO",
    status: "prior",
    oneLiner:
      "Therapeutic VR used in clinical research settings to help patients find calm under stress.",
    summary:
      "Co-founded with Sid Desai. Novobeing builds therapeutic virtual reality experiences grounded in clinical research with partners including Harvard-affiliated teams and Penn Medicine. The work sits in healthtech credibility: evidence-based calm for patients facing high-stress care moments. This page is track record, not a live product pitch.",
    href: "https://novobeing.com",
  },
  {
    slug: "mindleap",
    name: "Mindleap Health",
    role: "Founder & CEO",
    status: "prior",
    oneLiner:
      "Digital mental health platform for psychedelic preparation and integration. Built and acquired.",
    summary:
      "Founded Mindleap to close a gap in psychedelic care: structured, accessible support for preparation and integration. The platform combined telehealth with mental health tools and coaching. Raised angel capital, grew users and practitioners, and exited to a biotech firm within about 24 months. Track record only.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
