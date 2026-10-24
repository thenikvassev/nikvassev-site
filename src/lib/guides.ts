export type GuideTocItem = {
  id: string;
  label: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type LongGuide = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  /** Schema only. Falls back to `date` so the visible byline stays put. */
  dateModified?: string;
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  /** Lean 1200x630 share image. Keep `cover` as the on-page hero. */
  ogImage: string;
  href: string;
  toc: GuideTocItem[];
  faq?: GuideFaq[];
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
    ogImage: "/og/guide-01-ai-agents.jpg",
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
    ogImage: "/og/guide-02-growth-marketing.jpg",
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
  {
    slug: "build-an-iconic-brand-the-brand-strategy-guide-for-founders",
    title: "Build an iconic brand: the brand strategy guide for founders",
    excerpt:
      "Brand is a measurable growth engine in 2026. In an AI-saturated market, tactical execution got cheap and distinctiveness got rare. The founders who win lock a clear position, consistent expression, and emotional differentiation that compounds, then stamp it as Brand DNA so people and AI work from one consistent version of the truth. This guide is how you build that Brand DNA document in one sitting: a practical worksheet with the 2026 why woven in through cited sources.",
    description:
      "How founders lock Brand DNA so people and AI work from one consistent version of the truth. Position, voice, proof, and channel rules in one stamped file.",
    date: "2026-09-07",
    readingMinutes: 22,
    cover: "/photos/guides/guide-03-brand-strategy.png",
    coverAlt: "Guide cover: Build an iconic brand — a mark people remember",
    ogImage: "/og/guide-03-brand-strategy.jpg",
    href: "/resources/build-an-iconic-brand-the-brand-strategy-guide-for-founders",
    toc: [
      { id: "why-brand-2026", label: "Why brand in 2026" },
      { id: "five-decisions", label: "Five decisions" },
      { id: "what-brand-dna-is", label: "What Brand DNA is" },
      { id: "why-dna-matters", label: "Why DNA matters" },
      { id: "walk-away-with", label: "What you walk away with" },
      { id: "how-to-use", label: "How to use this" },
      { id: "company-foundation", label: "Company foundation" },
      { id: "target-market", label: "Target market" },
      { id: "personality-voice", label: "Personality and voice" },
      { id: "proof-hierarchy", label: "Proof hierarchy" },
      { id: "messaging", label: "Messaging" },
      { id: "channel-guidelines", label: "Channel guidelines" },
      { id: "load-into-ai", label: "Load into AI" },
      { id: "ai-instructions", label: "AI instructions" },
      { id: "test-refine", label: "Test and refine" },
      { id: "stamp-the-story", label: "Stamp the story" },
    ],
  },
  {
    slug: "how-to-configure-an-ai-sales-agent-guide",
    title: "How to Configure an AI Sales Agent 2026 Guide",
    excerpt:
      "Most founder's GTM motion has multiple tools, manual processes, and an old-school CRM that sucks up hours a week to keep on track. For solopreneurs, agency owners, and B2B SaaS companies, the founder does the sales in the early stage, and new opportunities must fill the calendar for the company to succeed.",
    description:
      "How to configure a Grok Bot sales agent: a job card, Basho cold notes, two prospecting lanes, and a founder gate on every send.",
    date: "2026-09-24",
    readingMinutes: 18,
    cover: "/photos/guides/guide-04-ai-sales-agent.jpg",
    coverAlt: "Guide cover: How to Configure an AI Sales Agent",
    ogImage: "/og/guide-04-ai-sales-agent.jpg",
    href: "/resources/how-to-configure-an-ai-sales-agent-guide",
    toc: [
      { id: "agent-vs-llm", label: "Agent vs LLM" },
      { id: "what-it-owns", label: "What the agent owns" },
      { id: "two-lanes", label: "Two cold prospecting lanes" },
      { id: "basho", label: "How Basho emails work" },
      { id: "skills", label: "Skills to install" },
      { id: "routines", label: "Routines to schedule" },
      { id: "tools", label: "AI Sales Agent Tools" },
      { id: "setup", label: "Setup on Grok Bot" },
      { id: "what-you-approve", label: "What the founder still approves" },
      { id: "conclusion", label: "What you walk away with" },
    ],
  },
  {
    slug: "how-to-market-to-ai-agents",
    title: "How to Market to AI Agents (2026)",
    excerpt:
      "This guide explains how AI agents choose which companies to recommend, then walks through six steps to get on their shortlist and a checklist you can finish this week.",
    description:
      "AI agents now shortlist companies for buyers. Here's how I get companies recommended by ChatGPT, Claude and other agents, step by step.",
    date: "2026-10-20",
    dateModified: "2026-10-20",
    readingMinutes: 12,
    cover: "/photos/guides/guide-how-to-market-to-ai-agents.jpg",
    coverAlt:
      "Cream card on a dark green grid titled How to Market to AI Agents, with a 2026 label and a stack of pages",
    ogImage: "/og/guide-how-to-market-to-ai-agents.jpg",
    href: "/resources/how-to-market-to-ai-agents",
    toc: [
      { id: "what-changed-when-ai-moved-to-agents", label: "What changed" },
      {
        id: "how-an-agent-decides-who-to-recommend",
        label: "How an agent decides",
      },
      {
        id: "step-1-map-the-questions-an-agent-is-answering",
        label: "Map the questions",
      },
      {
        id: "step-2-make-your-website-machine-readable",
        label: "Machine-readable",
      },
      {
        id: "step-3-gather-reviews-that-prove-youre-legitimate",
        label: "Reviews",
      },
      {
        id: "step-4-tell-a-story-specific-enough-to-get-picked",
        label: "Specific story",
      },
      {
        id: "step-5-publish-fair-comparisons-and-how-tos",
        label: "Comparisons",
      },
      {
        id: "step-6-earn-media-coverage-that-makes-agents-trust-you",
        label: "Media coverage",
      },
      { id: "your-checklist-for-this-week", label: "Checklist" },
      { id: "when-this-wont-work", label: "Won't work" },
      { id: "frequently-asked-questions", label: "Frequently asked questions" },
      { id: "where-this-leaves-you", label: "Where this leaves you" },
    ],
    faq: [
      {
        question: "What does it mean to market to AI agents?",
        answer:
          "It means making your company easy for an AI agent to find, understand and recommend when it builds a shortlist for a buyer. Agents check whether your website, your reviews and your press coverage all tell the same story.",
      },
      {
        question: "How do AI agents decide which companies to recommend?",
        answer:
          "They triangulate consensus, which means they check whether multiple sources agree about you. Then they weigh that against what they know about the person they are working for. Your homepage is one input, and what other people say about you makes up most of the rest.",
      },
      {
        question: "Which websites do AI tools cite most often?",
        answer:
          "Semrush's Top Domains Cited by LLMs report for January 2026 put reddit.com at 11.23% of LLM citations, linkedin.com at 11.03%, wikipedia.org at 9.53%, github.com at 8.77% and medium.com at 5.82%. On every one of them, people other than the brand do most of the talking.",
      },
      {
        question: "Do I need an llms.txt file?",
        answer:
          "It helps but it is not required. llms.txt is a proposed standard with uneven support, so treat it as cheap insurance that points models to your key pages.",
      },
      {
        question: "How long does it take for AI agents to start recommending you?",
        answer:
          "Early signals can show up within weeks, like more AI referrals or getting named in new prompts. A real shift in how agents describe you usually takes quarters, because models weigh years of what the web has said about you.",
      },
      {
        question: "Does this work if I have no customers yet?",
        answer:
          "Partly. Start with mapping buyer questions, making your site machine-readable and sharpening your story. Come back to reviews and media coverage once you have proof.",
      },
    ],
  },
];

export function getGuide(slug: string): LongGuide | undefined {
  return longGuides.find((guide) => guide.slug === slug);
}
