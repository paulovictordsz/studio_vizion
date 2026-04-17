'use client'
import Image from 'next/image'
import { AnimateIn } from './AnimateIn'

export default function AboutSection() {
  return (
    <section className="about-section" style={{ backgroundColor: 'white', padding: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Eyebrow */}
      <AnimateIn style={{ width: '100%', maxWidth: '1280px', marginBottom: '56px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '1px', backgroundColor: '#D6FF91' }} />
        <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)' }}>
          Sobre o Studio
        </span>
      </AnimateIn>

      {/* Two column */}
      <div className="about-cols" style={{ display: 'flex', gap: '60px', alignItems: 'center', width: '100%', maxWidth: '1280px' }}>
        {/* Left */}
        <AnimateIn direction="left" className="about-left" style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h2 style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(32px, 3vw, 46px)',
            fontWeight: 400, lineHeight: 1,
            letterSpacing: '-0.02em', color: 'black',
            textTransform: 'uppercase', margin: 0,
          }}>
            CRIAMOS MAIS DO QUE DESIGN —{' '}
            <span style={{ color: 'rgba(0,0,0,0.35)', fontStyle: 'italic' }}>CRIAMOS REFERÊNCIAS</span>
          </h2>
          <p style={{
            fontSize: '15px', fontWeight: 300, lineHeight: 1.7,
            color: 'rgba(0,0,0,0.65)', maxWidth: '380px', margin: 0,
          }}>
            Somos um studio especializado em branding e interfaces digitais. Do conceito à entrega, cada projeto é construído com intenção, consistência e propósito — para marcas que levam sua presença a sério.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            {[{ val: '50+', label: 'Projetos' }, { val: '5+', label: 'Anos' }, { val: '100%', label: 'Dedicação' }].map(s => (
              <div key={s.label}>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 400, color: 'black', margin: 0, letterSpacing: '-0.02em' }}>{s.val}</p>
                <p style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Right */}
        <AnimateIn direction="right" delay={0.15} className="about-right" style={{ flex: 1, borderRadius: '20px', overflow: 'hidden', backgroundColor: '#E8E8E8' }}>
          <Image
            src="/images/laptop-screens.png"
            alt="Projetos do Studio Vizion"
            width={800}
            height={400}
            unoptimized
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </AnimateIn>
      </div>
    </section>
  )
}
