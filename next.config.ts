import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubPages ? '/braakhuis-fysiotherapie' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
