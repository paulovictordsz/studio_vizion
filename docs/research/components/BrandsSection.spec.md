# BrandsSection Specification

## Overview
- **Target file**: `components/BrandsSection.tsx`
- **Screenshot**: `docs/design-references/section-testimonials-slider.png` (bottom area) + `section-brands-logos.png` (top)
- **Interaction model**: static

## DOM Structure
```
SECTION (dark bg #1A1A1A)
  DIV (max-width container, two-column top)
    DIV (left — large heading)
      H2 ("MARCAS QUE CONFIAM NA HUMAN")
    DIV (right — stats card + subtitle)
      P ("Já atendemos líderes de mercado e startups.")
      DIV (stats pill card)
        SPAN ("+20 TREINAMENTOS")
        DIV (avatar stack — 3 circular avatars)
        P ("Traga sua empresa para a era da IA.")
        IMG (Human spinner logo/icon)
  DIV (logos grid — 3 rows x 4 cols of brand logos)
```

## Computed Styles

### Section
- backgroundColor: rgb(26, 26, 26) — dark
- padding: 80px
- color: white

### Top layout
- display: flex
- justifyContent: space-between
- alignItems: flex-start
- marginBottom: 64px

### H2 heading
- fontFamily: Bricolage Grotesque
- fontSize: 64px
- fontWeight: 400
- lineHeight: 64px
- letterSpacing: -1.28px
- color: rgb(255, 255, 255)
- textTransform: uppercase
- maxWidth: 400px
- Content: "MARCAS QUE CONFIAM NA HUMAN"

### Subtitle (right)
- fontSize: 15px
- fontWeight: 300
- color: rgba(255, 255, 255, 0.7)
- textAlign: right
- Content: "Já atendemos líderes de mercado e startups."

### Stats card (dark card on right side)
- backgroundColor: rgba(255, 255, 255, 0.06)
- borderRadius: 16px
- padding: 24px 32px
- display: flex
- flexDirection: column
- gap: 16px
- minWidth: 320px

### "+20 TREINAMENTOS" label
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 0.1em
- textTransform: uppercase
- color: white

### Avatar stack (3 small circular avatars)
- display: flex
- Each avatar: width 36px, height 36px, borderRadius 50%, border: 2px solid #1A1A1A
- Overlapping (negative marginLeft: -8px)

### Human spinner icon
- width: ~40px
- Animated spinning (or static)
- The data:image/svg+xml inline SVG from the page (the geometric "H" spinner)

### Brands logo grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 24px 40px
- marginTop: 48px

### Each logo
- height: ~48px
- width: auto
- filter: brightness(0) invert(1) — all logos shown in white
- opacity: 0.9

## Brand Logos Data (12 logos, 3 rows of 4)

Row 1: DPZ | artplan | (H-stripes logo) | Google
Row 2: Damn Good Advice | Trident | SAMSUNG | stone
Row 3: Claro | MXMAMA | hotmart | anacouto

Row 4 (seen in scroll): ALMAP BBDO | dreamersgr | cogna | 3corações

### Logo files:
- `/images/logo-dpz.png`
- `/images/logo-artplan.png`
- `/images/logo-hw.png` (H-stripes)
- `/images/logo-google.png`
- `/images/logo-row2.png` (second row)
- `/images/logo-samsung.png`
- `/images/logo-stone.png`
- `/images/logo-trident.png`
- `/images/logo-damn.png`
- `/images/logo-almap.png`
- `/images/logo-dreamersgr.svg`
- `/images/logo-cogna.png`
- `/images/logo-3coracoes.png`
- `/images/logo-hotmart.png`
- `/images/logo-cogna-w.png`

## Avatar Images
- `/images/avatar-1.jpg`, `/images/avatar-2.jpg`, `/images/avatar-3.jpg`

## Text Content (verbatim)
- H2: "MARCAS QUE CONFIAM NA HUMAN"
- Subtitle: "Já atendemos líderes de mercado e startups."
- Stats: "+20 TREINAMENTOS"
- Stats desc: "Traga sua empresa para a era da IA."

## Responsive Behavior
- **Desktop**: 4-column logo grid
- **Mobile**: 2-column logo grid, header stacks vertically
