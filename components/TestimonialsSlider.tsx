'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    logo: '/images/logo-cogna.png',
    quote: '"O Studio Vizion entregou muito mais do que esperávamos. A identidade visual ficou exatamente no ponto — sofisticada, direta e com uma personalidade forte. O processo foi fluido e o resultado fala por si."',
    name: 'Thiago Soares',
    role: 'CEO / Marca Própria',
    avatar: '/images/testimonial-avatar-thiago.jpg',
    photo: '/images/testimonial-photo-1.jpg',
  },
  {
    logo: '/images/logo-cogna.png',
    quote: '"Precisávamos de um site que comunicasse autoridade sem ser pesado. O que o Vizion entregou superou todas as referências que trouxemos — limpo, rápido e com uma hierarquia visual impecável."',
    name: 'Marina Campos',
    role: 'Diretora de Marketing / Tech Startup',
    avatar: '/images/avatar-1.jpg',
    photo: '/images/testimonial-photo-2.jpg',
  },
]

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const t = testimonials[current]

  const go = (next: number) => {
    setDir(next > current ? 1 : -1)
    setCurrent(next)
  }
  const prev = () => go((current - 1 + testimonials.length) % testimonials.length)
  const next = () => go((current + 1) % testimonials.length)

  return (
    <section id="depoimento" className="testimonials-root" style={{
      backgroundColor: '#000', display: 'flex', height: '500px', overflow: 'hidden',
    }}>
      {/* Left card */}
      <div className="testimonials-left" style={{
        width: '440px', minWidth: '440px', zIndex: 2,
        backgroundColor: 'rgba(10,10,10,0.95)',
        padding: '52px', display: 'flex', flexDirection: 'column', gap: '20px',
        borderRight: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ position: 'relative', height: '24px', width: '80px' }}>
          <Image src={t.logo} alt="logo" fill style={{ objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
        </div>

        {/* Large quote mark */}
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '64px', color: '#D6FF91', lineHeight: 1, marginBottom: '-24px', opacity: 0.6 }}>"</div>

        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 12 * dir }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 * dir }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', flex: 1, margin: 0 }}
          >
            {t.quote.replace(/^"|"$/g, '')}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`person-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image src={t.avatar} alt={t.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'white', margin: 0 }}>{t.name}</p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0, letterSpacing: '0.04em' }}>{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {[{ label: '←', action: prev }, { label: '→', action: next }].map(({ label, action }) => (
            <button key={label} onClick={action} style={{
              width: '38px', height: '38px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              backgroundColor: 'transparent', color: 'white',
              cursor: 'pointer', fontSize: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s',
            }}>
              {label}
            </button>
          ))}
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginLeft: '8px', letterSpacing: '0.08em' }}>
            {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Right photo */}
      <div className="testimonials-right" style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence>
          <motion.div
            key={t.photo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image src={t.photo} alt="Testimonial" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
