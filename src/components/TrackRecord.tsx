import Image from "next/image";
import { trackRecordLogos } from "@/lib/site";

export function TrackRecord() {
  return (
    <section
      className="nv nv-clients"
      aria-labelledby="track-record-heading"
    >
      <p className="nv-eyebrow">TRACK RECORD</p>
      <h2 id="track-record-heading">Clients &amp; Partners I&apos;ve Worked With</h2>
      <ul className="nv-logo-grid">
        {trackRecordLogos.map((logo) => (
          <li key={logo.src}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={220}
              height={64}
              unoptimized={logo.src.endsWith(".svg")}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
