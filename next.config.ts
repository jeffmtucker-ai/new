import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nyc-marketing-company-service-areas",
        destination: "/areas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
