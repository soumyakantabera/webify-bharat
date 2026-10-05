import type { NextConfig } from "next";

/**
 * GitHub Pages only: the site is always a static export (`out/`), served from
 * https://soumyakantabera.github.io/webify-bharat. For a custom domain, set
 * PAGES_BASE_PATH="" and NEXT_PUBLIC_SITE_URL to the domain when building.
 * Retired URLs are static redirect pages (lib/redirects.ts, components/RedirectStub.tsx).
 */
const basePath = process.env.PAGES_BASE_PATH ?? "/webify-bharat";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  ...(basePath ? { assetPrefix: `${basePath}/` } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? `https://soumyakantabera.github.io${basePath}`,
  },
  // GitHub Pages has no image optimizer; images in /public are already sized WebP.
  images: { unoptimized: true },
};

export default nextConfig;
