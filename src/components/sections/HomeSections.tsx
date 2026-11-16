import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import ApproachSection from '@/components/sections/ApproachSection';
import HomeServicesSection from '@/components/sections/HomeServicesSection';
import HomeExperienceToolsSection from '@/components/sections/HomeExperienceToolsSection';

const marketGroups = [
  { category: 'Commerce', markets: 'E-commerce' },
  { category: 'Software', markets: 'SaaS' },
  { category: 'Health', markets: 'Health' },
  { category: 'Financial Services', markets: 'Insurance · Mortgage' },
  { category: 'B2B & Professional', markets: 'B2B · Professional Services' },
  { category: 'Local Services', markets: 'Home Services' },
];

const HomeSections = () => <>
  <section id="markets" className="home-markets section-padding" aria-labelledby="markets-title">
    <div className="container-custom">
      <ScrollReveal>
        <div className="home-markets-intro">
          <div>
            <p className="section-kicker mb-4">Industry Experience</p>
            <h2 id="markets-title" className="section-heading">SEO Work Across Different Markets</h2>
          </div>
          <div className="home-markets-copy">
            <p>My experience includes e-commerce SEO and client work across SaaS, health, insurance, mortgage, B2B, professional services, and home services.</p>
            <p>Search behavior, page models, and business priorities vary across these markets. I investigate those differences before recommending what to improve.</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="home-market-grid" aria-label="Markets where I have SEO experience">
        {marketGroups.map(({ category, markets }, index) => <ScrollReveal key={category} delay={index * .035}>
          <article className="home-market-card">
            <span className="home-market-index">0{index + 1}</span>
            <div><p>{category}</p><h3>{markets}</h3></div>
          </article>
        </ScrollReveal>)}
      </div>
      <div className="home-markets-link"><Link to="/contact/" className="project-link">Discuss SEO in your market <ArrowUpRight size={15}/></Link></div>
    </div>
  </section>

  <HomeServicesSection />

  <section id="selected-work" className="home-work section-padding" aria-labelledby="home-work-title">
    <div className="container-custom">
      <ScrollReveal>
        <div className="home-section-head">
          <div><p className="section-kicker mb-4">Selected Project Evidence</p><h2 id="home-work-title" className="section-heading">What the Reports Show, in Context</h2></div>
          <p className="home-section-aside">Anonymized comparisons from Search Console and Analytics reports, with their source periods and limitations.</p>
        </div>
      </ScrollReveal>

      <div className="home-proof-grid">
        <ScrollReveal>
          <article className="home-proof-card">
            <div className="home-proof-meta"><span>E-commerce SEO · Anonymized</span><span>Google Search Console · 2025</span></div>
            <h3>Visibility Grew While Clicks Stayed Nearly Flat</h3>
            <p className="home-proof-context">Jun 9–Sep 16, 2025 compared with Mar 1–Jun 8, 2025.</p>
            <dl className="home-proof-metrics">
              <div><dt>Impressions</dt><dd>1.16M <small>from 883K · +31%</small></dd></div>
              <div><dt>Clicks</dt><dd>5.73K <small>from 5.84K · −2%</small></dd></div>
              <div><dt>Average Position</dt><dd>26.2 <small>from 26.7</small></dd></div>
            </dl>
            <p className="home-proof-reading">The page-type view showed different movement across product, collection, and blog pages. Filtered Search Console totals may be partial.</p>
            <Link to="/work/ecommerce-search-performance/" className="project-link">Read the e-commerce performance review <ArrowUpRight size={15}/></Link>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={.07}>
          <article className="home-proof-card">
            <div className="home-proof-meta"><span>Home Services · Anonymized</span><span>Search Console + GA4 · 2024</span></div>
            <h3>One Monthly Report, Three Different Measures</h3>
            <p className="home-proof-context">August–September 2024 comparison.</p>
            <dl className="home-proof-metrics">
              <div><dt>Pages Receiving Work · Impressions</dt><dd>+24.26%</dd></div>
              <div><dt>Sitewide Impressions</dt><dd>+20.90%</dd></div>
              <div><dt>Organic Key Events</dt><dd>+8.11%</dd></div>
            </dl>
            <p className="home-proof-reading">The report compares worked-on pages with sitewide Search Console data and GA4 key events. A month-to-month comparison does not isolate SEO as the cause.</p>
            <Link to="/work/local-search-review/" className="project-link">Read the home services reporting review <ArrowUpRight size={15}/></Link>
          </article>
        </ScrollReveal>
      </div>
      <p className="home-proof-note">These figures describe observed reporting periods. They do not establish that SEO work alone caused the changes.</p>
    </div>
  </section>

  <ApproachSection />
  <HomeExperienceToolsSection />

  <section id="contact" className="home-contact section-padding">
    <div className="container-custom"><ScrollReveal><div className="home-contact-panel"><div><p className="section-kicker mb-4">Start a Conversation</p><h2 className="section-heading">Tell Me What You Need Organic Search to Do.</h2><p>Share your website, market, and current SEO priority. We can discuss the evidence and identify a practical next step.</p></div><Link className="button-primary" to="/contact/">Discuss Your SEO Project <ArrowDownRight size={16}/></Link></div></ScrollReveal></div>
  </section>
</>;

export default HomeSections;
