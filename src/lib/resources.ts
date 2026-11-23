import { faqs as aiRecommendFaqs } from "@/content/blog/how-to-get-ai-to-recommend-your-business-over-your-competitors";
import { shapeLine } from "@/lib/shape-line";
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
  /** Intrinsic cover size. The article layout falls back to 1600 by 900. */
  coverWidth?: number;
  coverHeight?: number;
  /** 1200 by 630 image for Open Graph and Twitter. Falls back to the cover. */
  shareImage?: string;
  /** Cover has a transparent background and should not go through the image optimizer. */
  coverTransparent?: boolean;
  sourceUrl?: string;
  keywords?: string[];
  wordCount?: number;
  authorUrl?: string;
  sameAs?: string[];
  citations?: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
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
  {
    slug: "how-to-configure-an-ai-sales-agent-guide",
    title: titleWithoutOrphan("How to Configure an AI Sales Agent 2026 Guide"),
    benefit: "A sales agent with a founder gate on send.",
    href: "/resources/how-to-configure-an-ai-sales-agent-guide",
    image: "/photos/guides/guide-04-ai-sales-agent.jpg",
    imageAlt: "Guide cover: How to Configure an AI Sales Agent",
    imagePulled: true,
  },
  {
    slug: "how-to-market-to-ai-agents",
    title: shapeLine("How to Market to AI Agents (2026)"),
    benefit: shapeLine(
      "Agents are shortlisting businesses for people who never open a search tab.",
    ),
    href: "/resources/how-to-market-to-ai-agents",
    image: "/photos/guides/guide-how-to-market-to-ai-agents.jpg",
    imageAlt:
      "Cream card on a dark green grid titled How to Market to AI Agents, with a 2026 label and a stack of pages",
    imagePulled: true,
  },
  {
    slug: "signal-based-selling-for-startups",
    title: shapeLine(
      "Signal-Based Selling for Startups: How to Reach Buyers the Week They Need You",
    ),
    benefit: shapeLine("Reach buyers the week something changes at their company."),
    href: "/resources/signal-based-selling-for-startups",
    image: "/photos/guides/guide-signal-based-selling.jpg",
    imageAlt:
      "Cream card on a dark green grid titled Signal-Based Selling for Startups, with a Sales tape label",
    imagePulled: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-get-ai-to-recommend-your-business-over-your-competitors",
    title: "How to get AI to recommend your business over your competitors",
    metaTitle: "How to get AI to recommend your business",
    excerpt:
      "Your next customer has probably built a shortlist before they ever land on your website, and an AI built it for them. In a vendor study by Citation Labs and Clickstream Solutions, 48 people researched big purchases in Google's AI Mode, and 74% of their final shortlists came straight from the AI's answer, while 64% of them never clicked a single link.",
    description:
      "How to get AI to recommend your business before buyers reach your site. What I use: a clear niche, checkable proof, and earned coverage AI already trusts.",
    date: "2026-11-17",
    publishAt: "2026-11-17T09:00:00-05:00",
    readingMinutes: 12,
    cover:
      "/blog/how-to-get-ai-to-recommend-your-business-over-your-competitors/cover.webp",
    coverAlt: "Businessman in a suit reading a newspaper on a green chair",
    coverWidth: 864,
    coverHeight: 1080,
    coverTransparent: true,
    shareImage:
      "/blog/how-to-get-ai-to-recommend-your-business-over-your-competitors/og.jpg",
    keywords: [
      "get AI to recommend your business",
      "AI visibility",
      "GEO",
      "AEO",
      "earned media",
    ],
    wordCount: 2370,
    authorUrl: "https://www.nikvassev.com",
    sameAs: [
      "https://www.linkedin.com/in/nikvassev",
      "https://twitter.com/nikvassev",
      "https://www.instagram.com/nikvassev/",
      "https://www.storylinepros.com/about#nik-vassev",
      "https://guideiq.ai",
    ],
    citations: [
      {
        name: "Citation Labs, Xofu and Clickstream Solutions, AI Mode shortlisting study (2 Apr 2026)",
        url: "https://citationlabs.com/funnels-new-gatekeeper-google-search-ai-mode-shortlisting-behavioral-study/",
      },
      {
        name: "Forrester, The State Of Business Buying, 2026 (21 Jan 2026)",
        url: "https://www.forrester.com/blogs/state-of-business-buying-2026/",
      },
      {
        name: "G2, 2026 Buyer Behavior Report announcement (22 Jul 2026)",
        url: "https://company.g2.com/news/buyer-behavior-2026",
      },
      {
        name: "SparkToro, In 2026, less than one third of Google searches still send a click",
        url: "https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/",
      },
      {
        name: "Pew Research Center, Google users are less likely to click on links when an AI summary appears (22 Jul 2025)",
        url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
      },
      {
        name: "Search Engine Land, Your SEO share of voice doesn't tell you if AI recommends your brand (13 Nov 2026)",
        url: "https://searchengineland.com/seo-share-of-voice-ai-recommend-brand-501495",
      },
      {
        name: "OpenAI, Introducing Businesses in ChatGPT (10 Nov 2026)",
        url: "https://openai.com/index/introducing-businesses-chatgpt/",
      },
      {
        name: "TechCrunch, Reddit tests ads in search results (3 Nov 2026)",
        url: "https://techcrunch.com/2026/11/03/reddit-tests-ads-in-search-results-as-traffic-declines-and-growth-concerns-mount/",
      },
      {
        name: "Muck Rack / Generative Pulse, What Is AI Reading? October 2026 (28 Oct 2026)",
        url: "https://www.globenewswire.com/news-release/2026/10/28/3390134/0/en/generative-pulse-earned-media-still-drives-more-than-84-of-ai-citations.html",
      },
      {
        name: "Inc., Gartner says PR budgets will double by 2027 (18 May 2026)",
        url: "https://www.inc.com/victoria-watters/gartner-says-pr-budgets-will-double-by-2027-ai-search-is-why/91345318",
      },
      {
        name: "Google Search Central, AI features and your website (updated 10 Dec 2025)",
        url: "https://developers.google.com/search/docs/appearance/ai-features",
      },
    ],
    faqs: [...aiRecommendFaqs],
  },
  {
    slug: "founder-led-marketing-no-one-cares-about-your-product",
    title:
      "No one cares about your product: how founder-led marketing really works",
    excerpt:
      "I was on a call this week with an entrepreneur getting ready for the big launch of his product, and he told me he'd mostly been posting blog posts generated by ChatGPT, then turning them into matching LinkedIn and Facebook posts.",
    description:
      "No one cares about your product. They care about you and the problem you solve. How founder-led marketing builds trust, plus what to do this week.",
    date: "2026-10-29",
    publishAt: "2026-10-29T09:00:00-05:00",
    readingMinutes: 6,
    cover:
      "/blog/founder-led-marketing-no-one-cares-about-your-product/cover.webp",
    coverAlt:
      "Nik, his girlfriend and their dog at the airport leaving Canada",
    coverWidth: 1200,
    coverHeight: 1464,
    shareImage:
      "/blog/founder-led-marketing-no-one-cares-about-your-product/og.jpg",
  },
  {
    slug: "what-is-narrative-engineering",
    title: "What is narrative engineering? A founder's guide for tech startups",
    metaTitle: "What Is Narrative Engineering? A Guide for Tech Startups",
    excerpt:
      "Narrative engineering is the systematic process of optimizing messaging, positioning, and proof so a company’s public story is coherent, newsworthy, and repeatable by third parties (press, buyers, and AI), creating differentiation that drives brand mentions, sales, and investment.",
    description:
      "Narrative engineering decides the claims a startup should own and proves them where buyers and AI look. What it is, why it matters now, and how it works.",
    date: "2026-10-06",
    publishAt: "2026-10-06T09:00:00-05:00",
    readingMinutes: 12,
    cover: "/blog/what-is-narrative-engineering/cover.png",
    coverAlt:
      "Glowing wireframe head in profile, woven from golden threads that connect floating documents and charts",
  },
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
