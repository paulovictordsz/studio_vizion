# HeroSection Specification

## Overview
- **Target file**: `components/HeroSection.tsx`
- **Screenshot**: `docs/design-references/full-desktop-1440.png` (top section)
- **Interaction model**: static

## DOM Structure
```
SECTION (full viewport, position: relative, overflow hidden)
  IMG (full-bleed bg image — grayscale pen/fountain pen on notebook)
  DIV (dark overlay — semi-transparent black gradient at bottom)
  DIV (content wrapper — absolute positioned, bottom-left area)
    SPAN (badge pill — "IA PARA POTENCIALIZAR O SEU TIME")
    H1 ("AJUDAMOS O SEU TIME A ADOTAR A IA MAIS RAPIDAMENTE.")
    P (subtitle text)
    DIV (CTA buttons row)
      A (primary CTA — lime green pill "Falar com Especialista →")
      A (secondary link — "Saiba Mais ↓")
```

## Computed Styles (exact values)

### Section container
- width: 100vw (1440px)
- height: 100vh (900px)
- position: relative
- overflow: hidden
- display: flex
- alignItems: flex-end or bottom area
- paddingBottom: ~80px
- paddingLeft: ~80px

### Background image (hero-bg.png)
- position: absolute
- top: 0, left: 0, right: 0, bottom: 0
- width: 100%
- height: 100%
- objectFit: cover
- objectPosition: center
- filter: grayscale(100%) or the image is already B&W
- There is a dark green/olive color tint (the "H" letters in olive/army green visible in the pen photo)

### Badge pill ("IA PARA POTENCIALIZAR O SEU TIME")
- backgroundColor: rgba(255, 255, 255, 0.12) or similar semi-transparent
- borderRadius: 100px
- padding: 8px 16px
- color: rgb(255, 255, 255)
- fontSize: 11px
- fontWeight: 500
- letterSpacing: 0.08em
- textTransform: uppercase
- display: flex
- alignItems: center
- gap: 8px
- Has a small AI/circuit icon to the left (use ai-icon.svg)
- marginBottom: 16px

### H1 heading
- fontFamily: Bricolage Grotesque (substituting PP Radio Grotesk Regular)
- fontSize: 57px
- fontWeight: 400 (regular weight, not bold)
- lineHeight: 57px (tight, 1:1)
- letterSpacing: -1.14px (-0.02em)
- color: rgb(255, 255, 255)
- textTransform: uppercase
- maxWidth: 581px
- Content: "AJUDAMOS O SEU TIME A ADOTAR A IA MAIS RAPIDAMENTE."

### Subtitle paragraph
- fontFamily: Bricolage Grotesque Light or Inter
- fontSize: 15px
- fontWeight: 300
- lineHeight: 22px
- color: rgba(255, 255, 255, 0.8)
- maxWidth: 380px
- marginTop: 24px
- Content: "Unimos criatividade, tecnologia e estratégia para multiplicar as possibilidades da sua equipe com o uso da inteligência artificial."

### CTA row
- display: flex
- flexDirection: row
- alignItems: center
- gap: 24px
- marginTop: 32px

### Primary CTA button ("Falar com Especialista →")
- backgroundColor: rgb(231, 249, 154) — lime yellow-green
- color: rgb(0, 0, 0) — black
- borderRadius: 100px
- padding: 12px 24px
- height: 72px
- width: ~260px
- display: flex
- alignItems: center
- justifyContent: center
- gap: 15px
- fontSize: 15px
- fontWeight: 500
- Has a circular dark arrow button on the right side

### Secondary link ("Saiba Mais ↓")
- color: rgb(255, 255, 255)
- fontSize: 14px
- fontWeight: 400
- textDecoration: none
- display: flex
- alignItems: center
- gap: 8px

## Content Area Position
- Content is in the bottom-left of the section
- paddingLeft: ~80px
- paddingBottom: ~80px
- The right side (~55% of width) shows just the background image

## Assets
- Background: `/images/hero-bg.png` — full bleed black and white artistic photo of a fountain pen on a notebook with large "H" watermark letters in olive green
- AI icon for badge: `/images/ai-icon.svg`

## Text Content (verbatim)
- Badge: "IA PARA POTENCIALIZAR O SEU TIME"
- H1: "Ajudamos o seu time a adotar a IA mais rapidamente." (display as uppercase)
- Subtitle: "Unimos criatividade, tecnologia e estratégia para multiplicar as possibilidades da sua equipe com o uso da inteligência artificial."
- CTA 1: "Falar com Especialista"
- CTA 2: "Saiba Mais"

## Responsive Behavior
- **Desktop**: Content bottom-left, image fills full viewport
- **Mobile**: Stack vertically, image shorter, content below or overlaid
