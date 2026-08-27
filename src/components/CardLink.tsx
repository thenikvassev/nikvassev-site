import Link from "next/link";
import { MediaFrame } from "./MediaFrame";

type Props = {
  href: string;
  title: string;
  benefit: string;
  meta?: string;
  external?: boolean;
  image?: string;
  imageAlt?: string;
};

export function CardLink({
  href,
  title,
  benefit,
  meta,
  external,
  image,
  imageAlt,
}: Props) {
  const className =
    "card group block overflow-hidden p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

  const inner = (
    <>
      {image && (
        <MediaFrame
          src={image}
          alt={imageAlt ?? title}
          ratio="video"
          className="rounded-none border-0 border-b border-tan/40"
        />
      )}
      <div className="p-6">
        {meta && <p className="section-label mb-3">{meta}</p>}
        <h3 className="text-lg tracking-tight text-ink group-hover:text-forest">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{benefit}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-forest">
          {external ? "Visit →" : "Read more →"}
        </span>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
