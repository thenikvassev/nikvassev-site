import Image from "next/image";

export type TimelineJourneyEntry = {
  year: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  /** object-position, e.g. object-top — only used with cover fit */
  imageClassName?: string;
  /** cover (default) crops to 4:3; contain shows full image inside 4:3 with cream letterbox */
  imageFit?: "cover" | "contain";
};

type Props = {
  eyebrow?: string;
  title: string;
  headingId?: string;
  entries: readonly TimelineJourneyEntry[];
};

export function TimelineJourney({
  eyebrow,
  title,
  headingId = "timeline-journey-heading",
  entries,
}: Props) {
  return (
    <section
      id="my-story"
      className="bg-forest-dark px-4 py-16 sm:px-6 md:px-8 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-5xl rounded-3xl bg-cream px-5 py-12 sm:px-10 md:px-16 md:py-20 lg:px-20">
        <header className="text-center">
          {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
          <h2
            id={headingId}
            className={`${eyebrow ? "mt-3" : ""} text-3xl tracking-display text-forest md:text-4xl lg:text-[2.75rem]`}
          >
            {title}
          </h2>
        </header>

        <ol className="relative mt-14 space-y-14 sm:mt-16 md:mt-20 md:space-y-24 md:[--image-col:20rem] lg:[--image-col:22rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[calc(var(--image-col)/2)] hidden w-px bg-tan md:block"
          />
          {entries.map((entry) => {
            const fit = entry.imageFit ?? "cover";
            const objectClass =
              fit === "contain"
                ? "object-contain object-center"
                : `object-cover ${entry.imageClassName ?? "object-center"}`;
            return (
              <li
                key={entry.year}
                className="relative grid items-start gap-5 md:grid-cols-[var(--image-col)_minmax(0,1fr)] md:gap-10 lg:gap-14"
              >
                <div className="relative z-10 w-full md:w-[var(--image-col)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-[#E8E4D9]">
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt}
                      fill
                      className={objectClass}
                      sizes="(min-width: 768px) 352px, 100vw"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-section text-tan">
                    {entry.title}
                  </p>
                  <h3 className="mt-2 font-serif text-4xl font-extralight tracking-display text-forest md:text-5xl">
                    {entry.year}
                  </h3>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted md:text-base">
                    {entry.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
