export type OfferKind = "package" | "addon";

export type CompareCell = "yes" | "no" | string;

export type Offer = {
  slug: string;
  kind: OfferKind;
  name: string;
  price: string;
  bestFor: string;
  desc: string;
  headline: string;
  accent: string;
  lead: string;
  features: string[];
  note: string;
  popular: boolean;
  rentLabel: string;
  ownLabel: string;
  bars: { label: string; rent: number; own: number; rentNote: string; ownNote: string }[];
  vs: { they: string; you: string }[];
  steps: { title: string; detail: string }[];
};

export const packageMatrix: { label: string; cells: Record<string, CompareCell> }[] = [
  { label: "Business website", cells: { launch: "yes", growth: "yes", command: "yes" } },
  { label: "WhatsApp", cells: { launch: "Setup", growth: "Automation", command: "Automation" } },
  { label: "Analytics", cells: { launch: "Basic", growth: "Dashboard", command: "BI" } },
  { label: "Payment gateway", cells: { launch: "no", growth: "yes", command: "yes" } },
  { label: "Custom integrations", cells: { launch: "no", growth: "no", command: "yes" } },
  { label: "Support", cells: { launch: "Launch", growth: "Priority", command: "Dedicated" } },
  { label: "Starting price, incl. GST", cells: { launch: "\u20b99,999", growth: "\u20b919,999", command: "\u20b939,999" } },
];

export const addonMatrix: { label: string; cells: Record<string, CompareCell> }[] = [
  { label: "Catalogue on your domain", cells: { small: "yes", medium: "yes", expanding: "yes" } },
  { label: "Product scale", cells: { small: "~50", medium: "~200", expanding: "Multi-category" } },
  { label: "Checkout", cells: { small: "UPI / link", medium: "Named gateway", expanding: "Named gateway" } },
  { label: "Shipping notes", cells: { small: "no", medium: "Pincode zones", expanding: "Pincode zones" } },
  { label: "Dealer / bulk path", cells: { small: "no", medium: "no", expanding: "yes" } },
  { label: "Order + invoice flow", cells: { small: "Handoff", medium: "Daily list", expanding: "One flow" } },
  { label: "Starting price, incl. GST", cells: { small: "\u20b98,999", medium: "\u20b918,999", expanding: "\u20b934,999" } },
];

export const offers: Offer[] = [
  {
    slug: "launch",
    kind: "package",
    name: "Launch",
    price: "\u20b99,999",
    bestFor: "A shop, clinic or desk that needs a real URL this month",
    desc: "Get a professional digital foundation.",
    headline: "Be findable.",
    accent: "Stop borrowing a directory.",
    lead: "Launch is the owned front door: a mobile-first site, basic analytics and WhatsApp setup. Organic enquiries after that are \u20b90 extra.",
    features: ["Business website", "Basic analytics", "WhatsApp setup", "Core SEO foundation", "Launch support"],
    note: "Hosting and optional care are month-to-month after launch. Gateway and catalogue are Growth or an addon.",
    popular: false,
    rentLabel: "A year of lead packs",
    ownLabel: "Launch, once",
    bars: [
      { label: "Cost of the next enquiry", rent: 86, own: 8, rentNote: "Pack fee, again", ownNote: "\u20b90 organic" },
      { label: "Who holds the customer", rent: 78, own: 12, rentNote: "Their login", ownNote: "Your WhatsApp" },
      { label: "Name search lands on", rent: 70, own: 18, rentNote: "A directory", ownNote: "Your URL" },
    ],
    vs: [
      { they: "Justdial bills the person who already searched you", you: "Google and Maps land on a site you own" },
      { they: "The lead sits in their inbox", you: "The chat opens on your number" },
      { they: "Next month is another pack", you: "Next month is hosting, not a per-head tax" },
    ],
    steps: [
      { title: "Name and city", detail: "What you sell, where, and the number customers already use." },
      { title: "Site you own", detail: "Mobile-first pages, WhatsApp button, on-page SEO." },
      { title: "Maps aligned", detail: "Google Business Profile points at your URL, not a listing." },
      { title: "Go live", detail: "Launch support through go-live. We do not promise the first enquiry." },
    ],
  },
  {
    slug: "growth",
    kind: "package",
    name: "Growth",
    price: "\u20b919,999",
    bestFor: "Teams collecting on a personal QR or losing follow-ups in chat",
    desc: "Connect sales, payments and automation.",
    headline: "Collect cleanly.",
    accent: "Stop using a personal QR.",
    lead: "Growth adds a named payment gateway, WhatsApp automation and a dashboard to the Launch site. The customer and the settlement stay on your books.",
    features: ["Everything in Launch", "Payment gateway", "WhatsApp automation", "Analytics dashboard", "Priority support"],
    note: "Most chosen when the site exists in someone's head but money and follow-ups still live in a personal phone.",
    popular: true,
    rentLabel: "Aggregator + ads",
    ownLabel: "Growth, once",
    bars: [
      { label: "Cut on a regular", rent: 82, own: 10, rentNote: "15\u201330% or a click", ownNote: "UPI you reconcile" },
      { label: "Follow-up dies in chat", rent: 74, own: 16, rentNote: "One phone", ownNote: "A repeatable flow" },
      { label: "Monday number", rent: 68, own: 20, rentNote: "Guesswork", ownNote: "A dashboard" },
    ],
    vs: [
      { they: "Zomato or ads tax the guest who already wanted you", you: "QR, link and WhatsApp receipt on your gateway" },
      { they: "The second customer gets a slower answer", you: "Menus, reminders and a human handoff" },
      { they: "Collections live in GPay history", you: "A named settlement you can match to GST" },
    ],
    steps: [
      { title: "Launch base", detail: "Site, WhatsApp and the local SEO foundation." },
      { title: "Named checkout", detail: "UPI, cards and payment links. Not a personal QR." },
      { title: "Inbox flows", detail: "Welcome, hours, status, reminder. Human when it is odd." },
      { title: "One screen", detail: "Enquiries, payments and what is stuck." },
    ],
  },
  {
    slug: "command",
    kind: "package",
    name: "Command",
    price: "\u20b939,999",
    bestFor: "Multi-outlet or ops that already outgrew three tools",
    desc: "A connected operating system for growth.",
    headline: "See the week.",
    accent: "Stop running on memory.",
    lead: "Command is Growth plus BI, custom integrations and a person who stays on the account. For owners who want one Monday view, not another login.",
    features: ["Everything in Growth", "Advanced BI dashboard", "Custom integrations", "Operational automation", "Dedicated support"],
    note: "Not a 40-tile vanity board. The numbers are the ones that change a decision.",
    popular: false,
    rentLabel: "A stack of tools",
    ownLabel: "Command, once",
    bars: [
      { label: "Tools the owner opens", rent: 88, own: 14, rentNote: "Five logins", ownNote: "One view" },
      { label: "Who integrates them", rent: 76, own: 18, rentNote: "You, on Sunday", ownNote: "We do" },
      { label: "Support when it breaks", rent: 64, own: 22, rentNote: "A ticket void", ownNote: "A named person" },
    ],
    vs: [
      { they: "Each new outlet adds a spreadsheet", you: "Integrations land in one operating picture" },
      { they: "BI means a chart nobody trusts", you: "Enquiries, collections, bottlenecks in INR" },
      { they: "The agency vanishes after launch", you: "Dedicated support on the system you own" },
    ],
    steps: [
      { title: "Growth base", detail: "Site, gateway, WhatsApp automation, dashboard." },
      { title: "The leaks", detail: "Which tool is lying, which handoff drops." },
      { title: "Join them", detail: "Custom integrations and the repetitive middle." },
      { title: "Monday", detail: "A BI view the owner will actually open." },
    ],
  },
  {
    slug: "small",
    kind: "addon",
    name: "Small",
    price: "\u20b98,999",
    bestFor: "Single outlet \u00b7 up to ~50 products",
    desc: "A focused catalogue for shops that sell a short list well.",
    headline: "Your shelf.",
    accent: "Not a marketplace aisle.",
    lead: "Small is a catalogue and UPI checkout on your domain. Add it to Launch or Growth. Keep Amazon for reach. Keep repeats.",
    features: ["Product catalogue on your domain", "UPI / payment-link checkout", "Mobile-first product pages", "Basic stock status (in / out)", "WhatsApp order handoff", "GST-ready invoice option"],
    note: "Add on to Launch or Growth. Not a substitute for the site.",
    popular: false,
    rentLabel: "Marketplace fee",
    ownLabel: "Small addon",
    bars: [
      { label: "Fee on a repeat buyer", rent: 80, own: 12, rentNote: "Their cut", ownNote: "Your margin" },
      { label: "Who has the list", rent: 84, own: 10, rentNote: "The app", ownNote: "You" },
      { label: "Catalogue size fit", rent: 40, own: 36, rentNote: "Built for 5,000 SKUs", ownNote: "Built for 50" },
    ],
    vs: [
      { they: "Amazon or Flipkart own the repeat click", you: "The product page is on your domain" },
      { they: "Checkout trains the buyer to stay in the app", you: "UPI link and WhatsApp handoff" },
      { they: "Stock is a guess in the DMs", you: "In or out, visible on the page" },
    ],
    steps: [
      { title: "Short list", detail: "The products you actually sell well." },
      { title: "Pages", detail: "Mobile-first, photo, price, WhatsApp." },
      { title: "Pay", detail: "UPI or payment link. Invoice option." },
      { title: "Handoff", detail: "Order lands in WhatsApp the team already uses." },
    ],
  },
  {
    slug: "medium",
    kind: "addon",
    name: "Medium",
    price: "\u20b918,999",
    bestFor: "Growing retail \u00b7 up to ~200 products",
    desc: "A working store for growing catalogues.",
    headline: "Orders in one list.",
    accent: "Not five seller apps.",
    lead: "Medium is the store staff can open daily: more SKUs, shipping honesty, a named gateway and WhatsApp status. Most chosen when marketplace fees already hurt.",
    features: ["Everything in Small", "Larger catalogue structure", "Shipping zones / pincode notes", "Order list the team can open daily", "Named payment gateway checkout", "WhatsApp order status templates"],
    note: "Best when staff need one order screen and pincode answers before the argument starts.",
    popular: true,
    rentLabel: "Seller apps",
    ownLabel: "Medium addon",
    bars: [
      { label: "Places an order is typed", rent: 86, own: 14, rentNote: "Three apps", ownNote: "One list" },
      { label: "Shipping surprise", rent: 72, own: 18, rentNote: "After checkout", ownNote: "Pincode note" },
      { label: "Status message", rent: 70, own: 16, rentNote: "Typed by hand", ownNote: "A template" },
    ],
    vs: [
      { they: "Each marketplace has its own order queue", you: "One list the counter can open" },
      { they: "Pincode fights happen after payment", you: "Zones and notes before the promise" },
      { they: "Status is a voice note", you: "WhatsApp templates on your number" },
    ],
    steps: [
      { title: "Small base", detail: "Catalogue, pages, UPI, WhatsApp handoff." },
      { title: "Structure", detail: "Enough categories for ~200 products." },
      { title: "Dispatch", detail: "Pincode notes and a daily order list." },
      { title: "Status", detail: "Named gateway plus WhatsApp updates." },
    ],
  },
  {
    slug: "expanding",
    kind: "addon",
    name: "Expanding",
    price: "\u20b934,999",
    bestFor: "Multi-category \u00b7 multi-outlet ready",
    desc: "For brands outgrowing a simple list.",
    headline: "Channels, not a landlord.",
    accent: "Amazon stays optional.",
    lead: "Expanding is Medium plus multi-category, a dealer path, inventory-ready structure and order, payment and invoice as one flow. Marketplaces can stay. They stop being the relationship.",
    features: ["Everything in Medium", "Multi-category catalogue", "Dealer / bulk enquiry path", "Inventory-ready structure", "Order + payment + invoice as one flow", "Priority build and go-live support"],
    note: "Use when Amazon and Flipkart are extra reach, not the only customer relationship.",
    popular: false,
    rentLabel: "Only the marketplace",
    ownLabel: "Expanding addon",
    bars: [
      { label: "Repeat buyer path", rent: 84, own: 12, rentNote: "Their app", ownNote: "Your categories" },
      { label: "Dealer enquiry", rent: 77, own: 15, rentNote: "Lost in RFQs", ownNote: "A path you own" },
      { label: "Invoice trail", rent: 73, own: 16, rentNote: "Rebuilt later", ownNote: "Same event" },
    ],
    vs: [
      { they: "The brand is a tile in someone else's search", you: "Multi-category catalogue on your domain" },
      { they: "Bulk buyers get a portal quote war", you: "A dealer path on your WhatsApp" },
      { they: "Sale, payment and invoice are three chores", you: "One flow, GST-ready" },
    ],
    steps: [
      { title: "Medium base", detail: "Catalogue, zones, order list, gateway." },
      { title: "Categories", detail: "Enough structure for more than one line." },
      { title: "Dealers", detail: "Bulk enquiry that does not die in a portal." },
      { title: "Books", detail: "Order, payment and invoice as one event." },
    ],
  },
];

export function getOffer(slug: string) {
  return offers.find((o) => o.slug === slug);
}

export function offerFamily(kind: OfferKind) {
  return offers.filter((o) => o.kind === kind);
}
