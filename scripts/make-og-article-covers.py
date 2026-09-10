#!/usr/bin/env python3
"""Write scraper-safe 1200x630 JPEGs of oversized article covers (same artwork)."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "og" / "articles"

COVERS = [
    (
        "public/photos/guides/guide-01-ai-agents.png",
        "how-to-build-your-ai-agent-workforce.jpg",
    ),
    (
        "public/photos/guides/guide-02-growth-marketing.png",
        "build-a-distribution-engine.jpg",
    ),
    (
        "public/photos/guides/guide-03-brand-strategy.png",
        "build-an-iconic-brand.jpg",
    ),
    (
        "public/blog/what-ai-search-actually-rewards/cover.png",
        "what-ai-search-actually-rewards.jpg",
    ),
    (
        "public/blog/why-brand-aligned-marketing-wins/cover.png",
        "why-brand-aligned-marketing-wins.jpg",
    ),
    (
        "public/blog/how-to-rank-on-ai-search-in-2026-the-aeo-playbook-for-founders/cover.png",
        "how-to-rank-on-ai-search-in-2026.jpg",
    ),
]

WIDTH, HEIGHT = 1200, 630


def fit_cover(src: Image.Image) -> Image.Image:
    img = src.convert("RGB")
    scale = max(WIDTH / img.width, HEIGHT / img.height)
    new_w = max(WIDTH, round(img.width * scale))
    new_h = max(HEIGHT, round(img.height * scale))
    img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - WIDTH) // 2
    top = (new_h - HEIGHT) // 2
    return img.crop((left, top, left + WIDTH, top + HEIGHT))


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for rel, name in COVERS:
        src_path = ROOT / rel
        out = OUT_DIR / name
        with Image.open(src_path) as im:
            frame = im
            if getattr(im, "is_animated", False):
                im.seek(0)
                frame = im.convert("RGB")
            fitted = fit_cover(frame)
        fitted.save(out, "JPEG", quality=82, optimize=True, progressive=True)
        print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
