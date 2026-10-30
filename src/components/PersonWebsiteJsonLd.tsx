import personWebsite from "@/lib/seo/person-website.json";
import { jsonLd } from "@/lib/json-ld";

export function PersonWebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(personWebsite) }}
    />
  );
}
