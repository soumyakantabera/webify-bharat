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

function markLoaded(img: HTMLImageElement) {
  img.classList.add("lazy-img-loaded");
}

function bindLazyImages(root: ParentNode = document) {
  const images = Array.from(
    root.querySelectorAll<HTMLImageElement>(
      "main img, .hero img, .page-hero img, .footer img"
    )
  );

  images.forEach((img) => {
    if (img.classList.contains("lazy-bound")) return;
    img.classList.add("lazy-bound");

    const isEager =
      img.getAttribute("loading") === "eager" ||
      img.getAttribute("fetchpriority") === "high" ||
      img.closest(".hero, .page-hero, .navbar");

    if (isEager) {
      img.classList.add("lazy-img-eager");
    } else {
      img.classList.add("lazy-img");
      if (!img.getAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
      if (!img.getAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
    }

    if (img.complete && img.naturalWidth > 0) {
      markLoaded(img);
      return;
    }

    img.addEventListener("load", () => markLoaded(img), { once: true });
    img.addEventListener("error", () => markLoaded(img), { once: true });
  });
}

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Always bind lazy-load classes; reduced-motion CSS skips animation
    bindLazyImages();

    // Re-bind when new nodes appear (client nav)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) bindLazyImages(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    if (reduced) {
      return () => mo.disconnect();
    }

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

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
