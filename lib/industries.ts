import type { BlockSlug } from "@/lib/blocks";

/**
 * Industries (content-plan §9.8). Seven pages; the model supports more.
 * Copy is written as how an owner might describe the day — never attributed
 * to a real person, no invented numbers. Marketplaces are channels we work
 * alongside (§2.6): named only in Rent + Own, never as opponents.
 */
export type IndustrySlug = "retail" | "restaurant" | "healthcare" | "education" | "manufacturing" | "exporters" | "real-estate";

export type DayMoment = { time: string; scene: string; block: BlockSlug; helps: string };
export type PainFix = { pain: string; fix: string; block: BlockSlug };

export type IndustryPage = {
  slug: IndustrySlug;
  name: string;
  /** Lowercase noun used in headings: "Built around how [label] actually works." */
  label: string;
  /** Hero: "Built around how [howNoun] actually works." */
  howNoun: string;
  /** "A day in your [place]". */
  place: string;
  /** Fills the §4.2 industry message. */
  waLabel: string;
  icon: string;
  /** CSS custom property for the industry colour (§9.8). */
  colour: string;
  /** Hub tile + hero photo (IMG-I-*-1) and the polaroids (IMG-I-*-2 + one existing photo). */
  photo: string;
  photo2: string;
  photo3?: string;
  /** Hub tile crop when the hero crop would show signage in a wide frame (§17.2). */
  tileCrop?: { crop: string; zoom: number };
  oneLine: string;
  sub: string;
  day: DayMoment[];
  pains: PainFix[];
  stack: BlockSlug[];
  /** Rent + Own: channel set in lib/channels.ts + marketplace logo ids (greyscale). */
  channel: string;
  marketplaces: string[];
  /** "Be found for '[nearMe]'". */
  nearMe: string;
  /** Prototype industry key in lib/prototypes.ts. */
  prototype: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "retail",
    howNoun: "a shop",
    name: "Retail & kirana",
    label: "retail",
    place: "shop",
    waLabel: "retail / kirana",
    icon: "Storefront",
    colour: "--rani",
    photo: "IMG-I-RET-1",
    photo2: "IMG-I-RET-2",
    photo3: "IMG-P01",
    oneLine: "Regulars, repeat orders, UPI and stock — on one system.",
    sub: "From a single kirana to a few outlets: a catalogue your regulars reorder from, payments into the business account, and orders in one list instead of five chats.",
    day: [
      { time: "9am", scene: "Overnight WhatsApp orders are already in one list, packed in order.", block: "chat", helps: "Webify Chat" },
      { time: "1pm", scene: "A regular reorders last week's list in two taps.", block: "store", helps: "Webify Store" },
      { time: "8pm", scene: "Every UPI payment has an invoice; the day closes without a notebook.", block: "pay", helps: "Webify Pay" },
      { time: "Monday", scene: "You see which products moved and which regulars went quiet.", block: "pulse", helps: "Webify Pulse" },
    ],
    pains: [
      { pain: "Orders arrive on WhatsApp and some get lost.", fix: "Orders land in one list with status, whoever is at the counter.", block: "chat" },
      { pain: "Shop money and home money share one personal QR.", fix: "UPI into the business account, with a receipt for every payment.", block: "pay" },
      { pain: "Regulars ask “same as last time?” and you scroll back to check.", fix: "A repeat-order list each regular can reorder from.", block: "store" },
      { pain: "GST week means rebuilding the month from screenshots.", fix: "Invoices created with each sale; clean exports for your CA.", block: "ledger" },
    ],
    stack: ["store", "pay", "chat", "ledger"],
    channel: "store",
    marketplaces: ["amazon", "flipkart"],
    nearMe: "kirana store near me",
    prototype: "retail",
    seoTitle: "Retail & kirana: catalogue, repeat orders, UPI and invoices",
    seoDescription: "Custom systems for Indian retail and kirana stores: a catalogue regulars reorder from, UPI into your business account, WhatsApp orders in one list and GST-ready invoices.",
    keywords: ["kirana store website", "retail shop software India", "WhatsApp orders for shops", "UPI for shops"],
    faqs: [
      { q: "Do I have to stop selling on marketplaces?", a: "No. Keep them for new buyers if they work for you. We build your own channel for regulars alongside them." },
      { q: "Can it handle a few hundred products?", a: "Yes. The Business stage includes a full store; the product limit and over-limit pricing are on the pricing page." },
      { q: "Will it work with Tally?", a: "Yes — invoices can flow into Tally through Webify Connect. We confirm your exact setup before quoting." },
    ],
  },
  {
    slug: "restaurant",
    howNoun: "a restaurant",
    name: "Restaurants & cloud kitchens",
    label: "restaurants and cloud kitchens",
    place: "kitchen",
    waLabel: "restaurant or cloud kitchen",
    icon: "ForkKnife",
    colour: "--marigold",
    photo: "IMG-I-RES-1",
    photo2: "IMG-I-RES-2",
    oneLine: "Direct orders from regulars, alongside the delivery apps.",
    sub: "A menu your regulars order from directly, table bookings and order updates on WhatsApp, and payments matched to orders — while the apps keep bringing new customers.",
    day: [
      { time: "9am", scene: "Today's menu goes live on your site and WhatsApp in one update.", block: "site", helps: "Webify Site" },
      { time: "1pm", scene: "Lunch rush: direct orders and app orders sit on one board.", block: "store", helps: "Webify Store" },
      { time: "8pm", scene: "A table booking is confirmed on WhatsApp, with a reminder an hour before.", block: "chat", helps: "Webify Chat" },
      { time: "Monday", scene: "You see orders by channel and which dishes regulars come back for.", block: "pulse", helps: "Webify Pulse" },
    ],
    pains: [
      { pain: "Regulars who already know us still order through an app.", fix: "A direct-order menu they can save, with your own offers for regulars.", block: "store" },
      { pain: "Phones ring all evening for bookings and “where's my order?”.", fix: "Bookings and order status on WhatsApp, answered automatically.", block: "chat" },
      { pain: "Payments and orders never quite match at closing.", fix: "Each payment matched to its order, with a receipt.", block: "pay" },
      { pain: "Nobody knows which dishes actually bring people back.", fix: "A simple dashboard of orders by dish and channel.", block: "pulse" },
    ],
    stack: ["site", "store", "pay", "chat"],
    channel: "store",
    marketplaces: ["zomato", "swiggy"],
    nearMe: "restaurant near me",
    prototype: "restaurant",
    seoTitle: "Restaurants & cloud kitchens: direct ordering, bookings and payments",
    seoDescription: "Direct ordering for Indian restaurants and cloud kitchens: a menu regulars order from, WhatsApp bookings and order updates, and payments matched to orders — alongside the delivery apps.",
    keywords: ["restaurant direct ordering India", "cloud kitchen website", "WhatsApp table booking", "restaurant online menu"],
    faqs: [
      { q: "Should I leave the delivery apps?", a: "No. They're good for reaching new customers. Your own ordering is for regulars who already know you." },
      { q: "Can you handle delivery?", a: "We set up the ordering, payments and updates. Delivery stays with your own riders or a delivery partner you choose." },
      { q: "Do I need a POS replacement?", a: "Usually not. We work around the billing you use today and connect where it helps." },
    ],
  },
  {
    slug: "healthcare",
    howNoun: "a clinic",
    name: "Clinics",
    label: "clinics",
    place: "clinic",
    waLabel: "clinic",
    icon: "FirstAidKit",
    colour: "--peacock",
    photo: "IMG-I-CLI-1",
    tileCrop: { crop: "72% 62%", zoom: 1.45 },
    photo2: "IMG-I-CLI-2",
    oneLine: "Online slots, reminders and fees at booking — not a hospital system.",
    sub: "Patients find you, pick a slot, get reminded on WhatsApp and pay the consultation fee at booking. We build the public and front-desk layer; your clinical records stay where they are.",
    day: [
      { time: "9am", scene: "The day's appointments are confirmed; reminders went out last night.", block: "chat", helps: "Webify Chat" },
      { time: "1pm", scene: "A new patient books a slot from Google and pays the fee upfront.", block: "pay", helps: "Webify Pay" },
      { time: "8pm", scene: "Follow-up reminders queue up for next week's reviews.", block: "desk", helps: "Webify Desk" },
      { time: "Monday", scene: "You see bookings, no-shows and new patients for the week.", block: "pulse", helps: "Webify Pulse" },
    ],
    pains: [
      { pain: "The morning goes on phone tag with patients.", fix: "Online slots that patients book themselves, on your site or WhatsApp.", block: "site" },
      { pain: "No-shows leave gaps in the schedule.", fix: "WhatsApp reminders before every appointment, with easy rescheduling.", block: "chat" },
      { pain: "Fees are collected in cash, card and UPI, all over the place.", fix: "Consultation fee at booking, refunds handled if a slot moves.", block: "pay" },
      { pain: "Follow-ups depend on someone remembering.", fix: "Each patient's next visit and reminders in one tracker.", block: "desk" },
    ],
    stack: ["site", "chat", "pay", "desk"],
    channel: "site",
    marketplaces: ["justdial", "sulekha"],
    nearMe: "clinic near me",
    prototype: "healthcare",
    seoTitle: "Clinics: online appointments, WhatsApp reminders and fees at booking",
    seoDescription: "For Indian clinics: online appointment slots, WhatsApp reminders, consultation fees at booking and follow-ups in one place. The public and front-desk layer — not a hospital EMR.",
    keywords: ["clinic appointment booking India", "WhatsApp appointment reminders", "doctor website", "clinic near me"],
    faqs: [
      { q: "Is this an EMR or hospital system?", a: "No. We build the public and front-desk layer: website, bookings, reminders, payments and follow-ups. Clinical records stay in the system you use." },
      { q: "Can each doctor have their own schedule?", a: "Yes — slots per doctor and per branch, with staff logins that see only what they need." },
      { q: "What about patient data?", a: "We collect only what booking needs, keep it in your accounts, and you can export or delete it any time." },
    ],
  },
  {
    slug: "education",
    howNoun: "a coaching institute",
    name: "Coaching & education",
    label: "coaching and education",
    place: "institute",
    waLabel: "coaching / education",
    icon: "GraduationCap",
    colour: "--indigo",
    photo: "IMG-I-EDU-1",
    photo2: "IMG-I-EDU-2",
    oneLine: "Admissions, fee instalments and parent updates on one system.",
    sub: "Every enquiry tracked from first call to enrolled, fee instalments with reminders, and class updates to parents on WhatsApp.",
    day: [
      { time: "9am", scene: "Yesterday's enquiries are already in the admissions pipeline.", block: "desk", helps: "Webify Desk" },
      { time: "1pm", scene: "A parent pays this month's instalment from a WhatsApp link.", block: "pay", helps: "Webify Pay" },
      { time: "8pm", scene: "Tomorrow's batch timings reach every parent at once.", block: "chat", helps: "Webify Chat" },
      { time: "Monday", scene: "You see enquiries by source and fees due this week.", block: "pulse", helps: "Webify Pulse" },
    ],
    pains: [
      { pain: "Enquiries are spread across notebooks and phones.", fix: "One admissions pipeline, from enquiry to enrolled.", block: "desk" },
      { pain: "Fees are chased by hand every month.", fix: "Instalments with automatic reminders and receipts.", block: "pay" },
      { pain: "Parents call to ask about timings and holidays.", fix: "Class updates to parents on WhatsApp, in one message.", block: "chat" },
      { pain: "Nobody knows which ads or flyers bring students.", fix: "Enquiries tagged by source on one dashboard.", block: "pulse" },
    ],
    stack: ["site", "desk", "pay", "chat"],
    channel: "site",
    marketplaces: ["justdial", "sulekha"],
    nearMe: "coaching classes near me",
    prototype: "education",
    seoTitle: "Coaching & education: admissions pipeline, fees and parent updates",
    seoDescription: "For coaching centres and institutes in India: an admissions pipeline, fee instalments with reminders, parent updates on WhatsApp and a dashboard of enquiries and dues.",
    keywords: ["coaching institute software India", "fee reminder WhatsApp", "admissions CRM", "coaching classes website"],
    faqs: [
      { q: "Is this a full school ERP?", a: "It can grow into one. Most institutes start with admissions, fees and parent updates, then add what they need." },
      { q: "Can fees be paid in instalments?", a: "Yes — instalment plans with reminders before each due date and a receipt for every payment." },
      { q: "Can we run several batches or centres?", a: "Yes. Batches and centres sit on one system, with staff logins per centre." },
    ],
  },
  {
    slug: "manufacturing",
    howNoun: "a factory",
    name: "Manufacturers & traders",
    label: "manufacturers and traders",
    place: "factory",
    waLabel: "manufacturing or trading",
    icon: "Factory",
    colour: "--mehendi",
    photo: "IMG-I-MFG-1",
    photo2: "IMG-I-MFG-2",
    oneLine: "Dealer orders, dispatch and invoices — without the phone calls.",
    sub: "A dealer portal with each dealer's prices, orders that move from production to dispatch on one board, and invoices that flow into Tally.",
    day: [
      { time: "9am", scene: "Dealers placed orders overnight on the portal, at their own price tier.", block: "store", helps: "Webify Store" },
      { time: "1pm", scene: "The floor sees what to make next; dispatch sees what's ready.", block: "desk", helps: "Webify Desk" },
      { time: "8pm", scene: "Today's invoices are already in Tally.", block: "connect", helps: "Webify Connect" },
      { time: "Monday", scene: "You see orders by dealer and payments outstanding.", block: "ledger", helps: "Webify Ledger" },
    ],
    pains: [
      { pain: "Dealer orders come by phone and get written down twice.", fix: "A dealer portal where they order at their own price tier.", block: "store" },
      { pain: "Dispatch runs on memory.", fix: "Orders, production and dispatch on one board.", block: "desk" },
      { pain: "Invoices are typed again into Tally.", fix: "Invoices that flow into Tally automatically.", block: "connect" },
      { pain: "Outstanding payments are a guess until month-end.", fix: "Dues per dealer, with reminders before they slip.", block: "ledger" },
    ],
    stack: ["store", "desk", "ledger", "connect"],
    channel: "b2b",
    marketplaces: ["indiamart"],
    nearMe: "manufacturer near me",
    prototype: "manufacturing",
    seoTitle: "Manufacturers & traders: dealer portal, dispatch board and Tally invoices",
    seoDescription: "For Indian manufacturers and traders: a dealer portal with price tiers, orders from production to dispatch on one board, and invoices that flow into Tally.",
    keywords: ["dealer portal India", "manufacturer order management", "Tally integration", "B2B ordering system"],
    faqs: [
      { q: "Can each dealer see different prices?", a: "Yes. Each dealer logs in and sees their own price tier, credit and order history." },
      { q: "Do we have to replace Tally?", a: "No. We connect to Tally so invoices and payments flow in, and your CA keeps working as before." },
      { q: "Can it track production?", a: "Yes, at the level you need — from a simple board to a full ERP on the Command stage." },
    ],
  },
  {
    slug: "exporters",
    howNoun: "an export business",
    name: "Exporters",
    label: "exporters",
    place: "export desk",
    waLabel: "export",
    icon: "Boat",
    colour: "--dusk",
    photo: "IMG-I-EXP-1",
    photo2: "IMG-I-EXP-2",
    oneLine: "A catalogue buyers abroad can read, and card payments they trust.",
    sub: "A site and catalogue for international buyers, card payments through Stripe, enquiries that reach you across time zones — and IEC sorted if you're starting out.",
    day: [
      { time: "9am", scene: "Overnight enquiries from abroad are waiting, each with the product they asked about.", block: "chat", helps: "Webify Chat" },
      { time: "1pm", scene: "A buyer pays a sample order by card, in their own currency.", block: "pay", helps: "Webify Pay" },
      { time: "8pm", scene: "Your catalogue shows the specs and certificates buyers ask for.", block: "site", helps: "Webify Site" },
      { time: "Monday", scene: "Registrations and renewals are tracked, not remembered.", block: "file", helps: "Webify File" },
    ],
    pains: [
      { pain: "Buyers abroad want to pay by card, not bank transfer.", fix: "Card payments through Stripe, with multi-currency checkout.", block: "pay" },
      { pain: "The catalogue is a PDF sent on request.", fix: "A catalogue site buyers can browse and share.", block: "site" },
      { pain: "Enquiries arrive while you're asleep.", fix: "Instant replies with the details buyers need, then a person follows up.", block: "chat" },
      { pain: "Starting out, the paperwork is confusing.", fix: "IEC registration handled; foreign tax registrations through a registered agent.", block: "file" },
    ],
    stack: ["site", "pay", "file"],
    channel: "export",
    marketplaces: ["amazon"],
    nearMe: "exporters from India",
    prototype: "exporters",
    seoTitle: "Exporters: international catalogue site and card payments",
    seoDescription: "For Indian exporters: a catalogue site buyers abroad can read, card payments through Stripe with multi-currency checkout, enquiry handling across time zones and IEC registration.",
    keywords: ["exporter website India", "international payments Stripe India", "export catalogue site", "IEC registration"],
    faqs: [
      { q: "Can buyers pay in their own currency?", a: "Yes, through Stripe (PayPal on request). Gateway fees are charged by the provider." },
      { q: "Do you handle foreign tax registrations?", a: "We handle IEC. Foreign registrations such as UK VAT or EU IOSS go through a registered agent; we help you get set up with one." },
      { q: "Can I keep selling on marketplace export programmes?", a: "Yes. Your own site works alongside them for buyers who want to deal with you directly." },
    ],
  },
  {
    slug: "real-estate",
    howNoun: "a real estate business",
    name: "Real estate",
    label: "real estate",
    place: "office",
    waLabel: "real estate",
    icon: "Buildings",
    colour: "--haldi",
    photo: "IMG-I-RE-1",
    tileCrop: { crop: "75% 75%", zoom: 1.45 },
    photo2: "IMG-I-RE-2",
    oneLine: "Project pages, site visits and follow-ups that don't slip.",
    sub: "Project pages buyers can share, site visits booked on WhatsApp, and every buyer's follow-ups in one tracker — per project and per agent.",
    day: [
      { time: "9am", scene: "Weekend enquiries are assigned to agents, by project.", block: "desk", helps: "Webify Desk" },
      { time: "1pm", scene: "A buyer books a site visit on WhatsApp and gets the location pin.", block: "chat", helps: "Webify Chat" },
      { time: "8pm", scene: "A shared project page answers the family's questions.", block: "site", helps: "Webify Site" },
      { time: "Monday", scene: "You see visits, follow-ups due and leads by source.", block: "pulse", helps: "Webify Pulse" },
    ],
    pains: [
      { pain: "Site visits get booked, then follow-ups slip.", fix: "Every buyer's next step and reminder in one tracker.", block: "desk" },
      { pain: "Brochures are PDFs that get lost in chats.", fix: "Project pages buyers can open and share.", block: "site" },
      { pain: "Agents use personal numbers and leads leave with them.", fix: "Enquiries on the business WhatsApp, assigned to agents.", block: "chat" },
      { pain: "No one knows which source brings serious buyers.", fix: "Leads by source and project on one dashboard.", block: "pulse" },
    ],
    stack: ["site", "chat", "desk"],
    channel: "site",
    marketplaces: ["justdial", "sulekha"],
    nearMe: "flats for sale near me",
    prototype: "real-estate",
    seoTitle: "Real estate: project pages, site-visit booking and buyer follow-ups",
    seoDescription: "For Indian real estate developers and agents: shareable project pages, site visits booked on WhatsApp and every buyer's follow-ups in one tracker per project and agent.",
    keywords: ["real estate CRM India", "project landing page", "site visit booking WhatsApp", "property lead management"],
    faqs: [
      { q: "Can we keep using property portals?", a: "Yes. Portals are useful for discovery. Your own pages and tracker keep each buyer's follow-ups with you." },
      { q: "Can agents see only their own leads?", a: "Yes — role-based access, so each agent sees their leads and you see everything." },
      { q: "Can each project have its own page?", a: "Yes, with its own enquiry flow, location and documents buyers can share." },
    ],
  },
];

export function getIndustryPage(slug: string) {
  return industryPages.find((i) => i.slug === slug);
}
