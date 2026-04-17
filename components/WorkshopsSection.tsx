import Image from 'next/image'

interface ProjectItem {
  title: string
  desc: string
}

interface ProjectFormat {
  tag: string
  title: string
  items: ProjectItem[]
  image: string
  imageAlt: string
}

const formats: ProjectFormat[] = [
  {
    tag: '🎯 BRANDING + DIGITAL',
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
    tag: '⚡ FOCO E VELOCIDADE',
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
      <h2 style={{
        textAlign: 'center',
        fontFamily: 'var(--font-bricolage)',
        fontSize: 'clamp(48px,5vw,72px)',
        fontWeight: 400,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        color: 'white',
        marginBottom: '64px',
      }}>
        COMO TRABALHAMOS
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1280px', margin: '0 auto' }}>
        {formats.map((w) => (
          <div key={w.title} className="workshop-card" style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderRadius: '24px',
            padding: '48px',
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {/* Left content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '100px', padding: '8px 16px',
                fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white',
                width: 'fit-content',
              }}>
                {w.tag}
              </span>

              <h3 style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: '48px', fontWeight: 400, color: 'white', margin: 0,
              }}>
                {w.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {w.items.map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      backgroundColor: '#D6FF91',
                      flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginTop: '2px',
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

            {/* Right image */}
            <div className="workshop-image" style={{ flex: 1, position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '350px' }}>
              <Image src={w.image} alt={w.imageAlt} fill style={{ objectFit: 'cover', borderRadius: '16px' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
