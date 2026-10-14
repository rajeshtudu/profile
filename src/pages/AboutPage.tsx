import PageFrame from '@/components/PageFrame';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function AboutPage() {
  return <PageFrame kicker="About Rajesh" title="How I’m building my SEO practice" intro="I began with keyword research, on-page updates, and reporting. Since then, I’ve applied SEO across 5+ niches, from e-commerce and SaaS to insurance, healthcare, B2B, and service businesses. I’m continuing to deepen my semantic and entity SEO research while learning how different audiences search." next={{ title: 'See how the research translates into real work.', href: '/work', label: 'View case studies' }}>
    <section className="container-custom page-content-grid">
      <div><p className="section-kicker">Where I am now</p><h2 className="section-heading">A practical, evidence-led way of learning SEO</h2></div>
      <div className="page-prose"><p>I work as an SEO Specialist at Enfity. My day-to-day experience includes research, page recommendations, reporting, and reviewing how different parts of a site appear in search. I’ve worked across e-commerce, SaaS, insurance, healthcare, B2B, home services, travel and hospitality, and professional services.</p><p>Those niches have different audiences, decision paths, and site structures. I start by understanding that context before deciding which queries, pages, or signals deserve attention. I use semantic and entity research alongside on-page, off-page, local, technical, and platform-specific SEO.</p><p>This portfolio is a record of work and learning in progress. Where I share results, I identify the data source and period, and I avoid claiming that a single change caused a broader outcome unless the evidence supports it.</p></div>
    </section>
    <ExperienceSection/><SkillsSection/>
  </PageFrame>;
}
