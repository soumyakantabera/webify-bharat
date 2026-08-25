"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS = [
  ".section",
  ".section-soft",
  ".section-head",
  ".hero-copy",
  ".hero-visual",
  ".card",
  ".service-card",
  ".industry-card",
  ".blog-card",
  ".photo-card",
  ".feature",
  ".price-card",
  ".pricing-card",
  ".control-card",
  ".faq-item",
  ".trust-item",
  ".value",
  ".step",
  ".home-price-item",
  ".article-block",
  ".cta-band",
  ".real-context",
  ".about-grid",
  ".process-wrap",
  ".page-copy",
  ".page-hero img",
  ".key-facts > div",
  ".story-photo-card",
  ".contact-story",
  ".form",
].join(", ");

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));
    nodes.forEach((el) => {
      if (!el.classList.contains("reveal-ready")) {
        el.classList.add("reveal");
        el.classList.add("reveal-ready");
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    // Hero is above the fold — reveal immediately
    document.querySelectorAll(".hero-copy, .hero-visual, .page-copy, .page-hero img").forEach((el) => {
      el.classList.add("in");
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
