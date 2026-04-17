import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)',
      }} />
      {/* Content */}
      <div className="hero-content" style={{
        position: 'absolute', bottom: '80px', left: '80px',
        maxWidth: '700px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: 'rgba(255,255,255,0.12)',
          borderRadius: '100px', padding: '8px 16px',
          marginBottom: '20px',
          fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'white',
        }}>
          <span style={{ fontSize: '14px' }}>✦</span>
          DESIGN COM PROPÓSITO
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'var(--font-bricolage)',
          fontSize: 'clamp(40px, 4vw, 57px)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: 'white',
          textTransform: 'uppercase',
          maxWidth: '620px',
          marginBottom: '24px',
        }}>
          Transformamos marcas em experiências visuais.
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '15px', fontWeight: 300, lineHeight: 1.6,
          color: 'rgba(255,255,255,0.75)', maxWidth: '400px', marginBottom: '32px',
        }}>
          Identidades visuais, sites institucionais, landing pages e sistemas web criados com critério e consistência.
        </p>

        {/* CTA row */}
        <div className="hero-cta-row" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="#contato" style={{
            backgroundColor: '#D6FF91', color: 'black',
            borderRadius: '100px', padding: '0 32px', height: '64px',
            display: 'flex', alignItems: 'center', gap: '16px',
            fontSize: '15px', fontWeight: 500, textDecoration: 'none',
          }}>
            Iniciar Projeto
            <span style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px',
            }}>→</span>
          </Link>
          <Link href="#servicos" style={{
            color: 'white', fontSize: '14px', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            Ver Serviços ↓
          </Link>
        </div>
      </div>
    </section>
  )
}
