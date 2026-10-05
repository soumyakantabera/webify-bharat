import { asset } from "@/lib/asset";
import { findLogo } from "@/lib/logos";
import { C, Label } from "./mocks/frames";

/**
 * A brand mark inside a white rounded badge, for use inside diagrams.
 * `name` is a logo id or display name (see findLogo). Brands without a mark
 * show their name as text — never a stand-in icon.
 */
export function LogoBadge({ x, y, w, h = 24, name, label, title, size, stroke = C.line }: { x: number; y: number; w: number; h?: number; name: string; label?: boolean; title?: string; size?: number; stroke?: string }) {
  const fs = size ?? Math.min(11, h * 0.42);
  const logo = findLogo(name);
  const text = title ?? logo?.name ?? name;
  const showLabel = label && logo?.file && !logo.wordmark;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 3.2} fill="#fff" stroke={stroke} strokeWidth="1.2" />
      {logo?.file ? (
        showLabel ? (
          <>
            <image href={asset(logo.file)} x={x + 6} y={y + 4} width={h - 8} height={h - 8} preserveAspectRatio="xMidYMid meet" />
            <Label x={x + h} y={y + h / 2 + 3.5} size={fs} fill={C.ink2}>{text}</Label>
          </>
        ) : (
          <image href={asset(logo.file)} x={x + 4} y={y + 4} width={w - 8} height={h - 8} preserveAspectRatio="xMidYMid meet" />
        )
      ) : (
        <Label x={x + w / 2} y={y + h / 2 + 3.5} size={fs} anchor="middle" fill={C.ink2}>{text}</Label>
      )}
    </g>
  );
}
