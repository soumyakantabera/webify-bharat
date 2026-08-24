import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { industries, posts, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://webify-bharat.vercel.app";
  const paths = [
    "",
    "/services",
    "/industries",
    "/cities",
    "/work",
    "/pricing",
    "/about",
    "/blog",
    "/contact",
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...cities.map((c) => `/cities/${c.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
