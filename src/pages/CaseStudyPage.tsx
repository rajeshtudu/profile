import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageFrame from '@/components/PageFrame';

const studies = {
  'ecommerce-search-performance': {
    type: 'E-commerce SEO · anonymized · 2025',
    title: 'Reading the gap between search visibility and clicks',
    intro: 'A Search Console review of an e-commerce site, comparing overall performance and key page types across two three-month periods.',
    source: 'Google Search Console screenshots supplied for Jun 9–Sep 16, 2025 compared with Mar 1–Jun 8, 2025. Page-type filters covered product, collection, and blog URLs.',
    metrics: [['Sitewide impressions', '883K', '1.16M'], ['Sitewide clicks', '5.84K', '5.73K'], ['Average position', '26.7', '26.2']],
    work: ['Compared sitewide totals between the two periods.', 'Reviewed performance by product, collection, and blog page type.', 'Flagged the visibility-to-click gap and differences across page groups for follow-up.'],
    finding: 'Sitewide impressions rose 31% while clicks were 2% lower. Average position moved from 26.7 to 26.2. In page-filtered views, product clicks rose 46% and collection clicks rose 43%, while blog clicks fell 24%.',
    caveat: 'Search Console page-filtered totals may be partial. These comparisons describe observed movement and do not establish that a particular SEO change caused it.',
  },
  'local-search-review': {
    type: 'Home services · local SEO · anonymized · 2024',
    title: 'Reviewing local page work alongside organic outcomes',
    intro: 'A monthly review connected the pages receiving work with sitewide Search Console performance and organic key events recorded in Analytics.',
    source: 'Google Search Console and GA4 report, Aug–Sep 2024. The project and website name are withheld.',
    metrics: [['Sitewide impressions', 'Previous month', '+20.90%'], ['Sitewide GSC clicks', 'Previous month', '+2.33%'], ['GA4 organic key events', 'Previous month', '+8.11%']],
    work: ['Compared month-over-month Search Console clicks and impressions.', 'Separated results for pages receiving work from sitewide totals.', 'Reviewed organic key events in GA4 alongside visibility changes.'],
    finding: 'Pages receiving work recorded 24.26% more impressions. Sitewide impressions increased 20.90%, clicks increased 2.33%, and organic key events increased 8.11%.',
    caveat: 'This is a month-to-month comparison. The report does not isolate SEO as the cause, and seasonal or other site changes may have contributed.',
  },
} as const;

export default function CaseStudyPage() {
  const { caseSlug } = useParams();
  const study = caseSlug ? studies[caseSlug as keyof typeof studies] : undefined;
  if (!study) return <Navigate to="/work" replace/>;
  return <PageFrame kicker={study.type} title={study.title} intro={study.intro} next={false}>
    <div className="container-custom case-study-detail">
      <section className="case-study-block"><p className="section-kicker">Context</p><h2>What I reviewed</h2><p>{study.intro}</p><p>{study.source}</p></section>
      <section className="case-study-block"><p className="section-kicker">Comparison</p><h2>Reported performance</h2><div className="grid md:grid-cols-3 gap-3 mt-6">{study.metrics.map(([label, before, after])=><article className="paper-card p-5" key={label}><p className="text-xs text-muted-foreground">{label}</p><div className="flex items-baseline justify-between gap-2 mt-5"><span className="text-sm text-muted-foreground">{before}</span><span aria-hidden="true">→</span><span className="text-lg font-semibold">{after}</span></div><p className="text-[10px] text-muted-foreground mt-3">Earlier period → later period</p></article>)}</div></section>
      <section className="case-study-block"><p className="section-kicker">Work documented</p><h2>What I did</h2><ul>{study.work.map(point=><li key={point}>{point}</li>)}</ul></section>
      <section className="case-study-block"><p className="section-kicker">Observed result</p><h2>What changed in the data</h2><p>{study.finding}</p><aside className="case-study-caveat"><strong>How to read this:</strong> {study.caveat}</aside></section>
      <div className="case-study-actions"><Link to="/work" className="project-link inline-flex items-center gap-2"><ArrowLeft size={15}/> All work</Link><Link to="/contact" className="project-link inline-flex items-center gap-2">Discuss a similar question <ArrowUpRight size={15}/></Link></div>
    </div>
  </PageFrame>;
}
