'use client'
import Image from 'next/image'
import { AnimateIn, StaggerIn, staggerItem } from './AnimateIn'
import { motion } from 'framer-motion'
import { useModal } from '@/app/ModalContext'

const projects = [
  { img: '/images/course-ai-image.jpg', tag: 'BRANDING', name: 'Marca & Identidade Visual', desc: 'Logotipo, paleta, tipografia e sistema visual completo para uma marca de moda sustentável.' },
  { img: '/images/course-ai-video.png', tag: 'SITE', name: 'Site Institucional', desc: 'Site completo para uma consultoria B2B — estratégia de conteúdo, UI e desenvolvimento front-end.' },
  { img: '/images/course-chatgpt.png', tag: 'SISTEMA WEB', name: 'Dashboard SaaS', desc: 'Interface de gestão para plataforma SaaS — design system, componentes e handoff para devs.' },
]

export default function ContinueLearning() {
  const { openModal } = useModal()
  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    openModal(rect.left + rect.width / 2, rect.top + rect.height / 2)
  }
  return (
    <section className="continue-section" style={{ backgroundColor: 'black', padding: '80px', color: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <AnimateIn>
          <div className="continue-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', gap: '40px' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>Portfólio</p>
              <h2 style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, lineHeight: 1,
                letterSpacing: '-0.02em', textTransform: 'uppercase',
                color: '#D6FF91', maxWidth: '480px', margin: 0,
              }}>
                PROJETOS EM DESTAQUE
              </h2>
            </div>
            <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', textAlign: 'right', maxWidth: '320px', margin: 0 }}>
              Uma seleção do nosso portfólio mais recente — branding, digital e sistemas.
            </p>
          </div>
        </AnimateIn>

        <StaggerIn className="continue-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
          {projects.map((p) => (
            <motion.div key={p.name} variants={staggerItem} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '240px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span style={{
                    backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
                    borderRadius: '100px', padding: '5px 12px',
                    fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', color: '#D6FF91',
                  }}>{p.tag}</span>
                </div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 500, color: 'white', margin: '0 0 10px 0' }}>{p.name}</h3>
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '12px' }} />
              <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{p.desc}</p>
            </motion.div>
          ))}
        </StaggerIn>

        <AnimateIn delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}>
            <a href="#" onClick={handleCTA} style={{
              backgroundColor: '#D6FF91', color: 'black',
              borderRadius: '100px', padding: '0 24px', height: '48px',
              display: 'flex', alignItems: 'center', gap: '10px',
              fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              letterSpacing: '0.04em',
            }}>
              Iniciar um Projeto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
