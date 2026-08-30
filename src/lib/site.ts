export const siteConfig = {
  name: "Nik Vassev",
  url: "https://nikvassev.com",
  newsletter: "Systems Over Hustle",
  newsletterPitch:
    "Join my newsletter for practical tools and strategies for growing your startup without the grind.",
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
    { href: "/projects", label: "Projects" },
    { href: "/ai-visibility", label: "AI Visibility", nowrap: true },
    { href: "/brand-strategy", label: "Brand Strategy", nowrap: true },
    { href: "/resources", label: "Resources" },
  ],
} as const;

export const headerNav = [
  { href: "/#about", label: "About" },
  { href: "/brand-strategy", label: "Method" },
  { href: "/#work", label: "Work With Me" },
  { href: "/#newsletter", label: "Newsletter" },
] as const;

export const trackRecordLogos = [
  { src: "/logos/ibm-watson.png", alt: "IBM Watson" },
  { src: "/logos/meta.svg", alt: "Meta" },
  { src: "/logos/harvard.png", alt: "Harvard University" },
  { src: "/logos/penn.png", alt: "Penn" },
  { src: "/logos/canada.png", alt: "Government of Canada" },
  { src: "/logos/futurpreneur.png", alt: "Futurpreneur" },
] as const;

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
