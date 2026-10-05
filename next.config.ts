import type { NextConfig } from "next";
import { REDIRECTS } from "./lib/redirects";

const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? "/webify-bharat" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Gzip text responses when this app is served by `next start`.
  // On Vercel the edge already sends Brotli or gzip, so this does not
  // double-compress production HTML, CSS, or JS.
  compress: true,
  ...(pages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: pages,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90, 95],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

if (!pages) {
  // 301s for retired URLs (content-plan §9.0). The static export uses stub pages instead.
  nextConfig.redirects = async () => REDIRECTS.map((r) => ({ ...r, statusCode: 301 as const }));

  nextConfig.headers = async () => [
    {
      source: "/fonts/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/images/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ];
}

export default nextConfig;
