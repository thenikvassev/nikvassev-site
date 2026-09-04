import { BlogHtml } from "@/components/BlogHtml";

export const html = `<p>Most founders treat LinkedIn like a résumé with a comment section. They post when they get a chance. They write about their wins and about themselves. They share the company update nobody asked for and then they wonder why nobody engages and quietly decide LinkedIn doesn't work for them.</p>

<p>Here's what's actually getting you stuck.</p>

<hr />

<h3>You're posting for vanity, not value</h3>

<p>Most founders post to look credible. They announce launches, share press coverage, celebrate milestones. That content exists to make them feel good, not to help their reader.</p>

<p>Nobody opens LinkedIn hoping to read a founder's funding announcement. They open it because they're trying to solve a problem, avoid a mistake, or feel like they're not alone in building something hard.</p>

<p>The content that gets traction is diagnostic, not promotional. "Here's what we learned after getting it wrong three times" lands harder than "We just hit $500K ARR." One is about the reader. The other is about you.</p>

<p>Every post should pass this test: does the person reading this leave with something they can use, even if they never buy from me? If the answer is no, rewrite it.</p>

<h3>Your writing sounds like a press release</h3>

<p>Founders who've spent years in pitch meetings write the way they pitch. Confident. Clean. Airbrushed. Every update is positive. Every challenge was really an opportunity. Every pivot was always part of the plan.</p>

<p>That voice is optimized for investor rooms. It doesn't work on LinkedIn.</p>

<p>LinkedIn rewards specificity and honesty. "We almost ran out of money in March and here's what we actually did" outperforms "Resilience is the founder's greatest asset" every single time. One is a real story. The other is a fortune cookie.</p>

<p>People don't trust polished. They trust specific. The more granular and honest your post is the better, things like: the exact mistake, the exact number, the exact moment you realized something was wrong make it sound like a real person wrote it are much more effective.</p>

<figure>
  <img src="/blog/the-reason-your-linkedin-isn-t-growing-has-nothing-to-do-with-your-content/fast-company.png" alt="If your writing sounds like a robot wrote it you should just not post it." />
  <figcaption>If your writing sounds like a robot wrote it you should just not post it.</figcaption>
</figure>

<h3>You're posting, not building a point of view</h3>

<p>Most founders post about everything loosely connected to their business. One day it's AI tools. Next week it's hiring. Then a quote graphic. Then a product update. There's no through-line. The person reading your profile can't tell what you stand for in 15 seconds.</p>

<p>The founders who build real audiences on LinkedIn own a lane. They become the person who always writes about one thing in a way nobody else does. I am not saying to write only one topic that is niche but to have an angle that you own.</p>

<p>Your point of view should be something slightly controversial, or at least non-obvious. Not a take that will get you cancelled but a take that makes someone stop scrolling and think "wait, that's actually true." That friction is what drives shares.</p>

<p>If you stripped your name from your last 10 posts and handed them to someone, could they identify your angle? For most founders you cannot and that is the problem.</p>

<h3>Your posting cadence is random</h3>

<p>You post three times in a week when you're feeling inspired, then disappear for three weeks when you're heads-down building ( I am guilty of this too as it does take time and founder life is very busy ) The problem with this is that your audience never builds momentum and the algo is designed to reward consistency. One sharp post a week, every week, for six months, beats ten posts in a burst followed by silence.</p>

<p>The founders who've cracked LinkedIn don't sit down to write when they feel like it. They run a system. They capture ideas throughout the week from customer conversations, things that surprised them, decisions they had to make. The writing part takes 30 minutes. The thinking happened in real time, before they ever opened a text editor.</p>

<p>One way to make this easier is to create a Claude skill by giving it all your past posts to take your individual style, messaging and cadence so you can start with a good first draft instead of a blank page.</p>

<p>If you can't sustain a pace, shrink it until you can. One post a week is better than a sprint and a burnout.</p>

<h3>You're not directing the reader anywhere</h3>

<p>Most LinkedIn posts end nowhere. No call to action. No next step. No invitation to go deeper.</p>

<p>The goal of each post isn't just to get likes and comments. It's to move the right people one step closer to trusting you enough to work with you, read your newsletter, try your product.</p>

<p>That doesn't happen by accident it happens through repetition.</p>

<p>You don't need a hard sell at the end of every post. But you do need a direction. "If this resonated, I wrote more on this in my newsletter" is a sentence. It takes four seconds to write. It moves people.</p>

<p>The founders building real pipelines from LinkedIn are thinking about each post as part of a sequence not a standalone moment. The post earns attention and the direction earns the relationship and the potential lead.</p>

<hr />

<p>Start with the simplest possible fix: pick one angle, one audience, one problem you understand better than most. Write about that for 90 days without deviation. Don't measure likes in week two. Measure whether the right people are starting to notice.</p>

<p>Guide IQ builds your Brand DNA so every post you write ( on LinkedIn or anywhere else ) comes from your unique voice with clear positioning.</p>

<p><a href="http://guideiq.ai/" target="_blank" rel="noopener noreferrer">guideiq.ai</a></p>
`;

export function PostBody() {
  return <BlogHtml html={html} />;
}
