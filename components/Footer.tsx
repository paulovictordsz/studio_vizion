import Image from 'next/image'
import Link from 'next/link'

const columns = [
  {
    heading: 'SERVIÇOS',
    links: ['Identidade Visual', 'Brand Book', 'Site Institucional', 'Landing Page', 'Sistema Web', 'Design System', 'Apresentações'],
  },
  {
    heading: 'PORTFÓLIO',
    links: ['Branding', 'Sites', 'Sistemas Web', 'Casos de Sucesso'],
  },
  {
    heading: 'VIZION',
    links: ['Studio', 'Manifesto', 'Processo', 'Blog'],
  },
  {
    heading: 'CONTATO',
    links: ['Iniciar Projeto', 'Orçamento', 'Instagram', 'LinkedIn'],
  },
]

export default function Footer() {
  return (
    <footer className="footer-root" style={{ backgroundColor: 'black', padding: '80px', position: 'relative', overflow: 'hidden', color: 'white' }}>
      {/* Watermark */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.05, pointerEvents: 'none' }}>
        <Image src="/images/footer-bg.png" alt="" width={1440} height={622} style={{ width: '100%', height: 'auto' }} />
      </div>

      <div className="footer-grid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr', gap: '40px', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Col 1 - About */}
        <div>
          <div style={{ marginBottom: '20px' }}>
            <Image src="/images/logo-white.svg" alt="Studio Vizion" width={140} height={24} />
          </div>
          <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', maxWidth: '260px', margin: '0 0 32px 0' }}>
            Studio de design especializado em branding e interfaces digitais. Do conceito à entrega, com critério e consistência.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '0 0 24px 0' }}>2025 Studio Vizion · All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['IG', 'LI', 'BE', 'DR'].map((icon) => (
              <div key={icon} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginBottom: '16px' }}>
              {col.heading}
            </h4>
            {col.links.map((link) => (
              <Link key={link} href="#" style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', display: 'block', lineHeight: 2 }}>
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}
