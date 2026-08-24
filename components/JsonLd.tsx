import { SITE } from "@/lib/site";

const BASE = "https://webify-bharat.vercel.app";

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#org`,
        name: SITE.name,
        legalName: "Webify Bharat",
        url: BASE,
        logo: `${BASE}/images/logo/wb-icon.png`,
        description: SITE.description,
        areaServed: { "@type": "Country", name: "India" },
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
      },
      {
        "@type": "ProfessionalService",
        "@id": `${BASE}/#business`,
        name: SITE.name,
        image: `${BASE}/og.jpg`,
        url: BASE,
        telephone: `+${SITE.whatsapp}`,
        priceRange: "₹₹",
        areaServed: "IN",
        serviceType: [
          "Website development",
          "WhatsApp Business API setup",
          "Payment gateway integration",
          "Analytics and BI",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: SITE.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${BASE}/#org` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
