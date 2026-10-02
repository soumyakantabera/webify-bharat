export type ServiceCompare = {
  slug: string;
  rentLabel: string;
  ownLabel: string;
  bars: { label: string; rent: number; own: number; rentNote: string; ownNote: string }[];
  vs: { they: string; you: string }[];
  includes: string[];
};

export const serviceMatrix: { label: string; cells: Record<string, string> }[] = [
  {
    label: "You own",
    cells: {
      websites: "URL + Maps",
      ecommerce: "Catalogue",
      payments: "Settlement",
      whatsapp: "The number",
      analytics: "Monday view",
      compliance: "Invoice trail",
    },
  },
  {
    label: "Replaces",
    cells: {
      websites: "Justdial page",
      ecommerce: "Marketplace aisle",
      payments: "Personal QR",
      whatsapp: "Rented inbox",
      analytics: "Guesswork",
      compliance: "Chat archaeology",
    },
  },
  {
    label: "Customer stays on",
    cells: {
      websites: "Your site",
      ecommerce: "Your domain",
      payments: "Your gateway",
      whatsapp: "Your chat",
      analytics: "Your numbers",
      compliance: "Your books",
    },
  },
  {
    label: "Extra per organic lead",
    cells: {
      websites: "\u20b90",
      ecommerce: "\u20b90",
      payments: "\u20b90",
      whatsapp: "\u20b90",
      analytics: "\u20b90",
      compliance: "\u20b90",
    },
  },
  {
    label: "Fits package",
    cells: {
      websites: "Launch",
      ecommerce: "Addon",
      payments: "Growth",
      whatsapp: "Launch / Growth",
      analytics: "Growth / Command",
      compliance: "Growth",
    },
  },
];

export const serviceCompares: ServiceCompare[] = [
  {
    slug: "websites",
    rentLabel: "Directory listing",
    ownLabel: "Website you own",
    bars: [
      { label: "Name search lands on", rent: 78, own: 16, rentNote: "Justdial", ownNote: "Your URL" },
      { label: "Cost of the next enquiry", rent: 84, own: 8, rentNote: "A pack", ownNote: "\u20b90" },
      { label: "Who keeps the visitor", rent: 74, own: 14, rentNote: "Their login", ownNote: "Your WhatsApp" },
    ],
    vs: [
      { they: "A listing that also shows your competitors", you: "A site that only sells you" },
      { they: "Maps click can die on a directory", you: "Google Business Profile points at your URL" },
      { they: "The next lead is another invoice", you: "The next organic enquiry is free" },
    ],
    includes: ["Mobile-first pages", "Click-to-WhatsApp", "On-page local SEO", "Schema basics"],
  },
  {
    slug: "ecommerce",
    rentLabel: "Marketplace aisle",
    ownLabel: "Catalogue you own",
    bars: [
      { label: "Fee on a repeat buyer", rent: 82, own: 12, rentNote: "Their cut", ownNote: "Your margin" },
      { label: "Who has the list", rent: 86, own: 10, rentNote: "The app", ownNote: "You" },
      { label: "Brand on the page", rent: 70, own: 18, rentNote: "A tile", ownNote: "Your domain" },
    ],
    vs: [
      { they: "Amazon and Flipkart keep the repeat click", you: "Product pages live on your domain" },
      { they: "Checkout trains the buyer to stay in the app", you: "UPI and WhatsApp handoff you control" },
      { they: "The aisle is also your competitor", you: "The shelf is only yours" },
    ],
    includes: ["Catalogue", "UPI checkout", "Order handoff", "GST-ready invoice option"],
  },
  {
    slug: "payments",
    rentLabel: "Personal GPay QR",
    ownLabel: "Named gateway",
    bars: [
      { label: "Can accounts reconcile today", rent: 76, own: 14, rentNote: "Chat scroll", ownNote: "Settlement" },
      { label: "Refund path", rent: 68, own: 18, rentNote: "Awkward", ownNote: "A real refund" },
      { label: "GST trail", rent: 80, own: 12, rentNote: "Mixed with personal", ownNote: "Named account" },
    ],
    vs: [
      { they: "Personal UPI mixes shop money and pocket money", you: "A named gateway with UPI, cards and links" },
      { they: "Receipt is a screenshot", you: "WhatsApp receipt the same day" },
      { they: "Failed payments vanish", you: "Status you can see and retry" },
    ],
    includes: ["UPI", "Cards", "Payment links", "WhatsApp receipts"],
  },
  {
    slug: "whatsapp",
    rentLabel: "A chaotic phone",
    ownLabel: "Inbox on your number",
    bars: [
      { label: "Second customer waits", rent: 84, own: 14, rentNote: "One phone", ownNote: "A flow" },
      { label: "Who owns the chat", rent: 72, own: 12, rentNote: "A directory", ownNote: "Your number" },
      { label: "Reminder gets sent", rent: 66, own: 16, rentNote: "If someone remembers", ownNote: "A template" },
    ],
    vs: [
      { they: "The Business app breaks when the queue grows", you: "API inbox, templates and a human handoff" },
      { they: "Justdial holds the conversation", you: "The number stays yours" },
      { they: "Every reply is typed from scratch", you: "Welcome, hours, status, reminder" },
    ],
    includes: ["Your number", "Menus", "Reminders", "Catalogue messages"],
  },
  {
    slug: "analytics",
    rentLabel: "Monday guesswork",
    ownLabel: "One screen in INR",
    bars: [
      { label: "Numbers the owner trusts", rent: 78, own: 16, rentNote: "Vanity traffic", ownNote: "Enquiries and cash" },
      { label: "Tools to open", rent: 82, own: 14, rentNote: "Five logins", ownNote: "One view" },
      { label: "Decision this week", rent: 70, own: 18, rentNote: "A feeling", ownNote: "A bottleneck" },
    ],
    vs: [
      { they: "Analytics without a conversion is a weather report", you: "WhatsApp taps, payments, collections" },
      { they: "A 40-tile board nobody opens", you: "The Monday questions, answered" },
      { they: "Each outlet has a private spreadsheet", you: "One definition every week" },
    ],
    includes: ["Enquiry count", "WhatsApp clicks", "Collections", "What is stuck"],
  },
  {
    slug: "compliance",
    rentLabel: "Filing-season archaeology",
    ownLabel: "Books from the sale",
    bars: [
      { label: "Invoice exists when money lands", rent: 80, own: 14, rentNote: "Later", ownNote: "Same event" },
      { label: "Expense trail", rent: 74, own: 16, rentNote: "WhatsApp photos", ownNote: "A list" },
      { label: "Due dates visible", rent: 68, own: 18, rentNote: "Memory", ownNote: "A calendar" },
    ],
    vs: [
      { they: "Sale, payment and invoice are three chores", you: "One event the books can use" },
      { they: "GST week is reconstruction", you: "Records stay close to the counter" },
      { they: "We are not your CA", you: "Your CA gets a trail, not a scramble" },
    ],
    includes: ["Numbered invoices", "Payment trail", "Due-date list", "Not legal advice"],
  },
];

export function getServiceCompare(slug: string) {
  return serviceCompares.find((s) => s.slug === slug);
}
