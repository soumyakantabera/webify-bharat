import localFont from "next/font/local";

export const sora = localFont({
  src: "./fonts/sora.woff2",
  variable: "--font-sora",
  display: "swap",
  weight: "400 800",
  preload: true,
  adjustFontFallback: true,
});

export const manrope = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "400 800",
  preload: true,
  adjustFontFallback: true,
});

export const jetbrains = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  variable: "--font-jetbrains",
  display: "optional",
  weight: "400 700",
  preload: false,
  adjustFontFallback: true,
});
