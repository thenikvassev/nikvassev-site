import Image from "next/image";

type Props = {
  images: readonly string[];
  alt: string;
};

/** One photo per timeline year — no carousel. */
export function TimelineEntryMedia({ images, alt }: Props) {
  const src = images[0];
  if (!src) return null;

  return (
    <div className="relative w-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-card">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 248px, 216px"
        />
      </div>
    </div>
  );
}
