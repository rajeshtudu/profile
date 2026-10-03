import { motion } from 'framer-motion';
import { ArrowUpRight, FileCheck2, TrendingUp, Map, ShoppingBag } from 'lucide-react';

const cases = [
  {
    number: '01',
    kind: 'B2B technology · anonymized · 2022',
    title: 'Connecting mixed search demand to page targets',
    context: 'A B2B technology site had both service-led and informational search demand. Project materials document keyword-to-page mapping, optimization of 50+ pages, on-page work and link-acquisition support.',
    work: ['Mapped service and informational searches to pages', 'Optimized 50+ pages, as recorded in project materials', 'Supported on-page improvements and link acquisition'],
    readings: [['June', '544'], ['July', '1,028'], ['August', '4,895']],
    resultLabel: 'Google Analytics · organic traffic · 2022',
    evidenceNote: 'Monthly report also records Google Search Console clicks rising from 213 to 564, and impressions from 108K to 204K (May–June 2022).',
    icon: TrendingUp,
  },
  {
    number: '02',
    kind: 'Dental SEO · local visibility · anonymized · 2022',
    title: 'Establishing a local ranking baseline across 49 points',
    context: 'A local search campaign tracked one target query across a 49-point grid around its service area. The May 2022 report records the grid setup and a small improvement in average position during the month.',
    work: ['Set up a 49-point local ranking grid, spaced 5 km apart', 'Reviewed Google Business Profile and local search visibility', 'Documented an average grid position change from 6.2 to 5.9 in May 2022'],
    readings: [['June', '16'], ['July', '41'], ['August', '51']],
    resultLabel: 'Google Analytics · organic traffic · 2022',
    evidenceNote: 'The August 2022 monthly report identifies Google Analytics as the source. These are campaign-level observations, not proof that one task caused the change.',
    icon: Map,
  },
];

const CaseStudiesSection = () => <section id="case-studies" className="section-padding bg-secondary/40">
  <div className="container-custom">
    <div className="max-w-3xl mb-12">
      <p className="section-kicker mb-5">04 — Selected work</p>
      <h2 className="section-heading">Show the work.<br/><em>Keep the context.</em></h2>
      <p className="text-muted-foreground leading-7 mt-5">Anonymized project snapshots pair documented work with the source and period for each metric. The Shopify example is a planning sample, not a client case study.</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-5">
      {cases.map((item, index) => <motion.article key={item.number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="paper-card overflow-hidden flex flex-col">
        <div className="p-7 md:p-9">
          <div className="flex items-center justify-between gap-4"><p className="section-kicker">{item.number} / {item.kind}</p><item.icon size={19} className="text-primary shrink-0"/></div>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight mt-6 max-w-xl">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-6 mt-4">{item.context}</p>
          <div className="grid sm:grid-cols-[1.1fr_.9fr] gap-8 mt-8">
            <div><h4 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Work documented</h4><ul className="grid gap-3">{item.work.map(point => <li key={point} className="flex gap-2 text-sm leading-5"><FileCheck2 size={15} className="text-primary shrink-0 mt-0.5"/><span>{point}</span></li>)}</ul></div>
            <div><h4 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">{item.resultLabel}</h4><div className="grid grid-cols-3 gap-2">{item.readings.map(([month, value]) => <div key={month} className="border border-border px-3 py-3"><span className="block font-serif text-xl md:text-2xl">{value}</span><span className="block text-[10px] text-muted-foreground mt-1">{month}</span></div>)}</div><p className="text-[11px] leading-5 text-muted-foreground mt-3">{item.evidenceNote}</p></div>
          </div>
        </div>
      </motion.article>)}
    </div>

    <motion.article initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="paper-card mt-5 grid lg:grid-cols-[.65fr_1.35fr] overflow-hidden">
      <div className="bg-foreground text-background p-7 md:p-9 flex flex-col justify-between">
        <div><p className="text-primary font-mono text-[10px] uppercase tracking-widest">Work sample · Shopify</p><h3 className="font-serif text-2xl md:text-3xl leading-tight mt-5">Make the catalog make sense.</h3></div>
        <ShoppingBag size={23} className="text-primary mt-8"/>
      </div>
      <div className="p-7 md:p-9"><p className="text-sm text-muted-foreground leading-6 max-w-2xl">For ecommerce sites, I map products to collections and search intent, then plan collection and product page content, internal links, and filter structure. The goal is a catalog that is easier for customers to navigate and easier for search engines to understand.</p><div className="flex flex-wrap gap-2 mt-6">{['Product-to-collection mapping','Collection page planning','Internal linking','Filter architecture'].map(item=><span key={item} className="px-3 py-2 border border-border text-xs text-muted-foreground">{item}</span>)}</div></div>
    </motion.article>

    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-xs leading-5 text-muted-foreground max-w-2xl">Client and website names are withheld. The figures come from archived campaign reports and should be read as reported outcomes, not proof that one SEO action caused the change.</p>
      <a href="#contact" className="project-link inline-flex items-center gap-2 text-sm font-semibold">Discuss an SEO challenge <ArrowUpRight size={15}/></a>
    </div>
  </div>
</section>;

export default CaseStudiesSection;
