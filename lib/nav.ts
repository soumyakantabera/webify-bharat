import { BLOCK_GROUPS, getBlock } from "@/lib/blocks";
import { paths } from "@/lib/paths";
import { pillars } from "@/lib/pillars";
import { reachServices } from "@/lib/reach";

/**
 * Navigation structure for the global header, mobile sheet, dock and footer
 * (content-plan §7, §8). Pure data: icons are Phosphor names.
 */

export type NavLink = { href: string; label: string; icon?: string; desc?: string };

/** Featured trades (§1 #6, §9.8). `exporters` is built in Phase 4. */
export const FEATURED_TRADES: NavLink[] = [
  { href: "/industries/retail", label: "Retail & kirana", icon: "Storefront" },
  { href: "/industries/restaurant", label: "Restaurants & cloud kitchens", icon: "ForkKnife" },
  { href: "/industries/healthcare", label: "Clinics", icon: "FirstAidKit" },
  { href: "/industries/education", label: "Coaching & education", icon: "GraduationCap" },
  { href: "/industries/manufacturing", label: "Manufacturers & traders", icon: "Factory" },
  { href: "/industries/exporters", label: "Exporters", icon: "Boat" },
  { href: "/industries/real-estate", label: "Real estate", icon: "Buildings" },
];

export const TOP_CITIES: NavLink[] = [
  { href: "/cities/mumbai", label: "Mumbai" },
  { href: "/cities/delhi", label: "Delhi" },
  { href: "/cities/bengaluru", label: "Bengaluru" },
  { href: "/cities/kolkata", label: "Kolkata" },
  { href: "/cities/chennai", label: "Chennai" },
  { href: "/cities/hyderabad", label: "Hyderabad" },
  { href: "/cities/ahmedabad", label: "Ahmedabad" },
  { href: "/cities/jaipur", label: "Jaipur" },
  { href: "/cities/lucknow", label: "Lucknow" },
  { href: "/cities/patna", label: "Patna" },
];

export const WHAT_WE_DO = pillars.map((p) => {
  let groups: { label?: string; links: NavLink[] }[];
  if (p.slug === "strategy") {
    groups = [{ links: [
      { href: "/strategy", label: "Compass Session" },
      { href: "/strategy", label: "Compass Audit" },
      { href: "/strategy", label: "Compass Roadmap" },
    ] }];
  } else if (p.slug === "systems") {
    groups = BLOCK_GROUPS.map((g) => ({
      label: g.label,
      links: g.slugs.map((s) => {
        const b = getBlock(s)!;
        return { href: `/systems/${b.slug}`, label: b.short, icon: b.icon };
      }),
    }));
  } else if (p.slug === "marketing") {
    groups = [{ links: reachServices.map((r) => ({ href: `/marketing/${r.slug}`, label: r.short, icon: r.icon })) }];
  } else {
    groups = [{ links: [{ href: "/pricing#care", label: "What's included" }] }];
  }
  return { ...p, groups };
});

export const WORKS_WITH_STRIP = { text: "Works with Zoho · Odoo · Tally · Google · Microsoft", href: "/integrations" };

export const WHO_FOR = {
  paths: paths.map((p) => ({ href: p.href, label: p.name, desc: p.oneLine, icon: p.icon, colour: p.colour })),
  trades: FEATURED_TRADES,
  anyOther: { href: "/industries", label: "Any other business → we build for it too" },
  cities: TOP_CITIES.slice(0, 8),
  allCities: { href: "/cities", label: "All 33 cities →" },
};

export const RESOURCES: NavLink[] = [
  { href: "/integrations", label: "Integrations", icon: "PlugsConnected" },
  { href: "/blog", label: "Blog", icon: "BookOpen" },
  { href: "/registrations", label: "Registrations", icon: "Stamp" },
  { href: "/faq", label: "FAQ", icon: "Question" },
  { href: "/pricing#rent-vs-own", label: "Commission calculator", icon: "Calculator" },
  { href: "/about", label: "About", icon: "HandHeart" },
];

/** Plain links in the main nav (between the menus). */
export const MAIN_LINKS: NavLink[] = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/prototypes", label: "Prototypes" },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  { title: "What we do", links: pillars.map((p) => ({ href: p.href, label: p.name })) },
  {
    title: "Solutions",
    links: [...paths.map((p) => ({ href: p.href, label: p.name })), { href: "/how-we-work", label: "How we work" }],
  },
  {
    title: "Systems",
    links: [
      ...["site", "store", "pay", "chat", "desk", "team", "workspace", "ledger", "file", "pulse", "connect"].map((s) => {
        const b = getBlock(s)!;
        return { href: `/systems/${b.slug}`, label: b.short };
      }),
      { href: "/integrations", label: "Integrations" },
    ],
  },
  { title: "Marketing", links: reachServices.map((r) => ({ href: `/marketing/${r.slug}`, label: r.short })) },
  {
    title: "Industries",
    links: [...FEATURED_TRADES.slice(0, 6).map((t) => ({ href: t.href, label: t.label })), { href: "/industries", label: "All industries" }],
  },
  {
    title: "Cities",
    links: [{ href: "/cities", label: "Pan-India, remote" }, ...TOP_CITIES, { href: "/cities", label: "All cities" }],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/prototypes", label: "Prototypes" },
      { href: "/pricing", label: "Pricing" },
      { href: "/registrations", label: "Registrations" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy" },
      { href: "/refund", label: "Refund" },
    ],
  },
];
