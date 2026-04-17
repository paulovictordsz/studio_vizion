# TestimonialsSlider Specification

## Overview
- **Target file**: `components/TestimonialsSlider.tsx`
- **Screenshot**: `docs/design-references/section-training-cards.png` (bottom dark section)
- **Interaction model**: CLICK-DRIVEN — prev/next arrow buttons

## DOM Structure
```
SECTION (dark bg, full-width, position: relative, overflow: hidden)
  DIV (slide — full bleed)
    DIV (left card — dark semi-transparent, ~35% width)
      IMG (company logo — e.g. cogna logo)
      DIV (navigation arrows — ← →)
      P (testimonial quote)
      DIV (person info — avatar + name + role/company)
    DIV (right side — large portrait photo, ~65% width)
      IMG (full-height portrait photo)
```

## Computed Styles

### Section
- backgroundColor: rgb(26, 26, 26)
- width: 100%
- height: ~500px (or taller)
- position: relative
- overflow: hidden
- display: flex

### Left card (dark overlay)
- width: ~35%
- minWidth: 400px
- backgroundColor: rgba(0, 0, 0, 0.6) or rgba(26, 26, 26, 0.9)
- borderRadius: 16px (or 0 on outer edge)
- padding: 40px 48px
- display: flex
- flexDirection: column
- gap: 24px
- position: relative
- zIndex: 2

### Company logo (e.g. cogna)
- height: ~32px
- width: auto
- filter: brightness(0) invert(1) — white version

### Arrow buttons row
- display: flex
- gap: 8px
- position: absolute or relative

### Arrow button (← →)
- width: 40px
- height: 40px
- borderRadius: 50%
- border: 1px solid rgba(255,255,255,0.3)
- color: white
- display: flex
- alignItems: center
- justifyContent: center
- cursor: pointer
- backgroundColor: transparent

### Quote text
- fontFamily: Bricolage Grotesque
- fontSize: 16px
- fontWeight: 300
- lineHeight: 26px
- color: rgb(255, 255, 255)
- fontStyle: italic (curved quotation marks)

### Person avatar
- width: 36px
- height: 36px
- borderRadius: 50%
- objectFit: cover

### Person name
- fontSize: 14px
- fontWeight: 500
- color: rgb(255, 255, 255)

### Person role
- fontSize: 12px
- color: rgba(255,255,255,0.6)

### Right side photo
- width: ~65%
- height: 100%
- objectFit: cover
- position: absolute or flex

## States & Behaviors

### Slide navigation (click-driven)
- **Trigger**: Click ← or → buttons
- **State change**: Slide transitions (fade or slide) to next/previous testimonial
- **Implementation**: useState for current index, map over testimonials array
- **Transition**: opacity transition 0.3s ease

## Testimonials Data

### Slide 1:
- Logo: cogna (use `/images/logo-cogna.png`)
- Quote: "Dentre as inúmeras ofertas de cursos sobre IA no mercado, tivemos a felicidade de escolher a Human Academy. No atendimento já percebemos a diferença. No workshop tivemos a oportunidade de aprendizado, mas também de abertura para novas possibilidades criativas."
- Name: Thiago Soares
- Role: Dir. de Marketing / Essential Nutrition
- Photo: `/images/testimonial-photo-1.jpg` or `/images/testimonial-photo-2.jpg`

### Slide 2 (approximated — use same data or similar):
- Use the same testimonial data or repeat

## Assets
- Photo 1: `/images/testimonial-photo-1.jpg`
- Photo 2: `/images/testimonial-photo-2.jpg`
- Cogna logo: `/images/logo-cogna.png`
- Avatar: `/images/testimonial-avatar-thiago.jpg`

## Responsive Behavior
- **Desktop**: side-by-side, card left + photo right
- **Mobile**: Stack, card on top, photo below (or hidden)
