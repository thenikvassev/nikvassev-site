export const siteConfig = {
  name: "Nik Vassev",
  url: "https://nikvassev.com",
  newsletter: "Systems Over Hustle",
  newsletterOneLiner:
    "Practical tools and strategies for growing your startup without the grind.",
  tagline: "Systems Over Hustle",
  description:
    "Brand strategist, serial founder, and growth marketer helping entrepreneurs build high-impact companies using brand strategy, growth marketing, and AI systems.",
  location: "Playa del Carmen",
  email: "hello@nikvassev.com",
  social: {
    linkedin: "https://www.linkedin.com/in/nikvassev",
    twitter: "https://twitter.com/nikvassev",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/ai-visibility", label: "AI Visibility" },
    { href: "/brand-strategy", label: "Brand Strategy" },
    { href: "/resources", label: "Resources" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
