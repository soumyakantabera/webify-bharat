"use client";

import { useState } from "react";
import Link from "next/link";

export type ChartRow = {
  label: string;
  rent: number;
  own: number;
  rentNote: string;
  ownNote: string;
};

export function ComparisonChart({
  title,
  rentLabel,
  ownLabel,
  rows,
}: {
  title: string;
  rentLabel: string;
  ownLabel: string;
  rows: ChartRow[];
}) {
  const [active, setActive] = useState(0);
  const [showRent, setShowRent] = useState(true);
  const [showOwn, setShowOwn] = useState(true);
  const row = rows[active] ?? rows[0];

  return (
    <article className="offer-meter ix-chart">
      <div className="ix-head">
        <h3>{title}</h3>
        <div className="ix-legend">
          <button type="button" className={showRent ? "is-on rent" : ""} onClick={() => setShowRent((v) => !v)} aria-pressed={showRent}>
            {rentLabel}
          </button>
          <button type="button" className={showOwn ? "is-on own" : ""} onClick={() => setShowOwn((v) => !v)} aria-pressed={showOwn}>
            {ownLabel}
          </button>
        </div>
      </div>
      <div className="ix-rows" role="listbox" aria-label={title}>
        {rows.map((item, i) => (
          <button
            key={item.label}
            type="button"
            role="option"
            aria-selected={i === active}
            className={i === active ? "ix-row is-on" : "ix-row"}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <span className="ix-row-label">{item.label}</span>
            <span className="ix-bars">
              {showRent ? (
                <span className="ix-bar rent" style={{ width: `${item.rent}%` }}>
                  <span>{item.rent}</span>
                </span>
              ) : null}
              {showOwn ? (
                <span className="ix-bar own" style={{ width: `${item.own}%` }}>
                  <span>{item.own}</span>
                </span>
              ) : null}
            </span>
          </button>
        ))}
      </div>
      {row ? (
        <div className="ix-detail" aria-live="polite">
          <p>{row.label}</p>
          <div>
            <strong>{rentLabel}</strong>
            <span>{row.rentNote}</span>
          </div>
          <div>
            <strong>{ownLabel}</strong>
            <span>{row.ownNote}</span>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export type FamilyPoint = {
  name: string;
  href: string;
  value: number;
  note: string;
  current?: boolean;
};

export function FamilyChart({
  title,
  metrics,
}: {
  title: string;
  metrics: { label: string; points: FamilyPoint[] }[];
}) {
  const [metric, setMetric] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const current = metrics[metric] ?? metrics[0];
  const focus = hover ?? current.points.findIndex((p) => p.current);
  const point = current.points[focus] ?? current.points[0];

  return (
    <article className="offer-meter ix-chart">
      <div className="ix-head">
        <h3>{title}</h3>
        <div className="ix-legend">
          {metrics.map((item, i) => (
            <button key={item.label} type="button" className={i === metric ? "is-on own" : ""} onClick={() => setMetric(i)} aria-pressed={i === metric}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="ix-family" role="list">
        {current.points.map((item, i) => (
          <Link
            key={item.name}
            href={item.href}
            className={item.current ? "ix-family-row is-current" : "ix-family-row"}
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
          >
            <span>{item.name}</span>
            <span className="ix-bars">
              <span className={item.current ? "ix-bar own" : "ix-bar rent"} style={{ width: `${item.value}%` }}>
                <span>{item.value}</span>
              </span>
            </span>
          </Link>
        ))}
      </div>
      {point ? (
        <div className="ix-detail" aria-live="polite">
          <p>{point.name}</p>
          <div>
            <strong>{current.label}</strong>
            <span>{point.note}</span>
          </div>
        </div>
      ) : null}
    </article>
  );
}
