import PageFrame from '@/components/PageFrame';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';

export default function WorkPage() {
  return <PageFrame
    kicker="Selected Case Studies"
    title="SEO Case Studies With Results in Context"
    intro="Explore anonymized SEO case studies drawn from project records, Search Console, GA4, and sales reporting. Each separates documented work from measured outcomes and identifies the source, comparison period, and limits of the available evidence."
    actions={[{ label: 'Discuss an SEO Project', href: '/contact/', primary: true }, { label: 'Explore SEO Services', href: '/services/' }]}
    next={false}
  >
    <CaseStudiesSection />
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Evidence And Interpretation</p><h2 className="section-heading">What The Reports Can And Cannot Show</h2></div>
      <div className="page-prose">
        <p>Search, analytics, and sales metrics describe observed change across the periods shown. They do not, by themselves, prove that a specific SEO task caused the change.</p>
        <p>Search Console page filters can show partial totals. Month-to-month comparisons can also reflect seasonality, competition, site releases, or tracking changes. Each case study states the sources and limitations available in its project records so you can judge the evidence in context.</p>
      </div>
    </section>
  </PageFrame>;
}
