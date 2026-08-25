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

const MEDIA_PARENTS =
  ".card-media, .photo-card, .industry-card, .city-card, .blog-card, .cta-photo, .cta-real-photo, .about-photo, .real-context-photo, .hero-visual, .story-photo-card, .contact-story, .page-hero";

function markMediaLoaded(img: HTMLImageElement) {
  img.classList.add("lazy-img-loaded", "is-loaded");

  const parent = img.closest(".skeleton-media");
  if (parent) parent.classList.add("is-loaded");

  // Blog/story: wrap img area if parent is card with direct img
  const card = img.closest(".blog-card, .industry-card, .city-card, .story-photo-card");
  if (card && card.classList.contains("skeleton-media")) {
    card.classList.add("is-loaded");
  }
}

function setupSkeletonForImage(img: HTMLImageElement) {
  if (img.classList.contains("skeleton-bound")) return;
  img.classList.add("skeleton-bound");

  const isEager =
    img.getAttribute("loading") === "eager" ||
    img.getAttribute("fetchpriority") === "high" ||
    !!img.closest(".hero, .page-hero, .navbar");

  // Prefer wrapping parent as skeleton media
  let media =
    img.closest(
      ".card-media, .photo-card, .cta-photo, .cta-real-photo, .about-photo, .real-context-photo, .hero-visual"
    ) || img.parentElement;

  // For cards where img is direct child of the card link
  if (
    img.parentElement &&
    (img.parentElement.classList.contains("industry-card") ||
      img.parentElement.classList.contains("city-card") ||
      img.parentElement.classList.contains("blog-card") ||
      img.parentElement.classList.contains("story-photo-card") ||
      img.parentElement.classList.contains("contact-story"))
  ) {
    media = img.parentElement;
  }

  if (media && media !== document.body) {
    media.classList.add("skeleton-media");
  } else {
    img.classList.add("skeleton-img");
  }

  if (isEager) {
    img.classList.add("lazy-img-eager");
  } else {
    img.classList.add("lazy-img");
    if (!img.getAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.getAttribute("decoding")) img.setAttribute("decoding", "async");
  }

  if (img.complete && img.naturalWidth > 0) {
    markMediaLoaded(img);
    return;
  }

  img.addEventListener("load", () => markMediaLoaded(img), { once: true });
  img.addEventListener("error", () => markMediaLoaded(img), { once: true });
}

function bindImages(root: ParentNode = document) {
  root
    .querySelectorAll<HTMLImageElement>("main img, .hero img, .page-hero img")
    .forEach(setupSkeletonForImage);
}

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    bindImages();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) bindImages(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    if (reduced) {
      // Instantly mark everything loaded so no stuck skeletons
      document.querySelectorAll(".skeleton-media, img.skeleton-img").forEach((el) => {
        el.classList.add("is-loaded");
      });
      document.querySelectorAll("img").forEach((img) => {
        img.classList.add("lazy-img-loaded", "is-loaded");
      });
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
