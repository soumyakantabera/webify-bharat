/**
 * MoneyPath (content-plan §6.10 #5).
 * India: UPI / cards → Razorpay / Cashfree → your bank.
 * Abroad: cards → Stripe → your bank. Each payment branches to a Ledger invoice.
 * Generic boxes, no third-party logos.
 */
const FONT = "var(--font-body), Arial, sans-serif";

function Box({ x, y, w, label, sub, fill, stroke }: { x: number; y: number; w: number; label: string; sub?: string; fill: string; stroke: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={52} rx={14} fill={fill} stroke={stroke} strokeWidth={2} />
      <text x={x + w / 2} y={sub ? y + 23 : y + 31} textAnchor="middle" fontFamily={FONT} fontWeight={700} fontSize={14} fill="#1B1030">{label}</text>
      {sub ? <text x={x + w / 2} y={y + 40} textAnchor="middle" fontFamily={FONT} fontSize={11} fill="#4A4458">{sub}</text> : null}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="#2B1E6B" strokeWidth={2.5} markerEnd="url(#mp-arrow)" strokeDasharray="5 5" className="mp-flow" />;
}

export function MoneyPath({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 300" className={`wb-svg svg-moneypath${className ? ` ${className}` : ""}`} role="img" aria-label="Payments from India go through Razorpay or Cashfree to your bank; payments from abroad go through Stripe to your bank; each payment creates an invoice.">
      <defs>
        <marker id="mp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#2B1E6B" />
        </marker>
      </defs>
      <text x={20} y={30} fontFamily={FONT} fontWeight={800} fontSize={12} letterSpacing="0.08em" fill="#007373">INDIA</text>
      <Box x={20} y={42} w={150} label="UPI · cards" sub="netbanking" fill="#DDF5F5" stroke="#00A6A6" />
      <Arrow x1={172} y1={68} x2={232} y2={68} />
      <Box x={236} y={42} w={170} label="Razorpay / Cashfree" sub="your gateway account" fill="#fff" stroke="#00A6A6" />

      <text x={20} y={170} fontFamily={FONT} fontWeight={800} fontSize={12} letterSpacing="0.08em" fill="#2B1E6B">ABROAD</text>
      <Box x={20} y={182} w={150} label="International cards" fill="#ECE9F6" stroke="#2B1E6B" />
      <Arrow x1={172} y1={208} x2={232} y2={208} />
      <Box x={236} y={182} w={170} label="Stripe" sub="your account" fill="#fff" stroke="#2B1E6B" />

      <Arrow x1={408} y1={68} x2={466} y2={120} />
      <Arrow x1={408} y1={208} x2={466} y2={152} />
      <Box x={470} y={110} w={150} label="Your bank" sub="business account" fill="#E9F2DE" stroke="#4F8A10" />

      <path d="M545 164 V230" stroke="#FFB400" strokeWidth={2.5} strokeDasharray="5 5" markerEnd="url(#mp-arrow)" />
      <Box x={470} y={236} w={150} label="GST invoice" sub="Webify Ledger" fill="#FFF4D6" stroke="#FFB400" />
    </svg>
  );
}
