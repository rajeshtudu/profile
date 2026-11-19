import PageFrame from '@/components/PageFrame';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import { ClosingCta, EvidenceLimits } from '@/components/sections/HomeSpecialistSections';

export default function CaseStudiesPage() {
  return <PageFrame
    kicker="Case Studies"
    title="SEO Case Studies"
    intro="SEO case studies from real client work, showing what changed in organic traffic, search visibility, leads and sales. Client names stay private, every figure names its data source and period, and a Shopify planning sample shows how catalog work is structured."
    actions={[{ label: 'Discuss an SEO Project', href: '/contact/', primary: true }, { label: 'Explore SEO Services', href: '/services/' }]}
    next={false}
  >
    <CaseStudiesSection />
    <EvidenceLimits />
    <ClosingCta />
  </PageFrame>;
}
