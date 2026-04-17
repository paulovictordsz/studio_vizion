import Image from 'next/image'

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
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '100px',
            padding: '8px 16px', fontSize: '10px', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'white', width: 'fit-content',
          }}>
            ✦ POR QUE O STUDIO VIZION
          </span>
          <h2 style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(40px,4vw,56px)', fontWeight: 400, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white', margin: 0,
          }}>
            DESIGN QUE ACELERA O CRESCIMENTO DA SUA MARCA
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {items.map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  backgroundColor: '#D6FF91', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px',
                }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'black' }}>✓</span>
                </div>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: 500, color: 'white', margin: '0 0 4px 0' }}>{item.title}</p>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right photo */}
        <div className="benefits-photo" style={{ flex: 1, position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '500px' }}>
          <Image src="/images/benefits-portrait.png" alt="Design studio work" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  )
}
