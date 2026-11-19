import data from './caseStudies.json';

export type CaseStudy = {
  slug: string; date: string; category: string; industry: string; type: string;
  title: string; summary: string; headline: { value: string; label: string };
  readings: [string, string][]; sourceLabel: string; seoTitle: string; seoDescription: string;
  intro: string; question: string; period: string; source: string; reviewed: string[];
  metrics: { label: string; value: string; comparison: string }[];
  interpretation: string; limitations: string; image: string | null; imageAlt: string;
};

// Add a case study by adding one object to caseStudies.json. Pages, cards, SEO tags,
// prerendering and the sitemap all read from it. Newest first.
export const caseStudies = (data as CaseStudy[]).slice().sort((a, b) => b.date.localeCompare(a.date));
export const caseCategories = [...new Set(caseStudies.map(c => c.category))];
export const getCaseStudy = (slug?: string) => caseStudies.find(c => c.slug === slug);
