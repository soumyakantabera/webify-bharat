export type CityFaq = { q: string; a: string };

export type CitySection = { heading: string; paragraphs: string[] };

export type City = {
  slug: string;
  name: string;
  state: string;
  region: "North" | "South" | "East" | "West" | "Central" | "Northeast" | "UT";
  hub?: string;
  photo: string;
  industries: string[];
  headline: string;
  lead: string;
  answer: string;
  sections: CitySection[];
  marketplacePain: string;
  cloudKitchen: string;
  stack: string[];
  keywords: string[];
  faqs: CityFaq[];
};

function cityFaqs(name: string, state: string): CityFaq[] {
  return [
    {
      q: `Do ${name} businesses still need Amazon or Flipkart?`,
      a: `Marketplaces are fine for discovery and long-tail SKUs. Repeat buyers in ${name} should order on your own site, WhatsApp catalogue and UPI so you keep margin and the customer list. Webify Bharat builds that owned layer for ${state} MSMEs.`,
    },
    {
      q: `What does a cloud kitchen in ${name} need beyond Zomato?`,
      a: `A menu page that ranks for your brand, QR or WhatsApp ordering for regulars, named UPI/gateway settlements, and a simple order log. Aggregators stay for strangers; regulars should not pay 15–30% forever.`,
    },
    {
      q: `Can a single-outlet shop in ${name} afford a real website?`,
      a: `Yes. Webify Bharat Launch starts at ₹9,999 for a professional site, analytics and WhatsApp setup. Growth adds payments. Compare that to a year of Justdial packs or marketplace ads on your own brand name.`,
    },
    {
      q: `Will this work if customers message in the local language?`,
      a: `Yes. Buttons, menus and WhatsApp flows can match the counter — Hindi, Hinglish, Tamil, Bengali, Marathi or other languages staff already type.`,
    },
  ];
}

export const cities: City[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    photo: "retail.webp",
    industries: ["Finance & services", "Retail & fashion", "Restaurants & cloud kitchens", "Media", "Logistics"],
    headline: "Own the Mumbai customer — not the marketplace bill",
    lead: "Mumbai runs on speed: UPI at the counter, WhatsApp for the next order, Google for the name search. Webify Bharat builds the site and stack Maharashtra MSMEs control so Amazon, Flipkart and food apps stay optional discovery — not a permanent tax on every repeat sale.",
    answer: "Webify Bharat helps Mumbai and Maharashtra businesses own websites, WhatsApp and UPI so organic enquiries cost ₹0 extra per lead, while Amazon, Flipkart and food aggregators remain optional channels — not the only front door.",
    sections: [
      {
        heading: "Major industries going digital in Mumbai",
        paragraphs: [
          "Mumbai’s economy spans finance ops, wholesale markets, apparel, restaurants, clinics and professional services. Almost every trade now gets found on Google Maps or Instagram first. The shops that win keep the follow-up on a number and URL they own.",
          "From Dadar kiranas to Bandra boutiques and Andheri cloud kitchens, the pattern is the same: personal GPay QR, messy WhatsApp, and a Justdial or marketplace listing that rents the relationship. A mobile-first site plus named checkout reverses that.",
        ],
      },
      {
        heading: "Amazon and Flipkart charges vs your own storefront",
        paragraphs: [
          "Selling on Amazon or Flipkart in India typically means referral fees, closing fees, shipping, and often ads to stay visible inside their app. For many categories the effective take can sit well into double digits — before returns.",
          "Use marketplaces for reach. Move high-intent repeats to a catalogue on your domain with UPI and WhatsApp support. That is how Mumbai brands protect margin without disappearing from search.",
        ],
      },
      {
        heading: "Cloud kitchens and multi-outlet F&B",
        paragraphs: [
          "Single-outlet and multi-outlet kitchens across Mumbai still lean on Swiggy and Zomato for volume. Commission plus ads is expensive on regulars who already know the brand. A menu site, WhatsApp parcel line and table QR-to-UPI keep direct orders on your books.",
          "Multi-outlet groups need one brand site, location pages, and a shared order or enquiry flow — not five different Instagram bios.",
        ],
      },
    ],
    marketplacePain:
      "Marketplace fees, ads and returns quietly erase margin on products Mumbai customers would reorder direct if your site and WhatsApp were clear.",
    cloudKitchen:
      "Cloud kitchens: treat aggregators as discovery; own the regular via menu page, WhatsApp and UPI.",
    stack: ["Business website + local SEO", "WhatsApp order chat", "UPI / payment gateway", "GST-ready receipts", "Weekly enquiry dashboard"],
    keywords: ["website design Mumbai", "Mumbai MSME digital", "cloud kitchen Mumbai website", "Amazon Flipkart alternative Mumbai"],
    faqs: cityFaqs("Mumbai", "Maharashtra"),
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    region: "South",
    photo: "business-owner.webp",
    industries: ["IT services & startups", "Retail", "Education & coaching", "Healthcare", "Food & cloud kitchens"],
    headline: "Bengaluru businesses need owned channels — not only SaaS theatre",
    lead: "Bengaluru is full of tools and short on systems the owner opens on Monday. Webify Bharat builds practical websites, WhatsApp and UPI for Karnataka MSMEs so Google and chat send customers you keep — without renting every lead from directories or marketplaces.",
    answer: "In Bengaluru, Webify Bharat builds owned websites, WhatsApp and UPI for MSMEs so organic leads stay free of per-lead fees, while Amazon, Flipkart and food apps remain optional — not the whole business.",
    sections: [
      {
        heading: "Industries shifting online in Bengaluru",
        paragraphs: [
          "Beyond tech campuses, Bengaluru’s real economy is tuition centres, clinics, multi-cuisine kitchens, apparel stores and service firms. Parents and patients still search “near me”, then WhatsApp.",
          "English-only agency sites fail neighbourhood trades. Kannada or bilingual CTAs, Maps alignment and a number that answers convert better than a slideshow of stock skylines.",
        ],
      },
      {
        heading: "Marketplace economics for Karnataka sellers",
        paragraphs: [
          "Amazon and Flipkart referral structures vary by category but routinely stack fees, fulfilment and advertising. Many Bengaluru D2C brands discover too late that marketplace-only growth does not build an owned list.",
          "A simple storefront or catalogue on your domain with UPI checkout is the hedge. Keep marketplaces for overflow; own the repeat.",
        ],
      },
      {
        heading: "Cloud kitchens from Koramangala to Whitefield",
        paragraphs: [
          "Delivery-first kitchens need clean menus, allergen notes, and a direct order path. Aggregator dependence is a margin risk when fuel and labour already moved.",
          "Webify Bharat sets menu pages, WhatsApp ordering and payment links so single and multi-outlet kitchens can mix platform volume with owned regulars.",
        ],
      },
    ],
    marketplacePain:
      "Platform ads on your own brand name are expensive. Owned SEO and WhatsApp cut that habit.",
    cloudKitchen:
      "Bengaluru cloud kitchens: platform for strangers, WhatsApp+UPI for people who already ordered twice.",
    stack: ["Local SEO website", "WhatsApp Business flows", "UPI gateway", "Analytics on enquiries", "Optional catalogue"],
    keywords: ["website design Bengaluru", "MSME website Bangalore", "cloud kitchen Bengaluru", "ecommerce without Flipkart fees"],
    faqs: cityFaqs("Bengaluru", "Karnataka"),
  },
  {
    slug: "delhi",
    name: "New Delhi",
    state: "Delhi (NCT)",
    region: "UT",
    hub: "NCR (Delhi–Noida–Gurugram)",
    photo: "retail.webp",
    industries: ["Wholesale & retail", "Restaurants", "Education", "Healthcare", "Professional services"],
    headline: "Delhi–NCR: stop paying rent on customers who already searched you",
    lead: "From Chandni Chowk wholesale to South Delhi clinics and Gurugram services, NCR buyers Google, check Maps, then message WhatsApp. Webify Bharat builds the owned URL and inbox so Justdial packs and marketplace cuts are not the default business model.",
    answer: "Webify Bharat helps Delhi–NCR businesses own websites, WhatsApp and UPI checkout so Google and Maps enquiries cost ₹0 extra per lead, reducing dependence on Amazon, Flipkart and directory lead packs.",
    sections: [
      {
        heading: "NCR industries moving online",
        paragraphs: [
          "Wholesale traders, fashion retailers, coaching institutes, nursing homes and multi-outlet F&B all face the same leak: enquiries on personal phones, collections on personal UPI, zero weekly report.",
          "A professional site with NAP matching Google Business Profile is the minimum trust layer when a vendor form or parent Googles your name.",
        ],
      },
      {
        heading: "Amazon, Flipkart and the Delhi seller",
        paragraphs: [
          "Marketplace fees plus return logistics hit hard on low-margin categories common in Delhi wholesale-to-retail chains. Ads inside the platform to defend rank add another line item.",
          "Owned e-commerce or WhatsApp catalogue with UPI does not replace every marketplace order — it protects the profitable repeats and B2B relationships.",
        ],
      },
      {
        heading: "Cloud kitchens across Delhi–NCR",
        paragraphs: [
          "Single dark kitchens and multi-brand kitchens both need a direct channel. Regular office-park customers should not only exist inside Swiggy.",
          "Menu page, WhatsApp group or chat ordering, and settlement that accounts can reconcile — that is the stack.",
        ],
      },
    ],
    marketplacePain:
      "Delhi sellers often grow on marketplaces then discover they do not own the customer. Fix that with a domain and number you control.",
    cloudKitchen:
      "NCR cloud kitchens: mix aggregator volume with owned QR and WhatsApp regulars.",
    stack: ["Website + GBP", "WhatsApp inbox", "UPI payments", "GST invoices", "Lead dashboard"],
    keywords: ["website design Delhi", "NCR MSME website", "cloud kitchen Delhi", "Flipkart seller alternative Delhi"],
    faqs: cityFaqs("Delhi", "Delhi NCR"),
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    photo: "manufacturing.webp",
    industries: ["Manufacturing & auto ancillaries", "Healthcare", "Education", "Retail", "Seafood & F&B"],
    headline: "Chennai industry and local trade — online without giving away the margin",
    lead: "Tamil Nadu’s capital mixes factories, clinics, tuition and neighbourhood retail. Webify Bharat builds bilingual-capable sites, WhatsApp and UPI so Chennai MSMEs own the enquiry path instead of renting it from IndiaMART, Amazon or food apps.",
    answer: "Webify Bharat serves Chennai and Tamil Nadu MSMEs with owned websites, WhatsApp and UPI — so factory, clinic and shop leads are not locked inside marketplace or directory fee structures.",
    sections: [
      {
        heading: "Industries going digital in Chennai",
        paragraphs: [
          "Auto ancillaries and manufacturers still live on IndiaMART RFQs. Clinics and coaching brands live on WhatsApp. Retail lives on Instagram DMs. Each channel can work — until you do not own the list.",
          "A factory-direct product page or a clinic site with appointment WhatsApp is the durable layer under ads and portals.",
        ],
      },
      {
        heading: "E-commerce fees vs own catalogue",
        paragraphs: [
          "Amazon and Flipkart remain large for Tamil Nadu sellers, but fee stacks and ranking ads compress margin. Regional brands with repeat demand should offer direct UPI checkout.",
          "Webify Bharat integrates catalogue, gateway and WhatsApp support without forcing a full ERP.",
        ],
      },
      {
        heading: "Cloud kitchens and multi-outlet F&B in Chennai",
        paragraphs: [
          "From cloud kitchens to traditional multi-outlet brands, aggregator commission is a known line item. Direct parcel via WhatsApp and menu SEO recovers margin on loyal areas.",
        ],
      },
    ],
    marketplacePain:
      "Portal and marketplace fees are not growth — they are rent. Own the URL for the customers who already trust you.",
    cloudKitchen:
      "Chennai kitchens: aggregator for reach, owned menu + UPI for regulars.",
    stack: ["Tamil/English website", "WhatsApp API or inbox", "UPI gateway", "Local SEO", "Simple BI"],
    keywords: ["website design Chennai", "MSME Chennai digital", "cloud kitchen Chennai", "IndiaMART alternative Chennai"],
    faqs: cityFaqs("Chennai", "Tamil Nadu"),
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South",
    photo: "restaurant.webp",
    industries: ["IT & services", "Pharma & healthcare", "Restaurants & biryani brands", "Retail", "Education"],
    headline: "Hyderabad growth without surrendering every order to platforms",
    lead: "Hyderabad’s mix of tech, pharma, food brands and retail needs digital systems that settle in INR and speak WhatsApp. Webify Bharat builds owned sites and UPI so Amazon, Flipkart and food aggregators do not become the only customer relationship.",
    answer: "In Hyderabad, Webify Bharat builds websites, WhatsApp and UPI for MSMEs so organic Google and chat leads stay free of per-lead fees, cutting over-reliance on marketplaces and aggregators.",
    sections: [
      {
        heading: "Major sectors shifting online",
        paragraphs: [
          "Food brands, clinics, institutes and retail chains across Hyderabad already take orders on chat. Formalising that into a site + gateway + reminders is the upgrade.",
          "Pharma-adjacent and service firms need trust pages that rank for brand and locality searches — not only LinkedIn posts.",
        ],
      },
      {
        heading: "Marketplace and aggregator pressure",
        paragraphs: [
          "E-commerce marketplaces and food apps tax visibility and logistics. Hyderabad multi-outlet F&B feels aggregator commission on every plate; D2C sellers feel referral fees on every unit.",
          "Owned ordering and owned lists are the hedge while platforms remain a channel.",
        ],
      },
      {
        heading: "Cloud kitchens and single vs multi outlet",
        paragraphs: [
          "Single-outlet kitchens need a clean direct path. Multi-outlet brands need location pages and consistent WhatsApp handling so one weak branch does not burn the brand.",
        ],
      },
    ],
    marketplacePain:
      "Platform growth without an owned list is rented growth. Build the list.",
    cloudKitchen:
      "Hyderabad cloud kitchens: platforms optional for regulars who already know the menu.",
    stack: ["Website", "WhatsApp ordering", "UPI", "GBP", "Weekly numbers"],
    keywords: ["website design Hyderabad", "Telangana MSME", "cloud kitchen Hyderabad", "own ecommerce Hyderabad"],
    faqs: cityFaqs("Hyderabad", "Telangana"),
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    photo: "retail.webp",
    industries: ["Retail & wholesale", "Education", "Healthcare", "F&B", "Manufacturing SMEs"],
    headline: "Kolkata trade online — keep the customer on your number",
    lead: "West Bengal’s capital still runs on trust and talk. Webify Bharat adds a modern site, WhatsApp and UPI so Kolkata shops, clinics and kitchens own enquiries instead of paying directories and marketplaces for the same people.",
    answer: "Webify Bharat helps Kolkata and West Bengal MSMEs own websites, WhatsApp and UPI so Google Maps and chat customers are not billed again through Justdial, Amazon or food apps.",
    sections: [
      {
        heading: "Industries going digital in Kolkata",
        paragraphs: [
          "From College Street education brands to neighbourhood clinics and sweet-shop chains, digital is already happening on WhatsApp. The missing piece is a findable site and clean payments.",
          "Bengali/English bilingual CTAs matter. English-only templates underperform at the counter.",
        ],
      },
      {
        heading: "E-commerce platform costs",
        paragraphs: [
          "Amazon and Flipkart expand reach for Eastern sellers but fee structures and ads eat thin margins. Direct catalogue sales recover control on best sellers.",
        ],
      },
      {
        heading: "Cloud kitchens and multi-outlet sweets & F&B",
        paragraphs: [
          "Heritage and modern F&B both face aggregator cuts. Owned ordering for festival and regular demand protects margin.",
        ],
      },
    ],
    marketplacePain:
      "Paying platforms to sell to people who already trust your board is optional — once you have a site and WhatsApp system.",
    cloudKitchen:
      "Kolkata kitchens and sweet brands: direct UPI and WhatsApp for loyal localities.",
    stack: ["Bilingual website", "WhatsApp", "UPI", "Local SEO", "Receipts"],
    keywords: ["website design Kolkata", "West Bengal MSME", "cloud kitchen Kolkata", "ecommerce Kolkata without marketplace fees"],
    faqs: cityFaqs("Kolkata", "West Bengal"),
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    photo: "ecommerce.webp",
    industries: ["Handicrafts & jewellery", "Tourism services", "Retail", "Education", "F&B"],
    headline: "Jaipur makers and shops — sell online without losing the brand",
    lead: "Rajasthan’s capital is a maker economy: jewellery, textiles, handicrafts, tourism services. Webify Bharat builds owned storefronts and WhatsApp sales so Amazon and Flipkart fees do not define every order.",
    answer: "Webify Bharat helps Jaipur artisans, retailers and tourism services own websites and WhatsApp-UPI sales so marketplace commissions are a channel choice, not a tax on every customer.",
    sections: [
      {
        heading: "Industries shifting online in Jaipur",
        paragraphs: [
          "Export-oriented craft sellers and domestic retail both need product pages with real photos, GST-ready billing and chat support.",
          "Tourism operators need package pages that convert to WhatsApp, not only Instagram reels.",
        ],
      },
      {
        heading: "Marketplace fee reality for craft and retail",
        paragraphs: [
          "Handicraft and jewellery categories on large marketplaces face referral fees, packaging rules and return risk. Direct site sales with UPI preserve storytelling and margin.",
        ],
      },
      {
        heading: "F&B and cloud kitchens in Jaipur",
        paragraphs: [
          "Tourist and local demand both hit aggregators. Owned menu ordering recovers margin on repeats and hotel partnerships.",
        ],
      },
    ],
    marketplacePain:
      "Marketplaces commoditise craft. Your site tells the story and keeps the buyer.",
    cloudKitchen:
      "Jaipur F&B: platforms for tourists discovering you; WhatsApp for locals who already know.",
    stack: ["Catalogue website", "WhatsApp sales", "UPI", "GST invoices", "Maps SEO"],
    keywords: ["website design Jaipur", "Rajasthan MSME ecommerce", "handicraft website Jaipur", "cloud kitchen Jaipur"],
    faqs: cityFaqs("Jaipur", "Rajasthan"),
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    photo: "business-owner.webp",
    industries: ["Retail & wholesale", "Education", "Healthcare", "Food & hospitality", "Handloom"],
    headline: "Lucknow MSMEs online — Hindi-first, owned, UPI-ready",
    lead: "Uttar Pradesh’s capital markets run on Hindi, trust and WhatsApp. Webify Bharat builds sites and payment flows that match the counter so Lucknow businesses stop renting leads from directories and overpaying marketplaces for repeats.",
    answer: "Webify Bharat builds Hindi-capable websites, WhatsApp and UPI for Lucknow and UP MSMEs so organic enquiries are free of per-lead fees and marketplace cuts on loyal customers.",
    sections: [
      {
        heading: "Sectors going digital in Lucknow",
        paragraphs: [
          "Coaching, clinics, apparel, sweets and hospitality brands already message customers daily. Formal digital presence turns that into findable, measurable demand.",
        ],
      },
      {
        heading: "Amazon, Flipkart and UP sellers",
        paragraphs: [
          "Large platforms help reach outside the city. Fee stacks still justify a parallel owned catalogue for best sellers and wholesale relationships.",
        ],
      },
      {
        heading: "Cloud kitchens and multi-outlet food brands",
        paragraphs: [
          "Aggregator dependence is high. Direct WhatsApp parcel and menu SEO protect festival and office regulars.",
        ],
      },
    ],
    marketplacePain:
      "Paying per lead or per order for people who already trust your shop board is optional with an owned stack.",
    cloudKitchen:
      "Lucknow kitchens: mix Zomato/Swiggy with owned QR and chat ordering.",
    stack: ["Hindi/English site", "WhatsApp", "UPI", "GBP", "Simple reports"],
    keywords: ["website design Lucknow", "UP MSME website", "Hindi website Lucknow", "cloud kitchen Lucknow"],
    faqs: cityFaqs("Lucknow", "Uttar Pradesh"),
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    hub: "Gandhinagar is the capital; Ahmedabad is the commercial hub",
    photo: "manufacturing.webp",
    industries: ["Textiles & manufacturing", "Trading", "Retail", "Healthcare", "Education"],
    headline: "Ahmedabad–Gandhinagar: factory and trade digital without portal rent",
    lead: "Gujarat’s business energy sits in Ahmedabad while Gandhinagar hosts the capital. Webify Bharat builds owned digital systems for traders and manufacturers so IndiaMART and marketplace fees do not own every relationship.",
    answer: "Webify Bharat helps Ahmedabad and Gujarat MSMEs own websites, WhatsApp and UPI so B2B and retail buyers are not locked into marketplace or directory fee models.",
    sections: [
      {
        heading: "Industries online in Gujarat’s commercial capital",
        paragraphs: [
          "Textiles, chemicals, trading houses and retail chains need catalogues, dealer portals and GST-ready enquiry flows.",
          "A clean website beats a PDF shared only in WhatsApp groups when new buyers search the brand.",
        ],
      },
      {
        heading: "Marketplace and B2B portal costs",
        paragraphs: [
          "Amazon/Flipkart for D2C and IndiaMART for B2B both charge for attention. Factory-direct pages and dealer WhatsApp preserve margin on repeats.",
        ],
      },
      {
        heading: "F&B and cloud kitchens",
        paragraphs: [
          "Growing F&B brands in Ahmedabad use aggregators heavily. Owned ordering is the margin recovery plan.",
        ],
      },
    ],
    marketplacePain:
      "Portal subscriptions and marketplace fees stack. Owned demand compounds.",
    cloudKitchen:
      "Ahmedabad F&B: platforms for reach, owned channels for profit.",
    stack: ["Catalogue / dealer site", "WhatsApp", "UPI", "GST workflow", "Analytics"],
    keywords: ["website design Ahmedabad", "Gujarat MSME", "manufacturer website Ahmedabad", "Gandhinagar business website"],
    faqs: cityFaqs("Ahmedabad", "Gujarat"),
  },
  {
    slug: "gandhinagar",
    name: "Gandhinagar",
    state: "Gujarat",
    region: "West",
    hub: "Ahmedabad metro",
    photo: "consultation.webp",
    industries: ["Government & services", "Education", "Retail", "Professional services"],
    headline: "Gandhinagar capital services — digital presence that ranks",
    lead: "As Gujarat’s capital, Gandhinagar hosts institutions and growing private services. Webify Bharat builds findable websites and WhatsApp systems so local firms are not invisible next to Ahmedabad competitors on Google.",
    answer: "Webify Bharat builds websites, WhatsApp and UPI for Gandhinagar and Gujarat capital-region businesses so local search and chat leads stay owned.",
    sections: [
      {
        heading: "Services and education going online",
        paragraphs: [
          "Institutes, clinics and professional firms need Maps + site + WhatsApp. Directory listings alone underperform name search.",
        ],
      },
      {
        heading: "E-commerce and fees",
        paragraphs: [
          "Retailers serving the capital region still face marketplace fee pressure; direct UPI catalogue helps.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Local restaurants benefit from menu pages and owned parcel chat beside aggregators.",
        ],
      },
    ],
    marketplacePain: "Visibility without ownership is rented. Own the URL.",
    cloudKitchen: "Capital-region kitchens: direct orders via WhatsApp and QR.",
    stack: ["Website", "GBP", "WhatsApp", "UPI", "Reports"],
    keywords: ["website design Gandhinagar", "Gujarat capital business website"],
    faqs: cityFaqs("Gandhinagar", "Gujarat"),
  },
  {
    slug: "patna",
    name: "Patna",
    state: "Bihar",
    region: "East",
    photo: "education.webp",
    industries: ["Education & coaching", "Retail", "Healthcare", "Food", "Services"],
    headline: "Patna coaching, clinics and shops — digital that fits Bihar",
    lead: "Patna’s coaching economy, clinics and retail already run on WhatsApp. Webify Bharat turns that into a website and UPI system owners control — without expensive marketplace dependence.",
    answer: "Webify Bharat helps Patna and Bihar MSMEs own websites, WhatsApp and UPI so student, patient and shop enquiries are not stuck in directories or high-fee platforms.",
    sections: [
      {
        heading: "Industries going online",
        paragraphs: [
          "Coaching brands need batch pages, fee UPI and parent WhatsApp. Clinics need appointments and reminders. Retail needs catalogue chat.",
        ],
      },
      {
        heading: "Marketplace pressure",
        paragraphs: [
          "National marketplaces expand reach but fee models hurt thin local margins. Owned channels win on trust sales.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Growing delivery kitchens should add direct WhatsApp ordering early.",
        ],
      },
    ],
    marketplacePain: "Do not build the whole business on rented shelves.",
    cloudKitchen: "Patna kitchens: aggregator + owned chat ordering.",
    stack: ["Website", "WhatsApp", "UPI fees", "GBP", "Reminders"],
    keywords: ["website design Patna", "Bihar coaching website", "clinic website Patna"],
    faqs: cityFaqs("Patna", "Bihar"),
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    region: "Central",
    photo: "healthcare.webp",
    industries: ["Education", "Healthcare", "Retail", "Government services", "F&B"],
    headline: "Bhopal MSMEs — clear site, WhatsApp, UPI",
    lead: "Madhya Pradesh’s capital needs practical digital, not startup theatre. Webify Bharat builds owned systems for institutes, clinics and shops.",
    answer: "Webify Bharat builds websites, WhatsApp and UPI for Bhopal and MP businesses so local enquiries stay free of per-lead directory fees.",
    sections: [
      {
        heading: "Sectors online",
        paragraphs: [
          "Education and healthcare dominate digital demand. Retail follows with catalogue and UPI needs.",
        ],
      },
      {
        heading: "E-commerce fees",
        paragraphs: [
          "Marketplace selling is optional fuel. Owned catalogue is the engine for repeats.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Direct menu ordering recovers margin beside Swiggy/Zomato.",
        ],
      },
    ],
    marketplacePain: "Platforms charge for attention you can also earn on Google with an owned site.",
    cloudKitchen: "Bhopal F&B: own the regulars.",
    stack: ["Website", "WhatsApp", "UPI", "SEO", "Dashboard"],
    keywords: ["website design Bhopal", "MP MSME digital"],
    faqs: cityFaqs("Bhopal", "Madhya Pradesh"),
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    photo: "retail.webp",
    industries: ["IT & services", "Education", "Healthcare", "Retail", "Tourism & F&B"],
    headline: "Bhubaneswar digital for Odisha MSMEs",
    lead: "Odisha’s capital is growing services, education and hospitality. Webify Bharat builds owned websites and WhatsApp-UPI so local brands are not only living on marketplaces and aggregators.",
    answer: "Webify Bharat helps Bhubaneswar businesses own digital channels so Google and WhatsApp leads avoid per-lead and high marketplace fees.",
    sections: [
      {
        heading: "Industries online",
        paragraphs: [
          "Institutes, clinics, hotels and retail need findable pages and chat conversion.",
        ],
      },
      {
        heading: "Marketplace costs",
        paragraphs: [
          "National e-commerce fees still apply to Odisha sellers; direct UPI catalogue helps margin.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Tourism and student demand support delivery brands — own a share of orders.",
        ],
      },
    ],
    marketplacePain: "Rented shelves do not build brand equity in Bhubaneswar.",
    cloudKitchen: "Own menu + WhatsApp for campus and office regulars.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Analytics"],
    keywords: ["website design Bhubaneswar", "Odisha MSME website"],
    faqs: cityFaqs("Bhubaneswar", "Odisha"),
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh (shared capital — Punjab & Haryana)",
    region: "North",
    photo: "business-owner.webp",
    industries: ["Retail", "Education", "Healthcare", "Services", "F&B"],
    headline: "Chandigarh–Tricity digital without lead rent",
    lead: "Chandigarh serves Punjab and Haryana as capital and anchors the Tricity market with Mohali and Panchkula. Webify Bharat builds owned sites and WhatsApp systems for Tricity MSMEs.",
    answer: "Webify Bharat helps Chandigarh Tricity businesses own websites, WhatsApp and UPI so enquiries are not billed through directories or drained by marketplace fees.",
    sections: [
      {
        heading: "Tricity industries online",
        paragraphs: [
          "Education, clinics, retail and hospitality across Chandigarh–Mohali–Panchkula need local SEO and chat conversion.",
        ],
      },
      {
        heading: "E-commerce pressure",
        paragraphs: [
          "Sellers use Amazon/Flipkart for reach; owned catalogues protect margin on local repeats.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Delivery brands should retain direct WhatsApp ordering for campus and residential clusters.",
        ],
      },
    ],
    marketplacePain: "Tricity customers will message you direct if the path is obvious.",
    cloudKitchen: "Aggregator + owned chat for Tricity kitchens.",
    stack: ["Website", "WhatsApp", "UPI", "Maps", "Reports"],
    keywords: ["website design Chandigarh", "Mohali MSME website", "Punjab Haryana business website"],
    faqs: cityFaqs("Chandigarh", "Punjab and Haryana"),
  },
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    state: "Kerala",
    region: "South",
    photo: "healthcare.webp",
    industries: ["IT & services", "Healthcare", "Tourism", "Education", "Retail & F&B"],
    headline: "Thiruvananthapuram — Kerala capital digital done practical",
    lead: "Kerala’s capital mixes IT, healthcare and tourism services. Webify Bharat builds Malayalam-capable experiences where needed, with WhatsApp and UPI at the centre.",
    answer: "Webify Bharat helps Thiruvananthapuram MSMEs own websites, WhatsApp and UPI so tourism, clinic and retail leads stay off high-fee platforms when possible.",
    sections: [
      {
        heading: "Sectors online",
        paragraphs: [
          "Clinics, institutes, homestays and retail need clear booking and payment paths.",
        ],
      },
      {
        heading: "Marketplace fees",
        paragraphs: [
          "National marketplaces help export and reach; local repeats should checkout direct.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Owned ordering supports residential regulars beyond aggregator peak hours.",
        ],
      },
    ],
    marketplacePain: "Do not let platforms own the only relationship with your best customers.",
    cloudKitchen: "Kerala kitchens: direct UPI for loyal localities.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Bookings"],
    keywords: ["website design Thiruvananthapuram", "Kerala MSME website", "Trivandrum business website"],
    faqs: cityFaqs("Thiruvananthapuram", "Kerala"),
  },
  {
    slug: "raipur",
    name: "Raipur",
    state: "Chhattisgarh",
    region: "Central",
    photo: "manufacturing.webp",
    industries: ["Trading & retail", "Manufacturing", "Education", "Healthcare", "F&B"],
    headline: "Raipur trade digital — own the buyer",
    lead: "Chhattisgarh’s capital is a trading and services hub. Webify Bharat builds websites and WhatsApp-UPI so Raipur businesses reduce directory and marketplace dependence.",
    answer: "Webify Bharat helps Raipur MSMEs own digital channels so local buyers are not locked into lead packs or high marketplace fees.",
    sections: [
      {
        heading: "Industries online",
        paragraphs: [
          "Traders, manufacturers and institutes need findable pages and chat conversion.",
        ],
      },
      {
        heading: "E-commerce costs",
        paragraphs: [
          "Marketplace fees compress margins; direct catalogue helps.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Growing delivery demand should include owned ordering early.",
        ],
      },
    ],
    marketplacePain: "Rented demand is fragile. Owned demand compounds.",
    cloudKitchen: "Raipur F&B: mix platforms with WhatsApp orders.",
    stack: ["Website", "WhatsApp", "UPI", "SEO", "Invoices"],
    keywords: ["website design Raipur", "Chhattisgarh MSME"],
    faqs: cityFaqs("Raipur", "Chhattisgarh"),
  },
  {
    slug: "ranchi",
    name: "Ranchi",
    state: "Jharkhand",
    region: "East",
    photo: "education.webp",
    industries: ["Education", "Mining services", "Retail", "Healthcare", "F&B"],
    headline: "Ranchi digital for Jharkhand MSMEs",
    lead: "Ranchi’s institutes, services and retail need practical websites and UPI. Webify Bharat builds owned systems without marketplace-only dependence.",
    answer: "Webify Bharat helps Ranchi businesses own websites, WhatsApp and UPI so enquiries avoid per-lead fees.",
    sections: [
      {
        heading: "Sectors online",
        paragraphs: [
          "Education and healthcare lead digital intent; retail follows.",
        ],
      },
      {
        heading: "Marketplace fees",
        paragraphs: [
          "Use platforms for reach; own the repeat on your domain.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Direct chat ordering for campus and residential zones.",
        ],
      },
    ],
    marketplacePain: "Fee-heavy platforms should not be the only shelf.",
    cloudKitchen: "Ranchi kitchens: owned path for regulars.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Reports"],
    keywords: ["website design Ranchi", "Jharkhand MSME"],
    faqs: cityFaqs("Ranchi", "Jharkhand"),
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    state: "Uttarakhand",
    region: "North",
    photo: "education.webp",
    industries: ["Education", "Tourism services", "Retail", "Healthcare", "F&B"],
    headline: "Dehradun schools, tourism and shops online",
    lead: "Uttarakhand’s winter capital hosts education and tourism brands. Webify Bharat builds booking-ready sites and WhatsApp flows.",
    answer: "Webify Bharat helps Dehradun MSMEs own websites, WhatsApp and UPI for education, tourism and retail leads.",
    sections: [
      {
        heading: "Industries online",
        paragraphs: [
          "Schools, institutes, hotels and clinics need clear digital conversion.",
        ],
      },
      {
        heading: "Marketplace costs",
        paragraphs: [
          "Product sellers should pair marketplaces with owned catalogues.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Student and tourist demand supports delivery — own a share.",
        ],
      },
    ],
    marketplacePain: "Do not rent every tourist or parent enquiry.",
    cloudKitchen: "Dehradun F&B: direct orders via WhatsApp.",
    stack: ["Website", "Bookings", "WhatsApp", "UPI", "SEO"],
    keywords: ["website design Dehradun", "Uttarakhand MSME"],
    faqs: cityFaqs("Dehradun", "Uttarakhand"),
  },
  {
    slug: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    region: "North",
    photo: "restaurant.webp",
    industries: ["Tourism & hospitality", "Retail", "Education", "F&B"],
    headline: "Shimla tourism and local trade — book direct",
    lead: "Himachal’s summer capital lives on tourism. Webify Bharat builds booking sites and WhatsApp so hotels and shops reduce OTA and aggregator dependence on regulars.",
    answer: "Webify Bharat helps Shimla hospitality and retail own websites and WhatsApp-UPI bookings beside OTAs and food apps.",
    sections: [
      {
        heading: "Tourism digital",
        paragraphs: [
          "Hotels and experiences need package pages and direct WhatsApp booking.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "OTA commissions mirror marketplace problems — own a direct path.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Restaurants should offer menu + UPI beyond delivery apps.",
        ],
      },
    ],
    marketplacePain: "Commission on every room or plate is optional for repeat guests.",
    cloudKitchen: "Shimla F&B: direct for locals and return tourists.",
    stack: ["Website", "WhatsApp booking", "UPI", "GBP", "Menu"],
    keywords: ["website design Shimla", "Himachal hotel website"],
    faqs: cityFaqs("Shimla", "Himachal Pradesh"),
  },
  {
    slug: "panaji",
    name: "Panaji",
    state: "Goa",
    region: "West",
    photo: "restaurant.webp",
    industries: ["Tourism & hospitality", "F&B", "Retail", "Services"],
    headline: "Panaji and Goa — direct bookings, less commission",
    lead: "Goa’s capital sits in a tourism economy full of OTA and food-app commissions. Webify Bharat builds owned booking and ordering paths for hotels, restaurants and services.",
    answer: "Webify Bharat helps Panaji and Goa businesses own websites, WhatsApp and UPI so tourist and local orders are not only taxed by OTAs and aggregators.",
    sections: [
      {
        heading: "Tourism and F&B online",
        paragraphs: [
          "Hotels, cafes and experiences need direct conversion from Google and Instagram.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "OTA and aggregator commissions are structural. Owned channels recover margin.",
        ],
      },
      {
        heading: "Cloud kitchens and multi-outlet",
        paragraphs: [
          "Delivery brands and multi-outlet groups need consistent owned ordering.",
        ],
      },
    ],
    marketplacePain: "Tourism commissions add up fast. Own the next booking.",
    cloudKitchen: "Goa kitchens: platforms + direct WhatsApp for regulars.",
    stack: ["Website", "Booking WhatsApp", "UPI", "Menu SEO", "GBP"],
    keywords: ["website design Panaji", "Goa hotel website", "restaurant website Goa"],
    faqs: cityFaqs("Panaji", "Goa"),
  },
  {
    slug: "amaravati",
    name: "Amaravati",
    state: "Andhra Pradesh",
    region: "South",
    hub: "Amaravati capital region; commercial activity also in Vijayawada–Guntur",
    photo: "consultation.webp",
    industries: ["Government & services", "Construction & real estate", "Education", "Retail", "F&B"],
    headline: "Amaravati region MSMEs — digital from day one",
    lead: "Andhra Pradesh’s capital region and nearby commercial cities need modern digital presence. Webify Bharat builds Telugu-capable sites where needed, with WhatsApp and UPI.",
    answer: "Webify Bharat helps Amaravati region and Andhra Pradesh MSMEs own websites, WhatsApp and UPI for local and capital-region demand.",
    sections: [
      {
        heading: "Sectors online",
        paragraphs: [
          "Services, education, property and retail need findable pages as the capital region develops.",
        ],
      },
      {
        heading: "E-commerce fees",
        paragraphs: [
          "Marketplace reach helps; owned catalogue protects margin.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Growing urban demand supports delivery brands with direct ordering options.",
        ],
      },
    ],
    marketplacePain: "Build owned channels early — do not wait until fees hurt.",
    cloudKitchen: "Capital-region kitchens: WhatsApp + UPI direct path.",
    stack: ["Website", "WhatsApp", "UPI", "Local SEO", "Invoices"],
    keywords: ["website design Amaravati", "Andhra Pradesh MSME", "Vijayawada business website"],
    faqs: cityFaqs("Amaravati", "Andhra Pradesh"),
  },
  {
    slug: "dispur",
    name: "Dispur",
    state: "Assam",
    region: "Northeast",
    hub: "Guwahati is the commercial hub",
    photo: "retail.webp",
    industries: ["Trade & retail", "Tea & agribusiness services", "Education", "Healthcare", "F&B"],
    headline: "Dispur–Guwahati digital for Assam business",
    lead: "Assam’s capital is Dispur; commercial gravity is Guwahati. Webify Bharat builds owned websites and WhatsApp-UPI for Northeast MSMEs serving both.",
    answer: "Webify Bharat helps Dispur–Guwahati businesses own digital channels so Assam MSMEs reduce directory and marketplace fee dependence.",
    sections: [
      {
        heading: "Industries online",
        paragraphs: [
          "Trade, education, clinics and hospitality across Guwahati need Maps + site + chat.",
        ],
      },
      {
        heading: "Marketplace costs",
        paragraphs: [
          "National platforms help reach beyond the Northeast; local repeats should buy direct.",
        ],
      },
      {
        heading: "Cloud kitchens",
        paragraphs: [
          "Guwahati delivery brands benefit from owned ordering early.",
        ],
      },
    ],
    marketplacePain: "Logistics already cost more in the Northeast — do not add unnecessary platform tax on loyal buyers.",
    cloudKitchen: "Guwahati kitchens: direct WhatsApp path.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Catalogue"],
    keywords: ["website design Guwahati", "Assam MSME", "Dispur business website"],
    faqs: cityFaqs("Guwahati", "Assam"),
  },
  {
    slug: "itanagar",
    name: "Itanagar",
    state: "Arunachal Pradesh",
    region: "Northeast",
    photo: "consultation.webp",
    industries: ["Tourism", "Government services", "Retail", "Hospitality"],
    headline: "Itanagar — tourism and services online",
    lead: "Arunachal’s capital needs clear digital presence for tourism and local services. Webify Bharat builds simple owned sites and WhatsApp booking.",
    answer: "Webify Bharat helps Itanagar businesses own websites and WhatsApp-UPI for tourism and local service enquiries.",
    sections: [
      {
        heading: "Tourism digital",
        paragraphs: [
          "Homestays and tour operators need direct booking paths beside OTAs.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "OTA commissions add up; own a share of bookings.",
        ],
      },
      {
        heading: "Local F&B",
        paragraphs: [
          "Restaurants benefit from menu pages and WhatsApp orders.",
        ],
      },
    ],
    marketplacePain: "Remote logistics make platform dependence costly — own the guest relationship.",
    cloudKitchen: "Local F&B: WhatsApp ordering for residents.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Booking"],
    keywords: ["website design Itanagar", "Arunachal tourism website"],
    faqs: cityFaqs("Itanagar", "Arunachal Pradesh"),
  },
  {
    slug: "imphal",
    name: "Imphal",
    state: "Manipur",
    region: "Northeast",
    photo: "retail.webp",
    industries: ["Handloom & handicrafts", "Retail", "Education", "F&B", "Services"],
    headline: "Imphal makers and shops — sell direct",
    lead: "Manipur’s capital has strong craft and retail identity. Webify Bharat builds catalogues and WhatsApp sales so national marketplace fees do not define every order.",
    answer: "Webify Bharat helps Imphal businesses own websites and WhatsApp-UPI catalogues so craft and retail sales keep more margin.",
    sections: [
      {
        heading: "Craft and retail online",
        paragraphs: [
          "Handloom sellers need story-led product pages and direct UPI.",
        ],
      },
      {
        heading: "Marketplace fees",
        paragraphs: [
          "National platforms expand reach but compress margin; own the brand site.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Local restaurants benefit from direct ordering options.",
        ],
      },
    ],
    marketplacePain: "Craft brands lose identity inside marketplaces — own the storefront.",
    cloudKitchen: "Imphal F&B: WhatsApp + UPI for regulars.",
    stack: ["Catalogue site", "WhatsApp", "UPI", "GBP", "Invoices"],
    keywords: ["website design Imphal", "Manipur handicraft website"],
    faqs: cityFaqs("Imphal", "Manipur"),
  },
  {
    slug: "shillong",
    name: "Shillong",
    state: "Meghalaya",
    region: "Northeast",
    photo: "restaurant.webp",
    industries: ["Tourism", "Education", "Retail", "Hospitality", "F&B"],
    headline: "Shillong tourism and local business online",
    lead: "Meghalaya’s capital is a tourism and education hub. Webify Bharat builds direct booking and ordering systems beside OTAs and apps.",
    answer: "Webify Bharat helps Shillong businesses own websites, WhatsApp and UPI for tourism and local trade.",
    sections: [
      {
        heading: "Tourism digital",
        paragraphs: [
          "Hotels and experiences need package pages and WhatsApp booking.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "OTA commissions are high; direct bookings matter.",
        ],
      },
      {
        heading: "Cloud kitchens / cafes",
        paragraphs: [
          "Cafes and kitchens should offer direct order paths.",
        ],
      },
    ],
    marketplacePain: "Tourism platforms charge rent on guests who can book you direct.",
    cloudKitchen: "Shillong F&B: owned ordering for locals and return visitors.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Menu"],
    keywords: ["website design Shillong", "Meghalaya tourism website"],
    faqs: cityFaqs("Shillong", "Meghalaya"),
  },
  {
    slug: "aizawl",
    name: "Aizawl",
    state: "Mizoram",
    region: "Northeast",
    photo: "retail.webp",
    industries: ["Retail", "Services", "Education", "Hospitality"],
    headline: "Aizawl local business digital",
    lead: "Mizoram’s capital retailers and services need simple owned digital presence. Webify Bharat builds WhatsApp-first websites and UPI.",
    answer: "Webify Bharat helps Aizawl MSMEs own websites, WhatsApp and UPI for local enquiries.",
    sections: [
      {
        heading: "Retail and services online",
        paragraphs: [
          "Local shops and institutes benefit from Maps + site + chat.",
        ],
      },
      {
        heading: "Marketplace",
        paragraphs: [
          "National marketplaces are optional; owned channels serve the city first.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Restaurants can take direct WhatsApp orders.",
        ],
      },
    ],
    marketplacePain: "Start with owned local demand before heavy platform fees.",
    cloudKitchen: "Aizawl F&B: WhatsApp ordering.",
    stack: ["Website", "WhatsApp", "UPI", "GBP"],
    keywords: ["website design Aizawl", "Mizoram business website"],
    faqs: cityFaqs("Aizawl", "Mizoram"),
  },
  {
    slug: "kohima",
    name: "Kohima",
    state: "Nagaland",
    region: "Northeast",
    photo: "consultation.webp",
    industries: ["Tourism", "Retail", "Hospitality", "Services"],
    headline: "Kohima tourism and trade online",
    lead: "Nagaland’s capital needs clear digital booking and retail presence. Webify Bharat builds owned sites and WhatsApp flows.",
    answer: "Webify Bharat helps Kohima businesses own websites and WhatsApp-UPI for tourism and local trade.",
    sections: [
      {
        heading: "Tourism digital",
        paragraphs: [
          "Homestays and tours need direct conversion paths.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "Reduce OTA dependence with owned booking pages.",
        ],
      },
      {
        heading: "Local F&B",
        paragraphs: [
          "Direct orders via WhatsApp for residents.",
        ],
      },
    ],
    marketplacePain: "Own the guest relationship beyond platforms.",
    cloudKitchen: "Kohima F&B: WhatsApp path.",
    stack: ["Website", "WhatsApp", "UPI", "GBP"],
    keywords: ["website design Kohima", "Nagaland tourism website"],
    faqs: cityFaqs("Kohima", "Nagaland"),
  },
  {
    slug: "agartala",
    name: "Agartala",
    state: "Tripura",
    region: "Northeast",
    photo: "retail.webp",
    industries: ["Trade & retail", "Education", "Services", "F&B"],
    headline: "Agartala trade digital",
    lead: "Tripura’s capital retailers and institutes need owned digital channels. Webify Bharat builds practical websites and UPI.",
    answer: "Webify Bharat helps Agartala MSMEs own websites, WhatsApp and UPI for local business growth.",
    sections: [
      {
        heading: "Retail and education online",
        paragraphs: [
          "Shops and institutes convert better with site + WhatsApp + UPI.",
        ],
      },
      {
        heading: "Marketplace",
        paragraphs: [
          "Use national platforms selectively; own local repeats.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Direct ordering recovers margin.",
        ],
      },
    ],
    marketplacePain: "Local trust should not be rented monthly.",
    cloudKitchen: "Agartala F&B: WhatsApp orders.",
    stack: ["Website", "WhatsApp", "UPI", "GBP"],
    keywords: ["website design Agartala", "Tripura MSME"],
    faqs: cityFaqs("Agartala", "Tripura"),
  },
  {
    slug: "gangtok",
    name: "Gangtok",
    state: "Sikkim",
    region: "Northeast",
    photo: "restaurant.webp",
    industries: ["Tourism", "Hospitality", "Retail", "F&B"],
    headline: "Gangtok tourism — book direct",
    lead: "Sikkim’s capital lives on tourism. Webify Bharat builds direct booking sites and WhatsApp so hotels and operators reduce pure OTA dependence.",
    answer: "Webify Bharat helps Gangtok hospitality own websites and WhatsApp-UPI bookings beside OTAs.",
    sections: [
      {
        heading: "Tourism digital",
        paragraphs: [
          "Hotels and tour packages need clear pages and chat booking.",
        ],
      },
      {
        heading: "Commission pressure",
        paragraphs: [
          "OTA fees mirror marketplace problems for rooms and experiences.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Restaurants should offer direct menu ordering.",
        ],
      },
    ],
    marketplacePain: "Tourism commissions are optional for return guests if booking is easy on your site.",
    cloudKitchen: "Gangtok F&B: direct WhatsApp orders.",
    stack: ["Website", "WhatsApp booking", "UPI", "GBP", "Packages"],
    keywords: ["website design Gangtok", "Sikkim hotel website"],
    faqs: cityFaqs("Gangtok", "Sikkim"),
  },
  {
    slug: "srinagar",
    name: "Srinagar",
    state: "Jammu and Kashmir",
    region: "UT",
    photo: "restaurant.webp",
    industries: ["Tourism & hospitality", "Handicrafts", "Retail", "F&B"],
    headline: "Srinagar tourism and craft — sell and book direct",
    lead: "Srinagar’s tourism and handicraft economy needs owned digital channels. Webify Bharat builds booking and catalogue systems with WhatsApp and UPI.",
    answer: "Webify Bharat helps Srinagar businesses own websites, WhatsApp and UPI for tourism bookings and craft sales beyond high-commission platforms.",
    sections: [
      {
        heading: "Tourism and craft online",
        paragraphs: [
          "Houseboats, hotels and craft sellers need direct conversion.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "OTAs and marketplaces expand reach; owned channels protect margin.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Restaurants benefit from menu pages and direct orders.",
        ],
      },
    ],
    marketplacePain: "Do not let platforms own every tourist relationship.",
    cloudKitchen: "Srinagar F&B: WhatsApp ordering for locals and guests.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Catalogue"],
    keywords: ["website design Srinagar", "Kashmir tourism website", "handicraft website Srinagar"],
    faqs: cityFaqs("Srinagar", "Jammu and Kashmir"),
  },
  {
    slug: "puducherry",
    name: "Puducherry",
    state: "Puducherry",
    region: "UT",
    photo: "restaurant.webp",
    industries: ["Tourism", "Hospitality", "Retail", "F&B", "Services"],
    headline: "Puducherry hospitality — direct bookings matter",
    lead: "Puducherry’s tourism economy faces OTA and food-app commissions. Webify Bharat builds owned booking and ordering paths.",
    answer: "Webify Bharat helps Puducherry hotels, cafes and shops own websites, WhatsApp and UPI beside OTAs and aggregators.",
    sections: [
      {
        heading: "Tourism digital",
        paragraphs: [
          "Hotels and experiences need package pages and chat booking.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "Commission-heavy channels should not be the only path.",
        ],
      },
      {
        heading: "Cloud kitchens / cafes",
        paragraphs: [
          "Direct ordering for regulars and long-stay visitors.",
        ],
      },
    ],
    marketplacePain: "Tourism fees stack — own the next stay or meal.",
    cloudKitchen: "Puducherry F&B: WhatsApp + UPI direct.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Menu"],
    keywords: ["website design Puducherry", "Pondicherry hotel website"],
    faqs: cityFaqs("Puducherry", "Puducherry"),
  },
  {
    slug: "port-blair",
    name: "Port Blair",
    state: "Andaman and Nicobar Islands",
    region: "UT",
    photo: "restaurant.webp",
    industries: ["Tourism", "Hospitality", "Retail", "F&B"],
    headline: "Port Blair tourism digital",
    lead: "Andaman tourism needs clear booking paths. Webify Bharat builds owned websites and WhatsApp for hotels and operators.",
    answer: "Webify Bharat helps Port Blair hospitality own websites and WhatsApp-UPI bookings beyond OTAs.",
    sections: [
      {
        heading: "Tourism online",
        paragraphs: [
          "Hotels and tour packages need direct enquiry conversion.",
        ],
      },
      {
        heading: "Commission pressure",
        paragraphs: [
          "OTA fees are significant on island travel — own a share of bookings.",
        ],
      },
      {
        heading: "F&B",
        paragraphs: [
          "Restaurants benefit from menu visibility and WhatsApp orders.",
        ],
      },
    ],
    marketplacePain: "Island logistics already cost more — cut unnecessary commission where you can.",
    cloudKitchen: "Port Blair F&B: direct WhatsApp path.",
    stack: ["Website", "WhatsApp booking", "UPI", "GBP"],
    keywords: ["website design Port Blair", "Andaman hotel website"],
    faqs: cityFaqs("Port Blair", "Andaman and Nicobar"),
  },
  {
    slug: "leh",
    name: "Leh",
    state: "Ladakh",
    region: "UT",
    photo: "consultation.webp",
    industries: ["Tourism", "Hospitality", "Retail", "Services"],
    headline: "Leh tourism — direct enquiries",
    lead: "Ladakh’s tourism season is intense and commission-heavy on platforms. Webify Bharat builds owned booking sites and WhatsApp for operators in Leh.",
    answer: "Webify Bharat helps Leh tourism businesses own websites and WhatsApp-UPI for direct guest enquiries.",
    sections: [
      {
        heading: "Tourism digital",
        paragraphs: [
          "Homestays, camps and operators need clear package pages.",
        ],
      },
      {
        heading: "Platform fees",
        paragraphs: [
          "OTAs help discovery; direct booking protects margin in a short season.",
        ],
      },
      {
        heading: "Local services",
        paragraphs: [
          "Retail and services benefit from WhatsApp-first sites.",
        ],
      },
    ],
    marketplacePain: "Short season means every commission point hurts — own direct bookings.",
    cloudKitchen: "Leh F&B: WhatsApp orders for guests and residents.",
    stack: ["Website", "WhatsApp", "UPI", "GBP", "Packages"],
    keywords: ["website design Leh", "Ladakh tourism website"],
    faqs: cityFaqs("Leh", "Ladakh"),
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function citiesByRegion() {
  const map = new Map<string, City[]>();
  for (const c of cities) {
    const list = map.get(c.region) ?? [];
    list.push(c);
    map.set(c.region, list);
  }
  return map;
}
