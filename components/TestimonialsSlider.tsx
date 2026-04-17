'use client'
import { useState } from 'react'
import Image from 'next/image'

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
  const t = testimonials[current]

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="depoimento" className="testimonials-root" style={{
      backgroundColor: '#000',
      display: 'flex',
      height: '500px',
      overflow: 'hidden',
    }}>
      {/* Left card */}
      <div className="testimonials-left" style={{
        width: '420px',
        minWidth: '420px',
        zIndex: 2,
        backgroundColor: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRight: '1px solid rgba(255,255,255,0.1)',
      }}>
        {/* Logo */}
        <div style={{ position: 'relative', height: '28px', width: '100px' }}>
          <Image src={t.logo} alt="Company logo" fill style={{ objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)' }} />
        </div>

        {/* Quote */}
        <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: 'white', fontStyle: 'italic', flex: 1 }}>
          {t.quote}
        </p>

        {/* Person */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <Image src={t.avatar} alt={t.name} fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: 'white', margin: 0 }}>{t.name}</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{t.role}</p>
          </div>
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[{ label: '←', action: prev }, { label: '→', action: next }].map(({ label, action }) => (
            <button key={label} onClick={action} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.3)',
              backgroundColor: 'transparent', color: 'white',
              cursor: 'pointer', fontSize: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Right photo */}
      <div className="testimonials-right" style={{ flex: 1, position: 'relative' }}>
        <Image key={t.photo} src={t.photo} alt="Testimonial" fill style={{ objectFit: 'cover' }} />
      </div>
    </section>
  )
}
