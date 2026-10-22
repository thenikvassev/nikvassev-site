import { Fragment, type ReactNode } from "react";
import { GuideReveal } from "@/components/GuideReveal";
import { guideSource as source } from "@/content/guides/how-to-market-to-ai-agents.source";
import { getGuide } from "@/lib/guides";
import { shapeLine } from "@/lib/shape-line";

const DIRECT_ANSWER =
  "To market to AI agents, make your site easy for machines to read, collect recent and specific reviews, and earn third-party coverage that confirms the same story. Agents check whether outside sources agree with what you say about yourself.";

const DEFINITION_TITLE = "What is an AI agent?";
const DEFINITION_BODY =
  "An AI agent is software that acts for a person instead of only answering their questions. It can compare vendors, read reviews and press coverage, and hand the person a shortlist, often of one, that they approve without doing the research themselves.";

const SEMRUSH_PHRASE = "Top Domains Cited by LLMs";
const SEMRUSH_HREF = "https://www.semrush.com/ai-search-ranking/";

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
      return <strong key={index}>{renderInlines(part.text)}</strong>;
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
      <div className="guide-overview" role="table" aria-label="Decision path map">
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
    <div className="guide-benefit-table" role="table" aria-label="Share of LLM citations by domain">
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

function FaqAnswer({ text }: { text: string }) {
  const index = text.indexOf(SEMRUSH_PHRASE);
  if (index === -1) return <>{shapeLine(text)}</>;
  return (
    <>
      {shapeLine(text.slice(0, index))}
      <a href={SEMRUSH_HREF} target="_blank" rel="noopener noreferrer">
        {shapeLine(SEMRUSH_PHRASE)}
      </a>
      {shapeLine(text.slice(index + SEMRUSH_PHRASE.length))}
    </>
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

export function GuideBody() {
  const groups: { title?: string; blocks: Block[]; faq?: boolean }[] = [{ blocks: [] }];
  for (const block of blocks) {
    if (block.type === "h2") {
      groups.push({ title: block.text, blocks: [] });
    } else {
      groups[groups.length - 1].blocks.push(block);
    }
  }

  groups[0].blocks.unshift({ type: "p", text: DIRECT_ANSWER });

  const closing = groups.findIndex((group) => group.title === "Where this leaves you");
  if (closing > 0) {
    groups.splice(closing, 0, {
      title: "Frequently asked questions",
      blocks: [],
      faq: true,
    });
  }

  const faq = getGuide("how-to-market-to-ai-agents")?.faq ?? [];

  return (
    <>
      {groups.map((group, index) => {
        if (!group.title) {
          return (
            <GuideReveal className="guide-opening" key="opening">
              {group.blocks.map(renderBlock)}
              <aside className="guide-define">
                <p className="guide-define-title">{shapeLine(DEFINITION_TITLE)}</p>
                <p>{shapeLine(DEFINITION_BODY)}</p>
              </aside>
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
              {group.faq
                ? faq.map((item) => (
                    <Fragment key={item.question}>
                      <h3>{shapeLine(item.question)}</h3>
                      <p>
                        <FaqAnswer text={item.answer} />
                      </p>
                    </Fragment>
                  ))
                : group.blocks.map(renderBlock)}
            </section>
          </GuideReveal>
        );
      })}
    </>
  );
}
