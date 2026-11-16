import { ArrowUpRight, BriefcaseBusiness, Github, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const roles = [
  { date: '2026–Present', title: 'SEO Specialist', company: 'Enfity', focus: 'SEO planning and delivery across multiple client industries, including search research, page recommendations, on-page improvements, technical reviews, and performance reporting.' },
  { date: '2025–2026', title: 'Jr. SEO Specialist', company: 'NEPA Works', focus: 'Client SEO support through content and on-page improvements, search research, and technical checks.' },
  { date: '2024–2025', title: 'SEO Executive', company: 'RankMeTop', focus: 'Keyword research, on-page improvements, link acquisition, and organic performance reporting.' },
];

const capabilities = [
  { label: 'CMS & E-Commerce', items: ['WordPress', 'Shopify', 'Odoo'] },
  { label: 'Search Performance', items: ['Google Search Console', 'Google Analytics 4', 'SE Ranking'] },
  { label: 'SEO Research & Crawling', items: ['Semrush', 'Ahrefs', 'Screaming Frog'] },
  { label: 'Automation & Data', items: ['Python', 'Streamlit', 'Google Search API', 'Web Scraping', 'Google Sheets', 'Excel'] },
];

const projects = [
  { title: 'SERP Live Tracker & Analyzer', detail: 'A dashboard for tracking search results and reviewing ranking movement.', source: 'https://github.com/rajeshtudu/SERP-Live-Analyzer', demo: 'https://serp-live-analyzer.streamlit.app/' },
  { title: 'Schema Generator', detail: 'A small tool for building JSON-LD for common page types.', source: 'https://github.com/rajeshtudu/Schema-Generator', demo: 'https://schema-markup-generator.streamlit.app/' },
];

export default function HomeExperienceToolsSection() {
  return <section id="experience-toolkit" className="home-experience section-padding" aria-label="Career experience and SEO toolkit">
    <div className="container-custom grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20">
      <ScrollReveal>
        <div>
          <div className="flex items-start gap-4 mb-8"><BriefcaseBusiness size={19} className="text-primary mt-1" aria-hidden="true"/><div><p className="section-kicker mb-4">Career Experience</p><h2 className="section-heading">SEO Work in Practice</h2></div></div>
          <div className="home-career-list">
            {roles.map((role) => <article className="home-career-item" key={role.company}>
              <span className="home-career-date">{role.date}</span>
              <div><h3>{role.title} <span>· {role.company}</span></h3><p>{role.focus}</p></div>
            </article>)}
          </div>
          <Link to="/about/" className="project-link inline-flex items-center gap-2 mt-6 text-sm font-semibold">View Full SEO Experience and Training <ArrowUpRight size={15}/></Link>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={.08}>
        <div>
          <div className="flex items-start gap-4"><Wrench size={19} className="text-primary mt-1" aria-hidden="true"/><div><p className="section-kicker mb-4">Research, Reporting &amp; Automation</p><h2 className="section-heading">Tools for Practical SEO Work</h2></div></div>
          <p className="home-toolkit-intro">I use analytics and SEO platforms to investigate performance, crawling tools to review site structure, and code or spreadsheets to make selected research tasks easier to repeat.</p>
          <div className="home-capability-list">
            {capabilities.map((group) => <div className="home-capability-row" key={group.label}>
              <h3>{group.label}</h3><ul aria-label={group.label}>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>)}
          </div>
          <div className="home-tool-projects" aria-label="SEO tools I have built">
            {projects.map((project) => <article className="home-tool-project" key={project.title}>
              <div><h3>{project.title}</h3><p>{project.detail}</p></div>
              <div className="home-tool-project-links"><a href={project.demo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={13}/></a><a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Github size={15}/></a></div>
            </article>)}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>;
}
