import type { NextConfig } from "next";
import { fetchRedirects } from "@/sanity/lib/fetchRedirects";

const nextConfig: NextConfig = {
  async redirects() {
    return await fetchRedirects();
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
   logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
