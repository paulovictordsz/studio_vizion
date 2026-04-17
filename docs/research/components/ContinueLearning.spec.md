# ContinueLearning Specification

## Overview
- **Target file**: `components/ContinueLearning.tsx`
- **Screenshot**: `docs/design-references/section-cta-footer.png`
- **Interaction model**: static

## DOM Structure
```
SECTION (dark bg, continues from benefits)
  DIV (max-width container)
    DIV (2-column header)
      H2 (left — "CONTINUE APRENDENDO COM A HUMAN")
      P (right — subtitle)
    DIV (3-column course cards grid)
      [3 cards each:]
      DIV (course card)
        IMG (course thumbnail — editorial photo)
        H3 (course name)
        DIV (divider line)
        P (course description)
    DIV (CTA button row — centered)
      A (lime button — "Falar com Especialista →")
```

## Computed Styles

### Section
- backgroundColor: rgb(0, 0, 0) or #1A1A1A
- padding: 80px
- color: white

### Header row
- display: flex
- justifyContent: space-between
- alignItems: flex-start
- marginBottom: 48px

### H2
- fontFamily: Bricolage Grotesque
- fontSize: 56px
- fontWeight: 400
- lineHeight: 56px
- letterSpacing: -1.12px
- textTransform: uppercase
- color: rgb(231, 249, 154) — LIME GREEN (key visual: the heading is lime colored!)
- maxWidth: 500px
- Content: "CONTINUE APRENDENDO COM A HUMAN"

### Subtitle (right)
- fontSize: 16px
- fontWeight: 300
- lineHeight: 26px
- color: rgba(255,255,255,0.7)
- textAlign: right
- maxWidth: 350px
- Content: "Concluindo qualquer workshop, seu time recebe acesso total aos cursos, assistentes e materiais da human."

### Course cards grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px

### Course card
- display: flex
- flexDirection: column
- gap: 16px

### Course thumbnail
- width: 100%
- height: ~200px
- objectFit: cover
- borderRadius: 12px
- The images are editorial/artistic photos

### Course name (H3)
- fontFamily: Bricolage Grotesque
- fontSize: 20px
- fontWeight: 500
- color: white
- marginTop: 8px

### Divider
- height: 1px
- backgroundColor: rgba(255,255,255,0.2)
- marginTop: 4px
- marginBottom: 8px

### Course description (P)
- fontSize: 14px
- fontWeight: 300
- lineHeight: 22px
- color: rgba(255,255,255,0.6)

### CTA button (lime, centered)
- backgroundColor: rgb(231, 249, 154)
- color: rgb(0, 0, 0)
- borderRadius: 100px
- padding: 20px 40px
- fontSize: 16px
- fontWeight: 500
- display: flex
- alignItems: center
- gap: 12px
- marginTop: 48px
- mx: auto
- Has dark circular arrow button on right

## Course Data (3 courses)

### Course 1: AI Image Creator Pro
- Thumbnail: `/images/course-ai-image.jpg` (3 people — diverse smiling, creative look)
- Name: "AI Image Creator Pro"
- Description: "Domine as ferramentas de IA generativa para criação e edição de imagens comerciais com critério e qualidade profissional."

### Course 2: AI Video Creator
- Thumbnail: `/images/course-ai-video.png` (dark bg with abstract light beam/lens)
- Name: "AI Video Creator"
- Description: "Crie vídeos profissionais com Inteligência Artificial. Domine técnicas audiovisuais inovadoras usando inteligência artificial."

### Course 3: ChatGPT Pro
- Thumbnail: `/images/course-chatgpt.png` (close-up portrait of woman with warm light/gold color grading)
- Name: "ChatGPT Pro"
- Description: "O curso mais completo de ChatGPT do mercado. Mais de 40 aulas 100% práticas que te levam do básico ao nível especialista"

## CTA
- Text: "Falar com Especialista"
- Link: /para-empresas/contato

## Responsive Behavior
- **Desktop**: 3-column course grid
- **Mobile**: 1-column, stacked
