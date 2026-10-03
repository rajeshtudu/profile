import { motion } from 'framer-motion';
import { ArrowUpRight, FileCheck2, TrendingUp, Map, ShoppingBag } from 'lucide-react';

const examples = [
  {
    label: '01 — Organic growth',
    title: 'Connecting research with page-level improvements',
    type: 'Anonymized B2B technology engagement',
    description: 'Keyword research informed page targets, followed by on-page improvements, content updates and support for link acquisition across priority pages.',
    details: ['50+ pages optimized', 'Traffic counts recorded: 544 in June, 1,028 in July and 4,895 in August'],
    icon: TrendingUp,
    note: 'Counts are transcribed from a project case-study workbook; the sheet does not identify the analytics metric or year. Client and website are withheld.',
  },
  {
    label: '02 — Ecommerce structure',
    title: 'Planning useful paths through a large product catalog',
    type: 'Anonymized ecommerce project',
    description: 'Research and page planning covered product and collection relationships, query-to-page mapping, collection content, internal links and Shopify implementation requirements.',
    details: ['Product and collection mapping', 'Search-led page and content planning'],
    icon: ShoppingBag,
    note: 'A work-scope example from ecommerce SEO projects; no client name, website, or unsupported performance figure is shown.',
  },
  {
    label: '03 — Local visibility',
    title: 'Building a clearer local-search foundation',
    type: 'Anonymized local SEO project',
    description: 'Work included local profile audits, service and location page recommendations, citation review, local keyword research and a prioritized optimization plan.',
    details: ['Google Business Profile review', 'Local landing-page and citation recommendations'],
    icon: Map,
    note: 'A work-scope example based on local SEO audit and optimization workflows; results vary by market and starting point.',
  },
];

const CaseStudiesSection = () => <section id="case-studies" className="section-padding bg-secondary/40">
  <div className="container-custom">
    <div className="max-w-3xl mb-12">
      <p className="section-kicker mb-5">04 — Selected case studies</p>
      <h2 className="section-heading">Research into<br/><em>real SEO work.</em></h2>
      <p className="text-muted-foreground leading-7 mt-5">A few anonymized examples across organic growth, ecommerce and local search. Client and website identities are withheld.</p>
    </div>
    <div className="grid lg:grid-cols-3 gap-5">
      {examples.map((example, index) => <motion.article key={example.label} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="paper-card flex flex-col p-7 md:p-8 min-h-[400px]">
        <div className="flex justify-between items-start"><p className="section-kicker">{example.label}</p><example.icon size={19} className="text-primary"/></div>
        <p className="text-xs text-muted-foreground mt-8">{example.type}</p>
        <h3 className="font-serif text-2xl leading-tight mt-2">{example.title}</h3>
        <p className="text-sm leading-6 text-muted-foreground mt-4">{example.description}</p>
        <ul className="grid gap-2 mt-5">
          {example.details.map(detail => <li key={detail} className="flex gap-2 text-sm"><FileCheck2 size={15} className="text-primary shrink-0 mt-0.5"/><span>{detail}</span></li>)}
        </ul>
        <p className="text-xs leading-5 text-muted-foreground border-t border-border mt-auto pt-5">{example.note}</p>
      </motion.article>)}
    </div>
    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-xs leading-5 text-muted-foreground max-w-2xl">The examples describe work performed and reported outcomes where available. They are not guarantees of future results.</p>
      <a href="#contact" className="project-link inline-flex items-center gap-2 text-sm font-semibold">Discuss a project <ArrowUpRight size={15}/></a>
    </div>
  </div>
</section>;

export default CaseStudiesSection;
