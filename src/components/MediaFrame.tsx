import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  ratio?: "video" | "photo" | "portrait" | "wide";
  className?: string;
  priority?: boolean;
  panel?: boolean;
};

const ratioClass = {
  video: "aspect-video",
  photo: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export function MediaFrame({
  src,
  alt,
  label,
  ratio = "video",
  className = "",
  priority = false,
  panel = false,
}: Props) {
  const isSvg = Boolean(src?.endsWith(".svg"));

  return (
    <figure
      className={`group relative overflow-hidden border border-tan bg-cream ${
        panel ? "rounded-panel" : "rounded-card"
      } ${ratioClass[ratio]} ${className}`}
    >
      {src && isSvg && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="editorial-img h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />
      )}
      {src && !isSvg && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="editorial-img object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 896px, 100vw"
        />
      )}
      {!src && (
        <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
          <p className="font-serif text-lg text-forest">{label ?? alt}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-section text-forest/60">
            Photo slot
          </p>
        </div>
      )}
      {label && src && <figcaption className="sr-only">{label}</figcaption>}
    </figure>
  );
}
