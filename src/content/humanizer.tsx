export const HUMANIZER_TITLE =
  "How to make AI writing sound human [skill included]";

export const HUMANIZER_DESCRIPTION =
  "Dead Internet Theory stopped feeling like a theory a while ago. Feeds, landing pages, founder emails, and “thought leadership” are drowning in AI slop.";

export const HUMANIZER_DATE = "2026-09-09";
export const HUMANIZER_READING_MINUTES = 8;

export const HUMANIZER_SKILL = `HUMANIZER + AI COPY BLACKLIST (founder skill)

You are editing for human voice. Run a mandatory self-audit before final output.

FOUR RULES (in order)
1) Identify patterns first. Scan this blacklist before rewriting.
2) Keep the facts. Claims survive; shape can change.
3) Invent nothing. No name, number, date, quote, or citation missing from the source.
4) Match the voice. Read a real sample from the author. Copy habits. Do not upgrade diction.

HIGHEST PRIORITY BAN: PARALLEL REPETITION STACK
Do not repeat the same opener, skeleton, or phrase structure across consecutive lines (Same X / More X / People who… / No X. No Y.). Two echoes fail.
Fix with the Escalation Principle: each line adds new information, raises stakes, or moves the argument.

STRUCTURAL BANS
- False Contrast Stack: "It's not X. It's not Y. It's Z." State the claim or compare directly.
- Triple Short Sentence Stack: three near-identical short sentences in a row. Vary rhythm.
- Rhetorical section openers ("But what does that actually mean?"). Use a declarative line.
- Imagine If openers. Start with a fact, decision, or specific number.

TRANSITION / FILLER BANS
Never use: Let's dive in; Here's the thing; At the end of the day; In today's fast-paced…;
Whether you're a [X] or a [Y]; More on that later; But wait, there's more (unless ironic).

FORMATTING
No emoji unless the brief requires it. Minimal exclamation points.
Blogs/newsletters: connected paragraphs. Conversion pages may use short-line pacing.
Skip em dashes unless the author's own sample uses them.
Ban negative parallelisms ("not X but Y" / "It's not X. It's Y.").

SCOPING
Hard sales-hedge bans apply to conversion copy with proof. Editorial and ops claims stay honestly labeled. Do not invent certainty.

AUDIT LOOP
1) Scan Parallel Repetition.
2) Scan structural bans + transitions.
3) Rewrite tells into plain claims.
4) Ask: what still sounds like AI? Did I invent a fact?
5) Deliver only after the audit passes.`;

export function HumanizerBody() {
  return (
    <>
      <p>
        Dead Internet Theory stopped feeling like a theory a while ago. Feeds,
        landing pages, founder emails, and “thought leadership” are drowning in
        AI slop. The texture is everywhere: looping openers, fake contrast,
        punchline stacks that land like a metronome. You can smell it in half a
        paragraph.
      </p>
      <p>
        I get why people ship that way. AI writing is easy. Easy still has a
        floor, and the floor right now is terrible. Most readers can tell when a
        draft never left the chat window, even when they cannot name the tell.
        That costs trust. It also costs the marketing, messaging, and
        initiatives you wanted AI to accelerate.
      </p>
      <p>
        This page is the fix I actually use. I put together a standing skill
        (Humanizer plus an AI Copy Blacklist) so you keep the speed and lose the
        cadence. Paste it into Claude, ChatGPT, or Grok Bot. Force a self-audit
        before you publish. Run it hard and nobody can tell the draft came
        straight out of a chat window. It improves the writing enough that you
        can actually leverage AI in marketing, messaging, and initiatives
        without sounding like everyone else.
      </p>

      <h3>Why does average AI writing fail in public?</h3>
      <p>
        AI predicts the next likely word. That is why drafts drift toward
        phrases that fit every case and sound like nobody. Founders feel it when
        a landing page reads like a stack of slogans. Readers feel it when every
        paragraph opens the same way. The failure mode is structural, not moral.
        You can love the tool and still refuse the tells.
      </p>
      <p>
        I treat this as an ops problem. Scan for patterns first. Rewrite each
        tell into the plain claim underneath. Keep every fact. Invent nothing.
        Match the voice of a real sample, not a style guide fantasy. Personality
        belongs on blogs, essays, and anything with a point of view. Legal,
        technical, and reference pages stay neutral.
      </p>
      <p>
        If you want volume over trust, skip this page. Ship raw AI output and
        accept the brand tax. Everyone else: keep the tool, put a skill in front
        of publish.
      </p>

      <h3>What the surveys are saying</h3>
      <p>
        Gartner surveyed 1,539 U.S. consumers in October 2025 and found 50%
        prefer brands that avoid GenAI in consumer-facing messages, ads, and
        content. A separate Gartner survey of 307 U.S. consumers (Mar 2026)
        found 49% say GenAI made available content quality worse, rising to 57%
        among Gen Z and millennials. WordPress VIP’s April 2026 research (about
        2,000 respondents) put the turnoff rate at 60% when brands lean on “AI”
        in messaging. DoubleVerify’s July 2026 global study found 42% say
        low-quality or uncanny AI ads would hurt their opinion of a brand, while
        56% cannot consistently tell AI content apart from human writing. People
        are tired of the texture. Plenty still cannot pin which paragraph was
        synthetic.
      </p>

      <h3>What changed when Claude started marking generated text?</h3>
      <p>
        Anthropic published how Claude marks AI-generated content as part of its
        EU AI Act Article 50(2) transparency commitments. Claude releases
        launched on or after 2 August 2026 mark at launch. The help center names
        Fable 5.1 and Mythos 5.1 among supported releases. Watermarks are woven
        into generated text so you cannot see them. They travel with copy-paste
        and can survive some editing. Marking applies wherever Claude is
        offered, worldwide, with the usual caveat that some surfaces may not
        support every mark type. Supported generated files can also carry signed
        C2PA provenance metadata.
      </p>
      <p>
        Detection is not a public panic button today. Watermark detection sits
        in private preview for eligible organizations, with API access expected
        to expand. A detected mark means the content may have been processed by
        Claude, including proofreading or translation. It does not prove sole
        authorship by itself. Heavy edits, paraphrase, very short passages, and
        older unmarked Claude releases can weaken or remove the signal. Treat
        this as rising transparency infrastructure, not as “detectors already
        catch everything.” Source:{" "}
        <a
          href="https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content
        </a>
      </p>
      <p>
        The practical founder takeaway is narrower. If your public copy still
        sounds like AI, you have a brand problem even when no detector is
        looking. Cadence is the visible risk. Watermarking is the institutional
        one.
      </p>

      <h3>What is the Humanizer skill?</h3>
      <p>Humanizer is a forced audit, not a vibe. Four rules, in this order:</p>
      <ol>
        <li>
          <strong>Identify the patterns.</strong> Scan the blacklist and the
          known AI-writing catalog before you touch a sentence.
        </li>
        <li>
          <strong>Keep the facts.</strong> Every claim survives. The shape can
          change.
        </li>
        <li>
          <strong>Invent nothing.</strong> No name, number, date, quote, or
          citation that was not in the source.
        </li>
        <li>
          <strong>Match the voice.</strong> Read a real sample first. Copy the
          habits. Do not upgrade the words.
        </li>
      </ol>
      <p>
        On 9 September 2026 I locked an AI Copy Blacklist into that skill after
        catching Parallel Repetition and related tells in our own drafts. The
        tools stayed. The looping cadence did not.
      </p>

      <h3>What belongs on the AI Copy Blacklist?</h3>
      <p>
        <strong>Highest priority: Parallel Repetition Stack.</strong> Repeating
        the same word, phrase structure, or sentence skeleton two or more times
        in a row to manufacture emphasis. Same X. Same Y. More leads. More
        calls. People who… People who… Any reused opener across consecutive
        lines. Two echoes fail. The fix is the Escalation Principle: each line
        must add new information, raise the stakes, deepen the implication, or
        move the argument. The reader should feel momentum, not a loop.
      </p>
      <p>
        <strong>Structural bans</strong>
      </p>
      <ul>
        <li>
          False Contrast Stack (“It’s not X. It’s not Y. It’s Z.”). State the
          positive claim, or compare directly.
        </li>
        <li>
          Triple Short Sentence Stack (three near-identical short lines in a
          row). Vary length and rhythm.
        </li>
        <li>
          Rhetorical section openers (“But what does that actually mean?”).
          Prefer a declarative line or a clean break.
        </li>
        <li>
          Imagine If openers. Start with a hard fact, a decision, or a specific
          number.
        </li>
      </ul>
      <p>
        <strong>Banned transitions and fillers</strong>
      </p>
      <p>
        Let’s dive in. Here’s the thing. At the end of the day. In today’s
        fast-paced digital world. Whether you’re a [X] or a [Y]. More on that
        later. But wait, there’s more (unless you are being ironic on purpose).
      </p>
      <p>
        <strong>Formatting crutches</strong>
      </p>
      <p>
        No emoji overload unless a platform brief asks for it. Almost no
        exclamation points. For conversion pages you can pace with short lines.
        For blogs and newsletters, keep human paragraph rhythm (a few connected
        sentences), not a telegram of one-liners.
      </p>
      <p>
        <strong>Nik voice extras that travel with this skill</strong>
      </p>
      <p>
        No em dashes unless your own writing sample uses them. No negative
        parallelisms in any form. State the claim.
      </p>
      <p>
        Conversion hedging rules (ban on “might / often / usually” for absolute
        sales claims) stay scoped to direct-response copy. Editorial and ops
        writing should still label evidence honestly. Do not invent certainty to
        sound bold.
      </p>

      <h3>How do you run this before you publish?</h3>
      <ol>
        <li>
          Paste the skill block below into your writing bot as a standing
          instruction or project skill.
        </li>
        <li>Draft as usual.</li>
        <li>
          Force a self-audit: scan for Parallel Repetition first, then the
          structural bans, then transitions, then dashes.
        </li>
        <li>
          Ask two questions: what still sounds like AI, and did I add a fact
          that was not there?
        </li>
        <li>Fix those. If a banned pattern remains, you are not done.</li>
        <li>Publish only after the audit passes.</li>
      </ol>
      <p>
        Do not gut a real receipt because it is specific. Specific is the human
        part. Mixed feelings stay. Uneven sentences stay. One short line is
        fine. A stack of them is a tell.
      </p>

      <h3>Who should ignore this?</h3>
      <p>
        Anyone optimizing for publish count over reader trust. If your channel
        rewards noise and you are fine paying the brand tax later, this skill
        will slow you down on purpose. Founders who want people to believe the
        next email, landing page, or founder letter should treat the audit as
        part of the system.
      </p>

      <h3>Steal this skill</h3>
      <p>
        Copy the block into Claude, ChatGPT, or Grok Bot. Keep it next to your
        Brand DNA sample. Run it on every public draft.
      </p>
      <pre className="humanizer-skill">
        <code>{HUMANIZER_SKILL}</code>
      </pre>
      <p>
        If you want the weekly version of this thinking in your inbox, join
        Systems Over Hustle at{" "}
        <a href="https://nikvassev.com/newsletter">
          https://nikvassev.com/newsletter
        </a>
        . One usable idea each Thursday. No hype stack.
      </p>
    </>
  );
}
