import PageFrame from '@/components/PageFrame';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';

export default function WorkPage() {
  return <PageFrame kicker="Selected work" title="SEO case studies, with results in context" intro="These anonymized examples draw on project records and Search Console or Analytics reports. Each explains the review period, the work documented, and what the available data can and cannot establish." actions={[{ label: 'Review SEO services', href: '/services', primary: true }]} next={false}>
    <CaseStudiesSection/>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Reading the results</p><h2 className="section-heading">Movement is evidence, not automatic proof of cause</h2></div>
      <div className="page-prose"><p>Search performance changes for many reasons, including seasonality, competition, site releases, and measurement differences. I present the comparison that is available and state when the source does not isolate the effect of SEO work.</p><p>More case studies will be added as I prepare the supporting records and screenshots for publication.</p></div>
    </section>
  </PageFrame>;
}
