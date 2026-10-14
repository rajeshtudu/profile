# Portfolio site architecture

## Direction

Build a clear, internationally legible professional profile for Rajesh Tudu as an SEO Specialist at Enfity. His experience includes working as an e-commerce SEO specialist and SEO work across SaaS, health, insurance, mortgage, B2B, professional services, and other niches. Semantic SEO and entity SEO connect his work across on-page, off-page, local, technical, and e-commerce disciplines. The homepage should state both the e-commerce specialization and wider industry experience clearly, then show supporting evidence and a direct contact path.

For the hero, use the eyebrow for the current SEO role and semantic/entity focus. Keep the H1 short (“SEO across industries”); the supporting copy should explicitly say that Rajesh has worked as an e-commerce SEO specialist and has also done SEO work in SaaS, health, insurance, mortgage, B2B, professional services, and more. Keep the list easy to scan, then explain the connection to his broader SEO disciplines without repeating the list in the next section.

Use global references for patterns, not templates to copy. Aleyda Solís's site connects a clear specialist identity to consulting, proof, resources, and contact. The ONENINE studio project by Siya Lai demonstrates the value of separate Work, Services, News, and About destinations. Google's guidance supports a logical structure, relevant internal links, and concise anchor text. These patterns fit this portfolio better than adding many near-identical service pages.

## Recommended sitemap

Keep the homepage as a concise editorial overview and primary landing page. Its section sequence is: positioning and contact CTAs; brief practice introduction; a concrete list of the niches Rajesh has worked in and how this changes the SEO approach; two evidence-led case-study previews; interactive process model from search research through implementation, authority, and measurement; compact SEO-discipline index; one contact close. Keep full service descriptions, experience, skills, and case-study evidence on their dedicated pages rather than repeating them on the homepage.

Keep the current sitemap:

- `/profile/` — Positioning, brief bio, service overview, selected proof, process, and a clear contact path.
- `/profile/about/` — Experience, approach, credentials, tools, and a fuller account of how semantic and entity thinking informs the wider SEO disciplines.
- `/profile/services/` — Service overview and scoping guide. Add dedicated pages only when there is enough distinct expertise, examples, and useful guidance to support them.
- `/profile/work/` — Case-study index, with filters only if the number of substantial studies justifies them.
- `/profile/work/{case-study}/` — One page per evidence-backed project. State the scope, timeframe, source, what was done, observed changes, limitations, and the role of other factors. Keep client and site names anonymized where requested.
- `/profile/contact/` — Contact options and a short inquiry form or direct email route.
- `/profile/insights/` — Optional later section for original articles, frameworks, or research notes. Launch only when there is a realistic publishing plan.

Potential service detail pages, in priority order, are semantic and entity SEO, e-commerce and Shopify SEO, local SEO, on-page SEO, off-page SEO, and technical SEO. Treat these as candidates, not a mandate to publish six thin pages. Each page should answer a distinct buyer need and include its own process, deliverables, fit, evidence, and next step.

## Navigation and page relationships

Use a short global navigation: About, Services, Work, Contact, with Insights added once useful. Keep the homepage sections concise and link to the deeper page for detail. Group Services by the problem addressed, then state typical outputs so visitors can compare the work. Put clear, context-specific actions near the top of each page: home leads to Work or Contact; niche experience invites a market-specific conversation; About leads to Work or Contact; Services leads to a project discussion or evidence; Work leads to a relevant case study or Contact; each case study offers a similar-project conversation; Contact offers direct email. Repeat an action near the end only when it helps someone who has read the full page, and avoid stacking identical generic prompts. Link each service page to relevant case studies and every page to Contact. Use descriptive link text such as “View the Shopify SEO case study,” rather than “Learn more.” Add breadcrumbs to inner pages and include the active page in the document title and one clear H1.

The portfolio is not a service-area directory. Do not create country or city landing pages unless Rajesh actually serves those markets in a distinct, supportable way. Keep his real location and role accurate while presenting the work to an international audience.

## Technical approach for GitHub Pages

The site uses Vite and React Router at the GitHub Pages project path `/profile/`. The production build creates physical `index.html` files for each known route so GitHub Pages can serve direct visits and refreshes. The route documents have unique titles, descriptions, canonicals, social metadata, and WebPage markup. React renders the page content after load, so a later rendering review should confirm how the deployed pages appear to crawlers and in no-JavaScript contexts. Keep the `/profile/` base path in the router, asset URLs, canonical URLs, sitemap, and internal links. Add only published canonical pages to `public/sitemap.xml`.

Current routes:

- `/profile/` — homepage overview.
- `/profile/about/` — experience, training, and developing approach.
- `/profile/services/` — SEO disciplines and scope.
- `/profile/work/` — case-study index and evidence notes.
- `/profile/work/ecommerce-search-performance/` and `/profile/work/local-search-review/` — individual anonymized case studies.
- `/profile/contact/` — contact details.

## Content standards

- Keep claims tied to records; distinguish observed movement from proven causation.
- Give each case study a consistent evidence block: source, date range, scope, work, result, and caveat.
- Keep brands and domains out of anonymized case studies and screenshots when requested.
- Avoid duplicating the homepage introduction across About and Services. Each page should add depth rather than repeat positioning.
- Prefer a small number of complete, useful pages over many pages made by swapping service keywords.
- Make scrolling effects progressive enhancement: content remains readable with reduced motion, keyboard use, and JavaScript limitations.

## Build sequence

1. Keep each page specific and grounded in verifiable work. Expand a case study only when its records and screenshots are ready.
2. Review deployed direct URLs, page titles, headings, mobile layout, accessibility, reduced motion, and rendered HTML.
3. Add Insights only when original articles or research notes are ready to publish; then update sitemap and internal links.

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
