/** Map low-res blog thumbnails to full-resolution service illustrations. */
const HD_MAP: Record<string, string> = {
  "/images/blog/website.png": "/images/services/website.png",
  "/images/blog/payments.png": "/images/services/payments.png",
  "/images/blog/whatsapp.png": "/images/services/whatsapp.png",
  "/images/blog/analytics.png": "/images/services/analytics.png",
  "/images/blog/gst.png": "/images/services/compliance.png",
  "/images/blog/growth.png": "/images/services/ecommerce.png",
};

/** Prefer HD source when available (blog thumbs were ~60KB; services are ~1MB). */
export function hdSrc(src: string): string {
  return HD_MAP[src] ?? src;
}
