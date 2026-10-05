import { WA_MSG } from "@/lib/wa";

/** The three paths (content-plan §2.3). Paths say *where you are*. */
export type PathSlug = "launch" | "organise" | "grow";
export type PillarSlug = "strategy" | "systems" | "marketing" | "care";

export type Path = {
  slug: PathSlug;
  name: string;
  /** CSS custom property, e.g. "--path-launch". */
  colour: string;
  icon: string;
  href: string;
  oneLine: string;
  forYouIf: string;
  outcomes: string[];
  pillars: PillarSlug[];
  cta: string;
  waMessage: string;
  suggestedTier: "starter" | "business" | "command";
  /** Image slot id. */
  photo: string;
};

export const paths: Path[] = [
  {
    slug: "launch",
    name: "Launch",
    colour: "--path-launch",
    icon: "RocketLaunch",
    href: "/solutions/launch",
    oneLine: "Deploy a new business from scratch.",
    forYouIf: "You have a new business or idea and nothing is set up yet.",
    outcomes: [
      "Registrations, brand basics and domain sorted",
      "Website or store, payments and WhatsApp live",
      "Invoicing from day one",
    ],
    pillars: ["strategy", "systems", "marketing", "care"],
    cta: "Launch my business",
    waMessage: WA_MSG.launch,
    suggestedTier: "starter",
    photo: "IMG-P02",
  },
  {
    slug: "organise",
    name: "Organise",
    colour: "--path-organise",
    icon: "Kanban",
    href: "/solutions/organise",
    oneLine: "A custom system for a running business.",
    forYouIf: "Your business runs on a personal QR, WhatsApp chaos, Excel and directory listings.",
    outcomes: [
      "We map how you actually work",
      "One custom system built around it",
      "Your existing tools connected, not replaced",
    ],
    pillars: ["strategy", "systems", "care"],
    cta: "Organise my business",
    waMessage: WA_MSG.organise,
    suggestedTier: "business",
    photo: "IMG-P01",
  },
  {
    slug: "grow",
    name: "Grow",
    colour: "--path-grow",
    icon: "TrendUp",
    href: "/solutions/grow",
    oneLine: "Build up and scale what already sells.",
    forYouIf: "You're already online and selling, and want more — with less leaking out.",
    outcomes: [
      "Direct ordering, dealer portals and international payments",
      "Automation, dashboards and integrations",
      "Get found on Google, maps, ads and AI",
    ],
    pillars: ["marketing", "systems", "strategy"],
    cta: "Help me grow",
    waMessage: WA_MSG.grow,
    suggestedTier: "command",
    photo: "IMG-P03",
  },
];

export function getPath(slug: string) {
  return paths.find((p) => p.slug === slug);
}
