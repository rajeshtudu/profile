import PageFrame from '@/components/PageFrame';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function AboutPage() {
  return <PageFrame kicker="About Rajesh" title="How I’m building my SEO practice" intro="I began with keyword research, on-page updates, and reporting. My work has since widened across content, local visibility, links, technical foundations, and e-commerce. I’m continuing to deepen my semantic and entity SEO research while applying it to real site and search questions.">
    <section className="container-custom page-content-grid">
      <div><p className="section-kicker">Where I am now</p><h2 className="section-heading">A practical, evidence-led way of learning SEO</h2></div>
      <div className="page-prose"><p>I work as an SEO Specialist at Enfity. My day-to-day experience includes research, page recommendations, reporting, and reviewing how different parts of a site appear in search.</p><p>I don’t treat semantic SEO as a separate trick or a substitute for the fundamentals. I use search intent, topic relationships, and entities to help make page purpose clearer, then consider that alongside on-page, off-page, local, technical, and e-commerce needs.</p><p>This portfolio is a record of work and learning in progress. Where I share results, I identify the data source and period, and I avoid claiming that a single change caused a broader outcome unless the evidence supports it.</p></div>
    </section>
    <ExperienceSection/><SkillsSection/>
  </PageFrame>;
}
