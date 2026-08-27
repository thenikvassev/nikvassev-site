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
};

export const guides: Guide[] = [
  {
    slug: "brand-dna",
    title: "Brand DNA for founders",
    benefit: "Build positioning, messaging and buyer clarity before you scale content.",
    href: "/brand-strategy",
    image: "/placeholders/guide-brand-dna.svg",
    imageAlt: "Placeholder frame for Brand DNA for founders",
    imagePulled: false,
  },
  {
    slug: "ai-visibility",
    title: "AI visibility primer",
    benefit: "How buyers and investors ask AI first and what to do about it.",
    href: "/ai-visibility",
    image: "/placeholders/guide-ai-visibility.svg",
    imageAlt: "Placeholder frame for the AI visibility primer",
    imagePulled: false,
  },
  {
    slug: "systems-over-hustle",
    title: "Systems Over Hustle",
    benefit: "Weekly tools for growing a startup without living in the grind.",
    href: "/#newsletter",
    image: "/placeholders/guide-systems.svg",
    imageAlt: "Placeholder frame for Systems Over Hustle",
    imagePulled: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "systems-over-hustle",
    title: "Why systems beat hustle for founders who want freedom",
    excerpt:
      "Hustle can start a company. Systems are what let it run without you glued to every task. Here is the shift that keeps growth and life in the same frame.",
    date: "2026-08-14",
    readingMinutes: 6,
  },
  {
    slug: "brand-before-channels",
    title: "Brand before channels: the order that saves months",
    excerpt:
      "Posting more does not fix a fuzzy brand. Get Brand DNA right first and every channel gets cheaper to operate.",
    date: "2026-08-07",
    readingMinutes: 5,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
