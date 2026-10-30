import type { NextConfig } from "next";

/**
 * Report-only until it has been watched on real traffic.
 * Built from what this site actually loads:
 * - Next.js inline bootstrap and self-hosted next/font files
 * - GA4 via @next/third-parties (gtag.js), production only
 * - YouTube embeds on project pages
 * - Browser newsletter client calls to api.nitrosend.com
 * - Cloudflare Turnstile, loaded by the in-flight newsletter rewrite
 * 'unsafe-inline' is required for the Next.js bootstrap and the GA init
 * snippet. A nonce policy needs per-request middleware and is not set here.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://stats.g.doubleclick.net",
  "font-src 'self'",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://api.nitrosend.com https://challenges.cloudflare.com",
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://challenges.cloudflare.com",
  "worker-src 'none'",
  "manifest-src 'self'",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Content-Security-Policy-Report-Only",
    value: contentSecurityPolicy,
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Keep SVG out of the image optimizer. Default is already false.
    dangerouslyAllowSVG: false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/me",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/about#projects",
        permanent: true,
      },
      {
        source: "/humanizer",
        destination:
          "/resources/how-to-make-ai-writing-sound-human-skill-included",
        permanent: true,
      },
      {
        source: "/how-to-configure-an-ai-sales-agent-guide",
        destination: "/resources/how-to-configure-an-ai-sales-agent-guide",
        permanent: true,
      },
      {
        source: "/resources/systems-over-hustle",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/resources/brand-before-channels",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/resources/ai-agents",
        destination: "/resources/how-to-build-your-ai-agent-workforce",
        permanent: true,
      },
      {
        source: "/resources/distribution-engine",
        destination:
          "/resources/build-a-distribution-engine-the-ultimate-marketing-guide-for-founders",
        permanent: true,
      },
      {
        source: "/resources/brand-dna",
        destination:
          "/resources/build-an-iconic-brand-the-brand-strategy-guide-for-founders",
        permanent: true,
      },
      {
        source: "/resources/iconic-brand",
        destination:
          "/resources/build-an-iconic-brand-the-brand-strategy-guide-for-founders",
        permanent: true,
      },
      {
        source: "/resources/brand-strategy-guide",
        destination:
          "/resources/build-an-iconic-brand-the-brand-strategy-guide-for-founders",
        permanent: true,
      },
      {
        source: "/photos/guides/guide-01-ai-agents.webp",
        destination: "/photos/guides/guide-01-ai-agents.png",
        permanent: true,
      },
      {
        source: "/photos/guides/guide-01-ai-agents.jpg",
        destination: "/photos/guides/guide-01-ai-agents.png",
        permanent: true,
      },
      {
        source: "/photos/guides/guide-03-brand-strategy.webp",
        destination: "/photos/guides/guide-03-brand-strategy.png",
        permanent: true,
      },
      {
        source: "/photos/guides/guide-03-brand-strategy.jpg",
        destination: "/photos/guides/guide-03-brand-strategy.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
