'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/app/ModalContext'

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

const services = [
  'Identidade Visual',
  'Brand Book',
  'Site Institucional',
  'Landing Page',
  'Sistema Web',
  'Design System',
  'Apresentações',
  'Outro',
]

export default function ContactModal() {
  const { isOpen, closeModal, origin } = useModal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const handleClose = () => {
    closeModal()
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }, 500)
  }

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    padding: '16px 0',
    fontSize: '15px',
    fontWeight: 300,
    fontFamily: 'var(--font-inter)',
    border: 'none',
    borderBottom: `1.5px solid ${focused === name ? '#000' : 'rgba(0,0,0,0.15)'}`,
    borderRadius: 0,
    outline: 'none',
    backgroundColor: 'transparent',
    color: 'black',
    transition: 'border-color 0.2s',
    display: 'block',
  })

  const labelStyle: React.CSSProperties = {
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(0,0,0,0.4)',
    marginBottom: '2px',
    display: 'block',
  }

  // Ripple origin as percentage of viewport
  const ox = origin.x
  const oy = origin.y

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* White ripple overlay */}
          <motion.div
            initial={{ clipPath: `circle(0px at ${ox}px ${oy}px)` }}
            animate={{ clipPath: `circle(200vmax at ${ox}px ${oy}px)` }}
            exit={{ clipPath: `circle(0px at ${ox}px ${oy}px)` }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              backgroundColor: 'white',
              overflow: 'hidden',
            }}
          >
            {/* Content fades in slightly after ripple starts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              style={{ width: '100%', height: '100%', overflowY: 'auto' }}
            >
              {/* Header */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '28px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)',
                position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1,
              }}>
                <Image src="/images/logo-black.svg" alt="Studio Vizion" width={120} height={21} />
                <button
                  onClick={handleClose}
                  style={{
                    background: 'none', border: '1px solid rgba(0,0,0,0.15)',
                    borderRadius: '100px', width: '44px', height: '44px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontSize: '18px', color: 'black',
                    transition: 'border-color 0.2s',
                  }}
                >
                  ✕
                </button>
              </div>

              {!sent ? (
                <div style={{
                  maxWidth: '960px', margin: '0 auto',
                  padding: '64px 48px 80px',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start',
                }}>
                  {/* Left: copy */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '24px', height: '1px', backgroundColor: '#D6FF91' }} />
                      <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)' }}>Iniciar Projeto</span>
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-bricolage)',
                      fontSize: 'clamp(32px, 3.5vw, 48px)',
                      fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em',
                      color: 'black', textTransform: 'uppercase', margin: 0,
                    }}>
                      CONTE-NOS SOBRE<br />
                      <span style={{ color: 'rgba(0,0,0,0.3)', fontStyle: 'italic' }}>SEU PROJETO</span>
                    </h2>
                    <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(0,0,0,0.55)', margin: 0 }}>
                      Preencha o formulário e entraremos em contato em até 24 horas com uma proposta personalizada.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                      {['Briefing gratuito', 'Proposta em 24h', 'Sem compromisso'].map((item) => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D6FF91', flexShrink: 0 }} />
                          <span style={{ fontSize: '13px', fontWeight: 400, color: 'rgba(0,0,0,0.6)' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: form */}
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    <div>
                      <label style={labelStyle}>Nome completo *</label>
                      <input
                        required
                        type="text"
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        style={fieldStyle('name')}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                      <div>
                        <label style={labelStyle}>E-mail *</label>
                        <input
                          required
                          type="email"
                          placeholder="seu@email.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          style={fieldStyle('email')}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>WhatsApp</label>
                        <input
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: maskPhone(e.target.value) }))}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused(null)}
                          style={fieldStyle('phone')}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Tipo de projeto</label>
                      <select
                        value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        onFocus={() => setFocused('service')}
                        onBlur={() => setFocused(null)}
                        style={{ ...fieldStyle('service'), appearance: 'none', cursor: 'pointer', color: form.service ? 'black' : 'rgba(0,0,0,0.35)' }}
                      >
                        <option value="" disabled>Selecione um serviço</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Mensagem</label>
                      <textarea
                        rows={4}
                        placeholder="Fale um pouco sobre seu projeto, referências e prazos..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        style={{ ...fieldStyle('message'), resize: 'none', paddingTop: '16px' }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        backgroundColor: 'black', color: 'white',
                        borderRadius: '100px', height: '56px',
                        border: 'none', cursor: 'pointer',
                        fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                        transition: 'background-color 0.2s',
                      }}
                    >
                      Enviar Mensagem
                      <span style={{
                        width: '30px', height: '30px', borderRadius: '50%',
                        backgroundColor: '#D6FF91', color: 'black',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '14px', fontWeight: 700,
                      }}>→</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Success state */
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', minHeight: 'calc(100vh - 97px)',
                  gap: '24px', textAlign: 'center', padding: '48px',
                }}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      width: '72px', height: '72px', borderRadius: '50%',
                      backgroundColor: '#D6FF91',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '28px',
                    }}
                  >
                    ✓
                  </motion.div>
                  <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '40px', fontWeight: 400, color: 'black', margin: 0, letterSpacing: '-0.02em' }}>
                    Mensagem enviada!
                  </h2>
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(0,0,0,0.55)', maxWidth: '400px', lineHeight: 1.7, margin: 0 }}>
                    Recebemos seu contato. Nossa equipe retornará em até 24 horas com uma proposta personalizada.
                  </p>
                  <button
                    onClick={handleClose}
                    style={{
                      marginTop: '16px', backgroundColor: 'black', color: 'white',
                      borderRadius: '100px', padding: '0 32px', height: '52px',
                      border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500,
                    }}
                  >
                    Fechar
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
