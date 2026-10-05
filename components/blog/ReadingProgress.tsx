"use client";

import { useEffect, useState } from "react";

/** Holi-gradient reading progress bar for blog posts (§9.14). Decorative. */
export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return <div className="reading-progress" aria-hidden="true" style={{ transform: `scaleX(${p})` }} />;
}
