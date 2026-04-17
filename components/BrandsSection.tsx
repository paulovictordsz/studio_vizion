import Image from 'next/image'

const logos = [
  { src: '/images/logo-dpz.png', alt: 'DPZ' },
  { src: '/images/logo-artplan.png', alt: 'artplan' },
  { src: '/images/logo-hw.png', alt: 'H&W' },
  { src: '/images/logo-google.png', alt: 'Google' },
  { src: '/images/logo-row2.png', alt: 'Brand' },
  { src: '/images/logo-samsung.png', alt: 'Samsung' },
  { src: '/images/logo-stone.png', alt: 'stone' },
  { src: '/images/logo-trident.png', alt: 'Trident' },
  { src: '/images/logo-damn.png', alt: 'Studio' },
  { src: '/images/logo-almap.png', alt: 'ALMAP' },
  { src: '/images/logo-dreamersgr.svg', alt: 'dreamers' },
  { src: '/images/logo-cogna.png', alt: 'cogna' },
]

const avatars = ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg']

const tags = [
  { icon: '✦', label: 'IDENTIDADE VISUAL' },
  { icon: '◻', label: 'INTERFACES DIGITAIS' },
  { icon: '⚡', label: 'ENTREGAS ESTRATÉGICAS' },
]

export default function BrandsSection() {
  return (
    <section className="brands-section" style={{ backgroundColor: '#000', padding: '80px', color: 'white' }}>
      {/* Top header */}
      <div className="brands-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '64px', gap: '40px' }}>
        <h2 style={{
          fontFamily: 'var(--font-bricolage)',
          fontSize: 'clamp(48px,5vw,72px)', fontWeight: 400, lineHeight: 1,
          letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'white',
          maxWidth: '400px', margin: 0,
        }}>
          MARCAS QUE CONFIAM NO STUDIO
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', textAlign: 'right', maxWidth: '300px', margin: 0 }}>
            De startups a empresas consolidadas, entregamos design que posiciona.
          </p>
          {/* Stats card */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px',
            padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '280px',
          }}>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D6FF91', margin: 0 }}>
              +50 PROJETOS ENTREGUES
            </p>
            <div style={{ display: 'flex' }}>
              {avatars.map((src, i) => (
                <div key={src} style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #000', marginLeft: i === 0 ? 0 : '-8px' }}>
                  <Image src={src} alt="" fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              Marcas que crescem com design consistente.
            </p>
          </div>
        </div>
      </div>

      {/* Logos grid */}
      <div className="brands-logos" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '32px 48px', alignItems: 'center',
      }}>
        {logos.map((logo) => (
          <div key={logo.alt} style={{ position: 'relative', height: '44px' }}>
            <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
          </div>
        ))}
      </div>

      {/* Category tags bar */}
      <div className="brands-tags" style={{
        display: 'flex',
        borderTop: '1px solid rgba(255,255,255,0.12)',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
        marginTop: '64px',
      }}>
        {tags.map((tag, i) => (
          <div key={tag.label} className="brands-tag" style={{
            flex: 1, padding: '20px',
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
            borderRight: i < tags.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
          }}>
            <span>{tag.icon}</span> {tag.label}
          </div>
        ))}
      </div>
    </section>
  )
}
