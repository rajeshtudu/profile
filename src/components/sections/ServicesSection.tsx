import { motion } from 'framer-motion';
import { ArrowUpRight, ScanSearch, Network, ShoppingBag, MapPin, Link2, FileSearch, Braces } from 'lucide-react';

const services = [
  { icon: Network, number: '01', title: 'Semantic SEO & topical strategy', description: 'Map audience intent, topics, entities and relationships into content priorities, topical maps and connected site architecture.' },
  { icon: FileSearch, number: '02', title: 'Keyword & audience research', description: 'Understand the questions, language and needs behind searches; turn findings into page targets and useful content briefs.' },
  { icon: ScanSearch, number: '03', title: 'On-page SEO & content', description: 'Improve page focus, content coverage, headings, metadata and internal links so each page serves a clear search need.' },
  { icon: Link2, number: '04', title: 'Off-page SEO & authority', description: 'Review backlink profiles, find relevant link opportunities and support ethical authority-building activity.' },
  { icon: MapPin, number: '05', title: 'Local SEO', description: 'Improve local visibility through business profile optimization, local intent research, citations and useful location pages.' },
  { icon: ShoppingBag, number: '06', title: 'E-commerce & Shopify SEO', description: 'Strengthen product and collection discovery through taxonomy, content, internal linking and technical foundations.' },
  { icon: Braces, number: '07', title: 'Technical SEO & structured data', description: 'Address crawlability, indexation, site structure and relevant schema so search engines can access and interpret key pages.' },
];

const ServicesSection = () => <section id="services" className="section-padding">
  <div className="container-custom">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">03 — How I can help</p><h2 className="section-heading">SEO across the<br/><em>whole search journey.</em></h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">Semantic research connects the disciplines. From understanding search intent and planning site architecture to improving content, local visibility, authority and technical foundations, I bring the right SEO work together around your goals.</p>
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
