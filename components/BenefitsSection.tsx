'use client'
import Image from 'next/image'
import { AnimateIn } from './AnimateIn'

const items = [
  { title: 'Identidade consistente', desc: 'Marca aplicada com critério em todos os pontos de contato, online e offline.' },
  { title: 'Presença digital forte', desc: 'Sites e sistemas que comunicam, convencem e convertem.' },
  { title: 'Processo sem ruído', desc: 'Entregas previsíveis, briefing claro e comunicação direta do início ao fim.' },
]

export default function BenefitsSection() {
  return (
    <section id="contato" className="benefits-section" style={{ backgroundColor: '#000', padding: '80px', color: 'white' }}>
      <div className="benefits-cols" style={{ display: 'flex', gap: '80px', alignItems: 'center', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Left */}
        <AnimateIn direction="left" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid rgba(214,255,145,0.3)',
              borderRadius: '100px', padding: '7px 14px',
              fontSize: '10px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#D6FF91',
            }}>
              ✦ POR QUE O STUDIO VIZION
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, lineHeight: 1.05,
            letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white', margin: 0,
          }}>
            DESIGN QUE ACELERA O CRESCIMENTO DA SUA MARCA
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {items.map((item, i) => (
              <div key={item.title} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                padding: '24px 0',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderBottom: i === items.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <span style={{ fontSize: '11px', color: '#D6FF91', fontWeight: 500, letterSpacing: '0.08em', flexShrink: 0, marginTop: '3px' }}>0{i + 1}</span>
                <div>
                  <p style={{ fontSize: '17px', fontWeight: 500, color: 'white', margin: '0 0 4px 0' }}>{item.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
        {/* Right photo */}
        <AnimateIn direction="right" delay={0.2} className="benefits-photo" style={{ flex: 1, position: 'relative', borderRadius: '20px', overflow: 'hidden', minHeight: '520px' }}>
          <Image src="/images/benefits-portrait.png" alt="Design studio work" fill style={{ objectFit: 'cover' }} />
          {/* Green tint overlay at bottom */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to top, rgba(214,255,145,0.12), transparent)', pointerEvents: 'none' }} />
        </AnimateIn>
      </div>
    </section>
  )
}
