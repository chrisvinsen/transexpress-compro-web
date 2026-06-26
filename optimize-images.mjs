// One-shot image optimizer for Trans Express public assets.
// Generates .avif (q=55) and .webp (q=78) siblings for selected PNGs.
// (The brand logo + favicons are handled by scripts/make-brand-assets.mjs.)
import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), 'public');

const targets = [
  // Hero card LCP images — displayed ~210x210 max, so 420 = 2x retina is plenty
  { src: 'home/service-sea-2.png', resize: 420 },
  { src: 'home/service-air-2.png', resize: 420 },
  // Other home images used elsewhere on the site (kept at native size by default)
  { src: 'home/service-sea-3.png', resize: 800 },
  { src: 'home/service-sea-4.png', resize: 800 },
  { src: 'home/multiple-container.png', resize: 800 },
  { src: 'home/multiple-container-3.png', resize: 800 },
  { src: 'home/container.png', resize: 800 },
  { src: 'home/service-sea.png', resize: 800 },
  { src: 'home/service-air.png', resize: 800 },
  // Comparison images on jasa-belanja pages
  { src: 'jasa-belanja/compare-1688.png', resize: 800 },
  { src: 'jasa-belanja/compare-alibaba.png', resize: 800 },
  { src: 'jasa-belanja/compare-aliexpress.png', resize: 800 },
  { src: 'jasa-belanja/compare-jdcom.png', resize: 800 },
  { src: 'jasa-belanja/compare-taobao.png', resize: 800 },
  // Public root comparison images
  { src: 'compare-electronics.png', resize: 800 },
  { src: 'compare-fashion.png', resize: 800 },
  // Public root service photos (Services / HowItWorks below-fold)
  { src: 'service-sea-lcl.jpg', resize: 640 },
  { src: 'service-sea-fcl.jpg', resize: 640 },
  { src: 'service-sea-express.jpg', resize: 640 },
  { src: 'service-air.jpg', resize: 640 },
  { src: 'service-jasa-belanja.jpg', resize: 640 },
  { src: 'service-titip-transfer.jpg', resize: 640 },
  { src: 'hero-1.jpg', resize: 1600 },
];

async function size(p) {
  try { return (await stat(p)).size; } catch { return null; }
}

let totalOriginal = 0, totalAvif = 0, totalWebp = 0;

for (const { src, resize } of targets) {
  const inPath = join(ROOT, src);
  const baseOut = join(ROOT, src.replace(/\.(png|jpg|jpeg)$/i, ''));
  const avifOut = `${baseOut}.avif`;
  const webpOut = `${baseOut}.webp`;
  const orig = await size(inPath);
  if (!orig) {
    console.log(`SKIP ${src} (not found)`);
    continue;
  }
  totalOriginal += orig;

  let pipeline = sharp(inPath);
  if (resize) {
    pipeline = pipeline.resize(resize, resize, { fit: 'inside', withoutEnlargement: true });
  }

  await pipeline.clone().avif({ quality: 50, effort: 7 }).toFile(avifOut);
  await pipeline.clone().webp({ quality: 75, effort: 6 }).toFile(webpOut);

  const a = await size(avifOut);
  const w = await size(webpOut);
  totalAvif += a; totalWebp += w;
  const fmt = (n) => `${(n / 1024).toFixed(0)} KiB`;
  console.log(`${src.padEnd(45)}  src ${fmt(orig).padStart(8)}  AVIF ${fmt(a).padStart(8)}  WebP ${fmt(w).padStart(8)}`);
}

const fmt = (n) => `${(n / 1024).toFixed(0)} KiB`;
console.log('---');
console.log(`TOTAL  original=${fmt(totalOriginal)}  avif=${fmt(totalAvif)}  webp=${fmt(totalWebp)}`);
console.log(`AVIF saves ${(100 - (totalAvif * 100) / totalOriginal).toFixed(1)}% vs PNG`);
