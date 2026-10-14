import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const roles = [
  { date: '2026–present', title: 'SEO Specialist', company: 'Enfity', focus: 'SEO planning and delivery across multiple client niches. Work includes search research, page recommendations, on-page improvements, technical checks, and performance reporting.' },
  { date: '2025–2026', title: 'Jr. SEO Specialist', company: 'NEPA Works', focus: 'Client SEO support through content and on-page improvements, research, and technical checks.' },
  { date: '2024–2025', title: 'SEO Executive', company: 'RankMeTop', focus: 'Keyword research, on-page improvements, link acquisition, and organic performance reporting.' },
];

const capabilities = [
  { label: 'CMS & e-commerce', items: ['WordPress', 'Shopify', 'Odoo'] },
  { label: 'Search & analytics', items: ['Google Search Console', 'Google Analytics 4'] },
  { label: 'SEO research & crawling', items: ['Semrush', 'Ahrefs', 'Screaming Frog'] },
  { label: 'Data & automation', items: ['Google Sheets', 'Excel', 'Python', 'Streamlit'] },
];

export default function HomeExperienceToolsSection() {
  return <section className="section-padding" aria-label="Experience and tools">
    <div className="container-custom grid lg:grid-cols-[1.08fr_.92fr] gap-12 lg:gap-20">
      <ScrollReveal><div>
        <div className="flex items-start gap-4 mb-8"><BriefcaseBusiness size={19} className="text-primary mt-1"/><div><p className="section-kicker mb-4">Career</p><h2 className="section-heading">Experience in practice.</h2></div></div>
        <div className="grid gap-3">
          {roles.map((role) => <article className="paper-card p-5 sm:p-6" key={role.company}>
            <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1"><h3 className="font-semibold">{role.title} <span className="text-muted-foreground font-normal">· {role.company}</span></h3><span className="font-mono text-[10px] tracking-wide text-primary">{role.date}</span></div>
            <p className="text-sm text-muted-foreground leading-6 mt-3">{role.focus}</p>
          </article>)}
        </div>
        <Link to="/about" className="project-link inline-flex items-center gap-2 mt-6 text-sm font-semibold">View full experience and training <ArrowUpRight size={15}/></Link>
      </div></ScrollReveal>
      <ScrollReveal delay={.08}><div>
        <p className="section-kicker mb-4">Platforms & tools</p><h2 className="section-heading">A practical working toolkit.</h2>
        <p className="text-sm text-muted-foreground leading-6 mt-4 max-w-lg">I work across CMS platforms and use search, analytics, crawling, and data tools to investigate opportunities and track changes.</p>
        <div className="mt-7 border-t border-border">
          {capabilities.map((group) => <div className="py-4 border-b border-border" key={group.label}>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary">{group.label}</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-3" aria-label={group.label}>{group.items.map((item) => <li className="text-sm text-foreground" key={item}>{item}</li>)}</ul>
          </div>)}
        </div>
      </div></ScrollReveal>
    </div>
  </section>;
}
