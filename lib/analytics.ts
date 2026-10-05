/**
 * Analytics events (content-plan §13): wa_click, estimator_send,
 * prototype_request, flip_open. GitHub Pages has no analytics backend, so
 * events are pushed to `window.dataLayer` (ready for Google Analytics / Tag
 * Manager if you add it later) and dispatched as a `wb:track` DOM event.
 */
export type AnalyticsEvent = "wa_click" | "estimator_send" | "prototype_request" | "flip_open";

export function track(event: AnalyticsEvent, props: Record<string, string | number | boolean | null>) {
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    (w.dataLayer ??= []).push({ event, ...props });
    window.dispatchEvent(new CustomEvent("wb:track", { detail: { event, props } }));
  } catch {
    /* analytics must never break the page */
  }
}

/** Which path (Launch / Organise / Grow) a URL belongs to, for wa_click. */
export function pathFromUrl(pathname: string) {
  const m = pathname.match(/\/solutions\/(launch|organise|grow)/);
  return m ? m[1] : "none";
}
