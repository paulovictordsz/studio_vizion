# FeaturesGrid Specification

## Overview
- **Target file**: `components/FeaturesGrid.tsx`
- **Screenshot**: `docs/design-references/section-clients-logos.png`
- **Interaction model**: static

## DOM Structure
```
SECTION (backgroundColor: rgb(245, 245, 245), padding large)
  DIV (section header — title + subtitle, max-width ~600px)
    SPAN (label — "Treinamentos Sob Medida")
    H2 (subtitle — "Customizamos cada workshop...")
  DIV (4x2 card grid)
    [8 cards, each:]
    DIV (card — dark rounded card)
      IMG (icon — circular icon image)
      H3 (card title)
      P (card description)
```

## Section Header
### Label
- fontSize: 11px
- fontWeight: 500
- letterSpacing: 0.12em
- textTransform: uppercase
- color: rgb(0, 0, 0)
- marginBottom: 8px

### H2 subtitle text
- fontSize: 15px
- fontWeight: 300
- lineHeight: 22px
- color: rgb(0, 0, 0)
- maxWidth: 500px
- Content: "Customizamos cada workshop a partir dos desafios do seu time, aplicando na prática as principais ferramentas de IA do mercado criativo."

## Card Grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 16px
- width: 100%
- maxWidth: 1280px
- marginTop: 48px

## Card (dark rounded)
- backgroundColor: rgba(0, 0, 0, 0.86) — near-black semi-transparent
- borderRadius: 24px
- padding: 42px
- height: ~306px
- display: flex
- flexDirection: column
- justifyContent: flex-start
- alignItems: flex-start
- gap: 24px
- boxShadow: rgba(255, 255, 255, 0.04) 0px 4px 32px 0px

## Card Icon
- width: 40px
- height: 40px
- The icons are circular icons with a face/head/person motif in lime-green outline on dark bg
- Use images: icon-circle.png, icon-circle-2.png ... icon-circle-7.png (one per card)

## Card Title (H3)
- fontFamily: Bricolage Grotesque
- fontSize: 20px
- fontWeight: 400
- lineHeight: 24px
- color: rgb(255, 255, 255)

## Card Description (P)
- fontFamily: Inter or Bricolage Grotesque Light
- fontSize: 13px
- fontWeight: 300
- lineHeight: 19.5px
- color: rgba(255, 255, 255, 0.7)

## Card Data (8 cards, 2 rows of 4)

### Row 1:
1. **Treinamento Customizado** — "Conteúdo feito sob medida para os desafios reais da sua equipe."
2. **Nivelamento do Time** — "Seus colaboradores nivelados e falando a mesma lingua."
3. **Metodologia Prática** — "Capacitação prática, direta ao ponto e sem enrolação."
4. **Ferramentas Homologadas** — "Adaptação para as ferramentas que seu time tem permissão de usar."

### Row 2:
5. **Criação de Assistentes** — "Seu time aprende a criar assistentes para escalar as entregas."
6. **IA para Marketing** — "Criação de copy e desdobramentos de conteúdo criativo."
7. **IA para Imagens** — "Ilustrações e imagens profisisonais e realistas, sem cara de IA."
8. **IA para Vídeos e Animações** — "Storytelling, filmes e animações do início ao fim."

## Assets
- Section background: rgb(245, 245, 245)
- Card icons: `/images/icon-circle.png` through `/images/icon-circle-7.png` (reuse for all 8 cards)

## Responsive Behavior
- **Desktop**: 4 columns
- **Tablet**: 2 columns
- **Mobile**: 1 column
