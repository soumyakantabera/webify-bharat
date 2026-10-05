/**
 * The live site address (GitHub Pages). Used for canonical URLs, the sitemap,
 * structured data and llms.txt. Override with NEXT_PUBLIC_SITE_URL (and
 * PAGES_BASE_PATH="" in next.config.ts) if you move to a custom domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://soumyakantabera.github.io/webify-bharat").replace(/\/$/, "");

/** Host and path without the scheme, for print and email ("soumyakantabera.github.io/webify-bharat"). */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");
