"use client";

import { useState, type ReactNode } from "react";

/**
 * Monthly / annual toggle (content-plan §10.8 #2). Cards are server-rendered
 * with both prices; this only flips a data attribute that CSS reads.
 */
export function BillingToggle({ children }: { children: ReactNode }) {
  const [annual, setAnnual] = useState(false);
  return (
    <div className="billing" data-billing={annual ? "annual" : "monthly"}>
      <div className="billing-switch" role="group" aria-label="Billing period">
        <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>
          Monthly
        </button>
        <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>
          Annual <span className="save-chip">2 months free</span>
        </button>
      </div>
      {children}
    </div>
  );
}
