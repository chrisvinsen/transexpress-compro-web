import sharp from 'sharp';
import { stat, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)));
const IN_DIR = join(ROOT, '../assets for transexpress');
const OUT_DIR = join(ROOT, 'public/images');

// Ensure output directory exists
await mkdir(OUT_DIR, { recursive: true });

const mapping = {
  'chuttersnap-fN603qcEA7g-unsplash.jpg': 'service-sea-freight',
  'jorgen-hendriksen-UfVy7UjQ_rA-unsplash.jpg': 'service-air-freight',
  'grace-estrada-yuilQkolDRo-unsplash.jpg': 'service-jasa-belanja',
  'javier-quiroga-FeBqmwrm1YI-unsplash.jpg': 'service-transfer-rmb',
  'fejuz-q6j5mSRpi50-unsplash.jpg': 'hero-containers',
  'alberto-gasco-qIoDIAAsuNE-unsplash.jpg': 'hero-china-shopping',
  '1374.jpg': 'service-sea-fcl',
  '2151989582.jpg': 'service-sea-lcl',
  '2152021809.jpg': 'service-sea-express',
  'nathan-cima-2JNNpq4nGls-unsplash.jpg': 'hero-cargo-ship',
  'nathan-cima-MHXJ9p64Jw8-unsplash.jpg': 'hero-warehouse',
  'patrick-campanale-oCsQLKENz34-unsplash.jpg': 'hero-cargo-plane',
};

async function size(p) {
  try { return (await stat(p)).size; } catch { return null; }
}

for (const [inName, outBaseName] of Object.entries(mapping)) {
  const inPath = join(IN_DIR, inName);
  const outPathWebp = join(OUT_DIR, `${outBaseName}.webp`);
  const orig = await size(inPath);
  
  if (!orig) {
    console.log(`SKIP ${inName} (not found)`);
    continue;
  }

  let pipeline = sharp(inPath);
  
  // Resize hero images to max 1600px width, others to 800px width to be fast
  const resizeWidth = outBaseName.startsWith('hero-') ? 1600 : 800;
  
  pipeline = pipeline.resize({ width: resizeWidth, withoutEnlargement: true });

  await pipeline.clone().webp({ quality: 75, effort: 6 }).toFile(outPathWebp);

  const w = await size(outPathWebp);
  console.log(`Processed ${inName} -> ${outBaseName}.webp (Original: ${(orig/1024).toFixed(0)}KB, WebP: ${(w/1024).toFixed(0)}KB)`);
}
console.log('Done mapping and converting assets!');
