import { BUSINESS } from "@/lib/site";

const rows = [
  ["Legal name", BUSINESS.legalName],
  ["Constitution", BUSINESS.constitution],
  ["Registered address", BUSINESS.address],
  ["GSTIN", BUSINESS.gstin],
  ["Udyam", BUSINESS.udyam],
  ["Call fallback", BUSINESS.phone],
  ["Email", BUSINESS.email],
] as const;

const skeleton = new Set(["xxxx", "....", "..."]);

export function BusinessDetails() {
  return (
    <dl className="biz">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className={[skeleton.has(value) ? "is-pending" : "", label === "Registered address" ? "biz-wide" : ""]
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
