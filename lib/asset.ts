const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public-file path when the site is served from a subpath (GitHub Pages). */
export function asset(path: string) {
  if (!path || /^(https?:|data:|blob:)/.test(path)) return path;
  if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) return path;
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
