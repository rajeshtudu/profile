import { motion } from 'framer-motion';
import { ArrowUpRight, ScanSearch, Network, FileSearch, ShoppingBag, Braces, ChartNoAxesCombined, MapPin, Link2 } from 'lucide-react';

const services = [
  { icon: Network, number: '01', title: 'Semantic SEO & topical strategy', description: 'Research search intent, entities and relationships to build topical maps, content clusters and a coherent site-wide strategy.' },
  { icon: ChartNoAxesCombined, number: '02', title: 'On-page SEO & content', description: 'Improve page intent, content structure, internal links and relevance so pages serve people and fit into the wider topic.' },
  { icon: Link2, number: '03', title: 'Off-page SEO & authority', description: 'Strengthen trust and visibility with thoughtful backlink research, link opportunity analysis and authority-building support.' },
  { icon: MapPin, number: '04', title: 'Local SEO', description: 'Improve local discoverability through location signals, business profile support, local landing pages and consistent information.' },
  { icon: ScanSearch, number: '05', title: 'Technical SEO', description: 'Make sure crawling, indexation, site architecture and page experience support the content and the strategy.' },
  { icon: ShoppingBag, number: '06', title: 'E-commerce SEO', description: 'Connect product and collection pages to customer needs with stronger taxonomy, on-page content and technical foundations.' },
  { icon: FileSearch, number: '07', title: 'Keyword & audience research', description: 'Find the questions, language and needs behind searches to guide useful content and prioritize growth opportunities.' },
  { icon: Braces, number: '08', title: 'Schema & structured data', description: 'Use relevant structured data to clarify page types, products, organizations and entities for search engines.' },
];

const ServicesSection = () => <section id="services" className="section-padding">
  <div className="container-custom">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">03 — How I can help</p><h2 className="section-heading">Focused SEO<br/><em>services.</em></h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">Semantic research informs every part of SEO—from useful content and authority to local visibility and technical foundations. Services can be combined around your goals and audience.</p>
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
