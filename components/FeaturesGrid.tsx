'use client'
import { motion } from 'framer-motion'
import { AnimateIn, StaggerIn, staggerItem } from './AnimateIn'

const cards = [
  { num: '01', title: 'Identidade Visual', desc: 'Marca, logotipo e sistema visual completo com critério e coerência.' },
  { num: '02', title: 'Brand Book', desc: 'Diretrizes de uso para manter a marca íntegra em qualquer contexto.' },
  { num: '03', title: 'Site Institucional', desc: 'Presença digital que transmite autoridade e gera confiança.' },
  { num: '04', title: 'Landing Page', desc: 'Páginas focadas em conversão com clareza e resultado mensurável.' },
  { num: '05', title: 'Sistema Web', desc: 'Interfaces e dashboards para produtos e plataformas digitais.' },
  { num: '06', title: 'Design System', desc: 'Biblioteca de componentes para escalar seu produto com consistência.' },
  { num: '07', title: 'Apresentações', desc: 'Decks e materiais que vendem, impressionam e ficam na memória.' },
  { num: '08', title: 'Estratégia de Marca', desc: 'Posicionamento, naming e arquitetura de marca para crescer certo.' },
]

export default function FeaturesGrid() {
  return (
    <section id="servicos" className="features-section" style={{
      backgroundColor: '#E8E8E8', padding: '80px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {/* Header */}
      <AnimateIn style={{ width: '100%', maxWidth: '1280px', marginBottom: '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: '8px' }}>
              Nossos Serviços
            </p>
            <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.6, color: 'black', maxWidth: '400px', margin: 0 }}>
              Atuamos nas frentes que mais impactam a percepção da sua marca no mercado.
            </p>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', margin: 0, letterSpacing: '0.04em' }}>08 especialidades</p>
        </div>
      </AnimateIn>

      {/* Grid */}
      <StaggerIn className="features-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        width: '100%',
        maxWidth: '1280px',
      }}>
        {cards.map((card) => (
          <motion.div
            key={card.num}
            variants={staggerItem}
            className="features-card"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              backgroundColor: '#0a0a0a',
              borderRadius: '20px',
              padding: '36px',
              height: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'default',
              border: '1px solid rgba(255,255,255,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Number */}
            <span style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.2)',
            }}>{card.num}</span>

            {/* Content at bottom */}
            <div>
              {/* Accent line */}
              <div style={{ width: '24px', height: '1px', backgroundColor: '#D6FF91', marginBottom: '16px' }} />
              <h3 style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: '19px', fontWeight: 400, lineHeight: 1.2,
                color: 'white', margin: '0 0 10px 0',
              }}>{card.title}</h3>
              <p style={{
                fontSize: '13px', fontWeight: 300, lineHeight: 1.5,
                color: 'rgba(255,255,255,0.5)', margin: 0,
              }}>{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </StaggerIn>
    </section>
  )
}
