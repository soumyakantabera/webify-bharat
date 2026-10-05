import type { BlockSlug } from "@/lib/blocks";
import type { PillarSlug } from "@/lib/paths";

/**
 * Featured trades (content-plan §1 #6, §9.1 #8, §9.2 #5, §9.4 #5).
 * `pain` is how an owner might describe the problem — written as a prompt
 * ("Sound familiar?"), never attributed to a real person.
 */
export type Trade = {
  slug: string;
  name: string;
  /** Fills the §4.2 industry message: "Hi! I run a [waLabel] business…". */
  waLabel: string;
  /** Industry page slug, when one exists. */
  industry?: string;
  icon: string;
  pain: string;
  blocks: BlockSlug[];
  pillars: PillarSlug[];
  photo: string;
  /** "For this business we'd…" (Organise showcase). */
  organise: string[];
  /** Growth moves (Grow showcase). */
  grow: string[];
};

export const trades: Trade[] = [
  {
    slug: "kirana",
    waLabel: "retail / kirana",
    name: "Retail & kirana",
    industry: "retail",
    icon: "Storefront",
    pain: "Regulars order on WhatsApp and half the messages get lost.",
    blocks: ["store", "pay", "chat", "ledger"],
    pillars: ["systems", "marketing"],
    photo: "IMG-I-RET-2",
    organise: ["A repeat-order list your regulars reorder from", "UPI into the business account, with an invoice for each payment", "Orders land in one list, not five chats"],
    grow: ["Home-delivery ordering for regulars", "A second outlet on the same system", "Get found for “kirana near me”"],
  },
  {
    slug: "restaurant",
    waLabel: "restaurant or cloud kitchen",
    name: "Restaurants & cloud kitchens",
    industry: "restaurant",
    icon: "ForkKnife",
    pain: "The apps take a cut even when my regulars order.",
    blocks: ["site", "store", "pay", "chat"],
    pillars: ["systems", "marketing"],
    photo: "IMG-I-RES-2",
    organise: ["A direct-order menu for regulars, alongside the apps", "Table bookings and order status on WhatsApp", "Payments matched to orders automatically"],
    grow: ["Move regulars to direct ordering", "Festival campaigns to opted-in customers", "A dashboard of orders by channel"],
  },
  {
    slug: "clinic",
    waLabel: "clinic",
    name: "Clinics",
    industry: "healthcare",
    icon: "FirstAidKit",
    pain: "No-shows, and phone tag with patients all morning.",
    blocks: ["site", "chat", "pay", "desk"],
    pillars: ["systems", "care"],
    photo: "IMG-I-CLI-2",
    organise: ["Online slots with WhatsApp reminders", "Consultation fee at booking, refunds if the slot moves", "Patient follow-ups in one place"],
    grow: ["A second branch with its own schedule", "Staff logins that see only their branch", "Be found for “clinic near me”"],
  },
  {
    slug: "coaching",
    waLabel: "coaching / education",
    name: "Coaching & education",
    industry: "education",
    icon: "GraduationCap",
    pain: "Enquiries in five notebooks, and fees chased by hand.",
    blocks: ["site", "desk", "pay", "chat"],
    pillars: ["systems", "marketing"],
    photo: "IMG-I-EDU-2",
    organise: ["An admissions pipeline from enquiry to enrolled", "Fee instalments with automatic reminders", "Class updates to parents on WhatsApp"],
    grow: ["New batches and centres on one system", "Ads that bring admission enquiries", "A dashboard of enquiries and fees due"],
  },
  {
    slug: "manufacturer",
    waLabel: "manufacturing or trading",
    name: "Manufacturers & traders",
    industry: "manufacturing",
    icon: "Factory",
    pain: "Dealer orders come by phone; dispatch runs on memory.",
    blocks: ["store", "desk", "ledger", "connect"],
    pillars: ["strategy", "systems"],
    photo: "IMG-I-MFG-2",
    organise: ["A dealer portal with each dealer's price tier", "Orders, production and dispatch on one board", "Invoices that flow into Tally"],
    grow: ["New dealers onboarded without phone calls", "Sell abroad with international payments", "Integrations with Tally, Zoho and Shiprocket"],
  },
  {
    slug: "exporter",
    waLabel: "export",
    name: "Exporters",
    industry: "exporters",
    icon: "Boat",
    pain: "Buyers abroad want to pay by card, not by bank transfer.",
    blocks: ["site", "pay", "file"],
    pillars: ["systems", "strategy"],
    photo: "IMG-I-EXP-1",
    organise: ["A catalogue buyers abroad can read", "Card payments through Stripe", "IEC filed; UK VAT / EU IOSS through a registered agent"],
    grow: ["Multi-currency checkout", "Enquiries that reach you in their time zone", "Search and ads in new markets"],
  },
  {
    slug: "real-estate",
    waLabel: "real estate",
    name: "Real estate",
    industry: "real-estate",
    icon: "Buildings",
    pain: "Site visits get booked, then the follow-ups slip.",
    blocks: ["site", "chat", "desk"],
    pillars: ["systems", "marketing"],
    photo: "IMG-I-RE-2",
    organise: ["Site-visit booking on WhatsApp", "Every buyer's follow-ups in one tracker", "Project pages buyers can share"],
    grow: ["Local ads for each project", "A pipeline per project and agent", "Maps and listings kept consistent"],
  },
  {
    slug: "office",
    waLabel: "office-based",
    name: "Office & team",
    icon: "UsersThree",
    pain: "Staff on personal Gmail; files everywhere; nobody knows who has access.",
    blocks: ["team", "workspace", "desk"],
    pillars: ["systems", "care"],
    photo: "IMG-B11",
    organise: ["Business email and shared drives for the team", "A staff portal with role-based access", "Tasks and leave in one place"],
    grow: ["Onboard new staff in minutes", "Access removed the day someone leaves", "One dashboard for the owner"],
  },
];

/** Tabs used by the Organise and Grow showcases (§9.2 #5). */
export const SHOWCASE_TRADES = ["kirana", "clinic", "restaurant", "manufacturer", "coaching"];

export function getTrade(slug: string) {
  return trades.find((t) => t.slug === slug);
}
