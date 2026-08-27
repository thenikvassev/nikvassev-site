export const siteConfig = {
  name: "Nik Vassev",
  url: "https://nikvassev.com",
  newsletter: "Systems Over Hustle",
  newsletterPitch:
    "Practical tools and strategies for growing your company without the grind.",
  tagline: "Systems Over Hustle",
  description:
    "Brand strategist, serial founder and growth marketer helping entrepreneurs build high-impact companies using brand strategy, growth marketing and AI systems.",
  location: "Playa del Carmen",
  region: "Mexico and the Caribbean",
  email: "hello@nikvassev.com",
  social: {
    linkedin: "https://www.linkedin.com/in/nikvassev",
    twitter: "https://twitter.com/nikvassev",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#newsletter", label: "Newsletter" },
    { href: "/#work", label: "Work" },
    { href: "/#contact", label: "Contact" },
    { href: "/resources", label: "Blog" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];

export const pressLogos = [
  { src: "/press/entrepreneur.png", alt: "Entrepreneur" },
  { src: "/press/guardian.png", alt: "The Guardian" },
  { src: "/press/forbes.png", alt: "Forbes" },
  { src: "/press/yahoo-finance.png", alt: "Yahoo Finance" },
] as const;

export const clientLogos = [
  { src: "/logos/harvard.png", alt: "Harvard University" },
  { src: "/logos/penn.png", alt: "University of Pennsylvania" },
  { src: "/logos/nfl.png", alt: "NFL" },
  { src: "/logos/volkswagen.png", alt: "Volkswagen" },
  { src: "/logos/canada.png", alt: "Government of Canada" },
  { src: "/logos/futurpreneur.png", alt: "Futurpreneur Canada" },
  { src: "/logos/ibm-watson.png", alt: "IBM Watson" },
  { src: "/logos/ubc.png", alt: "The University of British Columbia" },
] as const;
