import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageFrame from '@/components/PageFrame';

const publicBase = window.location.pathname === '/profile' || window.location.pathname.startsWith('/profile/') ? '/profile' : '';

const studies = {
  'ecommerce-search-performance': {
    type: 'E-commerce SEO · anonymized · 2025',
    title: 'Reading the gap between search visibility and clicks',
    intro: 'A Search Console review of an e-commerce site, comparing overall performance and key page types across two three-month periods.',
    source: 'Google Search Console screenshots supplied for Jun 9–Sep 16, 2025 compared with Mar 1–Jun 8, 2025. Page-type filters covered product, collection, and blog URLs.',
    metrics: [{ label: 'Sitewide impressions', value: '1.16M', comparison: '883K in the earlier period' }, { label: 'Sitewide clicks', value: '5.73K', comparison: '5.84K in the earlier period' }, { label: 'Average position', value: '26.2', comparison: '26.7 in the earlier period' }],
    work: ['Compared sitewide totals between the two periods.', 'Reviewed performance by product, collection, and blog page type.', 'Flagged the visibility-to-click gap and differences across page groups for follow-up.'],
    finding: 'Sitewide impressions rose 31% while clicks were 2% lower. Average position moved from 26.7 to 26.2. In page-filtered views, product clicks rose 46% and collection clicks rose 43%, while blog clicks fell 24%.',
    caveat: 'Search Console page-filtered totals may be partial. These comparisons describe observed movement and do not establish that a particular SEO change caused it.',
  },
  'local-search-review': {
    type: 'Home services · local SEO · anonymized · 2024',
    title: 'Reviewing local page work alongside organic outcomes',
    intro: 'A monthly review connected the pages receiving work with sitewide Search Console performance and organic key events recorded in Analytics.',
    source: 'Google Search Console and GA4 report, Aug–Sep 2024. The project and website name are withheld.',
    metrics: [{ label: 'Sitewide impressions', value: '+20.90%', comparison: 'vs previous month' }, { label: 'Sitewide GSC clicks', value: '+2.33%', comparison: 'vs previous month' }, { label: 'GA4 organic key events', value: '+8.11%', comparison: 'vs previous month' }],
    work: ['Compared month-over-month Search Console clicks and impressions.', 'Separated results for pages receiving work from sitewide totals.', 'Reviewed organic key events in GA4 alongside visibility changes.'],
    finding: 'Pages receiving work recorded 24.26% more impressions. Sitewide impressions increased 20.90%, clicks increased 2.33%, and organic key events increased 8.11%.',
    caveat: 'This is a month-to-month comparison. The report does not isolate SEO as the cause, and seasonal or other site changes may have contributed.',
  },
  'ecommerce-visibility-sales': {
    type: 'E-commerce SEO · anonymized performance snapshot · 2024–2025',
    title: 'Reading search visibility alongside organic sales',
    intro: 'An archived performance report brings Search Console clicks and impressions together with organic sales totals for one e-commerce project.',
    source: 'Anonymized report graphic based on archived Google Search Console and sales reports. Reporting period shown: June 2024–January 2025. The source compares the figures with its previous period but does not state that period’s exact dates.',
    metrics: [{ label: 'Search Console clicks', value: '+31.84%', comparison: 'vs previous period in the report' }, { label: 'Search Console impressions', value: '+113.06%', comparison: 'vs previous period in the report' }, { label: 'Organic sales', value: '+45%', comparison: 'vs previous period in the report' }],
    work: ['Reviewed reported Search Console clicks and impressions alongside organic sales totals.', 'Compared the recorded outcomes with the previous period referenced in the report.'],
    finding: 'The report records 42K Search Console clicks, 1.22M impressions, and £64.1K in organic sales for the shown period. It reports increases of 31.84%, 113.06%, and 45%, respectively, against its previous period.',
    caveat: 'These are report totals, not proof that one SEO change caused the movement. The previous comparison period’s exact dates and the individual contribution of SEO actions are not available in this visual.',
    image: `${publicBase}/case-studies/ecommerce-visibility-sales.png`,
    workHeading: 'What the report documents',
  },
} as const;

export default function CaseStudyPage() {
  const { caseSlug } = useParams();
  const study = caseSlug ? studies[caseSlug as keyof typeof studies] : undefined;
  if (!study) return <Navigate to="/work" replace/>;
  return <PageFrame kicker={study.type} title={study.title} intro={study.intro} actions={[{ label: 'Discuss a similar challenge', href: '/contact', primary: true }, { label: 'View all work', href: '/work' }]} next={false}>
    <div className="container-custom case-study-detail">
      <section className="case-study-block"><p className="section-kicker">Context</p><h2>What I reviewed</h2><p>{study.intro}</p><p>{study.source}</p></section>
      <section className="case-study-block"><p className="section-kicker">Comparison</p><h2>Reported performance</h2><div className="grid md:grid-cols-3 gap-3 mt-6">{study.metrics.map(metric=><article className="paper-card p-5" key={metric.label}><p className="text-xs text-muted-foreground">{metric.label}</p><p className="text-2xl font-semibold tabular-nums mt-5">{metric.value}</p><p className="text-xs text-muted-foreground mt-3">{metric.comparison}</p></article>)}</div></section>
      {'image' in study && study.image && <figure className="case-study-block"><img src={study.image} alt="An anonymized e-commerce performance report showing 42 thousand clicks, 1.22 million impressions, and 64.1 thousand pounds in organic sales" loading="lazy" className="block w-full h-auto border border-border bg-[#f3efe7]"/><figcaption className="text-sm text-muted-foreground mt-3">An anonymized report visual. The period and comparison limitations are described above.</figcaption></figure>}
      <section className="case-study-block"><p className="section-kicker">Work documented</p><h2>{'workHeading' in study ? study.workHeading : 'What I did'}</h2><ul>{study.work.map(point=><li key={point}>{point}</li>)}</ul></section>
      <section className="case-study-block"><p className="section-kicker">Observed result</p><h2>What changed in the data</h2><p>{study.finding}</p><aside className="case-study-caveat"><strong>How to read this:</strong> {study.caveat}</aside></section>
      <div className="case-study-actions"><Link to="/work" className="project-link inline-flex items-center gap-2"><ArrowLeft size={15}/> All work</Link><Link to="/services" className="project-link inline-flex items-center gap-2">Review SEO services <ArrowUpRight size={15}/></Link><Link to="/contact" className="project-link inline-flex items-center gap-2">Discuss a similar question <ArrowUpRight size={15}/></Link></div>
    </div>
  </PageFrame>;
}
