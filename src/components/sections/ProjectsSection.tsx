import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  { number:'01', title:'SERP Live Tracker + Analyzer', type:'SEO TOOL · PYTHON', description:'A live search results dashboard that tracks ranking snapshots and makes movement, volatility and domain trends easier to read.', stack:['Python','Streamlit','Google Search API','Plotly'], github:'https://github.com/rajeshtudu/SERP-Live-Analyzer', demo:'https://serp-live-analyzer.streamlit.app/', mark:'SERP' },
  { number:'02', title:'Schema Generator', type:'SEO TOOL · STRUCTURED DATA', description:'A practical tool for creating JSON-LD structured data across common page types, from products and articles to local businesses.', stack:['Python','Streamlit','JSON-LD','Schema.org'], github:'https://github.com/rajeshtudu/Schema-Generator', demo:'https://schema-markup-generator.streamlit.app/', mark:'{ }' },
  { number:'03', title:'Knowledge Base Scraper', type:'AUTOMATION · WEB SCRAPING', description:'A lightweight scraper that turns help centers and documentation into structured content ready for analysis and AI workflows.', stack:['Python','BeautifulSoup','Web scraping'], github:'https://github.com/rajeshtudu/Knowledge-Base-Scraper', demo:'', mark:'KB / 03' },
];

const ProjectsSection = () => <section id="projects" className="section-padding">
  <div className="container-custom"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"><div><p className="section-kicker mb-5">03 — Selected work</p><h2 className="section-heading">Tools built to<br/><em>make work better.</em></h2></div><a className="button-secondary" href="https://github.com/rajeshtudu" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{projects.map((project,index)=><motion.article key={project.number} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.1}} className="project-card paper-card overflow-hidden">
      <div className="project-art"><span>{project.mark}</span><small className="absolute top-4 left-4 z-10 text-[10px] tracking-widest font-mono text-muted-foreground">PROJECT / {project.number}</small></div>
      <div className="p-6"><p className="section-kicker text-[9px] mb-3">{project.type}</p><h3 className="text-xl font-semibold leading-tight">{project.title}</h3><p className="text-sm text-muted-foreground leading-6 mt-3 min-h-[72px]">{project.description}</p><div className="flex flex-wrap gap-2 mt-4">{project.stack.map(tech=><span key={tech} className="text-[10px] text-muted-foreground border border-border px-2 py-1">{tech}</span>)}</div><div className="flex items-center gap-4 mt-6 pt-4 border-t border-border"><a className="project-link inline-flex items-center gap-1.5 text-xs font-medium" href={project.github} target="_blank" rel="noreferrer"><Github size={14}/> Source</a>{project.demo&&<a className="project-link inline-flex items-center gap-1.5 text-xs font-medium" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}</div></div>
    </motion.article>)}</div>
  </div>
</section>;
export default ProjectsSection;
