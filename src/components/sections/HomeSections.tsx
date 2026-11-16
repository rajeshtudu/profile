import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import HomeServicesSection from '@/components/sections/HomeServicesSection';
import HomeExperienceToolsSection from '@/components/sections/HomeExperienceToolsSection';

const niches = ['E-commerce', 'SaaS', 'Health', 'Insurance', 'Mortgage', 'B2B', 'Professional services', 'Home services'];

const HomeSections = ({ children }: { children?: ReactNode }) => <>
  <section id="about" className="home-intro section-padding">
    <div className="container-custom home-intro-grid">
      <ScrollReveal><div><p className="section-kicker mb-5">My starting point</p><h2 className="section-heading">Start with the business. Then map the search opportunity.</h2></div></ScrollReveal>
      <ScrollReveal delay={0.08}><div className="home-intro-copy"><p>I begin with what a business offers, who it serves, and what those audiences need. That context shapes which topics matter, which pages should answer them, and how those pages connect.</p><p>From there, I prioritize content, site structure, and technical improvements, then compare the results with a clear baseline.</p><Link className="project-link inline-flex items-center gap-2 mt-5" to="/about">Read about my SEO experience <ArrowUpRight size={15}/></Link></div></ScrollReveal>
    </div>
  </section>

  <section className="home-niches section-padding" aria-labelledby="niches-title">
    <div className="container-custom home-niches-layout">
      <ScrollReveal className="home-niches-heading"><div><p className="section-kicker mb-4">Experience across 5+ niches</p><h2 id="niches-title" className="section-heading">Different markets. Different search journeys.</h2></div></ScrollReveal>
      <ScrollReveal className="home-niches-detail-wrap" delay={0.08}><div className="home-niches-detail"><p>E-commerce is one part of my experience. I have also worked across these markets, each with its own audience, buying journey, and site structure. The research and priorities change with the business.</p><div className="home-niche-tags" aria-label="Industries and niches I have worked in">{niches.map(niche => <span key={niche}>{niche}</span>)}</div><div className="home-niche-actions"><Link to="/contact" className="button-primary">Discuss an SEO goal <ArrowUpRight size={15}/></Link><Link to="/services" className="button-secondary">Explore SEO services <ArrowUpRight size={15}/></Link></div></div></ScrollReveal>
    </div>
  </section>

  <HomeServicesSection/>

  <section className="home-work section-padding">
    <div className="container-custom">
        <ScrollReveal><div className="home-section-head"><div><p className="section-kicker mb-4">Selected case studies</p><h2 className="section-heading">Results with reporting context.</h2></div><Link className="project-link inline-flex items-center gap-2" to="/work">Browse all case studies <ArrowUpRight size={15}/></Link></div></ScrollReveal>
      <div className="home-proof-list">
        <ScrollReveal><Link className="home-proof-row" to="/work/ecommerce-search-performance"><span className="home-proof-index">01</span><span className="home-proof-copy"><small>Anonymized e-commerce · Search Console · 2025</small><strong>Impressions rose 31% while total clicks edged down.</strong><span>Product and collection clicks increased in page-filtered comparisons; blog clicks moved in the other direction.</span></span><span className="home-proof-metric"><b>+31%</b><small>impressions</small></span><ArrowUpRight className="home-proof-arrow" size={18}/></Link></ScrollReveal>
        <ScrollReveal delay={0.06}><Link className="home-proof-row" to="/work/local-search-review"><span className="home-proof-index">02</span><span className="home-proof-copy"><small>Anonymized home services · GSC + GA4 · 2024</small><strong>Organic key events rose 8.1% in the monthly comparison.</strong><span>Sitewide impressions and clicks grew, while pages receiving work gained 24.26% impressions.</span></span><span className="home-proof-metric"><b>+8.1%</b><small>organic key events</small></span><ArrowUpRight className="home-proof-arrow" size={18}/></Link></ScrollReveal>
      </div>
      <p className="home-proof-note">Reported changes are observations from the stated periods, not proof that SEO work alone caused each outcome. Client names remain private.</p>
    </div>
  </section>

  {children}

  <HomeExperienceToolsSection/>

  <section className="home-contact section-padding">
    <div className="container-custom"><ScrollReveal><div className="home-contact-panel"><div><p className="section-kicker mb-4">Have a search challenge?</p><h2 className="section-heading">Let’s identify the pages and priorities that can move it forward.</h2><p>Share your site, market, and goal. I’ll respond with a clear next step for the conversation.</p></div><Link className="button-primary" to="/contact">Discuss your project <ArrowDownRight size={16}/></Link></div></ScrollReveal></div>
  </section>
</>;

export default HomeSections;
