import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
