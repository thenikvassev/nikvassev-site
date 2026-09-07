import type { ReactNode } from "react";
import { GuideReveal } from "@/components/GuideReveal";
import {
  defaultFive,
  fiveChoices,
  openingRest,
  operatingRules,
  paidKeys,
  playbooks,
  processSteps,
  todaySteps,
} from "./distribution-engine-data";

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

export function GuideBody() {
  return (
    <>
      <GuideReveal className="guide-opening">
        {openingRest.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="what-changed">
          <p className="guide-kicker">01</p>
          <h2 id="what-changed">What changed for founders</h2>
          <p>
            Speed of creation moved first. What used to take a team months can be
            done in a day. Pages, ads, products and content all got cheaper to
            produce. Your competitors have the same tools. Software used to be
            hard to copy. Features move in days. A working engine of content,
            partnerships, paid learning, email and founder voice does not.
          </p>
          <p>
            Distribution is the final moat because the rest of the stack
            commoditized. If you cannot get found, product quality barely matters
            in the market. Founders keep building more product as a substitute
            for distribution because building feels like progress. That usually
            delays the real work: naming the market, locking the story and
            running campaigns you can measure.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="attention">
          <p className="guide-kicker">02</p>
          <h2 id="attention">The attention environment</h2>
          <p>
            People sit inside an onslaught of digital media. Industry estimates
            put daily content exposure around 5,000 pieces, up from about 1,400
            in 2012. Those figures are directional, not a census. Nobody is
            starving for more posts.
          </p>
          <p>
            <GuideLink href="https://datareportal.com/reports/digital-2026-mid-year-global-update-report">
              DataReportal
            </GuideLink>{" "}
            counted 5.79 billion social media user identities in April 2026,
            about 69.9% of the world (
            <GuideLink href="https://datareportal.com/global-digital-overview">
              global overview
            </GuideLink>
            ). Identities, not unique humans. Plenty of people run more than one
            account. The feed is full either way.
          </p>
          <p>
            The{" "}
            <GuideLink href="https://influencermarketinghub.com/influencer-marketing-experts-report/">
              Influencer Marketing Hub Benchmark Report 2025
            </GuideLink>{" "}
            put the influencer marketing industry at about $32.55 billion in
            2025, up from about $24 billion in 2024.{" "}
            <GuideLink href="https://www.midiaresearch.com/blog/new-midia-report-forecasts-one-billion-creators-by-2032-as-ai-reshapes-the-creative-value-chain">
              MIDiA
            </GuideLink>{" "}
            forecasts global creators to reach 1.1 billion by 2032, a 76% rise.
            You are competing with everyone who can hit record.
          </p>
          <p>
            The feed trained people to skim.{" "}
            <GuideLink href="https://www.asurion.com/press-releases/americans-check-their-phones-96-times-a-day/">
              Asurion
            </GuideLink>{" "}
            put Americans at about 96 phone checks a day in 2019.{" "}
            <GuideLink href="https://www.reviews.org/mobile/2025-cell-phone-addiction/">
              Reviews.org
            </GuideLink>{" "}
            put it at about 205 in their 2025 usage report (
            <GuideLink href="https://www.reviews.org/mobile/cell-phone-addiction/">
              their 2026 report
            </GuideLink>{" "}
            put the figure at 186). Either number is enough. Focus is expensive.
            You have about three seconds on a hook. After that they keep
            scrolling. The rest of the funnel only exists if the first seconds
            work.
          </p>
          <p>
            Platforms moved to interest media. The algorithm ranks whether anyone
            actually cared: watch time, saves, shares and other engagement
            signals. Follower count is a lagging souvenir. Your content is the
            targeting. The algorithm is the discoverability engine. That is why
            a small account can outperform a large one on a single post, and why
            buying followers is a vanity tax. Build for search and interest.
          </p>
          <p>
            Even when you earn the stop, many buyers still hesitate. Trust in
            digital platforms is thinner. Spend is careful. Temporary austerity
            turned into a standing question: what is this really worth? If your
            offer cannot survive that question, paid will burn and organic will
            stall. Fix the offer, the proof and the price story before you scale
            a channel. Marketing cannot paper over a weak reason to buy.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="how-to-play">
          <p className="guide-kicker">03</p>
          <h2 id="how-to-play">How to play this</h2>
          <p>
            Earn attention fast. Create for search and interest. Test creative
            constantly. Treat niche creators as distribution. Optimize for
            attention and conversion together. Guard trust in a caution economy.
            Reach outside social so one algorithm cannot own the company. In
            practice that means seven operating rules:
          </p>
          <ol className="guide-steps">
            {operatingRules.map((step, index) => (
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
            If a weekly plan does not include a test you can kill, it is a
            content hobby.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="five-choices">
          <p className="guide-kicker">04</p>
          <h2 id="five-choices">Five choices that shape the company</h2>
          <p>
            Everything downstream of these five is tactics. Get these wrong and
            the playbooks just spend money faster. Write the answers in one
            sitting before you pick tools.
          </p>
          <div
            className="guide-overview"
            role="table"
            aria-label="Five choices that shape the company"
          >
            <div className="guide-overview-head" role="row">
              <span role="columnheader">Choice</span>
              <span role="columnheader">The actual question</span>
              <span role="columnheader">Write your answer in one line</span>
            </div>
            {fiveChoices.map((row) => (
              <div className="guide-overview-row" role="row" key={row.choice}>
                <span role="rowheader">{row.choice}</span>
                <span role="cell" data-col="The actual question">
                  {row.question}
                </span>
                <span role="cell" data-col="Write your answer in one line">
                  <span className="guide-write-in" />
                </span>
              </div>
            ))}
          </div>
          <p>
            A pretty brand with no distribution is a deck. A distribution
            machine selling a confused offer is a leak. Target market and
            differentiation sit at the front of the sequence for a reason.
            Without those locked, channel work is improvisation.
          </p>
          <p>
            I built a tool for this step. You answer a set of questions inside{" "}
            <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink> and it
            builds your brand and go-to-market strategy, then automates a lot of
            the work that follows. You can deploy that brief to your agents so
            they execute from the same document instead of inventing a new
            company every week.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="process">
          <p className="guide-kicker">05</p>
          <h2 id="process">The marketing process</h2>
          <p>
            This is the operating sequence. Skip a step and you will feel busy
            without learning anything. The middle of the process is where most
            teams get the order wrong: playbooks before tools, channels before
            campaigns, campaigns before scale. Marketing is campaign-based.
            Organic alone or ads alone leaves learning incomplete. Sometimes one
            playbook and one campaign is enough to move the needle when budget
            and team are small.
          </p>
          <ol className="guide-steps">
            {processSteps.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                {step.title === "Create a brand" ? (
                  <p>
                    If you want that brief structured fast,{" "}
                    <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink>{" "}
                    turns founder answers into your brand and go-to-market
                    strategy. Deploy it to your agents so ads, email, founder
                    posts and outreach all read from one locked document.
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="wasting-time">
          <p className="guide-kicker">06</p>
          <h2 id="wasting-time">When marketing is wasting time</h2>
          <p>
            When the product or the model is the problem. Even strong marketing
            cannot sell a weak product or overcome a broken business model. Your
            goal is to get product-market fit and scale, or kill the idea early
            so you do not waste years. The faster you validate with the least
            amount of money, the better.
          </p>
          <p>
            A practical test: can a specific person describe the offer, name who
            it is for and tell you why they would pay. If they cannot, you do
            not have a distribution problem yet. You have a story and offer
            problem. Fix those, then turn the channels on.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="playbook-menu">
          <p className="guide-kicker">07</p>
          <h2 id="playbook-menu">Playbook menu</h2>
          <p>
            The full menu is below. Do not run all of them. A default five for
            an early B2B or specialist company: founder content, email, AI
            search and SEO, one paid lane (usually Meta or search) and either
            partnerships or niche creators. Change that mix if your buyers do
            not live there. Budget and team size decide how many you can run
            well at once.
          </p>
          <div
            className="guide-benefit-table"
            role="table"
            aria-label="Playbook menu"
          >
            <div className="guide-benefit-head" role="row">
              <span role="columnheader">Playbook</span>
              <span role="columnheader">What it is for</span>
            </div>
            {playbooks.map((row) => (
              <div className="guide-benefit-row" role="row" key={row.playbook}>
                <span role="rowheader">{row.playbook}</span>
                <span role="cell">{row.for}</span>
              </div>
            ))}
          </div>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="default-five">
          <p className="guide-kicker">08</p>
          <h2 id="default-five">Expand the default five</h2>
          <ol className="guide-steps">
            {defaultFive.map((step, index) => (
              <li key={step.title} className="guide-step">
                <p className="guide-step-num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                {step.title === "AI search and SEO" ? (
                  <>
                    <p>{step.paragraphs[0]}</p>
                    <p>
                      <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink>{" "}
                      is how I get founders that brief without a six-week
                      strategy project: answer the questions, get the brand and
                      go-to-market strategy, then publish pages that match it.
                    </p>
                    <p>{step.paragraphs[1]}</p>
                  </>
                ) : (
                  step.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))
                )}
              </li>
            ))}
          </ol>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="meta-2026">
          <p className="guide-kicker">09</p>
          <h2 id="meta-2026">Meta in 2026</h2>
          <p>
            <GuideLink href="https://www.emarketer.com/press-releases/meta-to-surpass-google-in-digital-ad-revenues-for-first-time-ever/">
              eMarketer&apos;s April 2026 forecast
            </GuideLink>{" "}
            put Meta at $243.46 billion in net worldwide ad revenue for 2026,
            ahead of Google at $239.54 billion (
            <GuideLink href="https://www.reuters.com/business/media-telecom/meta-poised-surpass-google-digital-ad-revenue-first-time-report-says-2026-04-13/">
              Reuters coverage
            </GuideLink>
            ). That would be the first year Meta leads. Meta&apos;s share of
            global ad spend is forecast at 26.8%, Google at 26.4%. Amazon is
            third. Google, Meta and Amazon together are about 62.3% of global
            digital ad spend.
          </p>
          <p>
            That is why Meta is the best paid channel for most teams to learn
            and scale on right now. It has the biggest ad machine and the
            strongest algorithmic delivery. Your job is to feed the system
            winning ads. Strong hooks, offers, angles and formats matter more
            than complicated audience stacks.
          </p>
          <p>
            Use Meta to scale proven creative. Organic should surface the hooks
            first. Paid should amplify the winners. Go broader, simplify the
            account and stop building targeting origami while the ads are weak.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="keys-to-paid">
          <p className="guide-kicker">10</p>
          <h2 id="keys-to-paid">Keys to paid success</h2>
          <div
            className="guide-rules"
            role="table"
            aria-label="Keys to paid success"
          >
            <div className="guide-rules-head" role="row">
              <span role="columnheader">Key</span>
              <span role="columnheader">Operator standard</span>
            </div>
            {paidKeys.map((row) => (
              <div className="guide-rules-row" role="row" key={row.key}>
                <span role="rowheader">{row.key}</span>
                <span role="cell">{row.standard}</span>
              </div>
            ))}
          </div>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="do-today">
          <p className="guide-kicker">11</p>
          <h2 id="do-today">What you should do today</h2>
          <p>
            This is the climax of the guide. Do it in one sitting. Write it
            down. If a line is blank, that is the work. The order mirrors the
            thesis: market and differentiator first, then reach, then playbooks,
            then campaigns and budget.
          </p>
          <ol className="guide-steps">
            {todaySteps.map((step, index) => (
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
            When the page is filled, put the first campaign live this week. That
            is how a distribution engine starts.
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section className="guide-section" aria-labelledby="how-you-know">
          <p className="guide-kicker">12</p>
          <h2 id="how-you-know">How you know it is working</h2>
          <p>
            A channel is working when you can describe the loop: what you
            publish or spend, who it reaches, what they do next and how that
            turns into a customer you can name. Followers, impressions and raw
            traffic are inputs. The output is conversations, trials, sales or
            pipeline you can inspect.
          </p>
          <p>
            Give a test enough creative density to learn, then kill it. Ten weak
            ads taught you nothing. Three strong angles, each with a real hook,
            will tell you more than a month of posting for consistency. Organic
            and paid should inform each other. A campaign with a date and a
            success number beats a vague plan to &quot;do more content.&quot;
          </p>
        </section>
      </GuideReveal>

      <GuideReveal>
        <section
          className="guide-section guide-close"
          aria-labelledby="why-this-matters"
        >
          <p className="guide-kicker">13</p>
          <h2 id="why-this-matters">Why this matters now</h2>
          <p>
            Creation got cheap for everyone at once. The founders who win treat
            distribution as a company system: market, differentiation, reach
            map, playbooks, tools, campaigns and a kill loop. That system is
            hard to copy. Another feature ship is easy to copy. Running organic
            alone or ads alone leaves the learning incomplete. Campaign-based
            marketing is how you turn attention into customers you can name.
          </p>
          <p>
            It is a founder&apos;s job to own distribution while the company is
            still small enough that nobody else will. Name the market. Lock the
            story. Map where buyers actually live. Run three campaigns. Kill
            what fails. Scale what converts. Capital still matters. The excuse
            that marketing is someone else&apos;s later problem does not.
          </p>
          <p>
            If you want the brand and go-to-market brief those campaigns should
            read from, run the company through{" "}
            <GuideLink href="https://guideiq.ai">Guide IQ</GuideLink>. Answer
            the questions, lock the strategy, deploy it to your agents and scale
            spend only after the story is fixed. If you want the weekly operator
            version of this, that is{" "}
            <GuideLink href="/newsletter">Systems Over Hustle</GuideLink>.
          </p>
        </section>
      </GuideReveal>
    </>
  );
}
