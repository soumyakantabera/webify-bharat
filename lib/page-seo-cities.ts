import { getCity } from "./cities";
import type { PageSeo } from "./page-seo";

const brand = "Webify Bharat";

function page(
  title: string,
  description: string,
  path: string,
  keywords: string[],
  crumbs: PageSeo["crumbs"],
  facts: PageSeo["facts"],
  answer = "",
): PageSeo {
  return {
    title: title.includes(brand) ? title : `${title} | ${brand}`,
    description,
    path,
    keywords,
    crumbs: [{ name: "Home", path: "/" }, ...crumbs],
    facts,
    answer,
  };
}

export const citiesIndexSeo: PageSeo = page(
  "City digital systems for every Indian state capital | Webify Bharat",
  "Websites, WhatsApp and UPI for MSMEs in Mumbai, Bengaluru, Delhi, Chennai, Hyderabad, Kolkata and every state capital — own customers, cut Amazon/Flipkart and aggregator fee dependence.",
  "/cities",
  [
    "website design state capital India",
    "MSME digital city India",
    "cloud kitchen website India",
    "ecommerce without marketplace fees",
  ],
  [{ name: "Cities", path: "/cities" }],
  [
    { term: "Coverage", value: "State capitals + major UTs across India" },
    { term: "Focus", value: "Owned site, WhatsApp, UPI vs marketplace rent" },
    { term: "F&B", value: "Cloud kitchen and multi-outlet direct ordering" },
    { term: "Retail", value: "Catalogue and local SEO without only Amazon/Flipkart" },
  ],
  "Webify Bharat publishes city pages for Indian state capitals so local MSMEs can own websites, WhatsApp and UPI — reducing dependence on Amazon, Flipkart, food aggregators and directory lead packs.",
);

export function cityPageSeo(slug: string): PageSeo | null {
  const city = getCity(slug);
  if (!city) return null;
  return page(
    `${city.name} website, WhatsApp & UPI for MSMEs | ${city.state}`,
    city.lead.slice(0, 155),
    `/cities/${city.slug}`,
    city.keywords,
    [
      { name: "Cities", path: "/cities" },
      { name: city.name, path: `/cities/${city.slug}` },
    ],
    [
      { term: "City", value: `${city.name}, ${city.state}` },
      { term: "Industries", value: city.industries.slice(0, 3).join(", ") },
      { term: "Pain", value: "Marketplace fees, aggregator commission, directory leads" },
      { term: "Stack", value: city.stack.slice(0, 3).join(" · ") },
    ],
    city.answer,
  );
}
