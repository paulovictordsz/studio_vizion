# Page Topology — humanacademy.ai/para-empresas

## Page Overview
- **Total scroll height**: ~9981px
- **Background**: rgb(241, 241, 241) light warm gray for light sections; rgb(26, 26, 26) / near-black for dark sections
- **Layout**: Single column, full-width sections with max-width containers

## Fixed/Sticky Elements
- **Navbar**: `position: fixed`, z-index: 10, full-width outer wrapper, centers a pill-shaped nav (border-radius: 100px, width ~684px, height 80px) with dark translucent bg `rgba(26, 26, 26, 0.7)` + backdrop-filter blur

## Sections (top to bottom)

| # | ID / Name | Tag | BG | Interaction | Height (approx) |
|---|-----------|-----|----|-------------|-----------------|
| 1 | Navbar | fixed DIV | dark translucent pill | static | 80px fixed |
| 2 | hero-section | SECTION | dark (bg image overlay) | static | 900px |
| 3 | About (framer-or2vj1) | SECTION | white #FFFFFF | static | ~700px |
| 4 | trigger-sec2 / treinamento-sob-medida | SECTION | #F5F5F5 | static | ~900px |
| 5 | Photo Gallery | SECTION | white | static | ~470px |
| 6 | depoimento (testimonials slider) | SECTION | dark #1A1A1A | click-driven slider | ~500px |
| 7 | Brands / Clients (unnamed) | SECTION | dark #1A1A1A | static | ~600px |
| 8 | trigger-sec4 (category tabs bar) | DIV | dark #1A1A1A | static | ~80px |
| 9 | formatos-de-workshop | SECTION | dark #1A1A1A | static | ~1200px |
| 10 | depoimentos (social testimonials) | SECTION | #F1F1F1 light | static | ~800px |
| 11 | trigger-beneficios (Benefits) | SECTION | dark #1A1A1A | static | ~700px |
| 12 | Continue Learning (unnamed) | SECTION | dark #1A1A1A | static | ~700px |
| 13 | Pre-footer (HUMAN large text) | SECTION | dark #1A1A1A | static | ~350px |
| 14 | Footer | SECTION/DIV | dark #1A1A1A | static | ~400px |

## Z-Index Layers
- Navbar: z-index 10, always on top

## Color Transitions
- Page alternates between light (#F1F1F1, #F5F5F5, #FFFFFF) and dark (#1A1A1A, #000000) sections
- Dark sections: text is white
- Light sections: text is black

## Key Assets
- Hero bg: `/images/hero-bg.png` (full-bleed, grayscale pen/notebook photo)
- Logo: `/images/logo-human.svg` (white version for dark bg, dark for light bg)
