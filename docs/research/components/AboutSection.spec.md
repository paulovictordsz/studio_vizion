# AboutSection Specification

## Overview
- **Target file**: `components/AboutSection.tsx`
- **Screenshot**: `docs/design-references/section-logos-partners.png`
- **Interaction model**: static

## DOM Structure
```
SECTION (white bg, full width)
  DIV (small centered logo/icon at top center)
  DIV (two-column layout, max-width ~1200px, centered)
    DIV (left column — heading + body text, ~40% width)
      H2 ("MULTIPLIQUE O QUE SEU TIME PODE CRIAR")
      P (body text)
    DIV (right column — laptop image, ~55% width)
      IMG (laptop screens showing Human Academy platform)
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- padding: 80px 80px
- display: flex
- flexDirection: column
- alignItems: center

### Small icon at top (centered)
- An illustrated icon showing people/heads (the "qqq" icon visible in screenshot)
- width: ~60px
- marginBottom: 60px

### Two-column wrapper
- display: flex
- flexDirection: row
- gap: 60px
- alignItems: center
- width: 100%
- maxWidth: 1280px

### Left column
- width: ~40%
- display: flex
- flexDirection: column
- gap: 32px

### H2 heading
- fontFamily: Bricolage Grotesque
- fontSize: 44px
- fontWeight: 400
- lineHeight: 44px
- letterSpacing: -0.88px
- color: rgb(0, 0, 0)
- textTransform: uppercase
- Content: "MULTIPLIQUE O QUE SEU TIME PODE CRIAR"

### Body text
- fontFamily: Inter or Bricolage Grotesque Light
- fontSize: 15px
- fontWeight: 300
- lineHeight: 24px
- color: rgb(0, 0, 0)
- Content: "Somos o maior ecossistema brasileiro especializado em IA para as áreas de marketing e publicidade. Sabemos o que a IA pode fazer pelo seu time e seus clientes. Nossas experiências inspiram, treinam e desbloqueiam o potencial criativo."

### Right column (laptop image)
- width: ~55%
- borderRadius: 16px
- overflow: hidden

### Image
- width: 100%
- height: ~360px
- objectFit: cover
- The image shows two laptop screens displaying a dark UI with a woman portrait — black and white artistic

## Assets
- Small icon: `/images/human-icon-small.png` (the three head silhouettes icon)
- Laptop image: `/images/laptop-screens.png`

## Text Content (verbatim)
- H2: "MULTIPLIQUE O QUE SEU TIME PODE CRIAR"
- Body: "Somos o maior ecossistema brasileiro especializado em IA para as áreas de marketing e publicidade. Sabemos o que a IA pode fazer pelo seu time e seus clientes. Nossas experiências inspiram, treinam e desbloqueiam o potencial criativo."

## Responsive Behavior
- **Desktop**: 2-column side by side
- **Mobile**: Stacks vertically, image below text
