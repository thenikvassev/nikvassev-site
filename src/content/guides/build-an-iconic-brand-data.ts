export type TwoColRow = {
  label: string;
  value: string;
};

export type CompareRow = {
  label: string;
  left: string;
  right: string;
};

export type OverviewRow = {
  name: string;
  mid: string;
  end: string;
};

export type StepItem = {
  title: string;
  paragraphs: string[];
};

export const openingRest = [
  "When a founder hands AI a vague brief, the model invents a slightly different company in every draft. The LinkedIn post sounds like a thought leader, the email sounds like a SaaS brochure, and the landing page sounds like a pitch deck that never left the room. Brand DNA is the stamped file that stops that drift. It holds who you serve, what you stand for, how you sound, what you can prove, and what you refuse to say, so people and AI work from one consistent version of the truth before they draft.",
  "You walk out with a Brand DNA Doc, a short AI instructions block you can paste, a handoff anyone new can open, and a five-test loop that catches voice drift before publish. Plan on about two focused hours if you already know the business. Open a blank Doc beside this guide and fill as you go. I run Guide IQ and Storyline Pros from that same stamped file on nikvassev.com work, so the agents, the site pages, and the founder posts stay one company.",
];

export const fiveDecisions: TwoColRow[] = [
  {
    label: "Purpose and ambition",
    value:
      "Why the company exists beyond revenue, and what future you are building toward.",
  },
  {
    label: "Positioning",
    value: "Who it is for, what category you claim, why you instead of the alternative.",
  },
  {
    label: "Archetype and personality",
    value: "One primary personality you will own in public.",
  },
  {
    label: "Verbal and visual identity",
    value: "How you sound, what you look like, what you refuse to say or show.",
  },
  {
    label: "Governance and measurement",
    value:
      "Who can change the story, when the file refreshes, which commercial signals count.",
  },
];

export const withoutWith: CompareRow[] = [
  {
    label: "Every draft",
    left: "Every prompt reinvents the company",
    right: "One file holds voice, audience, proof, and claims",
  },
  {
    label: "Proof",
    left: "Writers and bots invent features and numbers",
    right: "Proof hierarchy tells them what they may use",
  },
  {
    label: "Channels",
    left: "Channels drift into different personalities",
    right: "Channel rules keep tone shifts intentional",
  },
  {
    label: "Handoffs",
    left: "Handoffs restart from zero",
    right: "A new hire or agent opens the same document",
  },
  {
    label: "Editing",
    left: "You edit every draft for voice",
    right: "You edit for judgment, offer, and send",
  },
];

export const deliverables: TwoColRow[] = [
  {
    label: "Brand DNA document",
    value: "The stamped story: foundation, market, voice, proof, messaging, channels",
  },
  {
    label: "AI instructions",
    value: "The standing role for your marketing assistant or agent",
  },
  {
    label: "Personalized AI setup",
    value: "Claude Project, Custom GPT, or a named Grok Bot pointed at the file",
  },
  {
    label: "Clarity for you and the team",
    value: "One place to settle fights about wording",
  },
  {
    label: "Handoff system",
    value: "Anyone new opens the DNA before they draft",
  },
  {
    label: "Channel playbooks",
    value: "How email, social, blog, ads, and PR should sound as you",
  },
];

export const howToUse: StepItem[] = [
  {
    title: "Read the section",
    paragraphs: ["Stay in the current block. Do not skip ahead to voice adjectives."],
  },
  {
    title: "Answer the Write this now prompts",
    paragraphs: ["Use your own words. First-pass language is enough."],
  },
  {
    title: "Paste or refine those answers into the Brand DNA document",
    paragraphs: ["Stamp a usable version. Perfect sentences come later."],
  },
  {
    title: "Move to the next section",
    paragraphs: ["Finish market and proof before you polish voice forever."],
  },
  {
    title: "Add AI instructions and upload the file",
    paragraphs: ["Do this only after the document is filled."],
  },
  {
    title: "Run the five tests",
    paragraphs: ["Fix the DNA first when something feels off."],
  },
];

export const messagingCore: TwoColRow[] = [
  {
    label: "Product definition",
    value: "What it is, in one clear sentence",
  },
  {
    label: "Unique value proposition",
    value: "What they get, why you, why that matters",
  },
  {
    label: "Competitive frame",
    value: "How you sit next to alternatives without a feature dump",
  },
];

export const channelRows: TwoColRow[] = [
  {
    label: "Email",
    value: "Subject posture, length, CTA style, how personal vs publication",
  },
  {
    label: "Social",
    value: "Hook style per platform, hashtag rules, how hard you sell",
  },
  {
    label: "Blog / long-form",
    value: "Thesis first, evidence bar, CTA at the end",
  },
  {
    label: "Ads",
    value: "What the ad sells (the click) vs what the page sells",
  },
  {
    label: "PR",
    value: "Boilerplate, founder availability, claims you will never make to press",
  },
];

export const aiSetups: TwoColRow[] = [
  {
    label: "Claude Project",
    value:
      "You write long-form, want nuance, and work mostly solo with a large DNA file",
  },
  {
    label: "Custom GPT",
    value:
      "A team needs the same assistant, you want browsing and tools, high-volume short posts",
  },
];

export const claudeSteps: StepItem[] = [
  { title: "Open Projects in Claude", paragraphs: [] },
  {
    title: "Create a new project",
    paragraphs: ["Name it like Your Company Marketing Strategist."],
  },
  {
    title: "Paste the AI instructions",
    paragraphs: ["Put them in project instructions."],
  },
  {
    title: "Upload Brand DNA and supporting documents",
    paragraphs: [],
  },
  {
    title: "Run a first prompt",
    paragraphs: ["Refine the DNA when the output drifts."],
  },
];

export const gptSteps: StepItem[] = [
  { title: "Create a GPT in ChatGPT", paragraphs: [] },
  { title: "Set name, description, and photo", paragraphs: [] },
  { title: "Paste the AI instructions", paragraphs: [] },
  { title: "Upload Brand DNA and supporting documents", paragraphs: [] },
  {
    title: "Choose the latest model, create, and share",
    paragraphs: ["Share with the team by link if needed."],
  },
  { title: "Run a first prompt and refine", paragraphs: [] },
];

export const grokSteps: StepItem[] = [
  {
    title: "Put the Brand DNA Doc in Drive",
    paragraphs: ["Use the folder your bots can open."],
  },
  {
    title: "Point every writing bot at that file",
    paragraphs: ["Do it in Talk or standing rules."],
  },
  {
    title: "Tell the bot to open the file",
    paragraphs: ["Do not ask it to invent from memory."],
  },
  {
    title: "Update the Doc when the offer or proof changes",
    paragraphs: ["The bots read the live file."],
  },
];

export const tests: OverviewRow[] = [
  {
    name: "Voice",
    mid: "Write a short paragraph introducing our company.",
    end: "Archetype, attributes, and tone match",
  },
  {
    name: "Persona",
    mid: "Write an email targeting [persona name].",
    end: "Motivations, frustrations, and triggers show up",
  },
  {
    name: "Proof",
    mid: "Write a social post using appropriate proof.",
    end: "Proof feels natural, not forced into every line",
  },
  {
    name: "Channel",
    mid: "Adapt one educational idea for Instagram, LinkedIn, and email.",
    end: "Tone and structure shift on purpose",
  },
  {
    name: "Banned words",
    mid: "Write an enthusiastic product announcement.",
    end: "Banned language stays out; ask the AI to list the bans",
  },
];

export const symptomFixes: TwoColRow[] = [
  {
    label: "Output sounds generic",
    value: "Strengthen voice examples, voice comparison, messaging core",
  },
  {
    label: "Personas sound the same",
    value: "Clearer emotional triggers, purchase moments, frustrations",
  },
  {
    label: "Too much proof",
    value: "Add a rule: proof for conversion content, lighter on awareness",
  },
  {
    label: "Wrong tone for a channel",
    value: "Add one or two channel examples",
  },
  {
    label: "Banned words sneak in",
    value: "Expand the ban list and the why",
  },
  {
    label: "AI misunderstands the brand",
    value: "Clarify overview, UVP, and archetype",
  },
];

export const proofRanks = [
  "Named outcomes with numbers you can defend",
  "Customer stories with permission",
  "Third-party coverage and research you are actually in",
  "Partnerships and credentials that matter to the buyer",
  "Process or method proof (how you work)",
  "Founder story, used sparingly and only when it proves the claim",
];

export const writeNowFoundation = [
  "One sentence: company name, category, what you sell",
  "Who pays and how you get paid",
  "Problem in the customer’s words",
  "What changes for them after they buy",
  "Product definition (one sentence)",
  "UVP (what they get / why you / why it matters)",
  "Competitive frame (how you sit next to alternatives)",
  "Mission, vision, and 3 to 5 usable values",
  "Top alternatives: direct, status quo, DIY, and what you own vs them",
];

export const writeNowMarket = [
  "Primary buyer: role, stage, budget reality, this-quarter goal",
  "Beliefs, fears, and what they are tired of buying",
  "2 to 3 personas with job, goals, frustrations, beliefs, purchase moment, emotional driver",
  "One-sentence core emotional insight for the company",
  "Merge note: any personas that should collapse into one",
];

export const writeNowVoice = [
  "Primary archetype + three behavior lines (say / refuse / emphasize)",
  "3 to 5 voice attributes with definition, do, and don’t",
  "One-sentence tone shift for email, social, long-form, ads, PR",
  "3 to 5 pasted samples that already sound like you",
  "One weak line vs one strong rewrite for the same idea",
  "Banned words/phrases with a one-line why for each",
];

export const writeNowProof = [
  "Your ranked proof list (strongest to weakest)",
  "Rule for when proof is required vs optional",
  "At least two testimonials with name, role, line, claim link, permission status",
  "Proof shelf links or notes: cases, metrics, quotes, media, FAQs",
  "Claims you will never make because you cannot defend them",
];

export const writeNowMessaging = [
  "Central brand message (one line)",
  "Persona frame for each persona: hook, belief it meets, proof to use, CTA shape",
  "What you are / what you are not (short clarity lines)",
  "One misconception you need to kill in public copy",
];

export const writeNowChannels = [
  "Your three channels for the next 90 days",
  "For each: subject/hook posture, length, CTA style, sell intensity",
  "One “do not” per channel (example: LinkedIn is not a pitch deck dump)",
  "Where ads and PR wait until the first three channels have a base",
];

export const writeNowLoad = [
  "Paste the AI instructions into your Claude Project, Custom GPT, or Grok Bot standing rules",
  "Upload or link the Brand DNA file",
  "Attach proof shelf and 2 to 3 writing samples",
  "Run one test prompt before you trust it for live work",
];

export const writeNowTests = [
  "Run all five tests and paste pass/fail notes into the Doc",
  "For each fail, edit the matching DNA section before you change instructions",
  "Schedule a quarterly DNA refresh when the offer or proof changes",
];

export const aiInstructions = [
  "You are [Your Company]’s lead marketing strategist and copywriter. Your role is to create clear, compelling, on-brand marketing and sales content across all channels. You always follow the Brand DNA document as the single source of truth for voice, audience, proof, and messaging.",
  "Knowledge: You have access to the Brand DNA worksheet and any supporting materials uploaded. Always reference that knowledge when writing. If something is not defined, ask for clarification or make a reasonable assumption and flag it. Never contradict the Brand DNA. Do not invent offers, features, pricing, or proof that are not provided.",
  "Content you create: email, blogs, social, paid ads, short-form video scripts, PR, website and funnel copy, sales materials.",
  "How to write: Match the brand voice, archetype, and tone in the Brand DNA. Write to the correct persona for the request. Use proof according to the proof hierarchy. Never fabricate numbers, partners, or testimonials. Follow channel guidelines for structure and length. Avoid banned words. Prioritize clarity, specificity, and utility.",
  "Workflow: Before drafting, silently review which persona, channel, and goal apply. If the request is vague, ask one or two focused questions. Deliver ready-to-publish drafts unless the user asks for an outline. Suggest hook, subject, or CTA variations when helpful.",
  "Your goal is to behave like a senior marketing partner, creating consistent on-brand content that could ship with light human edit.",
];
