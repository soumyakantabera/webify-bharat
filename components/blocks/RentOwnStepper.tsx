"use client";

import { useState, type KeyboardEvent } from "react";
import type { ChannelSet } from "@/lib/channels";

/**
 * Rent + Own stepper (content-plan §6.7, §9.7 #4): how a rented channel's
 * costs tend to climb, step by step, next to what owning your channel adds.
 * Arrow keys move between steps. Complementary tone — keep the rented channel
 * for what it's good at.
 */
export function RentOwnStepper({ set }: { set: ChannelSet }) {
  const [step, setStep] = useState(0);
  const n = set.stages.length;
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") setStep((s) => Math.min(n - 1, s + 1));
    if (e.key === "ArrowLeft") setStep((s) => Math.max(0, s - 1));
  };
  return (
    <div className="rent-own">
      <div className="ro-rent" onKeyDown={onKey}>
        <p className="ro-label">Renting · {set.rentLabel}</p>
        <p className="ro-keep">
          <strong>Keep it for:</strong> {set.keep}
        </p>
        <ol className="ro-dots" aria-label="How the costs climb">
          {set.stages.map((s, i) => (
            <li key={s.name}>
              <button type="button" aria-current={i === step ? "step" : undefined} className={i <= step ? "is-on" : undefined} onClick={() => setStep(i)}>
                <span className="ro-num">{i + 1}</span>
                <span className="ro-name">{s.name}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="ro-detail" aria-live="polite">
          {set.stages[step].detail}
        </p>
        <div className="ro-nav">
          <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} aria-label="Previous step">
            ←
          </button>
          <button type="button" onClick={() => setStep((s) => Math.min(n - 1, s + 1))} disabled={step === n - 1} aria-label="Next step">
            →
          </button>
        </div>
      </div>
      <div className="ro-own">
        <p className="ro-label">Owning · {set.ownLabel}</p>
        <ul className="ticks">
          {set.own.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
