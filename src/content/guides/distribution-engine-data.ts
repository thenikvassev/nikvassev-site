export type ChoiceRow = {
  choice: string;
  question: string;
};

export type PlaybookRow = {
  playbook: string;
  for: string;
};

export type PaidKeyRow = {
  key: string;
  standard: string;
};

export type StepItem = {
  title: string;
  paragraphs: string[];
};

export const openingRest = [
  "The sequence matters. Lock target market and differentiation first. Map where you can actually reach them. Choose playbooks next, then tools, then run campaigns. Marketing is campaign-based. Running organic alone or ads alone is incomplete. Sometimes one well-chosen playbook and one campaign moves the needle. Choose by budget and team size. Creation got cheap for everyone at once; distribution is the moat that still compounds.",
  "You will walk out with five company choices that shape everything downstream, an eight-step marketing process that ends in test-and-kill, a playbook menu with five defaults for early B2B and specialist companies, and a one-sitting challenge that names your channels, campaigns and budget. I run Guide IQ and Storyline Pros on this map. The same map works if you are still tightening the offer, or later and trying to stop improvising growth every week.",
];

export const operatingRules: StepItem[] = [
  {
    title: "Hook faster",
    paragraphs: [
      "Rewrite every first line for a three-second stop. Kill anything that starts with a soft throat-clear.",
    ],
  },
  {
    title: "Build for search and interest",
    paragraphs: [
      "Write for the query and the save. Stop optimizing for follower totals.",
    ],
  },
  {
    title: "Always test creative",
    paragraphs: [
      "Ship more angles, hooks and formats than you feel ready for. One format is a guess.",
    ],
  },
  {
    title: "Use niche creators",
    paragraphs: [
      "Treat small trusting audiences as a growth channel.",
    ],
  },
  {
    title: "Optimize for attention and conversion",
    paragraphs: [
      "Measure stops, replies, trials and sales. Follower growth is a side effect.",
    ],
  },
  {
    title: "Build trust and guard reputation",
    paragraphs: [
      "In a caution economy, one sloppy claim costs more than it used to. Proof before volume.",
    ],
  },
  {
    title: "Reach outside social",
    paragraphs: [
      "Email, partnerships, search, communities and sales. Social is a lane.",
    ],
  },
];

export const fiveChoices: ChoiceRow[] = [
  {
    choice: "Business model",
    question: "How do you get paid.",
  },
  {
    choice: "Target market",
    question: "Who you actually serve. Demo and psychographic.",
  },
  {
    choice: "Go-to-market",
    question: "How you get in front of them and convert.",
  },
  {
    choice: "Brand and position",
    question: "How you show up in their head.",
  },
  {
    choice: "Distribution",
    question: "Which channels own the growth loop.",
  },
];

export const processSteps: StepItem[] = [
  {
    title: "Create a brand",
    paragraphs: [
      "Who it is for, what it stands for, what it refuses. Brand DNA first stops every ad, email and founder post from inventing a different company.",
    ],
  },
  {
    title: "Create your marketing assets",
    paragraphs: [
      "Pages, ads, emails, founder posts and sales notes. The things a buyer can actually see. One landing page that matches the offer beats ten half-finished Notion drafts.",
    ],
  },
  {
    title: "Create hypotheses",
    paragraphs: [
      "This offer, to this person, on this channel, will produce this result. Write the expected number. Vague hope is not a hypothesis.",
    ],
  },
  {
    title: "Choose the playbooks",
    paragraphs: [
      "Five is plenty. Fifteen is avoidance. Use the default five below unless your buyers live somewhere else. Match the mix to budget and team size.",
    ],
  },
  {
    title: "Choose the tools",
    paragraphs: [
      "Only what the playbooks need. A tool with no campaign attached is clutter.",
    ],
  },
  {
    title: "Choose the channels",
    paragraphs: [
      "Three to start. Name them out loud. If you cannot name them, you do not have channels yet. Map where your target market actually spends attention before you add a fourth.",
    ],
  },
  {
    title: "Execute the campaigns",
    paragraphs: [
      "Real dates, real spend, real creative. Put the first send or first post on the calendar this week. A channel without a campaign is a hobby.",
    ],
  },
  {
    title: "Test and iterate until it hits",
    paragraphs: [
      "Kill what misses. Scale what converts. Creative density beats calendar consistency.",
    ],
  },
];

export const playbooks: PlaybookRow[] = [
  {
    playbook: "AI search and SEO",
    for: "Own intent. Show up when someone asks a model or a search box who to trust.",
  },
  {
    playbook: "Organic",
    for: "Slow compounding trust. The asset is the library.",
  },
  {
    playbook: "Paid",
    for: "Data, creative density, learning and pivoting. You pay to find out.",
  },
  {
    playbook: "Meta / Andromeda",
    for: "Let the algorithm find buyers. Feed it winning ads.",
  },
  {
    playbook: "Paid funnels",
    for: "TOF, MOF, BOF and retargeting. A path.",
  },
  {
    playbook: "Paid traffic",
    for: "Google, TikTok Shop, Reddit. Intent and commerce in the native feed.",
  },
  {
    playbook: "Paid plus organic synergy",
    for: "Test in organic, scale in paid.",
  },
  {
    playbook: "Partnerships",
    for: "Borrow distribution.",
  },
  {
    playbook: "Email",
    for: "Own the audience. The only list the algorithm cannot take.",
  },
  {
    playbook: "Founder content",
    for: "Build trust in public.",
  },
  {
    playbook: "PR",
    for: "Third-party validation that builds trust and lifts conversion.",
  },
  {
    playbook: "Sales",
    for: "LinkedIn automation, AI outbound, ad-to-call. Someone still has to close.",
  },
  {
    playbook: "UGC",
    for: "Social proof at scale.",
  },
  {
    playbook: "Influencers",
    for: "Trust transfer from a niche voice.",
  },
  {
    playbook: "Affiliate",
    for: "Performance distribution. They get paid when it works.",
  },
];

export const defaultFive: StepItem[] = [
  {
    title: "Founder content",
    paragraphs: [
      "For founders who need trust and inbound without waiting on an agency calendar. Pick one public lane (LinkedIn, X, newsletter or short video). Ship three posts a week for four weeks. Each post opens with a hook, one concrete claim and a next step (reply, book, waitlist or reply with a word). Record once, cut into the formats that platform rewards. Success signal: replies, DMs or booked calls that started from a specific post. Impressions alone do not count.",
    ],
  },
  {
    title: "Email",
    paragraphs: [
      "For anyone who wants an audience the algorithm cannot revoke. Stand up one list and one weekly send. Capture email on the site, in the founder posts and after every call. Write from the same Brand DNA as your ads. One primary offer per email. One clear link. Success signal: clicks into a page, reply rate and meetings booked from the list. Opens are secondary.",
    ],
  },
  {
    title: "AI search and SEO",
    paragraphs: [
      "For companies whose buyers ask search engines or AI tools who to trust before they buy. Lock Brand DNA first so the pages, the model answers and the ads agree.",
      "Publish a small set of pages that answer the questions your buyer actually asks: who it is for, what it replaces, proof, pricing story and how to start. Put those claims on your site in plain language. Refresh monthly with real customer language from calls. Success signal: organic visits to those pages, branded search and inbound that cites a page or an AI answer. Vanity keyword ranks without leads are noise.",
    ],
  },
  {
    title: "One paid lane",
    paragraphs: [
      "For teams ready to buy learning speed once organic has surfaced a few hooks. Pick Meta or search. Wire the pixel. Write ten ads from the winning organic hooks (or three search themes if you chose Google). Point every ad at one landing page that matches the promise. Cap the first week so you can read results without panic. Success signal: cost per qualified lead or cost per booked call you would take again. If you cannot name the hook, offer, pixel and landing page in one breath, do not raise spend.",
    ],
  },
  {
    title: "Partnerships or niche creators",
    paragraphs: [
      "For founders who can borrow a trusting audience faster than they can grow their own from zero. List ten partners or niche creators whose audience matches your buyer. Send a specific ask: a co-hosted session, a guest note, a product trial with a brief or a paid post with a clear offer. Prefer small niches with high trust over big accounts with cold reach. Success signal: at least one live distribution event this month that produces named conversations. A polite maybe with no date is not a partnership yet.",
    ],
  },
];

export const paidKeys: PaidKeyRow[] = [
  {
    key: "Funnel path",
    standard:
      "Run TOF, MOF, BOF and retargeting so a cold view is not asked to buy on first sight.",
  },
  {
    key: "Testing floor",
    standard:
      "10 ads a week minimum, a working pixel, analytics you actually read, landing pages you keep improving.",
  },
  {
    key: "Scale platform",
    standard:
      "Treat Meta as the scale lane for most teams, unless your buyer only lives on search or in a closed community.",
  },
  {
    key: "Creative first",
    standard:
      "Put creative ahead of manual targeting. The algorithm finds the person better than you draw the box.",
  },
  {
    key: "Account shape",
    standard: "Go broader. Simplify the account. Feed it winners.",
  },
  {
    key: "Spend gate",
    standard:
      "If you cannot name the hook, the offer, the pixel and the landing page in one breath, you are not ready to raise spend.",
  },
];

export const todaySteps: StepItem[] = [
  {
    title: "Choose your target market",
    paragraphs: ["Demo plus psychographic. One sentence."],
  },
  {
    title: "Define your UVP and core value story",
    paragraphs: ["What they get, why you, why now."],
  },
  {
    title: "Map the GTM to PMF path",
    paragraphs: ["Who you sell to, how you get them, how you monetize."],
  },
  {
    title: "Pick 3 acquisition channels",
    paragraphs: [
      "Example: paid search, founder content, partnerships. Only channels where your market actually shows up.",
    ],
  },
  {
    title: "Pick 5 playbooks",
    paragraphs: [
      "Example: SEO, paid, UGC, founder content, partnerships. Or use the default five above. Size to budget and team.",
    ],
  },
  {
    title: "Design 3 concrete campaigns",
    paragraphs: [
      "One for each channel or funnel stage. Offer, asset, date, success number.",
    ],
  },
  {
    title: "Build a realistic budget for those 3 campaigns",
    paragraphs: [
      "Time, spend, tools. If the budget is imaginary, the test is imaginary.",
    ],
  },
];
