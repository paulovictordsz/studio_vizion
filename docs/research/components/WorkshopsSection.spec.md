# WorkshopsSection Specification

## Overview
- **Target file**: `components/WorkshopsSection.tsx`
- **Screenshot**: `docs/design-references/section-workshops.png` + `section-brands-logos.png` (bottom)
- **Interaction model**: STATIC — two workshop cards stacked vertically

## DOM Structure
```
SECTION (dark bg #1A1A1A, id="formatos-de-workshop")
  DIV (section header)
    H2 ("NOSSOS WORKSHOPS")
  
  DIV (category tabs bar — 3 options)
    SPAN (LÍDERES E TIMES CRIATIVOS)
    SPAN (BIBLIOTECAS DE PROMPTS)
    SPAN (IMERSÃO PRÁTICA)
  
  DIV (cards container — 2 stacked cards)
    
    [Card 1 — Presencial]
    DIV (dark rounded card, ~full width)
      DIV (left content, ~50%)
        SPAN (tag — "VAMOS ATÉ SUA EQUIPE")
        H3 ("Presencial")
        DIV (checklist items x3)
          [Item: icon + title + desc]
      DIV (right — image, ~50%)
        IMG (presencial workshop visual)
    
    [Card 2 — Online]
    DIV (dark rounded card, ~full width)
      DIV (left content, ~50%)
        SPAN (tag — "DESENHADO PARA TIMES REMOTOS")
        H3 ("Online")
        DIV (checklist items x3)
          [Item: icon + title + desc]
      DIV (right — image, ~50%)
        IMG (online workshop visual — wifi icon on dark bg)
```

## Computed Styles

### Section
- backgroundColor: rgb(26, 26, 26) — or rgb(0, 0, 0)
- padding: 80px
- color: white

### Section title H2
- fontFamily: Bricolage Grotesque
- fontSize: 72px
- fontWeight: 400
- letterSpacing: -1.44px
- textTransform: uppercase
- color: white
- textAlign: center
- marginBottom: 16px
- Content: "NOSSOS WORKSHOPS"

### Category tabs bar
- display: flex
- gap: 0 (border between items)
- borderTop: 1px solid rgba(255,255,255,0.15)
- borderBottom: 1px solid rgba(255,255,255,0.15)
- marginBottom: 48px

### Each tab label
- padding: 20px 40px
- fontSize: 11px
- fontWeight: 500
- letterSpacing: 0.1em
- textTransform: uppercase
- color: rgba(255,255,255,0.7)
- display: flex
- alignItems: center
- gap: 8px
- Has an icon to the left (globe/doc/cmd symbols)

### Workshop card
- backgroundColor: rgba(255, 255, 255, 0.04) or rgba(0, 0, 0, 0.3)
- borderRadius: 24px
- padding: 48px
- display: flex
- flexDirection: row
- gap: 48px
- marginBottom: 24px
- border: 1px solid rgba(255,255,255,0.08)

### Card tag (e.g. "VAMOS ATÉ SUA EQUIPE")
- backgroundColor: rgba(255,255,255,0.1)
- borderRadius: 100px
- padding: 8px 16px
- fontSize: 10px
- letterSpacing: 0.1em
- textTransform: uppercase
- color: white
- display: inline-flex
- gap: 8px
- Has icon to left

### Card H3 (e.g. "Presencial")
- fontFamily: Bricolage Grotesque
- fontSize: 48px
- fontWeight: 400
- lineHeight: 48px
- color: white
- marginTop: 16px
- marginBottom: 32px

### Checklist items (3 per card)
- display: flex
- flexDirection: column
- gap: 24px

### Checklist item
- display: flex
- gap: 16px
- alignItems: flex-start

### Checkmark icon
- width: 28px
- height: 28px
- borderRadius: 50%
- backgroundColor: rgb(231, 249, 154) — lime green
- display: flex
- alignItems: center
- justifyContent: center
- flexShrink: 0
- Has a ✓ checkmark inside (dark color)

### Checklist title
- fontSize: 18px
- fontWeight: 500
- color: white
- marginBottom: 4px

### Checklist description
- fontSize: 14px
- fontWeight: 300
- color: rgba(255,255,255,0.6)
- lineHeight: 22px

### Card right image
- width: ~50%
- borderRadius: 16px
- overflow: hidden

### Card image
- width: 100%
- height: ~350px
- objectFit: cover

## Card Data

### Card 1 — Presencial
- Tag: "VAMOS ATÉ SUA EQUIPE"
- Title: "Presencial"
- Checklist:
  1. **Imersão Total** — "Mão na massa e foco total para descobrir como a IA pode alavancar o time."
  2. **Feedback Imediato** — "Economize horas de tentativas da sua equipe com o feedback de quem já tem experiência."
  3. **Networking e Colaboração** — "Traga seu time para perto de outros profissionais que estão trabalhando com IA."
- Image: `/images/workshop-visual-presencial.png` (colorful abstract/UI visual)

### Card 2 — Online
- Tag: "DESENHADO PARA TIMES REMOTOS"
- Title: "Online"
- Checklist:
  1. **Acesso Remoto** — "Participe de qualquer lugar, com total flexibilidade e conveniência."
  2. **Conteúdo Direto** — "Módulos objetivos e condensados para otimizar o tempo da equipe."
  3. **Interatividade** — "Diálogo com professores e profissionais que permitem interação em tempo real."
- Image: `/images/workshop-visual-online.png` (dark bg with wifi/connectivity icon)

## Category Tabs Data
1. "🌐 LÍDERES E TIMES CRIATIVOS"
2. "📄 BIBLIOTECAS DE PROMPTS"
3. "⌘ IMERSÃO PRÁTICA"

## Assets
- `/images/workshop-visual-presencial.png`
- `/images/workshop-visual-online.png` (or `/images/workshop-icons.png`)
- Check icon: `/images/check-icon.png` or use inline ✓

## Responsive Behavior
- **Desktop**: Card content left + image right (2 columns)
- **Mobile**: Stack vertically, image below text
