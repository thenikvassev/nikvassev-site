import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
};

export function CinematicPhoto({
  src,
  alt,
  className = "",
  objectPosition = "center",
  priority = false,
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
        sizes="100vw"
      />
    </div>
  );
}
