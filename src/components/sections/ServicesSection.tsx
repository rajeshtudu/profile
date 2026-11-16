import { motion } from 'framer-motion';
import { ArrowUpRight, ScanSearch, Network, ShoppingBag, MapPin, Link2, Braces, ClipboardList, ChartNoAxesCombined, Workflow } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const services = [
  { icon: Network, number: '01', track: '01', title: 'Semantic & Entity SEO', description: 'Organize search demand into topics, entities, attributes, and intent. Map these to existing or planned pages to reveal coverage gaps, URL overlap, and relevant internal-link opportunities.', output: 'Topic map + page-level recommendations' },
  { icon: ClipboardList, number: '02', track: '01', title: 'SEO Audits & Prioritization', description: 'Review indexability, technical health, page relevance, internal links, local presence, and off-page signals against your goals. Separate verified issues from hypotheses, then order the work by impact and effort.', output: 'Prioritized findings + action plan' },
  { icon: ScanSearch, number: '03', track: '02', title: 'On-Page SEO & Content', description: 'Assess priority pages for search intent, page type, titles and headings, topic coverage, usefulness, and internal links. Recommendations reflect the page’s purpose and the people it needs to serve.', output: 'Page briefs + optimization recommendations' },
  { icon: Braces, number: '04', track: '02', title: 'Technical SEO', description: 'Investigate crawling, indexation, site structure, canonicals, redirects, XML sitemaps, structured data, rendering, and performance. Findings are documented with affected URLs and implementation context.', output: 'Technical review + implementation priorities' },
  { icon: Link2, number: '05', track: '03', title: 'Off-Page SEO', description: 'Review backlink quality, referring-site relevance, competitor link profiles, and credible authority opportunities. Build a direction around relevance and trust, not link volume or indiscriminate outreach.', output: 'Link profile review + opportunity plan' },
  { icon: MapPin, number: '06', track: '03', title: 'Local SEO', description: 'Assess local search demand, Google Business Profile details, business information consistency, and location or service-area pages. The review reflects how customers choose a provider in each market.', output: 'Local visibility review + action plan' },
  { icon: ShoppingBag, number: '07', track: '03', title: 'E-Commerce SEO', description: 'Connect products, categories, and collection pages to how shoppers search. Review catalog taxonomy, filters, templates, and internal links across Shopify and other CMS platforms.', output: 'Catalog map + template priorities' },
  { icon: ChartNoAxesCombined, number: '08', track: '04', title: 'SEO Measurement & Reporting', description: 'Set a baseline, choose measures that match the work, and report from available Search Console, analytics, and ranking data. Reports state comparison periods and limitations so results are read in context.', output: 'Measurement plan + evidence-led report' },
  { icon: Workflow, number: '09', track: '04', title: 'SEO Workflow Automation', description: 'Find recurring reporting, data-handling, or quality-check tasks that can be made more consistent. Scope practical automations around your tools, access, and human review requirements.', output: 'Workflow specification + review controls' },
];

const tracks = [
  { number: '01', title: 'Research & Set Priorities', description: 'Connect search intent and entities to page roles, then identify the work that matters first.' },
  { number: '02', title: 'Strengthen Pages & Site Health', description: 'Improve page usefulness and address technical barriers to discovery and indexation.' },
  { number: '03', title: 'Build Relevant Search Visibility', description: 'Support authority, local discovery, and product searches with work matched to the market.' },
  { number: '04', title: 'Measure & Improve The Workflow', description: 'Track agreed outcomes and streamline repeatable work where automation fits.' },
];

const ServicesSection = () => <section id="services" className="section-padding">
  <div className="container-custom">
    <ScrollReveal><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">SEO Disciplines</p><h2 className="section-heading">Services With A Clear Scope And Output</h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">A project can focus on one priority or bring several disciplines together. Before work starts, we define the pages, evidence, deliverables, implementation responsibilities, and measures relevant to your business.</p>
    </div></ScrollReveal>
    <div className="service-track-list">
      {tracks.map((track, trackIndex) => <section className="service-track" key={track.number}>
        <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="service-track-intro">
          <span className="font-mono text-[10px] tracking-widest text-primary">WORKSTREAM {track.number}</span>
          <h3>{track.title}</h3>
          <p>{track.description}</p>
        </motion.div>
        <div className="service-track-items">
          {services.filter(service => service.track === track.number).map((service, index) => <motion.article key={service.number} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(trackIndex * 2 + index)*.05}} className="service-item">
            <div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="font-mono text-[10px] text-muted-foreground">{service.number}</span><service.icon size={17} className="text-primary"/></div></div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className="service-deliverable"><span>Typical Deliverable</span><strong>{service.output}</strong></div>
          </motion.article>)}
        </div>
      </section>)}
    </div>
    <div className="service-contact-band mt-9"><div><p className="section-kicker">Start With The Search Challenge</p><h3>What should your SEO work solve?</h3><p>Share your site, market, goal, and what you have already tried. I’ll review the context and suggest a practical first step.</p></div><Link to="/contact/" className="button-primary">Discuss Your SEO Needs <ArrowUpRight size={16}/></Link></div>
  </div>
</section>;

export default ServicesSection;
