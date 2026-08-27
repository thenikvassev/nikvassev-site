export type ProjectStat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  status: "active" | "prior";
  oneLiner: string;
  summary: string;
  facts: string[];
  stats: ProjectStat[];
  image: string;
  imageAlt: string;
  imagePulled: boolean;
  href?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const projects: Project[] = [
  {
    slug: "guide-iq",
    name: "Guide IQ",
    role: "Founder",
    status: "active",
    oneLiner:
      "AI Brand Strategist that turns founder inputs into Brand DNA and a 90-day GTM plan.",
    summary:
      "Guide IQ is built for early-stage founders who need a real brand foundation before they scale content and campaigns. Twelve focused inputs. About 15 minutes. You get Brand DNA, voice and visuals, and a 90-day go-to-market plan you can load into ChatGPT, Claude MCP or Gemini so every output stays on brand.",
    facts: [
      "Twelve focused inputs. About 15 minutes to a usable Brand Brain.",
      "Path: free Brand DNA, full Brand Brain at $99, optional strategist session at $750.",
      "Loads into the AI tools you already use. You keep the asset.",
      "Not an unsupervised campaign agent. You stay in charge of judgment and shipping.",
    ],
    stats: [
      { value: "12", label: "Focused inputs" },
      { value: "~15 min", label: "To Brand DNA" },
      { value: "$99", label: "Full Brand Brain" },
      { value: "$750", label: "Strategist session" },
    ],
    image: "/photos/guide-iq-tablet.png",
    imageAlt:
      "Hands holding a tablet showing the Guide IQ Brand Brain: strategy, marketing, content and outreach.",
    imagePulled: true,
    href: "https://guideiq.ai",
    ctaLabel: "Visit Guide IQ",
    ctaHref: "https://guideiq.ai",
  },
  {
    slug: "novobeing",
    name: "Novobeing",
    role: "Co-Founder & COO",
    status: "prior",
    oneLiner:
      "Therapeutic VR for patients in hospitals. Co-developed with Harvard and Penn Medicine.",
    summary:
      "Co-founded Novobeing to bring relief to patients in hospitals using virtual reality. The therapeutic VR platform was co-developed and validated with psychologists at Harvard and Penn Medicine. The technology showed improvements in patient outcomes for pain, stress and anxiety and is in use in leading medical centres.",
    facts: [
      "Co-founded. Clinical research partners at Harvard and Penn Medicine.",
      "Four successful clinical trials.",
      "$1.5M capital raised.",
      "CB Insights Top 150 Digital Health ranking.",
    ],
    stats: [
      { value: "4", label: "Clinical trials" },
      { value: "$1.5M", label: "Capital raised" },
      { value: "Top 150", label: "CB Insights Digital Health" },
    ],
    image: "/photos/novobeing-vr.png",
    imageAlt:
      "A person wearing a VR headset, with a hospital setting on one side and a calm sunset landscape on the other.",
    imagePulled: true,
    href: "https://novobeing.com",
  },
  {
    slug: "mindleap",
    name: "Mindleap Health",
    role: "Founder & CEO",
    status: "prior",
    oneLiner:
      "Digital platform for psychedelic preparation and integration. Founded, shipped and acquired.",
    summary:
      "Founded Mindleap to close a gap in psychedelic care: structured, accessible support for preparation and integration. The platform helped people navigate mental health experiences with guidance and intention. Within 24 months it was acquired by a biotech firm building psilocybin-based therapies.",
    facts: [
      "Founded to support preparation and integration in psychedelic care.",
      "Grew to 30,000 users.",
      "$3.5M acquisition.",
    ],
    stats: [
      { value: "30,000", label: "Users" },
      { value: "$3.5M", label: "Acquisition" },
      { value: "24 mo", label: "Founded to exit" },
    ],
    image: "/photos/mindleap-app.jpg",
    imageAlt:
      "Three Mindleap app screens showing programs, an audio session and membership options.",
    imagePulled: true,
  },
  {
    slug: "digimax",
    name: "Digimax",
    role: "Board · prior",
    status: "prior",
    oneLiner:
      "Board turnaround: rebrand, three acquisitions and an expanded IBM Watson partnership.",
    summary:
      "Brought onto the board at Digimax to help lead a strategic turnaround. The work included a rebrand, three acquisitions, building an AI-powered crypto price prediction platform and expanding the company's IBM Watson partnership.",
    facts: [
      "Board role on a strategic turnaround.",
      "Rebrand and three acquisitions.",
      "AI-powered crypto price prediction platform.",
      "IBM Watson partnership expanded.",
      "About $20M raised. About $100M valuation reached.",
    ],
    stats: [
      { value: "3", label: "Acquisitions" },
      { value: "~$20M", label: "Capital raised" },
      { value: "~$100M", label: "Valuation reached" },
    ],
    image: "/photos/digimax-app.jpg",
    imageAlt:
      "A phone showing the Digimax Long-Short app with BTC and ETH prediction cards.",
    imagePulled: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
