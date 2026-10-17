import { motion } from 'framer-motion';
import { ArrowUpRight, ScanSearch, Network, ShoppingBag, MapPin, Link2, Braces, ClipboardList, ChartNoAxesCombined, Workflow } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const services = [
  { icon: Network, number: '01', track: '01', title: 'Semantic & entity SEO', description: 'Map search intent, topics, entities, and attributes to page roles. Use the map to find missing coverage, overlapping URLs, and useful internal links.', output: 'Topic and entity map + URL-level plan' },
  { icon: ClipboardList, number: '02', track: '01', title: 'SEO audits & prioritization', description: 'Review crawlability, indexation, content, internal links, local visibility, and off-page signals. Rank findings by business relevance, effort, and dependencies.', output: 'Evidence-led audit + sequenced actions' },
  { icon: ScanSearch, number: '03', track: '02', title: 'On-page SEO & content', description: 'Improve priority pages against their search intent with page briefs, title and heading recommendations, content gaps, internal links, and clearer page purpose.', output: 'Page briefs + optimization recommendations' },
  { icon: Braces, number: '04', track: '02', title: 'Technical SEO', description: 'Check crawl and indexation signals, canonicals, redirects, XML sitemaps, structured data, rendering, and performance. Prepare prioritized findings for implementation.', output: 'Technical review + implementation priorities' },
  { icon: Link2, number: '05', track: '03', title: 'Off-page SEO', description: 'Review backlink quality, competitor link gaps, and relevant brand or publication opportunities. Build an outreach direction around relevance rather than raw link volume.', output: 'Link profile review + opportunity plan' },
  { icon: MapPin, number: '06', track: '03', title: 'Local SEO', description: 'Review Google Business Profile information, local search intent, citations, review processes, and location or service-area pages for the markets you serve.', output: 'Local visibility review + action plan' },
  { icon: ShoppingBag, number: '07', track: '03', title: 'E-commerce SEO', description: 'Plan product and category relationships, collection pages, filters, internal links, and crawlable catalog paths around how people search and shop.', output: 'Catalog map + template priorities' },
  { icon: ChartNoAxesCombined, number: '08', track: '04', title: 'SEO measurement & reporting', description: 'Set a baseline and report agreed search and business measures using available Search Console, analytics, and ranking data, with periods and limitations stated.', output: 'Measurement plan + recurring report' },
  { icon: Workflow, number: '09', track: '04', title: 'SEO workflow automation', description: 'Identify repetitive reporting and QA tasks, then define or build automations for data handoffs, alerts, and recurring checks where the site and tool stack allow.', output: 'Automation workflow + review controls' },
];

const tracks = [
  { number: '01', title: 'Research & prioritize', description: 'Connect search intent and entities to page roles, then decide what deserves attention first.' },
  { number: '02', title: 'Improve pages & site health', description: 'Make key pages more useful and address technical barriers to discovery and indexing.' },
  { number: '03', title: 'Build relevant visibility', description: 'Support authority, local discovery, and product searches with work matched to the market.' },
  { number: '04', title: 'Measure & streamline', description: 'Track agreed outcomes and reduce repeat reporting or quality-check work where automation fits.' },
];

const ServicesSection = () => <section id="services" className="section-padding">
  <div className="container-custom">
    <ScrollReveal><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">Areas of work</p><h2 className="section-heading">What I can work on</h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">A service can address one defined problem or connect several disciplines. Each scope identifies the pages, data sources, deliverables, implementation responsibilities, and measures agreed for the engagement.</p>
    </div></ScrollReveal>
    <div className="service-track-list">
      {tracks.map((track, trackIndex) => <section className="service-track" key={track.number}>
        <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="service-track-intro">
          <span className="font-mono text-[10px] tracking-widest text-primary">TRACK {track.number}</span>
          <h3>{track.title}</h3>
          <p>{track.description}</p>
        </motion.div>
        <div className="service-track-items">
          {services.filter(service => service.track === track.number).map((service, index) => <motion.article key={service.number} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(trackIndex * 2 + index)*.05}} className="service-item">
            <div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="font-mono text-[10px] text-muted-foreground">{service.number}</span><service.icon size={17} className="text-primary"/></div></div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className="service-deliverable"><span>Typical output</span><strong>{service.output}</strong></div>
          </motion.article>)}
        </div>
      </section>)}
    </div>
    <div className="service-contact-band mt-9"><div><p className="section-kicker">Start with the question</p><h3>What is holding organic search back?</h3><p>Share the site, the goal, and what you have already tried. I’ll use that context to suggest a focused next step.</p></div><Link to="/contact" className="button-primary">Discuss your SEO needs <ArrowUpRight size={16}/></Link></div>
  </div>
</section>;

export default ServicesSection;
