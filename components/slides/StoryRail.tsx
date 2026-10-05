"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * StoryRail (content-plan §6.7): Instagram-style rail with progress ticks.
 * Swipe or use the arrows; auto-advances every 8s only while visible, never
 * under reduced motion, and has a visible pause control.
 */
export function StoryRail({ slides, label, interval = 8000 }: { slides: { id: string; node: ReactNode }[]; label: string; interval?: number }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);

  const go = useCallback(
    (i: number) => {
      const el = track.current;
      if (!el) return;
      const n = (i + slides.length) % slides.length;
      const child = el.children[n] as HTMLElement | undefined;
      if (child) el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: reduced ? "auto" : "smooth" });
      setActive(n);
    },
    [slides.length, reduced],
  );

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = track.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    const onScroll = () => {
      const w = (el.children[0] as HTMLElement | undefined)?.offsetWidth ?? 1;
      setActive(Math.round(el.scrollLeft / (w + 16)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!playing || !visible || reduced) return;
    const t = window.setTimeout(() => go(active + 1), interval);
    return () => window.clearTimeout(t);
  }, [playing, visible, reduced, active, go, interval]);

  const auto = playing && visible && !reduced;
  return (
    <div className="story-rail" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="story-ticks" aria-hidden="true">
        {slides.map((s, i) => (
          <span key={s.id} className={`story-tick${i < active ? " is-done" : ""}${i === active ? " is-on" : ""}${i === active && auto ? " is-auto" : ""}`} style={{ ["--dur" as string]: `${interval}ms` }} />
        ))}
      </div>
      <div className="story-track" ref={track} tabIndex={0} aria-live={auto ? "off" : "polite"}>
        {slides.map((s, i) => (
          <div key={s.id} className="story-slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`}>
            {s.node}
          </div>
        ))}
      </div>
      <div className="story-controls">
        <button type="button" onClick={() => go(active - 1)} aria-label="Previous">←</button>
        <span className="story-count">
          {active + 1} / {slides.length}
        </span>
        <button type="button" onClick={() => go(active + 1)} aria-label="Next">→</button>
        {!reduced ? (
          <button type="button" onClick={() => setPlaying((p) => !p)} aria-pressed={!playing} className="story-pause">
            {playing ? "Pause" : "Play"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
