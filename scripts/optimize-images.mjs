import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function optimizeHero() {
  const heroSrc = path.join(IMAGES_DIR, 'hero', 'ankurt-storefront-hero.jpg');
  if (!fs.existsSync(heroSrc)) return;

  const outWebpDesktop = path.join(IMAGES_DIR, 'hero', 'ankurt-storefront-hero.webp');
  const outWebpMobile = path.join(IMAGES_DIR, 'hero', 'ankurt-storefront-hero-mobile.webp');
  const outAvifDesktop = path.join(IMAGES_DIR, 'hero', 'ankurt-storefront-hero.avif');
  const outAvifMobile = path.join(IMAGES_DIR, 'hero', 'ankurt-storefront-hero-mobile.avif');

  // Desktop version: max width 1440px
  await sharp(heroSrc)
    .resize({ width: 1440, withoutEnlargement: true })
    .webp({ quality: 75, effort: 6 })
    .toFile(outWebpDesktop);

  await sharp(heroSrc)
    .resize({ width: 1440, withoutEnlargement: true })
    .avif({ quality: 65, effort: 6 })
    .toFile(outAvifDesktop);

  // Mobile version: max width 420px (ultra-fast LCP)
  await sharp(heroSrc)
    .resize({ width: 420, withoutEnlargement: true })
    .webp({ quality: 55, effort: 6 })
    .toFile(outWebpMobile);

  await sharp(heroSrc)
    .resize({ width: 420, withoutEnlargement: true })
    .avif({ quality: 42, effort: 6 })
    .toFile(outAvifMobile);

  const statOrig = fs.statSync(heroSrc);
  const statDesk = fs.statSync(outWebpDesktop);
  const statMob = fs.statSync(outWebpMobile);
  const statMobAvif = fs.statSync(outAvifMobile);

  console.log(`Hero Desktop: ${(statOrig.size / 1024).toFixed(1)}KB -> ${(statDesk.size / 1024).toFixed(1)}KB`);
  console.log(`Hero Mobile WebP: ${(statMob.size / 1024).toFixed(1)}KB | AVIF: ${(statMobAvif.size / 1024).toFixed(1)}KB`);
}

async function optimizeBrand() {
  const brandDir = path.join(IMAGES_DIR, 'brand');
  const logoSrc = path.join(brandDir, 'ankurt_official_logo.png');
  if (!fs.existsSync(logoSrc)) return;

  const logoWebp = path.join(brandDir, 'ankurt_official_logo.webp');
  const logoPngOpt = path.join(brandDir, 'ankurt_official_logo_opt.png');

  // Logo is displayed at max 178x44px. 260px width is perfect
  await sharp(logoSrc)
    .resize({ width: 260, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(logoWebp);

  await sharp(logoSrc)
    .resize({ width: 260, withoutEnlargement: true })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(logoPngOpt);

  const statOrig = fs.statSync(logoSrc);
  const statWebp = fs.statSync(logoWebp);
  const statPng = fs.statSync(logoPngOpt);

  console.log(`Logo WebP: ${(statOrig.size / 1024).toFixed(1)}KB -> ${(statWebp.size / 1024).toFixed(1)}KB`);
  console.log(`Logo PNG Opt: ${(statOrig.size / 1024).toFixed(1)}KB -> ${(statPng.size / 1024).toFixed(1)}KB`);

  const waSrc = path.join(brandDir, 'whatsapp_logo.png');
  if (fs.existsSync(waSrc)) {
    const waWebp = path.join(brandDir, 'whatsapp_logo.webp');
    await sharp(waSrc)
      .resize({ width: 48, height: 48, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(waWebp);
    const waStat = fs.statSync(waWebp);
    console.log(`WhatsApp Icon WebP: ${(waStat.size / 1024).toFixed(1)}KB`);
  }
}

async function optimizeProducts() {
  const productsDir = path.join(IMAGES_DIR, 'products');
  if (!fs.existsSync(productsDir)) return;

  const files = fs.readdirSync(productsDir);
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i) || file.includes('_thumb')) continue;

    const inputPath = path.join(productsDir, file);
    const parsed = path.parse(file);
    const outputPath = path.join(productsDir, `${parsed.name}.webp`);

    // Products are displayed in cards (max 380px wide) and mobile viewport
    await sharp(inputPath)
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6 })
      .toFile(outputPath);

    const statOrig = fs.statSync(inputPath);
    const statWebp = fs.statSync(outputPath);
    console.log(`Product ${file}: ${(statOrig.size / 1024).toFixed(1)}KB -> ${(statWebp.size / 1024).toFixed(1)}KB`);
  }
}

async function optimizeGallery() {
  const galleryDir = path.join(IMAGES_DIR, 'gallery');
  if (!fs.existsSync(galleryDir)) return;

  const files = fs.readdirSync(galleryDir);
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

    const inputPath = path.join(galleryDir, file);
    const parsed = path.parse(file);
    const outputPath = path.join(galleryDir, `${parsed.name}.webp`);

    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);

    const statOrig = fs.statSync(inputPath);
    const statWebp = fs.statSync(outputPath);
    console.log(`Gallery ${file}: ${(statOrig.size / 1024).toFixed(1)}KB -> ${(statWebp.size / 1024).toFixed(1)}KB`);
  }
}

async function main() {
  console.log('Optimizing images with sharp...');
  await optimizeHero();
  await optimizeBrand();
  await optimizeProducts();
  await optimizeGallery();
  console.log('Image optimization finished successfully.');
}

main().catch(console.error);
