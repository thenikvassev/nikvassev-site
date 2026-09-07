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
    ];
  },
};

export default nextConfig;
