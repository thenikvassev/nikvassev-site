export type CompareRow = {
  label: string;
  left: string;
  right: string;
};

export type BenefitRow = {
  benefit: string;
  looksLike: string;
};

export type SetupStep = {
  title: string;
  paragraphs: string[];
  list?: string[];
  note?: string;
  quote?: string;
  chart?: string;
};

export type JobCard = {
  name: string;
  owns: string;
  dayOne: string;
  stayOn: string;
  who: string;
  skills: string;
  routines: string;
  tools: string;
};

export type ToolChip = {
  name: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note: string;
};

export const llmVsAgent: CompareRow[] = [
  {
    label: "How you work with it",
    left: "You type a prompt and wait for an answer",
    right: "You hit Talk and brief a hire",
  },
  {
    label: "What it remembers",
    left: "The chat in front of you",
    right: "The role, the rules, and the last corrections",
  },
  {
    label: "Tools",
    left: "You paste the context in",
    right: "It opens mail, Drive, calendar, or the CRM",
  },
  {
    label: "When you close the laptop",
    left: "The work stops",
    right: "The work can keep going",
  },
  {
    label: "Repeat work",
    left: "You prompt it again tomorrow",
    right: "You train a routine",
  },
  {
    label: "What can go wrong",
    left: "A bad answer in the tab",
    right: "A send, a spend, or a burned weekly bucket if you leave the gate open",
  },
];

export const agentBenefits: BenefitRow[] = [
  {
    benefit: "A named job",
    looksLike: "Chief of Staff, Content, Finance. You say the name out loud.",
  },
  {
    benefit: "Talk",
    looksLike:
      "Set a meeting with these three people. Ask them for times. Use my booking link.",
  },
  {
    benefit: "Least privilege",
    looksLike: "Each bot gets only the access that job needs.",
  },
  {
    benefit: "Standing rules",
    looksLike:
      "The description holds the approval boundary so you do not re-explain it every morning.",
  },
  {
    benefit: "Routines",
    looksLike:
      "The weekday brief, the weekly pack, and the invoice chase become a job you already trained.",
  },
  {
    benefit: "You stay on the gate",
    looksLike: "Send, spend, and judgment stay yours.",
  },
  {
    benefit: "Custom software",
    looksLike:
      "A live ticket board. An AI that triages and follows up. The human queue shrinks.",
  },
];

export const setupSteps: SetupStep[] = [
  {
    title: "Buy the seat on the web",
    paragraphs: [
      "Open cursor.com/dashboard/billing in a browser and pick a paid Cursor plan. Grok Bot is included on Pro, Pro+, Ultra, and Teams. Higher plans hold a bigger weekly usage bucket.",
      "Buy it on the web so the seat sits on your Cursor account. That is the account you will sign into Grok Bot with.",
    ],
  },
  {
    title: "Sign in to Grok Bot",
    paragraphs: [
      "Sign in with the same Cursor account that owns the plan. Named jobs, a live chat, routines. Desktop and phone.",
    ],
  },
  {
    title: "Create your first agent",
    paragraphs: [
      "Open Bot actions, then Edit Profile. Name it something you will say out loud. Title is the job. Description is the standing rules and the approval boundary.",
      "A General Helper has no job, so it keeps no useful memory. Never start with one General Helper. Cursor caps an account at 50 bots and group chats. You will hit a foggy helper long before 50.",
    ],
  },
  {
    title: "Dump your context in",
    paragraphs: [
      "The first dump is the briefing you would give a hire. If you already wrote that briefing in Claude or ChatGPT, bring it over. Add the docs that show what good looks like.",
      "Then point the bot at Brand DNA in Drive and tell it to open the file. Do not summarize DNA into the description and hope. The full dump lives later in this guide, under what you feed them.",
    ],
  },
  {
    title: "Connect email, calendar, Drive, CRM",
    paragraphs: [
      "Connect plugins from the sidebar Plugins list, or the in-chat Connect card. Authorize in the browser. If it says Waiting for authorization, hit Reopen. Disabled by team admin is a Teams policy.",
      "Give this first bot only what the first job needs: work email, calendar, and Drive. Leave personal mail alone. The Chief of Staff cannot brief a week it cannot see. If the morning brief invents a meeting, fix the calendar plugin before you add anyone else.",
      "You upload the CRM. The bot reads and drafts against live records. Do not let the bot reformat a giant spreadsheet. A 4,500-row import can burn a weekly bucket and still ship a broken file.",
      "Least privilege is the rule. A content bot does not need the ads account. An influencer bot does not need the personal inbox.",
      "Never paste an API key into chat. Cursor has a secret store.",
      "For sites with no plugin, take over the Grok Bot computer. You sign in. It never sees the password. You type the 2FA. The session stays. One login can serve more than one bot because they share the computer.",
      "If the job is code, the bot stays the coordinator. The Cloud Agent rule is later in this guide.",
    ],
  },
  {
    title: "One concrete first job, then Talk",
    paragraphs: [
      "First message is one concrete job. Read tomorrow's calendar. Write a brief. Do not email anyone.",
      "Then hit Talk and speak the next one. Set a meeting with these three people. Ask them for times. Use my booking link. Typing at one model is the old loop.",
      "Setup before talk. Talking without the role, the file, and the access is just another chat window.",
    ],
  },
  {
    title: "Add the next bot when ready",
    paragraphs: [
      "Add the next bot only when the same job keeps landing on the Chief of Staff and the context is getting muddy. Name it so it feels personal. If a workflow hits you over and over, it can be a job: invoices, books, bug tickets, repeat build work.",
      "Sidebar Sections group bots by business task so you know who to go to.",
      "Hide does not pause routines. Delete only when you are sure. Shared computer files and logins are not isolated per bot.",
    ],
  },
  {
    title: "Turn repeats into routines",
    paragraphs: [
      "Recurring work becomes a routine. A weekday-morning brief. A weekly content pack. Write the routine as the job, not as a frozen recipe.",
      "Standing rules stay in the description. Today's task goes in Talk. How you train those repeats is its own section below.",
    ],
  },
];

export type JobOverview = {
  name: string;
  owns: string;
  stayOn: string;
};

export const jobsOverview: JobOverview[] = [
  {
    name: "Chief of Staff",
    owns: "Calendar, mail, morning brief, routing, meetings",
    stayOn: "Anything leaving the company",
  },
  {
    name: "Content",
    owns: "Newsletter, social, decks, proposals, images, scripts",
    stayOn: "Publish",
  },
  {
    name: "Outbound",
    owns: "Lists, sequences, meeting books",
    stayOn: "First send and the daily cap",
  },
  {
    name: "Specialist",
    owns: "Research, media, community, booking, or investor relations",
    stayOn: "The list and the send",
  },
  {
    name: "Influencers",
    owns: "Creator lists, outreach, briefs",
    stayOn: "Every send",
  },
  {
    name: "Webmaster",
    owns: "Sites, deploys, metadata",
    stayOn: "Production",
  },
  {
    name: "AI Visibility",
    owns: "Brand DNA pages and placements",
    stayOn: "The story",
  },
  {
    name: "Community",
    owns: "Native answers",
    stayOn: "The live batch",
  },
  {
    name: "Client Ops",
    owns: "Status, deadlines, customer updates",
    stayOn: "Customer email",
  },
  {
    name: "Media Buyer",
    owns: "Keywords, ads, caps",
    stayOn: "Spend",
  },
  {
    name: "Finance",
    owns: "Invoices, recurring books, payment follow-up",
    stayOn: "Money movement",
  },
  {
    name: "Development",
    owns: "Repeat tickets, scaffolding, custom software",
    stayOn: "Merge and ship",
  },
  {
    name: "Bug tracking",
    owns: "Incoming bugs, repro notes, triage",
    stayOn: "What gets fixed first",
  },
  {
    name: "Coach",
    owns: "A standing place to think",
    stayOn: "Optional",
  },
];

export const feedThemList = [
  "Who you serve, in their words",
  "The offer in one sentence",
  "Two claims you can prove with a receipt",
  "The words you refuse",
  "How you want to sound on a call with a friend",
];

export const keepHumanMistakes = [
  "Do not connect your whole life. Each bot gets only the access that job needs.",
  "They invent a meeting, a number, or a category if the source file is not open.",
  "They will burn the weekly bucket reformatting a giant CRM and still ship a broken import. You upload the sheet.",
  "A bot that sends without you can wreck a domain or a relationship. Draft. You say send.",
  "A bot that can spend will spend. Draft the plan. You approve the number.",
  "Secrets never go in chat. You take the computer for passwords and 2FA.",
];

export const jobs: JobCard[] = [
  {
    name: "Chief of Staff",
    owns: "Calendar, mail, the morning brief, routing, and meetings. First bot you talk to.",
    dayOne: "Work email, calendar, Drive, and your Cal.com booking link.",
    stayOn:
      "Anything leaving the company. It does not send outside the company unless you say so.",
    who: "Every founder. This is the EA seat. Start here so you have a teammate that can see your week.",
    skills:
      "Meetings are an EA job. Stand up Cal.com. Make 15, 30, and 60 minute types. Block the hours you are closed so nobody books a surprise. Connect the work calendar. The bot sends the link when someone wants time.",
    routines: "A weekday-morning brief. Routing. Follow-ups and reminders.",
    tools: "Gmail, Calendar, Drive, Cal.com",
  },
  {
    name: "Content",
    owns: "Newsletter, social, decks, proposals, images, and scripts. One owner for the library.",
    dayOne: "Drive with Brand DNA. Canva. Humanizer on day one.",
    stayOn: "Publish. Content owns compose. You own send.",
    who: "When the same pack keeps stacking and you want one brain for it.",
    skills:
      "Humanizer required. Brand DNA open, not summarized. Pack rules in the description. Voice rules live there too. Every draft goes through Humanizer before you see it.",
    routines:
      "A weekly pack. My bar is one newsletter, five LinkedIn posts, fourteen X posts, two site briefs, and three short scripts. Yours can be smaller.",
    tools: "Drive, Canva, Nitrosend (compose; founder sends), X after pack review",
  },
  {
    name: "Outbound",
    owns: "Prospects, list hygiene, sequences, and meeting books.",
    dayOne: "Breakcold as the CRM. Smartlead for warmup and cold send.",
    stayOn: "The first send and the daily cap.",
    who: "The SDR seat. Revenue. Every founder should have this after the EA.",
    skills:
      "The CRM is the system of record. A send engine is a send engine. This bot does not touch the newsletter. You upload the list. A new domain gets 14 to 21 days of warmup, then 5 to 10 real pitches a day in week one. Domain reputation is the asset.",
    routines: "Draft the campaign. Hygiene on the list. Meeting books against live records.",
    tools: "Breakcold CRM, Smartlead (warmup + cold). Not the newsletter tool.",
  },
  {
    name: "Specialist",
    owns: "One channel playbook: research, media, booking, or investor relations. Same pattern as outbound. Different list.",
    dayOne: "Drive, Breakcold, and the channel tool for that playbook.",
    stayOn: "The list and the send.",
    who: "When one channel is how you get customers and it should not live inside Outbound.",
    skills: "You upload that list. The specialist drafts against it. It does not borrow the sales list.",
    routines: "Channel-specific research, outreach drafts, and list hygiene.",
    tools: "Drive, Breakcold, and the channel tool",
  },
  {
    name: "Influencers",
    owns: "Creator lists, outreach drafts, and briefs for a post or a story.",
    dayOne: "Creator lists in Drive. CRM logging in Breakcold.",
    stayOn: "Every send.",
    who: "When creator outreach is a real motion and must stay separate from sales prospects.",
    skills:
      "Does not mix with sales prospects. Does not send unless you say so. A partner who will not live in your sidebar can email this bot like an assistant.",
    routines: "Outreach drafts and briefs. Lists and research. CRM logging.",
    tools: "Drive, Breakcold. Email alias for partners.",
  },
  {
    name: "Webmaster",
    owns: "Sites, deploys, metadata, and publishing the pages other bots write.",
    dayOne: "GitHub and Vercel. Cloud Agent for any repo work.",
    stayOn: "Production. It does not force-push. It does not invent strategy copy.",
    who: "When pages need to ship and you are tired of pasting files by hand.",
    skills:
      "GitHub is the source of truth. Vercel is how it ships. It launches a Cursor Cloud Agent for the repo. You stay on production.",
    routines: "Deploys, metadata, and publishing pages the other bots drafted.",
    tools: "GitHub, Vercel, Cloud Agent for code",
  },
  {
    name: "AI Visibility",
    owns: "Brand DNA pages and placements. On-site GEO after the story is stamped.",
    dayOne: "Brand DNA first. Then a visibility report (GeoView). Then on-site pages.",
    stayOn: "The story. No invented citation percents.",
    who: "Later-stage. Skip it until you have a stamped story to feed it, and until customers ask ChatGPT who to hire.",
    skills:
      "Brand DNA first. Then the report. Then on-site pages and off-site placements. OpenSEO is a Cursor plugin. Ask before you spend paid credits.",
    routines: "Visibility report, then page and placement drafts against the stamped story.",
    tools: "Drive (Brand DNA), OpenSEO (ask before paid credits)",
  },
  {
    name: "Community",
    owns: "Native answers on Reddit and forums. Brand mention only when it is honest.",
    dayOne: "The forum session on the Grok Bot computer. Review line in the description.",
    stayOn: "The live batch. A human approves before anything goes live.",
    who: "When native community is a real channel and you will review the batch.",
    skills:
      "I have watched chatter bots get accounts shut down. Put the review line in the description on day one.",
    routines: "A draft batch of native answers. You approve. Then it posts.",
    tools: "Native Reddit and forum sessions on the signed-in computer",
  },
  {
    name: "Client Ops",
    owns: "One brain for the roster. Status, deadlines, who owes what, the bi-weekly update.",
    dayOne: "Breakcold and Drive.",
    stayOn: "Customer email. It does not email a customer until you greenlight.",
    who: "The moment you have more than two customers and you are the only person who knows the state.",
    skills: "Status tracking against live records. No outbound to customers on day one.",
    routines: "Roster status and the bi-weekly update.",
    tools: "Breakcold, Drive",
  },
  {
    name: "Media Buyer",
    owns: "Drafts keywords, negatives, ads, and daily caps. Watches search terms and pauses junk.",
    dayOne: "A signed-in ads session on the Grok Bot computer. There is still no first-party Google Ads connector.",
    stayOn: "Spend. Never launches a campaign. Never raises a budget. You approve the number.",
    who: "When paid search is live and you want drafts, not a bot on the spend button.",
    skills: "You bid on buyer language. It drafts the plan. You stay on launch and raises.",
    routines: "Keyword and negative drafts. Search-term watch. Pause lists for junk.",
    tools: "Ads via a signed-in computer session",
  },
  {
    name: "Finance",
    owns: "Invoices, recurring books, and payment follow-up.",
    dayOne: "The invoice records you already keep. Drive for the recap.",
    stayOn: "Money movement. It never pays a vendor or changes a bank detail.",
    who: "When the same money loop hits every week.",
    skills: "It drafts the chase and the recap. You move the money.",
    routines: "Invoice chase and a weekly recap.",
    tools: "Drive. No bank access.",
  },
  {
    name: "Development",
    owns: "The build work that keeps coming back: scaffolding, tickets, the same kind of change across a repo. It can also ship custom software for a workflow you still run by hand.",
    dayOne: "GitHub and Vercel. Cloud Agent standing rule in the description.",
    stayOn: "Merge and ship. It does not force-push production.",
    who: "The Dev seat. Shipping. Every founder should have this with the EA and the SDR.",
    skills:
      "Do not write or edit product code on the Grok Bot computer. For any coding, repo, PR, test, or CI work, launch a Cursor Cloud Agent on the connected repo. Pass the full task, repo, and branch. Then monitor that agent and report back. Use your Cloud Agent default model unless you name one.",
    routines: "The bot names the repo, the branch, and the full task. It launches the Cloud Agent. Then it watches and reports.",
    tools: "GitHub, Vercel, Cloud Agent only for code",
  },
  {
    name: "Bug tracking",
    owns: "Incoming bugs, repro notes, and triage.",
    dayOne: "GitHub Issues.",
    stayOn: "What gets fixed first.",
    who: "When a lot of code is getting written and the same ticket pile keeps growing.",
    skills: "It organizes the queue. You pick the order.",
    routines: "Triage incoming issues. Repro notes. A clear pile.",
    tools: "GitHub Issues",
  },
  {
    name: "Coach",
    owns: "A standing place to think. Goal setting, mindset, nutrition, personal development, and reflection.",
    dayOne: "Drive notes only.",
    stayOn: "Optional. It does not hold the inbox.",
    who: "Optional. Use it when you want a place that does not also hold outbound tools.",
    skills: "No outbound tools. Notes in Drive. It does not send.",
    routines: "A standing reflection. Goal check. Notes you can reopen.",
    tools: "Drive notes only. No outbound tools.",
  },
];

export const tools: ToolChip[] = [
  {
    name: "Google Workspace",
    href: "https://workspace.google.com/",
    note: "Gmail, Calendar, Drive. Day-one connect for the Chief of Staff.",
  },
  {
    name: "Breakcold",
    href: "https://www.breakcold.com/",
    secondaryLabel: "Login",
    secondaryHref: "https://us.breakcold.com/login",
    note: "CRM. System of record. You upload the sheet.",
  },
  {
    name: "Smartlead",
    href: "https://www.smartlead.ai/",
    note: "Warmup and cold send. Not the newsletter tool.",
  },
  {
    name: "Nitrosend",
    href: "https://nitrosend.com/",
    secondaryLabel: "Join",
    secondaryHref: "https://app.nitrosend.com/join",
    note: "Newsletter only. Content composes. Founder sends. CRM stays Breakcold.",
  },
  {
    name: "Vercel",
    href: "https://vercel.com/",
    note: "How sites ship. Pair with GitHub.",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    note: "Source of truth for code and Issues.",
  },
  {
    name: "Canva",
    href: "https://www.canva.com/",
    note: "Decks, images, and pack assets for Content.",
  },
  {
    name: "Cal.com",
    href: "https://cal.com/",
    note: "Meeting page. 15, 30, and 60 minute types. Block closed hours.",
  },
  {
    name: "X",
    href: "https://x.com/",
    note: "Social after pack review. Content drafts. You publish.",
  },
  {
    name: "OpenSEO",
    note: "Cursor plugin for AI Visibility. Ask before paid credits.",
  },
];

export const humanizerRules = [
  {
    rule: "Identify the patterns",
    action: "Scan the catalog before you touch a sentence",
  },
  {
    rule: "Keep the facts",
    action: "Every claim survives. The shape can change.",
  },
  {
    rule: "Invent nothing",
    action: "No name, number, date, quote, or citation that was not in the source",
  },
  {
    rule: "Match the voice",
    action: "Read a real sample first. Copy the habits. Do not upgrade the words.",
  },
] as const;

export const openingRest = [
  "That is different from chatting with Claude or ChatGPT in a tab. An LLM answers a prompt. An agent has a role, opens email, Drive, calendar, and your CRM, and can run routines while you are offline. Grok 4.6 holds up on quality and cost next to the models founders already know, and it does not watermark your content.",
  "I run this stack every day. An SDR agent found $250K in pipeline in two weeks. An executive assistant owns calendar, mail, meetings, and follow-ups. A developer bot ships sites and apps against GitHub and Vercel from a spoken brief. Those are proof of what becomes possible once setup is done.",
  "Every founder should start with three seats that pay for themselves: an EA for time, an SDR for revenue, and a Dev bot for shipping. Then add more jobs from the menu later in this guide.",
  "This guide is the order that works. First you understand what an agent is. Then you set one up with real context and real access. Only after that do you talk, assign work, and expand the roster. Talking without setup is just another chat window.",
];
