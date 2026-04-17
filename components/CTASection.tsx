'use client'
import { motion } from 'framer-motion'
import { AnimateIn } from './AnimateIn'
import { useModal } from '@/app/ModalContext'

export default function CTASection() {
  const { openModal } = useModal()

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    openModal(rect.left + rect.width / 2, rect.top + rect.height / 2)
  }

  return (
    <section style={{ backgroundColor: '#D6FF91', padding: '100px 80px', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative large text watermark */}
      <div style={{
        position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-bricolage)',
        fontSize: 'clamp(100px, 16vw, 200px)', fontWeight: 700,
        letterSpacing: '-0.04em', textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.05)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap',
      }}>
        VIZION
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <AnimateIn>
          <div className="cta-inner" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: '60px',
          }}>
            {/* Left: copy */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: '16px' }}>
                Próximo passo
              </p>
              <h2 style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 400, lineHeight: 0.95,
                letterSpacing: '-0.03em', textTransform: 'uppercase',
                color: 'black', margin: '0 0 24px 0', maxWidth: '540px',
              }}>
                PRONTO PARA COMEÇAR?
              </h2>
              <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(0,0,0,0.6)', maxWidth: '440px', margin: 0 }}>
                Conte-nos sobre seu projeto. Respondemos em até 24h com uma proposta personalizada — sem compromisso.
              </p>
            </div>

            {/* Right: actions */}
            <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', flexShrink: 0 }}>
              <a
                href="#"
                onClick={handleCTA}
                style={{
                  backgroundColor: 'black', color: 'white',
                  borderRadius: '100px', padding: '0 28px', height: '52px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontSize: '13px', fontWeight: 600, textDecoration: 'none',
                  letterSpacing: '0.04em', whiteSpace: 'nowrap',
                }}
              >
                Iniciar um Projeto
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </a>

              <div style={{ display: 'flex', gap: '24px', paddingLeft: '4px' }}>
                <a
                  href="https://wa.me/5533999226933"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '13px', fontWeight: 500, color: 'rgba(0,0,0,0.55)',
                    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
                    letterSpacing: '0.02em',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.472 3.506C18.208 1.24 15.17 0 11.998 0 5.44 0 .104 5.337.1 11.896c0 2.096.547 4.144 1.588 5.953L0 24l6.304-1.654a11.916 11.916 0 0 0 5.69 1.448h.005C18.556 23.794 24 18.457 24 11.9c0-3.173-1.232-6.157-3.528-8.394ZM12 21.794a9.894 9.894 0 0 1-5.044-1.379l-.362-.214-3.742.981 1-3.642-.235-.374A9.845 9.845 0 0 1 2.1 11.9C2.1 6.44 6.54 2 12 2c2.644 0 5.127 1.03 6.995 2.9a9.847 9.847 0 0 1 2.9 6.996c0 5.462-4.44 9.898-9.895 9.898Zm5.426-7.408c-.297-.149-1.758-.867-2.031-.966-.272-.099-.47-.148-.669.15-.198.296-.768.965-.942 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.241-.58-.486-.5-.669-.51l-.57-.01a1.09 1.09 0 0 0-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:oi@studiovizion.com.br"
                  style={{
                    fontSize: '13px', fontWeight: 500, color: 'rgba(0,0,0,0.55)',
                    textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
                    letterSpacing: '0.02em',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  oi@studiovizion.com.br
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
