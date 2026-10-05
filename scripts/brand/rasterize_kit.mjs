/**
 * Rasterize the off-site brand kit (content-plan §17.3 #14) to PNG.
 * Run after build_kit.py: node scripts/brand/rasterize_kit.mjs
 * Screen assets export at their pixel size; print assets at 300 dpi
 * (letterhead and proposal cover at 150 dpi to keep files small).
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
const kit = (f) => resolve(root, "public/brand/kit", f);
const mm = (v, dpi) => Math.round((v / 25.4) * dpi);
const jobs = [
  ["whatsapp-profile-640", 640, 640],
  ["whatsapp-catalogue-cover-1080", 1080, 1080],
  ["google-business-cover-1024x576", 1024, 576],
  ["linkedin-banner-1584x396", 1584, 396],
  ["social-square-1080", 1080, 1080],
  ["business-card-front-90x50mm", mm(90, 300), mm(50, 300)],
  ["business-card-back-90x50mm", mm(90, 300), mm(50, 300)],
  ["letterhead-a4", mm(210, 150), mm(297, 150)],
  ["proposal-cover-a4", mm(210, 150), mm(297, 150)],
  ["invoice-header-210x48mm", mm(210, 300), mm(48, 300)],
  ["email-signature-logo", null, 140, true],
];

const browser = await playwright.chromium.launch();
const page = await browser.newPage();
for (const [name, w0, h, transparent] of jobs) {
  let svg = readFileSync(kit(`${name}.svg`), "utf8");
  const vb = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const w = w0 ?? Math.round((Number(vb[1]) / Number(vb[2])) * h);
  svg = svg.replace(/ width="[^"]+" height="[^"]+"/, ` width="${w}" height="${h}"`);
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(`<html><body style="margin:0;background:transparent">${svg}</body></html>`);
  await page.screenshot({ path: kit(`${name}.png`), omitBackground: !!transparent, clip: { x: 0, y: 0, width: w, height: h } });
  console.log("wrote", `${name}.png`, `${w}×${h}`);
}
await browser.close();
