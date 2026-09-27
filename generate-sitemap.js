import { writeFileSync } from 'fs';
import { resolve } from 'path';

// 1. Define your domain and static routes
const DOMAIN = 'https://davidraigoza.design'; // Update with your active domain

const routes = [
  '/',
  '/us',
  '/case-studies/dra-victoria',
  '/case-studies/common-ground',
  '/case-studies/talent-showcase-hub',
  '/us/case-studies/dra-victoria',
  '/us/case-studies/common-ground',
  '/us/case-studies/talent-showcase-hub',
];

// 2. Build the XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

// 3. Output to the public directory (Vite copies contents of /public directly to /dist)
const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf8');

console.log('✅ sitemap.xml generated in /public/sitemap.xml');