#!/usr/bin/env python3
"""Compose public/og/default-share.jpg: 1200x630 black canvas, centered palm monogram."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og" / "default-share.jpg"

WIDTH, HEIGHT = 1200, 630
CIRCLE_D = 304
SCALE = 4


def qbezier(
    p0: tuple[float, float],
    p1: tuple[float, float],
    p2: tuple[float, float],
    steps: int = 20,
) -> list[tuple[float, float]]:
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


def ribbon(
    draw: ImageDraw.ImageDraw,
    spine: list[tuple[float, float]],
    half_widths: list[float],
) -> None:
    left: list[tuple[float, float]] = []
    right: list[tuple[float, float]] = []
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


def frond(
    draw: ImageDraw.ImageDraw,
    origin: tuple[float, float],
    angle: float,
    length: float,
    droop: float,
    max_w: float,
) -> None:
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
    widths = []
    n = len(spine)
    for i in range(n):
        t = i / (n - 1)
        env = math.sin(math.pi * (0.08 + 0.92 * (1 - t)))
        widths.append(max_w * max(0.07, env))
    ribbon(draw, spine, widths)


def draw_palm(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float) -> None:
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


def main() -> None:
    canvas_w, canvas_h = WIDTH * SCALE, HEIGHT * SCALE
    img = Image.new("L", (canvas_w, canvas_h), 0)
    draw = ImageDraw.Draw(img)

    cx, cy = canvas_w / 2, canvas_h / 2
    r = (CIRCLE_D * SCALE) / 2
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=255)
    draw_palm(draw, cx, cy, r)

    img = img.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    img = img.filter(ImageFilter.UnsharpMask(radius=0.9, percent=55, threshold=2))

    rgb = Image.new("RGB", (WIDTH, HEIGHT))
    rgb.paste(img)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
