# PreFooter Specification

## Overview
- **Target file**: `components/PreFooter.tsx`
- **Screenshot**: `docs/design-references/section-footer.png` (top portion)
- **Interaction model**: static

## DOM Structure
```
SECTION (dark bg, no id)
  DIV (two-column layout)
    DIV (left — large /HUMAN™ text + small spinner icon)
      IMG (spinning gear/H icon — small)
      H2 (large "/HUMAN™" wordmark)
    DIV (right — vertical nav links list)
      A (SOBRE NÓS)
      A (PARA EMPRESAS)
      A (CURSOS)
      A (BLOG)
      A (CONTATO)
```

## Computed Styles

### Section
- backgroundColor: rgb(0, 0, 0) or #1A1A1A
- padding: 80px
- borderBottom: 1px solid rgba(255,255,255,0.1)

### Two-column layout
- display: flex
- justifyContent: space-between
- alignItems: flex-end

### Left column
- display: flex
- flexDirection: column
- gap: 16px

### Small icon (spinner/H logo)
- width: ~48px
- height: ~48px
- The animated spinning icon with geometric lines forming "H"

### Large wordmark H2 "/HUMAN™"
- fontFamily: Bricolage Grotesque or custom
- fontSize: 96px (or larger — fills ~400px width)
- fontWeight: 400
- lineHeight: 1
- letterSpacing: -0.04em
- color: white
- The "/" is rendered as part of the brand name — slanted
- "™" superscript after HUMAN

### Right nav links column
- display: flex
- flexDirection: column
- gap: 12px
- alignItems: flex-end
- textAlign: right

### Each nav link
- fontSize: 12px
- fontWeight: 400
- letterSpacing: 0.1em
- textTransform: uppercase
- color: rgba(255,255,255,0.6)
- textDecoration: none

## Text Content
- Wordmark: "/HUMAN™"
- Links: SOBRE NÓS | PARA EMPRESAS | CURSOS | BLOG | CONTATO

## Assets
- Small spinner: `/images/human-icon-small.png` or inline SVG

## Responsive Behavior
- **Desktop**: 2-column (large wordmark left, links right)
- **Mobile**: Stacks, wordmark on top, links below
