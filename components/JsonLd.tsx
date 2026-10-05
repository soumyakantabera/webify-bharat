import { BUSINESS, filled, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/site-url";
import { blocks } from "@/lib/blocks";
import { PLAN_STAGES } from "@/lib/offers";

const BASE = SITE_URL;

export function OrgJsonLd() {
  const serviceNodes = blocks.map((b) => ({
    "@type": "Service",
    "@id": `${BASE}/systems/${b.slug}#service`,
    name: b.name,
    description: `${b.becomes}. ${b.oneLiner}`,
    url: `${BASE}/systems/${b.slug}`,
    provider: { "@id": `${BASE}/#org` },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: b.becomes,
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
        legalName: BUSINESS.legalName,
        email: SITE.email,
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
          "CRM and ERP for small business",
          "AI visibility",
        ],
        sameAs: [],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Webify Bharat plans",
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
          ...(filled(BUSINESS.address) ? { streetAddress: "108, Shri Krishna Nagar", postalCode: "700056" } : {}),
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
        serviceType: blocks.map((b) => b.becomes),
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
