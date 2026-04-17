import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '../public');

const assets = [
  // Hero
  { url: 'https://framerusercontent.com/images/5AIWbheD25lAbCI67YAI2tKe04.png', dest: 'images/hero-bg.png' },
  // Logo
  { url: 'https://framerusercontent.com/images/J3jsM6SlHkjGezNmYCfJaA1G34.svg', dest: 'images/logo-human.svg' },
  // AI icon in hero badge
  { url: 'https://framerusercontent.com/images/797NdAVOrgb4y2rwBlaSyv7bmw.svg', dest: 'images/ai-icon.svg' },
  // Flag BR
  { url: 'https://framerusercontent.com/images/80WuBBdsE94W3tmgnQr2bjV2a2E.png', dest: 'images/flag-br.png' },
  // Section 2 - laptop image
  { url: 'https://framerusercontent.com/images/eMnZi7QCyZjtPSKEVqplvGqF7k.png', dest: 'images/laptop-screens.png' },
  // Feature card icons
  { url: 'https://framerusercontent.com/images/lCBoLmjTlSN6JM1ST04NrulKK0.png', dest: 'images/icon-feature-1.png' },
  { url: 'https://framerusercontent.com/images/8sQlq3CiyE6e1nx4GEDFDqYtY.png', dest: 'images/icon-feature-2.png' },
  { url: 'https://framerusercontent.com/images/yNEXidNHl13EcP8HnUTlh33crbI.png', dest: 'images/icon-feature-3.png' },
  // Workshop photos
  { url: 'https://framerusercontent.com/images/3hWHLgu8Nw5fqVRtK0cTzraNhw8.png', dest: 'images/workshop-photo-1.png' },
  { url: 'https://framerusercontent.com/images/OCwBTHNxTxT9zPJVvV7rdygc.png', dest: 'images/workshop-photo-2.png' },
  // Brand logos
  { url: 'https://framerusercontent.com/images/Eh63GeoQgmq0yVKoEfFo5Y2mA34.png', dest: 'images/logo-dpz.png' },
  { url: 'https://framerusercontent.com/images/zACUtsXAUdqEpnEu9ReXTTbe7c.png', dest: 'images/logo-artplan.png' },
  { url: 'https://framerusercontent.com/images/riCVnGheDRYpna1bQxmaSZS87J4.png', dest: 'images/logo-hw.png' },
  { url: 'https://framerusercontent.com/images/XWxL7yxhLxk1kL09tnAOcZ0Gw.png', dest: 'images/logo-google.png' },
  { url: 'https://framerusercontent.com/images/9Pu7Qv0C1yON01YkPkmiFh5YvU.png', dest: 'images/logo-row2.png' },
  { url: 'https://framerusercontent.com/images/M8youEJ0y2aHQ1h9Ol7XcxNPXng.png', dest: 'images/logo-cogna.png' },
  { url: 'https://framerusercontent.com/images/YNckIGcfXjLcaZyF7W39vxVRxgE.png', dest: 'images/logo-3coracoes.png' },
  { url: 'https://framerusercontent.com/images/gBUT9pCtESOI32A0gbjCj5yE1k.png', dest: 'images/logo-almap.png' },
  { url: 'https://framerusercontent.com/images/oUs8b5cGgs8q7MeuHd6tvtFG58w.svg', dest: 'images/logo-dreamersgr.svg' },
  { url: 'https://framerusercontent.com/images/qfBTfPk69ZjjT32za2kQvqYQ.png', dest: 'images/logo-footer.png' },
  // Testimonial slider images
  { url: 'https://framerusercontent.com/images/SmLX35h3uM4capFvPZUYUaoJtY.jpg', dest: 'images/testimonial-photo-1.jpg' },
  { url: 'https://framerusercontent.com/images/u420I4K3XXVuwQp9kkhP6Dh0y4.jpg', dest: 'images/testimonial-photo-2.jpg' },
  { url: 'https://framerusercontent.com/images/Dd5zS62GYTfET3jzN2xHUt802E.jpeg', dest: 'images/testimonial-avatar-thiago.jpg' },
  // Workshop section images
  { url: 'https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png', dest: 'images/workshop-visual-presencial.png' },
  { url: 'https://framerusercontent.com/images/r5ax9VM3TMfPrzSsosuxxuqz6k.png', dest: 'images/workshop-visual-online.png' },
  { url: 'https://framerusercontent.com/images/nlPweLhWb84aGWPslAWTU2K93E.png', dest: 'images/workshop-icons.png' },
  // Benefits section
  { url: 'https://framerusercontent.com/images/9ezSoc9GiS6g7syg7lMddEuHRtI.png', dest: 'images/benefits-portrait.png' },
  // Course images
  { url: 'https://framerusercontent.com/images/4cQ9lODipn2QTaEUhxsyMdY1Q.jpg', dest: 'images/course-ai-image.jpg' },
  { url: 'https://framerusercontent.com/images/7ORRRhZfsj178ZuszgpHyQ4YaX8.png', dest: 'images/course-ai-video.png' },
  { url: 'https://framerusercontent.com/images/mmVQAXFQewBTDijMd2uzS8bQFFk.png', dest: 'images/course-chatgpt.png' },
  // Social testimonial avatars
  { url: 'https://framerusercontent.com/images/6kkH4MbvKZIxMQhPyhX9P5tqmIw.jpg', dest: 'images/avatar-1.jpg' },
  { url: 'https://framerusercontent.com/images/XcC1JCmGGORASh7T6FqzfvpY57g.jpg', dest: 'images/avatar-2.jpg' },
  { url: 'https://framerusercontent.com/images/njkpyjoFoGyCwuE3fdfaF4zFO9w.jpg', dest: 'images/avatar-3.jpg' },
  { url: 'https://framerusercontent.com/images/y4hSiNcdOqKFArxAfC1fjq5sA.jpg', dest: 'images/avatar-4.jpg' },
  { url: 'https://framerusercontent.com/images/kOetAPaabqKXyIbvaq8oITyPac.jpg', dest: 'images/avatar-5.jpg' },
  { url: 'https://framerusercontent.com/images/ISYZ2zcttQQEC5uyGX3JuF3RVI.jpg', dest: 'images/testimonial-large-1.jpg' },
  { url: 'https://framerusercontent.com/images/VhNnGC7rwDYETKcFKk5FaMgs0.jpg', dest: 'images/testimonial-large-2.jpg' },
  // Footer logo large
  { url: 'https://framerusercontent.com/images/jyII7HuOs8ErUTaGFuQLr7Q8.png', dest: 'images/footer-bg.png' },
  // Small logo in about section
  { url: 'https://framerusercontent.com/images/Ph8T3MKJ0xH6YyaKa6fvuc2hye4.png', dest: 'images/human-icon-small.png' },
  // Treinamento section icons
  { url: 'https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png', dest: 'images/icon-circle.png' },
  { url: 'https://framerusercontent.com/images/s1nBdovjHX7BoK0tOA75Y6abk4.png', dest: 'images/icon-circle-2.png' },
  { url: 'https://framerusercontent.com/images/67omgKJ4lugJS1w0wZyJpVW4UXM.png', dest: 'images/icon-circle-3.png' },
  { url: 'https://framerusercontent.com/images/s6AITTI30X4vZ2dVzReATI2Rps.png', dest: 'images/icon-circle-4.png' },
  { url: 'https://framerusercontent.com/images/Z3RWpSSwD4kKbxZRMEZ90ILWA.png', dest: 'images/icon-circle-5.png' },
  { url: 'https://framerusercontent.com/images/cO0WBabxbUN2HaxuiTrMDtex6s.png', dest: 'images/icon-circle-6.png' },
  { url: 'https://framerusercontent.com/images/DRr3324Jcyyb6WOb8K5TU7kJ7oo.png', dest: 'images/icon-circle-7.png' },
  { url: 'https://framerusercontent.com/images/cdWvSU2q4w0yL7ubEAuHfzj3iFs.png', dest: 'images/logo-samsung.png' },
  { url: 'https://framerusercontent.com/images/0iqlL4v7RrcWtWKbA9dQCW9tqMM.png', dest: 'images/logo-stone.png' },
  { url: 'https://framerusercontent.com/images/3ZoAN5gR6Mjo9gwLVOFAkRJdQ4.png', dest: 'images/logo-trident.png' },
  { url: 'https://framerusercontent.com/images/bWzfIDFqPOsasAxZsNLrjzcXPBM.png', dest: 'images/logo-damn.png' },
  { url: 'https://framerusercontent.com/images/HgvAKQ1EXUe0bH8NnxRaX9X1w9w.png', dest: 'images/logo-hotmart.png' },
  { url: 'https://framerusercontent.com/images/s3R8oZxwBotHeuuX4OnfFenLGac.png', dest: 'images/logo-cogna-w.png' },
  { url: 'https://framerusercontent.com/images/mYhFfM6aZGdyY2orfG8Sl5YJ4.png', dest: 'images/check-icon.png' },
  // Avatar for testimonial
  { url: 'https://framerusercontent.com/images/qYC40Nb7O0F4GDqZkmIETiZJM.jpg', dest: 'images/avatar-6.jpg' },
];

async function downloadBatch(batch) {
  return Promise.all(batch.map(async ({ url, dest }) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const fullPath = join(PUBLIC, dest);
      mkdirSync(dirname(fullPath), { recursive: true });
      writeFileSync(fullPath, buf);
      console.log(`✓ ${dest}`);
    } catch (e) {
      console.error(`✗ ${dest}: ${e.message}`);
    }
  }));
}

async function main() {
  mkdirSync(join(PUBLIC, 'images'), { recursive: true });
  const batchSize = 6;
  for (let i = 0; i < assets.length; i += batchSize) {
    await downloadBatch(assets.slice(i, i + batchSize));
  }
  console.log('\nDone!');
}

main();
