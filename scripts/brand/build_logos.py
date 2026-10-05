"""
Build the logo system (content-plan §17.3 #1) from the existing mark.

- Reuses the paths of public/images/logo/wb-mark.svg exactly (the mark is never redrawn).
- Sets the wordmark in Sora 700 and converts it to outlines, so the SVG files
  render the same everywhere, with or without the font installed.
- Writes public/brand/logo/*.svg, app/icon.svg, public/favicon.svg and the
  static OG fonts in assets/og/ (next/og cannot read woff2).

Run: python3 scripts/brand/build_logos.py   (needs: pip install fonttools brotli)
"""
import re
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public/brand/logo"
OUT.mkdir(parents=True, exist_ok=True)

INK = "#1B1030"
RANI = "#E6007E"
BLUSH = "#FFF0F6"

mark_src = (ROOT / "public/images/logo/wb-mark.svg").read_text()
MARK = re.findall(r'<path fill="([^"]+)"(?: fill-rule="[^"]+")? d="([^"]+)"', mark_src)
MARK_W, MARK_H = 273, 220


def instance(name: str, weight: int) -> TTFont:
    font = TTFont(ROOT / f"app/fonts/{name}.woff2")
    font = instantiateVariableFont(font, {"wght": weight})
    font.flavor = None
    return font


SORA = instance("sora", 700)


def text_path(font: TTFont, text: str, size: float, x: float, baseline: float, tracking: float = -0.02):
    """Outline `text` at `size` units, starting at x on `baseline`. Returns (d, width)."""
    upm = font["head"].unitsPerEm
    scale = size / upm
    cmap = font.getBestCmap()
    gs = font.getGlyphSet()
    hmtx = font["hmtx"]
    pen = SVGPathPen(gs)
    cursor = 0.0
    for ch in text:
        gname = cmap[ord(ch)]
        tpen = TransformPen(pen, (scale, 0, 0, -scale, x + cursor, baseline))
        gs[gname].draw(tpen)
        cursor += hmtx[gname][0] * scale + tracking * size
    cursor -= tracking * size
    return pen.getCommands(), cursor


def mark_group(x: float, y: float, h: float, colours=None) -> str:
    s = h / MARK_H
    paths = []
    for i, (fill, d) in enumerate(MARK):
        c = colours[i] if colours else fill
        paths.append(f'<path fill="{c}" fill-rule="evenodd" d="{d}"/>')
    return f'<g transform="translate({x:.1f} {y:.1f}) scale({s:.4f})">{"".join(paths)}</g>'


def svg(w: float, h: float, body: str, label="Webify Bharat") -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" '
        f'width="{w:.0f}" height="{h:.0f}" role="img" aria-label="{label}">{body}</svg>\n'
    )


def horizontal(c_mark=None, c_webify=INK, c_bharat=RANI, bg: str | None = None, pad=0):
    # Mark 220 high; two-line wordmark beside it, like the site header.
    size = 92
    d1, w1 = text_path(SORA, "Webify", size, MARK_W + 26 + pad, 104 + pad)
    d2, w2 = text_path(SORA, "Bharat", size, MARK_W + 26 + pad, 200 + pad)
    w = MARK_W + 26 + max(w1, w2) + 6 + pad * 2
    h = MARK_H + pad * 2
    body = (bg or "") + mark_group(pad, pad, MARK_H, c_mark)
    body += f'<path fill="{c_webify}" d="{d1}"/><path fill="{c_bharat}" d="{d2}"/>'
    return w, h, body


def stacked(c_mark=None, c_webify=INK, c_bharat=RANI):
    size = 88
    _, w1 = text_path(SORA, "Webify ", size, 0, 0)
    _, w2 = text_path(SORA, "Bharat", size, 0, 0)
    total = w1 + w2
    w = max(MARK_W, total) + 8
    mx = (w - MARK_W) / 2
    tx = (w - total) / 2
    d1, _ = text_path(SORA, "Webify ", size, tx, MARK_H + 100)
    d2, _ = text_path(SORA, "Bharat", size, tx + w1, MARK_H + 100)
    body = mark_group(mx, 0, MARK_H, c_mark)
    body += f'<path fill="{c_webify}" d="{d1}"/><path fill="{c_bharat}" d="{d2}"/>'
    return w, MARK_H + 124, body


files = {}
files["webify-bharat-horizontal.svg"] = svg(*horizontal())
files["webify-bharat-stacked.svg"] = svg(*stacked())
files["webify-bharat-mark.svg"] = svg(MARK_W, MARK_H, mark_group(0, 0, MARK_H))
files["webify-bharat-mono-ink.svg"] = svg(*horizontal([INK, INK], INK, INK))
files["webify-bharat-mono-white.svg"] = svg(*horizontal(["#fff", "#fff"], "#fff", "#fff"))
grad = (
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
    '<stop offset="0" stop-color="#2B1E6B"/><stop offset="1" stop-color="#E6007E"/></linearGradient></defs>'
)
gw, gh, gbody = horizontal(["#fff", "#FFB400"], "#fff", "#FFD3EA", pad=60)
files["webify-bharat-on-gradient.svg"] = svg(gw, gh, grad + f'<rect width="{gw:.0f}" height="{gh:.0f}" rx="48" fill="url(#g)"/>' + gbody)

for name, content in files.items():
    (OUT / name).write_text(content)
    print(f"{name}: {len(content) / 1024:.1f} KB")

# Favicon / app icon: the mark centred in a square with breathing room.
side = 300
icon = svg(side, side, mark_group((side - MARK_W) / 2, (side - MARK_H) / 2, MARK_H), "Webify Bharat")
(ROOT / "app/icon.svg").write_text(icon)
(ROOT / "public/favicon.svg").write_text(icon)
# Maskable source: Blush background, mark inside the 80% safe zone.
mside = 512
mh = mside * 0.5
mw = mh * MARK_W / MARK_H
mask = svg(mside, mside, f'<rect width="{mside}" height="{mside}" fill="{BLUSH}"/>' + mark_group((mside - mw) / 2, (mside - mh) / 2, mh))
(ROOT / "scripts/brand/maskable.svg").write_text(mask)
apple = svg(180, 180, f'<rect width="180" height="180" fill="{BLUSH}"/>' + mark_group((180 - 120 * MARK_W / MARK_H) / 2, 30, 120))
(ROOT / "scripts/brand/apple.svg").write_text(apple)

# Static font instances for next/og (Satori reads TTF/OTF, not woff2 or variable fonts).
OG = ROOT / "assets/og"
OG.mkdir(parents=True, exist_ok=True)
SORA.save(OG / "sora-700.ttf")
instance("manrope", 600).save(OG / "manrope-600.ttf")
print("icons + og fonts written")
