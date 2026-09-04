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
    ];
  },
};

export default nextConfig;
