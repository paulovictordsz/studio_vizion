# Footer Specification

## Overview
- **Target file**: `components/Footer.tsx`
- **Screenshot**: `docs/design-references/section-footer.png` (bottom portion)
- **Interaction model**: static

## DOM Structure
```
FOOTER (dark bg, full width)
  DIV (optional background image — large HUMAN text watermark behind content)
  DIV (main content, max-width container)
    DIV (top row — 5 columns)
      DIV (col 1 — logo + description + copyright)
        IMG (/H Academy™ logo)
        P (description text)
        P (copyright)
      DIV (col 2 — LINKS section)
        H4 ("LINKS")
        UL (blog article links)
      DIV (col 3 — CURSOS section)
        H4 ("CURSOS")
        UL (course links)
      DIV (col 4 — HUMAN section)
        H4 ("HUMAN")
        UL (brand links)
      DIV (col 5 — PARA EMPRESAS section)
        H4 ("PARA EMPRESAS")
        UL (enterprise links)
    DIV (bottom row — copyright + social icons)
      P (2025 Human Academy — All Rights Reserved.)
      DIV (social icons — Instagram, YouTube, LinkedIn, TikTok)
```

## Computed Styles

### Footer
- backgroundColor: rgb(0, 0, 0) or #1A1A1A
- padding: 80px
- position: relative
- overflow: hidden

### Background watermark image (optional)
- position: absolute
- bottom: 0
- left: 0
- right: 0
- Large HUMAN text image as watermark behind content
- opacity: 0.15 or low opacity
- `/images/footer-bg.png`

### Main grid
- display: grid
- gridTemplateColumns: 2fr 1.5fr 1.5fr 1fr 1.5fr
- gap: 40px
- position: relative
- zIndex: 1

### Logo row in col 1
- `/H Academy™` small logo
- width: ~120px
- marginBottom: 16px

### Description text
- fontSize: 13px
- fontWeight: 300
- lineHeight: 22px
- color: rgba(255,255,255,0.6)
- maxWidth: 260px

### Copyright
- fontSize: 12px
- color: rgba(255,255,255,0.4)
- marginTop: 32px

### Column heading (H4)
- fontSize: 12px
- fontWeight: 600
- letterSpacing: 0.12em
- textTransform: uppercase
- color: rgb(255,255,255)
- marginBottom: 16px

### Footer links (UL/LI/A)
- fontSize: 13px
- fontWeight: 300
- color: rgba(255,255,255,0.6)
- lineHeight: 32px
- textDecoration: none
- display: block

### Social icons row
- display: flex
- gap: 12px
- marginTop: 48px (or at bottom right)

### Each social icon
- width: 36px
- height: 36px
- borderRadius: 50%
- border: 1px solid rgba(255,255,255,0.2)
- display: flex
- alignItems: center
- justifyContent: center
- color: white

## Content Data

### Column 1 — About
- Logo: `/images/logo-human.svg` (or text "/H Academy™")
- Description: "Somos o maior ecossistema brasileiro especializado em IA para o mercado criativo. Nossas experiências inspiram, treinam e desbloqueiam o potencial criativo."
- Copyright: "2025 Human Academy · All Rights Reserved."

### Column 2 — LINKS (blog articles)
- 20 Termos Usados na IA
- Consistência de Personagem
- 18 Ferramentas Grátis pra você usar agora
- Midjourney VS Visual Eletric: Quem ganha essa Batalha?
- Texturização com IA
- Ferramentas favoritas da Human
- Formas de ganhar dinheiro com IA

### Column 3 — CURSOS
- AI Video Creator PRO
- AI Image Creator PRO
- ChatGPT PRO
- AI Clone
- Upscale PRO

### Column 4 — HUMAN
- Studio
- Talks
- Update
- AI Creative Festival

### Column 5 — PARA EMPRESAS
- Treinamentos sob Medida
- Formatos de Workshop
- O que sua empresa Ganha?

### Social Icons (right aligned)
- Instagram
- YouTube
- LinkedIn
- TikTok

## Assets
- Footer bg watermark: `/images/footer-bg.png`
- Logo: `/images/logo-human.svg`

## Responsive Behavior
- **Desktop**: 5-column grid
- **Mobile**: Single column stack
