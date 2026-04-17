# Navbar Specification

## Overview
- **Target file**: `src/components/Navbar.tsx` (or `components/Navbar.tsx`)
- **Screenshot**: `docs/design-references/full-desktop-1440.png` (top)
- **Interaction model**: static, position fixed

## DOM Structure
```
DIV (fixed full-width outer wrapper, z-index 10)
  DIV (flex row, justify: space-between, align: center, padding: 12px 40px)
    DIV (logo — "/HUMAN &Company" text in white)
    NAV (pill-shaped dark container)
      DIV (flex row, gap: 16px, padding: 12px 24px)
        A (TREINAMENTOS — nav link)
        A (WORKSHOPS — nav link)
        A (DEPOIMENTOS — nav link)  
        A (BENEFÍCIOS — nav link)
        A (Fale Conosco — white pill CTA button)
    DIV (language selector — "BR" with flag + chevron)
```

## Computed Styles (exact values)

### Outer wrapper (fixed overlay)
- position: fixed
- top: 0
- left: 0
- right: 0
- width: 100%
- zIndex: 10
- display: flex
- justifyContent: space-between
- alignItems: center
- padding: 12px 40px (estimated from page layout)
- pointerEvents: none on wrapper, auto on children

### Nav pill (centered floating pill)
- backgroundColor: rgba(26, 26, 26, 0.7)
- backdropFilter: blur(12px)
- borderRadius: 100px
- height: 80px
- padding: 12px 24px
- display: flex
- flexDirection: row
- alignItems: center
- gap: 16px

### Nav links (TREINAMENTOS, WORKSHOPS, etc.)
- color: rgb(255, 255, 255) — white text
- fontSize: 11px
- fontWeight: 500
- letterSpacing: 0.08em
- textTransform: uppercase
- padding: 10px 12px
- borderRadius: 400px

### "Fale Conosco" CTA button (white pill)
- backgroundColor: rgb(255, 255, 255)
- color: rgb(0, 0, 0) — black text
- borderRadius: 100px
- padding: 16px 20px
- height: 56px
- display: flex
- alignItems: center
- gap: 8px
- fontSize: 13px
- fontWeight: 500
- Has a ↓ arrow icon to the right of the text

### Logo text "/HUMAN &Company"
- color: rgb(255, 255, 255)
- fontFamily: Bricolage Grotesque
- fontSize: 14px
- fontWeight: 600
- Letter: "/" is styled differently (thinner or italic)

### Language selector "BR"
- backgroundColor: rgba(26, 26, 26, 0.7)
- backdropFilter: blur(12px)
- borderRadius: 100px
- padding: 12px 16px
- color: white
- display: flex
- gap: 8px
- Has a small circular flag icon

## States & Behaviors

### No scroll state change
- Navbar does NOT change on scroll — same appearance throughout the page
- On the dark hero section: logo and links are white ✓
- On light sections: navbar is still floating pill so it floats above content

## Assets
- Logo: `/images/logo-human.svg` (white SVG)
- Flag icon: `/images/flag-br.png`

## Text Content (verbatim)
- Logo: "/HUMAN &Company" (the "/" is part of the brand)
- Nav links: TREINAMENTOS | WORKSHOPS | DEPOIMENTOS | BENEFÍCIOS | Fale Conosco ↓
- Language: 🇧🇷 BR ∨

## Responsive Behavior
- **Desktop (1440px)**: Full pill nav centered, logo left, language right
- **Mobile (390px)**: Simplified — keep pill but maybe hide some nav items, or just show logo + CTA
