# Behaviors — humanacademy.ai/para-empresas

## Scroll Sweep Findings

### Navbar
- **Behavior**: Static pill — does NOT change appearance on scroll
- **Always**: `rgba(26, 26, 26, 0.7)` with backdrop blur, border-radius 100px, centered on page
- **Position**: `fixed`, top: 0, full width outer container

### Section Transitions
- No scroll-snap detected
- No parallax layers
- No IntersectionObserver-triggered animations detected in DOM (Framer animations)
- Sections are stacked vertically with hard boundaries

## Click Sweep Findings

### Testimonials Slider (#depoimento)
- **Interaction model**: CLICK-DRIVEN with prev/next arrow buttons (← →)
- Has arrow buttons to navigate between testimonial slides
- Each slide: company logo + quote text + person name/title + large portrait photo on right
- Testimonials observed: Cogna, Essential Nutrition, and others

### Workshops Section (formatos-de-workshop)
- **Interaction model**: STATIC — two cards shown (Presencial, Online), not tabbed
- Both visible simultaneously, stacked vertically

### Social Testimonials Grid (#depoimentos)  
- **Interaction model**: STATIC — masonry/grid layout, all visible at once

## Hover Sweep Findings
- Nav links: no visible hover state in computed styles (Framer likely uses CSS classes)
- CTA buttons: standard pointer cursor
- Cards in features grid: no obvious hover transitions observed

## Responsive Sweep

### Desktop (1440px) — extracted
- Nav: centered pill, ~684px wide
- Hero: full viewport, text left-aligned, CTAs bottom-left area
- Features: 4-column grid
- Workshops: 2-column (left: text, right: image)
- Footer: 5-column links layout

### Tablet (768px) — estimated
- Nav: likely stacks or becomes hamburger
- Grid: 2 columns
- Workshops: single column stack

### Mobile (390px) — estimated
- Nav: hamburger or minimal
- All sections: single column
- Features: 1-2 column grid

## No Smooth Scroll Library
- Standard browser scroll detected
- No Lenis or Locomotive Scroll classes found

## Section-Specific Interaction Models
| Section | Model |
|---------|-------|
| Navbar | static fixed |
| Hero | static |
| About | static |
| Features Grid | static |
| Photo Gallery | static |
| Testimonials Slider | click-driven (arrows) |
| Brands Grid | static |
| Category Tags Bar | static |
| Workshops | static (2 stacked cards) |
| Social Testimonials | static grid |
| Benefits | static |
| Continue Learning | static |
| Pre-footer | static |
| Footer | static |
