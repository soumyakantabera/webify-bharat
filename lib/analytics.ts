import { track as vercelTrack } from "@vercel/analytics";

/**
 * Analytics events (content-plan §13): wa_click, estimator_send,
 * prototype_request, flip_open. Sent as Vercel Analytics custom events;
 * a no-op where Vercel Analytics isn't loaded (e.g. GitHub Pages).
 */
export type AnalyticsEvent = "wa_click" | "estimator_send" | "prototype_request" | "flip_open";

export function track(event: AnalyticsEvent, props: Record<string, string | number | boolean | null>) {
  try {
    vercelTrack(event, props);
  } catch {
    /* analytics must never break the page */
  }
}

/** Which path (Launch / Organise / Grow) a URL belongs to, for wa_click. */
export function pathFromUrl(pathname: string) {
  const m = pathname.match(/\/solutions\/(launch|organise|grow)/);
  return m ? m[1] : "none";
}
