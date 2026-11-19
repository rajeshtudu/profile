import PageFrame from '@/components/PageFrame';
import ServicesSection from '@/components/sections/ServicesSection';
import { QuoteRequest, WhoItsFor, CaseStudyCards, TopicalMapMethod, WaysToWork } from '@/components/sections/HomeSpecialistSections';

export default function ServicesPage() {
  return <PageFrame
    kicker="SEO Services"
    title="SEO Services"
    intro="SEO services built around your business and the questions your customers ask. I plan everything your site should rank for, then build the pages, internal links and schema to cover it, for clients in 10+ industries. Nine services, a five-step process and case studies show how the work is done."
    actions={[{ label: 'See Pricing', href: '#work-with-me', primary: true }, { label: 'Review Case Studies', href: '/case-studies/' }]}
    next={false}
  >
    <ServicesSection />
    <WhoItsFor />
    <TopicalMapMethod />
    <CaseStudyCards />
    <WaysToWork />
    <QuoteRequest />
  </PageFrame>;
}
