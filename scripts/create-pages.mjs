import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve('dist');
const site = 'https://rajeshtudu.com.np';
const pages = [
  { route: 'about', title: 'About Rajesh Tudu | SEO Specialist Experience', description: 'Explore Rajesh Tudu’s SEO experience across e-commerce and varied niches, plus training and work in semantic, on-page, technical, local, and off-page SEO.' },
  { route: 'services', title: 'SEO Services | Semantic, Entity & Local SEO', description: 'Semantic and entity research, on-page, technical, off-page, local and e-commerce SEO, reporting, and automation. Scope reflects your site, goals, and evidence.' },
  { route: 'work', title: 'SEO Case Studies and Work | Rajesh Tudu', description: 'Explore anonymized SEO case studies with data sources, comparison periods, documented work, reported outcomes, evidence limitations, and reporting context.' },
  { route: 'work/ecommerce-search-performance', title: 'E-commerce SEO Case Study | Search Visibility & Clicks', description: 'See an anonymized Search Console comparison of e-commerce visibility, clicks, and page types, with reported changes, source periods, and evidence limitations.' },
  { route: 'work/local-search-review', title: 'Local SEO Case Study | Search & Analytics Review', description: 'Review an anonymized local SEO report comparing Search Console visibility, pages receiving work, and GA4 organic key events month over month.' },
  { route: 'work/ecommerce-visibility-sales', title: 'E-commerce SEO Case Study | Visibility & Sales', description: 'Review an anonymized e-commerce report of Search Console clicks and impressions alongside organic sales, with source dates and comparison limits.' },
  { route: 'contact', title: 'Contact Rajesh Tudu | SEO Projects and Roles', description: 'Contact Rajesh Tudu in Lalitpur, Nepal about SEO roles, project collaborations, or a search challenge. Email or connect through professional social profiles.' },
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const template = await readFile(path.join(outDir, 'index.html'), 'utf8');
for (const page of pages) {
  const destination = path.join(outDir, page.route, 'index.html');
  const relativeRoot = '../'.repeat(page.route.split('/').length);
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
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<!-- ProfilePage Schema -->[\s\S]*?<\/script>/, '')
    .replaceAll('./assets/', `${relativeRoot}assets/`)
    .replaceAll('href="./favicon-rt-v2.svg?v=3"', `href="${relativeRoot}favicon-rt-v2.svg?v=3"`)
    .replaceAll('href="./favicon.ico"', `href="${relativeRoot}favicon.ico"`)
    .replaceAll('href="./apple-touch-icon.png"', `href="${relativeRoot}apple-touch-icon.png"`)
    .replace('</head>', `  <script type="application/ld+json" data-page-schema="true">${pageSchema}</script>\n  </head>`);
  await writeFile(destination, html);
}

console.log(`Created ${pages.length} GitHub Pages route documents.`);
