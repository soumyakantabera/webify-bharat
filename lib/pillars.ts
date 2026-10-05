import type { PillarSlug } from "@/lib/paths";

/** The four pillars (content-plan §2.0.5). Pillars say *what we do*. */
export type Pillar = {
  slug: PillarSlug;
  name: string;
  product: string;
  oneLine: string;
  inside: string[];
  colour: string;
  icon: string;
  href: string;
  /** Image slot id or existing path for the card/menu header photo. */
  photo: string;
};

export const pillars: Pillar[] = [
  {
    slug: "strategy",
    name: "Strategy",
    product: "Webify Compass",
    oneLine: "Know what to build before you spend.",
    inside: ["Strategy session", "Digital audit", "Tool selection", "Roadmap & budget"],
    colour: "--indigo",
    icon: "Compass",
    href: "/strategy",
    photo: "/images/snapshots/services.webp",
  },
  {
    slug: "systems",
    name: "Systems",
    product: "The 11 blocks",
    oneLine: "Your own software, built to fit.",
    inside: ["Site · Store · Pay", "Chat", "Desk · Team · Workspace", "Ledger · File · Pulse · Connect"],
    colour: "--rani",
    icon: "SquaresFour",
    href: "/systems",
    photo: "IMG-B09",
  },
  {
    slug: "marketing",
    name: "Marketing",
    product: "Webify Reach",
    oneLine: "Get found — on Google, maps, ads and AI.",
    inside: ["SEO", "Ads & SEM", "Local & maps", "AI visibility"],
    colour: "--marigold",
    icon: "Megaphone",
    href: "/marketing",
    photo: "IMG-B01",
  },
  {
    slug: "care",
    name: "Care",
    product: "Webify Care",
    oneLine: "We keep it running and improving.",
    inside: ["Hosting & security", "Backups", "Fixes & change hours", "Support, 7 days"],
    colour: "--peacock",
    icon: "Lifebuoy",
    href: "/pricing#care",
    photo: "IMG-R05",
  },
];

/** §1 #29a — Care is never sold separately. */
export const CARE_LINE = "Your monthly plan keeps it running, secure and improving.";

export function getPillar(slug: string) {
  return pillars.find((p) => p.slug === slug);
}
