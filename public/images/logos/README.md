Brand marks for the "Works with" / "Payments we set up" chips (content-plan §5.6).

Name each file `<id>.svg` (or `.webp`) using the ids in `lib/logos.ts`, then set `file` on that entry.
Without a file the site renders the brand name as a text chip — never a stand-in icon. Never hotlink.

Sources (npm packages are CC0-1.0; their marks are coloured with each brand's own hex):
- simple-icons@16 — most marks.
- simple-icons@13 — amazon, flipkart (later removed upstream).
- @iconify-json/logos (svg-logos) — google-workspace (wordmark), microsoft-365 (Microsoft mark).
- Supplied by the owner (official wordmarks, converted to transparent WebP, 120px tall): upi, bhim, rupay, cashfree, tally.

Still text-only (no openly licensed mark available; brand sites were not reachable when these were added):
Shiprocket, Justdial, Sulekha, IndiaMART, GST, Udyam, DGFT, UK VAT, EU IOSS.
To add one, save the official SVG from the brand's press/media kit here and set `file`.

Trademarks belong to their owners and are shown only to indicate compatibility.
