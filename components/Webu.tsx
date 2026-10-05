/**
 * Webu — the mascot (content-plan §6.12): a friendly chai cup with a
 * peacock-feather tuft and rangoli-dot cheeks. Flat, 2px ink outline.
 * One SVG with a `state` prop; idle blink is CSS and stops under reduced motion.
 */

export type WebuState =
  | "waving"
  | "pointing"
  | "thinking"
  | "building"
  | "scooter"
  | "curtain"
  | "torch"
  | "celebrating";

const INK = "#1B1030";
const RANI = "#E6007E";
const HALDI = "#FFB400";
const PEACOCK = "#00A6A6";
const INDIGO = "#2B1E6B";
const MARIGOLD = "#FF6B00";
const CUP = "#FFF4D6";
const CHAI = "#C8803D";

const line = { stroke: INK, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Hand({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r={4} fill={CUP} {...line} />;
}

function Arms({ state }: { state: WebuState }) {
  switch (state) {
    case "waving":
      return (
        <g>
          <path d="M35 72 Q27 78 25 86" fill="none" {...line} />
          <Hand x={25} y={88} />
          <g className="webu-wave">
            <path d="M85 68 Q95 58 99 46" fill="none" {...line} />
            <Hand x={100} y={43} />
            <path d="M106 36 l4 -3 M108 44 l5 0" fill="none" {...line} />
          </g>
        </g>
      );
    case "pointing":
      return (
        <g>
          <path d="M35 72 Q27 78 25 86" fill="none" {...line} />
          <Hand x={25} y={88} />
          <path d="M85 70 L104 66" fill="none" {...line} />
          <Hand x={106} y={66} />
          <path d="M110 65 L116 64" fill="none" {...line} />
        </g>
      );
    case "thinking":
      return (
        <g>
          <path d="M35 72 Q40 84 50 84" fill="none" {...line} />
          <Hand x={52} y={84} />
          <path d="M85 72 Q93 78 95 86" fill="none" {...line} />
          <Hand x={95} y={88} />
          <circle cx={96} cy={40} r={2.5} fill="#fff" {...line} />
          <circle cx={103} cy={31} r={4} fill="#fff" {...line} />
          <circle cx={108} cy={14} r={10} fill="#fff" {...line} />
          <text x={108} y={19} textAnchor="middle" fontSize={14} fontWeight={700} fill={INDIGO} fontFamily="Arial, sans-serif">?</text>
        </g>
      );
    case "building":
      return (
        <g>
          <path d="M35 72 Q27 78 25 86" fill="none" {...line} />
          <Hand x={25} y={88} />
          <g className="webu-wave">
            <path d="M85 70 Q95 64 100 56" fill="none" {...line} />
            <path d="M100 56 L110 40" stroke="#6F6A7A" strokeWidth={4} strokeLinecap="round" />
            <path d="M106 36 a6 6 0 1 0 8 8 l-3 -3 l1 -4 l-3 -3 z" fill="#E7E2DA" {...line} />
            <Hand x={100} y={56} />
          </g>
        </g>
      );
    case "torch":
      return (
        <g>
          <path d="M120 54 L104 62 L104 70 L120 82 Z" fill={HALDI} opacity={0.35} />
          <path d="M35 72 Q27 78 25 86" fill="none" {...line} />
          <Hand x={25} y={88} />
          <path d="M85 72 L94 68" fill="none" {...line} />
          <rect x={93} y={61} width={12} height={8} rx={2} fill={INDIGO} transform="rotate(-8 99 65)" {...line} />
          <Hand x={94} y={68} />
        </g>
      );
    case "celebrating":
      return (
        <g>
          <path d="M35 68 Q25 58 21 46" fill="none" {...line} />
          <Hand x={20} y={43} />
          <path d="M85 68 Q95 58 99 46" fill="none" {...line} />
          <Hand x={100} y={43} />
          <g className="webu-confetti">
            <rect x={14} y={22} width={5} height={5} fill={RANI} transform="rotate(20 16 24)" />
            <rect x={102} y={20} width={5} height={5} fill={PEACOCK} transform="rotate(-15 104 22)" />
            <circle cx={30} cy={30} r={2.5} fill={HALDI} />
            <circle cx={92} cy={30} r={2.5} fill={MARIGOLD} />
            <rect x={110} y={34} width={4} height={4} fill={HALDI} />
            <rect x={8} y={36} width={4} height={4} fill={PEACOCK} />
          </g>
        </g>
      );
    case "curtain":
    case "scooter":
    default:
      return (
        <g>
          <path d="M35 72 Q27 78 25 86" fill="none" {...line} />
          <Hand x={25} y={88} />
          <path d="M85 72 Q93 78 95 86" fill="none" {...line} />
          <Hand x={95} y={88} />
        </g>
      );
  }
}

export function Webu({
  state = "waving",
  size = 120,
  className,
  title,
}: {
  state?: WebuState;
  size?: number;
  className?: string;
  /** Accessible name. Omit when the mascot is decorative. */
  title?: string;
}) {
  const a11y = title ? { role: "img" as const, "aria-label": title } : { "aria-hidden": true as const };
  const scooter = state === "scooter";
  return (
    <svg
      viewBox="0 0 120 128"
      width={size}
      height={(size * 128) / 120}
      className={`webu webu-${state}${className ? ` ${className}` : ""}`}
      {...a11y}
    >
      {state === "curtain" ? (
        <g>
          <path d="M4 6 H116" {...line} />
          <path d="M6 6 C10 40 4 80 12 124 L2 124 L2 6 Z" fill={RANI} {...line} />
          <path d="M114 6 C110 40 116 80 108 124 L118 124 L118 6 Z" fill={RANI} {...line} />
          <path d="M8 40 Q20 44 30 36" fill="none" stroke={HALDI} strokeWidth={3} strokeLinecap="round" />
          <path d="M112 40 Q100 44 90 36" fill="none" stroke={HALDI} strokeWidth={3} strokeLinecap="round" />
        </g>
      ) : null}

      {/* Feather tuft */}
      <path d="M60 44 C58 34 62 26 66 18" fill="none" {...line} />
      <path d="M63 30 l-6 -4 M64 26 l7 -3" fill="none" stroke={PEACOCK} strokeWidth={2} strokeLinecap="round" />
      <ellipse cx={67} cy={14} rx={6} ry={9} fill={PEACOCK} transform="rotate(18 67 14)" {...line} />
      <ellipse cx={67.5} cy={15} rx={3.2} ry={5} fill={INDIGO} transform="rotate(18 67 14)" />
      <circle cx={68} cy={16} r={1.6} fill={HALDI} />

      <Arms state={state} />

      {/* Handle */}
      <path d="M86 58 C100 56 102 80 86 82" fill="none" stroke={INK} strokeWidth={2} />
      <path d="M86 62 C95 62 96 76 86 78" fill="none" stroke={INK} strokeWidth={2} />

      {/* Cup body */}
      <path d="M32 48 H88 L82 92 Q81 98 75 98 H45 Q39 98 38 92 Z" fill={CUP} {...line} />
      {/* Rangoli band */}
      <path d="M36 82 H84" stroke={RANI} strokeWidth={3} />
      <circle cx={44} cy={88} r={1.6} fill={MARIGOLD} />
      <circle cx={52} cy={89} r={1.6} fill={PEACOCK} />
      <circle cx={60} cy={89.5} r={1.6} fill={RANI} />
      <circle cx={68} cy={89} r={1.6} fill={PEACOCK} />
      <circle cx={76} cy={88} r={1.6} fill={MARIGOLD} />
      {/* Chai surface */}
      <ellipse cx={60} cy={48} rx={28} ry={5.5} fill={CHAI} {...line} />

      {/* Face */}
      <g className="webu-eyes">
        <ellipse cx={50} cy={63} rx={3} ry={3.4} fill={INK} />
        <ellipse cx={70} cy={63} rx={3} ry={3.4} fill={INK} />
        <circle cx={51} cy={62} r={1} fill="#fff" />
        <circle cx={71} cy={62} r={1} fill="#fff" />
      </g>
      {state === "torch" || state === "thinking" ? (
        <path d="M54 74 Q60 76 66 73" fill="none" {...line} />
      ) : (
        <path d="M52 72 Q60 80 68 72" fill="none" {...line} />
      )}
      {/* Rangoli-dot cheeks */}
      <circle cx={43} cy={71} r={2.6} fill={RANI} />
      <circle cx={43} cy={66.5} r={1} fill={RANI} />
      <circle cx={39} cy={71} r={1} fill={RANI} />
      <circle cx={77} cy={71} r={2.6} fill={RANI} />
      <circle cx={77} cy={66.5} r={1} fill={RANI} />
      <circle cx={81} cy={71} r={1} fill={RANI} />

      {scooter ? (
        <g>
          <path d="M22 104 H96 Q104 104 106 112 H20 Q18 104 22 104 Z" fill={MARIGOLD} {...line} />
          <path d="M96 104 L104 84 L112 84" fill="none" {...line} />
          <circle cx={30} cy={116} r={8} fill={INDIGO} {...line} />
          <circle cx={96} cy={116} r={8} fill={INDIGO} {...line} />
          <circle cx={30} cy={116} r={2.5} fill="#fff" />
          <circle cx={96} cy={116} r={2.5} fill="#fff" />
          <path d="M4 110 h8 M2 116 h8" stroke={INK} strokeWidth={2} strokeLinecap="round" opacity={0.4} />
        </g>
      ) : (
        <ellipse cx={60} cy={102} rx={36} ry={6} fill="#DDF5F5" {...line} />
      )}
    </svg>
  );
}
