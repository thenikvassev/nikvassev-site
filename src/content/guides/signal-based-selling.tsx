import type { ReactNode } from "react";
import { GuideReveal } from "@/components/GuideReveal";
import { guideSource as source } from "@/content/guides/signal-based-selling-for-startups.source";
import { shapeLine } from "@/lib/shape-line";

const SITE = "https://nikvassev.com";

type Inline =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "link"; text: string; href: string };

type Paragraph = { type: "p"; text: string };
type Heading = { type: "h2"; text: string };
type ListBlock = { type: "ul" | "ol"; items: string[] };
type TableBlock = { type: "table"; headers: string[]; rows: string[][] };
type Block = Paragraph | Heading | ListBlock | TableBlock;

function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeHref(href: string): string {
  if (href.startsWith(SITE)) {
    return href.slice(SITE.length) || "/";
  }
  return href;
}

function parseInlines(input: string): Inline[] {
  const parts: Inline[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let cursor = 0;
  for (const match of input.matchAll(re)) {
    const index = match.index ?? 0;
    if (index > cursor) {
      parts.push({ type: "text", text: input.slice(cursor, index) });
    }
    if (match[1] != null) {
      parts.push({ type: "strong", text: match[1] });
    } else {
      parts.push({ type: "link", text: match[2], href: match[3] });
    }
    cursor = index + match[0].length;
  }
  if (cursor < input.length) {
    parts.push({ type: "text", text: input.slice(cursor) });
  }
  return parts;
}

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseTable(lines: string[]): TableBlock {
  const rows = lines.map(splitRow).filter((cells) => !cells.every((cell) => /^:?-+:?$/.test(cell)));
  const [headers, ...body] = rows;
  return { type: "table", headers, rows: body };
}

function parseBlocks(md: string): Block[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("# ") || line.startsWith("Meta description:") || line.trim() === "") {
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i += 1;
      continue;
    }
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      blocks.push(parseTable(tableLines));
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("|") &&
      !lines[i].startsWith("- ") &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      para.push(lines[i]);
      i += 1;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }

  return blocks;
}

function renderInlines(text: string): ReactNode[] {
  const parts = parseInlines(text);
  return parts.map((part, index) => {
    const next = parts[index + 1];
    if (part.type === "strong") {
      return <strong key={index}>{shapeLine(part.text)}</strong>;
    }
    if (part.type === "link") {
      const href = normalizeHref(part.href);
      const external = href.startsWith("http");
      return (
        <a
          key={index}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {shapeLine(part.text)}
        </a>
      );
    }
    let value = part.text;
    if (next && /(?:^|\s)\S{1,3}\s*$/.test(value)) {
      value = value.replace(/\s+$/, "\u00A0");
      if (!value.endsWith("\u00A0")) value = `${value}\u00A0`;
    }
    return <span key={index}>{shapeLine(value)}</span>;
  });
}

function GuideTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  if (headers.length >= 3) {
    return (
      <div className="guide-overview" role="table" aria-label={headers.join(", ")}>
        <div className="guide-overview-head" role="row">
          {headers.map((header) => (
            <span role="columnheader" key={header}>
              {shapeLine(header)}
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div className="guide-overview-row" role="row" key={row[0]}>
            <span role="rowheader">{shapeLine(row[0])}</span>
            {row.slice(1).map((cell, index) => (
              <span role="cell" data-col={headers[index + 1]} key={headers[index + 1]}>
                {shapeLine(cell)}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="guide-benefit-table" role="table" aria-label={headers.join(", ")}>
      <div className="guide-benefit-head" role="row">
        {headers.map((header) => (
          <span role="columnheader" key={header}>
            {shapeLine(header)}
          </span>
        ))}
      </div>
      {rows.map((row) => (
        <div className="guide-benefit-row" role="row" key={row[0]}>
          <span role="rowheader">{shapeLine(row[0])}</span>
          <span role="cell">{shapeLine(row[1] ?? "")}</span>
        </div>
      ))}
    </div>
  );
}

function renderBlock(block: Block, index: number) {
  if (block.type === "p") {
    return <p key={index}>{renderInlines(block.text)}</p>;
  }
  if (block.type === "ul" || block.type === "ol") {
    const Tag = block.type;
    return (
      <Tag className="guide-tick-list" key={index}>
        {block.items.map((item) => (
          <li key={item}>{renderInlines(item)}</li>
        ))}
      </Tag>
    );
  }
  if (block.type === "table") {
    return <GuideTable key={index} headers={block.headers} rows={block.rows} />;
  }
  return null;
}

const blocks = parseBlocks(source);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is signal-based selling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signal-based selling is outreach triggered by a dated, public event at a company, such as a funding round or a new hire, that makes your offer timely. You contact the company because of what just changed, rather than because it sits on a static list."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between signal-based selling and intent data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Intent data is a probability score built from research behavior across many sites. A signal is a dated, public event you can check and mention in the email, which makes it a much stronger reason to write."
      }
    },
    {
      "@type": "Question",
      "name": "What are trigger events in sales, and what are good examples for B2B startups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A trigger event is an observable, dated change at a company that is linked to a need you solve. Good examples for startups include a new funding round, a new marketing leader, a first marketing job post, a rebrand, a launch with no coverage, a competitor's raise, an accelerator batch and an upcoming conference slot."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly should I reach out after a trigger event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The same day if you can. In lemlist's users' data, same-day outreach replied at 21.3%, against 17.2% at one to two days, 12.4% at three to seven days and 8.1% after a week. That's vendor platform data, so use it as direction."
      }
    },
    {
      "@type": "Question",
      "name": "How many triggers should a small team track?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with three. Add one play at a time once the first ones are getting replies, so you can tell which change moved your numbers."
      }
    },
    {
      "@type": "Question",
      "name": "Should I mention the trigger in the first line of the email?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lead with your finding and use the trigger as context. \"I found no coverage of the launch outside the launch page\" is stronger than \"saw you launched,\" because it tells the reader something new."
      }
    },
    {
      "@type": "Question",
      "name": "Is it OK to congratulate someone on their funding round in a cold email?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I'd skip it. Nearly every vendor opens with congratulations after a raise, so it reads as automated. Open with a specific finding about their company instead."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find companies that just raised, hired or launched without paid data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use public sources: funding news and press release wires for raises, company news pages and trade press for new leaders, public job boards and careers pages for hiring, and launch directories followed by a news search for launches. Keep a file of what you've already seen."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI automate signal-based selling, and what should stay human?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI assistant that runs scheduled tasks can pull triggers, filter out the weak ones, run checks and draft emails. You should approve every batch before it sends, at least until a play has two clean weeks, because what goes out under your company's name is your call."
      }
    },
    {
      "@type": "Question",
      "name": "How many follow-ups should I send, and what should each one say?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two or three at most, a few business days apart. Each one should add something new, such as a second angle, a short example, a relevant result or a free resource. If a follow-up adds nothing, skip it."
      }
    },
    {
      "@type": "Question",
      "name": "How do I check whether AI assistants recommend my company or my prospect's rivals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask an AI assistant the questions your buyers ask and note which companies it names. To run the check across Google, ChatGPT and Claude at once, use the free AI Visibility Audit from Storyline Pros."
      }
    }
  ]
};

export function GuideBody() {
  const groups: { title?: string; blocks: Block[] }[] = [{ blocks: [] }];
  for (const block of blocks) {
    if (block.type === "h2") {
      groups.push({ title: block.text, blocks: [] });
    } else {
      groups[groups.length - 1].blocks.push(block);
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {groups.map((group, index) => {
        if (!group.title) {
          return (
            <GuideReveal className="guide-opening" key="opening">
              {group.blocks.map(renderBlock)}
            </GuideReveal>
          );
        }
        const id = headingId(group.title);
        const kicker = String(index).padStart(2, "0");
        return (
          <GuideReveal key={id}>
            <section className="guide-section" aria-labelledby={id}>
              <p className="guide-kicker">{kicker}</p>
              <h2 id={id}>{shapeLine(group.title)}</h2>
              {group.blocks.map(renderBlock)}
            </section>
          </GuideReveal>
        );
      })}
    </>
  );
}
