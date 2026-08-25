"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS = [
  ".section",
  ".section-soft",
  ".section-head",
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
  ".key-facts > div",
  ".story-photo-card",
  ".contact-story",
  ".form",
  ".city-card",
  ".pricing-cards > *",
  ".addon-grid > *",
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
      el.classList.remove("in");
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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    nodes.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
