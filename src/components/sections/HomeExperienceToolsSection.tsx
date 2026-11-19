import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import { skillGroups } from '@/data/skills';

const roles = [
  { date: 'Jan 2026 – Present', title: 'SEO Specialist', company: 'Enfity', focus: 'Search and entity research, page recommendations, on-page improvements, technical reviews and performance reporting for clients in multiple industries.', current: true },
  { date: 'Dec 2025 – Jan 2026', title: 'Jr. SEO Specialist', company: 'NEPA Works', focus: 'Client SEO through content and on-page improvements, search research and technical checks.' },
  { date: 'Jul 2024 – Jun 2025', title: 'SEO Executive', company: 'RankMeTop', focus: 'Keyword research, on-page improvements, link acquisition and organic performance reporting, including optimization of 50+ pages.' },
  { date: 'Jan 2024 – Jun 2024', title: 'SEO Intern', company: 'RankMeTop', focus: 'Keyword research, campaign execution and foundational technical and on-page SEO.' },
];

const toolGroups = skillGroups.filter(g => g.kind === 'tool');

const projects = [
  { title: 'SERP Live Tracker & Analyzer', detail: 'A dashboard for tracking search results and reviewing ranking movement.', stack: 'Python · Streamlit · Google Search API', source: 'https://github.com/rajeshtudu/SERP-Live-Analyzer', demo: 'https://serp-live-analyzer.streamlit.app/' },
  { title: 'Schema Generator', detail: 'A tool for building JSON-LD structured data for common page types.', stack: 'Python · Streamlit · Schema.org', source: 'https://github.com/rajeshtudu/Schema-Generator', demo: 'https://schema-markup-generator.streamlit.app/' },
];

export default function HomeExperienceToolsSection() {
  return <>
    <section id="career" className="section-padding" aria-labelledby="career-title">
      <div className="container-custom xp-career-layout">
        <ScrollReveal><div><p className="section-kicker mb-4">Career Experience</p><h2 id="career-title" className="section-heading">SEO Career in Four Roles Since 2024</h2><p className="mt-5 text-muted-foreground leading-7">My SEO career covers four roles since 2024, moving from keyword research and link building to research and page planning.</p></div></ScrollReveal>
        <ScrollReveal delay={.06}>
          <ol className="xp-timeline">
            {roles.map(r => <li key={r.title} className={r.current ? 'is-current' : ''}>
              <span className="xp-date">{r.date}</span>
              <h3>{r.title} <span>· {r.company}</span>{r.current && <em>Current</em>}</h3>
              <p>{r.focus}</p>
            </li>)}
          </ol>
        </ScrollReveal>
      </div>
    </section>

    <section id="toolkit" className="section-padding" aria-labelledby="toolkit-title">
      <div className="container-custom">
        <ScrollReveal><div className="home-section-head"><div><p className="section-kicker mb-4">Toolkit</p><h2 id="toolkit-title" className="section-heading">SEO Toolkit for Research, Reporting and Automation</h2></div><p className="home-section-aside">The SEO toolkit covers research and crawling, reporting, CMS platforms and automation, plus two tools I built in Python.</p></div></ScrollReveal>
        <div className="xp-tools-grid">
          {toolGroups.map(g => <div key={g.title} className="xp-tool-row">
            <span className="xp-tool-label"><g.icon size={15} aria-hidden="true"/>{g.title}</span>
            <ul aria-label={g.title}>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>)}
        </div>
        <h3 className="xp-subhead mt-14">SEO Tools I Built</h3>
        <ToolsList external={false} />
      </div>
    </section>
  </>;
}

function ToolsList({ external }: { external: boolean }) {
  return <ul className="xp-projects" aria-label="SEO tools I have built">
    {projects.map(p => <li key={p.title} className="xp-project">
      <span className="xp-stack">{p.stack}</span>
      <h4>{p.title}</h4>
      <p>{p.detail}</p>
      {external && <div className="xp-project-links">
        <a className="button-primary" href={p.demo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={14}/></a>
        <a className="button-secondary" href={p.source} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true"/> Source Code</a>
      </div>}
    </li>)}
  </ul>;
}

// Full version with demo and source links, used on the About page (not a money page).
export function ToolsBuilt() {
  return <section id="tools-built" className="section-padding" aria-labelledby="tools-built-title">
    <div className="container-custom">
      <div className="home-section-head"><div><p className="section-kicker mb-4">Tools I Built</p><h2 id="tools-built-title" className="section-heading">Two SEO Tools Built With Python</h2></div><p className="home-section-aside">Small tools that make repeat research faster: one tracks search results, the other writes JSON-LD structured data.</p></div>
      <ToolsList external />
    </div>
  </section>;
}
