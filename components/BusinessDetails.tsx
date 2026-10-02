import { BUSINESS } from "@/lib/site";

const pending = "To be added";

const rows = [
  ["Legal name", BUSINESS.legalName],
  ["Constitution", BUSINESS.constitution],
  ["Registered address", BUSINESS.address],
  ["GSTIN", BUSINESS.gstin || pending],
  ["Udyam", BUSINESS.udyam || pending],
  ["Call", BUSINESS.phone || pending],
  ["Email", BUSINESS.email],
] as const;

export function BusinessDetails() {
  return (
    <dl className="biz">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className={[value === pending ? "is-pending" : "", label === "Registered address" ? "biz-wide" : ""]
            .filter(Boolean)
            .join(" ")}
        >
          <dt>{label}</dt>
          <dd>
            {label === "Email" ? <a href={`mailto:${value}`}>{value}</a> : value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
