'use client'
import { motion } from 'framer-motion'
import { AnimateIn, StaggerIn, staggerItem } from './AnimateIn'

const steps = [
  {
    num: '01',
    title: 'Briefing',
    desc: 'Entendemos o contexto da marca, objetivos de negócio, público-alvo e referências visuais.',
  },
  {
    num: '02',
    title: 'Conceito',
    desc: 'Desenvolvemos a direção criativa e apresentamos o conceito visual para alinhamento e aprovação.',
  },
  {
    num: '03',
    title: 'Execução',
    desc: 'Produção completa do material com atenção a cada detalhe técnico, visual e de consistência.',
  },
  {
    num: '04',
    title: 'Entrega',
    desc: 'Arquivos organizados, documentados e prontos para uso imediato em todos os formatos necessários.',
  },
]

export default function ProcessSection() {
  return (
    <section style={{ backgroundColor: '#000', padding: '80px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <AnimateIn>
          <div className="process-header" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: '72px', gap: '40px',
          }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                Metodologia
              </p>
              <h2 style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, lineHeight: 1,
                letterSpacing: '-0.02em', textTransform: 'uppercase',
                color: 'white', margin: 0, maxWidth: '400px',
              }}>
                COMO TRABALHAMOS
              </h2>
            </div>
            <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', textAlign: 'right', maxWidth: '300px', margin: 0 }}>
              Um processo direto, sem ruído — do briefing à entrega final com previsibilidade em cada etapa.
            </p>
          </div>
        </AnimateIn>

        <StaggerIn className="process-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={staggerItem}
              className="process-step"
              style={{
                padding: '40px 36px',
                borderLeft: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', flexDirection: 'column', gap: '24px',
                position: 'relative',
              }}
            >
              {/* Connector dot */}
              <div style={{
                position: 'absolute', top: '-1px', left: '36px',
                width: '6px', height: '6px', borderRadius: '50%',
                backgroundColor: i === 0 ? '#D6FF91' : 'rgba(255,255,255,0.15)',
                transform: 'translateY(-50%)',
              }} />

              <span style={{
                fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.2)',
              }}>{step.num}</span>

              <div>
                <div style={{ width: '20px', height: '1px', backgroundColor: '#D6FF91', marginBottom: '16px' }} />
                <h3 style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: '22px', fontWeight: 400, lineHeight: 1.1,
                  color: 'white', margin: '0 0 12px 0',
                }}>{step.title}</h3>
                <p style={{
                  fontSize: '13px', fontWeight: 300, lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.45)', margin: 0,
                }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerIn>
      </div>
    </section>
  )
}
