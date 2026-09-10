#!/usr/bin/env python3
"""Generate favicon / app icons from the circular palm monogram."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]


def qbezier(p0, p1, p2, steps=20):
    pts = []
    for i in range(steps + 1):
        t = i / steps
        u = 1 - t
        pts.append(
            (
                u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
                u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
            )
        )
    return pts


def ribbon(draw, spine, half_widths):
    left, right = [], []
    n = len(spine)
    for i, (x, y) in enumerate(spine):
        if i < n - 1:
            dx, dy = spine[i + 1][0] - x, spine[i + 1][1] - y
        else:
            dx, dy = x - spine[i - 1][0], y - spine[i - 1][1]
        mag = math.hypot(dx, dy) or 1.0
        px, py = -dy / mag, dx / mag
        w = half_widths[i]
        left.append((x + px * w, y + py * w))
        right.append((x - px * w, y - py * w))
    draw.polygon(left + list(reversed(right)), fill=0)


def frond(draw, origin, angle, length, droop, max_w):
    rad = math.radians(angle)
    ox, oy = origin
    ctrl = (
        ox + math.cos(rad) * length * 0.52,
        oy + math.sin(rad) * length * 0.34 + droop * 0.15,
    )
    tip = (
        ox + math.cos(rad) * length,
        oy + math.sin(rad) * length + droop,
    )
    spine = qbezier(origin, ctrl, tip, 22)
    n = len(spine)
    widths = []
    for i in range(n):
        t = i / (n - 1)
        env = math.sin(math.pi * (0.08 + 0.92 * (1 - t)))
        widths.append(max_w * max(0.07, env))
    ribbon(draw, spine, widths)


def draw_palm(draw, cx, cy, r):
    crown = (cx, cy + r * 0.04)
    trunk_bot = cy + r * 0.60
    draw.polygon(
        [
            (cx - r * 0.05, crown[1]),
            (cx + r * 0.05, crown[1]),
            (cx + r * 0.072, trunk_bot),
            (cx - r * 0.072, trunk_bot),
        ],
        fill=0,
    )
    for angle, length_n, droop_n, width_n in (
        (-198, 0.74, 0.30, 0.095),
        (-162, 0.86, 0.14, 0.090),
        (-128, 0.90, 0.02, 0.086),
        (-90, 0.86, -0.06, 0.082),
        (-52, 0.90, 0.02, 0.086),
        (-18, 0.86, 0.14, 0.090),
        (18, 0.74, 0.30, 0.095),
    ):
        frond(draw, crown, angle, r * length_n, r * droop_n, r * width_n)


def monogram_rgba(size: int, scale: int = 8) -> Image.Image:
    canvas = size * scale
    pad = canvas * 0.04
    box = (pad, pad, canvas - 1 - pad, canvas - 1 - pad)

    mark = Image.new("L", (canvas, canvas), 0)
    draw = ImageDraw.Draw(mark)
    draw.ellipse(box, fill=255)
    cx = cy = canvas / 2
    r = (canvas / 2) - pad
    draw_palm(draw, cx, cy, r)

    alpha = Image.new("L", (canvas, canvas), 0)
    ImageDraw.Draw(alpha).ellipse(box, fill=255)

    mark = mark.resize((size, size), Image.Resampling.LANCZOS)
    alpha = alpha.resize((size, size), Image.Resampling.LANCZOS)
    mark = mark.filter(ImageFilter.UnsharpMask(radius=0.6, percent=40, threshold=2))

    rgba = Image.merge("RGBA", (mark, mark, mark, alpha))
    return rgba


def save_png(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "PNG", optimize=True)
    print(f"wrote {path} ({path.stat().st_size} bytes)")


def main() -> None:
    icon32 = monogram_rgba(32)
    icon48 = monogram_rgba(48)
    icon180 = monogram_rgba(180)
    icon32_rgb = Image.new("RGB", (32, 32), (255, 255, 255))
    icon32_rgb.paste(icon32, mask=icon32.split()[-1])
    icon48_rgb = Image.new("RGB", (48, 48), (255, 255, 255))
    icon48_rgb.paste(icon48, mask=icon48.split()[-1])

    save_png(icon32, ROOT / "public" / "favicon-32.png")
    save_png(icon48, ROOT / "public" / "icon.png")
    save_png(icon180, ROOT / "public" / "apple-icon.png")
    save_png(icon48, ROOT / "src" / "app" / "icon.png")
    save_png(icon180, ROOT / "src" / "app" / "apple-icon.png")

    ico_master = monogram_rgba(48)
    for ico_path in (ROOT / "public" / "favicon.ico", ROOT / "src" / "app" / "favicon.ico"):
        ico_master.save(
            ico_path,
            format="ICO",
            sizes=[(16, 16), (32, 32), (48, 48)],
        )
        print(f"wrote {ico_path} ({ico_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
