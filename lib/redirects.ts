/**
 * Redirects for retired URLs (content-plan §9.0). GitHub Pages has no
 * server-side redirects, so each source has a static stub page
 * (components/RedirectStub.tsx) that forwards to the destination.
 */
export const REDIRECTS: { source: string; destination: string }[] = [
  { source: "/services", destination: "/systems" },
  { source: "/services/websites", destination: "/systems/site" },
  { source: "/services/ecommerce", destination: "/systems/store" },
  { source: "/services/payments", destination: "/systems/pay" },
  { source: "/services/whatsapp", destination: "/systems/chat" },
  { source: "/services/analytics", destination: "/systems/pulse" },
  { source: "/services/compliance", destination: "/systems/ledger" },
  { source: "/work", destination: "/prototypes" },
  { source: "/solutions/build", destination: "/solutions/organise" },
  { source: "/how-we-build", destination: "/how-we-work" },
  { source: "/pricing/launch", destination: "/pricing/starter" },
  { source: "/pricing/growth", destination: "/pricing/business" },
  // Retired e-commerce add-on pages (replaced by the add-ons on /pricing).
  { source: "/pricing/small", destination: "/pricing" },
  { source: "/pricing/medium", destination: "/pricing" },
  { source: "/pricing/expanding", destination: "/pricing" },
];

export function redirectFor(source: string) {
  return REDIRECTS.find((r) => r.source === source)?.destination;
}

/** Old slugs under a prefix, e.g. oldSlugs("/services/") → ["websites", …]. */
export function oldSlugs(prefix: string) {
  return REDIRECTS.filter((r) => r.source.startsWith(prefix)).map((r) => r.source.slice(prefix.length));
}
