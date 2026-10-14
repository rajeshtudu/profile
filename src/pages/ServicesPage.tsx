import PageFrame from '@/components/PageFrame';
import ServicesSection from '@/components/sections/ServicesSection';

export default function ServicesPage() {
  return <PageFrame kicker="Services" title="SEO support across the parts of a site" intro="I’ve worked as an e-commerce SEO specialist, with additional SEO work across SaaS, health, insurance, mortgage, B2B, professional services, and more. I support focused research and optimization as well as broader SEO plans across CMS platforms." actions={[{ label: 'Discuss an SEO opportunity', href: '/contact', primary: true }, { label: 'Review selected work', href: '/work' }]} next={false}>
    <ServicesSection/>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">How I scope the work</p><h2 className="section-heading">Start with the problem and the evidence</h2></div>
      <div className="page-prose"><ol><li>Understand the business, audience, CMS, and search goals.</li><li>Review available data and inspect the relevant pages or search results.</li><li>Agree on a focused scope, priorities, and what success can be measured.</li><li>Share recommendations or implementation work, then document what changed.</li></ol><p>I work across different CMS platforms. The platform matters to implementation, but it does not define the SEO strategy.</p></div>
    </section>
  </PageFrame>;
}
