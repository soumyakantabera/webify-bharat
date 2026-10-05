"use client";

import { useState, type ReactNode } from "react";

/**
 * BeforeAfter (content-plan §6.7): drag the handle (or use the slider with the
 * keyboard) to compare "today" with "with your system".
 */
export function BeforeAfter({ before, after, beforeLabel = "Today", afterLabel = "With your system" }: { before: ReactNode; after: ReactNode; beforeLabel?: string; afterLabel?: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="before-after" style={{ ["--pos" as string]: `${pos}%` }}>
      <div className="ba-pane ba-after">
        <span className="ba-label is-after">{afterLabel}</span>
        {after}
      </div>
      <div className="ba-pane ba-before" aria-hidden={pos < 8 || undefined}>
        <span className="ba-label is-before">{beforeLabel}</span>
        {before}
      </div>
      <div className="ba-handle" aria-hidden="true">
        <span>⟷</span>
      </div>
      <input
        className="ba-range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare: drag left for “${afterLabel}”, right for “${beforeLabel}”`}
      />
    </div>
  );
}
