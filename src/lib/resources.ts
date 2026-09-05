import { siteConfig } from "@/lib/site";

export type Guide = {
  slug: string;
  title: string;
  benefit: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePulled: boolean;
  external?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  coverCaption?: string;
  sourceUrl?: string;
};

export const guides: Guide[] = [
  {
    slug: "ai-agents",
    title: "How to build your AI Agent workforce",
    benefit: "Real output and no payroll.",
    href: "/resources",
    image: "/photos/guides/guide-01-ai-agents.png",
    imageAlt: "Guide cover: How to build your AI Agent workforce",
    imagePulled: true,
  },
  {
    slug: "growth-marketing",
    title: "How to build a marketing growth engine",
    benefit: "Playbooks and campaigns that work",
    href: "/resources",
    image: "/photos/guides/guide-02-growth-marketing.png",
    imageAlt: "Guide cover: How to build a marketing growth engine",
    imagePulled: true,
  },
  {
    slug: "brand-strategy",
    title: "How to build a brand that gets remembered",
    benefit: "Narrative, positioning, visual identity and more",
    href: "/brand-strategy",
    image: "/photos/guides/guide-03-brand-strategy.png",
    imageAlt: "Guide cover: How to build a brand that gets remembered",
    imagePulled: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content",
    title: "The Reason Your LinkedIn Isn't Growing Has Nothing to Do With Your Content",
    excerpt:
      "Most founders treat LinkedIn like a résumé with a comment section. They post when they get a chance. They write about their wins and about themselves. They share the company update nobody asked for and then they wonder why nobody engages and quietly decide LinkedIn doesn't work for them.",
    date: "2026-06-11",
    readingMinutes: 5,
    cover:
      "/blog/the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content/cover.jpg",
    coverAlt: "If you sell B2B you cannot ignore Linkedin in 2026",
    coverCaption: "If you sell B2B you cannot ignore Linkedin in 2026",
    sourceUrl:
      "https://blog.nikvassev.com/post/the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content",
  },
  {
    slug: "the-missing-foundation-that-s-killing-your-marketing",
    title: "The Missing Foundation That's Killing Your Marketing",
    excerpt:
      "Most founders respond to slow growth the same way. Post more. Write more. Run more ads. Produce more content. The output goes up but the results stay flat. That is when the frustration compounds because they're working harder than ever with nothing to show for it.",
    date: "2026-04-30",
    readingMinutes: 4,
    cover: "/blog/the-missing-foundation-that-s-killing-your-marketing/cover.jpg",
    coverAlt: "Building a solid brand requires a real foundation most founders skip",
    coverCaption: "Building a solid brand requires a real foundation most founders skip",
    sourceUrl:
      "https://blog.nikvassev.com/post/the-missing-foundation-that-s-killing-your-marketing",
  },
  {
    slug: "how-to-build-a-daily-briefing-system-with-ai",
    title: "How to Build a Daily Briefing System with AI",
    excerpt:
      "Most founders start the day the same way. Open the laptop. Check email. Get pulled into something urgent. Two hours later, the real work still hasn't started. Reactive mornings create reactive days.",
    date: "2026-04-23",
    readingMinutes: 5,
    cover: "/blog/how-to-build-a-daily-briefing-system-with-ai/cover.gif",
    coverAlt: "Setting up an AI daily briefing is easy and saves at least an hour each day",
    coverCaption: "Setting up an AI daily briefing is easy and saves at least an hour each day",
    sourceUrl: "https://blog.nikvassev.com/post/how-to-build-a-daily-briefing-system-with-ai",
  },
  {
    slug: "why-brand-aligned-marketing-wins",
    title: "Why Brand Aligned Marketing Wins",
    excerpt:
      "The hardest part about AI marketing in 2026 is not making content. Every business can do that now. The hardest part is making content that doesn't get lost in the noise.",
    date: "2026-04-16",
    readingMinutes: 6,
    cover: "/blog/why-brand-aligned-marketing-wins/cover.png",
    coverAlt: "Why Brand Aligned Marketing Wins",
    sourceUrl: "https://blog.nikvassev.com/post/why-brand-aligned-marketing-wins",
  },
  {
    slug: "how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders",
    title: "How to Rank on AI Search in 2026",
    excerpt:
      "Most founders are invisible to AI search and have no idea. They are optimizing for Google rankings while Perplexity, ChatGPT, and Claude quietly become the first place their customers go for answers. By the time they notice the traffic shift, the brands that moved early will already own the citations.",
    date: "2026-04-09",
    readingMinutes: 11,
    cover: "/blog/how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders/cover.png",
    coverAlt: "How to Rank on AI Search in 2026",
    sourceUrl:
      "https://blog.nikvassev.com/post/how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatPostMeta(date: string, readingMinutes: number): string {
  return `${formatPostDate(date)} · ${readingMinutes} min`;
}

export function formatArticleMeta(
  date: string,
  readingMinutes: number,
  author = siteConfig.name,
): string {
  return `${formatPostDate(date)} · ${readingMinutes} min · ${author}`.toUpperCase();
}
