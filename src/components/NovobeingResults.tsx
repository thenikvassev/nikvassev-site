import Image from "next/image";

type ResultCard = {
  value: string;
  label: string;
  direction: "down" | "up";
  accent: "forest" | "mid";
  labelPos: "top" | "bottom";
};

const results: ResultCard[] = [
  {
    value: "32%",
    label: "Less anxiety",
    direction: "down",
    accent: "forest",
    labelPos: "top",
  },
  {
    value: "52%",
    label: "Pain relief",
    direction: "up",
    accent: "mid",
    labelPos: "bottom",
  },
  {
    value: "24%",
    label: "Less depressive symptoms",
    direction: "down",
    accent: "mid",
    labelPos: "top",
  },
  {
    value: "12%",
    label: "Higher quality of life",
    direction: "up",
    accent: "forest",
    labelPos: "bottom",
  },
];

const partners = [
  { src: "/logos/harvard.png", alt: "Harvard University", width: 120, height: 40 },
  { src: "/logos/calgary.png", alt: "University of Calgary", width: 160, height: 36 },
  { src: "/logos/penn.png", alt: "Penn Medicine", width: 140, height: 40 },
];

function Sparkline({
  direction,
  color,
}: {
  direction: "down" | "up";
  color: string;
}) {
  const d =
    direction === "down"
      ? "M4 10 C 40 12, 70 28, 116 52"
      : "M4 52 C 40 48, 70 28, 116 10";
  const fill =
    direction === "down"
      ? "M4 10 C 40 12, 70 28, 116 52 L 116 64 L 4 64 Z"
      : "M4 52 C 40 48, 70 28, 116 10 L 116 64 L 4 64 Z";
  const endY = direction === "down" ? 52 : 10;

  return (
    <svg
      viewBox="0 0 120 64"
      className="pointer-events-none absolute inset-x-3 bottom-3 h-[58%] w-[calc(100%-1.5rem)]"
      aria-hidden
    >
      <defs>
        <linearGradient id={`fill-${direction}-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[16, 32, 48].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="120"
          y2={y}
          stroke="rgba(3,36,21,0.08)"
          strokeWidth="1"
        />
      ))}
      <path d={fill} fill={`url(#fill-${direction}-${color})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="116" cy={endY} r="4" fill={color} />
    </svg>
  );
}

export function NovobeingResults() {
  return (
    <section className="mt-12 overflow-hidden rounded-card bg-forest-dark px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-base text-cream/85 md:text-lg">Proven results</p>
        <h2 className="mt-1 font-serif text-3xl tracking-display text-cream md:text-4xl">
          across multiple clinical trials
        </h2>
        <p className="mt-3 text-sm text-cream/70 md:text-base">
          Validated by randomized controlled trials and hospital-led studies
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r) => {
          const color = r.accent === "forest" ? "#032415" : "#0A3B24";
          return (
            <div
              key={r.label}
              className="relative flex min-h-[168px] flex-col overflow-hidden rounded-card bg-cream px-4 py-4"
            >
              <Sparkline direction={r.direction} color={color} />
              {r.labelPos === "top" ? (
                <>
                  <p className="relative z-10 text-sm font-medium text-forest">
                    {r.label}
                  </p>
                  <p
                    className="relative z-10 mt-auto font-serif text-4xl tracking-display"
                    style={{ color }}
                  >
                    {r.value}
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="relative z-10 font-serif text-4xl tracking-display"
                    style={{ color }}
                  >
                    {r.value}
                  </p>
                  <p className="relative z-10 mt-auto text-sm font-medium text-forest">
                    {r.label}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {partners.map((p) => (
          <Image
            key={p.alt}
            src={p.src}
            alt={p.alt}
            width={p.width}
            height={p.height}
            className="h-9 w-auto object-contain opacity-95 mix-blend-screen"
          />
        ))}
      </div>
    </section>
  );
}
