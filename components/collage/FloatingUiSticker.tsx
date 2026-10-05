import type { ReactNode } from "react";
import { withArrows } from "@/components/Glyph";
import { Icon } from "@/components/Icon";

/**
 * FloatingUiSticker (content-plan §16.2-H): a small white UI card overlapping
 * a photo edge. Sample content only, so it is hidden from assistive tech.
 * Without an explicit icon, one is picked from the sticker's words.
 */
const AUTO_ICONS: [RegExp, string][] = [
  [/upi|paid|payment|₹/i, "CreditCard"],
  [/invoice|gst|ledger|books/i, "Receipt"],
  [/ai|assistant/i, "Sparkle"],
  [/google|maps|found|search/i, "MapPin"],
  [/lead|enquir/i, "ChatCircleDots"],
  [/synced|tally|zoho|connect/i, "ArrowsLeftRight"],
  [/order|reorder|dealer/i, "ShoppingBag"],
  [/booking|book|appointment/i, "CalendarCheck"],
];

function autoIcon(text: ReactNode) {
  if (typeof text !== "string") return null;
  const hit = AUTO_ICONS.find(([re]) => re.test(text));
  return <Icon name={hit ? hit[1] : "CheckCircle"} size={16} weight="bold" />;
}

export function FloatingUiSticker({
  children,
  icon,
  className,
  style,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`ui-sticker${className ? ` ${className}` : ""}`} aria-hidden="true" style={style}>
      <span className="ui-sticker-icon">{icon ?? autoIcon(children)}</span>
      <span>{typeof children === "string" ? withArrows(children) : children}</span>
    </span>
  );
}
