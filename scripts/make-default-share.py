#!/usr/bin/env python3
"""Compose public/og/default-share.jpg from the cream NV monogram."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
# Highest-res in-repo cream NV (Drive master was unavailable).
SOURCE = ROOT / "public" / "apple-icon.png"
OUT = ROOT / "public" / "og" / "default-share.jpg"

WIDTH, HEIGHT = 1200, 630
CREAM = (232, 228, 217)  # #E8E4D9
MARK_H = 380


def main() -> None:
    mark = Image.open(SOURCE).convert("RGBA")
    scale = MARK_H / mark.height
    new_size = (max(1, round(mark.width * scale)), MARK_H)
    mark = mark.resize(new_size, Image.Resampling.LANCZOS)

    canvas = Image.new("RGB", (WIDTH, HEIGHT), CREAM)
    x = (WIDTH - mark.width) // 2
    y = (HEIGHT - mark.height) // 2
    canvas.paste(mark, (x, y), mark)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUT, "JPEG", quality=90, optimize=True, progressive=True)
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
