"use client";

import { useState, type ReactNode } from "react";
import { track } from "@/lib/analytics";

/**
 * FlipCard (content-plan §6.6): flips on hover (desktop mouse), tap and
 * keyboard (the toggle button on each face). The hidden face is `inert`, so
 * its links are never focusable while out of view.
 */
export function FlipCard({
  id,
  front,
  back,
  label,
  flipLabel = "See what we'd build",
}: {
  id: string;
  front: ReactNode;
  back: ReactNode;
  label: string;
  flipLabel?: string;
}) {
  const [pinned, setPinned] = useState(false);
  const [hover, setHover] = useState(false);
  const shown = pinned || hover;

  const open = (how: string) => {
    if (!shown) track("flip_open", { tile: id, how });
  };

  return (
    <div
      className={`flip-card${shown ? " is-flipped" : ""}`}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") {
          open("hover");
          setHover(true);
        }
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setHover(false);
      }}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front" inert={shown || undefined}>
          {front}
          <button
            type="button"
            className="flip-toggle"
            aria-label={`${label}: ${flipLabel}`}
            onClick={() => {
              open("click");
              setPinned(true);
            }}
          >
            {flipLabel} ↻
          </button>
        </div>
        <div className="flip-face flip-back" inert={!shown || undefined}>
          {back}
          <button
            type="button"
            className="flip-toggle"
            aria-label={`${label}: back`}
            onClick={() => {
              setPinned(false);
              setHover(false);
            }}
          >
            ↺ Back
          </button>
        </div>
      </div>
    </div>
  );
}
