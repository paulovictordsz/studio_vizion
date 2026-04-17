# BenefitsSection Specification

## Overview
- **Target file**: `components/BenefitsSection.tsx`
- **Screenshot**: `docs/design-references/section-benefits.png`
- **Interaction model**: static

## DOM Structure
```
SECTION (dark bg #1A1A1A, id="trigger-beneficios")
  DIV (2-column layout)
    DIV (left content — ~55%)
      SPAN (badge — "POSSIBILIDADES DA IA")
      H2 ("SUA EQUIPE 100% CAPACITADA PARA IA")
      DIV (checklist — 3+ items)
        [Item: lime checkmark icon + title + desc]
    DIV (right — large B&W portrait photo, ~45%)
      IMG (dramatic B&W close-up side portrait of young man)
```

## Computed Styles

### Section
- backgroundColor: rgb(26, 26, 26) (or black)
- padding: 80px
- display: flex
- alignItems: stretch
- minHeight: ~700px

### Two-column wrapper
- display: flex
- gap: 80px
- alignItems: center
- width: 100%

### Left content column
- flex: 1
- display: flex
- flexDirection: column
- gap: 32px

### Badge
- backgroundColor: rgba(255,255,255,0.1) or rgba(231, 249, 154, 0.15)
- borderRadius: 100px
- padding: 8px 16px
- fontSize: 10px
- letterSpacing: 0.1em
- textTransform: uppercase
- color: white
- display: inline-flex
- alignItems: center
- gap: 8px
- width: fit-content
- Has people/team icon to left
- Content: "POSSIBILIDADES DA IA"

### H2
- fontFamily: Bricolage Grotesque
- fontSize: 56px
- fontWeight: 400
- lineHeight: 56px
- letterSpacing: -1.12px
- textTransform: uppercase
- color: white
- Content: "SUA EQUIPE 100% CAPACITADA PARA IA"

### Checklist container
- display: flex
- flexDirection: column
- gap: 32px
- marginTop: 8px

### Checklist item
- display: flex
- gap: 16px
- alignItems: flex-start

### Lime checkmark icon
- width: 28px
- height: 28px
- borderRadius: 50%
- backgroundColor: rgb(231, 249, 154) — lime
- display: flex
- alignItems: center
- justifyContent: center
- flexShrink: 0
- marginTop: 2px

### Item title
- fontSize: 18px
- fontWeight: 500
- color: white
- marginBottom: 4px

### Item description
- fontSize: 14px
- fontWeight: 300
- lineHeight: 22px
- color: rgba(255,255,255,0.6)

### Right column (portrait photo)
- width: ~45%
- position: relative
- borderRadius: 16px
- overflow: hidden

### Portrait image
- width: 100%
- height: 100%
- objectFit: cover
- The image is a dramatic black & white side profile of a young curly-haired man

## Checklist Data
1. **Capacidade criativa** — "Melhor aproveitamento do tempo com apoio da IA."
2. **Diferencial de mercado** — "Inovação visual utilizando as melhores ferramentas."
3. **Critério na hora de editar** — "Aumento do nível de entrega dos criativos."

## Assets
- Portrait: `/images/benefits-portrait.png`

## Text Content (verbatim)
- Badge: "POSSIBILIDADES DA IA"
- H2: "SUA EQUIPE 100% CAPACITADA PARA IA"
- Item 1: "Capacidade criativa" / "Melhor aproveitamento do tempo com apoio da IA."
- Item 2: "Diferencial de mercado" / "Inovação visual utilizando as melhores ferramentas."
- Item 3: "Critério na hora de editar" / "Aumento do nível de entrega dos criativos."

## Responsive Behavior
- **Desktop**: 2-column, text left, photo right
- **Mobile**: Stack vertically, image below
