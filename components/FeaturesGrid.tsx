function ServiceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="38" rx="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <path d="M12 20h16M20 12v16" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

const cards = [
  { title: 'Identidade Visual', desc: 'Marca, logotipo e sistema visual completo com critério e coerência.' },
  { title: 'Brand Book', desc: 'Diretrizes de uso para manter a marca íntegra em qualquer contexto.' },
  { title: 'Site Institucional', desc: 'Presença digital que transmite autoridade e gera confiança.' },
  { title: 'Landing Page', desc: 'Páginas focadas em conversão com clareza e resultado mensurável.' },
  { title: 'Sistema Web', desc: 'Interfaces e dashboards para produtos e plataformas digitais.' },
  { title: 'Design System', desc: 'Biblioteca de componentes para escalar seu produto com consistência.' },
  { title: 'Apresentações', desc: 'Decks e materiais que vendem, impressionam e ficam na memória.' },
  { title: 'Estratégia de Marca', desc: 'Posicionamento, naming e arquitetura de marca para crescer certo.' },
]

export default function FeaturesGrid() {
  return (
    <section id="servicos" className="features-section" style={{
      backgroundColor: '#E8E8E8', padding: '80px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {/* Header */}
      <div style={{ width: '100%', maxWidth: '1280px', marginBottom: '48px' }}>
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'black', marginBottom: '8px' }}>
          Nossos Serviços
        </p>
        <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.6, color: 'black', maxWidth: '500px', margin: 0 }}>
          Atuamos nas frentes que mais impactam a percepção da sua marca no mercado.
        </p>
      </div>

      {/* Grid */}
      <div className="features-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        width: '100%',
        maxWidth: '1280px',
      }}>
        {cards.map((card) => (
          <div key={card.title} className="features-card" style={{
            backgroundColor: 'rgba(0,0,0,0.88)',
            borderRadius: '24px',
            padding: '42px',
            height: '306px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start',
            boxShadow: 'rgba(255,255,255,0.04) 0px 4px 32px 0px',
          }}>
            <ServiceIcon />
            <div>
              <h3 style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: '20px', fontWeight: 400, lineHeight: 1.2,
                color: 'white', margin: '0 0 12px 0',
              }}>{card.title}</h3>
              <p style={{
                fontSize: '13px', fontWeight: 300, lineHeight: 1.5,
                color: 'rgba(255,255,255,0.7)', margin: 0,
              }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
