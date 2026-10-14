import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve('dist');
const site = 'https://rajeshtudu.com.np';
const pages = [
  { route: 'about', title: 'About Rajesh Tudu | SEO practice and experience', description: 'Learn about Rajesh Tudu’s SEO work, experience, training, and developing practice across semantic and entity SEO, on-page, off-page, local, technical, and e-commerce SEO.' },
  { route: 'services', title: 'SEO Services | Rajesh Tudu', description: 'Explore SEO support across semantic research, on-page, off-page, local, technical, and e-commerce SEO, scoped around your website and goals.' },
  { route: 'work', title: 'SEO Case Studies and Work | Rajesh Tudu', description: 'Review anonymized SEO case studies with their data sources, comparison periods, documented work, reported results, and evidence limitations.' },
  { route: 'work/ecommerce-search-performance', title: 'E-commerce Search Performance Case Study | Rajesh Tudu', description: 'A Search Console review comparing e-commerce visibility and clicks across sitewide, product, collection, and blog pages, with evidence caveats.' },
  { route: 'work/local-search-review', title: 'Local SEO Search Review Case Study | Rajesh Tudu', description: 'An anonymized home-services SEO review comparing Search Console performance, worked pages, and organic key events in GA4.' },
  { route: 'work/ecommerce-visibility-sales', title: 'E-commerce SEO Visibility and Sales Snapshot | Rajesh Tudu', description: 'An anonymized report snapshot connecting Search Console clicks and impressions with organic sales totals, including source and comparison limits.' },
  { route: 'contact', title: 'Contact Rajesh Tudu | SEO', description: 'Contact Rajesh Tudu in Lalitpur, Nepal about SEO roles, project collaborations, or a search challenge.' },
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const template = await readFile(path.join(outDir, 'index.html'), 'utf8');
for (const page of pages) {
  const destination = path.join(outDir, page.route, 'index.html');
  await mkdir(path.dirname(destination), { recursive: true });
  const canonical = `${site}/${page.route}/`;
  const pageSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: canonical,
    isPartOf: { '@type': 'WebSite', name: 'Rajesh Tudu Portfolio', url: `${site}/` },
  }).replaceAll('<', '\\u003c');
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replaceAll('./assets/', '../assets/')
    .replace(/<!-- ProfilePage Schema -->[\s\S]*?<\/script>/, '')
    .replace('</head>', `  <script type="application/ld+json">${pageSchema}</script>\n  </head>`);
  await writeFile(destination, html);
}

console.log(`Created ${pages.length} GitHub Pages route documents.`);
