"use client";

import { useMemo, useState, type ReactNode } from "react";

type Item = { key: string; q: string; a: string; category: string; qNode?: ReactNode; aNode?: ReactNode };
type Cat = { id: string; label: string; tone: string };

/** /faq explorer (§9.15): colour-coded category tabs plus live search across every answer. */
export function FaqExplorer({ categories, items, notHere }: { categories: Cat[]; items: Item[]; notHere: ReactNode }) {
  const [tab, setTab] = useState("all");
  const [q, setQ] = useState("");
  const shown = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter((f) => (words.length ? true : tab === "all" || f.category === tab) && words.every((w) => `${f.q} ${f.a}`.toLowerCase().includes(w)));
  }, [q, tab, items]);
  const tabs = [{ id: "all", label: "All", tone: "ink" }, ...categories];

  return (
    <div className="faq-explorer">
      <label className="blog-search-box">
        <span className="sr-only">Search questions</span>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search — e.g. lock-in, GST, source code" />
      </label>
      <div className="faq-tabs" role="tablist" aria-label="Question categories">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`faq-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls="faq-panel"
            className={`faq-tab tone-${t.tone}${tab === t.id ? " is-on" : ""}`}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => {
              const i = tabs.findIndex((x) => x.id === tab);
              const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
              if (next === null) return;
              e.preventDefault();
              const n = tabs[(next + tabs.length) % tabs.length];
              setTab(n.id);
              document.getElementById(`faq-tab-${n.id}`)?.focus();
            }}
            tabIndex={tab === t.id ? 0 : -1}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div id="faq-panel" role="tabpanel" aria-labelledby={`faq-tab-${tab}`} className="faq-list">
        <p className="sr-only" aria-live="polite">
          {shown.length} questions shown
        </p>
        {shown.map((f) => (
          <details key={f.key} className="faq-row">
            <summary>{f.qNode ?? f.q}</summary>
            <p>{f.aNode ?? f.a}</p>
          </details>
        ))}
        {notHere}
      </div>
    </div>
  );
}
