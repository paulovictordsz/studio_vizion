import Image from 'next/image'

function DiamondIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="2" width="31" height="31" rx="2" transform="rotate(45 24 2)" stroke="#000" strokeWidth="1.5" fill="none"/>
      <rect x="24" y="10" width="19" height="19" rx="1" transform="rotate(45 24 10)" stroke="#000" strokeWidth="1" fill="none" opacity="0.3"/>
    </svg>
  )
}

export default function AboutSection() {
  return (
    <section className="about-section" style={{ backgroundColor: 'white', padding: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Small centered icon */}
      <div style={{ marginBottom: '60px' }}>
        <DiamondIcon />
      </div>

      {/* Two column */}
      <div className="about-cols" style={{
        display: 'flex', gap: '60px', alignItems: 'center',
        width: '100%', maxWidth: '1280px',
      }}>
        {/* Left */}
        <div className="about-left" style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h2 style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(32px, 3vw, 44px)',
            fontWeight: 400, lineHeight: 1,
            letterSpacing: '-0.02em', color: 'black',
            textTransform: 'uppercase', margin: 0,
          }}>
            CRIAMOS MAIS DO QUE DESIGN — CRIAMOS REFERÊNCIAS
          </h2>
          <p style={{
            fontSize: '15px', fontWeight: 300, lineHeight: 1.6,
            color: 'black', maxWidth: '380px', margin: 0,
          }}>
            Somos um studio especializado em branding e interfaces digitais. Do conceito à entrega, cada projeto é construído com intenção, consistência e propósito — para marcas que levam sua presença a sério.
          </p>
        </div>

        {/* Right — portfolio image */}
        <div className="about-right" style={{ flex: 1, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#E8E8E8' }}>
          <Image
            src="/images/laptop-screens.png"
            alt="Projetos do Studio Vizion"
            width={800}
            height={400}
            unoptimized
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
