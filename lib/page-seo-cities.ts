import { cities, getCity } from "./cities";
import type { PageSeo } from "./page-seo";

const brand = "Webify Bharat";

function page(title: string, description: string, path: string, keywords: string[], crumbs: PageSeo["crumbs"], answer = ""): PageSeo {
  return {
    title: title.includes(brand) ? title : `${title} | ${brand}`,
    description,
    path,
    keywords,
    crumbs: [{ name: "Home", path: "/" }, ...crumbs],
    facts: [],
    answer,
  };
}

export const citiesIndexSeo: PageSeo = page(
  "Cities: custom digital systems for businesses across India",
  `Webify Bharat builds custom websites, stores, payments, WhatsApp systems and CRM/ERP for businesses in ${cities.length} cities across India — from Leh to Port Blair — fully remote over WhatsApp.`,
  "/cities",
  ["custom website India", "small business software India", "website design state capital", "WhatsApp business setup India"],
  [{ name: "Cities", path: "/cities" }],
  "Webify Bharat works fully remote over WhatsApp, so businesses in every city get the same team, process and prices.",
);

export function cityPageSeo(slug: string): PageSeo | null {
  const city = getCity(slug);
  if (!city) return null;
  return page(
    `Custom digital systems for ${city.name} businesses`,
    `Websites, online stores, payments, WhatsApp systems and CRM/ERP built for ${city.name}, ${city.state} businesses — ${city.industries.slice(0, 3).join(", ").toLowerCase()} and more. Fully remote over WhatsApp.`,
    `/cities/${city.slug}`,
    city.keywords,
    [
      { name: "Cities", path: "/cities" },
      { name: city.name, path: `/cities/${city.slug}` },
    ],
    `Webify Bharat builds custom digital systems for ${city.name} businesses, fully remote over WhatsApp.`,
  );
}
