import { motion } from 'framer-motion';
import { Search, BarChart3, Code2, Wrench, ArrowUpRight, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const groups = [
  { icon: Search, title: 'SEO disciplines', detail: 'Research and implementation across the core SEO workstreams.', items: ['Semantic SEO','Entity SEO','On-page SEO','Off-page SEO','Local SEO','Technical SEO','E-commerce SEO'] },
  { icon: BarChart3, title: 'Performance & reporting', detail: 'Compare visibility, rankings, traffic, and key events across data sources.', items: ['Google Search Console','Google Analytics 4','SE Ranking','Google Sheets','Excel'] },
  { icon: Search, title: 'Research & crawling', detail: 'Investigate demand, search results, entities, competitors, and site patterns.', items: ['Search intent','Topic & entity research','Keyword research','Semrush','Ahrefs','Screaming Frog'] },
  { icon: Wrench, title: 'CMS & platforms', detail: 'Adapt recommendations and implementation to the site’s CMS and catalog.', items: ['WordPress','Shopify','Odoo'] },
  { icon: Workflow, title: 'Automation & SEO tooling', detail: 'Build small Python and Streamlit tools for repeatable SERP research and structured-data tasks.', items: ['Python','Streamlit','Google Search API','Web scraping','JSON-LD','Schema.org','JavaScript','React','Git','MySQL'] },
];
const SkillsSection = () => <section id="skills" className="section-padding bg-secondary/40">
  <div className="container-custom"><ScrollReveal><div className="max-w-2xl mb-14"><p className="section-kicker mb-5">Areas of practice</p><h2 className="section-heading">SEO skills and platforms</h2><p className="text-muted-foreground mt-5 leading-7">The work spans the research that shapes a search strategy, the SEO disciplines that put it into practice, and the tools used to measure and improve it.</p></div></ScrollReveal>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{groups.map((group,index)=><motion.div key={group.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="paper-card p-6 min-h-64">
      <div className="flex items-center gap-3 mb-5"><span className="w-9 h-9 grid place-items-center bg-primary/10 text-primary"><group.icon size={17}/></span><h3 className="font-semibold text-base">{group.title}</h3></div>
      <p className="text-sm text-muted-foreground leading-6 mb-5">{group.detail}</p>
      <div className="flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="px-2.5 py-1.5 border border-border text-xs text-muted-foreground">{item}</span>)}</div>
    </motion.div>)}</div>
    <div className="mt-10 border-t border-border pt-6">
      <p className="section-kicker mb-4">SEO experience across 5+ niches</p>
      <p className="text-sm text-muted-foreground leading-6 max-w-3xl mb-5">My experience includes different business models and search contexts. I adapt the research, page priorities, and measurement to the market rather than applying the same playbook everywhere.</p>
      <div className="flex flex-wrap gap-2">{['E-commerce','SaaS','Health','Insurance','Mortgage','B2B','Professional services','Home services','Travel & hospitality'].map(item=><span key={item} className="px-3 py-2 border border-border bg-background/50 text-xs text-muted-foreground">{item}</span>)}</div>
      <Link to="/contact" className="button-primary inline-flex mt-6">Discuss SEO for your market <ArrowUpRight size={15}/></Link>
    </div>
  </div>
</section>;
export default SkillsSection;
