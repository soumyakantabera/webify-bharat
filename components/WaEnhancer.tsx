"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { IconWhatsApp } from "@/components/icons";
import { Webu } from "@/components/Webu";
import { pathFromUrl, track } from "@/lib/analytics";

const GULAL = ["#E6007E", "#FF6B00", "#FFB400", "#00A6A6", "#4F8A10", "#2B1E6B"];

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function desktopPointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches;
}

function gulalBurst(x: number, y: number) {
  if (reducedMotion()) return;
  const layer = document.createElement("div");
  layer.className = "gulal-layer";
  layer.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 24; i++) {
    const p = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 24 + Math.random() * 0.3;
    const dist = 40 + Math.random() * 50;
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.background = GULAL[i % GULAL.length];
    p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    layer.appendChild(p);
  }
  document.body.appendChild(layer);
  window.setTimeout(() => layer.remove(), 760);
}

/**
 * Site-wide WhatsApp behaviour (content-plan §4.1, §6.8, §13):
 * - `wa_click {page, section, path}` for every wa.me link
 * - gulal burst + "Opening WhatsApp…" toast on primary CTAs
 * - desktop QR popover on hover of primary CTAs
 * - desktop float bubble after 30% scroll, hidden while an in-page primary CTA is in view
 */
export function WaEnhancer({ qrSvg, href }: { qrSvg: string; href: string }) {
  const pathname = usePathname();
  const [toast, setToast] = useState(false);
  const [floatOn, setFloatOn] = useState(false);
  const [qr, setQr] = useState<{ x: number; y: number } | null>(null);
  const hideTimer = useRef<number | undefined>(undefined);
  const toastTimer = useRef<number | undefined>(undefined);

  // Click tracking, burst and toast.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
      if (!a) return;
      const section =
        a.dataset.waSection ||
        a.closest("[data-wa-zone]")?.getAttribute("data-wa-zone") ||
        a.closest("section[id]")?.id ||
        (a.closest("header") ? "header" : a.closest("footer") ? "footer" : "page");
      track("wa_click", { page: window.location.pathname, section, path: a.dataset.waPath || pathFromUrl(window.location.pathname) });
      if (section.startsWith("prototype-")) track("prototype_request", { slug: section.slice("prototype-".length) });
      if (a.classList.contains("wa-cta--primary") || a.classList.contains("wa-cta--dock")) {
        gulalBurst(e.clientX || a.getBoundingClientRect().left + 20, e.clientY || a.getBoundingClientRect().top + 10);
        setToast(true);
        window.clearTimeout(toastTimer.current);
        toastTimer.current = window.setTimeout(() => setToast(false), 2600);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // QR popover on desktop hover/focus of primary CTAs.
  useEffect(() => {
    function show(a: HTMLElement) {
      if (!desktopPointer()) return;
      window.clearTimeout(hideTimer.current);
      const r = a.getBoundingClientRect();
      const x = Math.min(Math.max(r.left + r.width / 2, 110), window.innerWidth - 110);
      const below = r.bottom + 196 < window.innerHeight;
      setQr({ x, y: below ? r.bottom + 10 : r.top - 186 });
    }
    function hide() {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setQr(null), 120);
    }
    function over(e: Event) {
      const a = (e.target as Element | null)?.closest?.(".wa-cta--primary") as HTMLElement | null;
      if (a) show(a);
    }
    function out(e: Event) {
      if ((e.target as Element | null)?.closest?.(".wa-cta--primary")) hide();
    }
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      window.removeEventListener("scroll", hide);
    };
  }, []);

  // Float bubble: after 30% scroll, hidden when any primary CTA is visible.
  useEffect(() => {
    const visible = new Set<Element>();
    let pastThreshold = false;
    const update = () => setFloatOn(pastThreshold && visible.size === 0);
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      update();
    });
    // The sticky header CTA is always visible, so only in-page CTAs count.
    document.querySelectorAll(".wa-cta--primary").forEach((el) => {
      if (!el.closest(".site-header, .ribbon")) io.observe(el);
    });
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      pastThreshold = max > 0 && window.scrollY / max >= 0.3;
      update();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <>
      <a
        className={`wa-cta wa-cta--float${floatOn ? " is-on" : ""}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-wa-section="float"
        aria-label="WhatsApp us"
        aria-hidden={!floatOn}
        tabIndex={floatOn ? 0 : -1}
      >
        <IconWhatsApp size={28} />
      </a>
      {qr ? (
        <div className="wa-qr-pop" style={{ left: qr.x, top: qr.y }} aria-hidden="true">
          <div className="wa-qr-code" dangerouslySetInnerHTML={{ __html: qrSvg }} />
          <span>Scan with your phone</span>
        </div>
      ) : null}
      <div className="wa-toast-region" aria-live="polite">
        {toast ? (
          <div className="wa-toast">
            <Webu state="celebrating" size={40} />
            <span>Opening WhatsApp…</span>
          </div>
        ) : null}
      </div>
    </>
  );
}
