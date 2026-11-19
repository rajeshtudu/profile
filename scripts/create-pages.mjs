import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const outDir = path.resolve('dist');
const site = 'https://rajeshtudu.com.np';
const pages = [
  { route: 'about', title: 'About Rajesh Tudu | SEO Specialist in Lalitpur', description: 'Rajesh Tudu plans client websites around entities and topical maps, with work across e-commerce, SaaS, health, insurance, B2B and more.' },
  { route: 'services', title: 'Semantic SEO Services | Rajesh Tudu', description: 'SEO services built on entity research and topical maps: audits, internal linking, schema, content and technical SEO.' },
  { route: 'case-studies', title: 'SEO Case Studies | Rajesh Tudu', description: 'SEO case studies from real client work, showing changes in organic traffic, search visibility, leads and sales, with the data source behind every figure.' },
  { route: 'privacy', title: 'Privacy Policy | Rajesh Tudu', description: 'How rajeshtudu.com.np uses Google Analytics data and email you send, and how to opt out or ask for your email correspondence to be deleted.' },
  { route: 'contact', title: 'Contact Rajesh Tudu | SEO Projects', description: 'Contact Rajesh Tudu about an SEO project, an audit, ongoing support or freelance work. Use the form, send an email or call.' },
];

const caseStudies = JSON.parse(await readFile(path.resolve('src/data/caseStudies.json'), 'utf8'));
pages.push(...caseStudies.map(c => ({ route: `case-studies/${c.slug}`, title: c.seoTitle, description: c.seoDescription })));

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const template = await readFile(path.join(outDir, 'index.html'), 'utf8');

// Prerender each route's body with jsdom globals so crawlers get full HTML without JavaScript.
const { JSDOM } = await import('jsdom');
const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', { url: `${site}/` });
dom.window.matchMedia ??= () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
for (const key of ['window', 'document', 'navigator', 'localStorage', 'HTMLElement', 'Node', 'getComputedStyle', 'matchMedia']) {
  Object.defineProperty(globalThis, key, { value: dom.window[key], configurable: true, writable: true });
}
const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
const prerender = (html, url) => html.replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
await writeFile(path.join(outDir, 'index.html'), prerender(template, '/'));
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
  await writeFile(destination, prerender(html, `/${page.route}/`));
}

console.log(`Created ${pages.length} GitHub Pages route documents.`);

const legacyRoutes = [
  { from: 'work', to: 'case-studies' },
  { from: 'work/ecommerce-search-performance', to: 'case-studies/ecommerce-search-performance' },
  { from: 'work/local-search-review', to: 'case-studies/local-search-review' },
  { from: 'work/ecommerce-visibility-sales', to: 'case-studies/ecommerce-visibility-sales' },
];

for (const route of legacyRoutes) {
  const destination = path.join(outDir, route.from, 'index.html');
  const target = `${site}/${route.to}/`;
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,follow" />
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0;url=${target}" />
    <title>Case study page moved | Rajesh Tudu</title>
    <script>window.location.replace(${JSON.stringify(target)} + window.location.search + window.location.hash);</script>
  </head>
  <body>
    <p>This page has moved. <a href="${target}">Continue to the case study page</a>.</p>
  </body>
</html>`;
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

console.log(`Created ${legacyRoutes.length} legacy case-study redirects.`);

// Sitemap: add any page route (including new case studies) that public/sitemap.xml does not list yet.
const sitemapPath = path.join(outDir, 'sitemap.xml');
let sitemap = await readFile(sitemapPath, 'utf8');
const today = new Date().toISOString().slice(0, 10);
const missing = pages.map(p => `${site}/${p.route}/`).filter(u => !sitemap.includes(`<loc>${u}</loc>`));
if (missing.length) {
  sitemap = sitemap.replace('</urlset>', missing.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>');
  await writeFile(sitemapPath, sitemap);
}
console.log(`Sitemap: added ${missing.length} new URL(s).`);
