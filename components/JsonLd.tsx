import { SITE, services } from "@/lib/site";
import { PLAN_STAGES } from "@/lib/offers";

const BASE = "https://webify-bharat.vercel.app";

export function OrgJsonLd() {
  const serviceNodes = services.map((s) => ({
    "@type": "Service",
    "@id": `${BASE}/systems/${s.slug}#service`,
    name: s.title,
    description: s.description,
    url: `${BASE}/systems/${s.slug}`,
    provider: { "@id": `${BASE}/#org` },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: s.title,
    image: `${BASE}${s.image}`,
  }));

  const offerNodes = PLAN_STAGES.map((p) => ({
    "@type": "Offer",
    "@id": `${BASE}/pricing#${p.slug}`,
    name: `${p.name} plan`,
    description: `${p.tagline} Setup ${p.setup}, then ${p.monthly} per month. Prices exclude GST.`,
    price: String(p.monthlyAmount),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(p.monthlyAmount),
      priceCurrency: "INR",
      unitCode: "MON",
      valueAddedTaxIncluded: false,
    },
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${BASE}/pricing`,
    seller: { "@id": `${BASE}/#org` },
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#org`,
        name: SITE.name,
        legalName: "Webify Bharat",
        url: BASE,
        logo: {
          "@type": "ImageObject",
          url: `${BASE}/images/logo/wb-icon.png`,
        },
        image: `${BASE}/og.jpg`,
        description: SITE.description,
        areaServed: { "@type": "Country", name: "India" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          availableLanguage: ["English", "Hindi"],
          url: `https://wa.me/${SITE.whatsapp}`,
        },
        knowsAbout: [
          "Website design for small business India",
          "WhatsApp Business API",
          "UPI payment gateway",
          "Google Business Profile",
          "GST invoicing",
          "MSME digital operations",
          "Justdial alternative",
          "Zomato commission alternative",
        ],
        sameAs: [],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Webify Bharat packages",
          itemListElement: offerNodes,
        },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${BASE}/#business`,
        name: SITE.name,
        image: `${BASE}/og.jpg`,
        url: BASE,
        telephone: `+${SITE.whatsapp}`,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "UPI, Bank Transfer",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        serviceType: [
          "Website development",
          "WhatsApp Business API setup",
          "Payment gateway integration",
          "Analytics and BI",
          "E-commerce portals",
          "GST-friendly bookkeeping workflows",
        ],
        parentOrganization: { "@id": `${BASE}/#org` },
        makesOffer: offerNodes.map((o) => ({ "@id": o["@id"] })),
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en-IN",
        publisher: { "@id": `${BASE}/#org` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      ...serviceNodes,
      ...offerNodes,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
