import { Icon } from "@/components/Icon";
import { LogoBadge } from "./LogoBadge";
import { SvgLink } from "./SvgLink";

/**
 * MoneyPath (content-plan §6.10 #5).
 * India: UPI / cards → Razorpay / Cashfree → your bank.
 * Abroad: cards → Stripe → your bank. Each payment branches to a Ledger invoice.
 * Real payment marks (lib/logos.ts) show what each step works with.
 */

const INK = "#1B1030";

function Box({ x, y, w, h = 84, label, sub, fill, stroke, icon }: { x: number; y: number; w: number; h?: number; label: string; sub?: string; fill: string; stroke: string; icon?: string }) {
  const tx = icon ? x + 44 : x + 14;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={16} fill={fill} stroke={stroke} strokeWidth={2} />
      {icon ? (
        <g>
          <circle cx={x + 24} cy={y + 26} r={15} fill="#fff" stroke={stroke} strokeWidth={1.5} />
          <g transform={`translate(${x + 14} ${y + 16})`} color={stroke}>
            <Icon name={icon} size={20} weight="bold" />
          </g>
        </g>
      ) : null}
      <text x={tx} y={y + 24} fontWeight={700} fontSize={14} fill={INK}>{label}</text>
      {sub ? <text x={tx} y={y + 40} fontSize={11} fill="#4A4458">{sub}</text> : null}
    </g>
  );
}

function Arrow({ d }: { d: string }) {
  return <path d={d} fill="none" stroke="#2B1E6B" strokeWidth={2.5} markerEnd="url(#mp-arrow)" strokeDasharray="5 5" className="mp-flow" />;
}

function Logos({ x, y, items }: { x: number; y: number; items: [string, number][] }) {
  let cx = x;
  return (
    <g>
      {items.map(([name, w]) => {
        const at = cx;
        cx += w + 5;
        return <LogoBadge key={name} x={at} y={y} w={w} h={24} name={name} />;
      })}
    </g>
  );
}

export function MoneyPath({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 660 340" className={`wb-svg svg-moneypath${className ? ` ${className}` : ""}`} role="group" aria-label="Payments from India (UPI, RuPay, Visa, Mastercard) go through Razorpay or Cashfree to your bank; payments from abroad go through Stripe to your bank; each payment creates a GST invoice.">
      <defs>
        <marker id="mp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#2B1E6B" />
        </marker>
      </defs>

      <g transform="translate(20 14)" color="#007373">
        <Icon name="MapPin" size={16} weight="bold" />
      </g>
      <text x={40} y={27} fontWeight={800} fontSize={12} letterSpacing="0.08em" fill="#007373">INDIA</text>
      <Box x={20} y={38} w={190} label="UPI · cards" sub="netbanking too" fill="#DDF5F5" stroke="#00A6A6" />
      <Logos x={32} y={86} items={[["upi", 44], ["rupay", 44], ["visa", 40], ["mastercard", 30]]} />
      <Arrow d="M212 80 H242" />
      <SvgLink href="/systems/pay" label="Webify Pay: payment gateway on your own account">
        <Box x={246} y={38} w={190} label="Payment gateway" sub="your own account" fill="#fff" stroke="#00A6A6" />
      </SvgLink>
      <Logos x={258} y={86} items={[["razorpay", 30], ["cashfree", 70]]} />

      <g transform="translate(20 166)" color="#2B1E6B">
        <Icon name="GlobeHemisphereWest" size={16} weight="bold" />
      </g>
      <text x={40} y={179} fontWeight={800} fontSize={12} letterSpacing="0.08em" fill="#2B1E6B">ABROAD</text>
      <Box x={20} y={190} w={190} label="International cards" sub="multi-currency" fill="#ECE9F6" stroke="#2B1E6B" />
      <Logos x={32} y={238} items={[["visa", 40], ["mastercard", 30], ["amex", 30], ["paypal", 30]]} />
      <Arrow d="M212 232 H242" />
      <SvgLink href="/systems/pay" label="Webify Pay: Stripe for international payments">
        <Box x={246} y={190} w={190} label="Stripe" sub="your own account" fill="#fff" stroke="#2B1E6B" />
      </SvgLink>
      <Logos x={258} y={238} items={[["stripe", 30]]} />

      <Arrow d="M438 80 C462 80 462 140 478 148" />
      <Arrow d="M438 232 C462 232 462 172 478 166" />
      <Box x={482} y={114} w={162} h={72} label="Your bank" sub="business account" fill="#E9F2DE" stroke="#4F8A10" icon="Bank" />

      <path d="M563 188 V246" stroke="#FFB400" strokeWidth={2.5} strokeDasharray="5 5" markerEnd="url(#mp-arrow)" />
      <SvgLink href="/systems/ledger" label="Webify Ledger: a GST invoice for every payment">
        <Box x={482} y={250} w={162} h={72} label="GST invoice" sub="Webify Ledger" fill="#FFF4D6" stroke="#E0A000" icon="Receipt" />
      </SvgLink>
    </svg>
  );
}
