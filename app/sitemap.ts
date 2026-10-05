import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { registrations } from "@/lib/registrations";
import { offers } from "@/lib/offers";
import { industries, posts, services } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://webify-bharat.vercel.app";
  const paths = [
    "",
    "/services",
    "/industries",
    "/cities",
    "/work",
    "/pricing",
    "/registrations",
    "/registrations/charges",
    ...registrations.map((item) => `/registrations/${item.slug}`),
    "/about",
    "/blog",
    "/contact",
    "/terms",
    "/privacy",
    "/refund",
    ...offers.map((o) => `/pricing/${o.slug}`),
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
