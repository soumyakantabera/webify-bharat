export type RivalStage = { name: string; detail: string };

export type RivalSet = {
  slug: string;
  youTitle: string;
  youLine: string;
  rivals: { name: string; blurb: string; stages: RivalStage[] }[];
  wins: { label: string; detail: string }[];
};

export const rivals: RivalSet[] = [
  {
    slug: "launch",
    youTitle: "A site they cannot invoice again.",
    youLine: "Justdial and Sulekha sell the next stage of a category listing. Launch is for a name people already search. It does not buy stranger leads.",
    rivals: [
      {
        name: "Justdial",
        blurb: "A local listing that turns into a bill.",
        stages: [
          { name: "Free listing", detail: "You sit next to everyone in the category." },
          { name: "Lead pack", detail: "You pay when someone already wanted you." },
          { name: "In-app ads", detail: "You pay again to outrank the pack you bought." },
        ],
      },
      {
        name: "Sulekha",
        blurb: "The same ladder, for a job the customer searched by category.",
        stages: [
          { name: "Listing", detail: "You sit beside every other name in the trade." },
          { name: "Paid leads", detail: "The enquiry is rented, not introduced." },
          { name: "More ads", detail: "The bill grows because the listing did not." },
        ],
      },
    ],
    wins: [
      { label: "Your URL", detail: "Google and Maps land on you, not a directory." },
      { label: "Your number", detail: "WhatsApp opens on the phone you already use." },
      { label: "No per-lead fee", detail: "An organic enquiry does not renew like a pack. Ads still cost money." },
      { label: "No competitor column", detail: "The page sells only your shop." },
    ],
  },
  {
    slug: "growth",
    youTitle: "Shop money stays in the business account.",
    youLine: "A personal QR mixes the shop with a pocket. An aggregator is for a stranger, and only if your own contract still makes sense.",
    rivals: [
      {
        name: "Zomato / Swiggy",
        blurb: "Useful for a stranger. Expensive for a regular.",
        stages: [
          { name: "Discovery", detail: "A new guest finds the kitchen. Fair enough." },
          { name: "Commission", detail: "The repeat plate still pays their cut." },
          { name: "Ads", detail: "You pay to stay visible inside their app." },
        ],
      },
      {
        name: "Personal GPay",
        blurb: "How India learned to pay. A bad ledger.",
        stages: [
          { name: "QR in the bio", detail: "Shop money and pocket money share a history." },
          { name: "Screenshot receipt", detail: "Accounts reconstruct the day from chat." },
          { name: "No refund path", detail: "A failed payment just disappears." },
        ],
      },
    ],
    wins: [
      { label: "Named gateway", detail: "UPI, cards and links on a business settlement." },
      { label: "WhatsApp flow", detail: "Hours, menu, reminder. Human when it is odd." },
      { label: "Refund path", detail: "A failed payment is a record, not a missing screenshot." },
      { label: "One Monday number", detail: "Enquiries and collections, not a feeling." },
    ],
  },
  {
    slug: "command",
    youTitle: "One view. Not five logins.",
    youLine: "Command is up to three connections and one Monday view: enquiries, collections, what is stuck. It is not an open rebuild.",
    rivals: [
      {
        name: "The tool pile",
        blurb: "Each new problem buys another login.",
        stages: [
          { name: "WhatsApp + Excel", detail: "Status lives in someone's memory." },
          { name: "A gateway on the side", detail: "Money does not match the sheet." },
          { name: "A BI login", detail: "Forty tiles. Nobody opens them on Monday." },
        ],
      },
      {
        name: "A generic agency",
        blurb: "Launch week, then a ticket void.",
        stages: [
          { name: "Pretty site", detail: "Looks done. Ops are untouched." },
          { name: "Handover PDF", detail: "You integrate the tools on Sunday." },
          { name: "Retainer fog", detail: "Support is a queue, not a person." },
        ],
      },
    ],
    wins: [
      { label: "Joined systems", detail: "Site, pay, chat and the week in one picture." },
      { label: "INR, not vanity", detail: "Enquiries, collections, what is stuck." },
      { label: "Named support", detail: "Someone stays after go-live." },
      { label: "You own it", detail: "Not a dashboard rented from the pile." },
    ],
  },
  {
    slug: "small",
    youTitle: "Fifty products do not need a marketplace.",
    youLine: "Amazon and Flipkart are built for aisles. A short list should live on your domain.",
    rivals: [
      {
        name: "Amazon",
        blurb: "Reach is real. The repeat buyer is theirs.",
        stages: [
          { name: "Individual seller", detail: "Fine for a test. The fee starts immediately." },
          { name: "Professional", detail: "More SKUs, same landlord." },
          { name: "Ads", detail: "You pay to be found inside their search." },
        ],
      },
      {
        name: "Flipkart",
        blurb: "Another queue, another cut, another app.",
        stages: [
          { name: "Seller account", detail: "Orders live where staff already hate logging in." },
          { name: "Fee stack", detail: "Commission, shipping, returns on their clock." },
          { name: "Their customer", detail: "The next purchase does not know your name." },
        ],
      },
    ],
    wins: [
      { label: "Your domain", detail: "The product page is not a tile in an aisle." },
      { label: "UPI handoff", detail: "Pay and WhatsApp, on your number." },
      { label: "In or out", detail: "Stock status a counter can trust." },
      { label: "Keep marketplace", detail: "Use it for reach. Not for repeats." },
    ],
  },
  {
    slug: "medium",
    youTitle: "One order list. Not three seller apps.",
    youLine: "Growing catalogues drown in marketplace stages. Medium is the screen the team opens.",
    rivals: [
      {
        name: "Seller apps",
        blurb: "Each marketplace is its own stage of the day.",
        stages: [
          { name: "App one", detail: "Morning orders in Amazon." },
          { name: "App two", detail: "Flipkart before lunch." },
          { name: "WhatsApp anyway", detail: "The real customer still messages you." },
        ],
      },
      {
        name: "A borrowed storefront",
        blurb: "Shopify-shaped rent, India-shaped gaps.",
        stages: [
          { name: "Theme", detail: "Looks like a store. Pincodes are a surprise." },
          { name: "Apps", detail: "Shipping and GST become add-on fees." },
          { name: "Their checkout", detail: "The buyer learns their brand, not yours." },
        ],
      },
    ],
    wins: [
      { label: "Daily list", detail: "One place the counter opens." },
      { label: "Pincode honesty", detail: "Zones before the promise, not after payment." },
      { label: "Named checkout", detail: "Gateway plus WhatsApp status." },
      { label: "~200, not 5,000", detail: "Built for a growing list, not a warehouse fantasy." },
    ],
  },
  {
    slug: "expanding",
    youTitle: "Channels. Not a landlord.",
    youLine: "Brand programs on Amazon still end on their search. Dealers should not live in an RFQ war.",
    rivals: [
      {
        name: "Marketplace brand",
        blurb: "You can look official and still not own the click.",
        stages: [
          { name: "Brand registry", detail: "Your name, their shelf." },
          { name: "Storefront", detail: "A page inside their app." },
          { name: "Sponsored rank", detail: "The repeat buyer is still an ad." },
        ],
      },
      {
        name: "IndiaMART for dealers",
        blurb: "Bulk buyers become a bidding pit.",
        stages: [
          { name: "RFQ blast", detail: "Your price sits next to ten others." },
          { name: "Lead fee", detail: "You pay to answer a buyer you may already know." },
          { name: "No invoice trail", detail: "The deal, the payment and the bill are three chores." },
        ],
      },
    ],
    wins: [
      { label: "Your categories", detail: "Multi-line catalogue on your domain." },
      { label: "Dealer path", detail: "Bulk enquiry on your WhatsApp, not a portal." },
      { label: "One event", detail: "Order, payment and invoice together." },
      { label: "Marketplaces stay", detail: "Extra reach. Not the relationship." },
    ],
  },
  {
    slug: "websites",
    youTitle: "Be the result. Not a row in theirs.",
    youLine: "A directory still sells category search. A site you own is where your name should land. It does not buy the stranger who never heard of you.",
    rivals: [
      {
        name: "Justdial",
        blurb: "Listing, pack, then ads.",
        stages: [
          { name: "Listing", detail: "Competitors sit on the same card." },
          { name: "Paid leads", detail: "Rent on intent you earned offline." },
          { name: "More ads", detail: "The bill grows because the listing did not." },
        ],
      },
      {
        name: "A Facebook page",
        blurb: "A profile is not an address.",
        stages: [
          { name: "Page", detail: "Fine for photos. Weak for name search." },
          { name: "Boost", detail: "You rent the next visitor." },
          { name: "Algorithm", detail: "Yesterday's regular may not see you today." },
        ],
      },
    ],
    wins: [
      { label: "Owned URL", detail: "Maps and Google point here." },
      { label: "Click to WhatsApp", detail: "The enquiry does not pass through a directory." },
      { label: "Local pages", detail: "City and service, written for search." },
      { label: "No pack renewal", detail: "Hosting is not a per-head tax." },
    ],
  },
  {
    slug: "ecommerce",
    youTitle: "The shelf is only yours.",
    youLine: "Keep the marketplace for a stranger’s first order. The repeat can live on your domain. Read your own fee schedule.",
    rivals: [
      {
        name: "Amazon / Flipkart",
        blurb: "Discovery with a landlord.",
        stages: [
          { name: "Seller", detail: "Catalogue on their aisle." },
          { name: "Fees", detail: "Repeat orders still pay the cut." },
          { name: "Ads", detail: "Rank is rented every week." },
        ],
      },
      {
        name: "Instagram shop",
        blurb: "DMs are not a store.",
        stages: [
          { name: "Grid", detail: "Pretty. No pincode, no invoice." },
          { name: "DM order", detail: "Stock is a guess." },
          { name: "Link in bio", detail: "Checkout is someone else's page." },
        ],
      },
    ],
    wins: [
      { label: "Your catalogue", detail: "Product pages on your domain." },
      { label: "Your checkout", detail: "UPI and a WhatsApp handoff." },
      { label: "Your list", detail: "Repeat buyers are not an app's asset." },
      { label: "Addon, not a religion", detail: "Sits on Launch or Growth. Marketplaces can stay." },
    ],
  },
  {
    slug: "payments",
    youTitle: "A settlement you can match to GST.",
    youLine: "Personal UPI has stages too. None of them are a book.",
    rivals: [
      {
        name: "Personal UPI",
        blurb: "GPay, PhonePe, a QR in the bio.",
        stages: [
          { name: "Personal QR", detail: "Shop and household share one history." },
          { name: "Chat receipt", detail: "The proof is a screenshot." },
          { name: "No name on the money", detail: "Refunds and GST week get ugly." },
        ],
      },
      {
        name: "Cash + notebook",
        blurb: "Still the default after the rush.",
        stages: [
          { name: "Counter cash", detail: "Fine at 8pm. Invisible at month end." },
          { name: "A notebook", detail: "One person can read it." },
          { name: "Reconstruction", detail: "The CA meets a story, not a trail." },
        ],
      },
    ],
    wins: [
      { label: "Named gateway", detail: "UPI, cards, payment links." },
      { label: "Same-day receipt", detail: "WhatsApp, not a photo of a screen." },
      { label: "Status you can see", detail: "Failed payments do not vanish." },
      { label: "Books can use it", detail: "The payment is an event, not a memory." },
    ],
  },
  {
    slug: "whatsapp",
    youTitle: "The number stays yours.",
    youLine: "A directory inbox and a single phone are both stages. Volume breaks both.",
    rivals: [
      {
        name: "One phone",
        blurb: "The Business app, until the queue wins.",
        stages: [
          { name: "Owner's phone", detail: "The first customer gets a good answer." },
          { name: "Shared phone", detail: "The second waits." },
          { name: "Missed follow-up", detail: "Reminders depend on memory." },
        ],
      },
      {
        name: "A lead vendor",
        blurb: "They hold the chat, then invoice it.",
        stages: [
          { name: "Their inbox", detail: "The conversation is not on your number." },
          { name: "Per lead", detail: "You pay for someone who searched you." },
          { name: "Export pain", detail: "Leaving means losing the thread." },
        ],
      },
    ],
    wins: [
      { label: "Your number", detail: "API inbox, not a rented chat." },
      { label: "Boring flows", detail: "Welcome, hours, status, reminder." },
      { label: "Human handoff", detail: "Odd questions still reach a person." },
      { label: "No lead fee", detail: "India message rates are not a Justdial pack." },
    ],
  },
  {
    slug: "analytics",
    youTitle: "Monday numbers. Not a weather report.",
    youLine: "Tools add stages of dashboards. Owners still guess.",
    rivals: [
      {
        name: "Bare Google Analytics",
        blurb: "Traffic without a conversion.",
        stages: [
          { name: "Pageviews", detail: "Looks busy. Says nothing about money." },
          { name: "No WhatsApp event", detail: "The real enquiry is invisible." },
          { name: "A monthly screenshot", detail: "Nobody changes a decision." },
        ],
      },
      {
        name: "A 40-tile BI",
        blurb: "Bought to look serious.",
        stages: [
          { name: "Connectors", detail: "Each tool is a project." },
          { name: "A wall of charts", detail: "Definitions drift by Friday." },
          { name: "Ignored", detail: "The owner goes back to asking the manager." },
        ],
      },
    ],
    wins: [
      { label: "Four questions", detail: "Enquiries, conversions, collections, what is stuck." },
      { label: "Same definition", detail: "One screen every Monday." },
      { label: "Tied to chat and pay", detail: "Not a weather report." },
      { label: "Then, maybe more", detail: "Fancy BI after the numbers are trusted." },
    ],
  },
  {
    slug: "compliance",
    youTitle: "The sale should produce the book.",
    youLine: "We are not your CA. We stop the stages that make filing archaeology. This is not legal advice.",
    rivals: [
      {
        name: "Chat invoices",
        blurb: "The bill is a photo, somewhere.",
        stages: [
          { name: "WhatsApp bill", detail: "Issued when someone remembers." },
          { name: "Cash off to the side", detail: "The sale and the book disagree." },
          { name: "Filing week", detail: "Someone reconstructs the month." },
        ],
      },
      {
        name: "A heavy finance suite",
        blurb: "200 features. The counter still uses paper.",
        stages: [
          { name: "Software buy", detail: "Looks like control." },
          { name: "Nobody opens it", detail: "Daily work did not change." },
          { name: "Parallel notebook", detail: "Two truths. The CA gets the worse one." },
        ],
      },
    ],
    wins: [
      { label: "Same event", detail: "Sale, payment and invoice together." },
      { label: "A due-date list", detail: "Visible before the scramble." },
      { label: "Trail, not a story", detail: "Your CA files from records." },
      { label: "Not a CA", detail: "We do not file GST for you. We stop the mess." },
    ],
  },
];

export function getRival(slug: string) {
  return rivals.find((r) => r.slug === slug);
}
