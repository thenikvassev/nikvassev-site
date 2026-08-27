import Image from "next/image";

export type LogoItem = {
  src: string;
  alt: string;
};

type Props = {
  label: string;
  logos: readonly LogoItem[];
  invert?: boolean;
};

export function LogoRow({ label, logos, invert = false }: Props) {
  return (
    <section
      className={`overflow-x-hidden ${invert ? "bg-forest-dark" : "bg-cream"}`}
      aria-label={label}
    >
      <div className="mx-auto max-w-content px-5 py-7 md:px-8 md:py-9">
        <p
          className={`mb-5 text-center text-[11px] font-semibold uppercase tracking-section ${
            invert ? "text-white/50" : "text-forest"
          }`}
        >
          {label}
        </p>
        <ul className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-5 md:grid-cols-4 md:gap-x-8 md:gap-y-6">
          {logos.map((logo) => (
            <li
              key={logo.src}
              className="flex h-11 w-full min-w-0 items-center justify-center px-1 md:h-14"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={64}
                className={`h-9 w-auto max-h-9 max-w-full object-contain md:h-11 md:max-h-11 ${
                  invert ? "brightness-0 invert" : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
