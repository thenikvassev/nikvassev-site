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
  {
    slug: "build-a-distribution-engine-the-ultimate-marketing-guide-for-founders",
    title: "Build a distribution engine: the ultimate marketing guide for founders",
    excerpt:
      "This guide is how sophisticated founders build a distribution engine when creation is cheap, attention is short and buyers are careful with every dollar. It is written for people building real companies who already can ship and need a repeatable way to get customers. Another content calendar will leave you busy and under-learned. What you need is a clear market, a clear differentiator, a map of where those buyers actually show up, a short list of playbooks and tools sized to budget and team, then real campaigns with dates and kill criteria.",
    description:
      "How sophisticated founders build a distribution engine when creation is cheap, attention is short and buyers are careful. Lock market and differentiation, map reach, then run campaign-based playbooks.",
    date: "2026-09-07",
    readingMinutes: 16,
    cover: "/photos/guides/guide-02-growth-marketing.png",
    coverAlt: "Guide cover: Build a distribution engine",
    href: "/resources/build-a-distribution-engine-the-ultimate-marketing-guide-for-founders",
    toc: [
      { id: "what-changed", label: "What changed" },
      { id: "attention", label: "Attention" },
      { id: "how-to-play", label: "How to play" },
      { id: "five-choices", label: "Five choices" },
      { id: "process", label: "The process" },
      { id: "wasting-time", label: "Wasting time" },
      { id: "playbook-menu", label: "Playbook menu" },
      { id: "default-five", label: "Default five" },
      { id: "meta-2026", label: "Meta in 2026" },
      { id: "keys-to-paid", label: "Keys to paid" },
      { id: "do-today", label: "Do this today" },
      { id: "how-you-know", label: "How you know" },
      { id: "why-this-matters", label: "Why this matters" },
    ],
  },
];

export function getGuide(slug: string): LongGuide | undefined {
  return longGuides.find((guide) => guide.slug === slug);
}
