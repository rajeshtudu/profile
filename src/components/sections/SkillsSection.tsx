import { motion } from 'framer-motion';
import { Search, BarChart3, Code2, Wrench } from 'lucide-react';

const groups = [
  { icon: Search, title: 'Organic search', items: ['Technical SEO','On-page SEO','E-commerce SEO','Keyword research','Content optimization','Schema markup'] },
  { icon: BarChart3, title: 'Measurement', items: ['Google Search Console','Google Analytics 4','SEMrush','Ahrefs','Screaming Frog','Looker Studio'] },
  { icon: Code2, title: 'Automation & code', items: ['Python','Streamlit','Web scraping','JavaScript','React','JSON-LD'] },
  { icon: Wrench, title: 'Platforms', items: ['WordPress','Git','MySQL','Odoo','Google Sheets','Excel'] },
];
const SkillsSection = () => <section id="skills" className="section-padding bg-secondary/40">
  <div className="container-custom"><div className="max-w-2xl mb-14"><p className="section-kicker mb-5">02 — What I bring</p><h2 className="section-heading">A mix of <em>strategy</em><br/>and hands-on work.</h2><p className="text-muted-foreground mt-5 leading-7">From crawl diagnostics to clear reporting, I bring the tools and judgment to turn search data into a focused next step.</p></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{groups.map((group,index)=><motion.div key={group.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="paper-card p-6 min-h-64">
      <div className="flex items-center gap-3 mb-7"><span className="w-9 h-9 grid place-items-center bg-primary/10 text-primary"><group.icon size={17}/></span><h3 className="font-semibold text-base">{group.title}</h3></div>
      <div className="flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="px-2.5 py-1.5 border border-border text-xs text-muted-foreground">{item}</span>)}</div>
    </motion.div>)}</div>
  </div>
</section>;
export default SkillsSection;
