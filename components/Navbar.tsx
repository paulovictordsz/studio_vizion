'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar-root" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 40px', pointerEvents: 'none',
    }}>
      {/* Logo */}
      <div style={{ pointerEvents: 'auto' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image src="/images/logo-white.svg" alt="Studio Vizion" width={120} height={21} />
        </Link>
      </div>

      {/* Center pill nav */}
      <nav className="navbar-center" style={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
        borderRadius: '100px',
        height: '80px',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'auto',
      }}>
        {[
          { label: 'BRANDING', href: '#servicos' },
          { label: 'SITES', href: '#formatos' },
          { label: 'PROJETOS', href: '#projetos' },
          { label: 'CONTATO', href: '#contato' },
        ].map((item) => (
          <Link key={item.label} href={item.href} className="navbar-link" style={{
            color: 'white', textDecoration: 'none',
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
            padding: '10px 12px', borderRadius: '400px',
          }}>
            {item.label}
          </Link>
        ))}
        <Link href="#contato" style={{
          backgroundColor: 'white', color: 'black',
          borderRadius: '100px', padding: '0 20px', height: '56px',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', fontWeight: 500, textDecoration: 'none',
        }}>
          Iniciar Projeto <span>↓</span>
        </Link>
      </nav>

      {/* Studio label */}
      <div className="navbar-lang" style={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
        borderRadius: '100px',
        padding: '10px 16px',
        color: 'rgba(255,255,255,0.7)',
        display: 'flex',
        gap: '8px',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        alignItems: 'center',
        pointerEvents: 'auto',
      }}>
        STUDIO ∨
      </div>
    </div>
  )
}
