import { motion } from 'framer-motion';
import { ArrowUpRight, FileCheck2, TrendingUp, Map, ShoppingBag } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const publicBase = window.location.pathname === '/profile' || window.location.pathname.startsWith('/profile/') ? '/profile' : '';
import { Link } from 'react-router-dom';

const cases = [
  {
    number: '01',
    slug: 'ecommerce-search-performance',
    kind: 'E-commerce SEO · anonymized · 2025',
    title: 'Finding the click opportunity behind rising visibility',
    context: 'A Google Search Console comparison for an e-commerce site showed impressions rising faster than clicks. Page-type views revealed stronger product and collection clicks, alongside a decline in blog clicks.',
    work: ['Compared Search Console sitewide totals across two periods', 'Split product, collection and blog performance to find the visibility-to-click gap'],
    readings: [['Impressions', '+31%'], ['Clicks', '−2%'], ['Avg. position', '26.2']],
    resultLabel: 'Google Search Console · Jun 9–Sep 16, 2025 vs Mar 1–Jun 8, 2025',
    evidenceNote: 'Sitewide: impressions 883K → 1.16M; clicks 5.84K → 5.73K; average position 26.7 → 26.2. Product clicks rose 46%, collection clicks 43%, and blog clicks fell 24%. Page-filtered GSC totals may be partial, so category figures are directional. Source: supplied Search Console screenshots.',
    image: null,
    linkLabel: 'Read the case study',
    icon: TrendingUp,
  },
  {
    number: '02',
    slug: 'local-search-review',
    kind: 'Home services · local SEO · anonymized · 2024',
    title: 'Connecting local page work to organic outcomes',
    context: 'A monthly review of an anonymized home-services project tracked sitewide search performance, the pages receiving work, and organic key events.',
    work: ['Compared Search Console clicks and impressions month over month', 'Separated performance for the pages receiving work from sitewide totals', 'Reviewed GA4 organic key events alongside search visibility'],
    readings: [['Impressions', '+20.9%'], ['GSC clicks', '+2.3%'], ['GA4 key events', '+8.1%']],
    resultLabel: 'Google Search Console + GA4 · Aug–Sep 2024',
    evidenceNote: 'Pages worked: +24.26% impressions. Sitewide GSC: +20.90% impressions and +2.33% clicks; GA4 organic key events: +8.11%. Month-to-month comparison; the report does not isolate SEO as the cause.',
    image: null,
    linkLabel: 'Read the case study',
    icon: Map,
  },
  {
    number: '03',
    slug: 'ecommerce-visibility-sales',
    kind: 'E-commerce SEO · anonymized · 2024–2025',
    title: 'Reading search visibility alongside organic sales',
    context: 'An archived performance report brings Search Console clicks and impressions together with organic sales totals for one e-commerce project.',
    work: ['Reviewed reported Search Console clicks and impressions alongside organic sales totals', 'Compared the recorded outcomes with the prior period referenced in the report'],
    readings: [['Clicks', '+31.84%'], ['Impressions', '+113.06%'], ['Organic sales', '+45%']],
    resultLabel: 'Google Search Console + sales report · Jun 2024–Jan 2025',
    evidenceNote: 'Reported totals: 42K clicks, 1.22M impressions, and £64.1K organic sales. The report states percentage change against its previous period. These totals do not establish the effect of an individual SEO action.',
    image: `${publicBase}/case-studies/ecommerce-visibility-sales.png`,
    linkLabel: 'View the performance snapshot',
    icon: TrendingUp,
  },
];

const CaseStudiesSection = () => <section id="case-studies" className="section-padding bg-secondary/40">
  <div className="container-custom">
    <ScrollReveal><div className="max-w-3xl mb-12">
      <p className="section-kicker mb-5">04 — Selected work</p>
      <h2 className="section-heading">SEO case studies and work samples</h2>
      <p className="text-muted-foreground leading-7 mt-5">Anonymized project snapshots pair documented work with the source and period for each metric. The Shopify example is a planning sample, not a client case study.</p>
    </div></ScrollReveal>

    <div className="grid xl:grid-cols-2 gap-5">
      {cases.map((item, index) => <motion.article key={item.number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="paper-card overflow-hidden flex flex-col">
        <div className="p-6 sm:p-7 lg:p-8 min-w-0">
          <div className="flex items-start justify-between gap-4 min-w-0"><p className="section-kicker min-w-0 break-words">{item.number} / {item.kind}</p><item.icon size={19} className="text-primary shrink-0"/></div>
          {item.image && <img src={item.image} alt="An anonymized e-commerce report showing 42 thousand clicks, 1.22 million impressions, and 64.1 thousand pounds in organic sales" width={1200} height={900} loading="lazy" className="mt-6 block w-full max-h-72 bg-[#f3efe7] object-contain"/>}
          <h3 className="font-sans font-semibold text-2xl md:text-3xl leading-tight mt-6 max-w-xl">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-6 mt-4">{item.context}</p>
          <div className="grid xl:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-8 mt-8 min-w-0">
            <div className="min-w-0"><h4 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Work documented</h4><ul className="grid gap-3">{item.work.map(point => <li key={point} className="flex gap-2 text-sm leading-5"><FileCheck2 size={15} className="text-primary shrink-0 mt-0.5"/><span className="min-w-0">{point}</span></li>)}</ul></div>
            <div className="min-w-0"><h4 className="font-mono text-[10px] uppercase tracking-widest leading-4 text-primary mb-4 break-words">{item.resultLabel}</h4><div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-2">{item.readings.map(([month, value]) => <div key={month} className="min-w-0 border border-border px-2 sm:px-3 py-3"><span className="block font-serif text-base sm:text-xl tabular-nums tracking-tight">{value}</span><span className="block text-[10px] text-muted-foreground mt-1">{month}</span></div>)}</div><p className="text-[11px] leading-5 text-muted-foreground mt-3 [overflow-wrap:anywhere]">{item.evidenceNote}</p></div>
          </div>
          <Link to={`/work/${item.slug}`} className="project-link inline-flex items-center gap-2 mt-6 text-sm font-semibold">{item.linkLabel} <ArrowUpRight size={15}/></Link>
        </div>
      </motion.article>)}
    </div>

    <motion.article initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="paper-card mt-5 grid lg:grid-cols-[.65fr_1.35fr] overflow-hidden">
      <div className="bg-foreground text-background p-7 md:p-9 flex flex-col justify-between">
        <div><p className="text-primary font-mono text-[10px] uppercase tracking-widest">Work sample · Shopify</p><h3 className="font-sans font-semibold text-2xl md:text-3xl leading-tight mt-5">Make the catalog make sense.</h3></div>
        <ShoppingBag size={23} className="text-primary mt-8"/>
      </div>
      <div className="p-7 md:p-9"><p className="text-sm text-muted-foreground leading-6 max-w-2xl">For ecommerce sites, I map products to collections and search intent, then plan collection and product page content, internal links, and filter structure. The goal is a catalog that is easier for customers to navigate and easier for search engines to understand.</p><div className="flex flex-wrap gap-2 mt-6">{['Product-to-collection mapping','Collection page planning','Internal linking','Filter architecture'].map(item=><span key={item} className="px-3 py-2 border border-border text-xs text-muted-foreground">{item}</span>)}</div></div>
    </motion.article>

    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-xs leading-5 text-muted-foreground max-w-2xl">Client and website names are withheld. The figures come from archived campaign reports and should be read as reported outcomes, not proof that one SEO action caused the change.</p>
      <Link to="/contact" className="project-link inline-flex items-center gap-2 text-sm font-semibold">Discuss an SEO challenge <ArrowUpRight size={15}/></Link>
    </div>
  </div>
</section>;

export default CaseStudiesSection;
