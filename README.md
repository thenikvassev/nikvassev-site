# nikvassev.com (reposition)

Next.js App Router + TypeScript + Tailwind personal site for Nik Vassev.

## How to run

cd /workspace/nikvassev-site
npm install
npm run dev

Open http://localhost:3000

Build: npm run build && npm start

## Page map

- / Home
- /about About
- /projects Projects hub
- /projects/guide-iq
- /projects/novobeing
- /projects/mindleap
- /ai-visibility Storyline Pros
- /brand-strategy Guide IQ + coaching
- /resources Blog + guides
- /resources/systems-over-hustle
- /resources/brand-before-channels

## Placeholders for Nik

- Newsletter ESP not wired (UI only)
- Book call is mailto hello@nikvassev.com
- Digimax omitted per Brand DNA
- Guide IQ pricing confirm on guideiq.ai
- Two sample blog posts
- Social handles in src/lib/site.ts
- OG images later
- Novobeing/Mindleap wording may need Nik pass

## Design notes

**Personal site = light sibling of Storyline Pros** (https://storylinepros.com/).
Storyline itself stays the deep-green world; this site shares the same kit tokens on a white/cream canvas.

### Exact hex (from Storyline CSS kit)

| Token | Hex | Use on personal |
| --- | --- | --- |
| `--color-kit-key1` | `#032415` | Inverted spotlight panels / footer band (sparingly) |
| `--color-kit-dark` | `#0A3B24` | Primary green: body text, links, button fills |
| `--color-kit-light` | `#E8E4D9` | Cream section backgrounds |
| `--color-kit-key2` | `#CBBCA3` | Tan borders / dividers / highlights |
| White | `#FFFFFF` | Page background, cards, button labels on green |
| Black | `#000000` | Available; body prefers `#0A3B24` |

### Fonts (next/font)

- **Titles / display (h1, h2 only):** Newsreader 400 — line-height 1.3, letter-spacing -0.5px
- Note: Storyline Pros will move to Newsreader on its later port; personal site locks it now as the shared display face.
- **Body / UI / nav / buttons:** Inter 400 / 600
- Small card / UI headings (h3 + compact h2) stay Inter

### UI recipe

- Page bg `#FFFFFF`; alternating sections `#E8E4D9`
- Primary button: fill `#0A3B24`, label white, radius **8px**
- Secondary button: green outline on light
- Cards: radius **16px**, white surface, tan border
- ALL-CAPS spaced section labels stay Inter / sans
- Brand DNA copy unchanged; Digimax still omitted
- Occasional `#032415` inverted panels mirror Storyline white-on-green cards

Refs: storylinepros.com kit tokens; Greg-style IA (hero + newsletter, scannable cards).
