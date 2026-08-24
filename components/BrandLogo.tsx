type BrandLogoProps = {
  variant?: "light" | "dark";
};

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  const src =
    variant === "dark" ? "/images/logo/logo-dark.png" : "/images/logo/logo-light.png";
  return (
    <img
      src={src}
      alt="Webify Bharat"
      className="brand-logo-img"
      width={198}
      height={60}
    />
  );
}
