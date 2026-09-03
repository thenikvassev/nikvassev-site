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
    ];
  },
};

export default nextConfig;
