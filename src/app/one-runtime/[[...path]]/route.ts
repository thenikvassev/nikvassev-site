import { NextResponse } from "next/server";

// Obsolete One/MobX runtime files from a previous deploy. Nothing in this
// app links to them. Answer Gone so crawlers drop the URLs.
export function GET() {
  return new NextResponse("Gone\n", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
