import { asset } from "@/lib/asset";
type BrandLogoProps = {
  variant?: "light" | "dark";
};

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo-${variant}`}>
      <img
        src={asset("/images/logo/wb-mark.svg")}
        alt=""
        className="brand-mark"
        width={56}
        height={44}
      />
      <span className="brand-wordmark">
        <span className="brand-webify">Webify</span>
        <span className="brand-bharat">Bharat</span>
      </span>
    </span>
  );
}
