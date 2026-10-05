import { BUSINESS, filled } from "@/lib/site";

const rows = [
  ["Legal name", BUSINESS.legalName],
  ["Constitution", BUSINESS.constitution],
  ["Registered address", BUSINESS.address],
  ["GSTIN", BUSINESS.gstin],
  ["Udyam", BUSINESS.udyam],
  ["Call fallback", BUSINESS.phone],
  ["Email", BUSINESS.email],
] as const;

/** Business details. Fields the owner hasn't filled yet are hidden (content-plan §1 #24). */
export function BusinessDetails() {
  return (
    <dl className="biz">
      {rows
        .filter(([, value]) => filled(value))
        .map(([label, value]) => (
          <div key={label} className={label === "Registered address" ? "biz-wide" : undefined}>
            <dt>{label}</dt>
            <dd>{label === "Email" ? <a href={`mailto:${value}`}>{value}</a> : value}</dd>
          </div>
        ))}
    </dl>
  );
}
