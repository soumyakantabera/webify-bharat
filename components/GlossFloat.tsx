"use client";

import { useEffect } from "react";

/**
 * Shows glossary tooltips (.gloss > .gloss-tip) in one page-level floating
 * box, so cards with overflow:hidden can never clip them. Positioned above
 * the term and clamped to the viewport. Phones keep the CSS bottom sheet.
 */
export function GlossFloat() {
  useEffect(() => {
    const tip = document.createElement("div");
    tip.className = "gloss-float";
    tip.setAttribute("aria-hidden", "true");
    document.body.appendChild(tip);
    document.documentElement.classList.add("has-gloss-float");

    let current: HTMLElement | null = null;
    const show = (el: HTMLElement) => {
      const src = el.querySelector(".gloss-tip");
      if (!src || window.matchMedia("(max-width: 639px)").matches) return;
      current = el;
      tip.innerHTML = src.innerHTML;
      tip.style.display = "block";
      const r = el.getBoundingClientRect();
      const t = tip.getBoundingClientRect();
      const left = Math.min(Math.max(12, r.left + r.width / 2 - t.width / 2), window.innerWidth - t.width - 12);
      const above = r.top - t.height - 10;
      const top = above > 8 ? above : r.bottom + 10;
      tip.style.left = `${left}px`;
      tip.style.top = `${top}px`;
    };
    const hide = () => {
      current = null;
      tip.style.display = "none";
    };
    const over = (e: Event) => {
      const el = (e.target as HTMLElement | null)?.closest?.(".gloss") as HTMLElement | null;
      if (el && el !== current) show(el);
      else if (!el && current && e.type === "pointerover") hide();
    };
    const out = (e: FocusEvent) => {
      if (current && !current.contains(e.relatedTarget as Node | null)) hide();
    };
    document.addEventListener("pointerover", over);
    document.addEventListener("focusin", over);
    document.addEventListener("focusout", out);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      document.removeEventListener("pointerover", over);
      document.removeEventListener("focusin", over);
      document.removeEventListener("focusout", out);
      window.removeEventListener("scroll", hide);
      tip.remove();
      document.documentElement.classList.remove("has-gloss-float");
    };
  }, []);
  return null;
}
