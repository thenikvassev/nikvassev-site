import personWebsite from "@/lib/seo/person-website.json";

export function PersonWebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personWebsite) }}
    />
  );
}
