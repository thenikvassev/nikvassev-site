export type FieldRow = {
  label: string;
  value: string;
};

export type CompareRow = {
  label: string;
  left: string;
  right: string;
};

export type PasteBlock = {
  title: string;
  body: string;
};

export type SetupStep = {
  title: string;
  paragraphs: string[];
};

export const openingRest = [
  "Unlike LLMs like Claude or ChatGPT that require great prompting, manual integrations, and skills, Grok Bots require goals, job descriptions, skills, routines, and tools that you can set up as easily as logging into your email.",
  "The guide below will help any business owner set up an AI sales agent using Grok Bot.",
];

export const owns = [
  "Prospect and enrich (Clay preferred; any enrich tool until Clay is connected)",
  "Write and clean CRM records in Breakcold (or your CRM of record)",
  "Load and run Smartlead cold campaigns after you approve",
  "Draft intent one-to-ones in Gmail and hold until you pick who sends",
  "Suggest reply triage; escalate judgment calls",
  "Prepare booking links (Cal.com or your scheduler) after interest",
  "Log outcomes the same day and keep pipeline hygiene",
];

export const volumeLane: FieldRow[] = [
  {
    label: "Goal",
    value:
      "About 100 unique first touches on a weekday you can actually review. Raise or cut that number only after you have watched a clean draft week.",
  },
  {
    label: "Channel",
    value:
      "Smartlead (or your cold sequencer) after warmup. This is the Basho volume factory, not the CRM.",
  },
  {
    label: "Quality gate",
    value:
      "Every keep must clear your KEEP / THIN / SKIP research bar before it can leave.",
  },
  {
    label: "From persona",
    value:
      "Your real name (or the founder brand you already own). Do not invent a fake SDR identity on the From line.",
  },
  {
    label: "Metric to watch",
    value: "Replies and meetings worth taking, not open rate alone.",
  },
];

export const intentLane: FieldRow[] = [
  {
    label: "Triggers",
    value:
      "Funding, marketing-hire, rebrand, or whatever signal matches your ICP this quarter.",
  },
  {
    label: "Channel",
    value:
      "Gmail one-to-ones (or LinkedIn / WhatsApp when those connectors are live), not the cold factory.",
  },
  {
    label: "Follow-ups",
    value: "Day-2 and Day-5 live on this queue.",
  },
  {
    label: "Gate",
    value: "KEEP drafts stay on HOLD until you pick who sends.",
  },
  {
    label: "Metric to watch",
    value: "Positive replies and booked calls from a smaller queue.",
  },
];

export const anatomy: FieldRow[] = [
  {
    label: "Hyper-personalized subject",
    value:
      "Connects to an achievement, public interview, or issue unique to their company.",
  },
  {
    label: "The hook",
    value:
      "Opening line that proves you did the homework (podcast quote, funding round, shared connection).",
  },
  {
    label: "The value hook (“so what?”)",
    value:
      "Ties your offer to a specific challenge they are facing right now.",
  },
  {
    label: "Soft CTA",
    value:
      "Low-friction ask to start a conversation or book a brief meeting. Not a hard pitch.",
  },
];

export const bashoVsBlast: CompareRow[] = [
  {
    label: "Audience",
    left: "Specific decision-makers (CXOs, VPs)",
    right: "Broad industry lists",
  },
  {
    label: "Personalization",
    left: "Unique to one recipient",
    right: "Basic merge tags",
  },
  {
    label: "Volume",
    left: "Low-volume precision inside each note",
    right: "High-volume automation",
  },
  {
    label: "Response",
    left: "Higher from relevance",
    right: "Lower from generic templates",
  },
  {
    label: "Time",
    left: "Deep research first",
    right: "Template blast setups",
  },
];

export const bashoRules = [
  "Research before you write. One current trigger, one role-specific issue, one clear ask.",
  "Lead with their world. Your company bio waits.",
  "One purpose per message. Prefer “Worth comparing notes?” over a preemptive Cal link.",
  "No fake familiarity, inflated praise, checking-in bumps, or urgency theater.",
  "Hold for founder approval before send, same as every other external draft.",
  "Cold access stays Basho. Save Challenger-style discovery for live meetings so the voice does not blur.",
];

export const bashoSkill = `Name: Basho email - anatomy + under 90 words

Purpose: Turn a KEEP prospect into a Basho access email (or reply draft) that follows the four-part anatomy and stays under 90 words.

Body:
You write Basho access emails only. Basho means short, one-to-one, research-led. Named after the poet's "say more with less," not a letter acronym.

Anatomy (in order):
1) Hyper-personalized subject: achievement, public interview, or issue unique to their company.
2) The hook: first line proves homework (podcast quote, funding round, shared connection, public post).
3) The value hook ("so what?"): tie our offer to one challenge they face right now.
4) Soft CTA: one low-friction ask to start a conversation. No hard pitch. No Cal / booking link on first cold touch unless the founder explicitly overrides.

Constraints:
- Under 90 words in the body.
- One company, one person, one current trigger, one ask.
- Never invent titles, funding, quotes, or personal details. If the source is thin, say so and stop.
- Central test: if this exact email could go to anyone else, rewrite it.
- Tone: plain, coworker, founder voice from Brand DNA. No gimmicks, no "just checking in," no fake scarcity.
- Output: subject + body + one-line next step if they reply yes. Mark HOLD for founder approval before send.`;

export const humanBashoSteps = [
  "Find one verifiable trigger (post, hire, raise, interview, launch).",
  "Write the subject from that trigger, not from your product name.",
  "Open with the hook in one sentence.",
  "Add one “so what?” sentence that connects their situation to your offer.",
  "Close with one soft ask. Count words. Cut until you are under 90.",
  "Run the “anyone else?” test. Then send only after you approve.",
];

export const skills: PasteBlock[] = [
  {
    title: "1. Access notes - trigger + one ask",
    body: `Name: Access notes - trigger + one ask

Purpose: Turns a KEEP prospect into a short access note (email or reply draft) with one clear ask, using Basho anatomy.

Body:
When asked for an access note, follow Basho (see skill "Basho email - anatomy + under 90 words").

Steps:
1) Confirm KEEP status and the verified trigger. If research is THIN or SKIP, do not draft a sendable note.
2) Subject: hyper-personalized to the trigger or company-specific issue.
3) Body order: hook → value hook ("so what?") → soft CTA.
4) One ask only (reply with timing, or accept a booking link after interest). No pitch-deck dump. No fake familiarity.
5) Hard limit: under 90 words for cold first touches. Shorter is fine.
6) Channel: volume drafts go toward Smartlead after founder approval; intent drafts stay in Gmail on HOLD until the founder picks who sends.
7) Output: subject (if email) + body + suggested next step if they reply yes + HOLD flag.`,
  },
  {
    title: "2. Research bar - KEEP / THIN / SKIP",
    body: `Name: Research bar - KEEP / THIN / SKIP

Purpose: Scores a prospect before any draft or CRM write that could become a send.

Body:
Score every prospect before drafting or writing CRM fields that imply a send path.

KEEP:
- Clear ICP fit
- Reachable contact
- Real trigger or strong fit reason
- Offer match in one sentence of evidence

THIN:
- Maybe fit, but missing trigger, weak contact, or unclear offer match
- Enrich once; do not send yet

SKIP:
- Out of ICP, direct competitor, no reachable path, or research that would require inventing facts

Rules:
- Never invent titles, funding, quotes, or personal details.
- If the source is thin, mark THIN or SKIP.
- For volume research bars that use a public AI answer check (for example, who shows for a buyer query), list only names you actually saw. Do not invent who_shows.

Output:
- Label: KEEP | THIN | SKIP
- Three bullets of evidence
- Recommended next action (draft Basho / enrich once / pause / skip)`,
  },
  {
    title: "3. Intent follow-up - Day 2 and Day 5",
    body: `Name: Intent follow-up - Day 2 and Day 5

Purpose: Keeps the intent lane alive after first touch without nagging.

Body:
Only for intent KEEP contacts already logged in CRM (Breakcold or named system of record). Volume Smartlead sequences use their own cadence; do not double-send.

Day 2:
- New angle or one fresh public detail
- Still one ask
- Reference the first note lightly
- Stay under Basho length when possible

Day 5:
- Final polite bump or close-the-loop
- Offer an easy out
- Stop after Day 5 unless they reply

Rules:
- Hold for founder approval before send, same as first touch.
- No "just checking in" with zero new information.
- If they opt out or say not interested, stop and log CRM the same day.

Output: draft subject + body + day label (2 or 5) + HOLD flag.`,
  },
  {
    title: "4. Humanizer - before external copy",
    body: `Name: Humanizer - before external copy

Purpose: Rewrites drafts so they sound like the founder before anything leaves the agent.

Body:
Before any external copy (email, LinkedIn, WhatsApp, sequence step), rewrite against Brand DNA voice and these bans:

Remove:
- Em dashes and en dashes used as drama
- Negative parallelisms ("It's not X, it's Y")
- Parallel repetition stacks and rule-of-three punch lists
- Empty hype and AI vocabulary (delve, crucial, tapestry, pivotal, and similar)
- Fake familiarity and stacked short punchlines

Keep:
- Facts and the one ask
- Founder voice from Brand DNA
- Basho anatomy when the draft is an access note

Output: revised draft + a short list of what changed. Still HOLD for founder approval before send.`,
  },
  {
    title: "5. CRM diligence - same-day log",
    body: `Name: CRM diligence - same-day log

Purpose: Forces Breakcold (or your CRM of record) to stay honest the day something meaningful happens.

Body:
Same-day log required for:
- Meaningful replies
- Books / meetings set
- Stage changes
- Unsubscribes
- Bounces that end the path

Required fields on the note or activity:
- Who
- Channel (Smartlead / Gmail / LinkedIn / WhatsApp / other)
- What happened
- Next step
- Owner

Rules:
- CRM wins conflicts with sequencers and inboxes.
- Positive replies move out of the sequencer into CRM the same day.
- Do not leave "sent" as the last note when a human reply already exists.
- Finished no-replies and hard bounces get scrubbed from sequencer storage without becoming fake CRM deals.

Output: confirmation of what was logged, where, and any conflict that needs the founder.`,
  },
];

export const routines: PasteBlock[] = [
  {
    title: "1. Weekday volume factory",
    body: `Name: Weekday volume factory (Basho / Smartlead)
Schedule hint: weekdays 08:00 America/Cancun (or your send-prep hour)

Prompt:
Run the volume cold lane for today.

Goal: prepare toward ~100 unique first touches for the weekday Smartlead mailer (or the founder's capped number). Missing the agreed daily first-touch target is a miss; report it plainly.

Steps:
1) Research the next ICP slice.
2) Enforce Research bar - KEEP / THIN / SKIP. Never invent facts.
3) For KEEP (and approved THIN unlock rules if the founder set any), prepare Basho-compliant copy via Access notes / Basho skill. Under 90 words. Soft CTA. No Cal link on cold first touch.
4) Load or unlock only what the founder already approved for cold send volume. Do not raise caps. Do not start a new campaign blast without approval.
5) From persona stays the founder's real name.
6) Report: KEEP/THIN/SKIP counts, sendable pool vs daily target, blockers, anything waiting on the founder.`,
  },
  {
    title: "2. Weekday intent signal sweep",
    body: `Name: Weekday intent signal sweep
Schedule hint: weekdays mid-morning America/Cancun

Prompt:
Run the intent 1:1 lane for today.

Triggers to sweep: funding, marketing-hire, rebrand (or the founder's current ICP signals).

Steps:
1) Find today's signals that match ICP.
2) Score KEEP / THIN / SKIP. Enrich once if THIN.
3) For KEEP: draft Gmail one-to-ones with Basho anatomy. Log Breakcold (or CRM of record).
4) HOLD every KEEP wave until the founder picks who sends. Do not place intent on the Smartlead cold factory.
5) Queue Day-2 / Day-5 follow-ups only for intent KEEP already logged.
6) Report: KEEP drafts on HOLD, THIN needing enrich, SKIP reasons, anything hot.`,
  },
  {
    title: "3. Reply watch",
    body: `Name: Reply watch
Schedule hint: several times on weekdays, or after major send windows

Prompt:
Watch new replies across Smartlead, Gmail, and any live LinkedIn / WhatsApp sessions.

Steps:
1) Draft triage for each new reply (positive / neutral / not now / unsubscribe / bounce).
2) Simple lock-a-time can move with standing rules (prepare Cal.com link after clear interest).
3) Judgment calls, pricing fights, angry threads, and anything that can burn trust wait for the founder.
4) Log meaningful replies in CRM the same day. Move positives out of the sequencer storage path.
5) Report: drafts ready, items waiting on founder, CRM updates made.`,
  },
  {
    title: "4. Pipeline hygiene",
    body: `Name: Pipeline hygiene
Schedule hint: weekday afternoon or end of day

Prompt:
Keep CRM as system of record.

Steps:
1) Reconcile Smartlead / Gmail / CRM conflicts; CRM wins.
2) Scrub finished no-replies and hard bounces out of sequencer storage without turning them into fake CRM deals.
3) Flag stage drift, duplicate people, and missing next steps.
4) Do not invent pipeline value.
5) Report what you cleaned and what still needs a founder decision.`,
  },
  {
    title: "5. End-of-day log",
    body: `Name: End-of-day log
Schedule hint: end of founder workday, America/Cancun

Prompt:
Before close, confirm every meaningful motion today is in CRM.

Include: first touches vs daily target, intent KEEP on HOLD, replies, books, unsubscribes, bounces that end a path, and anything still waiting on founder approval.

If something meaningful happened and is not logged, log it now. Then send a short end-of-day note to the founder.`,
  },
];

export const setupSteps: SetupStep[] = [
  {
    title: "Create the agent",
    paragraphs: [
      "Name it. Title it SDR or Sales. Paste standing rules into the profile description: never auto-send cold email without your approval; CRM wins on conflicts; ask before first blast and before send-cap changes; intent KEEP waves HOLD until you pick; do not own newsletter, PR, GEO, or the site.",
    ],
  },
  {
    title: "Connect the plugins you trust for this job",
    paragraphs: [
      "Breakcold, Smartlead, Gmail, Calendar. Add TrulyInbox, Clay, LinkedIn, or WhatsApp when ready. Finish every Connect card yourself.",
    ],
  },
  {
    title: "Point it at Brand DNA",
    paragraphs: [
      "Point it at Brand DNA and offer docs in Drive (or your files). Tell it to open the files. Do not summarize the company into a vague paragraph and hope.",
    ],
  },
  {
    title: "Take the computer",
    paragraphs: [
      "Sign into tools that need a browser session. Confirm Cal.com links work.",
    ],
  },
  {
    title: "Install the skills",
    paragraphs: [
      "Install the Basho skill plus the five skills above (Access notes, Research bar, Intent follow-up, Humanizer, CRM diligence). Paste the full bodies. Name them in the first Talk message so the agent knows what to call.",
    ],
  },
  {
    title: "Give one concrete first job in Talk",
    paragraphs: [
      "Paste something like: “Sweep today’s marketing-hire signals. Draft KEEP notes in Gmail with Basho. Log Breakcold. Do not send.” Or: “Research the next 20 ICP accounts for the volume lane. Label KEEP / THIN / SKIP. Draft nothing until I approve the KEEP list.”",
    ],
  },
  {
    title: "Add routines after a clean draft week",
    paragraphs: [
      "Paste the full routine prompts above; then tune the daily first-touch target (100 is a fine starting bar if you will actually review it).",
    ],
  },
  {
    title: "Keep memory about sales",
    paragraphs: [
      "This agent’s job card stays narrow. Chief of Staff and the other seats live on the wider workforce guide.",
    ],
  },
];

export const founderApprovals = [
  "First blast on any new campaign or sequence",
  "Daily or weekly send-cap changes",
  "Intent KEEP waves before they leave Gmail (or LinkedIn / WhatsApp)",
  "Hot replies that need a human read",
  "Any exception to “CRM is source of truth”",
  "Anything that spends money or changes domains / mailboxes",
];
