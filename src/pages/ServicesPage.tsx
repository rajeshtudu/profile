import PageFrame from '@/components/PageFrame';
import ServicesSection from '@/components/sections/ServicesSection';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return <PageFrame kicker="SEO services" title="SEO services from research to implementation" intro="I work across semantic and entity research, on-page content, technical SEO, off-page authority, local search, and e-commerce. Each engagement starts with your market, site, and available data, then defines page-level recommendations, priorities, deliverables, and measures around the work your team can take forward." actions={[{ label: 'Discuss your SEO needs', href: '/contact', primary: true }, { label: 'See documented case studies', href: '/work' }]} next={false}>
    <ServicesSection/>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Project evidence</p><h2 className="section-heading">Review the work and its data</h2></div>
      <div className="page-prose grid gap-4">
        <p>These anonymized examples show the reporting source, comparison period, documented work, and limits of the available evidence.</p>
        <Link className="project-link inline-flex items-center gap-2" to="/work/ecommerce-search-performance">Compare e-commerce clicks and impressions by page type <ArrowUpRight size={15}/></Link>
        <Link className="project-link inline-flex items-center gap-2" to="/work/local-search-review">Review local page work alongside organic outcomes <ArrowUpRight size={15}/></Link>
        <Link className="project-link inline-flex items-center gap-2" to="/work/ecommerce-visibility-sales">See a Search Console and sales report snapshot <ArrowUpRight size={15}/></Link>
      </div>
    </section>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Engagement process</p><h2 className="section-heading">A clear scope, tied to evidence</h2></div>
      <div className="page-prose"><ol><li><strong>Set the context.</strong> Confirm the business goals, audience, market, CMS, target pages, and implementation constraints.</li><li><strong>Review the evidence.</strong> Use available Search Console, analytics, crawl data, page content, and search results to understand the opportunity.</li><li><strong>Prioritize the work.</strong> Connect topics and entities to page roles, then order recommendations by business relevance, effort, and technical dependencies.</li><li><strong>Measure what changes.</strong> Agree on data sources and a baseline, document implemented work, and report outcomes with comparison periods and caveats.</li></ol><p>Recommendations are platform-aware and CMS-agnostic. Implementation can be scoped around the platform and the access available to the team.</p></div>
    </section>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Industry experience</p><h2 className="section-heading">Different markets need different SEO decisions</h2></div>
      <div className="page-prose"><p>My project experience includes e-commerce, SaaS, health, insurance, mortgage, B2B, professional services, home services, and travel and hospitality. The search journey, trust requirements, page types, and conversion path vary by market, so the research and priorities should reflect the specific business.</p></div>
    </section>
  </PageFrame>;
}
