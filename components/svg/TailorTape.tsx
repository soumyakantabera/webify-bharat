/**
 * TailorTape (content-plan §6.10 #17): a measuring tape wrapped round a
 * shopfront — the "made to measure, not a template" metaphor.
 */
export function TailorTape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 260" className={`wb-svg svg-tailortape${className ? ` ${className}` : ""}`} aria-hidden="true">
      {/* Shopfront */}
      <rect x={70} y={70} width={180} height={160} rx={8} fill="#fff" stroke="#1B1030" strokeWidth={2} />
      <path d="M60 70 H260 L250 40 H70 Z" fill="#E6007E" stroke="#1B1030" strokeWidth={2} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${82 + i * 36} 40 L${76 + i * 36} 70 H${94 + i * 36} L${100 + i * 36} 40 Z`} fill="#fff" opacity={0.9} />
      ))}
      <path d="M60 70 Q78 86 96 70 Q114 86 132 70 Q150 86 168 70 Q186 86 204 70 Q222 86 240 70 Q252 80 260 70" fill="#E6007E" stroke="#1B1030" strokeWidth={2} />
      <rect x={92} y={110} width={64} height={56} rx={6} fill="#DDF5F5" stroke="#1B1030" strokeWidth={2} />
      <rect x={176} y={120} width={52} height={110} rx={6} fill="#FFF4D6" stroke="#1B1030" strokeWidth={2} />
      <circle cx={218} cy={176} r={3} fill="#1B1030" />
      <rect x={110} y={84} width={100} height={18} rx={4} fill="#2B1E6B" />
      <text x={160} y={97} textAnchor="middle" fontFamily="var(--font-display), Arial, sans-serif" fontWeight={700} fontSize={11} fill="#fff">YOUR SHOP</text>
      <path d="M40 230 H280" stroke="#1B1030" strokeWidth={2} strokeLinecap="round" />

      {/* Tape */}
      <path id="tt-curve" d="M24 168 C90 120 230 210 300 132" fill="none" stroke="#FFB400" strokeWidth={22} strokeLinecap="round" />
      <path d="M24 168 C90 120 230 210 300 132" fill="none" stroke="#1B1030" strokeWidth={1.5} strokeDasharray="1 11.5" strokeOpacity={0.9} transform="translate(0 -6)" />
      <g transform="translate(286 120)">
        <circle r={20} fill="#FFB400" stroke="#1B1030" strokeWidth={2} />
        <circle r={6} fill="#fff" stroke="#1B1030" strokeWidth={2} />
      </g>
      <text fontFamily="var(--font-mono), monospace" fontSize={9} fontWeight={700} fill="#1B1030">
        <textPath href="#tt-curve" startOffset="22%">made · to · measure</textPath>
      </text>
    </svg>
  );
}
