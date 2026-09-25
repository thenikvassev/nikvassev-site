import type { ReactNode } from "react";
import { GuideFigure } from "@/components/GuideFigure";
import { GuideReveal } from "@/components/GuideReveal";
import {
  anatomy,
  bashoRules,
  bashoSkill,
  bashoVsBlast,
  founderApprovals,
  humanBashoSteps,
  intentLane,
  openingRest,
  owns,
  routines,
  setupSteps,
  skills,
  volumeLane,
  type FieldRow,
} from "./ai-sales-agent-data";

const WORKFORCE_GUIDE = "/resources/how-to-build-your-ai-agent-workforce";
const BOOKING_LINK = "https://cal.com/nik-vassev/30min";

function GuideLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function FieldList({ rows }: { rows: FieldRow[] }) {
  return (
    <dl>
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function PasteBlockView({ title, body }: { title: string; body: string }) {
  return (
    <article className="guide-skill">
      <h3>{title}</h3>
      <pre className="guide-paste">
        <code>{body}</code>
      </pre>
    </article>
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
        <section className="guide-section" aria-labelledby="agent-vs-llm">
          <p className="guide-kicker">01</p>
          <h2 id="agent-vs-llm">Agent vs LLM</h2>
          <p>
            A chat tab answers and forgets and requires you. A sales agent has
            a goal, standing routines in its profile, logins on a shared
            computer, and plugins pointed at real systems.
          </p>
          <p>
            It can research, write CRM records, draft sequences, suggest reply
            triage, and prepare booking links while you are offline. It still
            waits when the rule says wait.
          </p>
          <p>
            The difference shows up in the handoff. A prompt dumps text into
            your clipboard. A sales agent moves a prospect through a path:
            signal, research, CRM, draft, send, book meeting, log. If any step
            is missing, you do not have an employee. You have an AI toy with a
            sales costume.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="what-it-owns">
          <p className="guide-kicker">02</p>
          <h2 id="what-it-owns">What does the AI sales agent own?</h2>
          <p>
            Write a one-page job card before you connect a single tool. Paste
            it into the agent profile so standing rules live where the agent
            always sees them.
          </p>
          <article className="guide-job">
            <p className="guide-job-num">Job card</p>
            <h3>SDR / Sales operator</h3>
            <dl>
              <div>
                <dt>Job title</dt>
                <dd>SDR / Sales operator (or a name you choose)</dd>
              </div>
              <div>
                <dt>Path</dt>
                <dd>
                  signal → research → CRM → draft → send → book meeting → log
                </dd>
              </div>
              <div>
                <dt>Owns</dt>
                <dd>
                  <ul className="guide-tick-list">
                    {owns.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt>Does not own</dt>
                <dd>
                  Pick a narrow job. Leave newsletter, PR/media pitches, GEO/AI
                  visibility delivery, and site/web shipping to other agents if
                  you run a wider Grok Bot workforce. Your sales agent should
                  not also write the company newsletter or ship homepage copy.
                </dd>
              </div>
              <div>
                <dt>Approval line</dt>
                <dd>
                  You approve sends. The agent drafts and waits when the rule
                  says wait.
                </dd>
              </div>
              <div>
                <dt>Conflicts</dt>
                <dd>
                  CRM wins conflicts. If Smartlead, Gmail, and Breakcold
                  disagree, Breakcold (or your named system of record) is
                  truth.
                </dd>
              </div>
            </dl>
          </article>
          <p>
            On my side I run the same pattern: one sales agent, one job card,
            founder gate on first send and caps. The transferable piece is the
            card, not the brand names.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="two-lanes">
          <p className="guide-kicker">03</p>
          <h2 id="two-lanes">The 2 approaches to cold prospecting</h2>
          <p>
            Run two lanes on purpose and measure them apart. Mixing them into
            one queue hides which motion is earning meetings.
          </p>
          <div className="guide-jobs">
            <article className="guide-job">
              <p className="guide-job-num">Lane 01</p>
              <h3>Volume cold engine (Smartlead mailer)</h3>
              <FieldList rows={volumeLane} />
            </article>
            <article className="guide-job">
              <p className="guide-job-num">Lane 02</p>
              <h3>Intent 1:1 lane</h3>
              <FieldList rows={intentLane} />
            </article>
          </div>
          <p>
            Keep prospecting rules written on the job card: geography,
            language, industries, and who to skip (for example, direct
            competitors). Wide is fine when the KEEP bar is real.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="basho">
          <p className="guide-kicker">04</p>
          <h2 id="basho">How Basho emails work</h2>
          <p>
            Basho is the access method for short, research-led cold notes. Jeff
            Hoffman popularized the approach; the name points at the poet
            Matsuo Bashō (say more with less), not at a letter acronym. Use the
            anatomy below. Do not invent expansions for the letters.
          </p>
          <GuideFigure
            src="/photos/guides/ai-sales-agent/basho-anatomy.jpg"
            alt="The anatomy of a Basho email: hyper-personalized subject, the hook, the value hook, and a soft CTA, plus a comparison with traditional cold email. Under 90 words."
            width={1100}
            height={618}
            caption="The anatomy of a Basho email. Under 90 words. Precision over volume."
          />
          <h3>The anatomy (under 90 words, precision over volume)</h3>
          <div className="guide-rules" role="table" aria-label="Basho anatomy">
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Part</span>
              <span role="columnheader">What it does</span>
            </div>
            {anatomy.map((row) => (
              <div className="guide-rules-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell">{row.value}</span>
              </div>
            ))}
          </div>
          <h3>How Basho differs from a traditional cold blast</h3>
          <div
            className="guide-compare"
            role="table"
            aria-label="Basho email versus traditional cold email"
          >
            <div className="guide-compare-head" role="row">
              <span role="columnheader"> </span>
              <span role="columnheader">Basho email</span>
              <span role="columnheader">Traditional cold email</span>
            </div>
            {bashoVsBlast.map((row) => (
              <div className="guide-compare-row" role="row" key={row.label}>
                <span className="guide-compare-label" role="rowheader">
                  {row.label}
                </span>
                <span role="cell" data-col="Basho email">
                  {row.left}
                </span>
                <span role="cell" data-col="Traditional cold email">
                  {row.right}
                </span>
              </div>
            ))}
          </div>
          <p>
            The volume lane can still hit ~100 first touches a day. Each note
            still has to pass the Basho test: could this exact email credibly
            go to anyone else? If yes, rewrite it.
          </p>
          <h3>Hard rules when you (or the agent) write Basho</h3>
          <ul className="guide-tick-list">
            {bashoRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <h3>
            Paste this into Grok Bot as a skill (or into Talk when you need a
            one-off rewrite)
          </h3>
          <pre className="guide-paste">
            <code>{bashoSkill}</code>
          </pre>
          <h3>How a human writes with the same framework</h3>
          <ol className="guide-tick-list">
            {humanBashoSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="skills">
          <p className="guide-kicker">05</p>
          <h2 id="skills">Which skills do you install?</h2>
          <p>
            Skills in Grok Bot should be installable recipes you can paste, not
            private IDs from someone else’s account. Create each skill with a
            clear name, a one-line purpose, and a full body. Point the agent
            profile at them so Talk can call them by name.
          </p>
          <p>
            The Basho skill above is skill 0 for access copy. Install these
            five next.
          </p>
          <div className="guide-skills">
            {skills.map((skill) => (
              <PasteBlockView
                key={skill.title}
                title={skill.title}
                body={skill.body}
              />
            ))}
          </div>
          <p>
            Optional later: a discovery skill for live meetings (Challenger).
            Keep cold access on Basho so the methods stay separate.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="routines">
          <p className="guide-kicker">06</p>
          <h2 id="routines">Which routines do you schedule?</h2>
          <p>
            Routines are jobs on a clock, written as outcomes. Schedule them
            after you have watched a clean draft week. Adjust times to your
            timezone (examples below use America/Cancun weekday mornings).
          </p>
          <p>
            Paste each block when you create a Grok Bot routine (name +
            schedule hint + full prompt).
          </p>
          <div className="guide-skills">
            {routines.map((routine) => (
              <PasteBlockView
                key={routine.title}
                title={routine.title}
                body={routine.body}
              />
            ))}
          </div>
          <p>
            Be honest about friction. LinkedIn or WhatsApp reply watch may be
            blocked until browser sessions are stable. Let email lanes carry
            the core motion until those connectors are reliable.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="tools">
          <p className="guide-kicker">07</p>
          <h2 id="tools">AI Sales Agent Tools</h2>
          <p>
            Give every tool one job so the agent cannot hide truth in the wrong
            app. Connect only what you will actually use this month.
          </p>
          <GuideFigure
            src="/photos/guides/ai-sales-agent/ai-sales-agent-tools.jpg"
            alt="AI Sales Agent Tools. Connected tools around a Sales Agent hub: Breakcold CRM, Clay, LinkedIn, Smartlead, WhatsApp, TrulyInbox, and Email. You still approve sends."
            width={1100}
            height={618}
            caption="AI Sales Agent Tools. Connected tools. You still approve sends."
          />
          <ul className="guide-tools">
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                B
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://www.breakcold.com/">Breakcold</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> AI-native sales CRM for people
                  and agents (contacts, pipelines, tags, multichannel inbox).
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> One system of record so{" "}
                  <GuideLink href="https://www.smartlead.ai/">Smartlead</GuideLink>,{" "}
                  <GuideLink href="https://mail.google.com/">Gmail</GuideLink>,
                  and chat threads cannot disagree forever.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Import only after KEEP / THIN
                  / SKIP; same-day notes on replies, books, stage changes; CRM
                  wins conflicts.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                S
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://www.smartlead.ai/">Smartlead</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> Cold email sequencing and mailbox
                  infrastructure for outbound.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> The volume mailer that can
                  sustain weekday first touches (on my stack, about 100 unique
                  first touches when the factory is healthy).
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Load Basho-ready KEEP after
                  approval; warmup and send caps stay founder-gated; positive
                  replies move into{" "}
                  <GuideLink href="https://www.breakcold.com/">Breakcold</GuideLink>{" "}
                  the same day.{" "}
                  <GuideLink href="https://www.smartlead.ai/">Smartlead</GuideLink>{" "}
                  is not the CRM.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                T
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://www.trulyinbox.com/">TrulyInbox</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> Email warmup and inbox-placement
                  infrastructure.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> Domains and mailboxes need
                  reputation before you scale cold volume.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Keep warmup separate from
                  campaign copy decisions; the agent reports health, you still
                  own domain and mailbox changes.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                G
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://mail.google.com/">Gmail</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> Your real inbox for founder-thread
                  and intent work. Google Workspace if that is your stack.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> Intent 1:1 notes should not
                  ride the cold factory.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Draft KEEP intent notes,
                  Day-2 / Day-5 follow-ups, and HOLD until you pick who sends.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                C
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://www.clay.com/">Clay</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> List building, enrichment, and
                  research workflows across many data sources.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> Cleaner ICP rows before CRM
                  and before send paths.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Search and enrich toward{" "}
                  <GuideLink href="https://www.breakcold.com/">Breakcold</GuideLink>{" "}
                  and the right lane; until Clay is connected, use your interim
                  enrich path and still enforce KEEP / THIN / SKIP.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                L
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://www.linkedin.com/">LinkedIn</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> Professional network for signal
                  research and light outreach.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> Hires, posts, and role
                  changes show up here before they hit a database.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Research triggers; optional
                  light outreach when the Grok Bot computer session is signed
                  in and stable. Same approval rules as email.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                W
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://www.whatsapp.com/">WhatsApp</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> Messaging for high-trust or warm
                  follow-up when that channel fits your ICP.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> Some buyers reply faster here
                  than in email.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Only when the session is
                  live; same founder gate; log CRM the same day.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                C
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href="https://cal.com/">Cal.com</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> Open scheduling links for
                  meetings.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> Booking should be boring
                  after interest.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> Default your preferred length
                  (I use a{" "}
                  <GuideLink href={BOOKING_LINK}>30-minute link</GuideLink>) in
                  replies after interest. Do not paste the booking link into
                  cold first touches.
                </p>
              </div>
            </li>
            <li className="guide-tool">
              <p className="guide-tool-mark" aria-hidden>
                G
              </p>
              <div>
                <p className="guide-tool-name">
                  <GuideLink href={WORKFORCE_GUIDE}>Grok Bot computer</GuideLink>
                </p>
                <p className="guide-tool-note">
                  <strong>What it is.</strong> The shared desktop that comes
                  with the agent.
                </p>
                <p className="guide-tool-note">
                  <strong>Why you get it.</strong> Browser logins for{" "}
                  <GuideLink href="https://www.clay.com/">Clay</GuideLink>,{" "}
                  <GuideLink href="https://www.linkedin.com/">LinkedIn</GuideLink>,
                  ChatGPT research checks, and anything without a clean plugin.
                </p>
                <p className="guide-tool-note">
                  <strong>How you use it.</strong> You take over once, sign in,
                  and leave the session. Passwords never go in chat. Product
                  home: the{" "}
                  <GuideLink href={WORKFORCE_GUIDE}>
                    Grok Bot workforce guide
                  </GuideLink>.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="setup">
          <p className="guide-kicker">08</p>
          <h2 id="setup">How do you set this up on Grok Bot?</h2>
          <p>
            If you need the full roster and plan choices, use the wider{" "}
            <GuideLink href={WORKFORCE_GUIDE}>Grok Bot workforce guide</GuideLink>.
            For this sales agent alone, setup is short.
          </p>
          <ol className="guide-steps">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) =>
                  step.title === "Keep memory about sales" ? (
                    <p key={paragraph.slice(0, 40)}>
                      This agent’s job card stays narrow. Soft-link the{" "}
                      <GuideLink href={WORKFORCE_GUIDE}>
                        wider workforce guide
                      </GuideLink>{" "}
                      for Chief of Staff and other agents.
                    </p>
                  ) : (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ),
                )}
              </li>
            ))}
          </ol>
          <p className="guide-setup-rule">
            Profile description = standing rules. Talk = today’s task. Computer
            = logins. Mix those three up and the agent starts improvising.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="what-you-approve">
          <p className="guide-kicker">09</p>
          <h2 id="what-you-approve">What does the founder still approve?</h2>
          <p>You stay on judgment that can burn trust or domains.</p>
          <ul className="guide-tick-list">
            {founderApprovals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Drafting is cheap. Sending is a decision. A queue of KEEP drafts on
            HOLD means the agent is waiting on your gate, which is correct.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section guide-close" aria-labelledby="conclusion">
          <p className="guide-kicker">10</p>
          <h2 id="conclusion">What you walk away with</h2>
          <p>
            An AI sales agent is useful when it owns a narrow path and you
            still own the gate. Be strategic with how you approach outbound
            sales and be ready with a strong pitch when your calendar fills up.
          </p>
          <p>
            Relative to hiring a human SDR, this stack cost is nearly free:
            Grok Bot plus a lean tool set versus salary, ramp, and management
            overhead.
          </p>
          <p>
            You still pay with attention on first sends and caps. That
            attention is the point and the personalization is the key to stand
            out from the noise.
          </p>
          <p>If you want pipeline from outbound, this is the setup.</p>
          <p>
            If you want the brief this agent should read, run the company
            through <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink>{" "}
            and drop the DNA in Drive before you create the second bot. If you
            want the weekly version of how I run this, that is{" "}
            <GuideLink href="/newsletter">Systems Over Hustle</GuideLink>.
          </p>
        </section>
      </GuideReveal>
    </>
  );
}
