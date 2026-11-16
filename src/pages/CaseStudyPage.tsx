import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageFrame from '@/components/PageFrame';

const publicBase = window.location.pathname === '/profile' || window.location.pathname.startsWith('/profile/') ? '/profile' : '';

const studies = {
  'ecommerce-search-performance': {
    type: 'E-Commerce SEO · Anonymized · 2025',
    title: 'Search Visibility Rose, but E-Commerce Clicks Barely Moved',
    intro: 'A Google Search Console review compared sitewide performance with product, collection, and blog page trends. Impressions increased overall while clicks remained nearly flat, with different patterns across page types.',
    question: 'Did increased search visibility translate into more clicks, and did product, collection, and blog pages move in the same direction?',
    period: 'June 9–September 16, 2025, compared with March 1–June 8, 2025',
    source: 'Google Search Console screenshots supplied for the project. Page-type comparisons used product, collection, and blog URL filters.',
    reviewed: ['Compared sitewide clicks, impressions, and average position across the two periods.', 'Reviewed Search Console results separately for product, collection, and blog pages.', 'Identified the difference between overall visibility growth and page-type click movement for follow-up.'],
    metrics: [
      { label: 'Search impressions', value: '1.16M', comparison: '883K previously · +31%' },
      { label: 'Search clicks', value: '5.73K', comparison: '5.84K previously · −2%' },
      { label: 'Average position', value: '26.2', comparison: '26.7 previously' },
      { label: 'Page-type clicks', value: 'Mixed', comparison: 'Products +46% · collections +43% · blogs −24%' },
    ],
    interpretation: 'The site gained impressions and its average position improved modestly, without a matching increase in clicks. Product and collection page clicks rose in the filtered views while blog clicks declined. This pattern makes query mix, click-through rate, and landing-page performance useful next checks before attributing the change to any single page or SEO action.',
    limitations: 'Search Console page-filtered totals may be partial, so the product, collection, and blog comparisons are directional. These period comparisons show what changed in the reports, not what caused it.',
    image: null,
    imageAlt: '',
  },
  'local-search-review': {
    type: 'Local SEO · Home Services · Anonymized · 2024',
    title: 'Local SEO Pages and Organic Search Outcomes',
    intro: 'A monthly review compared pages receiving SEO work with sitewide Search Console performance and organic key events in GA4. Impressions increased across both the selected pages and the broader site.',
    question: 'How did the pages receiving work perform alongside sitewide search results and GA4 organic key events?',
    period: 'August–September 2024, month-over-month',
    source: 'Google Search Console and GA4 reporting supplied for an anonymized home-services project.',
    reviewed: ['Compared Search Console clicks and impressions month over month.', 'Separated results for pages receiving work from sitewide totals.', 'Reviewed GA4 organic key events alongside the search performance figures.'],
    metrics: [
      { label: 'Pages receiving work · impressions', value: '+24.26%', comparison: 'Month over month' },
      { label: 'Sitewide impressions', value: '+20.90%', comparison: 'Month over month' },
      { label: 'Sitewide Search Console clicks', value: '+2.33%', comparison: 'Month over month' },
      { label: 'GA4 organic key events', value: '+8.11%', comparison: 'Month over month' },
    ],
    interpretation: 'The pages receiving work recorded slightly faster impression growth than the site overall. Click growth was smaller, while GA4 organic key events also increased. These parallel measures add context, but they do not connect a specific SEO action to an individual conversion.',
    limitations: 'This is a single month-to-month comparison. Seasonality, changes in demand, site releases, and measurement changes may contribute. The source does not isolate SEO as the cause of the reported movement.',
    image: null,
    imageAlt: '',
  },
  'ecommerce-visibility-sales': {
    type: 'E-Commerce SEO · Anonymized Report Review · 2024–2025',
    title: 'E-Commerce Search Visibility And Organic Sales',
    intro: 'An archived report places Search Console clicks and impressions alongside organic sales for June 2024 through January 2025. All three measures increased in the report, but it does not isolate what drove the changes.',
    question: 'What movement did the report record across search visits, search visibility, and organic sales during its stated period?',
    period: 'June 2024–January 2025; comparison period dates were not provided',
    source: 'An anonymized report graphic based on Google Search Console and sales reporting. The graphic states percentage changes against a previous period but does not give that period’s exact dates.',
    reviewed: ['Reviewed the reported Search Console clicks and impressions alongside organic sales totals.', 'Recorded the reported percentage changes and the stated reporting window.', 'Kept the missing prior-period dates and attribution limits visible in the interpretation.'],
    metrics: [
      { label: 'Search Console clicks', value: '42K', comparison: '+31.84% vs. prior period' },
      { label: 'Search Console impressions', value: '1.22M', comparison: '+113.06% vs. prior period' },
      { label: 'Organic sales', value: '£64.1K', comparison: '+45% vs. prior period' },
    ],
    interpretation: 'The report shows search clicks and impressions increasing alongside reported organic sales. This is a useful performance snapshot, but combined totals do not show which pages or activities contributed to the movement.',
    limitations: 'The exact dates for the previous comparison period are missing from the source visual. The report also does not isolate the effect of an SEO change, so the figures should be read as reported outcomes rather than causal attribution.',
    image: `${publicBase}/case-studies/ecommerce-visibility-sales.png`,
    imageAlt: 'An anonymized report showing 42 thousand Search Console clicks, 1.22 million impressions, and 64.1 thousand pounds in organic sales',
  },
} as const;

export default function CaseStudyPage() {
  const { caseSlug } = useParams();
  const study = caseSlug ? studies[caseSlug as keyof typeof studies] : undefined;

  if (!study) return <Navigate to="/case-studies/" replace />;

  const metricGrid = study.metrics.length === 4 ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-6' : 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-6';

  return <PageFrame
    kicker={study.type}
    title={study.title}
    intro={study.intro}
    actions={[{ label: 'Discuss A Similar SEO Challenge', href: '/contact/', primary: true }, { label: 'All Case Studies', href: '/case-studies/' }]}
    next={false}
  >
    <div className="container-custom case-study-detail">
      <section className="case-study-block">
        <p className="section-kicker">Project Context</p>
        <h2>Question and Scope</h2>
        <p>{study.question}</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="border border-border p-4"><span className="block font-mono text-[10px] uppercase tracking-widest text-primary">Reporting Period</span><strong className="block mt-2 text-sm leading-6">{study.period}</strong></div>
          <div className="border border-border p-4"><span className="block font-mono text-[10px] uppercase tracking-widest text-primary">Source</span><strong className="block mt-2 text-sm leading-6">{study.source}</strong></div>
        </div>
      </section>

      <section className="case-study-block">
        <p className="section-kicker">Documented Review</p>
        <h2>Work Reviewed</h2>
        <ul>{study.reviewed.map(item => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="case-study-block">
        <p className="section-kicker">Reported Measures</p>
        <h2>Performance in the Available Data</h2>
        <div className={metricGrid}>
          {study.metrics.map(metric => <article className="paper-card min-w-0 p-5" key={metric.label}>
            <p className="text-xs leading-5 text-muted-foreground">{metric.label}</p>
            <p className="mt-5 text-2xl font-semibold tabular-nums">{metric.value}</p>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">{metric.comparison}</p>
          </article>)}
        </div>
        {study.image && <figure className="mt-8 max-w-3xl">
          <img src={study.image} alt={study.imageAlt} width={1200} height={900} loading="lazy" className="block h-auto w-full border border-border bg-[#f3efe7]" />
          <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">An anonymized report visual. Its reporting window and comparison limits are noted above.</figcaption>
        </figure>}
      </section>

      <section className="case-study-block">
        <p className="section-kicker">Interpretation</p>
        <h2>Reading the Results</h2>
        <p>{study.interpretation}</p>
        <aside className="case-study-caveat"><strong>Evidence Limitations:</strong> {study.limitations}</aside>
      </section>

      <div className="case-study-actions">
        <Link to="/case-studies/" className="project-link inline-flex items-center gap-2"><ArrowLeft size={15} /> All Case Studies</Link>
        <Link to="/services/" className="project-link inline-flex items-center gap-2">Review SEO Services <ArrowUpRight size={15} /></Link>
        <Link to="/contact/" className="project-link inline-flex items-center gap-2">Discuss A Similar Challenge <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  </PageFrame>;
}
