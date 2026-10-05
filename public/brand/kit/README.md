# Webify Bharat — off-site brand kit

Ready-made files for using the brand outside the website (content-plan §17.3 #14).
Preview everything at `/brand#kit`.

All SVGs have their text converted to outlines, so they look the same on any
computer or print shop without the fonts installed. PNGs are for uploading.

| File | Use | Size |
|---|---|---|
| `whatsapp-profile-640` | WhatsApp Business profile picture (cropped to a circle) | 640×640 px |
| `whatsapp-catalogue-cover-1080` | WhatsApp catalogue / collection cover | 1080×1080 px |
| `google-business-cover-1024x576` | Google Business Profile cover photo | 1024×576 px |
| `linkedin-banner-1584x396` | LinkedIn company or personal banner (content sits right of the profile photo) | 1584×396 px |
| `social-square-1080` | Instagram / Facebook intro post | 1080×1080 px |
| `business-card-front-90x50mm`, `business-card-back-90x50mm` | Business card; PNGs at 300 dpi | 90×50 mm |
| `letterhead-a4` | Letterhead; PNG at 150 dpi | A4 |
| `proposal-cover-a4` | Cover page for proposals and written scopes; PNG at 150 dpi | A4 |
| `invoice-header-210x48mm` | Header strip for the top of an A4 invoice; PNG at 300 dpi | 210×48 mm |
| `email-signature.html` + `email-signature-logo.png` | Email signature — replace YOUR NAME and ROLE, then paste into your mail app | — |

## Before you use them

- **Phone test:** upload the WhatsApp and Google images and check them on a phone — both apps crop differently on different screens.
- **Print:** the business card and A4 files are trim size with colour running to the edge. Ask your printer to add 3 mm bleed (or send the SVG and let them extend it).
- **Business details** come from `lib/site.ts`. GSTIN and Udyam appear on the letterhead footer and invoice header automatically once they're filled in there — then rebuild the kit.
- **Invoices:** if you're GST-registered, label the document "Tax Invoice" as the GST rules require; the header says "Invoice".

## Rebuilding

```bash
pip install fonttools brotli
python3 scripts/brand/build_kit.py
node scripts/brand/rasterize_kit.mjs
```
