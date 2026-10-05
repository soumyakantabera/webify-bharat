/**
 * Rent + Own (content-plan §9.7 #4, §2.6).
 * Marketplaces, directories and apps are channels we work *alongside*, never
 * opponents: each set says what the rented channel is good for, how its costs
 * tend to climb, and what owning your channel adds. No brand names, no "vs".
 */
export type ChannelStage = { name: string; detail: string };

export type ChannelSet = {
  /** Block slug this set belongs to. */
  slug: string;
  rentLabel: string;
  /** What the rented channel is genuinely good for — keep using it for this. */
  keep: string;
  stages: ChannelStage[];
  ownLabel: string;
  own: string[];
};

export const channelSets: ChannelSet[] = [
  {
    slug: "site",
    rentLabel: "A directory listing",
    keep: "Good for being found by people who search a category and don't know you yet.",
    stages: [
      { name: "Free listing", detail: "You sit on the same page as everyone else in your category." },
      { name: "Lead packs", detail: "You start paying for enquiries — including people who already knew your name." },
      { name: "Paid placement", detail: "Staying visible inside the listing becomes another monthly bill." },
    ],
    ownLabel: "Your own website",
    own: ["People who search your name land on you", "Enquiries open on your WhatsApp, not a lead inbox", "City and service pages written for search", "No fee per enquiry"],
  },
  {
    slug: "store",
    rentLabel: "A marketplace or delivery app",
    keep: "Good for a stranger's first order and for reach you can't buy alone.",
    stages: [
      { name: "Listing", detail: "Your catalogue sits on their shelf, next to similar products." },
      { name: "Commission", detail: "Repeat orders from your regulars still pay a cut." },
      { name: "Ads to rank", detail: "Staying near the top often means paying for placement." },
    ],
    ownLabel: "Your own store",
    own: ["Regulars reorder directly from you", "Your prices, your offers, your catalogue", "Customer list stays with your business", "Keep the marketplace for new buyers"],
  },
  {
    slug: "pay",
    rentLabel: "A personal UPI QR",
    keep: "Good for getting started — everyone knows how to pay by UPI.",
    stages: [
      { name: "Personal QR", detail: "Shop money and household money share one history." },
      { name: "Screenshot receipts", detail: "The proof of payment is a photo in a chat." },
      { name: "Month-end mess", detail: "Refunds, reconciliation and GST week become guesswork." },
    ],
    ownLabel: "A business payment gateway",
    own: ["UPI, cards and links into your business account", "A receipt for every payment, automatically", "Failed payments and refunds you can see", "Records your CA can file from"],
  },
  {
    slug: "chat",
    rentLabel: "One busy phone",
    keep: "Good when there are a few customers and one person to answer them.",
    stages: [
      { name: "The owner's phone", detail: "The first customer gets a great answer." },
      { name: "A shared phone", detail: "The second and third customers wait." },
      { name: "Missed follow-ups", detail: "Reminders depend on someone remembering." },
    ],
    ownLabel: "WhatsApp workflows on your number",
    own: ["Menus, bookings and reminders that run themselves", "Your number, your conversations", "A person steps in for anything unusual", "No fee per enquiry"],
  },
  {
    slug: "pulse",
    rentLabel: "Numbers spread across apps",
    keep: "Each tool's own reports are fine for that one tool.",
    stages: [
      { name: "Five dashboards", detail: "Every app shows its own numbers, in its own way." },
      { name: "A weekly spreadsheet", detail: "Someone copies figures across by hand." },
      { name: "Gut feel", detail: "Decisions get made on memory instead." },
    ],
    ownLabel: "Your own dashboard",
    own: ["The 3–5 numbers you actually ask about", "Fed by your orders, payments and chats", "One screen, same definitions every week", "Grows as you add blocks"],
  },
  {
    slug: "ledger",
    rentLabel: "Invoices made by hand",
    keep: "Fine at very low volume, with a careful person in charge.",
    stages: [
      { name: "Bills in chat", detail: "Invoices are sent when someone remembers." },
      { name: "Two versions of the truth", detail: "Sales and books stop matching." },
      { name: "Filing week", detail: "The month is rebuilt from screenshots." },
    ],
    ownLabel: "Webify Ledger",
    own: ["An invoice created with every payment", "Payments matched automatically", "Due reminders before the scramble", "Clean exports for your CA"],
  },
  {
    slug: "b2b",
    rentLabel: "A B2B lead portal",
    keep: "Good for being found by buyers who don't know you yet.",
    stages: [
      { name: "Free listing", detail: "Your products sit alongside every other supplier in the category." },
      { name: "Shared enquiries", detail: "The same enquiry often reaches several suppliers at once." },
      { name: "Paid packages", detail: "Staying visible becomes a yearly subscription." },
    ],
    ownLabel: "Your own catalogue and dealer portal",
    own: ["Repeat buyers and dealers order directly", "Spec pages buyers can share inside their company", "Each dealer's prices and history in one place", "Keep the portal for new buyers"],
  },
  {
    slug: "export",
    rentLabel: "A marketplace export programme",
    keep: "Good for reaching buyers abroad without building everything at once.",
    stages: [
      { name: "Listing abroad", detail: "Your products appear in another country's marketplace." },
      { name: "Their rules", detail: "Fees, policies and placement are set by the platform." },
      { name: "Their customer", detail: "Buyers belong to the marketplace, not to you." },
    ],
    ownLabel: "Your own export site",
    own: ["Buyers who want to deal direct can find you", "Card payments in their currency", "Wholesale enquiries come straight to you", "Keep the marketplace for retail reach"],
  },
];

export function getChannelSet(slug: string) {
  return channelSets.find((r) => r.slug === slug);
}
