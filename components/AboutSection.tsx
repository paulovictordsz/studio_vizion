'use client'
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

        {/* Right — placeholder until real project image is added */}
        <AnimateIn direction="right" delay={0.15} className="about-right" style={{ flex: 1, borderRadius: '20px', overflow: 'hidden', backgroundColor: '#111' }}>
          <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* Grid */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="800" height="400" fill="#111"/>
            <rect width="800" height="400" fill="url(#grid)"/>

            {/* Construction circles */}
            <circle cx="400" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
            <circle cx="400" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
            <circle cx="400" cy="200" r="40" fill="none" stroke="rgba(214,255,145,0.12)" strokeWidth="0.8"/>

            {/* Cross lines */}
            <line x1="280" y1="200" x2="520" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
            <line x1="400" y1="80" x2="400" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>

            {/* Corner marks */}
            {[[100,60],[700,60],[100,340],[700,340]].map(([x,y], i) => (
              <g key={i}>
                <line x1={x-8} y1={y} x2={x+8} y2={y} stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
                <line x1={x} y1={y-8} x2={x} y2={y+8} stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
              </g>
            ))}

            {/* Center dot */}
            <circle cx="400" cy="200" r="3" fill="rgba(214,255,145,0.4)"/>

            {/* Label */}
            <text x="400" y="358" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.18)" letterSpacing="3">IMAGEM DO PROJETO EM BREVE</text>
          </svg>
        </AnimateIn>
      </div>
    </section>
  )
}
