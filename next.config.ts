import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ['github.com', "images.unsplash.com", "plus.unsplash.com"],
  },
};

export default nextConfig;
