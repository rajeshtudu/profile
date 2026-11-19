import PageFrame from '@/components/PageFrame';
import profileImage from '@/assets/rajesh-profile.jpg';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import { ToolsBuilt } from '@/components/sections/HomeExperienceToolsSection';
import { ClosingCta } from '@/components/sections/HomeSpecialistSections';

const principles = [
  { t: 'Start With the Business', d: 'Every project begins with what the business does, what it should be known for and what sets it apart.' },
  { t: 'Plan Before Writing', d: 'A clear plan decides which questions the site answers and which page answers each one, before any content is written.' },
  { t: 'One Page for Each Question', d: 'Each customer question gets one page or section, so pages support each other instead of competing.' },
  { t: 'Honest Reporting', d: 'Every result names its data source and time period, and shows what changed without overclaiming why.' },
];

export default function AboutPage() {
  return <PageFrame
    kicker="About Rajesh Tudu"
    title="About Rajesh Tudu"
    intro="I&rsquo;m Rajesh Tudu, an SEO specialist at Enfity in Lalitpur, Nepal. I help businesses show up for the searches their customers make, in Google and in AI answers. Since 2024 I have worked on client sites across 10+ industries, guided by four working principles and two SEO tools I built in Python."
    actions={[{ label: 'View Case Studies', href: '/case-studies/', primary: true }, { label: 'Explore SEO Services', href: '/services/' }]}
    next={false}
  >
    <section id="story" className="section-padding" aria-labelledby="story-title">
      <div className="container-custom">
        <div className="profile-card">
          <img src={profileImage} alt="Portrait of Rajesh Tudu, SEO specialist in Lalitpur, Nepal" width={480} height={600} loading="eager" />
          <div>
            <p className="section-kicker">At a Glance</p>
            <p className="profile-name">Rajesh Tudu</p>
            <p className="profile-role">SEO Specialist at Enfity</p>
            <dl className="profile-facts">
              <div><dt>Based in</dt><dd>Lalitpur, Nepal</dd></div>
              <div><dt>In SEO since</dt><dd>January 2024</dd></div>
              <div><dt>Industries</dt><dd>10+</dd></div>
              <div><dt>SEO projects</dt><dd>20+</dd></div>
              <div><dt>Tools built</dt><dd>2 (Python)</dd></div>
            </dl>
          </div>
        </div>
        <div className="home-section-head"><div><p className="section-kicker mb-4">My SEO Path</p><h2 id="story-title" className="section-heading">From Keyword Research to Topical Maps</h2></div><p className="home-section-aside">My SEO path ran from keyword research to topical maps. Across every market, sites ranked best when search engines could see what the business does and how its pages connect.</p></div>
        <ol className="story-steps">
          <li><span className="story-year">2023–2024 · RankMeTop</span><h3>Where It Started</h3><p>Data entry and Excel reports at RankMeTop led to an SEO internship, with keyword research as the starting point.</p></li>
          <li><span className="story-year">2024–2025 · RankMeTop</span><h3>What Changed</h3><p>Optimizing 50+ pages as an SEO executive shifted the focus from single keywords to how pages work together across a topic.</p></li>
          <li><span className="story-year">2025–Present · NEPA Works, Enfity</span><h3>Where It Is Now</h3><p>Research, page planning and technical SEO for clients in 10+ industries, supported by two Python tools built along the way.</p></li>
        </ol>
      </div>
    </section>

    <section id="principles" className="section-padding" aria-labelledby="principles-title">
      <div className="container-custom">
        <div className="home-section-head"><div><p className="section-kicker mb-4">Working Principles</p><h2 id="principles-title" className="section-heading">Four Working Principles</h2></div><p className="home-section-aside">Four working principles guide every project, with one goal: search engines and AI answers see the site as the clearest source on its topic.</p></div>
        <ol className="service-index principles-index">
          {principles.map((p, i) => <li key={p.t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{p.t}</h3><p>{p.d}</p></li>)}
        </ol>
      </div>
    </section>

    <ExperienceSection/>
    <SkillsSection/>
    <ToolsBuilt/>
    <ClosingCta/>
  </PageFrame>;
}
