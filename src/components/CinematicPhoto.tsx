import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
};

export function CinematicPhoto({
  src,
  alt,
  className = "",
  objectPosition = "center",
  priority = false,
  sizes = "100vw",
}: Props) {
  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
        sizes={sizes}
      />
    </div>
  );
}
