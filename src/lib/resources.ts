import { siteConfig } from "@/lib/site";

/** Join the last two words so a title cannot wrap a single orphan onto its own line. */
function titleWithoutOrphan(title: string): string {
  return title.replace(/\s+(\S+)$/, "\u00A0$1");
}

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
  /** Short document / social title. Layout still appends `| Nik Vassev`. */
  metaTitle?: string;
  excerpt: string;
  description?: string;
  date: string;
  /** ISO timestamp; when set, the post is hidden until this instant. */
  publishAt?: string;
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  coverCaption?: string;
  sourceUrl?: string;
};

export const guides: Guide[] = [
  {
    slug: "how-to-build-your-ai-agent-workforce",
    title: titleWithoutOrphan("How to build your AI Agent workforce"),
    benefit: "Real output and no payroll.",
    href: "/resources/how-to-build-your-ai-agent-workforce",
    image: "/photos/guides/guide-01-ai-agents.png",
    imageAlt: "Guide cover: How to build your AI Agent workforce",
    imagePulled: true,
  },
  {
    slug: "build-a-distribution-engine-the-ultimate-marketing-guide-for-founders",
    title: titleWithoutOrphan(
      "Build a distribution engine: the ultimate marketing guide for founders",
    ),
    benefit: "Playbooks and campaigns that work",
    href: "/resources/build-a-distribution-engine-the-ultimate-marketing-guide-for-founders",
    image: "/photos/guides/guide-02-growth-marketing.png",
    imageAlt: "Guide cover: Build a distribution engine",
    imagePulled: true,
  },
  {
    slug: "build-an-iconic-brand-the-brand-strategy-guide-for-founders",
    title: titleWithoutOrphan(
      "Build an iconic brand: the brand strategy guide for founders",
    ),
    benefit: "Narrative, positioning, visual identity and more",
    href: "/resources/build-an-iconic-brand-the-brand-strategy-guide-for-founders",
    image: "/photos/guides/guide-03-brand-strategy.png",
    imageAlt: "Guide cover: Build an iconic brand",
    imagePulled: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "when-a-pr-retainer-stops-moving-the-needle",
    title:
      "When a PR Retainer Stops Moving the Needle (and What to Measure Instead)",
    metaTitle: "When a PR Retainer Stops Moving the Needle",
    excerpt:
      "A traditional PR retainer often keeps shipping activity while failing the metrics that matter for tech brands in an AI-search era.",
    description:
      "Traditional PR retainers ship pitches and clips while missing AI-era metrics: category narrative, earned consensus models can cite, and buyer-prompt visibility.",
    date: "2026-09-13",
    publishAt: "2026-09-13T09:00:00-05:00",
    readingMinutes: 6,
    cover: "/blog/when-a-pr-retainer-stops-moving-the-needle/cover.png",
    coverAlt:
      "stack of newspapers labeled media coverage highlights beside a tablet showing media measurement dashboard",
  },
  {
    slug: "geo-vs-seo-misses-the-real-gap",
    title:
      "GEO vs SEO Misses the Real Gap: Why Tech Brands Need PR and AI Visibility Together",
    metaTitle: "GEO vs SEO Misses the Real Gap",
    excerpt:
      "The GEO versus SEO debate is the wrong argument. Tech brands do not need a new label for title tags.",
    description:
      "Comparing GEO to SEO alone misses the real gap. Tech brands need earned PR, narrative engineering, and AI visibility as one system.",
    date: "2026-09-12",
    readingMinutes: 7,
    cover: "/blog/geo-vs-seo-misses-the-real-gap/cover.png",
    coverAlt:
      "Two professionals on separate pillars, one shouting through a megaphone across a gap",
  },
  {
    slug: "how-to-make-ai-writing-sound-human-skill-included",
    title: "How to make AI writing sound human [skill included]",
    excerpt:
      "Dead Internet Theory stopped feeling like a theory a while ago. Feeds, landing pages, founder emails, and “thought leadership” are drowning in AI slop.",
    description:
      "Dead Internet Theory stopped feeling like a theory a while ago. Feeds, landing pages, founder emails, and “thought leadership” are drowning in AI slop. The texture is everywhere: looping openers, fake contrast, punchline stacks that land like a metronome.",
    date: "2026-09-09",
    readingMinutes: 6,
    cover:
      "/blog/how-to-make-ai-writing-sound-human-skill-included/cover.jpeg",
    coverAlt: "Human hand and robotic hand typing on the same laptop keyboard",
  },
  {
    slug: "what-ai-search-actually-rewards",
    title: "What AI search actually rewards (and why your blog fire hose fails)",
    excerpt:
      "One of the biggest shifts in marketing since the dawn of the internet is currently happening. Those who take advantage will be granted a large amount of traffic and customers by AI engines.",
    description:
      "AI search rewards third-party brand authority, not an owned blog fire hose of AI slop. How confidence signals and earned media beat volume.",
    date: "2026-09-05",
    readingMinutes: 7,
    cover: "/blog/what-ai-search-actually-rewards/cover.png",
    coverAlt: "Earned media shows AI who matters.",
  },
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

export function isPostPublished(post: BlogPost, now = new Date()): boolean {
  if (!post.publishAt) return true;
  const publishAt = new Date(post.publishAt);
  if (Number.isNaN(publishAt.getTime())) return false;
  return now.getTime() >= publishAt.getTime();
}

export function publishedBlogPosts(now = new Date()): BlogPost[] {
  return blogPosts.filter((post) => isPostPublished(post, now));
}

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
