# How to Market to AI Agents (2026)

Meta description: AI agents now shortlist companies for buyers. Here's how I get companies recommended by ChatGPT, Claude and other agents, step by step.

My companies and the companies I work with are already getting traffic from AI agents, and most of the changes that got us there were really small. Agents are shortlisting businesses for people who never open a search tab. They decide by checking whether the internet agrees with what you say about yourself.

**Coatue estimates that agentic traffic reached 50.1% of all internet traffic as of June 2026**, a milestone they flag as arriving 1.5 to 2.5 years earlier than predicted. So your marketing now has a second audience. It reads your reviews and press before a human ever hears your name.

Below are the six things I'd do this week to get recommended by agents. There's also a checklist at the end you can finish in a few hours.

## What changed when AI moved to agents

For the last few years most of us used large language models as a smarter search box. You typed a question and read the answer, and the decision was still yours.

The biggest tech companies are now moving from LLMs to agents, and an agent actually acts. It can compare vendors and hand the person a shortlist of one. Often they approve it without doing any research themselves.

You can still win a human with a sharp ad or a good sales call. But the agent working for that buyer has already read your site and whatever strangers say about you on Reddit. If that trail is thin or contradictory, you're off the list and you'll never see the lost deal.

## How an agent decides who to recommend

Agents triangulate consensus, which means they check whether multiple sources agree about you. Then they weigh that against what they know about the person they're working for. Your homepage is one input, and what other people say about you makes up most of the rest.

Semrush's Top Domains Cited by LLMs report for January 2026 shows it clearly, with these five at the top:

| Domain | Share of LLM citations |
|---|---|
| reddit.com | 11.23% |
| linkedin.com | 11.03% |
| wikipedia.org | 9.53% |
| github.com | 8.77% |
| medium.com | 5.82% |

Source: [Semrush, Top Domains Cited by LLMs (January 2026)](https://www.semrush.com/ai-search-ranking/)

Every one of those is a platform where people other than the brand do most of the talking. That matches my own AI visibility work, where proof from customers and credible third parties beats anything a company says about itself. Each step below makes your story easier for a machine to read or gives the agent someone who confirms it.

## Step 1: Map the questions an agent is answering

An agent rarely searches for your brand name. The real query looks more like "best payroll software for a 12-person agency in Texas that already uses QuickBooks" than "payroll software." Agents know their users really well, including budget, tools, location and past choices, and they filter on all of it.

Spend an hour this week mapping the decision path for your best customer:

1. List the five to ten prompts a buyer, or their agent, would use to find a company like yours.
2. Run each one in ChatGPT, Perplexity, Gemini and Claude, and note who gets named and which sources get cited.
3. Fill in a simple map like this one.

| Stage | What the agent is asking | What it needs to find about you |
|---|---|---|
| Discovery | Who solves this for someone like my user? | A clear category and named audience on your site and in third-party lists |
| Shortlist | Which three options fit best? | Comparison pages, listicles and reviews that mention your use case |
| Validation | Is this company legitimate and still active? | Recent reviews, press mentions and the same facts on every profile |
| Decision | Which one is right for this person? | Pricing, integrations, limits and fit stated plainly in text |

Any stage where you come up empty becomes your to-do list for the next five steps. I broke down which sources answer engines cite in [What AI search actually rewards](https://nikvassev.com/resources/what-ai-search-actually-rewards).

## Step 2: Make your website machine-readable

An agent won't spend long untangling a messy site. If it can't quickly find what you sell and who it's for, it moves on to a competitor that says it plainly. Here's what I'd do:

- Build one clear page each for the company, every product and the founder. The first paragraph should say what it is and who it's for in words a stranger could repeat.
- Add schema.org markup, with Organization on the homepage and Product or SoftwareApplication on product pages. Include your official name, logo, founders and sameAs links to LinkedIn and Crunchbase, then test it in Google's Rich Results Test.
- Open your robots.txt, because security plugins and CDN defaults sometimes block AI crawlers by accident. Allow the ones you care about, such as GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot and Google-Extended.
- Publish an llms.txt file at your root that points models to your key pages. It's a proposed standard with uneven support, so I treat it as cheap insurance.
- Put the important facts in HTML text. Pricing in an image or specs in a PDF are much harder for crawlers to read.
- Make your founding year, pricing and founder bio match on your site, LinkedIn, Crunchbase, review platforms and press boilerplate. Agents read contradictions as risk.

## Step 3: Gather reviews that prove you're legitimate

Reviews are the closest an agent can get to asking your customers directly, and they're hard to fake at scale. You want a steady flow of recent, specific reviews where your category actually looks. That's usually G2 and Capterra for B2B software and Google and Trustpilot for local and consumer businesses. Pick the two your buyers use instead of scattering reviews across ten sites.

Ask right after a customer hits a result or renews, because a generic quarterly blast gets generic answers. Give them a short prompt so the review is useful to an agent. Ask about the problem they had, their kind of company, what they used before and what changed.

A review that says "great tool" gives an agent nothing to work with, while one from a 20-person logistics company whose invoice disputes dropped after moving off spreadsheets gives it a precise buyer to match.

Reply to reviews, including the critical ones, since your replies are public too. Recency matters as much as volume. If your newest review is two years old, an agent can read that as a company that stalled. Never buy or fake reviews, because a sudden cluster of vague five-star posts damages trust faster than having fewer.

Community recommendations matter too, which fits with Reddit and LinkedIn leading the Semrush list. Answer questions in the subreddits where your buyers ask for recommendations and say who you are when you do. You can't manufacture organic mentions, but you can become the person people remember when someone asks.

## Step 4: Tell a story specific enough to get picked

Agents know the people they work for in detail, so a vague positioning line loses to a specific one almost every time. "The all-in-one platform for modern teams" matches nobody, while "payroll for agencies under 50 people that bill hourly" matches a precise buyer, and the agent shopping for that person picks you.

This is where narrative engineering comes in. It's shaping your messaging and proof so your public story is coherent and repeatable by third parties, including AI. I wrote up [what narrative engineering is and how it works](https://nikvassev.com/resources/what-is-narrative-engineering) separately, and for agents it looks like this:

1. Write one sentence that names who you're best for and why, in your customers' own words. If you can't finish "the best option for [specific person] because [provable reason]," an agent can't either.
2. List the proof behind that reason, like a customer result, a review or a piece of coverage. Take down any homepage claim that has none.
3. Say who you're a poor fit for. It feels counterintuitive, but agents are matching fit, so it makes you more credible for the right buyer.
4. Push that sentence into your homepage, LinkedIn page, founder bio, press boilerplate and directory listings in the same week.

## Step 5: Publish fair comparisons and how-tos

Format matters more than most people expect. **Dry Atlas analyzed more than 500,000 queries and found that lists and listicles account for 48% of AI citations by content type**. Step-by-step guides came next at 17%. That matches my experience that formats that are easy to extract get cited more.

The catch is bias. A list on your own site with your product at number one and six strawmen underneath reads as an ad. An agent checking it against reviews will discount it too. A fair comparison is one an outsider could check and agree with:

- State the criteria, the method and the date you last updated it at the top.
- Include real competitors with accurate pricing, and say plainly where each one fits better than you.
- Put it in an actual table, then add a short paragraph on each option.
- Keep it current, since last year's pricing hurts more than having no comparison at all.

Then build how-tos around the jobs your buyer is trying to get done, with your product where it genuinely helps. I'd start with these:

- One "X vs. Y" page for each competitor you lose deals to.
- One "best [category] for [niche]" page for each niche you serve.
- Three to five guides built around questions your sales team hears every week.

After that, find the "best of" articles agents already cite in your category. Pitch their authors an honest case for including you.

## Step 6: Earn media coverage that makes agents trust you

AI values the media because the media builds trust, and budgets are moving the same way. **Inc. reported in May 2026 that Gartner predicts PR and earned media budgets will double by 2027**, driven by mass adoption of public LLMs as an alternative to search. A credible outlet gives an agent independent confirmation of the story on your site.

Reporters cover what's newsworthy, which comes down to timeliness, trends, novelty, fame, significance and localization. Design your news to hit at least two of them:

- Release original data from a customer survey or anonymized product data, which gives reporters and agents something to cite.
- Attach your story to a trend already in the news, with an angle specific to your customers or against the common take.
- Make your founder quotable through bylines and expert commentary in the trade publications your buyers read.
- Localize, since a regional angle on a national story is often the easiest first placement to land.
- Explain what a funding round, launch or hire means for customers instead of sending a bare announcement.

Every placement is also a page agents can check against your site. It keeps working long after the news cycle.

## Your checklist for this week

Work through this in order, and none of it needs a redesign.

1. Run your five to ten buyer prompts in four AI tools and record who gets named.
2. Fill in the decision path map and mark the stages where you're missing.
3. Check robots.txt for AI crawlers you're blocking by accident.
4. Add Organization schema to your homepage and Product schema to your main product page.
5. Publish an llms.txt file that points to your ten most important pages.
6. Rewrite your homepage's first paragraph around "the best option for [specific person] because [provable reason]."
7. Copy that sentence into your LinkedIn page, founder bio and top two review profiles.
8. Email ten happy customers a specific review prompt for the platforms your buyers use.
9. Publish one honest comparison against the competitor you lose to most often.
10. Pick one newsworthy angle and pitch it to five reporters who cover your space.

## When this won't work

This process amplifies a real business. It won't rescue a product nobody wants or create reviews you haven't earned. If you have no customers yet, start with Steps 1, 2 and 4. Come back to reviews and media once you have proof.

Measurement is messy right now because most analytics tools don't label agent visits consistently. Treat early signals as directional. Look for a rise in AI referrals, getting named in new prompts and leads who say an AI tool sent them. A real shift in how agents describe you usually takes quarters, because models are weighing years of what the web has said about you.

## Where this leaves you

Most marketing is still built for a person scrolling a feed, and that person still matters. The difference is that they increasingly send an agent ahead to do the research. That agent only recommends companies whose story holds up.

Give it a site it can read in seconds and proof it can verify. Then make sure the people and publications it checks tell the same story you do. Start with the checklist this week, and I hope it brings you many opportunities!

If you want help marketing to AI agents, connect with me and my team at [Storyline Pros](https://storylinepros.com). For more guides like this one, get on my newsletter, [Systems Over Hustle](https://nikvassev.com/newsletter).
