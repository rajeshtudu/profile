import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import HomeServicesSection from '@/components/sections/HomeServicesSection';
import HomeExperienceToolsSection from '@/components/sections/HomeExperienceToolsSection';

const niches = ['E-commerce', 'SaaS', 'Health', 'Insurance', 'Mortgage', 'B2B', 'Professional services', 'Home services', 'Travel & hospitality'];

const HomeSections = ({ children }: { children?: ReactNode }) => <>
  <section id="about" className="home-intro section-padding">
    <div className="container-custom home-intro-grid">
      <ScrollReveal><div><p className="section-kicker mb-5">How I think about SEO</p><h2 className="section-heading">Understand the business before planning the pages.</h2></div></ScrollReveal>
      <ScrollReveal delay={0.08}><div className="home-intro-copy"><p>Search opportunities make sense in context. The audience, business model, offers, and current site all shape what a useful page should do.</p><p>I use that context to decide what to investigate, which pages or relationships to improve, and how to measure the change.</p><Link className="project-link inline-flex items-center gap-2 mt-5" to="/about">Read about my experience <ArrowUpRight size={15}/></Link></div></ScrollReveal>
    </div>
  </section>

  <section className="home-niches section-padding" aria-labelledby="niches-title">
    <div className="container-custom home-niches-layout">
      <ScrollReveal className="home-niches-heading"><div><p className="section-kicker mb-4">Experience across 5+ niches</p><h2 id="niches-title" className="section-heading">Different markets. Different search journeys.</h2></div></ScrollReveal>
      <ScrollReveal className="home-niches-detail-wrap" delay={0.08}><div className="home-niches-detail"><p>My work spans a varied client portfolio. These markets have different audiences, decision journeys, and site structures, so I adapt the research and priorities to the business.</p><div className="home-niche-tags" aria-label="Industries and niches I have worked in">{niches.map(niche => <span key={niche}>{niche}</span>)}</div><div className="home-niche-actions"><Link to="/contact" className="button-primary">Discuss your organic search goals <ArrowUpRight size={15}/></Link><Link to="/services" className="button-secondary">Review SEO services <ArrowUpRight size={15}/></Link></div></div></ScrollReveal>
    </div>
  </section>

  <HomeServicesSection/>

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

  <HomeExperienceToolsSection/>

  <section className="home-contact section-padding">
    <div className="container-custom"><ScrollReveal><div className="home-contact-panel"><div><p className="section-kicker mb-4">Start with the search problem</p><h2 className="section-heading">What are people looking for, and where does your site meet them?</h2><p>Share the goal or page you’re working on. We can start with the evidence and find a practical next step.</p></div><Link className="button-primary" to="/contact">Let’s talk <ArrowDownRight size={16}/></Link></div></ScrollReveal></div>
  </section>
</>;

export default HomeSections;
