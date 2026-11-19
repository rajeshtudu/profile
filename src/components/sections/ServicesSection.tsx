import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, Network, ShoppingBag, MapPin, Link2, Braces, ClipboardList, ChartNoAxesCombined, Workflow } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  { icon: Network, number: '01', track: '01', title: 'Entity Research & Topical Maps', description: 'Organize search demand into entities, attributes, topics and intent, then map them to existing or planned pages to reveal coverage gaps, URL overlap and internal-link opportunities.', output: 'Topical map + page-level recommendations' },
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
  { number: '01', title: 'Research & Set Priorities', description: 'Connect search intent and entities to page roles, then decide which work comes ahead of the rest.' },
  { number: '02', title: 'Strengthen Pages & Site Health', description: 'Improve page usefulness and address technical barriers to discovery and indexation.' },
  { number: '03', title: 'Build Relevant Search Visibility', description: 'Support authority, local discovery, and product searches with work matched to the market.' },
  { number: '04', title: 'Measure & Improve the Workflow', description: 'Track agreed outcomes and streamline repeatable work where automation fits.' },
];

const ServicesSection = () => {
  const [active, setActive] = useState(tracks[0].number);
  return <section id="services" className="section-padding" aria-labelledby="services-title">
    <div className="container-custom">
      <ScrollReveal><div className="home-section-head"><div><p className="section-kicker mb-4">Services</p><h2 id="services-title" className="section-heading">Nine SEO Services in Four Workstreams</h2></div><p className="home-section-aside">Nine SEO services sit in four workstreams, and every service starts from the same research into your business and its customers. Select a workstream to see its services and deliverables.</p></div></ScrollReveal>
      <div className="svc-tabs" role="tablist" aria-label="SEO workstreams">
        {tracks.map(t => <button key={t.number} type="button" role="tab" id={'tab-' + t.number} aria-controls={'svc-panel-' + t.number} aria-selected={t.number === active} className={'svc-tab' + (t.number === active ? ' is-active' : '')} onClick={() => setActive(t.number)}>
          <span>{t.number}</span>{t.title}<small>{services.filter(s => s.track === t.number).length} services</small>
        </button>)}
      </div>
      {/* All panels render so every service stays in the static HTML; inactive ones are hidden. */}
      {tracks.map(t => <div key={t.number} id={'svc-panel-' + t.number} role="tabpanel" aria-labelledby={'tab-' + t.number} hidden={t.number !== active} className="svc-panel">
        <h3 className="sr-only">{t.title}</h3>
        <p className="svc-panel-intro">{t.description}</p>
        <div className="svc-grid">
          {services.filter(s => s.track === t.number).map(service => <motion.article key={service.number} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="svc-card">
            <div className="svc-card-head"><span className="skill-icon"><service.icon size={17} aria-hidden="true"/></span><span className="svc-num">{service.number}</span></div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className="svc-output"><span>Typical deliverable</span><strong>{service.output}</strong></div>
          </motion.article>)}
        </div>
      </div>)}
    </div>
  </section>;
};

export default ServicesSection;
