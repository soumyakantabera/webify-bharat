import localFont from "next/font/local";

export const baloo = localFont({
  src: "./fonts/baloo-da-2.woff2",
  variable: "--font-baloo",
  display: "swap",
  weight: "400 800",
  preload: true,
  adjustFontFallback: "Arial",
});

export const manrope = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "400 800",
  preload: true,
  adjustFontFallback: "Arial",
});

export const jetbrains = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  variable: "--font-jetbrains",
  display: "optional",
  weight: "400 700",
  preload: false,
  adjustFontFallback: false,
});
