/**
 * TangledVsClean (content-plan §6.10 #13): left, tangled lines between a
 * personal QR, Excel, chats and a directory listing; right, one clean stack.
 */

function Chip({ x, y, label, fill }: { x: number; y: number; label: string; fill: string }) {
  return (
    <g>
      <rect x={x} y={y} width={96} height={30} rx={15} fill={fill} stroke="#1B1030" strokeWidth={1.5} />
      <text x={x + 48} y={y + 20} textAnchor="middle" fontWeight={700} fontSize={12} fill="#1B1030">{label}</text>
    </g>
  );
}

export function TangledVsClean({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 280" className={`wb-svg svg-tangled${className ? ` ${className}` : ""}`} role="img" aria-label="Before: a personal QR, Excel, WhatsApp chats and a directory listing tangled together. After: one clean system with site, payments and records connected.">
      <text x={150} y={24} textAnchor="middle" fontWeight={800} fontSize={12} letterSpacing="0.08em" fill="#B8005F">TODAY</text>
      <g fill="none" stroke="#E6007E" strokeWidth={2} opacity={0.75} strokeLinecap="round">
        <path d="M70 70 C200 40 40 200 230 210" />
        <path d="M230 70 C60 90 260 160 70 210" />
        <path d="M70 70 C120 160 220 30 230 140" />
        <path d="M70 140 C180 230 160 20 230 70" />
        <path d="M70 210 C120 120 260 250 230 140" />
        <path d="M150 140 c30 -40 -50 -30 -20 10 s 40 30 30 -10" />
      </g>
      <Chip x={22} y={55} label="Personal QR" fill="#FDE6F2" />
      <Chip x={182} y={55} label="Excel" fill="#E9F2DE" />
      <Chip x={22} y={125} label="WhatsApp" fill="#DDF5F5" />
      <Chip x={182} y={125} label="Directory" fill="#FFF4D6" />
      <Chip x={22} y={195} label="Paper bills" fill="#FFEBDD" />
      <Chip x={182} y={195} label="5 logins" fill="#ECE9F6" />

      <path d="M300 140 H340" stroke="#1B1030" strokeWidth={2.5} markerEnd="url(#tvc-arrow)" />
      <defs>
        <marker id="tvc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#1B1030" />
        </marker>
      </defs>

      <text x={490} y={24} textAnchor="middle" fontWeight={800} fontSize={12} letterSpacing="0.08em" fill="#3D6B0C">WITH YOUR SYSTEM</text>
      <g>
        <rect x={380} y={48} width={220} height={210} rx={22} fill="#fff" stroke="#E7E2DA" strokeWidth={2} />
        {[
          { y: 66, label: "Website & orders", fill: "#E6007E" },
          { y: 112, label: "Payments to your bank", fill: "#00A6A6" },
          { y: 158, label: "WhatsApp on your number", fill: "#4F8A10" },
          { y: 204, label: "One dashboard", fill: "#2B1E6B" },
        ].map((row) => (
          <g key={row.label}>
            <rect x={398} y={row.y} width={184} height={36} rx={12} fill={row.fill} />
            <text x={490} y={row.y + 23} textAnchor="middle" fontWeight={700} fontSize={12.5} fill="#fff">{row.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
