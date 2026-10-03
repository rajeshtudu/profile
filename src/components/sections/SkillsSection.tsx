import { motion } from 'framer-motion';
import { Search, BarChart3, Code2, Wrench } from 'lucide-react';

const groups = [
  { icon: Search, title: 'SEO disciplines', items: ['Semantic SEO','On-page SEO','Off-page SEO','Local SEO','Technical SEO','E-commerce SEO'] },
  { icon: BarChart3, title: 'Research & measurement', items: ['Search intent','Topic & entity research','Keyword research','Google Search Console','Google Analytics 4','SEMrush','Ahrefs','Screaming Frog'] },
  { icon: Wrench, title: 'Platforms & workflows', items: ['WordPress','Shopify','Google Sheets','Excel','Odoo','Git','MySQL'] },
  { icon: Code2, title: 'Automation & code', items: ['Python','Streamlit','Web scraping','JavaScript','React','JSON-LD'] },
];
const SkillsSection = () => <section id="skills" className="section-padding bg-secondary/40">
  <div className="container-custom"><div className="max-w-2xl mb-14"><p className="section-kicker mb-5">Areas of practice</p><h2 className="section-heading">Research, platforms<br/>and <em>SEO practice.</em></h2><p className="text-muted-foreground mt-5 leading-7">The work spans the research that shapes a search strategy, the SEO disciplines that put it into practice, and the tools used to measure and improve it.</p></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{groups.map((group,index)=><motion.div key={group.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="paper-card p-6 min-h-64">
      <div className="flex items-center gap-3 mb-7"><span className="w-9 h-9 grid place-items-center bg-primary/10 text-primary"><group.icon size={17}/></span><h3 className="font-semibold text-base">{group.title}</h3></div>
      <div className="flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="px-2.5 py-1.5 border border-border text-xs text-muted-foreground">{item}</span>)}</div>
    </motion.div>)}</div>
  </div>
</section>;
export default SkillsSection;
