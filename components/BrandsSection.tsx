'use client'
import Image from 'next/image'
import { AnimateIn } from './AnimateIn'

const logos = [
  { src: '/images/logo-dpz.png', alt: 'DPZ' },
  { src: '/images/logo-artplan.png', alt: 'artplan' },
  { src: '/images/logo-hw.png', alt: 'H&W' },
  { src: '/images/logo-google.png', alt: 'Google' },
  { src: '/images/logo-samsung.png', alt: 'Samsung' },
  { src: '/images/logo-stone.png', alt: 'stone' },
  { src: '/images/logo-almap.png', alt: 'ALMAP' },
  { src: '/images/logo-cogna.png', alt: 'cogna' },
  { src: '/images/logo-dreamersgr.svg', alt: 'dreamers' },
  { src: '/images/logo-trident.png', alt: 'Trident' },
]

const avatars = ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg']

export default function BrandsSection() {
  return (
    <section className="brands-section" style={{ backgroundColor: '#000', padding: '80px 0', color: 'white', overflow: 'hidden' }}>
      {/* Top header */}
      <AnimateIn style={{ padding: '0 80px' }}>
        <div className="brands-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '40px', maxWidth: '1280px', margin: '0 auto 64px auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(40px,4vw,60px)', fontWeight: 400, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white',
            maxWidth: '380px', margin: 0,
          }}>
            MARCAS QUE CONFIAM NO STUDIO
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', textAlign: 'right', maxWidth: '280px', margin: 0 }}>
              De startups a empresas consolidadas, entregamos design que posiciona.
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px',
              padding: '12px 20px',
            }}>
              <div style={{ display: 'flex' }}>
                {avatars.map((src, i) => (
                  <div key={src} style={{ position: 'relative', width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #000', marginLeft: i === 0 ? 0 : '-8px' }}>
                    <Image src={src} alt="" fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '12px', fontWeight: 500, color: '#D6FF91', margin: 0, letterSpacing: '0.06em' }}>
                +50 PROJETOS
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Marquee */}
      <div style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '32px 0' }}>
        <div style={{ display: 'flex', animation: 'marquee 28s linear infinite', width: 'max-content' }}>
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} style={{ position: 'relative', height: '36px', width: '120px', flexShrink: 0, margin: '0 40px' }}>
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain', objectPosition: 'center', filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Tags bar */}
      <AnimateIn style={{ padding: '0 80px' }}>
        <div className="brands-tags" style={{
          display: 'flex', marginTop: '48px', maxWidth: '1280px', margin: '48px auto 0 auto',
        }}>
          {[
            { icon: '✦', label: 'IDENTIDADE VISUAL' },
            { icon: '◻', label: 'INTERFACES DIGITAIS' },
            { icon: '⚡', label: 'ENTREGAS ESTRATÉGICAS' },
          ].map((tag, i, arr) => (
            <div key={tag.label} className="brands-tag" style={{
              flex: 1, padding: '18px 0',
              display: 'flex', alignItems: 'center', gap: '10px',
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
              borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingRight: i < arr.length - 1 ? '0' : '0',
            }}>
              <span style={{ color: '#D6FF91' }}>{tag.icon}</span> {tag.label}
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  )
}
