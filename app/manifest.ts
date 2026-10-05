import type { MetadataRoute } from "next";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/** Web app manifest (content-plan §17.3 #2): maskable icon on a Blush background. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: asset("/"),
    display: "standalone",
    background_color: "#FBFAF7",
    theme_color: "#2B1E6B",
    icons: [
      { src: asset("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { src: asset("/icon-512.png"), sizes: "512x512", type: "image/png" },
      { src: asset("/icon-maskable-512.png"), sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: asset("/favicon.svg"), type: "image/svg+xml", sizes: "any" },
    ],
  };
}
