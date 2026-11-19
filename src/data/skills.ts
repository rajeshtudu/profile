import { BarChart3, Code2, LayoutTemplate, Network, ScanSearch, Search, type LucideIcon } from 'lucide-react';

export type SkillGroup = { icon: LucideIcon; title: string; detail: string; items: string[]; kind: 'skill' | 'tool' };

// Single source for the About skills grid and the homepage toolkit.
export const skillGroups: SkillGroup[] = [
  { kind: 'skill', icon: Network, title: 'Semantic & Entity SEO', detail: 'Planning what a site should cover and how its pages connect, so search engines understand it as one subject.', items: ['Semantic SEO', 'Entity-based SEO', 'Topical maps', 'Topical authority', 'Query networks', 'Entity optimization', 'Internal linking', 'Content briefs', 'Cannibalization analysis', 'AI search visibility'] },
  { kind: 'skill', icon: Search, title: 'Core SEO Disciplines', detail: 'The everyday SEO work that puts the plan into practice across pages, sites and markets.', items: ['Search intent', 'Keyword research', 'On-page SEO', 'Technical SEO', 'Local SEO', 'Off-page SEO', 'E-commerce SEO'] },
  { kind: 'tool', icon: ScanSearch, title: 'Research, Crawling & Schema', detail: 'Investigate demand, competitors, site structure and the entities behind a topic.', items: ['Semrush', 'Ahrefs', 'Screaming Frog', 'Schema.org', 'JSON-LD', 'Wikidata'] },
  { kind: 'tool', icon: BarChart3, title: 'Performance & Reporting', detail: 'Compare visibility, clicks, rankings and key events against a stated baseline.', items: ['Google Search Console', 'Google Analytics 4', 'SE Ranking', 'Google Sheets', 'Excel'] },
  { kind: 'tool', icon: LayoutTemplate, title: 'CMS & Platforms', detail: 'Adapt recommendations and implementation to the site’s CMS and catalog.', items: ['WordPress', 'Shopify', 'Odoo'] },
  { kind: 'tool', icon: Code2, title: 'Automation & Development', detail: 'Build small Python and Streamlit tools for repeatable SERP research and structured-data tasks.', items: ['Python', 'Streamlit', 'Google Search API', 'Web scraping', 'JavaScript', 'React', 'Git', 'MySQL'] },
];
