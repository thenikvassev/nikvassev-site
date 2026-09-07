import type { ReactNode } from "react";
import { GuideFigure } from "@/components/GuideFigure";
import { GuideReveal } from "@/components/GuideReveal";
import {
  aiInstructions,
  aiSetups,
  channelRows,
  claudeSteps,
  deliverables,
  fiveDecisions,
  gptSteps,
  grokSteps,
  howToUse,
  messagingCore,
  openingRest,
  proofRanks,
  symptomFixes,
  tests,
  withoutWith,
  writeNowChannels,
  writeNowFoundation,
  writeNowLoad,
  writeNowMarket,
  writeNowMessaging,
  writeNowProof,
  writeNowTests,
  writeNowVoice,
} from "./build-an-iconic-brand-data";

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

function WriteNow({ items }: { items: string[] }) {
  return (
    <>
      <h3>Write this now</h3>
      <ul className="guide-plain-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function Gate({ owns, pass }: { owns: string; pass: string }) {
  return (
    <div className="guide-rules" role="table" aria-label="Section gate">
      <div className="guide-rules-head" role="row">
        <span role="columnheader">Gate</span>
        <span role="columnheader">Standard</span>
      </div>
      <div className="guide-rules-row" role="row">
        <span role="rowheader">Owns</span>
        <span role="cell">{owns}</span>
      </div>
      <div className="guide-rules-row" role="row">
        <span role="rowheader">Pass if</span>
        <span role="cell">{pass}</span>
      </div>
    </div>
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
        <section className="guide-section" aria-labelledby="why-brand-2026">
          <p className="guide-kicker">01</p>
          <h2 id="why-brand-2026">Why brand is the growth engine in 2026</h2>
          <p>
            Threerooms argues that in 2026 brand will outperform performance
            marketing as the more reliable growth driver, and that strong brands
            reduce acquisition friction, lift retention, and win attention when
            AI floods the feed with competent-looking tactics. Their read of the
            old split is useful: for a decade marketers treated brand as
            emotional and hard to measure, and performance as immediate and
            trackable. That divide is collapsing. Brand equity shows up in
            commercial KPIs when you treat coherence and emotional connection as
            operating work rather than a mood board.
          </p>
          <p>
            I keep seeing the cheap-tactics version of this play out in founder
            feeds. People open ChatGPT, generate the same-looking diagrams and
            posts that scream ChatGPT, and treat that output as branding. When a
            post feels inauthentic, out of brand, or out of scope, and the
            audience clocks the AI, they fully check out. Brands are burning
            trust they already built by leaning on the model as if it could
            replace brand and marketing thinking. AI can help as a tool to
            improve performance, and you leave the positioning, voice, and proof
            decisions with the humans who own the company, because AI is a
            prediction machine that averages, and average does not sell. Brand
            has to be iconic.
          </p>
          <p>
            Threerooms points to named cases as evidence of the shift. Airbnb
            cut heavy performance spend and reinvested in brand and PR; the
            article&apos;s takeaway is that when people search for your brand on
            purpose, you stop paying for every click. Kraft Heinz replaced
            fragmented regional creative with a unified Brand Growth System
            anchored on one global platform, &quot;It Has to be Heinz,&quot; and
            Threerooms reports master-brand growth with efficiency from
            consistency rather than volume. Liquid Death built a distinctive
            voice in commoditized water and, per that article, reached a $1.4
            billion valuation on emotional resonance rather than a better
            molecule. Mastercard built sonic DNA for payments people cannot see,
            and Threerooms cites a large trust lift among people exposed to the
            cue. Mattel&apos;s Barbie work under Lisa McKnight treated the brand
            as a commercial franchise, with the article linking that
            repositioning to box-office scale and double-digit sales growth.
            Those are Threerooms&apos; attributions. Use them as pattern
            recognition rather than your own receipts.
          </p>
          <p>
            Totem describes a parallel shift in fundamentals: archetypal
            identity over vague purpose statements, personality over feature
            positioning, and clarity over tactics. Their point is blunt.
            Marketing tools and channels got democratized, and AI flattens
            execution differences in months. What stays scarce is clarity about
            who you are, who you serve, and what you stand for. Totem also notes
            that AI search rewards clarity, citability, and original thinking
            from credible voices. Polished generic copy does not win that
            surface.
          </p>
          <p>
            The Unmarketing Agency frames brand strategy as the operating
            system under the logo: who you are, who it is for, why you instead
            of the alternative, and how you prove it at every touchpoint. They
            stress that AI made surface execution cheap, so a position rooted in
            real market understanding is what remains scarce, and that answer
            engines treat consistency across independent sources as a
            reliability signal. monday.com&apos;s brand marketing playbook puts
            the same idea in commercial language: brand builds preference before
            the sales conversation, and brand plus performance work best
            together. Their four C&apos;s are a clean scorecard if you want one:
            Clarity, Consistency, Credibility, and Competitiveness. Awesomic
            lands the practical cut: purpose, values, positioning, identity, and
            architecture on one page, one archetype fully owned, and AI used for
            volume with humans guarding voice.
          </p>
          <GuideFigure
            src="/guides/brand-strategy/brand-four-cs.png"
            alt="monday.com brand scorecard with four cards: Clarity, Consistency, Credibility, and Competitiveness."
            width={1200}
            height={675}
            caption="monday.com's four C's as a scorecard: Clarity, Consistency, Credibility, Competitiveness."
          />
          <p>
            Put those sources together and the founder job in 2026 is clear.
            Lock a position humans can feel and AI can cite. Keep expression
            coherent across channels and answer engines. Measure brand with
            commercial signals rather than vanity. Stamp the decisions so every
            writer and every agent starts from the same file.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="five-decisions">
          <p className="guide-kicker">02</p>
          <h2 id="five-decisions">Five decisions to lock first</h2>
          <p>
            Before you fill worksheets, lock five decisions. Everything in Brand
            DNA is a capture of these answers for humans and for AI.
          </p>
          <GuideFigure
            src="/guides/brand-strategy/brand-five-decisions.png"
            alt="Five decisions to lock first: purpose and ambition, positioning, archetype and personality, verbal and visual identity, governance and measurement."
            width={1200}
            height={675}
            caption="Five decisions Brand DNA has to capture before you polish adjectives."
          />
          <div
            className="guide-rules"
            role="table"
            aria-label="Five decisions to lock first"
          >
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Decision</span>
              <span role="columnheader">What you are actually choosing</span>
            </div>
            {fiveDecisions.map((row) => (
              <div className="guide-rules-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell">{row.value}</span>
              </div>
            ))}
          </div>
          <p>
            Write one honest line for each. If leadership cannot agree on
            positioning, stop and settle that fight before you polish voice
            adjectives. Brand DNA captures those decisions so marketing, sales,
            freelancers, and agents stop inventing a second company in Slack.
          </p>
          <p>
            If you want those founder answers structured into brand and
            go-to-market strategy without a six-week workshop, that is what{" "}
            <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink> is for. You
            answer the questions, Guide IQ builds the brand and GTM brief, and
            you deploy that document to your agents so they execute from one
            locked file.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="what-brand-dna-is">
          <p className="guide-kicker">03</p>
          <h2 id="what-brand-dna-is">What Brand DNA is</h2>
          <p>
            Brand DNA is the strategic brief for your company: foundation,
            market, voice, proof, messaging, and channel rules in one place. A
            person or an AI can write on-brand work from it without guessing.
            Treat it like the brief a senior marketer would demand on day one.
            Company basics. Who you serve. How you sound. What proof you can
            use. What you say to each persona. How each channel should feel.
            Then AI instructions that point at that file as the single source of
            truth.
          </p>
          <GuideFigure
            src="/guides/brand-strategy/brand-dna-stack.png"
            alt="The Brand DNA stack from foundation through target market, personality and voice, proof hierarchy, messaging, and channel guidelines."
            width={1200}
            height={675}
            caption="The Brand DNA stack, from foundation up through channel rules."
          />
          <p>
            This guide teaches the decisions. Your Doc captures the answers.
            When a section feels thin, strengthen the inputs before you tweak
            the system prompt. Most bad AI output is a thin DNA problem. The
            stamped file is also how personal brand work on nikvassev.com and
            company brand work stay separate when they need to, and aligned when
            they should share proof and posture.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="why-dna-matters">
          <p className="guide-kicker">04</p>
          <h2 id="why-dna-matters">Why Brand DNA matters once AI is writing</h2>
          <p>
            AI is fast. Without a stamped story, that speed multiplies
            inconsistency. Five drafts in an afternoon can mean five versions of
            your category, your customer, and your claims. Totem&apos;s clarity
            point lands hardest here: models reward a defined identity, and they
            invent one when you leave a blank.
          </p>
          <p>
            I see this bottleneck inside real teams. I work with a CEO at a
            publicly traded company whose roster includes a marketing manager, a
            social media person, a designer, an ad buyer, and a PR agency.
            Before Brand DNA, each of them was guessing brand voice and target
            market on their own. Because the company is public, sensitive claims
            need CEO approval, so the CEO became the bottleneck for the whole
            brand. They implemented Brand DNA and built a Brand Brain Custom GPT
            with a shared link the whole team uses. Now everybody sings from the
            same songbook, and marketing stays aligned and on brand without
            every line waiting in the CEO&apos;s queue.
          </p>
          <GuideFigure
            src="/guides/brand-strategy/brand-with-without-dna.png"
            alt="Side-by-side comparison of working without Brand DNA versus with Brand DNA."
            width={1200}
            height={675}
            caption="Without Brand DNA versus with Brand DNA."
          />
          <div
            className="guide-compare"
            role="table"
            aria-label="Without Brand DNA versus with Brand DNA"
          >
            <div className="guide-compare-head" role="row">
              <span role="columnheader"> </span>
              <span role="columnheader">Without Brand DNA</span>
              <span role="columnheader">With Brand DNA</span>
            </div>
            {withoutWith.map((row) => (
              <div className="guide-compare-row" role="row" key={row.label}>
                <span className="guide-compare-label" role="rowheader">
                  {row.label}
                </span>
                <span role="cell" data-col="Without Brand DNA">
                  {row.left}
                </span>
                <span role="cell" data-col="With Brand DNA">
                  {row.right}
                </span>
              </div>
            ))}
          </div>
          <p>
            Consistency is the baseline. Precision is next: the right persona,
            the right proof, the right channel shape. Credibility follows when
            claims match receipts you can defend. Speed shows up when the AI
            stops asking who you are. Scale shows up when more people and bots
            can write without inventing a second brand.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="walk-away-with">
          <p className="guide-kicker">05</p>
          <h2 id="walk-away-with">What you walk away with</h2>
          <div
            className="guide-rules"
            role="table"
            aria-label="What you walk away with"
          >
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Deliverable</span>
              <span role="columnheader">What it does</span>
            </div>
            {deliverables.map((row) => (
              <div className="guide-rules-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell">{row.value}</span>
              </div>
            ))}
          </div>
          <p>
            The ongoing win is fewer rewrites and fewer off-brand publishes.
            Measure your own week against that once the file is live.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="how-to-use">
          <p className="guide-kicker">06</p>
          <h2 id="how-to-use">How to use this guide</h2>
          <p>
            Work section by section. Write answers in your Doc as you go. Do not
            wait for perfect language on pass one. Stamp a usable version, load
            it into AI, run the tests, then strengthen the weak sections.
          </p>
          <ol className="guide-steps">
            {howToUse.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
          <p className="guide-setup-rule">
            Early-stage companies should pick a maximum of three channels to
            start. Build a real base of readers or leads there before you try to
            sound native everywhere.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="company-foundation">
          <p className="guide-kicker">07</p>
          <h2 id="company-foundation">Company foundation</h2>
          <Gate
            owns="name, category, offer, who pays, overview, UVP, competitive frame, mission, vision, values, competitive field"
            pass="a stranger can repeat what you sell and who pays without a caveats paragraph"
          />
          <p>
            This is the spine. Everything else hangs off it. If this section is
            vague, personas and voice stay vague too.
          </p>
          <h3>Company basics</h3>
          <p>
            Name, category, what you sell, who pays, how you get paid. Keep it
            short enough that a stranger could repeat it. If you need a
            paragraph of caveats to explain the product, the overview is not
            ready.
          </p>
          <h3>Company overview</h3>
          <p>
            Write the discovery answers in plain language first. Ask AI to help
            only after you have raw answers. Use it to tighten language. Do not
            let it invent a prettier company.
          </p>
          <h3>Messaging core</h3>
          <div
            className="guide-rules"
            role="table"
            aria-label="Messaging core"
          >
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Piece</span>
              <span role="columnheader">Job</span>
            </div>
            {messagingCore.map((row) => (
              <div className="guide-rules-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell">{row.value}</span>
              </div>
            ))}
          </div>
          <p>Your UVP is the line a buyer can use to explain the purchase to someone else.</p>
          <h3>Mission, vision, and values</h3>
          <p>
            Mission is the work you do. Vision is the future you are building
            toward. Values are the rules that settle hard calls. Keep them
            usable. If a value cannot guide a hire, a cancel, or a public post,
            rewrite it.
          </p>
          <h3>Competitive field</h3>
          <p>
            Name the real alternatives: direct competitors, status quo, and DIY.
            For each, note what they own in the buyer&apos;s head and what you
            own. Competitive positioning later will use this. State what you
            are and what you are not in short, confident lines.
          </p>
          <WriteNow items={writeNowFoundation} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="target-market">
          <p className="guide-kicker">08</p>
          <h2 id="target-market">Target market</h2>
          <Gate
            owns="primary buyer, personas, purchase triggers, emotional drivers"
            pass='you can name one primary buyer and at least one purchase moment without saying "everyone"'
          />
          <p>
            A brand without a named buyer becomes content for everyone and
            conversion for no one.
          </p>
          <h3>Ideal buyer</h3>
          <p>
            One primary buyer first. Role, company stage, budget reality, what
            they are trying to achieve this quarter. Demo alone is thin. Add the
            psychographic: what they believe, what they fear, what they are
            tired of buying.
          </p>
          <h3>Personas</h3>
          <p>
            Up to five is plenty. Most early companies need two or three. For
            each persona capture job and context, goals, frustrations, beliefs
            about the category, purchase moment (what triggers a search or a
            call), and core emotional driver (what they want to feel true after
            they buy).
          </p>
          <p>
            If two personas share the same frustrations and the same trigger,
            merge them. Distinct emotional drivers are the reason messaging
            splits later.
          </p>
          <h3>Core emotional insight</h3>
          <p>
            One sentence that names the feeling under the purchase. The human
            reason they care, separate from the feature list. Every
            persona-specific line should point back to that insight without
            sounding soft or vague. Threerooms&apos; case for emotional
            differentiation belongs here: algorithms can copy format; they
            cannot copy a feeling you actually own.
          </p>
          <WriteNow items={writeNowMarket} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="personality-voice">
          <p className="guide-kicker">09</p>
          <h2 id="personality-voice">Personality and voice</h2>
          <Gate
            owns="archetype, voice attributes, tone shifts, samples, banned language"
            pass="you have real writing samples plus a do/don’t for each voice attribute"
          />
          <p>
            Personality is who the brand is. Voice is how it talks. Tone is how
            voice flexes by situation.
          </p>
          <h3>Archetype</h3>
          <p>
            Totem&apos;s 2026 shift is useful here: stop collecting vague
            purpose lines and pick one archetypal identity you will actually
            own. Magician, Sage, Creator, Ruler, Caregiver, and the rest are
            labels. The useful part is the behavior: what that archetype would
            say, refuse, and emphasize. Write three lines of behavior rather
            than a mythology essay. Awesomic makes the same operator point with
            Jung&apos;s twelve archetypes. Pick one core. A brand that tries to
            be heroic, caring, and rebellious at once reads as having no
            personality.
          </p>
          <h3>Voice attributes</h3>
          <p>
            Three to five adjectives with a one-line definition each. Calm
            confidence. Specific. Direct. Whatever is true for you. Pair each
            with a short do and don&apos;t so AI has an edge to follow.
          </p>
          <h3>Tone variations</h3>
          <p>
            Same voice, different rooms. A support email is warmer than a
            homepage. A LinkedIn post can carry more point of view than a press
            release. Write the shift in one sentence per channel family so the
            AI does not flatten everything into the same cadence.
          </p>
          <h3>Voice examples</h3>
          <p>
            Paste three to five real paragraphs that already sound like you: a
            founder note, a sales email that worked, a bio you would stand
            behind. These beat any adjective list. Point AI at the samples.
          </p>
          <h3>Voice comparison</h3>
          <p>
            Show a weak line and a strong rewrite for the same idea. Generic
            versus stamped. Soft claim versus receipt. This trains the model
            faster than another adjective.
          </p>
          <h3>Banned words and phrases</h3>
          <p>
            List the words that make you sound like every other startup, plus
            the phrases that violate your posture. Add a one-line why next to
            each. When AI slips, expand this list. Fix the DNA rather than only
            scolding the draft.
          </p>
          <WriteNow items={writeNowVoice} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="proof-hierarchy">
          <p className="guide-kicker">10</p>
          <h2 id="proof-hierarchy">Proof hierarchy</h2>
          <Gate
            owns="ranked proof, when to use it, testimonials with claim links, living proof shelf"
            pass="every public claim has a receipt in the file, and AI is told when proof is required"
          />
          <p>
            Proof is the conversion layer. Voice without proof is style. Proof
            without a hierarchy becomes a dump of logos and numbers on every
            post. Unmarketing&apos;s fourth question lives here: how do you
            prove the difference every time someone meets you.
          </p>
          <h3>Rank the proof</h3>
          <p>Rank strongest to weakest for your company. A typical order:</p>
          <ol className="guide-plain-list">
            {proofRanks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            Tell the AI when to use proof. Conversion pages, sales notes, and
            offer posts need it. General awareness can stay lighter. Add that
            rule in the DNA so every social post does not open with a trophy
            shelf.
          </p>
          <h3>Testimonials</h3>
          <p>
            Capture name, role, company, the exact line, and the claim it
            supports. Store permission status. A testimonial without a claim
            link is decoration.
          </p>
          <h3>Proof library</h3>
          <p>
            Keep a living shelf: case notes, metrics, quotes, media links, FAQs.
            Update it when the business changes. Point AI at the shelf. Never
            invent a partner, a number, or a quote that is not in the file.
          </p>
          <WriteNow items={writeNowProof} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="messaging">
          <p className="guide-kicker">11</p>
          <h2 id="messaging">Messaging</h2>
          <Gate
            owns="central brand message, persona frames, competitive clarity lines"
            pass="the central message works on a homepage, a cold email, and a founder intro"
          />
          <h3>Central brand message</h3>
          <p>
            One line that carries the company across rooms. It should survive a
            homepage, a cold email, and a founder intro. If it only works in a
            pitch deck, keep writing.
          </p>
          <h3>Persona-specific messaging</h3>
          <p>
            For each persona, write the frame that matches their beliefs,
            frustrations, and desires. Keep voice constant. Change the hook and
            the proof, leaving the identity of the company intact. When you ask
            AI to draft these frameworks, feed it the company overview,
            messaging core, mission set, target market, proof points, and brand
            voice.
          </p>
          <h3>Competitive positioning messages</h3>
          <p>
            These are short clarity lines. What you are. What you are not. A
            sentence a customer instantly understands. This is separate from the
            UVP. UVP sells the value. Positioning clears the confusion next to
            alternatives and misconceptions.
          </p>
          <p>
            Keep statements short and confident. No buzzword fog. Tie each line
            to a defensible advantage from your competitive field section.
          </p>
          <p>
            Once messaging is on the page, the next job is distribution and GTM.{" "}
            <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink> turns the
            same founder answers into brand plus go-to-market strategy you can
            hand to agents, so ads, email, founder posts, and outreach all read
            from one locked document instead of inventing a new company every
            week.
          </p>
          <WriteNow items={writeNowMessaging} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="channel-guidelines">
          <p className="guide-kicker">12</p>
          <h2 id="channel-guidelines">Channel guidelines</h2>
          <Gate
            owns="how each live channel should feel, structure, and sell"
            pass="you named at most three channels for now and wrote one decision line for each"
          />
          <p>
            Your brand stays itself across channels. Structure and tone adapt to
            how people consume each platform. Review best practices for email,
            social, blogs, ads, and PR, then rewrite them so they sound like
            your company.
          </p>
          <p>
            Strong channel guidelines stop drift. They also stop AI from
            turning every LinkedIn post into a blog and every email into an ad.
          </p>
          <p>
            If you are early, pick three channels maximum. Build subscribers,
            conversations, or pipeline there. Spreading thin is how founders
            stay busy and still invisible. Coherence beats channel volume, which
            is the same commercial point Threerooms and monday.com make when
            they put brand and performance on one operating system.
          </p>
          <div
            className="guide-rules"
            role="table"
            aria-label="Channel guidelines"
          >
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Channel</span>
              <span role="columnheader">What to decide</span>
            </div>
            {channelRows.map((row) => (
              <div className="guide-rules-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell">{row.value}</span>
              </div>
            ))}
          </div>
          <WriteNow items={writeNowChannels} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="load-into-ai">
          <p className="guide-kicker">13</p>
          <h2 id="load-into-ai">Load Brand DNA into AI</h2>
          <Gate
            owns="knowledge file placement, supporting docs, standing AI instructions"
            pass="the live Brand DNA file is attached where you write, and instructions point at that file"
          />
          <p>
            Upload the Brand DNA as a knowledge file wherever you write. Attach
            supporting docs: guidelines, product lists, case studies, proof
            shelf, decks, FAQs. Update quarterly or when the offer changes.
            Awesomic&apos;s practical rule fits: AI for volume, humans for the
            emotional and brand-risk calls.
          </p>
          <p>Two common setups from the Brand DNA system:</p>
          <div
            className="guide-rules"
            role="table"
            aria-label="AI setups"
          >
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Setup</span>
              <span role="columnheader">Best when</span>
            </div>
            {aiSetups.map((row) => (
              <div className="guide-rules-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell">{row.value}</span>
              </div>
            ))}
          </div>
          <p>
            You do not need both. Together they give you a strategic brain and a
            daily execution partner. If you run named agents in Grok Bot, drop
            the same Brand DNA file in Drive and tell every writing bot to open
            it. Do not paste a summary into the agent description and hope. The
            file is the source of truth.
          </p>
          <p>
            The public-company Brand Brain pattern is the Custom GPT path at
            team scale: one shared link, Brand DNA loaded as knowledge, and
            every marketing seat reading from the same brain. That is how a
            marketing manager, social lead, designer, ad buyer, and PR agency
            stay on voice without sending every draft through the CEO for tone.
          </p>
          <h3>Claude Project setup</h3>
          <ol className="guide-steps">
            {claudeSteps.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
          <h3>Custom GPT setup</h3>
          <ol className="guide-steps">
            {gptSteps.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
          <h3>Grok Bot / Drive setup</h3>
          <ol className="guide-steps">
            {grokSteps.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
          <p>
            If the worksheet still feels heavy to build from a blank page, run
            the company through{" "}
            <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink> first.
            Answer the questions, get the brand and go-to-market strategy, then
            load that stamped brief into Claude, a Custom GPT, or your Grok Bots
            the same way.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="ai-instructions">
          <p className="guide-kicker">14</p>
          <h2 id="ai-instructions">AI instructions to paste</h2>
          <blockquote className="guide-rule-block">
            {aiInstructions.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </blockquote>
          <WriteNow items={writeNowLoad} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="test-refine">
          <p className="guide-kicker">15</p>
          <h2 id="test-refine">Test and refine</h2>
          <p>
            Before you trust the system for real publishes, run five quick
            checks.
          </p>
          <div
            className="guide-overview"
            role="table"
            aria-label="Five tests"
          >
            <div className="guide-overview-head" role="row">
              <span role="columnheader">Test</span>
              <span role="columnheader">Prompt</span>
              <span role="columnheader">Pass if</span>
            </div>
            {tests.map((row) => (
              <div className="guide-overview-row" role="row" key={row.name}>
                <span role="rowheader">{row.name}</span>
                <span role="cell" data-col="Prompt">
                  {row.mid}
                </span>
                <span role="cell" data-col="Pass if">
                  {row.end}
                </span>
              </div>
            ))}
          </div>
          <p>
            When something feels off, update the Brand DNA worksheet first. That
            is the master file. You rarely need to rewrite the AI instructions.
            Most fixes belong in the DNA.
          </p>
          <div
            className="guide-rules"
            role="table"
            aria-label="Symptom and DNA fix"
          >
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Symptom</span>
              <span role="columnheader">Fix in the DNA</span>
            </div>
            {symptomFixes.map((row) => (
              <div className="guide-rules-row" role="row" key={row.label}>
                <span role="rowheader">{row.label}</span>
                <span role="cell">{row.value}</span>
              </div>
            ))}
          </div>
          <WriteNow items={writeNowTests} />
        </section>
      </GuideReveal>

      <GuideReveal>
        <section
          className="guide-section guide-close"
          aria-labelledby="stamp-the-story"
        >
          <p className="guide-kicker">16</p>
          <h2 id="stamp-the-story">Stamp the story before you scale</h2>
          <p>
            Fill the foundation, name the market, lock voice with real samples,
            rank the proof, write the central message and the persona frames,
            pick three channels, load the file into AI, run the five tests, and
            strengthen the DNA when a draft drifts. Stamping that story is
            founder work you do before you scale agents and content volume.
            Without DNA, agents invent a category and writers invent a second
            brand. The stamped file is how marketing, sales, freelancers, and
            bots stay on one company. In 2026 that file is also how you stay
            coherent when answer engines, ads, and founder posts all speak at
            once.
          </p>
          <p>
            Once the file is live, your job shifts. You edit for judgment,
            offer, and send. The stack stops asking who you are every morning.
            That is also how you avoid the ChatGPT-average trap: the model will
            still draft fast, but it drafts from a locked story instead of
            inventing a generic company that burns trust. AI stays a tool for
            performance. Brand stays iconic because the thinking stayed yours.
          </p>
          <p>
            If you want the structured founder inputs turned into a stamped
            Brand DNA and go-to-market strategy without building the worksheet
            from scratch, that is what{" "}
            <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink> is for.
            Answer the questions, lock the strategy, deploy it to your agents,
            and scale content only after the story is fixed. If you want the
            weekly operator version of how I run this, that is{" "}
            <GuideLink href="/newsletter">Systems Over Hustle</GuideLink>.
          </p>
        </section>
      </GuideReveal>
    </>
  );
}
