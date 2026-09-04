import Image from "next/image";

type ResultCard = {
  value: string;
  label: string;
  direction: "down" | "up";
  /** Fill amount 0–100 for the subtle bar (maps to reported %) */
  fill: number;
};

const results: ResultCard[] = [
  {
    value: "32%",
    label: "Less anxiety",
    direction: "down",
    fill: 32,
  },
  {
    value: "52%",
    label: "Pain relief",
    direction: "up",
    fill: 52,
  },
  {
    value: "24%",
    label: "Less depressive symptoms",
    direction: "down",
    fill: 24,
  },
  {
    value: "12%",
    label: "Higher quality of life",
    direction: "up",
    fill: 12,
  },
];

const partners = [
  { src: "/logos/harvard-wordmark.png", alt: "Harvard University", width: 560, height: 141 },
  { src: "/logos/calgary-wordmark.png", alt: "University of Calgary", width: 520, height: 163 },
  { src: "/logos/penn-medicine.png", alt: "Penn Medicine", width: 560, height: 89 },
];

function DeltaChip({ direction, value }: { direction: "down" | "up"; value: string }) {
  const signed = direction === "down" ? `−${value}` : `+${value}`;
  return (
    <span
      className="inline-flex items-center rounded-full border border-forest/15 bg-forest/5 px-2.5 py-0.5 font-sans text-xs font-medium tracking-wide text-forest"
      aria-hidden
    >
      {signed}
    </span>
  );
}

function ProgressBar({ fill, direction }: { fill: number; direction: "down" | "up" }) {
  const width = Math.max(8, Math.min(100, fill));
  return (
    <div
      className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-forest/10"
      aria-hidden
    >
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-forest transition-[width] duration-700 ease-out"
        style={{
          width: `${width}%`,
          backgroundColor: direction === "up" ? "#0A3B24" : "#032415",
        }}
      />
    </div>
  );
}

export function NovobeingResults() {
  return (
    <section className="mt-12 overflow-hidden rounded-card bg-forest-dark px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-base text-cream/85 md:text-lg">Proven results</p>
        <h2 className="mt-1 font-serif text-3xl tracking-display text-cream md:text-4xl">
          Across multiple clinical trials
        </h2>
        <p className="mt-3 text-sm text-cream/70 md:text-base">
          Validated by randomized controlled trials and hospital-led studies
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r) => (
          <div
            key={r.label}
            className="relative flex min-h-[168px] flex-col rounded-card bg-cream px-4 py-5"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium leading-snug text-forest">{r.label}</p>
              <DeltaChip direction={r.direction} value={r.value} />
            </div>
            <p className="mt-3 font-serif text-5xl tracking-display text-forest-dark md:text-[2.75rem]">
              {r.value}
            </p>
            <div className="mt-auto pt-2">
              <ProgressBar fill={r.fill} direction={r.direction} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {partners.map((p) => (
          <Image
            key={p.alt}
            src={p.src}
            alt={p.alt}
            width={p.width}
            height={p.height}
            className="h-11 w-auto object-contain opacity-95 md:h-12"
            sizes="(min-width: 768px) 180px, 140px"
          />
        ))}
      </div>
    </section>
  );
}
