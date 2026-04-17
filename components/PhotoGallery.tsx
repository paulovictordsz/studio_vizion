import Image from 'next/image'

export default function PhotoGallery() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div className="gallery-item" style={{ position: 'relative', height: '470px' }}>
          <Image src="/images/workshop-photo-1.png" alt="Projeto de identidade visual" fill style={{ objectFit: 'cover', borderRadius: '16px' }} />
        </div>
        <div className="gallery-item" style={{ position: 'relative', height: '470px' }}>
          <Image src="/images/workshop-photo-2.png" alt="Projeto de site e interface" fill style={{ objectFit: 'cover', borderRadius: '16px' }} />
        </div>
      </div>
    </section>
  )
}
