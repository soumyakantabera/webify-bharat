export type FaqItem = { q: string; a: string };

export type FaqBlock = {
  kicker: string;
  title: string;
  accent: string;
  intro: string;
  items: FaqItem[];
};

export const faqsByPage: Record<string, FaqBlock> = {
  industries: {
    kicker: "FAQ",
    title: "Does this fit",
    accent: "my kind of business?",
    intro: "Different shops. Same pattern: demand, conversation, collection, record.",
    items: [
      {
        q: "We are not a ‘tech company’. Will this feel alien on the floor?",
        a: "If the counter staff need a workshop, we failed. Retail scans, restaurants tap UPI, clinics send WhatsApp reminders, factories look at one stock number. The tech should disappear into the day.",
      },
      {
        q: "We operate in a Tier-2 city. Is this only for metros?",
        a: "Tier-2 and Tier-3 is often where this pays off fastest — Google + WhatsApp is how customers already find you, and the competitor’s website still says ‘under construction 2019’.",
      },
      {
        q: "Can one system cover shop + workshop + office?",
        a: "Yes, if we keep roles honest: counter takes money, store issues stock, owner sees the week. One login with the right buttons beats three tools that never talk.",
      },
      {
        q: "What if my industry is ‘none of these’?",
        a: "If you take enquiries, collect money and follow up, the pattern still holds. Tell us the messy part. We will not fake a case study in a sector we do not understand.",
      },
      {
        q: "Do you work with distributors and B2B, or only B2C?",
        a: "Both. B2B in India still closes on WhatsApp and needs payment links, invoice PDFs and a simple order status. The buyer is just wearing a company ID.",
      },
    ],
  },
  "industry:retail": {
    kicker: "Retail FAQ",
    title: "Shop floor questions,",
    accent: "not mall theory.",
    intro: "From kirana to showroom — the problems are stock, UPI and the customer who ‘will come back’.",
    items: [
      {
        q: "I have a busy counter. Who will update the website?",
        a: "Not the person packing. We set a simple catalogue habit — or we sync from the stock you already keep. A stale website is worse than none. If nobody will own it, we keep the site thin and the WhatsApp catalogue live.",
      },
      {
        q: "Can walk-in UPI and online orders sit in one book?",
        a: "That is the point. One product list, one stock count, two ways to pay. Otherwise you sell the last piece twice and fight in the evening WhatsApp group.",
      },
      {
        q: "Do I need a full POS like a supermarket?",
        a: "Not on day one. Many stores need a clean catalogue, a QR that settles to the business, and a daily total. Heavy POS comes when SKUs and staff demand it.",
      },
      {
        q: "What about BharatQR / credit on UPI / loyalty?",
        a: "UPI at the counter first. Loyalty second — a simple WhatsApp ‘thanks, here’s 5% next time’ beats a points engine nobody redeems. We add complexity when it earns.",
      },
      {
        q: "Will this help me compete with quick-commerce?",
        a: "You will not beat 10-minute delivery on chips. You can beat them on the SKUs they ignore, on trust, on alteration/service, and on the customer who wants a human. Digital should advertise that, not pretend you are Blinkit.",
      },
    ],
  },
  "industry:restaurant": {
    kicker: "Restaurant FAQ",
    title: "QR, kitchen, WhatsApp —",
    accent: "without Zomato owning you.",
    intro: "Aggregators bring guests. Your own loop keeps the margin.",
    items: [
      {
        q: "Zomato and Swiggy already send orders. Why another system?",
        a: "Because they charge for the privilege and own the guest. Your QR menu, UPI, and WhatsApp ‘table 4 wants extra raita’ should work when the aggregator is down — and for the diner already sitting in your cafe.",
      },
      {
        q: "Do I need a fancy QR menu?",
        a: "You need a menu that loads on a cheap Android, shows today’s 86s, and takes UPI without calling the captain. Animated 3D burgers are how guests wait longer.",
      },
      {
        q: "What about FSSAI and hygiene photos?",
        a: "Put the FSSAI number and a real kitchen photo on the site. Indian diners look. Fake stock pasta does not help a South Indian mess.",
      },
      {
        q: "Can we take table orders and parcel on WhatsApp?",
        a: "Yes. A labelled number, a short flow (dine-in / parcel / catering), and a kitchen ticket. The 9 pm rush is not the time to scroll 40 chat threads.",
      },
      {
        q: "How do repeats work without another aggregator coupon?",
        a: "A WhatsApp note after the meal — honestly useful, not ‘RATE US 5 STAR’. Regulars come back to a number they already have. That list is an asset. Guard it.",
      },
    ],
  },
  "industry:healthcare": {
    kicker: "Clinic FAQ",
    title: "Appointments, reminders,",
    accent: "fewer no-shows.",
    intro: "Patients already WhatsApp the reception. We make that official, private and on time.",
    items: [
      {
        q: "Is this a hospital EMR / ABDM replacement?",
        a: "No. We do not pretend to be a clinical system of record. We handle the operational edge: discover the clinic, book, remind, collect, follow up. Clinical notes stay where your doctor already keeps them.",
      },
      {
        q: "Patients book by calling the front desk. Will they really use WhatsApp?",
        a: "Many already do — they just get left on read. A QR at the reception and on the prescription pad, plus a reminder the evening before, cuts no-shows without asking anyone to download an app.",
      },
      {
        q: "What about privacy of patient chats?",
        a: "Do not run a clinic from a personal phone. Use a business number, limit who sees the inbox, and collect only what you need. India’s DPDP rules expect purpose and care — a shared family WhatsApp is not that.",
      },
      {
        q: "Can we collect consultation fees before the slot?",
        a: "Yes, with a UPI link on the confirmation. Partial prepaid is the simplest no-show defence for private clinics. Always keep a human override for elderly patients who will only pay at the desk.",
      },
      {
        q: "Multi-doctor, two locations — possible?",
        a: "Yes, if each calendar is named clearly (‘Dr. Mehta, Baner, Sat 10–1’). The website and WhatsApp should never double-book. That is the whole product.",
      },
    ],
  },
  "industry:education": {
    kicker: "Institute FAQ",
    title: "Admissions and fees",
    accent: "without the spreadsheet panic.",
    intro: "Coaching, schools, colleges — the bottleneck is usually follow-up and fee collection, not another LMS.",
    items: [
      {
        q: "Parents only trust WhatsApp groups. Why a website?",
        a: "The group is for the batch that already joined. The website and a proper number are how the next batch finds you in April. Rank, fees, timings, and a ‘talk to counsellor’ button beat a leaked PDF.",
      },
      {
        q: "Can we collect term fees on UPI without chaos?",
        a: "Named payment links per student, GST invoice where applicable, and a receipt on WhatsApp. That ends ‘I already paid, see screenshot’ fights at the office window.",
      },
      {
        q: "Do you build a full LMS like Byju’s?",
        a: "No. If you need video classrooms, say so and we will be honest about scope. Most institutes first need admissions, fees, reminders and a parent-facing status — not a unicorn clone.",
      },
      {
        q: "Multiple centres, one brand?",
        a: "Yes. Same look, different addresses, different batch calendars. Google Business Profile per centre. One owner dashboard so Pune does not steal Delhi’s counsellor slots.",
      },
      {
        q: "What about NEP / board / university rules?",
        a: "We do not file those. We keep the public claim on the site consistent with what you are actually approved to teach. Overclaiming on a homepage is how institutes get into trouble.",
      },
    ],
  },
  "industry:real-estate": {
    kicker: "Realty FAQ",
    title: "Leads that do not",
    accent: "die in a broker’s phone.",
    intro: "Site visits are expensive. A forgotten WhatsApp is how projects bleed.",
    items: [
      {
        q: "Is a listings website enough in 2026?",
        a: "Listings without a follow-up machine are a PDF with extra steps. Capture, qualify, remind, assign to a closer, and keep the owner’s view of the funnel. MagicBricks already exists — your edge is speed-to-lead.",
      },
      {
        q: "RERA — do you handle that?",
        a: "We will not file RERA for you. We will not hide the RERA number if you have one. Indian buyers look. Fake ‘possession Dec 2024’ on a 2026 site is how brands get dragged.",
      },
      {
        q: "Brokers will hate a system they cannot control.",
        a: "Give them a clean capture link and credit. The CRM is so the builder still owns the lead when the broker changes SIM cards. That is the point.",
      },
      {
        q: "Can NRIs enquire and pay token online?",
        a: "Enquiries, yes. Token/payment depends on your legal structure and bank. We can take a serious expression of interest; we will not improvise FEMA from a landing page.",
      },
      {
        q: "Site-visit reminders actually work?",
        a: "A WhatsApp the evening before, with map pin and the RM’s name, outperforms a 9 am call while the customer is in traffic. No-show rates are a process problem.",
      },
    ],
  },
  "industry:manufacturing": {
    kicker: "Plant FAQ",
    title: "From gate register to",
    accent: "a number the MD trusts.",
    intro: "Job work, batch, dispatch — Excel and WhatsApp groups do not scale past a few lines.",
    items: [
      {
        q: "We are a job-work unit. Do we even need a website?",
        a: "Your buyers still search GSTIN, capacity and ‘do they exist’. A clear site with process photos, certifications and a proper enquiry form beats a blurry Justdial page. The operations system is the bigger win.",
      },
      {
        q: "Can this replace our SAP dream?",
        a: "Not if you truly need SAP. Most 40–200 person plants need dispatch visibility, stock that matches the floor, and a weekly output number — not a 14-module rollout that dies in training.",
      },
      {
        q: "Operators will not type on a computer.",
        a: "Then they should not have to. Big buttons, a shop-floor tablet, or a WhatsApp update to a bot. If the UI assumes an accountant, it will be bypassed by a paper chit.",
      },
      {
        q: "B2B payments are NEFT, not UPI.",
        a: "Fine. Record the UTR, match it to the invoice, show overdue. For MSME buyers, UPI and links still close smaller POs. We meet the payment habit, we do not lecture it.",
      },
      {
        q: "What about quality / ISO / customer audits?",
        a: "Auditors ask for traceability. If batch, dispatch and invoice are one chain, you stop assembling files at 11 pm before the visit. We are not your certifying body. We make the evidence less heroic.",
      },
    ],
  },
  work: {
    kicker: "Work FAQ",
    title: "What these case-style",
    accent: "stories actually mean.",
    intro: "We show the pattern of work. Named client logos wait for written permission.",
    items: [
      {
        q: "Are these live client logos?",
        a: "Not until the client says so in writing. Indian SMBs are rightly careful. What you see is the shape of the work — retail, restaurant, clinic, reporting, finance ops — not a fake Fortune 500 strip.",
      },
      {
        q: "Can I see a demo in my category?",
        a: "Yes. Bring a messy WhatsApp export or a current site. A 30-minute walkthrough of a similar build is more honest than a glossy PDF.",
      },
      {
        q: "Do you only work with ‘digital-ready’ teams?",
        a: "If they were fully digital-ready they would not call. We start from the counter, the clinic desk, the plant gate. Literacy with GPay is enough.",
      },
      {
        q: "What does a typical first win look like?",
        a: "A site that converts, a UPI flow that reconciles, or a WhatsApp inbox that does not lose Monday’s leads. We prefer a small win in weeks over a transformation manifesto.",
      },
      {
        q: "Can you work alongside our existing vendor?",
        a: "If they own a piece that works, we will not rip it for sport. We are allergic to dual-running three CRMs. We will say when a clean cut is cheaper.",
      },
    ],
  },
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
