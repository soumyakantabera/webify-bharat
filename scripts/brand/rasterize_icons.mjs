/**
 * Rasterize the generated icon SVGs to PNG (content-plan §17.3 #2).
 * Run after build_logos.py: node scripts/brand/rasterize_icons.mjs
 * Uses Playwright's Chromium (preinstalled in the dev container).
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require("playwright");
} catch {
  playwright = require("/opt/node22/lib/node_modules/playwright");
}

const root = resolve(import.meta.dirname, "../..");
const read = (p) => readFileSync(resolve(root, p), "utf8");
const jobs = [
  { svg: "app/icon.svg", out: "public/favicon-16.png", size: 16 },
  { svg: "app/icon.svg", out: "public/favicon-32.png", size: 32 },
  { svg: "app/icon.svg", out: "public/favicon-48.png", size: 48 },
  { svg: "app/icon.svg", out: "public/icon-192.png", size: 192 },
  { svg: "app/icon.svg", out: "public/icon-512.png", size: 512 },
  { svg: "scripts/brand/maskable.svg", out: "public/icon-maskable-512.png", size: 512 },
  { svg: "scripts/brand/apple.svg", out: "app/apple-icon.png", size: 180 },
  { svg: "scripts/brand/apple.svg", out: "public/apple-touch-icon.png", size: 180 },
];

const browser = await playwright.chromium.launch();
const page = await browser.newPage();
for (const job of jobs) {
  await page.setViewportSize({ width: job.size, height: job.size });
  const svg = read(job.svg).replace(/width="\d+" height="\d+"/, `width="${job.size}" height="${job.size}"`);
  await page.setContent(`<html><body style="margin:0;background:transparent">${svg}</body></html>`);
  await page.screenshot({ path: resolve(root, job.out), omitBackground: true, clip: { x: 0, y: 0, width: job.size, height: job.size } });
  console.log("wrote", job.out);
}
await browser.close();
