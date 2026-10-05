export type FaqItem = { q: string; a: string };

export type FaqBlock = {
  kicker: string;
  title: string;
  accent: string;
  intro: string;
  items: FaqItem[];
};

export const faqsByPage: Record<string, FaqBlock> = {
  about: {
    kicker: "About FAQ",
    title: "Who you are actually",
    accent: "hiring.",
    intro: "Culture-fit questions, minus the culture-deck.",
    items: [
      {
        q: "Where is Webify Bharat based?",
        a: "We work with Indian businesses, in Indian payment rails, on Indian operating realities. Discovery is on a call or WhatsApp. We do not need you to fly to a co-working space to prove seriousness.",
      },
      {
        q: "Are you an agency that will vanish after Diwali intern season?",
        a: "The offer is an accountable partner, not a 20-person pitch team that rotates off your Slack. You will know who owns the work. If we cannot staff it, we will not sell it.",
      },
      {
        q: "Do you work outside India?",
        a: "The product is tuned for India: UPI, GST, WhatsApp, Hindi/Hinglish, MSME KYC. If you are an Indian-origin business abroad selling back home, we can talk. We are not a generic global web shop.",
      },
      {
        q: "What do you refuse to build?",
        a: "Fake urgency landing pages, lead-spam blasts, clone apps of regulated products, and ‘AI that replaces your doctor’. If it would embarrass you in front of a customer, we would rather lose the job.",
      },
      {
        q: "Can I talk to a person, not a bot?",
        a: "Yes. The WhatsApp button goes to a human consult. We use automation for your customers when it helps — we do not hide behind it ourselves.",
      },
    ],
  },
  blog: {
    kicker: "Insights FAQ",
    title: "Practical writing.",
    accent: "No growth-hacking theatre.",
    intro: "Short guides for people who run shops, not slide decks.",
    items: [
      {
        q: "Who is this for?",
        a: "Owners and operators who already sell in India and are tired of advice written for Series-B SaaS. Websites, UPI, WhatsApp, GST-ready ops, numbers.",
      },
      {
        q: "Do you put every client’s internals on the blog?",
        a: "No. Patterns, not gossip. Named stories wait for permission.",
      },
      {
        q: "Can I request a topic?",
        a: "Yes — if it is a real operating question (e.g. ‘COD vs UPI for a 200-order month’). We will not write ‘10 AI tools that will 10x you’.",
      },
      {
        q: "Is this financial or legal advice?",
        a: "No. GST, labour and company law belong with your CA and counsel. We write about the systems that make their job less painful.",
      },
      {
        q: "How often do you publish?",
        a: "When we have something worth a Monday morning. A stale honest piece beats a weekly content machine of fluff.",
      },
    ],
  },
  "blog:website-growth": {
    kicker: "Article FAQ",
    title: "Website growth,",
    accent: "without the traffic fetish.",
    intro: "Companion questions to the article — the ones owners ask after they finish reading.",
    items: [
      {
        q: "How fast should the site load on Jio 4G?",
        a: "If the first screen takes more than a few seconds on a mid-range Android, you are paying for bounce. Compress photos, skip autoplay video, keep the WhatsApp button visible without waiting for seven scripts.",
      },
      {
        q: "Should every page have a WhatsApp button?",
        a: "The pages that sell should. A floating button on the privacy policy is just anxiety. One clear primary action per screen.",
      },
      {
        q: "Is a blog necessary for ranking?",
        a: "Only if you will answer real searches (‘best paediatric clinic in Kothrud’, ‘bulk tiffin Pune’). An abandoned ‘Insights’ page from 2022 hurts more than it helps.",
      },
      {
        q: "Do I need English and Hindi homepages?",
        a: "If your buyer mix is bilingual, yes for the first screen and contact path. Machine-translating 40 pages into broken Hindi is worse than good English plus a Hindi WhatsApp greeting.",
      },
    ],
  },
  "blog:payment-trends": {
    kicker: "Article FAQ",
    title: "Payments in India,",
    accent: "without the fintech pitch.",
    intro: "UPI is the default. Everything else is a special case.",
    items: [
      {
        q: "Should I turn off COD completely?",
        a: "Only if your category and customer can take it. Many first-time buyers still want COD. Offer UPI first, COD as a fallback, and you will usually lift prepaid without a fight.",
      },
      {
        q: "Are payment links ‘professional’ enough?",
        a: "A named Razorpay/PayU/Cashfree link with your business title is more professional than a personal UPI ID called `ramesh1987@okaxis`. Links are how a lot of serious Indian B2B still closes.",
      },
      {
        q: "What about international cards?",
        a: "Enable them if you actually have NRI or export buyers. Otherwise you are paying for extra fraud surface. UPI + Rupay/cards covers most domestic.",
      },
      {
        q: "Settlement is T+2. Can I get faster?",
        a: "Depends on the gateway and your risk profile. Ask before you go live. Instant settlement products exist; they are not free. Do not promise customers money you have not received.",
      },
    ],
  },
  "blog:whatsapp-automation": {
    kicker: "Article FAQ",
    title: "Automation that still",
    accent: "sounds like your shop.",
    intro: "The 24-hour window, templates, and why your personal phone is a single point of failure.",
    items: [
      {
        q: "What is the 24-hour window?",
        a: "After a customer messages you, you can reply freely for a day. After that, official template messages. That is why ‘we will broadcast at 11 pm from the owner’s phone’ eventually dies.",
      },
      {
        q: "Can I import my entire phonebook?",
        a: "Not as a spam list. Use people who opted in — customers, not every wedding contact. Quality of the number matters more than a 40,000 dump.",
      },
      {
        q: "Blue ticks and ‘online’ — should staff chase instantly?",
        a: "A one-minute auto-ack plus a human in a defined SLA (say 15 minutes in business hours) beats anxious instant typing. Burnout is also an operations metric.",
      },
      {
        q: "Is unofficial ‘WhatsApp sender’ software OK?",
        a: "No. Those tools get numbers banned. Official API is slower to set up and is the only version we will put our name on.",
      },
    ],
  },
  "blog:analytics-guide": {
    kicker: "Article FAQ",
    title: "Metrics that survive",
    accent: "a sceptical owner.",
    intro: "If the number cannot change a Monday decision, it does not belong on the screen.",
    items: [
      {
        q: "What four numbers would you start with?",
        a: "Enquiries, paid customers, money actually settled, and one bottleneck (stockouts, no-shows, overdue invoices, or delayed dispatch). Everything else is a luxury.",
      },
      {
        q: "GA4 vs a simple Google Sheet?",
        a: "A believed sheet beats an unused GA4 property. We instrument the site either way. The review ritual is the product.",
      },
      {
        q: "Can I see ads ROI?",
        a: "Only if ads, landing page, WhatsApp and payments share a definition of ‘lead’ and ‘sale’. Otherwise you will scale the wrong campaign with confidence.",
      },
      {
        q: "Should staff be measured on these numbers?",
        a: "Careful. Measure the process they control. Punishing a receptionist for slow Google rankings is how people stop reporting the truth.",
      },
    ],
  },
  "blog:gst-compliance": {
    kicker: "Article FAQ",
    title: "Books that match",
    accent: "the day you just had.",
    intro: "Compliance is easier when the invoice was born with the sale.",
    items: [
      {
        q: "We are under the e-invoice limit. Are we safe ignoring systems?",
        a: "You can. You will still hate filing month. Sequential invoices, a payment trail and expense capture are worth it at ₹1 crore, not only at ₹5 crore.",
      },
      {
        q: "Can I bill from WhatsApp and still be GST-clean?",
        a: "If the invoice is a real GST invoice (number, GSTIN, tax break-up) and the payment is matched, yes. A photo of a notebook is not an invoice.",
      },
      {
        q: "Who clicks ‘file GSTR’?",
        a: "Your CA or internal accounts. Our job is that they are not waiting on you to forward 200 chats.",
      },
      {
        q: "Cash sales — still a thing?",
        a: "They exist. Unrecorded cash is how businesses fail audits and lose the plot on margin. We will not build a second set of books. We will make the official path easy enough that people use it.",
      },
    ],
  },
  "blog:business-growth": {
    kicker: "Article FAQ",
    title: "Growth that does not",
    accent: "add another group chat.",
    intro: "Sequence beats slogans.",
    items: [
      {
        q: "What should we automate first?",
        a: "The thing you already do ten times a day badly: acknowledgement, reminder, receipt, or ‘yes we are open’. Automating a messy process just sends the mess faster.",
      },
      {
        q: "When is it time to hire a ‘digital marketing agency’?",
        a: "After the site converts, the number is answered, and payments reconcile. Buying ads into a broken inbox is how you rent expensive chaos.",
      },
      {
        q: "Can I skip the website and only do WhatsApp + UPI?",
        a: "For a hyper-local stall, maybe. The moment a stranger Googles you — vendor form, bank, bride’s father, procurement intern — you will wish you had a page that looks like a business.",
      },
      {
        q: "How do we know the system is working?",
        a: "Fewer lost leads, faster collections, shorter Monday reconciliation, and a number the owner believes. If those four do not move, we built a toy.",
      },
    ],
  },
  "blog:justdial-vs-own-website": {
    kicker: "Article FAQ",
    title: "Justdial vs an owned",
    accent: "website.",
    intro: "The question behind every lead-pack renewal.",
    items: [
      {
        q: "Should I cancel Justdial tomorrow?",
        a: "Only if the pack no longer sends unique, profitable work. Build the owned site and GBP first. Then stop paying for name searches you already earned.",
      },
      {
        q: "Is IndiaMART the same problem?",
        a: "Same rent, different trade. IndiaMART fits some B2B RFQs. Repeat OEM and dealer buyers should still land on your catalogue and WhatsApp.",
      },
      {
        q: "Will Google rank me without a directory?",
        a: "Yes — Maps pack plus an owned URL with NAP match is the 2026 path. Directories are optional citations, not the front door.",
      },
    ],
  },
  "blog:zomato-commission-vs-own-ordering": {
    kicker: "Article FAQ",
    title: "Aggregator cut vs",
    accent: "your own QR.",
    intro: "Discovery vs the regular who already knows you.",
    items: [
      {
        q: "What commission do Zomato and Swiggy take?",
        a: "It varies by city and contract, often mid-teens to high-twenties plus ads inside the app. Read your current agreement. Regulars should not all pay that tax.",
      },
      {
        q: "Will I lose visibility if I push my own QR?",
        a: "Keep the aggregator for strangers. Put menu, Maps and UPI on a site you own for people who already chose you.",
      },
    ],
  },
  "blog:whatsapp-business-api-india": {
    kicker: "Article FAQ",
    title: "When the Business app",
    accent: "is not enough.",
    intro: "API vs the green app on one phone.",
    items: [
      {
        q: "Do I need a BSP?",
        a: "Yes, to go on WhatsApp Business Platform. Webify Bharat designs the website-to-inbox loop; a BSP provisions the API. Your number stays yours.",
      },
      {
        q: "Are India message rates high?",
        a: "Utility and authentication are among the lowest globally. Marketing templates cost more. Use API for reminders and receipts, not spam.",
      },
    ],
  },
  "blog:upi-payment-gateway-msme": {
    kicker: "Article FAQ",
    title: "Personal QR vs a",
    accent: "named gateway.",
    intro: "GST and refunds are the line.",
    items: [
      {
        q: "When must I leave personal GPay?",
        a: "When volume, refunds or a GSTIN make mixed personal-business money a filing problem. Named gateway + payment links is the fix.",
      },
    ],
  },
  "blog:google-business-profile-india": {
    kicker: "Article FAQ",
    title: "Maps pack questions",
    accent: "Indian owners ask.",
    intro: "Category search is how strangers find you.",
    items: [
      {
        q: "Why is GBP not enough alone?",
        a: "It wins the pack. The website wins the name search and gives AI Overviews something to cite. Point the profile at your URL.",
      },
      {
        q: "What category should I pick?",
        a: "The primary category closest to how people search — not the fanciest. Then match that language on your service pages.",
      },
    ],
  },
  "blog:website-cost-india-2026": {
    kicker: "Article FAQ",
    title: "What websites actually",
    accent: "cost in India.",
    intro: "Compare scope and GST, not the first integer.",
    items: [
      {
        q: "Is ₹9,999 realistic?",
        a: "As a Launch foundation — site, analytics, WhatsApp setup — yes. Catalogues, bilingual copy and gateways sit on Growth or a scoped quote.",
      },
      {
        q: "Is GST included?",
        a: "Ask every vendor. Most Indian quotes are exclusive of 18% GST. We state tax treatment in the proposal.",
      },
    ],
  },
  "blog:razorpay-vs-cashfree-vs-payu": {
    kicker: "Article FAQ",
    title: "Picking a payment",
    accent: "gateway.",
    intro: "TDR is not the whole bill.",
    items: [
      {
        q: "Who is cheapest?",
        a: "Card TDR clusters near 2%. UPI is cheaper. Success rate, settlement and KYC friction usually beat 0.1% shopping.",
      },
      {
        q: "Do you resell a gateway?",
        a: "No. We integrate checkout and receipts on your site and say if KYC is the real blocker.",
      },
    ],
  },
  "blog:hindi-hinglish-business-website": {
    kicker: "Article FAQ",
    title: "Language on the",
    accent: "business website.",
    intro: "Match the counter, not the agency deck.",
    items: [
      {
        q: "Full Hindi site or bilingual?",
        a: "Often bilingual headlines and WhatsApp copy are enough. Full duplicate sites only when search demand is clearly vernacular.",
      },
    ],
  },
  "blog:local-seo-near-me-india": {
    kicker: "Article FAQ",
    title: "Near me",
    accent: "SEO.",
    intro: "Relevance, distance, reviews — not 200 fake citations.",
    items: [
      {
        q: "Do citation blasts still work?",
        a: "Spam directories rarely beat a verified GBP, matching NAP, service pages and real reviews. Pay for unique work, not junk listings.",
      },
    ],
  },
  "blog:clinic-whatsapp-appointments-india": {
    kicker: "Article FAQ",
    title: "Clinic stack without an",
    accent: "EMR on day one.",
    intro: "Public layer first: site, Maps, WhatsApp, UPI.",
    items: [
      {
        q: "Is this clinic management software?",
        a: "No. It is the public door — website, GBP, WhatsApp slots, UPI. Keep your clinical records where they belong.",
      },
    ],
  },
  "blog:bing-places-copilot-india": {
    kicker: "Article FAQ",
    title: "Bing in a",
    accent: "Google country.",
    intro: "Free NAP insurance for Copilot.",
    items: [
      {
        q: "Is Bing worth it in India?",
        a: "Google first. Bing Places takes twenty minutes and helps Copilot. Keep NAP identical. Then invest in the website both point at.",
      },
    ],
  },
  "blog:gst-website-quote-india": {
    kicker: "Article FAQ",
    title: "Tax on the",
    accent: "web invoice.",
    intro: "18% GST is the usual extra.",
    items: [
      {
        q: "Can I claim input credit?",
        a: "If you are GST-registered and the vendor issues a proper tax invoice. Confirm with your CA. We will not pretend to be one.",
      },
    ],
  },
  contact: {
    kicker: "Contact FAQ",
    title: "Before you hit",
    accent: "Chat on WhatsApp.",
    intro: "What happens after you write to us — no mystery, no ticket bot.",
    items: [
      {
        q: "What should I send so this is not a wasted chat?",
        a: "What you sell, which city, what is breaking (enquiries, payments, follow-ups, GST chaos), and a link or photo of the current setup. Five lines beat a 20-page RFP.",
      },
      {
        q: "How fast do you reply?",
        a: "In business hours, typically the same day on WhatsApp. If it is a festival weekend, expect a delay. We will not pretend to be a 24×7 call centre.",
      },
      {
        q: "Is the consult free?",
        a: "The first working conversation is. We map the bottleneck and say whether we are the right fit. If we are not, we will tell you — including ‘talk to your CA’ or ‘you need a marketplace, not us’.",
      },
      {
        q: "Will you sign an NDA before we talk?",
        a: "For a first chat, a short WhatsApp brief is enough. If you are sharing customer databases or unreleased products, we can do a simple NDA before the deep dive.",
      },
      {
        q: "Can we do a video call, not only WhatsApp?",
        a: "Yes, after the first ping. WhatsApp is the door because that is where Indian owners already are. The working session can be a proper call.",
      },
    ],
  },
};

export function getFaq(key: string): FaqBlock {
  return faqsByPage[key] ?? faqsByPage.blog ?? faqsByPage.home;
}
