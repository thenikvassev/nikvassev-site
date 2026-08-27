import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  ratio?: "video" | "photo" | "portrait" | "wide";
  className?: string;
  priority?: boolean;
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
}: Props) {
  const isSvg = Boolean(src?.endsWith(".svg"));

  return (
    <figure
      className={`relative overflow-hidden rounded-card border border-tan/40 bg-cream ${ratioClass[ratio]} ${className}`}
    >
      {src && isSvg && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      )}
      {src && !isSvg && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
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
