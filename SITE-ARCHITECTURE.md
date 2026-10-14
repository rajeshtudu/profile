# Portfolio site architecture

## Direction

Build a clear, internationally legible professional profile for Rajesh Tudu as an SEO Specialist at Enfity. His experience includes e-commerce SEO and multi-niche client work at Enfity across SaaS, health, insurance, mortgage, B2B, professional services, and other markets. Semantic SEO and entity SEO inform work across on-page, off-page, local, technical, and e-commerce disciplines. The homepage should state this breadth clearly, then show supporting evidence and a direct contact path.

For the hero, use the eyebrow for the current SEO role, multi-niche scope, and semantic/entity focus. Keep the H1 short (“SEO across industries”). The supporting copy should say that he works across multiple client niches at Enfity and has e-commerce SEO experience. Let the next section name the markets, then explain the differing search journeys without repeating that list in the hero.

Use global references for patterns, not templates to copy. Aleyda Solís's site connects a clear specialist identity to consulting, proof, resources, and contact. The ONENINE studio project by Siya Lai demonstrates the value of separate Work, Services, News, and About destinations. Google's guidance supports a logical structure, relevant internal links, and concise anchor text. These patterns fit this portfolio better than adding many near-identical service pages.

## Recommended sitemap

Keep the homepage as the primary landing page. Its section sequence is: positioning and contact CTAs; brief professional overview; multi-niche experience; a service overview that visually distinguishes semantic/entity research from the SEO disciplines it informs; two evidence-led case-study previews; an interactive process model from search research through implementation, authority, and measurement; selected career history and a grouped CMS/toolkit summary; one contact close. Keep full service descriptions, experience, skills, and case-study evidence on their dedicated pages, with the homepage providing enough substance to make each destination useful to explore.

## Visual semantics and evidence review

Use visible grouping, whitespace, labels, and heading levels to make content relationships legible. Semantic and entity research is presented as a research foundation, with on-page, technical, off-page, local, and e-commerce work grouped as ways that research may be applied. This is a portfolio information architecture choice, not a claim that every project needs every discipline.

The homepage hierarchy is one H1 for Rajesh's position, H2 for each main section, H3 for primary groups, and lower-level headings only for content nested within those groups. Keep the visual prominence in step with that hierarchy. The niche list should show breadth; the case studies should show evidence; process interactions should explain decision stages, not hide essential claims or results. CTAs use destination-specific wording and remain available without animation.

The current proof previews are text-led. Where publication-ready, anonymized reporting visuals are cleared for use, add a chart or report excerpt to the relevant case study with source, period, and caveat visible. Do not use a decorative metric graphic in place of the source evidence.

Research used to guide this review:

- Google's patent [US7913163B1, Determining semantically distinct regions of a document](https://patents.google.com/patent/US7913163B1/en) discusses visually distinct page regions and a hierarchical “chunk tree.” It is a patent describing an invention, not Google Search documentation or a ranking recipe.
- Google's patent [US9367523B2, Using design features to search for page layout designs](https://patents.google.com/patent/US9367523B2/en) describes combining DOM structure with visual cues such as boundaries, fonts, images, colors, and whitespace to identify layout segments. It informs the audit lens, not a required design template.
- Yu et al., [Improving Pseudo-Relevance Feedback in Web Information Retrieval Using Web Page Segmentation](https://www.microsoft.com/en-us/research/publication/improving-pseudo-relevance-feedback-in-web-information-retrieval-using-web-page-segmentation/) presents VIPS as an approach that uses visual cues to segment pages by semantic content structure. The research concerns retrieval/page segmentation, so its practical use here is to keep visual groupings aligned with content relationships.
- Blackmon, [Information scent determines attention allocation and link selection among multiple information patches on a webpage](https://doi.org/10.1080/0144929X.2011.599041), reports that task-to-content semantic similarity shaped attention and link selection in the tested settings. This supports explicit labels and link text that match the destination.
- Google Search Central's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) recommends logical organization, helpful headings, readable content, and descriptive link text. W3C WAI's [Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/) covers semantic regions and logically nested headings for accessible navigation.

These sources support clear regions, semantic grouping, heading order, and recognizable link destinations. They do not identify one universal “best” visual layout. Final judgments about attention and interaction quality require viewport review and, ideally, observation with real visitors.

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
