import type { ReactNode } from "react";
import { IconWhatsApp } from "@/components/icons";
import { waLink } from "@/lib/site";
import { WA_MSG } from "@/lib/wa";

export type WaVariant = "primary" | "ghost" | "dock" | "float";

/**
 * WhatsApp CTA (content-plan §4.1). The only call to action on the site.
 * - `message`: prefilled text from lib/wa.ts (§4.2), passed through waLink().
 * - `context`: section name, sent with the `wa_click` analytics event.
 * Click tracking, the QR popover, the gulal burst and the toast are wired once,
 * site-wide, by <WaEnhancer /> — so this stays a plain server-rendered link.
 */
export function WhatsAppCTA({
  message = WA_MSG.default,
  variant = "primary",
  label = "WhatsApp us",
  context,
  path,
  className,
  children,
}: {
  message?: string;
  variant?: WaVariant;
  label?: string;
  context?: string;
  /** Override the path reported to analytics (launch | organise | grow). */
  path?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      className={`wa-cta wa-cta--${variant}${className ? ` ${className}` : ""}`}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-section={context}
      data-wa-path={path}
    >
      <IconWhatsApp size={variant === "dock" ? 26 : 18} />
      <span className="wa-cta-label">{children ?? label}</span>
    </a>
  );
}
