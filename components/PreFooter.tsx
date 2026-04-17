import Image from 'next/image'
import Link from 'next/link'

const links = ['BRANDING', 'SITES', 'SISTEMAS WEB', 'PORTFÓLIO', 'CONTATO']

export default function PreFooter() {
  return (
    <section className="prefooter-section" style={{
      backgroundColor: 'black', padding: '80px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div className="prefooter-cols" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '1280px', margin: '0 auto' }}>
        <div>
          <Image src="/images/logo-white.svg" alt="Studio Vizion" width={280} height={48} />
        </div>
        <nav className="prefooter-nav" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
          {links.map((l) => (
            <Link key={l} href="#" style={{
              fontSize: '11px', fontWeight: 400, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
            }}>
              {l}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
