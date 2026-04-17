'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn } from './AnimateIn'

const faqs = [
  {
    q: 'Quanto tempo leva um projeto de identidade visual?',
    a: 'Projetos de identidade visual completa levam em média 3 a 5 semanas, dependendo da complexidade e da agilidade nas aprovações. Entregas pontuais (logotipo + paleta) podem ser concluídas em até 2 semanas.',
  },
  {
    q: 'Como funciona o processo de briefing?',
    a: 'Após o primeiro contato, enviamos um formulário estruturado de briefing. Depois de preenchido, fazemos uma reunião de alinhamento de até 1h para esclarecer dúvidas e validar o escopo antes de iniciar.',
  },
  {
    q: 'Quantas revisões estão incluídas no projeto?',
    a: 'Todos os projetos incluem 2 rodadas de revisão por entrega. Cada rodada consolida o feedback em um único documento para que possamos iterar com eficiência e sem retrabalho.',
  },
  {
    q: 'Vocês atendem empresas fora do Brasil?',
    a: 'Sim. Trabalhamos com clientes remotos no Brasil e no exterior. Toda a comunicação pode ser feita por e-mail, WhatsApp ou videochamada. Contratos e pagamentos internacionais são tratados caso a caso.',
  },
  {
    q: 'O que está incluído na entrega final?',
    a: 'Entregamos todos os arquivos em formatos editáveis (AI, Figma, PDF) e prontos para uso (PNG, SVG, WebP). Projetos de identidade incluem ainda um guia de uso básico com as diretrizes da marca.',
  },
  {
    q: 'É possível contratar apenas um serviço específico?',
    a: 'Sim. Você pode contratar desde um único item — como uma landing page ou apresentação — até um escopo completo. Nosso modelo é flexível para atender diferentes estágios de crescimento.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#E8E8E8', padding: '80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: '12px' }}>
              Dúvidas frequentes
            </p>
            <h2 style={{
              fontFamily: 'var(--font-bricolage)',
              fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, lineHeight: 1,
              letterSpacing: '-0.02em', textTransform: 'uppercase',
              color: 'black', margin: 0,
            }}>
              PERGUNTAS FREQUENTES
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: i === 0 ? '1px solid rgba(0,0,0,0.12)' : 'none' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', gap: '24px',
                    padding: '28px 0', backgroundColor: 'transparent',
                    border: 'none', borderBottom: '1px solid rgba(0,0,0,0.12)',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: '16px', fontWeight: 400, lineHeight: 1.4,
                    color: open === i ? 'black' : 'rgba(0,0,0,0.75)',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-inter)',
                  }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      flexShrink: 0,
                      width: '32px', height: '32px', borderRadius: '50%',
                      backgroundColor: open === i ? '#D6FF91' : 'rgba(0,0,0,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '18px', color: 'black', lineHeight: 1,
                      transition: 'background-color 0.2s',
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontSize: '15px', fontWeight: 300, lineHeight: 1.75,
                        color: 'rgba(0,0,0,0.6)', padding: '0 48px 28px 0', margin: 0,
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
