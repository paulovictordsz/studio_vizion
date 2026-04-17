'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useModal } from '@/app/ModalContext'

export default function HeroSection() {
  const { openModal } = useModal()
  const words = ['Transformamos', 'marcas em', 'experiências', 'visuais.']

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    openModal(rect.left + rect.width / 2, rect.top + rect.height / 2)
  }

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)',
      }} />

      {/* Animated accent ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute', right: '8%', top: '20%',
          width: '360px', height: '360px', borderRadius: '50%',
          border: '1px solid rgba(214,255,145,0.15)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute', right: 'calc(8% + 48px)', top: 'calc(20% + 48px)',
          width: '264px', height: '264px', borderRadius: '50%',
          border: '1px solid rgba(214,255,145,0.08)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="hero-content" style={{ position: 'absolute', bottom: '80px', left: '80px', maxWidth: '700px' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(214,255,145,0.12)',
            border: '1px solid rgba(214,255,145,0.25)',
            borderRadius: '100px', padding: '8px 16px',
            marginBottom: '24px',
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#D6FF91',
          }}
        >
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#D6FF91', display: 'inline-block' }} />
          DESIGN COM PROPÓSITO
        </motion.div>

        {/* Animated headline */}
        <h1 style={{
          fontFamily: 'var(--font-bricolage)',
          fontSize: 'clamp(40px, 4vw, 57px)',
          fontWeight: 400, lineHeight: 1.05,
          letterSpacing: '-0.02em', color: 'white',
          textTransform: 'uppercase',
          maxWidth: '620px', marginBottom: '24px',
          overflow: 'hidden',
        }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'block', overflow: 'hidden' }}
            >
              <motion.span style={{ display: 'block' }}>{word}</motion.span>
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          style={{
            fontSize: '15px', fontWeight: 300, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)', maxWidth: '400px', marginBottom: '36px',
          }}
        >
          Identidades visuais, sites institucionais, landing pages e sistemas web criados com critério e consistência.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="hero-cta-row"
          style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
        >
          <a href="#" onClick={handleCTA} style={{
            backgroundColor: '#D6FF91', color: 'black',
            borderRadius: '100px', padding: '0 28px', height: '56px',
            display: 'flex', alignItems: 'center', gap: '14px',
            fontSize: '14px', fontWeight: 600, textDecoration: 'none',
            letterSpacing: '0.02em', cursor: 'pointer',
          }}>
            Iniciar Projeto
            <span style={{
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px',
            }}>→</span>
          </a>
          <Link href="#servicos" style={{
            color: 'rgba(255,255,255,0.6)', fontSize: '12px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            Ver Serviços <span style={{ fontSize: '14px' }}>↓</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute', bottom: '32px', right: '40px',
          display: 'flex', alignItems: 'center', gap: '10px',
          color: 'rgba(255,255,255,0.35)', fontSize: '10px',
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >↓</motion.span>
        SCROLL
      </motion.div>
    </section>
  )
}
