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
  /** YouTube (or other) embed URL — replaces hero image on project page when set */
  videoEmbedUrl?: string;
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
      "Complete brand strategy and go-to-market clarity in 15 minutes.",
    summary:
      "Transform your early-stage startup with a complete brand foundation and actionable 90-day go-to-market strategy, seamlessly embedded into the AI tools you already use every day. Twelve focused inputs. You get Brand DNA, voice and visuals, and a plan you can load into ChatGPT, Claude MCP or Gemini so every output stays on brand.",
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
    image: "/photos/guide-iq.jpg",
    imageAlt:
      "Human and robotic hands reaching toward a glowing orange brain on a black background.",
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
      "I co-founded Novobeing to bring relief to patients in hospitals using virtual reality. We built and validated the platform alongside psychologists at Harvard and Penn Medicine, running it through four clinical trials before it reached a single hospital floor. The technology showed real improvements in pain, stress and anxiety, raised $1.5M in capital, and earned a CB Insights Top 150 Digital Health ranking along the way. It's still in use in leading medical centers today. Novobeing is part of the track record now.",
    facts: [],
    stats: [
      { value: "4", label: "Clinical trials" },
      { value: "$1.5M", label: "Capital raised" },
      { value: "Top 150", label: "CB Insights Digital Health" },
    ],
    image: "/photos/novobeing-vr.jpg",
    imageAlt:
      "Patient wearing a Novobeing VR headset with a calm mountain waterfall and butterflies around him.",
    imagePulled: true,
    videoEmbedUrl:
      "https://www.youtube.com/embed/qfs1jDfQn6k?si=_iFO1b_fmw9hwjVQ&controls=0",
  },
  {
    slug: "mindleap",
    name: "Mindleap Health",
    role: "Founder & CEO",
    status: "prior",
    oneLiner:
      "Digital platform for psychedelic preparation and integration. Founded, shipped and acquired.",
    summary:
      "I founded Mindleap to close a real gap in psychedelic care: structured, accessible support for the preparation and integration work that actually determines whether the experience helps someone. The platform grew to 30,000 users in under two years. Mydecine Innovations Group, a clinical-stage biotech developing a second-generation psilocybin drug for addiction, acquired it for $3.5M, 24 months after I started the company. Mindleap is part of the track record now.",
    facts: [
      "Building it, shipping it and exiting it taught me most of what I bring to the brand and systems work I do with founders today.",
    ],
    stats: [
      { value: "30,000", label: "Users" },
      { value: "$3.5M", label: "Acquisition" },
      { value: "24 mo", label: "Founded to exit" },
    ],
    image: "/photos/mindleap-app.jpg",
    imageAlt:
      "Mindleap app screens for mood tracking, emotions, journey milestones and therapy sessions.",
    imagePulled: true,
    videoEmbedUrl:
      "https://www.youtube.com/embed/hGEM_qvd6po?si=Z4nTVK8sGYRlVCVJ&controls=0",
  },
  {
    slug: "digimax",
    name: "Digimax",
    role: "Board · prior",
    status: "prior",
    oneLiner:
      "Board turnaround: rebrand, three acquisitions and an expanded IBM Watson partnership.",
    summary:
      "I joined the Digimax board to help lead a strategic turnaround. Over the engagement we rebranded the company, closed three acquisitions and built an AI-powered crypto price prediction platform, while expanding the company's partnership with IBM Watson. The company raised roughly $20M along the way and reached a valuation near $100M.",
    facts: [],
    stats: [
      { value: "3", label: "Acquisitions" },
      { value: "~$20M", label: "Capital raised" },
      { value: "~$100M", label: "Valuation reached" },
    ],
    image: "/photos/digimax-app.jpg",
    imageAlt:
      "Two phones showing Digimax trading favorites and SHIB buy and sell zone predictions.",
    imagePulled: true,
    videoEmbedUrl:
      "https://www.youtube.com/embed/EtKbkOTn0C0?si=3fI8hIfjxG12rs-x&controls=0",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const activeProjects = projects.filter((p) => p.status === "active");
export const priorProjects = projects.filter((p) => p.status === "prior");

/** Shared overview card for Storyline Pros (not in the projects array). */
export const storylineProsOverview = {
  href: "https://storylinepros.com",
  title: "Storyline Pros",
  benefit:
    "Narrative engineering and AI visibility for later-stage B2B emerging tech. Co-founded with Cynthia Salarizadeh.",
  meta: "Co-Founder",
  image: "/photos/storyline-pros.jpg",
  imageAlt:
    "Founder pointing at stacked AI search prompts that all resolve to you.",
} as const;