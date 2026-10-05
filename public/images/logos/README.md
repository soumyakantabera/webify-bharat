Brand marks for the "Works with" / "Payments we set up" chips (content-plan §5.6).

Name each file `<id>.svg` (or `.webp`) using the ids in `lib/logos.ts`, then set `file` on that entry.
Without a file the site renders the brand name as a text chip — never a stand-in icon. Never hotlink.

Sources (npm packages are CC0-1.0; their marks are coloured with each brand's own hex):
- simple-icons@16 — most marks, plus meta and google-ads.
- simple-icons@13 — amazon, flipkart; simple-icons@11 — bing (later removed upstream).
- @iconify-json/logos (svg-logos) — zoho and google-workspace (colour wordmarks), microsoft-365 (Microsoft mark).
- Supplied by the owner (official wordmarks, converted to transparent WebP, 120px tall; the UPI and BHIM taglines are cropped off so the mark reads at chip size): upi, bhim, rupay, cashfree, tally, shiprocket, justdial, sulekha, indiamart.

Still text-only (government portals):
GST, Udyam, DGFT, UK VAT, EU IOSS.
To add one, save the official SVG from the brand's press/media kit here and set `file`.

Trademarks belong to their owners and are shown only to indicate compatibility.

All SVG viewBoxes are cropped to the mark (2% padding) so marks fill their badges. `wordmark: true` in lib/logos.ts means the file already includes the name, so chips show it alone.
