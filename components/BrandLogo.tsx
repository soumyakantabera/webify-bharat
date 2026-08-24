type BrandLogoProps = {
  variant?: "light" | "dark";
};

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo-${variant}`}>
      <img
        src="/images/logo/wb-mark.png"
        alt=""
        className="brand-mark"
        width={72}
        height={48}
      />
      <span className="brand-wordmark">
        <span className="brand-webify">Webify</span>
        <span className="brand-bharat">Bharat</span>
      </span>
    </span>
  );
}
