import PageFrame from '@/components/PageFrame';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';

export default function WorkPage() {
  return <PageFrame kicker="Selected work" title="SEO work, with the numbers in context" intro="These examples come from project records and Search Console or Analytics screenshots. They show the time period, the work documented, and the limits of what the available data can prove. Client and website names are withheld.">
    <CaseStudiesSection/>
    <section className="container-custom page-content-grid page-content-grid--bordered">
      <div><p className="section-kicker">Reading the results</p><h2 className="section-heading">Movement is evidence, not automatic proof of cause</h2></div>
      <div className="page-prose"><p>Search performance changes for many reasons, including seasonality, competition, site releases, and measurement differences. I present the comparison that is available and state when the source does not isolate the effect of SEO work.</p><p>More case studies will be added as I prepare the supporting records and screenshots for publication.</p></div>
    </section>
  </PageFrame>;
}
