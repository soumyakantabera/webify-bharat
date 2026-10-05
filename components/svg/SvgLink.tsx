import type { ReactNode } from "react";
import { asset } from "@/lib/asset";

/** Site path with base path and trailing slash (static export), keeping any #hash. */
export function sitePath(path: string) {
  const [p, hash] = path.split("#");
  const withSlash = p.endsWith("/") ? p : `${p}/`;
  return asset(withSlash) + (hash ? `#${hash}` : "");
}

/** A clickable region inside a diagram. Diagrams that use it get role="group", not role="img". */
export function SvgLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a href={sitePath(href)} className="svg-link" aria-label={label}>
      <title>{label}</title>
      {children}
    </a>
  );
}
