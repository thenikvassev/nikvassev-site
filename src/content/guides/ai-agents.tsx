import { GuideReveal } from "@/components/GuideReveal";
import {
  agentBenefits,
  feedThemList,
  humanizerRules,
  jobs,
  jobsOverview,
  keepHumanMistakes,
  llmVsAgent,
  openingRest,
  setupSteps,
  tools,
} from "./ai-agents-data";

function ChartSlot({ label }: { label: string }) {
  return (
    <figure className="guide-chart">
      <p className="guide-chart-kicker">Doc chart</p>
      <p className="guide-chart-label">{`[CHART: ${label}]`}</p>
      <figcaption>Placeholder for the original guide chart. Binary not available in this repo.</figcaption>
    </figure>
  );
}

export function GuideBody() {
  return (
    <>
      <GuideReveal className="guide-opening">
        {openingRest.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="who-should-use-this">
          <p className="guide-kicker">01</p>
          <h2 id="who-should-use-this">Who should use this</h2>
          <p>
            You are building a real company. You want systems and some of your
            time back. Another clever prompt will not clear the inbox, the
            calendar, the site, or the pipeline.
          </p>
          <p>
            Start with three seats that pay for themselves: an EA for time, an
            SDR for revenue, and a Dev bot for shipping. Add Content or a
            specialist when the same work keeps stacking and you want a clean
            job for it. The roster later in this guide is a menu, not a day-one
            checklist.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="what-is-an-agent">
          <p className="guide-kicker">02</p>
          <h2 id="what-is-an-agent">What is a Grok Bot agent</h2>
          <p>
            Grok Bot is an AI teammate. It has a name, a title, a description, a
            memory, and a conversation that stays open. Name it something you
            will actually say. Title is the job. Description is the standing
            rules and the approval boundary.
          </p>
          <p>
            This is the teammate view. Desktop and phone. Named jobs, a live
            chat, routines.
          </p>
          <ChartSlot label="Teammate view on desktop and phone" />
          <p>
            Plugins sit on your Cursor account so every agent can use them.
            Sites with no plugin run in a browser on a cloud computer. You take
            that computer over and sign in. It never sees your password and can
            use most software tools the way an employee would.
          </p>
          <p>
            A General Helper has no job, so it keeps no useful memory. Never
            start with one General Helper. Cursor caps an account at 50 bots
            and group chats. You will hit a foggy helper long before 50.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="llm-vs-agent">
          <p className="guide-kicker">03</p>
          <h2 id="llm-vs-agent">How is an agent different from an LLM</h2>
          <p>
            An LLM answers a prompt. An agent has a job. That is the whole split.
          </p>
          <div className="guide-compare" role="table" aria-label="LLM versus AI agent">
            <div className="guide-compare-head" role="row">
              <span role="columnheader"> </span>
              <span role="columnheader">LLM</span>
              <span role="columnheader">AI agent</span>
            </div>
            {llmVsAgent.map((row) => (
              <div className="guide-compare-row" role="row" key={row.label}>
                <span className="guide-compare-label" role="rowheader">
                  {row.label}
                </span>
                <span role="cell" data-col="LLM">
                  {row.left}
                </span>
                <span role="cell" data-col="AI agent">
                  {row.right}
                </span>
              </div>
            ))}
          </div>
          <p>
            Look at Grok next to GPT and Fable. The model holds. It also routes
            to Claude for certain tasks.
          </p>
          <ChartSlot label="Grok next to GPT and Fable, quality holds" />
          <p>
            Then look at the cost. Grok 4.6 ranked first among models tested
            under a $5 workload budget. Intelligence per dollar is getting
            ridiculously high.
          </p>
          <ChartSlot label="Grok 4.6 intelligence per dollar under a $5 workload" />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="what-you-get">
          <p className="guide-kicker">04</p>
          <h2 id="what-you-get">What do you get from an agent</h2>
          <div className="guide-benefit-table" role="table" aria-label="What you get from an agent">
            <div className="guide-benefit-head" role="row">
              <span role="columnheader">Benefit</span>
              <span role="columnheader">What that looks like</span>
            </div>
            {agentBenefits.map((row) => (
              <div className="guide-benefit-row" role="row" key={row.benefit}>
                <span role="rowheader">{row.benefit}</span>
                <span role="cell">{row.looksLike}</span>
              </div>
            ))}
          </div>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="setup">
          <p className="guide-kicker">05</p>
          <h2 id="setup">How do you set this up</h2>
          <p className="guide-setup-rule">
            Setup before talk. First you give the bot a job, context, and
            access. Only then do you assign work.
          </p>
          <ol className="guide-steps">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">{String(index + 1).padStart(2, "0")}</p>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                {step.chart ? <ChartSlot label={step.chart} /> : null}
              </li>
            ))}
          </ol>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="jobs-first">
          <p className="guide-kicker">06</p>
          <h2 id="jobs-first">Which jobs should you name first</h2>
          <p>
            Name each bot so it feels personal. What I named mine is not the
            point. If a workflow hits you over and over, it can be a job:
            invoices, books, bug tickets, repeat build work. Start with three.
            Add the rest when the Chief of Staff starts holding two brains.
          </p>
          <aside className="guide-callout" aria-label="Start with three">
            <p className="guide-callout-label">Start with three</p>
            <ul>
              <li>
                <strong>EA / Chief of Staff</strong>
                <span>Time. Calendar, mail, meetings, follow-ups.</span>
              </li>
              <li>
                <strong>SDR / Outbound</strong>
                <span>Revenue. Lists, sequences, meetings.</span>
              </li>
              <li>
                <strong>Dev / Development</strong>
                <span>Shipping. GitHub and Vercel from a spoken brief.</span>
              </li>
            </ul>
          </aside>
          <div className="guide-overview" role="table" aria-label="Jobs at a glance">
            <div className="guide-overview-head" role="row">
              <span role="columnheader">Job</span>
              <span role="columnheader">What it owns</span>
              <span role="columnheader">You stay on</span>
            </div>
            {jobsOverview.map((row) => (
              <div className="guide-overview-row" role="row" key={row.name}>
                <span role="rowheader">{row.name}</span>
                <span role="cell" data-col="Owns">
                  {row.owns}
                </span>
                <span role="cell" data-col="You stay on">
                  {row.stayOn}
                </span>
              </div>
            ))}
          </div>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="jobs">
          <p className="guide-kicker">07</p>
          <h2 id="jobs">The full roster</h2>
          <p>
            For each job: what it owns, day-one access, what you stay on, who
            it is for, skills, routines, and tools.
          </p>
          <div className="guide-jobs">
            {jobs.map((job, index) => (
              <article className="guide-job" key={job.name}>
                <p className="guide-job-num">{String(index + 1).padStart(2, "0")}</p>
                <h3>{job.name}</h3>
                <dl>
                  <div>
                    <dt>Owns</dt>
                    <dd>{job.owns}</dd>
                  </div>
                  <div>
                    <dt>Day-one access</dt>
                    <dd>{job.dayOne}</dd>
                  </div>
                  <div>
                    <dt>You stay on</dt>
                    <dd>{job.stayOn}</dd>
                  </div>
                  <div>
                    <dt>Who this is for</dt>
                    <dd>{job.who}</dd>
                  </div>
                  <div>
                    <dt>Skills</dt>
                    <dd>{job.skills}</dd>
                  </div>
                  <div>
                    <dt>Routines</dt>
                    <dd>{job.routines}</dd>
                  </div>
                  <div>
                    <dt>Tools</dt>
                    <dd>{job.tools}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="when-to-add">
          <p className="guide-kicker">08</p>
          <h2 id="when-to-add">When do you add the rest</h2>
          <p>
            Add a bot when the same job keeps landing on the Chief of Staff and
            the context is getting muddy. Content, a specialist, influencers, or
            finance only when that loop is real.
          </p>
          <p>
            AI Visibility is later-stage. Wait until you have a stamped story to
            feed it, and until customers ask ChatGPT who to hire.
          </p>
          <p>
            Client Ops is useful the moment you have more than two customers
            and you are the only person who knows the state.
          </p>
          <p>
            Coach is optional. A standing place to think that does not also
            hold the inbox.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="ship-software">
          <p className="guide-kicker">09</p>
          <h2 id="ship-software">How do you ship software</h2>
          <p>
            If the job is code, do not let the bot write it on the Grok Bot
            computer. That burns the weekly Grok Bot bucket. A Cursor Cloud
            Agent does the repo work on Cursor credits.
          </p>
          <p>
            The bot stays the coordinator. It names the repo, the branch, and
            the full task. It launches the Cloud Agent. Then it watches and
            reports. Use your Cloud Agent default model unless you name one.
          </p>
          <p>
            Put this in the description of any bot that ships software. Day
            one, not after it has already burned a week of local edits.
          </p>
          <blockquote className="guide-rule-block">
            <p>
              Do not write or edit product code on your Grok Bot computer. For
              any coding, repo, PR, test, or CI work, launch a Cursor Cloud
              Agent on my connected repo. Pass the full task, repo, and branch.
              Then monitor that agent and report back. Use my Cloud Agent
              default model unless I name one.
            </p>
          </blockquote>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="tools">
          <p className="guide-kicker">10</p>
          <h2 id="tools">Which tools should you connect</h2>
          <p>
            This is the stack I actually run. Connect once on the Cursor
            account. Every bot can use those plugins. Assign per job. Give each
            bot only the access that job needs. Skip a tool you will not read.
          </p>
          <p>
            Sites with no plugin take over the Grok Bot computer. The founder
            signs in. Never paste API keys into chat.
          </p>
          <ul className="guide-tools">
            {tools.map((tool) => (
              <li key={tool.name} className="guide-tool">
                <p className="guide-tool-mark" aria-hidden>
                  {tool.name.slice(0, 1)}
                </p>
                <div>
                  <p className="guide-tool-name">{tool.name}</p>
                  <p className="guide-tool-note">{tool.note}</p>
                  <p className="guide-tool-links">
                    {tool.href ? (
                      <a href={tool.href} target="_blank" rel="noopener noreferrer">
                        {new URL(tool.href).hostname.replace(/^www\./, "")}
                      </a>
                    ) : (
                      <span>Cursor plugin</span>
                    )}
                    {tool.secondaryHref ? (
                      <>
                        {" · "}
                        <a
                          href={tool.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {tool.secondaryLabel}
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="feed-them">
          <p className="guide-kicker">11</p>
          <h2 id="feed-them">What do you feed them</h2>
          <p>
            A Brand DNA document. One file in Drive. Positioning, voice, claims
            you will stand behind, claims you will never make, who you write
            for.
          </p>
          <p>
            Point every bot at that file. Tell them to open it. An agent that
            writes without DNA invents a category.
          </p>
          <p>If you have no DNA yet, sit down for an hour and write:</p>
          <ul className="guide-plain-list">
            {feedThemList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Drop the file in Drive before you create the second bot. If you
            want a structured version, that is what{" "}
            <a href="https://guideiq.ai" target="_blank" rel="noopener noreferrer">
              Guide IQ
            </a>{" "}
            is for. Twelve founder inputs become the brief the agents read.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="repeats">
          <p className="guide-kicker">12</p>
          <h2 id="repeats">How do you train the repeats</h2>
          <p>
            Standing rules go in the description. Today&apos;s task goes in
            Talk. A job you do every weekday becomes a routine. Write the
            prompt as the job. Read tomorrow&apos;s calendar. Write a brief. Do
            not email anyone.
          </p>
          <p>
            Correct it when it is wrong. If the brief invents a meeting, fix
            the source. Memory keeps the role. A new chat on a named bot still
            knows the job. A General Helper starts over every time.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="keep-it-human">
          <p className="guide-kicker">13</p>
          <h2 id="keep-it-human">How do you keep it human</h2>
          <p>
            Bots augment you. They do not replace judgment. You stay on send,
            spend, and the story.
          </p>
          <p>Mistakes I have already paid for:</p>
          <ul className="guide-plain-list">
            {keepHumanMistakes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="humanizer">
          <p className="guide-kicker">14</p>
          <h2 id="humanizer">How you stop the writing from sounding like a model</h2>
          <p>
            A model predicts the next likely word. That is why the prose drifts
            toward phrases that fit every case and sound like nobody.
          </p>
          <p>
            I keep a skill for this. Humanizer. Every writing bot gets it.
            Content, the newsletter, LinkedIn, pitches. Scan the catalog first.
            Then rewrite each tell into the plain claim underneath. Do not
            freestyle-edit.
          </p>
          <p>Four rules, in this order.</p>
          <div className="guide-rules" role="table" aria-label="Humanizer rules">
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Rule</span>
              <span role="columnheader">What you do</span>
            </div>
            {humanizerRules.map((row) => (
              <div className="guide-rules-row" role="row" key={row.rule}>
                <span role="rowheader">{row.rule}</span>
                <span role="cell">{row.action}</span>
              </div>
            ))}
          </div>
          <p>
            A writing sample beats every style rule, including the em dash ban.
            If the person uses dashes, match that. My voice does not, so my
            drafts have zero.
          </p>
          <p>
            Two things never bend. Invent nothing. And unless the sample uses
            them, drop the dashes.
          </p>
          <p>
            Personality belongs on blogs, essays, and anything with a point of
            view. Leave it off legal, technical, and reference pages. Neutral is
            the human voice there.
          </p>
          <p>
            The catalog is 33 tells. Wikipedia&apos;s Signs of AI writing page,
            from WikiProject AI Cleanup, is where the list comes from. The ones
            that show up most in founder drafts: significance language
            (pivotal, testament, landscape), copula dodge (serves as, boasts,
            features), negative parallelisms (it is not X, it is Y), the rule of
            three, AI vocabulary (delve, crucial, tapestry), fake-candid openers
            (here is the thing), and a stack of short punchlines.
          </p>
          <p>
            The rest lives in the skill. Put the skill on the bot. Do not paste
            a Wikipedia page into the description.
          </p>
          <p>
            Then run the loop. Find every tell. Rewrite. Ask two questions: what
            still sounds like a model, and did I add a fact that was not there.
            Fix those. Scan for dashes. If one remains, you are not done.
          </p>
          <p>
            Do not gut a real receipt because it is specific. Specific is the
            human part. Mixed feelings stay. Uneven sentences stay. One short
            line is fine. A stack of them is a tell.
          </p>
          <p>
            Put this skill on the Content bot the day you create it. Put it on
            any bot that writes in public.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="teammates">
          <p className="guide-kicker">15</p>
          <h2 id="teammates">How does a teammate get in</h2>
          <p>
            They do not sit in your sidebar. Email the bot as the primary path
            for partners. Give the bot a receive-only alias. It replies as their
            assistant. Lists, research, CRM logging. Sends still wait for you.
          </p>
          <p>
            A Cursor Teams seat is for humans who need their own bots. They can
            share Drive and the CRM. They cannot inherit your Chief of Staff.
          </p>
          <p>
            Pick one path. An alias that is a ticket. A Slack channel the bot is
            in. Or their own Chief of Staff pointed at the same Drive. A public
            share link makes a copy on their account. It does not give them your
            computer or your history.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section guide-close" aria-labelledby="why-this-matters">
          <p className="guide-kicker">16</p>
          <h2 id="why-this-matters">Why this matters now</h2>
          <p>
            A founder used to be one person with one laptop. The constraint was
            hours. Named agents change that constraint to judgment. Calendar,
            pipeline, and shipping can run at the same time because three seats
            keep working after you close the lid.
          </p>
          <p>
            That is founder agentic capacity. Concurrent throughput without a
            matching payroll line. The SDR that found $250K in two weeks, the
            EA on calendar and mail, the Dev bot that ships from a spoken brief:
            those are what the setup buys.
          </p>
          <p>
            The work is naming the job, giving it context and access, then
            staying on send, spend, and the story.
          </p>
          <p>
            If you want the brief those agents should read, run the company
            through{" "}
            <a href="https://guideiq.ai" target="_blank" rel="noopener noreferrer">
              Guide IQ
            </a>{" "}
            and drop the DNA in Drive before you create the second bot.
          </p>
          <p>
            If you want the weekly version of how I run this, that is{" "}
            <a href="/newsletter">Systems Over Hustle</a>.
          </p>
        </section>
      </GuideReveal>
    </>
  );
}
