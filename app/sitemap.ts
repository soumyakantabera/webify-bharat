import type { MetadataRoute } from "next";
import { industries, posts, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://webify-bharat.vercel.app";
  const paths = [
    "",
    "/services",
    "/industries",
    "/work",
    "/pricing",
    "/about",
    "/blog",
    "/contact",
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
