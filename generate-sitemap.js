import { writeFileSync } from 'fs';
import { resolve } from 'path';

const urls = [
  'https://us.davidraigoza.online/',
  'https://us.davidraigoza.online/case-studies/dra-victoria',
  'https://us.davidraigoza.online/case-studies/common-ground',
  'https://us.davidraigoza.online/case-studies/talent-showcase-hub',
  'https://www.davidraigoza.online/',
  'https://www.davidraigoza.online/case-studies/dra-victoria',
  'https://www.davidraigoza.online/case-studies/common-ground',
  'https://www.davidraigoza.online/case-studies/talent-showcase-hub',
];

const sitemap = `<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    return `  <url>
    <loc>${url}</loc>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

const outputPathXml = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPathXml, sitemap, 'utf8');

const outputPathXlm = resolve(process.cwd(), 'public', 'sitemap.xlm');
writeFileSync(outputPathXlm, sitemap, 'utf8');

console.log('✅ sitemap.xml and sitemap.xlm generated in /public');
