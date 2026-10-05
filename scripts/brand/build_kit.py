"""
Build the off-site brand kit (content-plan §17.3 #14) into public/brand/kit/.

Every file is plain SVG with all text converted to outlines (Sora / Manrope),
so it prints and renders identically without the fonts installed. Business
details come from lib/site.ts; fields that are still placeholders ([[...]])
are left out. Run, then rasterize:

    python3 scripts/brand/build_kit.py        (needs: pip install fonttools brotli)
    node scripts/brand/rasterize_kit.mjs
"""
import math
import re
from pathlib import Path

from build_logos import INK, MARK_H, MARK_W, RANI, BLUSH, SORA, horizontal, instance, mark_group, stacked, text_path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public/brand/kit"
OUT.mkdir(parents=True, exist_ok=True)

INDIGO = "#2B1E6B"
HALDI = "#FFB400"
MARIGOLD = "#FF6B00"
PEACOCK = "#00A6A6"
MEHENDI = "#4F8A10"
CREAM = "#FBF8F2"
WHITE = "#FFFFFF"

MAN5 = instance("manrope", 500)
MAN7 = instance("manrope", 700)

# ---------- business details from lib/site.ts ----------
site_src = (ROOT / "lib/site.ts").read_text()


def field(name: str) -> str | None:
    m = re.search(rf'{name}: "([^"]*)"', site_src)
    if not m or "[[" in m.group(1) or not m.group(1).strip():
        return None
    return m.group(1)


TAGLINE = (field("tagline") or "").replace("'", "’") or None
ACCENT = field("accent")
EMAIL = field("email")
WA = field("whatsappDisplay")
WA_FMT = f"+91 {WA[:5]} {WA[5:]}" if WA else None
LEGAL = field("legalName")
ADDRESS = field("address")
GSTIN = field("gstin")
UDYAM = field("udyam")
WEB = "webify-bharat.vercel.app"


# ---------- drawing helpers ----------
def text(font, s: str, size: float, x: float, y: float, fill: str, anchor="start", tracking=-0.01):
    """Outlined text. Returns (svg, width)."""
    _, w = text_path(font, s, size, 0, 0, tracking)
    if anchor == "middle":
        x -= w / 2
    elif anchor == "end":
        x -= w
    d, _ = text_path(font, s, size, x, y, tracking)
    return f'<path fill="{fill}" d="{d}"/>', w


def logo(x: float, y: float, h: float, kind="horizontal", on_dark=False) -> tuple[str, float]:
    """Logo at height h. Returns (svg, width)."""
    if kind == "horizontal":
        w, lh, body = horizontal(["#fff", HALDI], "#fff", "#FFD3EA") if on_dark else horizontal()
    else:
        w, lh, body = stacked(["#fff", HALDI], "#fff", "#FFD3EA") if on_dark else stacked()
    s = h / lh
    return f'<g transform="translate({x:.2f} {y:.2f}) scale({s:.5f})">{body}</g>', w * s


def mark(x: float, y: float, h: float, on_dark=False) -> str:
    return mark_group(x, y, h, ["#fff", HALDI] if on_dark else None)


def defs(*parts: str) -> str:
    return "<defs>" + "".join(parts) + "</defs>"


def grad(id_: str, stops: list[str], x2="1", y2="1") -> str:
    n = len(stops) - 1
    s = "".join(f'<stop offset="{i / n:.2f}" stop-color="{c}"/>' for i, c in enumerate(stops))
    return f'<linearGradient id="{id_}" x1="0" y1="0" x2="{x2}" y2="{y2}">{s}</linearGradient>'


def dots(id_: str, colour: str, opacity: float, step: float, r: float) -> str:
    return (
        f'<pattern id="{id_}" width="{step}" height="{step}" patternUnits="userSpaceOnUse">'
        f'<circle cx="{step / 2}" cy="{step / 2}" r="{r}" fill="{colour}" fill-opacity="{opacity}"/></pattern>'
    )


def mandala(cx: float, cy: float, r: float, colours: list[str], opacity=1.0) -> str:
    """A simple rangoli: petal rings and dot rings around a centre."""
    out = [f'<g opacity="{opacity}">']
    rings = [(1.0, 16, 0.16), (0.72, 12, 0.14), (0.46, 8, 0.12)]
    for i, (k, n, pw) in enumerate(rings):
        rr = r * k
        c = colours[i % len(colours)]
        for j in range(n):
            a = 360 * j / n
            out.append(
                f'<ellipse cx="{cx:.2f}" cy="{cy - rr * 0.62:.2f}" rx="{r * pw * 0.55:.2f}" ry="{rr * 0.36:.2f}" '
                f'fill="{c}" transform="rotate({a:.1f} {cx:.2f} {cy:.2f})"/>'
            )
        dc = colours[(i + 1) % len(colours)]
        for j in range(n * 2):
            a = 2 * math.pi * j / (n * 2)
            out.append(f'<circle cx="{cx + math.cos(a) * rr * 1.08:.2f}" cy="{cy + math.sin(a) * rr * 1.08:.2f}" r="{r * 0.025:.2f}" fill="{dc}"/>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{r * 0.16:.2f}" fill="{colours[-1]}"/>')
    out.append("</g>")
    return "".join(out)


def pill(x: float, y: float, label: str, size: float, fill: str, ink: str, font=MAN7) -> tuple[str, float]:
    t, w = text(font, label, size, 0, 0, ink)
    pad = size * 0.9
    h = size * 2.1
    body = f'<rect x="{x:.1f}" y="{y:.1f}" width="{w + pad * 2:.1f}" height="{h:.1f}" rx="{h / 2:.1f}" fill="{fill}"/>'
    body += f'<g transform="translate({x + pad:.1f} {y + h * 0.69:.1f})">{t}</g>'
    return body, w + pad * 2


def svg_px(w: int, h: int, body: str, label: str) -> str:
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="{label}">{body}</svg>\n'


def svg_mm(w: float, h: float, body: str, label: str) -> str:
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}mm" height="{h}mm" role="img" aria-label="{label}">{body}</svg>\n'


files: dict[str, str] = {}

# 1. WhatsApp profile picture — 640×640, mark inside the circular crop.
w = h = 640
mh = 290
body = f'<rect width="{w}" height="{h}" fill="{BLUSH}"/>' + mark((w - mh * MARK_W / MARK_H) / 2, (h - mh) / 2, mh)
files["whatsapp-profile-640.svg"] = svg_px(w, h, body, "Webify Bharat — WhatsApp profile picture")

# 2. WhatsApp catalogue cover — 1080×1080.
w = h = 1080
body = defs(grad("g", [INDIGO, RANI]), dots("d", WHITE, 0.12, 36, 2.6))
body += f'<rect width="{w}" height="{h}" fill="url(#g)"/><rect width="{w}" height="{h}" fill="url(#d)"/>'
body += mandala(w - 60, h - 60, 300, [HALDI, MARIGOLD, WHITE], 0.9)
lg, _ = logo(90, 90, 120, on_dark=True)
body += lg
y = 430
for line in ["Built for your", "business. Not for", "everyone’s."]:
    t, _ = text(SORA, line, 92, 90, y, WHITE, tracking=-0.025)
    body += t
    y += 104
x, y = 90, 760
for i, label in enumerate(["Websites & stores", "Payments", "WhatsApp", "CRM / ERP", "Marketing"]):
    p, pw = pill(x, y, label, 30, WHITE if i % 2 == 0 else HALDI, INK)
    if x + pw > 760:
        x, y = 90, y + 84
        p, pw = pill(x, y, label, 30, WHITE if i % 2 == 0 else HALDI, INK)
    body += p
    x += pw + 16
t, _ = text(MAN5, "Replies in a few hours · 7 days a week", 30, 90, 1010, "#FFD3EA")
body += t
files["whatsapp-catalogue-cover-1080.svg"] = svg_px(w, h, body, "Webify Bharat — WhatsApp catalogue cover")

# 3. Google Business Profile cover — 1024×576, content in the centre safe area.
w, h = 1024, 576
body = defs(grad("g", [INDIGO, RANI]), dots("d", WHITE, 0.1, 28, 2))
body += f'<rect width="{w}" height="{h}" fill="url(#g)"/><rect width="{w}" height="{h}" fill="url(#d)"/>'
body += mandala(-20, h + 20, 230, [HALDI, MARIGOLD, WHITE], 0.85) + mandala(w + 20, -20, 200, [HALDI, WHITE, MARIGOLD], 0.6)
lg, lw = logo(0, 0, 150, on_dark=True)
body += f'<g transform="translate({(w - lw) / 2:.1f} 150)">{lg}</g>'
t, _ = text(SORA, "Custom software & marketing, built for your business.", 32, w / 2, 372, WHITE, "middle")
body += t
t, _ = text(MAN5, "Websites · Payments · WhatsApp · CRM / ERP · Fully remote across India", 21, w / 2, 418, "#FFD3EA", "middle")
body += t
files["google-business-cover-1024x576.svg"] = svg_px(w, h, body, "Webify Bharat — Google Business Profile cover")

# 4. LinkedIn banner — 1584×396; content right of the profile-photo overlap.
w, h = 1584, 396
body = defs(dots("d", WHITE, 0.08, 30, 2.2), grad("holi", [RANI, MARIGOLD, HALDI], "1", "0"))
body += f'<rect width="{w}" height="{h}" fill="{INK}"/><rect width="{w}" height="{h}" fill="url(#d)"/>'
body += mandala(95, 200, 240, [RANI, HALDI, MARIGOLD], 0.9)
body += f'<rect y="{h - 10}" width="{w}" height="10" fill="url(#holi)"/>'
t, _ = text(SORA, TAGLINE or "Built for your business.", 54, w - 90, 150, WHITE, "end", -0.02)
body += t
t, _ = text(MAN5, "Websites, stores, payments, WhatsApp, CRM / ERP and marketing — made for you, run for you.", 24, w - 90, 205, "#E9E3F5", "end")
body += t
lg, lw = logo(0, 0, 70, on_dark=True)
body += f'<g transform="translate({w - 90 - lw:.1f} 260)">{lg}</g>'
files["linkedin-banner-1584x396.svg"] = svg_px(w, h, body, "Webify Bharat — LinkedIn banner")

# 5. Social square (Instagram / Facebook post) — 1080×1080.
w = h = 1080
body = defs(dots("d", RANI, 0.12, 40, 3))
body += f'<rect width="{w}" height="{h}" fill="{BLUSH}"/><rect width="{w}" height="{h}" fill="url(#d)"/>'
body += mandala(w / 2, 300, 170, [RANI, MARIGOLD, HALDI, INDIGO])
acc = (ACCENT or "Aapka business. Aapke hisaab se.").split(". ")
y = 620
for line in acc:
    line = line if line.endswith(".") else line + "."
    t, _ = text(SORA, line, 74, w / 2, y, INK, "middle", -0.02)
    body += t
    y += 88
t, _ = text(MAN5, "Your business, your way.", 34, w / 2, y + 6, RANI, "middle")
body += t
lg, lw = logo(0, 0, 90)
body += f'<g transform="translate({(w - lw) / 2:.1f} 920)">{lg}</g>'
files["social-square-1080.svg"] = svg_px(w, h, body, "Webify Bharat — social post")

# 6. Business card — 90×50 mm (trim size; backgrounds run to the edge).
W, H = 90, 50
body = defs(dots("d", RANI, 0.12, 3, 0.25), grad("holi", [RANI, MARIGOLD, HALDI], "1", "0"))
body += f'<rect width="{W}" height="{H}" fill="{BLUSH}"/><rect width="{W}" height="{H}" fill="url(#d)"/>'
lg, lw = logo(0, 0, 15)
body += f'<g transform="translate({(W - lw) / 2:.2f} 13)">{lg}</g>'
t, _ = text(MAN5, TAGLINE or "", 2.8, W / 2, 37, INK, "middle")
body += t
body += f'<rect y="{H - 1.6}" width="{W}" height="1.6" fill="url(#holi)"/>'
files["business-card-front-90x50mm.svg"] = svg_mm(W, H, body, "Webify Bharat business card — front")

body = defs(grad("holi", [RANI, MARIGOLD, HALDI], "1", "0"))
body += f'<rect width="{W}" height="{H}" fill="{INK}"/>'
body += mandala(W + 2, H + 2, 22, [RANI, HALDI, MARIGOLD], 0.9)
lg, _ = logo(7, 6.5, 8, on_dark=True)
body += lg
lines = [("WhatsApp", WA_FMT), ("Email", EMAIL), ("Web", WEB), ("Office", "Kolkata · working across India")]
y = 26
for label, value in lines:
    if not value:
        continue
    t, _ = text(MAN7, label.upper(), 1.7, 7, y, HALDI, tracking=0.06)
    body += t
    t, _ = text(MAN5, value, 2.7, 22, y, WHITE)
    body += t
    y += 5
body += f'<rect y="{H - 1.6}" width="{W}" height="1.6" fill="url(#holi)"/>'
files["business-card-back-90x50mm.svg"] = svg_mm(W, H, body, "Webify Bharat business card — back")


def footer_line() -> str:
    parts = [p for p in [LEGAL, ADDRESS] if p]
    if GSTIN:
        parts.append(f"GSTIN {GSTIN}")
    if UDYAM:
        parts.append(f"Udyam {UDYAM}")
    return " · ".join(parts)


def contact_block(x: float, y: float, size: float, fill: str, anchor="end", gap=1.55) -> str:
    out = ""
    for v in [f"WhatsApp {WA_FMT}" if WA_FMT else None, EMAIL, WEB]:
        if not v:
            continue
        t, _ = text(MAN5, v, size, x, y, fill, anchor)
        out += t
        y += size * gap
    return out


# 7. Letterhead — A4.
W, H = 210, 297
body = defs(grad("holi", [RANI, MARIGOLD, HALDI], "1", "0"), dots("d", RANI, 0.18, 4, 0.35))
body += f'<rect width="{W}" height="{H}" fill="{WHITE}"/>'
lg, _ = logo(18, 16, 16)
body += lg
body += contact_block(W - 18, 21, 3.1, INK)
body += f'<rect x="18" y="38" width="{W - 36}" height="0.9" fill="url(#holi)"/>'
body += f'<rect y="{H - 14}" width="{W}" height="14" fill="url(#d)"/>'
t, _ = text(MAN5, footer_line(), 2.6, W / 2, H - 18, "#4A4458", "middle")
body += t
files["letterhead-a4.svg"] = svg_mm(W, H, body, "Webify Bharat letterhead")

# 8. Proposal / scope cover — A4.
body = defs(grad("g", [INDIGO, RANI]), dots("d", WHITE, 0.1, 6, 0.45))
body += f'<rect width="{W}" height="{H}" fill="url(#g)"/><rect width="{W}" height="{H}" fill="url(#d)"/>'
body += mandala(W + 6, H + 4, 88, [HALDI, MARIGOLD, WHITE], 0.85)
lg, _ = logo(20, 22, 18, on_dark=True)
body += lg
t, _ = text(MAN7, "PROPOSAL & WRITTEN SCOPE", 4.2, 20, 112, HALDI, tracking=0.08)
body += t
for i, line in enumerate(["A system built", "for your business."]):
    t, _ = text(SORA, line, 15, 20, 132 + i * 17, WHITE, tracking=-0.02)
    body += t
for i, label in enumerate(["Prepared for", "Date", "Prepared by"]):
    y = 190 + i * 16
    t, _ = text(MAN7, label.upper(), 3, 20, y, "#FFD3EA", tracking=0.06)
    body += t
    body += f'<rect x="20" y="{y + 6}" width="95" height="0.4" fill="{WHITE}" fill-opacity="0.7"/>'
t, _ = text(MAN5, TAGLINE or "", 3.4, 20, H - 26, WHITE)
body += t
body += contact_block(20, H - 19, 2.8, "#FFD3EA", "start", 1.5)
files["proposal-cover-a4.svg"] = svg_mm(W, H, body, "Webify Bharat proposal cover")

# 9. Invoice header — 210×48 mm strip for the top of an A4 invoice.
W, H = 210, 48
body = defs(grad("holi", [RANI, MARIGOLD, HALDI], "1", "0"))
body += f'<rect width="{W}" height="{H}" fill="{WHITE}"/>'
lg, _ = logo(18, 12, 15)
body += lg
t, _ = text(SORA, "INVOICE", 8, W - 18, 19, INK, "end", 0.02)
body += t
y = 26
for v in [LEGAL, ADDRESS, f"GSTIN {GSTIN}" if GSTIN else None, " · ".join(p for p in [EMAIL, WA_FMT] if p)]:
    if not v:
        continue
    t, _ = text(MAN5, v, 2.7, W - 18, y, "#4A4458", "end")
    body += t
    y += 4.2
body += f'<rect x="18" y="{H - 3}" width="{W - 36}" height="0.9" fill="url(#holi)"/>'
files["invoice-header-210x48mm.svg"] = svg_mm(W, H, body, "Webify Bharat invoice header")

# 10. Email signature logo (hosted PNG source) — 480×140, transparent.
lg, lw = logo(0, 10, 120)
files["email-signature-logo.svg"] = svg_px(math.ceil(lw), 140, lg, "Webify Bharat")

for name, content in files.items():
    (OUT / name).write_text(content)
    print(f"{name}: {len(content) / 1024:.1f} KB")

# Email signature (HTML) — table layout and inline styles for email clients.
sig = f"""<!-- Webify Bharat email signature. Replace YOUR NAME and ROLE, then paste into your mail client's signature settings. -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;color:#1B1030;font-size:13px;line-height:1.45">
  <tr>
    <td style="padding-right:14px;border-right:3px solid #E6007E;vertical-align:middle">
      <img src="https://{WEB}/brand/kit/email-signature-logo.png" width="160" alt="Webify Bharat" style="display:block;border:0">
    </td>
    <td style="padding-left:14px;vertical-align:middle">
      <strong style="font-size:15px">YOUR NAME</strong><br>
      <span style="color:#4A4458">ROLE · Webify Bharat</span><br>
      {f'<a href="https://wa.me/91{WA}" style="color:#128C4B;text-decoration:none">WhatsApp {WA_FMT}</a><br>' if WA else ''}
      {f'<a href="mailto:{EMAIL}" style="color:#B8005F;text-decoration:none">{EMAIL}</a> · ' if EMAIL else ''}<a href="https://{WEB}" style="color:#B8005F;text-decoration:none">{WEB}</a><br>
      <span style="color:#4A4458;font-style:italic">{TAGLINE or ''}</span>
    </td>
  </tr>
</table>
"""
(OUT / "email-signature.html").write_text(sig)
print("email-signature.html written")
