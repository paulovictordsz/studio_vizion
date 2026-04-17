import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { img: '/images/course-ai-image.jpg', name: 'Marca & Identidade Visual', desc: 'Logotipo, paleta, tipografia e sistema visual completo para uma marca de moda sustentável.' },
  { img: '/images/course-ai-video.png', name: 'Site Institucional', desc: 'Site completo para uma consultoria B2B — estratégia de conteúdo, UI e desenvolvimento front-end.' },
  { img: '/images/course-chatgpt.png', name: 'Sistema Web', desc: 'Dashboard de gestão para uma plataforma SaaS — design system, componentes e handoff para devs.' },
]

export default function ContinueLearning() {
  return (
    <section className="continue-section" style={{ backgroundColor: 'black', padding: '80px', color: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="continue-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px', gap: '40px' }}>
          <h2 style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(40px,4vw,56px)', fontWeight: 400, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: '#D6FF91', maxWidth: '480px', margin: 0,
          }}>
            PROJETOS EM DESTAQUE
          </h2>
          <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', textAlign: 'right', maxWidth: '340px', margin: 0 }}>
            Uma seleção do nosso portfólio mais recente — branding, digital e sistemas.
          </p>
        </div>

        <div className="continue-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {projects.map((p) => (
            <div key={p.name} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, color: 'white', margin: '0 0 8px 0' }}>{p.name}</h3>
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '12px' }} />
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <Link href="#contato" style={{
            backgroundColor: '#D6FF91', color: 'black',
            borderRadius: '100px', padding: '0 40px', height: '64px',
            display: 'flex', alignItems: 'center', gap: '16px',
            fontSize: '16px', fontWeight: 500, textDecoration: 'none',
          }}>
            Iniciar um Projeto
            <span style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px',
            }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
