import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export function GuideFigure({ src, alt, width, height, caption }: Props) {
  return (
    <figure className="guide-figure">
      <div className="guide-figure-frame">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
