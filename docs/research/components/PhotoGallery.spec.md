# PhotoGallery Specification

## Overview
- **Target file**: `components/PhotoGallery.tsx`
- **Screenshot**: `docs/design-references/section-training-cards.png` (top portion shows 2 photos)
- **Interaction model**: static

## DOM Structure
```
SECTION (white bg)
  DIV (2-column equal grid)
    DIV (left image)
      IMG (workshop swag — HUMAN branded notebook, pen, fabric bag)
    DIV (right image)
      IMG (workshop room — long conference table with people)
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- padding: 0 (no padding — images full bleed edge to edge)
- or padding: 0 80px

### Image grid
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 8px or 16px

### Each image
- width: 100%
- height: ~470px
- objectFit: cover
- borderRadius: 16px (slight rounding)

## Assets
- Left image: `/images/workshop-photo-1.png` — close-up of branded items (HUMAN branded matte black notebook + pen, fabric pouch on black background)
- Right image: `/images/workshop-photo-2.png` — wide shot of workshop room with long wood table, chairs, plants, equipment

## Responsive Behavior
- **Desktop**: 2 equal columns side by side
- **Mobile**: Stack vertically, each image full width
