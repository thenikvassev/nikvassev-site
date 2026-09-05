import Image from "next/image";

type ResultCard = {
  signed: string;
  label: string;
};

const results: ResultCard[] = [
  {
    signed: "−32%",
    label: "Less anxiety",
  },
  {
    signed: "−24%",
    label: "Less depressive symptoms",
  },
  {
    signed: "+52%",
    label: "Pain relief",
  },
  {
    signed: "+12%",
    label: "Higher quality of life",
  },
];

const partners = [
  { src: "/logos/harvard-wordmark.png", alt: "Harvard University", width: 646, height: 179 },
  { src: "/logos/calgary-wordmark.png", alt: "University of Calgary", width: 609, height: 184 },
  { src: "/logos/penn-medicine.png", alt: "Penn Medicine", width: 1027, height: 181 },
];

function SignedPill({ value }: { value: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border border-forest/15 bg-forest/5 px-4 py-1.5 font-serif text-2xl tracking-display text-forest-dark md:px-5 md:py-2 md:text-3xl"
      aria-hidden
    >
      {value}
    </span>
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
            className="relative flex min-h-[140px] flex-col justify-between rounded-card bg-cream px-4 py-5"
          >
            <p className="text-sm font-medium leading-snug text-forest">{r.label}</p>
            <div className="mt-4 flex justify-end">
              <SignedPill value={r.signed} />
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
            className="h-10 w-auto object-contain opacity-95 md:h-12"
            sizes="(min-width: 768px) 180px, 140px"
          />
        ))}
      </div>
    </section>
  );
}
