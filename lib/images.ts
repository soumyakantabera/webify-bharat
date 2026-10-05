/**
 * Image slot registry (content-plan §16.3, §17.1, §17.2, §17.2a).
 *
 * Every `IMG-*` id used in the plan resolves here. At launch the site runs in
 * photo-only mode: each slot points at an existing photo in /public/images
 * with a crop (object-position) and an optional treatment. When a generated
 * image is added later, set `later` and flip `status` to "upgraded"; nothing
 * else changes.
 */

export type Treatment = "duotone" | "blur" | "none";

export type SlotSource =
  | { kind: "photo"; src: string; crop: string; treatment?: Treatment; zoom?: number }
  | { kind: "svg"; component: string };

export type ImageSlot = {
  id: string;
  /** What renders at launch. */
  now: SlotSource;
  /** Optional SVG scene used when IMAGE_MODE is "mixed" (§17.2). */
  scene?: string;
  /** /images/v2/<id>.webp once a generated image exists. */
  later?: string;
  status: "launch" | "upgraded";
  alt: string;
  /** Optional floating UI sticker suggested by the plan for this slot. */
  sticker?: string;
};

/** §17.2a — photo-only mode is the default for now. */
export const IMAGE_MODE: "photo" | "mixed" = "photo";

const S = "/images/snapshots";
const R = "/images/real";

/** `zoom` scales the photo around its crop point — used to push signage out of frame (§17.2). */
function photo(src: string, crop: string, treatment: Treatment = "none", zoom?: number): SlotSource {
  return { kind: "photo", src, crop, treatment, zoom };
}

const slotList: ImageSlot[] = [
  // Home hero
  { id: "IMG-H01", now: photo(`${R}/payments.webp`, "40% 55%"), status: "launch", alt: "Shop owner taking a UPI payment at the counter" },
  { id: "IMG-H02", now: photo(`${R}/restaurant.webp`, "60% 50%"), status: "launch", alt: "Kitchen team packing food orders" },
  { id: "IMG-H03", now: photo(`${R}/healthcare.webp`, "30% 70%"), status: "launch", alt: "Clinic reception desk" },
  { id: "IMG-H04", now: photo(`${R}/ecommerce.webp`, "50% 65%"), status: "launch", alt: "Hands packing parcels for dispatch" },
  { id: "IMG-H05", now: photo(`${R}/manufacturing.webp`, "50% 50%"), status: "launch", alt: "Small factory floor" },

  // Paths
  { id: "IMG-P01", now: photo(`${S}/market-counter.webp`, "50% 50%"), status: "launch", alt: "A busy shop counter" },
  { id: "IMG-P02", now: photo(`${S}/services.webp`, "45% 50%"), status: "launch", alt: "A new founder planning their business" },
  { id: "IMG-P03", now: photo(`${S}/market-grain.webp`, "50% 60%"), status: "launch", alt: "Sacks of grain ready to move" },

  // Blocks
  { id: "IMG-B01", now: photo(`${S}/cities.webp`, "50% 40%"), status: "launch", alt: "Person searching on a phone in a city lane" },
  { id: "IMG-B02", now: photo(`${R}/ecommerce.webp`, "70% 70%"), status: "launch", alt: "Products packed for online orders" },
  { id: "IMG-B03", now: photo(`${R}/retail.webp`, "75% 55%", "none", 1.6), status: "launch", alt: "Shopkeeper handing over a paid order" },
  { id: "IMG-B04", now: photo(`${R}/whatsapp.webp`, "40% 50%"), status: "launch", alt: "Owner replying to customers on WhatsApp" },
  { id: "IMG-B05", now: photo(`${R}/business-owner.webp`, "75% 60%", "none", 1.6), status: "launch", alt: "Business owner checking numbers" },
  { id: "IMG-B06", now: photo(`${S}/pricing.webp`, "50% 60%"), status: "launch", alt: "Invoices and accounts on a desk" },
  { id: "IMG-B07", now: photo(`${S}/legal.webp`, "50% 55%"), status: "launch", alt: "Registration documents being prepared" },
  { id: "IMG-B08", now: photo(`${S}/registrations.webp`, "60% 50%"), scene: "ConnectScene", status: "launch", alt: "Accounts and laptop side by side", sticker: "Tally ⇄ Zoho synced ✅" },
  { id: "IMG-B09", now: photo(`${S}/work.webp`, "50% 45%"), status: "launch", alt: "Team planning on a wall of sticky notes" },
  { id: "IMG-B10", now: photo(`${R}/education.webp`, "60% 60%"), status: "launch", alt: "Staff working at a desk" },
  { id: "IMG-B11", now: photo(`${S}/contact.webp`, "50% 50%"), status: "launch", alt: "Small office team at work" },

  // Industries (-1 hero, -2 secondary)
  { id: "IMG-I-RET-1", now: photo(`${S}/market-electronics.webp`, "50% 50%"), status: "launch", alt: "Electronics shop shelves" },
  { id: "IMG-I-RET-2", now: photo(`${R}/retail.webp`, "62% 55%", "none", 1.6), status: "launch", alt: "Kirana store counter" },
  { id: "IMG-I-RES-1", now: photo(`${R}/restaurant.webp`, "20% 50%"), status: "launch", alt: "Restaurant kitchen" },
  { id: "IMG-I-RES-2", now: photo(`${S}/market-spice.webp`, "50% 50%"), status: "launch", alt: "Spices in a market" },
  { id: "IMG-I-CLI-1", now: photo(`${R}/healthcare.webp`, "70% 50%"), status: "launch", alt: "Clinic consultation room" },
  { id: "IMG-I-CLI-2", now: photo(`${R}/healthcare.webp`, "78% 70%", "none", 1.6), scene: "ClinicScene", status: "launch", alt: "Clinic front desk" },
  { id: "IMG-I-EDU-1", now: photo(`${R}/education.webp`, "30% 50%"), status: "launch", alt: "Coaching classroom" },
  { id: "IMG-I-EDU-2", now: photo(`${S}/blog.webp`, "50% 50%"), status: "launch", alt: "Notebook and study material" },
  { id: "IMG-I-MFG-1", now: photo(`${R}/manufacturing.webp`, "30% 50%"), status: "launch", alt: "Machines in a workshop" },
  { id: "IMG-I-MFG-2", now: photo(`${S}/market-grain.webp`, "70% 50%"), status: "launch", alt: "Bulk goods in sacks" },
  { id: "IMG-I-EXP-1", now: photo(`${S}/market-textile.webp`, "50% 50%"), status: "launch", alt: "Textiles stacked for export" },
  { id: "IMG-I-EXP-2", now: photo(`${R}/ecommerce.webp`, "20% 70%"), scene: "ExportScene", status: "launch", alt: "Boxes ready to ship abroad" },
  { id: "IMG-I-RE-1", now: photo(`${R}/real-estate.webp`, "68% 55%"), status: "launch", alt: "Property site visit" },
  { id: "IMG-I-RE-2", now: photo(`${R}/real-estate.webp`, "88% 80%", "none", 1.6), scene: "PropertyScene", status: "launch", alt: "Apartment building exterior" },

  // Process / road
  { id: "IMG-R01", now: photo(`${S}/contact.webp`, "30% 50%"), status: "launch", alt: "Discovery chat over the phone" },
  { id: "IMG-R03", now: photo(`${R}/analytics-review.webp`, "50% 50%"), status: "launch", alt: "Reviewing a design on screen" },
  { id: "IMG-R04", now: photo(`${R}/growth-success.webp`, "50% 50%"), status: "launch", alt: "Launch day celebration" },
  { id: "IMG-R05", now: photo(`${R}/whatsapp.webp`, "70% 40%"), status: "launch", alt: "Support reply on WhatsApp" },

  // Misc
  { id: "IMG-N01", now: photo(`${S}/registrations.webp`, "40% 55%"), scene: "BahiKhataScene", status: "launch", alt: "Ledger book beside a laptop", sticker: "Ledger synced ✅" },
  { id: "IMG-A01", now: photo(`${S}/work.webp`, "70% 50%"), scene: "DeskFlatLay", status: "launch", alt: "Desk with planning notes" },
  { id: "IMG-A02", now: photo(`${S}/blog.webp`, "55% 60%"), scene: "WireframeSketch", status: "launch", alt: "Notebook with sketches" },
  { id: "IMG-A03", now: photo(`${S}/cities.webp`, "50% 50%", "duotone"), scene: "KolkataSkyline", status: "launch", alt: "City street in Kolkata" },

  // Regions (duotone in region colour)
  { id: "IMG-C01", now: photo(`${S}/market-grain.webp`, "50% 50%", "duotone"), status: "launch", alt: "Grain market, North India" },
  { id: "IMG-C02", now: photo(`${S}/market-flower.webp`, "50% 50%", "duotone"), status: "launch", alt: "Flower market, South India" },
  { id: "IMG-C03", now: photo(`${S}/cities.webp`, "50% 50%", "duotone"), status: "launch", alt: "City lane, East India" },
  { id: "IMG-C04", now: photo(`${S}/market-textile.webp`, "50% 50%", "duotone"), status: "launch", alt: "Textile market, West India" },
  { id: "IMG-C05", now: photo(`${S}/market-mandi.webp`, "50% 50%", "duotone"), status: "launch", alt: "Mandi, North-East India" },
  { id: "IMG-C06", now: photo(`${S}/market-spice.webp`, "50% 50%", "duotone"), status: "launch", alt: "Spice market, islands and Himalaya" },

  // Blog covers rotate the market set (duotone + category chip, §17.2a)
  { id: "IMG-BL01", now: photo(`${S}/market-counter.webp`, "50% 50%", "duotone"), status: "launch", alt: "" },
  { id: "IMG-BL02", now: photo(`${S}/market-electronics.webp`, "50% 50%", "duotone"), status: "launch", alt: "" },
  { id: "IMG-BL03", now: photo(`${S}/market-flower.webp`, "50% 50%", "duotone"), status: "launch", alt: "" },
  { id: "IMG-BL04", now: photo(`${S}/market-grain.webp`, "50% 50%", "duotone"), status: "launch", alt: "" },
  { id: "IMG-BL05", now: photo(`${S}/market-mandi.webp`, "50% 50%", "duotone"), status: "launch", alt: "" },
  { id: "IMG-BL06", now: photo(`${S}/market-spice.webp`, "50% 50%", "duotone"), status: "launch", alt: "" },
  { id: "IMG-BL07", now: photo(`${S}/market-textile.webp`, "50% 50%", "duotone"), status: "launch", alt: "" },
];

/** Existing market photos, used by BazaarStrip and CTA backdrops. */
export const MARKET_SET = [
  { src: `${S}/market-counter.webp`, alt: "Shop counter" },
  { src: `${S}/market-electronics.webp`, alt: "Electronics shop" },
  { src: `${S}/market-flower.webp`, alt: "Flower market" },
  { src: `${S}/market-grain.webp`, alt: "Grain market" },
  { src: `${S}/market-mandi.webp`, alt: "Vegetable mandi" },
  { src: `${S}/market-spice.webp`, alt: "Spice market" },
  { src: `${S}/market-textile.webp`, alt: "Textile market" },
] as const;

export const slots: Record<string, ImageSlot> = Object.fromEntries(slotList.map((s) => [s.id, s]));

export type ResolvedImage = {
  src: string;
  zoom?: number;
  alt: string;
  crop: string;
  treatment: Treatment;
};

/** Resolve a slot id (or an existing path) to what should render now. */
export function resolveImage(id: string): ResolvedImage | null {
  const slot = slots[id];
  if (!slot) {
    // Allow raw existing paths, e.g. "/images/snapshots/work.webp".
    if (id.startsWith("/images/")) return { src: id, alt: "", crop: "50% 50%", treatment: "none" };
    return null;
  }
  if (slot.status === "upgraded" && slot.later) {
    return { src: slot.later, alt: slot.alt, crop: "50% 50%", treatment: "none" };
  }
  if (slot.now.kind === "photo") {
    return { src: slot.now.src, alt: slot.alt, crop: slot.now.crop, treatment: slot.now.treatment ?? "none", zoom: slot.now.zoom };
  }
  return null;
}
