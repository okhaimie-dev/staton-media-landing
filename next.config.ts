import type { NextConfig } from "next";

// GitHub Pages serves this project from a repository subpath,
// e.g. https://okhaimie-dev.github.io/staton-media-landing/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
