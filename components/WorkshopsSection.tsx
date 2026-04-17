'use client'
import Image from 'next/image'
import { AnimateIn } from './AnimateIn'

interface ProjectItem { title: string; desc: string }
interface ProjectFormat { tag: string; step: string; title: string; items: ProjectItem[]; image: string; imageAlt: string }

const formats: ProjectFormat[] = [
  {
    tag: 'BRANDING + DIGITAL',
    step: '01',
    title: 'Projeto Completo',
    items: [
      { title: 'Imersão na Marca', desc: 'Entendemos o negócio, o mercado e o posicionamento antes de desenhar qualquer pixel.' },
      { title: 'Entrega em Fases', desc: 'Processo estruturado com checkpoints claros para garantir alinhamento contínuo.' },
      { title: 'Acompanhamento Dedicado', desc: 'Um time focado no seu projeto, do briefing à entrega final com todos os arquivos.' },
    ],
    image: '/images/workshop-visual-presencial.png',
    imageAlt: 'Projeto completo de branding',
  },
  {
    tag: 'FOCO E VELOCIDADE',
    step: '02',
    title: 'Sprint de Design',
    items: [
      { title: 'Escopo Fechado', desc: 'Uma entrega específica — landing page, redesign, identidade — com prazo definido.' },
      { title: 'Entrega em 2 Semanas', desc: 'Ciclos curtos e objetivos para quem precisa de resultado rápido sem abrir mão da qualidade.' },
      { title: 'Revisões Incluídas', desc: 'Duas rodadas de ajustes no escopo combinado, com feedback assíncrono ou em call.' },
    ],
    image: '/images/workshop-visual-online.png',
    imageAlt: 'Sprint de design',
  },
]

export default function WorkshopsSection() {
  return (
    <section id="formatos" className="workshops-section" style={{ backgroundColor: '#000', padding: '80px', color: 'white' }}>
      <AnimateIn style={{ marginBottom: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', justifyContent: 'center' }}>
          <h2 style={{
            textAlign: 'center',
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(40px,5vw,68px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: 'white',
            margin: 0,
          }}>
            COMO TRABALHAMOS
          </h2>
        </div>
      </AnimateIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1280px', margin: '0 auto' }}>
        {formats.map((w, idx) => (
          <AnimateIn key={w.step} delay={idx * 0.1}>
            <div className="workshop-card" style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '20px',
              padding: '48px',
              display: 'flex',
              flexDirection: 'row',
              gap: '48px',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              {/* Left content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-bricolage)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)' }}>{w.step}</span>
                  <span style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
                  <span style={{
                    fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#D6FF91', fontWeight: 500,
                  }}>{w.tag}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '44px', fontWeight: 400, color: 'white', margin: 0, letterSpacing: '-0.01em' }}>
                  {w.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {w.items.map((item) => (
                    <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%',
                        backgroundColor: '#D6FF91', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: '2px',
                      }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'black' }}>✓</span>
                      </div>
                      <div>
                        <p style={{ fontSize: '16px', fontWeight: 500, color: 'white', margin: '0 0 3px 0' }}>{item.title}</p>
                        <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div className="workshop-image" style={{ flex: 1, position: 'relative', borderRadius: '14px', overflow: 'hidden', minHeight: '320px' }}>
                <Image src={w.image} alt={w.imageAlt} fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
