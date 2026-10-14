import PageFrame from '@/components/PageFrame';
import ServicesSection from '@/components/sections/ServicesSection';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return <PageFrame kicker="Services" title="SEO support across the parts of a site" intro="My experience includes e-commerce SEO and work across multiple client niches at Enfity. I connect search research to focused optimization and broader SEO plans, adapting recommendations to each business and its CMS." actions={[{ label: 'Discuss an SEO opportunity', href: '/contact', primary: true }, { label: 'Review selected work', href: '/work' }]} next={false}>
    <ServicesSection/>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Related evidence</p><h2 className="section-heading">See how the work was reviewed</h2></div>
      <div className="page-prose grid gap-4">
        <Link className="project-link inline-flex items-center gap-2" to="/work/ecommerce-search-performance">E-commerce SEO: visibility and page-type performance <ArrowUpRight size={15}/></Link>
        <Link className="project-link inline-flex items-center gap-2" to="/work/local-search-review">Local SEO: page work and organic outcomes <ArrowUpRight size={15}/></Link>
        <Link className="project-link inline-flex items-center gap-2" to="/work/ecommerce-visibility-sales">E-commerce SEO: search visibility and sales snapshot <ArrowUpRight size={15}/></Link>
      </div>
    </section>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">How I scope the work</p><h2 className="section-heading">Start with the problem and the evidence</h2></div>
      <div className="page-prose"><ol><li>Understand the business, audience, CMS, and search goals.</li><li>Review available data and inspect the relevant pages or search results.</li><li>Agree on a focused scope, priorities, and what success can be measured.</li><li>Share recommendations or implementation work, then document what changed.</li></ol><p>I work across different CMS platforms. The platform matters to implementation, but it does not define the SEO strategy.</p></div>
    </section>
  </PageFrame>;
}
