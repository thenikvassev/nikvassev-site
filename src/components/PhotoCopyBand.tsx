import Link from "next/link";
import { CinematicPhoto } from "./CinematicPhoto";

type Props = {
  invert?: boolean;
  cream?: boolean;
  reverse?: boolean;
  eyebrow?: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  priority?: boolean;
  external?: boolean;
};

export function PhotoCopyBand({
  invert = false,
  cream = false,
  reverse = false,
  eyebrow,
  title,
  body,
  href,
  cta,
  image,
  imageAlt,
  objectPosition,
  priority = false,
  external = false,
}: Props) {
  const surface = invert
    ? "bg-forest-dark text-white"
    : cream
      ? "bg-cream text-ink"
      : "bg-white text-ink";

  const ctaClass = invert ? "pill-btn-invert" : "pill-btn-primary";

  const inner = (
    <>
      {eyebrow ? (
        <p className={`section-label ${invert ? "!text-white/55" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`max-w-xl text-4xl md:text-5xl lg:text-6xl ${
          invert ? "text-white group-hover:text-white/90" : "group-hover:text-forest"
        } ${eyebrow ? "mt-4" : ""}`}
      >
        {title}
      </h2>
      <p
        className={`mt-6 max-w-md text-base leading-relaxed md:text-lg ${
          invert ? "text-white/75" : "text-ink-muted"
        }`}
      >
        {body}
      </p>
      <span className={`mt-8 ${ctaClass}`}>{cta}</span>
    </>
  );

  const copy = (
    <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-20 lg:px-16 xl:px-20">
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          {inner}
        </a>
      ) : (
        <Link
          href={href}
          className="group block max-w-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          {inner}
        </Link>
      )}
    </div>
  );

  const photo = (
    <CinematicPhoto
      src={image}
      alt={imageAlt}
      objectPosition={objectPosition}
      priority={priority}
      className="min-h-[70vh] w-full lg:min-h-[85vh]"
    />
  );

  return (
    <section className={surface}>
      <div className="grid lg:grid-cols-2">
        {reverse ? (
          <>
            {copy}
            {photo}
          </>
        ) : (
          <>
            {photo}
            {copy}
          </>
        )}
      </div>
    </section>
  );
}
