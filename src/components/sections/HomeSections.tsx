import { ArrowDownRight, ArrowUpRight, Compass, MapPinned, Search, Waypoints } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const disciplines = [
  { icon: Search, name: 'Semantic & on-page', detail: 'Intent, topic coverage, page purpose' },
  { icon: Compass, name: 'Off-page & authority', detail: 'Relevant links, trust, discovery' },
  { icon: MapPinned, name: 'Local search', detail: 'Location signals, profiles, service areas' },
  { icon: Waypoints, name: 'Technical & platform SEO', detail: 'Crawlability, site architecture, CMS needs' },
];

const niches = ['E-commerce', 'SaaS', 'Insurance', 'Healthcare', 'B2B', 'Home services', 'Travel & hospitality', 'Professional services'];

const HomeSections = ({ children }: { children?: ReactNode }) => <>
  <section id="about" className="home-intro section-padding">
    <div className="container-custom home-intro-grid">
      <ScrollReveal><div><p className="section-kicker mb-5">A search-first practice</p><h2 className="section-heading">Good SEO starts by understanding what the search is asking for.</h2></div></ScrollReveal>
      <ScrollReveal delay={0.08}><div className="home-intro-copy"><p>I connect the query to the person behind it, the page that should answer it, and the signals that help that page earn visibility.</p><p>My work spans semantic and entity research and the on-page, off-page, local, and technical work that helps sites serve their audiences.</p><Link className="project-link inline-flex items-center gap-2 mt-5" to="/about">A little more about me <ArrowUpRight size={15}/></Link></div></ScrollReveal>
    </div>
  </section>

  <section className="home-niches section-padding" aria-labelledby="niches-title">
    <div className="container-custom home-niches-layout">
      <ScrollReveal><div><p className="section-kicker mb-4">Experience across 5+ niches</p><h2 id="niches-title" className="section-heading">Different markets ask different things of search.</h2></div></ScrollReveal>
      <ScrollReveal delay={0.08}><div className="home-niches-detail"><p>I’ve applied SEO across e-commerce, SaaS, insurance, healthcare, B2B, home services, travel and hospitality, and professional services. Each brings its own audience, search journey, and site needs, so I adapt the research and priorities to the niche rather than reuse one template.</p><div className="home-niche-tags">{niches.map(niche => <span key={niche}>{niche}</span>)}</div></div></ScrollReveal>
    </div>
  </section>

  <section className="home-work section-padding">
    <div className="container-custom">
      <ScrollReveal><div className="home-section-head"><div><p className="section-kicker mb-4">Selected evidence</p><h2 className="section-heading">Search performance, in context.</h2></div><Link className="project-link inline-flex items-center gap-2" to="/work">Browse all work <ArrowUpRight size={15}/></Link></div></ScrollReveal>
      <div className="home-proof-list">
        <ScrollReveal><Link className="home-proof-row" to="/work/ecommerce-search-performance"><span className="home-proof-index">01</span><span className="home-proof-copy"><small>E-commerce · anonymized · 2025</small><strong>Visibility rose. The next question was where clicks followed.</strong><span>Compared sitewide and page-type Search Console data to find distinct product, collection, and blog patterns.</span></span><span className="home-proof-metric"><b>+31%</b><small>impressions</small></span><ArrowUpRight className="home-proof-arrow" size={18}/></Link></ScrollReveal>
        <ScrollReveal delay={0.06}><Link className="home-proof-row" to="/work/local-search-review"><span className="home-proof-index">02</span><span className="home-proof-copy"><small>Home services · local SEO · anonymized · 2024</small><strong>Reading local page movement alongside sitewide outcomes.</strong><span>Reviewed worked-on pages, overall search visibility, and organic key events without overstating cause.</span></span><span className="home-proof-metric"><b>+8.1%</b><small>organic key events</small></span><ArrowUpRight className="home-proof-arrow" size={18}/></Link></ScrollReveal>
      </div>
      <p className="home-proof-note">Anonymized results are reported with their source, comparison period, and limitations.</p>
    </div>
  </section>

  {children}

  <section className="home-disciplines section-padding">
    <div className="container-custom">
      <ScrollReveal><div className="home-section-head"><div><p className="section-kicker mb-4">Areas of practice</p><h2 className="section-heading">SEO works as a connected system.</h2></div><p className="home-section-aside">Each discipline answers a different question. The opportunity is in finding where they connect for the site and its audience.</p></div></ScrollReveal>
      <div className="home-discipline-list">{disciplines.map(({icon: Icon,name,detail},index)=><ScrollReveal key={name} delay={index*.04}><div className="home-discipline-row"><span className="home-discipline-icon"><Icon size={18}/></span><strong>{name}</strong><span>{detail}</span><span className="home-discipline-number">0{index+1}</span></div></ScrollReveal>)}</div>
      <Link className="project-link inline-flex items-center gap-2 mt-7" to="/services">Explore services <ArrowUpRight size={15}/></Link>
    </div>
  </section>

  <section className="home-contact section-padding">
    <div className="container-custom"><ScrollReveal><div className="home-contact-panel"><div><p className="section-kicker mb-4">Start with the search problem</p><h2 className="section-heading">What are people looking for, and where does your site meet them?</h2><p>Share the goal or page you’re working on. We can start with the evidence and find a practical next step.</p></div><Link className="button-primary" to="/contact">Let’s talk <ArrowDownRight size={16}/></Link></div></ScrollReveal></div>
  </section>
</>;

export default HomeSections;
