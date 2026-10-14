import { motion } from 'framer-motion';
import { ArrowUpRight, ScanSearch, Network, ShoppingBag, MapPin, Link2, Braces } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const services = [
  { icon: Network, number: '01', track: '01', title: 'Semantic SEO & search strategy', description: 'Search intent, topic and entity research, query mapping, topical maps, and a prioritized plan for the pages your site needs.', output: 'Topic map + prioritized page plan' },
  { icon: ScanSearch, number: '02', track: '01', title: 'On-page SEO & content', description: 'Page-level research, content briefs, service and product page improvements, internal linking, and clearer information architecture.', output: 'Page briefs + on-page recommendations' },
  { icon: Braces, number: '03', track: '02', title: 'Technical SEO', description: 'Crawl and indexation checks, sitemap and redirect reviews, structured data, site migrations, and prioritized fixes.', output: 'Crawl review + prioritized fixes' },
  { icon: Link2, number: '04', track: '02', title: 'Off-page SEO', description: 'Backlink profile and gap reviews, relevant prospect research, outreach planning, and practical authority-building support.', output: 'Link gap review + opportunities' },
  { icon: MapPin, number: '05', track: '03', title: 'Local SEO', description: 'Google Business Profile audits, local intent research, citation reviews, review workflows, and service-area page recommendations.', output: 'Local visibility audit + action plan' },
  { icon: ShoppingBag, number: '06', track: '03', title: 'E-commerce SEO across CMS platforms', description: 'Product and collection mapping, taxonomy, filter planning, collection content, internal links, and technical SEO checks across platforms such as Shopify and WordPress.', output: 'Catalog structure + page priorities' },
];

const tracks = [
  { number: '01', title: 'Research & improve pages', description: 'Find the search need, shape the site map, and make the right pages more useful.' },
  { number: '02', title: 'Strengthen the site & its authority', description: 'Make important pages discoverable and build relevant signals around them.' },
  { number: '03', title: 'Reach local & product searches', description: 'Connect local intent or a product catalog to clear, useful landing pages.' },
];

const ServicesSection = () => <section id="services" className="section-padding">
  <div className="container-custom">
    <ScrollReveal><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">03 — Services</p><h2 className="section-heading">SEO services</h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">Choose the work you need now or connect the pieces into one plan. Every engagement starts with research, prioritizes work by impact and effort, and ends with clear recommendations or implementation.</p>
    </div></ScrollReveal>
    <div className="service-track-list">
      {tracks.map((track, trackIndex) => <section className="service-track" key={track.number}>
        <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="service-track-intro">
          <span className="font-mono text-[10px] tracking-widest text-primary">TRACK {track.number}</span>
          <h3>{track.title}</h3>
          <p>{track.description}</p>
        </motion.div>
        <div className="service-track-items">
          {services.filter(service => service.track === track.number).map((service, index) => <motion.article key={service.number} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(trackIndex * 2 + index)*.05}} className="service-item group">
            <div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="font-mono text-[10px] text-muted-foreground">{service.number}</span><service.icon size={17} className="text-primary"/></div><ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors"/></div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className="service-deliverable"><span>Typical output</span><strong>{service.output}</strong></div>
          </motion.article>)}
        </div>
      </section>)}
    </div>
    <Link to="/contact" className="project-link inline-flex items-center gap-2 mt-8 text-sm font-semibold">Discuss a project <ArrowUpRight size={16}/></Link>
  </div>
</section>;

export default ServicesSection;
