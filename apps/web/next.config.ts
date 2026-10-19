import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Sementara: "/" langsung ke dashboard. Nanti diganti landing page.
      { source: "/", destination: "/dashboard", permanent: false },
    ];
  },
};

export default nextConfig;