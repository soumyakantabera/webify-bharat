"use client";

import { useEffect, useState } from "react";

type Frame = { src: string; alt: string; label: string };

const SETS: Record<string, Frame[]> = {
  services: [
    { src: "/images/services/website.png", alt: "Website product snapshot", label: "The site" },
    { src: "/images/services/whatsapp.png", alt: "WhatsApp product snapshot", label: "WhatsApp" },
    { src: "/images/services/payments.png", alt: "Payments product snapshot", label: "UPI" },
  ],
  pricing: [
    { src: "/images/services/payments.png", alt: "Checkout snapshot", label: "The price" },
    { src: "/images/services/ecommerce.png", alt: "Shop snapshot", label: "The shop" },
    { src: "/images/services/analytics.png", alt: "Orders snapshot", label: "The orders" },
  ],
  registrations: [
    { src: "/images/services/compliance.png", alt: "Filing snapshot", label: "The filing" },
    { src: "/images/services/website.png", alt: "Site snapshot", label: "With the site" },
    { src: "/images/blog/gst.png", alt: "GST snapshot", label: "GST" },
  ],
  cities: [
    { src: "/images/services/website.png", alt: "City site snapshot", label: "Your city" },
    { src: "/images/services/whatsapp.png", alt: "Local WhatsApp snapshot", label: "The chat" },
    { src: "/images/services/analytics.png", alt: "Local enquiries snapshot", label: "Enquiries" },
  ],
  blog: [
    { src: "/images/blog/website.png", alt: "Guide snapshot", label: "A guide" },
    { src: "/images/blog/payments.png", alt: "Payments guide snapshot", label: "Payments" },
    { src: "/images/blog/analytics.png", alt: "Analytics guide snapshot", label: "The numbers" },
  ],
  work: [
    { src: "/images/services/website.png", alt: "Work snapshot", label: "The system" },
    { src: "/images/services/ecommerce.png", alt: "Shop work snapshot", label: "The shop" },
    { src: "/images/services/analytics.png", alt: "Reporting snapshot", label: "The report" },
  ],
  contact: [
    { src: "/images/services/whatsapp.png", alt: "WhatsApp snapshot", label: "WhatsApp" },
    { src: "/images/services/website.png", alt: "Site snapshot", label: "The brief" },
    { src: "/images/services/payments.png", alt: "Payments snapshot", label: "The scope" },
  ],
  legal: [
    { src: "/images/services/compliance.png", alt: "Policy snapshot", label: "The terms" },
    { src: "/images/services/website.png", alt: "Site snapshot", label: "The site" },
    { src: "/images/services/payments.png", alt: "Fee snapshot", label: "The fee" },
  ],
};

export function HeroShot({ kind = "services", frames }: { kind?: string; frames?: Frame[] }) {
  const slides = frames?.length ? frames : SETS[kind] ?? SETS.services;
  const [index, setIndex] = useState(0);
  const frame = slides[index] ?? slides[0];

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <aside className="hero-shot" aria-label="Product snapshot">
      <div className="hero-shot-frame">
        <div className="hero-shot-bar" aria-hidden>
          <span />
          <span />
          <span />
          <em>{frame.label}</em>
        </div>
        <img key={frame.src} src={frame.src} alt={frame.alt} />
      </div>
      {slides.length > 1 ? (
        <div className="hero-shot-dots">
          {slides.map((slide, dot) => (
            <button
              key={slide.src}
              type="button"
              className={dot === index ? "is-on" : undefined}
              aria-label={slide.label}
              onClick={() => setIndex(dot)}
            />
          ))}
        </div>
      ) : null}
    </aside>
  );
}
