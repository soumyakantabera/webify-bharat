import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { cities } from "@/lib/cities";
import { registrations } from "@/lib/registrations";
import { blocks } from "@/lib/blocks";
import { stages } from "@/lib/offers";
import { reachServices } from "@/lib/reach";
import { industryPages } from "@/lib/industries";
import { publishedPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const paths = [
    "",
    "/what-we-do",
    "/solutions/launch",
    "/solutions/organise",
    "/solutions/grow",
    "/how-we-work",
    "/systems",
    "/industries",
    "/cities",
    "/prototypes",
    "/pricing",
    "/registrations",
    "/registrations/charges",
    ...registrations.map((item) => `/registrations/${item.slug}`),
    "/about",
    "/blog",
    "/contact",
    "/faq",
    "/terms",
    "/privacy",
    "/refund",
    ...stages.map((s) => `/pricing/${s.slug}`),
    ...blocks.map((b) => `/systems/${b.slug}`),
    "/strategy",
    "/marketing",
    ...reachServices.map((r) => `/marketing/${r.slug}`),
    "/integrations",
    ...industryPages.map((i) => `/industries/${i.slug}`),
    ...cities.map((c) => `/cities/${c.slug}`),
    ...publishedPosts.map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
