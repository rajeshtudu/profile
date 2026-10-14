import PageFrame from '@/components/PageFrame';
import ServicesSection from '@/components/sections/ServicesSection';

export default function ServicesPage() {
  return <PageFrame kicker="Services" title="SEO support across the parts of a site" intro="I can help with a defined research or optimization task, or connect several SEO disciplines into a prioritized plan. The right scope depends on the site, the available evidence, and what your team can implement.">
    <ServicesSection/>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">How I scope the work</p><h2 className="section-heading">Start with the problem and the evidence</h2></div>
      <div className="page-prose"><ol><li>Understand the business, audience, CMS, and search goals.</li><li>Review available data and inspect the relevant pages or search results.</li><li>Agree on a focused scope, priorities, and what success can be measured.</li><li>Share recommendations or implementation work, then document what changed.</li></ol><p>I work across different CMS platforms. The platform matters to implementation, but it does not define the SEO strategy.</p></div>
    </section>
  </PageFrame>;
}
