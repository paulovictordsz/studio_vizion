# SocialTestimonials Specification

## Overview
- **Target file**: `components/SocialTestimonials.tsx`
- **Screenshot**: `docs/design-references/section-testimonials2.png`
- **Interaction model**: static masonry grid

## DOM Structure
```
SECTION (light bg #F1F1F1)
  DIV (section header — 2 column)
    H2 (left — "DEPOIMENTOS DE QUEM JÁ PARTICIPOU")
    P (right — subtitle text)
  DIV (logo row — "/H Academy™" small)
  DIV (masonry/grid of social cards)
    [Multiple cards — white rounded cards with social post layout]
      Each card:
        DIV (user row — avatar + @handle)
        P (quote text)
```

## Computed Styles

### Section
- backgroundColor: rgb(241, 241, 241)
- padding: 80px
- color: black

### Section header
- display: flex
- justifyContent: space-between
- alignItems: flex-start
- marginBottom: 16px

### Small logo row
- display: flex
- alignItems: center
- gap: 8px
- marginBottom: 48px
- fontSize: 14px
- color: rgba(0,0,0,0.5)

### H2
- fontFamily: Bricolage Grotesque
- fontSize: 64px
- fontWeight: 400
- lineHeight: 64px
- letterSpacing: -1.28px
- textTransform: uppercase
- color: rgb(0, 0, 0)
- maxWidth: 500px
- Content: "DEPOIMENTOS DE QUEM JÁ PARTICIPOU"

### Subtitle (right column)
- fontFamily: Inter
- fontSize: 16px
- fontWeight: 300
- lineHeight: 26px
- color: rgba(0,0,0,0.7)
- textAlign: right
- maxWidth: 380px
- Content: "Veja como a Human Academy fez a diferença na jornada criativa de outros times e profissionais."

### Cards grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 16px
- OR: column-count: 4 (masonry)

### Social card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 16px
- padding: 24px
- display: flex
- flexDirection: column
- gap: 12px

### User row
- display: flex
- alignItems: center
- gap: 10px

### Avatar
- width: 36px
- height: 36px
- borderRadius: 50%
- objectFit: cover

### @handle
- fontSize: 13px
- fontWeight: 500
- color: rgb(0, 0, 0)

### Quote text
- fontSize: 14px
- fontWeight: 300
- lineHeight: 22px
- color: rgb(0, 0, 0)

## Social Cards Data (8 unique cards shown)

1. **@recarinhato** — "Sabe quando você encontra um curso que não ensina só a ferramenta, mas desbloqueia uma nova forma de pensar?"
2. **@thamiresabino** — "O que me chamou mais atenção, foi a forma direta e didática. Sou iniciante no estudo e fiquei com a cabeça borbulhando com ideia #SouHuman ❤️🤖"
3. **@lara_magatag** — "Muito bom! O conteúdo foi bem completo, apresentaram todas as ferramentas usadas no mercado e mostraram muitos exemplos."
4. **@leandralambert** — "Abrindo caminhos para entender na prática como criar utilizando IA como ferramenta. Desmitifica os processos, abre o jogo, sem enrolação."
5. **@lopesdia** — "valeu a pena cada minuto. e impressionado com a capacidade de gerar vídeos com a IA, e os caminhos apresentados pela turma do human"
6. **@ricardo__galego** — "Mesmo p quem nao nasceu com o mouse na mão ou um perfil de rede social feito, o curso superou as expectativas."
7. **@alinemessias...** — (another testimonial about the course experience)
8. **@another** — (additional testimonial)

## Large Portrait Photos
Two large portrait photos visible in the screenshots (approx 466x466px):
- `/images/testimonial-large-1.jpg` — man/woman portrait
- `/images/testimonial-large-2.jpg` — another portrait

These could be featured testimonials with larger card format.

## Avatar Images
- `/images/avatar-1.jpg` through `/images/avatar-6.jpg`

## Responsive Behavior
- **Desktop**: 4-column card grid
- **Tablet**: 2-column
- **Mobile**: 1-column
