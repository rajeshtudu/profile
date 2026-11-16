import PageFrame from '@/components/PageFrame';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function AboutPage() {
  return <PageFrame kicker="About Rajesh Tudu" title="SEO Specialist With Cross-Industry Experience" intro="I’m an SEO specialist with experience in e-commerce and multi-industry client work, including SaaS, health, insurance, mortgage, B2B, professional services, and home services. I use semantic and entity research to connect each business’s search context with page strategy and practical SEO priorities." actions={[{ label: 'View Selected Case Studies', href: '/case-studies/', primary: true }, { label: 'Explore SEO Services', href: '/services/' }]} next={false}>
    <section className="container-custom page-content-grid">
      <div><p className="section-kicker">How I Approach SEO</p><h2 className="section-heading">Research First, Then the Work Each Site Needs</h2></div>
      <div className="page-prose"><p>I start with the business and its audience, then investigate search demand, current performance, site architecture, and the pages already in play. Semantic and entity research helps organize topics, attributes, and relationships into a useful page plan.</p><p>That plan informs the SEO disciplines and implementation priorities relevant to the site, whether the opportunity is content, on-page improvements, technical work, local visibility, e-commerce architecture, or off-page activity.</p><p>When I report results, I identify the data source and comparison period, distinguish measured change from attribution, and state where the available evidence limits a conclusion.</p></div>
    </section>
    <ExperienceSection/><SkillsSection/>
  </PageFrame>;
}
