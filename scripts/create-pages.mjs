import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve('dist');
const site = 'https://rajeshtudu.com.np';
const pages = [
  { route: 'about', title: 'About Rajesh Tudu | SEO Specialist', description: 'Learn about Rajesh Tudu’s SEO experience across e-commerce, SaaS, health, insurance, mortgage, B2B, and professional services.' },
  { route: 'services', title: 'SEO Services | Semantic, Entity & Local SEO', description: 'SEO services for e-commerce and varied industries: semantic and entity research, on-page, technical, local and off-page SEO, audits, reporting and automation.' },
  { route: 'work', title: 'SEO Case Studies | Rajesh Tudu', description: 'Anonymized SEO case studies using Search Console, GA4, and sales data. Review the work, comparison periods, outcomes, and evidence limits behind each result.' },
  { route: 'work/ecommerce-search-performance', title: 'E-commerce SEO Case Study | Search Visibility & Clicks', description: 'An anonymized Search Console case study compares e-commerce impressions, clicks, and product, collection, and blog pages across two 2025 periods.' },
  { route: 'work/local-search-review', title: 'Local SEO Case Study | Search & Analytics Review', description: 'An anonymized local SEO review compares pages receiving work with sitewide Search Console metrics and GA4 organic key events in Aug–Sep 2024.' },
  { route: 'work/ecommerce-visibility-sales', title: 'E-commerce SEO Case Study | Visibility & Sales', description: 'An anonymized report pairs e-commerce Search Console clicks and impressions with organic sales for Jun 2024–Jan 2025, noting unknown comparison dates.' },
  { route: 'contact', title: 'Contact Rajesh Tudu | SEO Projects and Roles', description: 'Contact Rajesh Tudu in Lalitpur, Nepal about SEO roles, projects, or organic search challenges. Email directly or connect through professional social profiles.' },
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
