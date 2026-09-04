import { BlogHtml } from "@/components/BlogHtml";

export const html = `<p>Most founders start the day the same way.</p>

<p>Open the laptop. Check email. Get pulled into something urgent. Two hours later, the real work still hasn't started.</p>

<p>Reactive mornings create reactive days.</p>

<p>You spend them catching up instead of moving forward.</p>

<p>By the time you sit down to actually think, your energy is gone.</p>

<p>In this article I will show you how to build an AI system that does the catching up for you.</p>

<h3>What a Daily Briefing System Actually Does</h3>

<p>Every morning, before you touch a single inbox, an AI agent has already reviewed your world and handed you a clear picture of what matters.</p>

<p>Your briefing pulls from the sources that actually drive your business. Emails and calendar, obviously. But also your CRM, revenue dashboard, Slack, Meta Ads and LinkedIn. Set it up right, and it monitors the market around you too.</p>

<p>You define what to watch. A competitor just raised a round. A journalist published something in your space. A regulatory change is moving through that affects your market. A customer segment you're targeting is showing up in the news for a new reason. Instead of stumbling across these things days later, or missing them entirely, your briefing surfaces them every morning alongside your internal metrics.</p>

<p>Over time, this becomes a genuine edge.</p>

<p>You stop finding out about market shifts secondhand. You start seeing them coming.</p>

<p>What comes out the other end is a short, prioritized report. Key events from yesterday, what's on your calendar today, three to five action items, and a news digest filtered for signal over noise. In your inbox or Slack before your first coffee.</p>

<p>No digging. No context switching. Just clarity.</p>

<h3>Building It</h3>

<p>Tools like <a href="https://manus.im/app" target="_blank" rel="noopener noreferrer">Manus</a> make this straightforward. But this also works on Claude and Chat GPT if you prefer.</p>

<p>Connect your data sources, set a morning schedule, and define the format you want. The AI handles the synthesis.</p>

<p>The setup: connect Gmail, Google Calendar, your CRM, Meta, Stripe, Slack, and whatever news sources are relevant to your industry.</p>

<figure>
  <img src="/blog/how-to-build-a-daily-briefing-system-with-ai/data-sources.png" alt="Step one is Connect to your Data Sources" />
  <figcaption>Step one is Connect to your Data Sources</figcaption>
</figure>

<h2>The Morning Briefing Prompt:</h2>

<p><strong>Create my daily briefing. Review the following sources and deliver a structured report.</strong></p>

<p><strong>1. Emails:</strong> Review my Gmail inbox. Flag only emails that require a decision or response from me. For each, include who it's from, what they need, and your suggested action.</p>

<p><strong>2. Calendar:</strong> List all meetings scheduled for today and the next 48 hours. Include time, attendee, and a one-line reminder of context where available.</p>

<p><strong>3. Revenue:</strong> Check my Stripe dashboard. Report on yesterday's revenue, any failed payments, and any notable changes versus the prior 7-day average. For it to reliably pull the data for you you need to give it read-only Stripe API access. Just ask Manus to set up a read-only Stripe API access safely. This is a restricted secret key with only the minimum permissions needed for your morning briefing, covering customers, payments/charges, refunds, and possibly subscriptions.</p>

<p><strong>4. Ads:</strong> Review my Meta Ads Manager. For each active campaign, report spend, ROAS, and CTR. Flag any ad with ROAS below 2x or CTR below 1% for review. Flag any ad with ROAS above 4x as a candidate to scale. Keep this section factual, I will make the final call.</p>

<p><strong>5. LinkedIn:</strong> Review my LinkedIn notifications. Summarize new connection requests, any replies to outreach messages, and comments on my posts that warrant a response. Flag anything that looks like a warm lead or a conversation worth continuing.</p>

<p><strong>6. Slack:</strong> Review my Slack messages. Flag any message that requires a decision or action from me. Skip status updates, FYIs, and anything that does not need my direct involvement.</p>

<p><strong>7. Industry and Competitor News:</strong> Search for news published in the last 24 hours covering <em><strong>insert your industry</strong></em> following competitors: <em><strong>insert your competitors</strong></em>. Summarize any meaningful product updates, funding announcements, or press coverage. Skip anything that is not genuinely relevant.</p>

<p><strong>Format:</strong> Deliver the briefing in the order above. Each section gets a one-line status summary at the top, followed by details. Keep the whole briefing under 600 words. Flag action items in bold. Close with one focus question based on everything reviewed, the single most important thing for me to make a decision on today.</p>

<p>Set it to run at 6 or 7 AM. Define what a useful briefing looks like for your specific business, meaning what metrics matter, what news is worth including, and what your priorities are this week.</p>

<figure>
  <img src="/blog/how-to-build-a-daily-briefing-system-with-ai/scheduled-tasks.png" alt="You can set up your brieding under Scheduled Tasks in Manus Settings or just ask the chat." />
  <figcaption>You can set up your brieding under Scheduled Tasks in Manus Settings or just ask the chat.</figcaption>
</figure>

<p>The first version won't be perfect. Tune it over two or three weeks until the signal-to-noise ratio feels right. The goal is a briefing you actually trust, one you can read in ten minutes and know you haven't missed anything that matters.</p>

<h3>The Real Value</h3>

<p>The time savings are real. Two to three hours a week is a conservative estimate. The bigger gain is harder to measure.</p>

<p>When you start the day knowing what happened internally, what's coming up, and what the world around your business is doing, you make better decisions. Your inbox stops setting the agenda. You stop finding out about your competitor's product launch from a customer.</p>

<p>Clarity and awareness compound over time. A founder who sees the market clearly, every morning, makes smarter moves than one who's always catching up.</p>

<p>Hustle means checking everything yourself, every morning, hoping you don't miss something. A briefing system means the information comes to you, filtered and prioritized, so you can spend the first hour of your day thinking.</p>

<p>One scales. The other burns you out.</p>

<hr />

<p><strong>If you want to build AI systems like this across your marketing and growth, that's exactly what </strong><a href="https://guideiq.ai" target="_blank" rel="noopener noreferrer"><strong>Guide IQ</strong></a><strong> does.</strong></p>
`;

export function PostBody() {
  return <BlogHtml html={html} />;
}
