'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useModal } from '@/app/ModalContext'
import { useState, useEffect, useRef } from 'react'

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.472 3.506C18.208 1.24 15.17 0 11.998 0 5.44 0 .104 5.337.1 11.896c0 2.096.547 4.144 1.588 5.953L0 24l6.304-1.654a11.916 11.916 0 0 0 5.69 1.448h.005C18.556 23.794 24 18.457 24 11.9c0-3.173-1.232-6.157-3.528-8.394ZM12 21.794a9.894 9.894 0 0 1-5.044-1.379l-.362-.214-3.742.981 1-3.642-.235-.374A9.845 9.845 0 0 1 2.1 11.9C2.1 6.44 6.54 2 12 2c2.644 0 5.127 1.03 6.995 2.9a9.847 9.847 0 0 1 2.9 6.996c0 5.462-4.44 9.898-9.895 9.898Zm5.426-7.408c-.297-.149-1.758-.867-2.031-.966-.272-.099-.47-.148-.669.15-.198.296-.768.965-.942 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.241-.58-.486-.5-.669-.51l-.57-.01a1.09 1.09 0 0 0-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347Z" fill="white"/>
    </svg>
  )
}

function isLightColor(r: number, g: number, b: number): boolean {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55
}

export default function Navbar() {
  const { openModal } = useModal()
  const navRef = useRef<HTMLDivElement>(null)
  const [logoDark, setLogoDark] = useState(false)

  useEffect(() => {
    const check = () => {
      const elements = document.elementsFromPoint(80, 44)
      for (const el of elements) {
        if (navRef.current?.contains(el)) continue
        if (el === document.documentElement || el === document.body) continue
        const bg = getComputedStyle(el).backgroundColor
        if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') continue
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
        if (match) {
          setLogoDark(isLightColor(+match[1], +match[2], +match[3]))
          return
        }
      }
      setLogoDark(false)
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    openModal(rect.left + rect.width / 2, rect.top + rect.height / 2)
  }

  return (
    <motion.div
      ref={navRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="navbar-root" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 40px', pointerEvents: 'none',
      }}>
      {/* Logo — switches between white and black based on background */}
      <div style={{ pointerEvents: 'auto' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={logoDark ? '/images/logo-black.svg' : '/images/logo-white.svg'}
              alt="Studio Vizion"
              width={120}
              height={21}
              style={{ transition: 'opacity 0.3s' }}
            />
          </motion.div>
        </Link>
      </div>

      {/* Center pill nav */}
      <nav className="navbar-center" style={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
        borderRadius: '100px',
        height: '56px',
        padding: '8px 8px 8px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
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
        <a href="#" onClick={handleCTA} style={{
          backgroundColor: 'white', color: 'black',
          borderRadius: '100px', padding: '0 14px', height: '38px',
          display: 'flex', alignItems: 'center', gap: '7px',
          fontSize: '11px', fontWeight: 600, textDecoration: 'none',
          letterSpacing: '0.04em', cursor: 'pointer',
        }}>
          Iniciar Projeto
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </a>
      </nav>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-lang"
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(12px)',
          borderRadius: '100px',
          width: '48px', height: '48px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'auto',
          textDecoration: 'none',
          transition: 'background-color 0.2s',
        }}
      >
        <WhatsAppIcon />
      </a>
    </motion.div>
  )
}
