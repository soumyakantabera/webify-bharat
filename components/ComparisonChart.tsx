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

const W = 560;
const H = 248;
const PAD = { l: 36, r: 12, t: 16, b: 46 };

function yOf(value: number) {
  const plot = H - PAD.t - PAD.b;
  return PAD.t + plot - (Math.max(0, Math.min(100, value)) / 100) * plot;
}

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
  const plotW = W - PAD.l - PAD.r;
  const group = plotW / Math.max(rows.length, 1);
  const barW = Math.min(18, group * 0.28);
  const delta = row ? row.rent - row.own : 0;

  return (
    <article className="pro-chart">
      <header className="pro-chart-head">
        <div>
          <p className="pro-kicker">Index 0\u2013100</p>
          <h3>{title}</h3>
        </div>
        <div className="pro-legend">
          <button type="button" className={showRent ? "is-on rent" : ""} aria-pressed={showRent} onClick={() => setShowRent((v) => !v)}>
            <i /> {rentLabel}
          </button>
          <button type="button" className={showOwn ? "is-on own" : ""} aria-pressed={showOwn} onClick={() => setShowOwn((v) => !v)}>
            <i /> {ownLabel}
          </button>
        </div>
      </header>
      <div className="pro-plot">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title}>
          {[0, 25, 50, 75, 100].map((tick) => (
            <g key={tick}>
              <line x1={PAD.l} x2={W - PAD.r} y1={yOf(tick)} y2={yOf(tick)} className="pro-grid" />
              <text x={PAD.l - 8} y={yOf(tick) + 4} className="pro-tick">{tick}</text>
            </g>
          ))}
          {rows.map((item, i) => {
            const cx = PAD.l + group * i + group / 2;
            const rentH = yOf(0) - yOf(item.rent);
            const ownH = yOf(0) - yOf(item.own);
            return (
              <g key={item.label} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                <rect x={PAD.l + group * i + 4} y={PAD.t} width={group - 8} height={H - PAD.t - PAD.b} className={i === active ? "pro-hit is-on" : "pro-hit"} />
                {showRent ? (
                  <rect x={cx - barW - 2} y={yOf(item.rent)} width={barW} height={rentH} rx={4} className="pro-bar rent" />
                ) : null}
                {showOwn ? (
                  <rect x={cx + 2} y={yOf(item.own)} width={barW} height={ownH} rx={4} className="pro-bar own" />
                ) : null}
                <text x={cx} y={H - 18} className="pro-label">{item.label.split(" ").slice(0, 3).join(" ")}</text>
              </g>
            );
          })}
        </svg>
        {row ? (
          <div className="pro-tip" aria-live="polite">
            <strong>{row.label}</strong>
            <span><i className="rent" /> {rentLabel}: {row.rent} \u00b7 {row.rentNote}</span>
            <span><i className="own" /> {ownLabel}: {row.own} \u00b7 {row.ownNote}</span>
            <em>{delta > 0 ? `${delta} points less rent` : "Owned side is level or higher"}</em>
          </div>
        ) : null}
      </div>
      <p className="pro-note">Illustrative index, not a rupee fee. Papaya is the rented path. Teal is what you keep.</p>
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
  const focus = hover ?? Math.max(0, current.points.findIndex((p) => p.current));
  const point = current.points[focus] ?? current.points[0];
  const plotW = W - PAD.l - PAD.r;
  const group = plotW / Math.max(current.points.length, 1);
  const barW = Math.min(28, group * 0.46);

  return (
    <article className="pro-chart">
      <header className="pro-chart-head">
        <div>
          <p className="pro-kicker">Coverage index</p>
          <h3>{title}</h3>
        </div>
        <div className="pro-legend">
          {metrics.map((item, i) => (
            <button key={item.label} type="button" className={i === metric ? "is-on own" : ""} aria-pressed={i === metric} onClick={() => { setMetric(i); setHover(null); }}>
              {item.label}
            </button>
          ))}
        </div>
      </header>
      <div className="pro-plot">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title}>
          {[0, 25, 50, 75, 100].map((tick) => (
            <g key={tick}>
              <line x1={PAD.l} x2={W - PAD.r} y1={yOf(tick)} y2={yOf(tick)} className="pro-grid" />
              <text x={PAD.l - 8} y={yOf(tick) + 4} className="pro-tick">{tick}</text>
            </g>
          ))}
          {current.points.map((item, i) => {
            const cx = PAD.l + group * i + group / 2;
            const h = yOf(0) - yOf(item.value);
            return (
              <Link key={item.name} href={item.href}>
                <g onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)}>
                  <rect x={PAD.l + group * i + 4} y={PAD.t} width={group - 8} height={H - PAD.t - PAD.b} className={i === focus ? "pro-hit is-on" : "pro-hit"} />
                  <rect x={cx - barW / 2} y={yOf(item.value)} width={barW} height={h} rx={5} className={item.current ? "pro-bar own" : "pro-bar muted"} />
                  <text x={cx} y={yOf(item.value) - 6} className="pro-value">{item.value}</text>
                  <text x={cx} y={H - 18} className="pro-label">{item.name}</text>
                </g>
              </Link>
            );
          })}
        </svg>
        {point ? (
          <div className="pro-tip" aria-live="polite">
            <strong>{point.name} \u00b7 {current.label}</strong>
            <span>{point.value} / 100</span>
            <em>{point.note}</em>
          </div>
        ) : null}
      </div>
      <p className="pro-note">Click a column to open that page. Highlighted column is the one you are on.</p>
    </article>
  );
}
