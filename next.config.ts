import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.freepik.com"],
  },
  output : "export",
  trailingSlash : true,
};

export default nextConfig;
