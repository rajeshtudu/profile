import { motion } from 'framer-motion';
import { ArrowUpRight, Search, FileCheck2, TrendingUp } from 'lucide-react';

const CaseStudiesSection = () => <section id="case-studies" className="section-padding bg-secondary/40">
  <div className="container-custom">
    <div className="max-w-3xl mb-12">
      <p className="section-kicker mb-5">04 — Selected case study</p>
      <h2 className="section-heading">The work, the <em>outcome.</em></h2>
      <p className="text-muted-foreground leading-7 mt-5">An anonymized example of how research and coordinated SEO work can support measurable organic growth. Client and website identity are withheld.</p>
    </div>
    <motion.article initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="paper-card grid lg:grid-cols-[.72fr_1.28fr]">
      <div className="bg-foreground text-background p-8 md:p-10 flex flex-col justify-between min-h-72">
        <div><p className="text-primary font-mono text-[10px] tracking-[.16em] uppercase">Anonymized client engagement</p><h3 className="font-serif text-3xl md:text-4xl mt-6 leading-tight">Growing organic visibility across key pages</h3></div>
        <div className="mt-10"><strong className="font-serif text-6xl text-primary">35%</strong><p className="text-sm text-background/70 mt-1">organic traffic growth<br/>within six months</p></div>
      </div>
      <div className="p-8 md:p-10">
        <div className="grid sm:grid-cols-2 gap-8">
          <div><div className="flex gap-2 items-center text-primary"><Search size={16}/><h4 className="font-semibold text-sm">Research focus</h4></div><p className="text-sm leading-6 text-muted-foreground mt-3">Keyword research identified relevant search opportunities and guided page-level targeting.</p></div>
          <div><div className="flex gap-2 items-center text-primary"><FileCheck2 size={16}/><h4 className="font-semibold text-sm">SEO work</h4></div><p className="text-sm leading-6 text-muted-foreground mt-3">Optimized 50+ pages and supported backlink acquisition as part of the broader SEO effort.</p></div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex items-start gap-3"><TrendingUp size={17} className="text-primary shrink-0 mt-0.5"/><p className="text-xs leading-5 text-muted-foreground">Reported outcome: organic traffic increased by 35% over a six-month period. Client identity and website name are withheld.</p></div>
        <a href="#contact" className="project-link inline-flex items-center gap-2 mt-7 text-sm font-semibold">Talk through a similar project <ArrowUpRight size={15}/></a>
      </div>
    </motion.article>
  </div>
</section>;

export default CaseStudiesSection;
