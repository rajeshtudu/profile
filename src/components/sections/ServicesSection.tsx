import { motion } from 'framer-motion';
import { ArrowUpRight, ScanSearch, Network, ShoppingBag, MapPin, Link2, Braces } from 'lucide-react';

const services = [
  { icon: Network, number: '01', title: 'Semantic SEO & search strategy', description: 'Search intent, topic and entity research, query mapping, topical maps, and a prioritized plan for the pages your site needs.', output: 'Research → page plan' },
  { icon: ScanSearch, number: '02', title: 'On-page SEO & content', description: 'Page-level research, content briefs, service and product page improvements, internal linking, and clearer information architecture.', output: 'Briefs → optimized pages' },
  { icon: Link2, number: '03', title: 'Off-page SEO', description: 'Backlink profile and gap reviews, relevant prospect research, outreach planning, and practical authority-building support.', output: 'Audit → opportunity list' },
  { icon: MapPin, number: '04', title: 'Local SEO', description: 'Google Business Profile audits, local intent research, citation reviews, review workflows, and service-area page recommendations.', output: 'Local audit → action plan' },
  { icon: ShoppingBag, number: '05', title: 'E-commerce & Shopify SEO', description: 'Product and collection mapping, taxonomy, filter planning, collection content, internal links, and technical SEO checks.', output: 'Catalog → search-ready structure' },
  { icon: Braces, number: '06', title: 'Technical SEO', description: 'Crawl and indexation checks, sitemap and redirect reviews, structured data, site migrations, and prioritized fixes.', output: 'Audit → prioritized fixes' },
];

const ServicesSection = () => <section id="services" className="section-padding">
  <div className="container-custom">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">03 — Services</p><h2 className="section-heading">One search strategy.<br/><em>Every SEO discipline.</em></h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">Choose the work you need now or connect the pieces into one plan. Every engagement starts with research, prioritizes work by impact and effort, and ends with clear recommendations or implementation.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
      {services.map((service, index) => <motion.article key={service.number} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}} className="border-r border-b border-border p-6 md:p-7 min-h-56 group hover:bg-secondary/40 transition-colors">
        <div className="flex justify-between items-start"><span className="font-mono text-[10px] tracking-widest text-primary">{service.number}</span><service.icon size={19} className="text-muted-foreground group-hover:text-primary transition-colors"/></div>
        <h3 className="text-lg font-semibold mt-8">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-6 mt-3">{service.description}</p>
        <p className="font-mono text-[10px] tracking-wide text-primary mt-5">{service.output}</p>
      </motion.article>)}
    </div>
    <a href="#contact" className="project-link inline-flex items-center gap-2 mt-8 text-sm font-semibold">Discuss a project <ArrowUpRight size={16}/></a>
  </div>
</section>;

export default ServicesSection;
