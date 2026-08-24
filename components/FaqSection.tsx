import type { FaqBlock } from "@/lib/faqs";

export function FaqSection({ block }: { block: FaqBlock }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: block.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="section section-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="dot" /> {block.kicker}
            </div>
            <h2>
              {block.title} <span>{block.accent}</span>
            </h2>
          </div>
          <p>{block.intro}</p>
        </div>
        <div className="faq">
          {block.items.map((item, index) => (
            <details className="faq-item" key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
