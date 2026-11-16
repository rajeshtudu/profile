import PageFrame from '@/components/PageFrame';
import ServicesSection from '@/components/sections/ServicesSection';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return <PageFrame
    kicker="SEO Services"
    title="SEO Services Built Around Your Search Priorities"
    intro="I provide SEO across semantic and entity research, on-page, technical, off-page, local, and e-commerce search. The work starts with your business, audience, site, and available data. From there, we agree a focused scope, useful deliverables, implementation roles, and measures. A project can address one issue or connect several disciplines."
    actions={[{ label: 'Discuss Your SEO Needs', href: '/contact/', primary: true }, { label: 'Review Documented Case Studies', href: '/work/' }]}
    next={false}
  >
    <ServicesSection />
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Project Evidence</p><h2 className="section-heading">See The Work In Its Reporting Context</h2></div>
      <div className="page-prose grid gap-4">
        <p>The anonymized case studies identify the source, comparison period, documented work, and limitations of the available data. They show how I review search outcomes without claiming that one SEO activity caused every change.</p>
        <Link className="project-link inline-flex items-center gap-2" to="/work/ecommerce-search-performance/">Review e-commerce clicks and impressions by page type <ArrowUpRight size={15}/></Link>
        <Link className="project-link inline-flex items-center gap-2" to="/work/local-search-review/">Review local SEO work alongside organic outcomes <ArrowUpRight size={15}/></Link>
        <Link className="project-link inline-flex items-center gap-2" to="/work/ecommerce-visibility-sales/">Compare search visibility with reported organic sales <ArrowUpRight size={15}/></Link>
      </div>
    </section>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">How Engagements Work</p><h2 className="section-heading">A Practical Process From Review To Action</h2></div>
      <div className="page-prose">
        <ol>
          <li><strong>Set the business context.</strong> Agree the goal, audience, market, priority pages, CMS, and implementation constraints.</li>
          <li><strong>Review the evidence.</strong> Examine available Search Console, analytics, crawl data, page content, and search results. Note what the data can and cannot show.</li>
          <li><strong>Prioritize the recommendations.</strong> Connect search intent and entities to page roles, then order actions by business relevance, effort, and dependencies.</li>
          <li><strong>Define delivery and measurement.</strong> Agree who will implement each action, establish a baseline, and report outcomes with clear dates and data sources.</li>
        </ol>
        <p>Recommendations are CMS-agnostic. The scope can account for Shopify, WordPress, or another platform, as well as the access and development support available to your team.</p>
      </div>
    </section>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Industry Experience</p><h2 className="section-heading">SEO Across Different Markets And Business Models</h2></div>
      <div className="page-prose">
        <p>My background includes e-commerce SEO and client work across SaaS, health, insurance, mortgage, B2B, professional services, home services, and other markets. That range shapes how I approach a project, while the work itself is grounded in the specific audience, search journey, site, and business objective.</p>
        <p>The same recommendation does not fit every market. A product catalog, a local service area, and a considered B2B purchase each require different page roles, evidence, and priorities.</p>
      </div>
    </section>
  </PageFrame>;
}
