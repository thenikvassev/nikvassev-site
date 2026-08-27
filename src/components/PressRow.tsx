import Image from "next/image";
import { pressLogos } from "@/lib/site";

type Props = {
  invert?: boolean;
};

export function PressRow({ invert = false }: Props) {
  return (
    <div className={invert ? "bg-forest-dark" : "bg-forest"}>
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-8 gap-y-4 px-5 py-6 md:px-8">
        <p
          className={`w-full text-center text-[11px] font-semibold uppercase tracking-section ${
            invert ? "text-white/50" : "text-white/60"
          }`}
        >
          As seen in
        </p>
        {pressLogos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={140}
            height={44}
            className="h-8 w-auto object-contain opacity-90 md:h-10"
          />
        ))}
      </div>
    </div>
  );
}
