export type GuideTocItem = {
  id: string;
  label: string;
};

export type LongGuide = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  href: string;
  toc: GuideTocItem[];
};

export const longGuides: LongGuide[] = [
  {
    slug: "how-to-build-your-ai-agent-workforce",
    title: "How to build your AI Agent workforce",
    excerpt:
      "Grok Bot lets you hire named AI teammates. Each one has a job, a memory, and access to your real systems. You talk to them the way you talk to an employee. They keep working after you close the laptop.",
    description:
      "How to hire named AI teammates in Grok Bot. Setup first, then talk. Start with an EA, an SDR, and a Dev bot. Real access, real jobs, and no extra payroll.",
    date: "2026-09-06",
    readingMinutes: 22,
    cover: "/photos/guides/guide-01-ai-agents.png",
    coverAlt: "Guide cover: How to build your AI Agent workforce",
    href: "/resources/how-to-build-your-ai-agent-workforce",
    toc: [
      { id: "who-should-use-this", label: "Who this is for" },
      { id: "what-is-an-agent", label: "What is an agent" },
      { id: "llm-vs-agent", label: "LLM vs agent" },
      { id: "what-you-get", label: "What you get" },
      { id: "setup", label: "Setup" },
      { id: "jobs-first", label: "Jobs first" },
      { id: "jobs", label: "Job cards" },
      { id: "when-to-add", label: "When to add" },
      { id: "ship-software", label: "Ship software" },
      { id: "tools", label: "Tools" },
      { id: "feed-them", label: "What you feed them" },
      { id: "repeats", label: "Repeats" },
      { id: "keep-it-human", label: "Keep it human" },
      { id: "humanizer", label: "Humanizer" },
      { id: "teammates", label: "Teammates" },
      { id: "why-this-matters", label: "Why this matters" },
    ],
  },
];

export function getGuide(slug: string): LongGuide | undefined {
  return longGuides.find((guide) => guide.slug === slug);
}
