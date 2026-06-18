import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const basePath = '/MM-CAR-CARE';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walk(filepath, callback);
    } else if (stat.isFile()) {
      callback(filepath);
    }
  });
}

const publicAssets = [
  'logo.png',
  'about-features.png',
  'about-signboard.jpg',
  'ac-service.png',
  'air-fill-greasing.png',
  'body-repair.png',
  'car-image-1.jpeg',
  'car-image-2.jpeg',
  'car-image-3.jpeg',
  'car-service.png',
  'diagnostics.png',
  'favicon.ico',
  'favicon.png',
  'foam-wash.png',
  'jump-start.png',
  'tyre-change.png',
  'wheel-alignment.png',
  'wheel-balancing.png',
  'workshop-video.mp4'
];

if (fs.existsSync(distDir)) {
  walk(distDir, filepath => {
    if (filepath.endsWith('.html')) {
      let content = fs.readFileSync(filepath, 'utf8');

      // Replace hardcoded links starting with "/"
      content = content.replace(/href="\/about"/g, `href="${basePath}/about"`);
      content = content.replace(/href="\/services"/g, `href="${basePath}/services"`);
      content = content.replace(/href="\/staff"/g, `href="${basePath}/staff"`);
      content = content.replace(/href="\/contact"/g, `href="${basePath}/contact"`);
      content = content.replace(/href="\/"/g, `href="${basePath}/"`);
      content = content.replace(/href="\/services#/g, `href="${basePath}/services#`);

      // Replace public asset images/videos starting with "/"
      publicAssets.forEach(asset => {
        const regexSrc = new RegExp(`src="\\/${asset}"`, 'g');
        content = content.replace(regexSrc, `src="${basePath}/${asset}"`);
        
        const regexHref = new RegExp(`href="\\/${asset}"`, 'g');
        content = content.replace(regexHref, `href="${basePath}/${asset}"`);
      });

      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Patched paths in ${path.relative(distDir, filepath)}`);
    }
  });
}
