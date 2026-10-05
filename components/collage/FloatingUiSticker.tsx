import type { ReactNode } from "react";

/**
 * FloatingUiSticker (content-plan §16.2-H): a small white UI card overlapping
 * a photo edge. Sample content only, so it is hidden from assistive tech.
 */
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
      {icon ? <span className="ui-sticker-icon">{icon}</span> : null}
      <span>{children}</span>
    </span>
  );
}
