import Image from 'next/image'

const cards = [
  { handle: '@mariana.brand', avatar: '/images/avatar-1.jpg', quote: '"O processo foi direto e sem ruído. Trouxemos um briefing e eles devolveram uma identidade que a gente não sabia que queria, mas era exatamente o que precisávamos."' },
  { handle: '@pedro.ceo', avatar: '/images/avatar-2.jpg', quote: '"A landing page que o Vizion entregou converteu desde o primeiro dia. Design limpo, hierarquia clara e uma copy que encaixou perfeitamente na nossa proposta."' },
  { handle: '@design.ref', avatar: '/images/avatar-3.jpg', quote: '"Trabalhar com um studio que entende de posicionamento faz toda a diferença. Eles não só entregam arquivo, entregam estratégia visual."' },
  { handle: '@startup.studio', avatar: '/images/avatar-4.jpg', quote: '"Contratamos para um sprint de identidade e ficamos tão satisfeitos que voltamos para o site completo. Qualidade consistente em tudo que entregam."' },
  { handle: '@ana.marketing', avatar: '/images/avatar-5.jpg', quote: '"O brand book que recebemos é tão completo que qualquer pessoa da equipe consegue aplicar a marca sem precisar perguntar. Isso tem valor imensurável."' },
  { handle: '@lucas.founder', avatar: '/images/avatar-6.jpg', quote: '"Nossa marca antiga não dizia nada. Hoje qualquer pessoa vê nosso material e já entende quem somos. Isso é resultado de um design pensado."' },
  { handle: '@carol.ops', avatar: '/images/avatar-1.jpg', quote: '"Entregaram no prazo combinado, com dois rounds de revisão bem aproveitados. Processo profissional do início ao fim."' },
  { handle: '@rafael.tech', avatar: '/images/avatar-2.jpg', quote: '"O sistema web ficou muito além do esperado. UX intuitivo, visual consistente com a marca e tudo documentado para o time de devs."' },
]

export default function SocialTestimonials() {
  return (
    <section id="projetos" className="social-section" style={{ backgroundColor: '#E8E8E8', padding: '80px' }}>
      <div className="social-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px', gap: '40px' }}>
        <h2 style={{
          fontFamily: 'var(--font-bricolage)',
          fontSize: 'clamp(40px,4vw,64px)', fontWeight: 400, lineHeight: 1,
          letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'black',
          maxWidth: '500px', margin: 0,
        }}>
          O QUE DIZEM NOSSOS CLIENTES
        </h2>
        <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', textAlign: 'right', maxWidth: '380px', margin: 0 }}>
          Veja como o Studio Vizion impactou a presença visual de outras marcas.
        </p>
      </div>

      <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
        {cards.map((card, i) => (
          <div key={i} style={{
            backgroundColor: 'white', borderRadius: '16px', padding: '24px',
            display: 'flex', flexDirection: 'column', gap: '12px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <Image src={card.avatar} alt={card.handle} fill style={{ objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'black' }}>{card.handle}</span>
            </div>
            <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.6, color: 'black', margin: 0 }}>{card.quote}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
