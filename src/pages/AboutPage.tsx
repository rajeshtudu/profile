import PageFrame from '@/components/PageFrame';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function AboutPage() {
  return <PageFrame kicker="About Rajesh" title="SEO experience across industries" intro="I’ve worked as an e-commerce SEO specialist and also done SEO work in SaaS, health, insurance, mortgage, B2B, professional services, and other niches. That experience informs how I approach search intent, semantic and entity research, and the wider SEO work each site needs." actions={[{ label: 'View selected work', href: '/work', primary: true }, { label: 'Discuss a project', href: '/contact' }]} next={false}>
    <section className="container-custom page-content-grid">
      <div><p className="section-kicker">Where I am now</p><h2 className="section-heading">Connecting search research to SEO execution</h2></div>
      <div className="page-prose"><p>In my SEO Specialist role at Enfity, I work on research, page recommendations, reporting, and reviewing how sites appear in search.</p><p>The markets differ in their audiences, buying journeys, and site structures. I start by understanding that context before deciding which queries, pages, or signals deserve attention. I use semantic and entity research alongside on-page, off-page, local, technical, and platform-specific SEO.</p><p>This portfolio is a record of work and learning in progress. Where I share results, I identify the data source and period, and I avoid claiming that a single change caused a broader outcome unless the evidence supports it.</p></div>
    </section>
    <ExperienceSection/><SkillsSection/>
  </PageFrame>;
}
