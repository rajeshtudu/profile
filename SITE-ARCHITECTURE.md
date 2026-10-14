# Portfolio site architecture

## Direction

Build a clear, internationally legible professional profile for Rajesh Tudu as an SEO Specialist at Enfity, with semantic SEO and entity SEO as the connecting strategy across on-page, off-page, local, technical, and e-commerce work. The homepage should help a visitor answer three questions quickly: what Rajesh does, what evidence supports that, and how to start a conversation.

For the hero, keep the H1 to the clear role (“SEO Specialist”), use the eyebrow for Semantic SEO, Entity SEO, and location, and use one short supporting sentence to explain the full range and how the research connects to useful pages. Avoid repeating the job title in that sentence or making “in Semantic & Entity SEO” sound like the only disciplines covered.

Use global references for patterns, not templates to copy. Aleyda Solís's site connects a clear specialist identity to consulting, proof, resources, and contact. The ONENINE studio project by Siya Lai demonstrates the value of separate Work, Services, News, and About destinations. Google's guidance supports a logical structure, relevant internal links, and concise anchor text. These patterns fit this portfolio better than adding many near-identical service pages.

## Recommended sitemap

Keep the current homepage as the overview and primary landing page:

- `/profile/` — Positioning, brief bio, service overview, selected proof, process, and a clear contact path.
- `/profile/about/` — Experience, approach, credentials, tools, and a fuller account of how semantic and entity thinking informs the wider SEO disciplines.
- `/profile/services/` — Service overview and scoping guide. Add dedicated pages only when there is enough distinct expertise, examples, and useful guidance to support them.
- `/profile/work/` — Case-study index, with filters only if the number of substantial studies justifies them.
- `/profile/work/{case-study}/` — One page per evidence-backed project. State the scope, timeframe, source, what was done, observed changes, limitations, and the role of other factors. Keep client and site names anonymized where requested.
- `/profile/contact/` — Contact options and a short inquiry form or direct email route.
- `/profile/insights/` — Optional later section for original articles, frameworks, or research notes. Launch only when there is a realistic publishing plan.

Potential service detail pages, in priority order, are semantic and entity SEO, e-commerce and Shopify SEO, local SEO, on-page SEO, off-page SEO, and technical SEO. Treat these as candidates, not a mandate to publish six thin pages. Each page should answer a distinct buyer need and include its own process, deliverables, fit, evidence, and next step.

## Navigation and page relationships

Use a short global navigation: About, Services, Work, Insights (once useful), Contact. Keep the homepage sections concise and link to the deeper page for detail. Link each service page to relevant case studies; each case study back to the relevant service and to the next useful case; and every page to Contact. Use descriptive link text such as “View the Shopify SEO case study,” rather than “Learn more.” Add breadcrumbs to inner pages and include the active page in the document title and one clear H1.

The portfolio is not a service-area directory. Do not create country or city landing pages unless Rajesh actually serves those markets in a distinct, supportable way. Keep his real location and role accurate while presenting the work to an international audience.

## Technical approach for GitHub Pages

The current deployment is a Vite React app at the project path `/profile/`. `BrowserRouter` routes can work after the app loads, but a normal GitHub Pages host looks for a physical file at a nested URL on direct visits and refreshes. Before publishing inner routes, choose one of these deliberately:

1. **Preferred:** generate a static HTML file for each route during the Vite build (SSG or prerendering). This gives each page a reliable direct URL and its own title, description, canonical, social metadata, and content in the initial HTML.
2. **Fallback:** implement and verify a GitHub Pages `404.html` route-recovery file, with the matching redirect handoff in the app. This is simpler but requires careful query/hash handling and is less clean for page-specific metadata and non-JavaScript access.

Do not add routes before the chosen publishing path is working for direct visits and refreshes. Keep the `/profile/` base path in the router, asset URLs, canonical URLs, sitemap, and internal links. Add only canonical, indexable pages to `public/sitemap.xml`; update `robots.txt` only if crawl rules change. Give every page a unique title, description, H1, canonical URL, and social preview. Use structured data only when it accurately describes visible page content.

## Content standards

- Keep claims tied to records; distinguish observed movement from proven causation.
- Give each case study a consistent evidence block: source, date range, scope, work, result, and caveat.
- Keep brands and domains out of anonymized case studies and screenshots when requested.
- Avoid duplicating the homepage introduction across About and Services. Each page should add depth rather than repeat positioning.
- Prefer a small number of complete, useful pages over many pages made by swapping service keywords.
- Make scrolling effects progressive enhancement: content remains readable with reduced motion, keyboard use, and JavaScript limitations.

## Build sequence

1. Keep the current single-page portfolio polished as the homepage; use it as the content source of truth.
2. Select and implement the GitHub Pages publishing method for real nested routes.
3. Create shared page shell, global navigation, breadcrumbs, footer, metadata helper, and responsive page templates.
4. Publish About, Services, Work index, and Contact after their unique copy and evidence are ready.
5. Migrate each substantial case study into its own page and link it from Work and relevant service pages.
6. Add Insights only when there are original pieces ready to publish; then update sitemap and internal links.
7. Review direct URLs, page titles, headings, mobile layout, accessibility, reduced motion, and rendered HTML before deployment.

## Global reference sites

- [Aleyda Solís](https://www.aleydasolis.com/en/) — specialist positioning, service/contact path, credibility, testimonials, useful resources, and publishing.
- [Umair Salahuddin's SEO portfolio](https://umairsdin.com/portfolio/) — clearly distinguishes implemented case studies from strategic work samples, so visitors can judge the evidence correctly.
- [Anton Anton's SEO work](https://www.antonanton.fr/en/work/) — makes the case-study logic explicit with context, goals, work, and results; useful for keeping project summaries scannable.
- [ONENINE studio case study by Siya Lai](https://siyalight.com/projects/onenine/) — distinct Work, Services, News, and About destinations, described as a focused site architecture.
- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — asks for clear, concise page titles and useful content; it does not prescribe a font or visual style.
- [Google Search Central: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — recommends descriptive, helpful main headings and trustworthy evidence of expertise.
- [Google Search Central: sitelinks and site structure](https://developers.google.com/search/docs/appearance/sitelinks) — logical structure, links to important pages, and concise, relevant anchor text.
- [Google Search Central: sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) — sitemap support for discovery; sitemaps supplement internal links rather than replace them.

These are reference points for specific patterns, not a ranking or an instruction to reproduce their visual design. The case-study contents on commercial agency pages should be treated cautiously; this plan borrows structural ideas, not unverified performance claims.
