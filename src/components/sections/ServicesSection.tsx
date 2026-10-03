import { motion } from 'framer-motion';
import { ArrowUpRight, ScanSearch, Network, FileSearch, ShoppingBag, Braces, ChartNoAxesCombined } from 'lucide-react';

const services = [
  { icon: ScanSearch, number: '01', title: 'Technical SEO audits', description: 'Find crawl, indexation, site structure and performance issues, then get a prioritized plan to address them.' },
  { icon: Network, number: '02', title: 'Semantic SEO research', description: 'Map topics, entities and search intent to build stronger topical coverage and clearer content relationships.' },
  { icon: FileSearch, number: '03', title: 'Keyword & content research', description: 'Discover relevant queries and content opportunities, organized around what your audience is trying to do.' },
  { icon: ChartNoAxesCombined, number: '04', title: 'On-page optimization', description: 'Improve page structure, internal links, metadata and content relevance to make useful pages easier to find.' },
  { icon: ShoppingBag, number: '05', title: 'E-commerce SEO', description: 'Improve product and collection discoverability, site architecture and organic search foundations for online stores.' },
  { icon: Braces, number: '06', title: 'Schema & structured data', description: 'Plan and implement relevant structured data to help search engines understand your pages and entities.' },
];

const ServicesSection = () => <section id="services" className="section-padding">
  <div className="container-custom">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">03 — How I can help</p><h2 className="section-heading">Focused SEO<br/><em>services.</em></h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">Practical, research-led support for improving organic visibility. Each engagement starts with your goals, your site and the people you want to reach.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
      {services.map((service, index) => <motion.article key={service.number} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}} className="border-r border-b border-border p-6 md:p-7 min-h-56 group hover:bg-secondary/40 transition-colors">
        <div className="flex justify-between items-start"><span className="font-mono text-[10px] tracking-widest text-primary">{service.number}</span><service.icon size={19} className="text-muted-foreground group-hover:text-primary transition-colors"/></div>
        <h3 className="text-lg font-semibold mt-8">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-6 mt-3">{service.description}</p>
      </motion.article>)}
    </div>
    <a href="#contact" className="project-link inline-flex items-center gap-2 mt-8 text-sm font-semibold">Discuss a project <ArrowUpRight size={16}/></a>
  </div>
</section>;

export default ServicesSection;
