'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const links = ['BRANDING', 'SITES', 'SISTEMAS WEB', 'PORTFÓLIO', 'CONTATO']

export default function PreFooter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="prefooter-section" style={{
      backgroundColor: 'black', padding: '80px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      overflow: 'hidden',
    }}>
      <div className="prefooter-cols" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '1280px', margin: '0 auto' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '24px' }}>
            Studio de design
          </p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/images/logo-white.svg" alt="Studio Vizion" width={360} height={62} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', marginTop: '20px', maxWidth: '380px' }}
          >
            Identidade visual, sites e sistemas web — do conceito à entrega.
          </motion.p>
        </div>
        <nav className="prefooter-nav" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
          {links.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
            >
              <Link href="#" style={{
                fontSize: '11px', fontWeight: 400, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
              }}>
                {l}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </section>
  )
}
