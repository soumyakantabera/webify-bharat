"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * TabbedShowcase (content-plan §6.5): tabs on the left, preview on the right.
 * Panels are server-rendered; this only switches between them (ARIA tabs,
 * arrow keys move between tabs).
 */
export function TabbedShowcase({ tabs, label }: { tabs: { id: string; label: ReactNode; panel: ReactNode }[]; label: string }) {
  const [active, setActive] = useState(0);
  const base = useId().replace(/:/g, "");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const n = (active + delta + tabs.length) % tabs.length;
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="tabbed">
      <div className="tabbed-list" role="tablist" aria-label={label} onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-t-${t.id}`}
            aria-controls={`${base}-p-${t.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className={`tabbed-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.id} role="tabpanel" id={`${base}-p-${t.id}`} aria-labelledby={`${base}-t-${t.id}`} hidden={i !== active} className="tabbed-panel">
          {t.panel}
        </div>
      ))}
    </div>
  );
}
