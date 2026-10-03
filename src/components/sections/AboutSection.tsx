import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => <section id="about" className="section-padding">
  <div className="container-custom grid lg:grid-cols-[.75fr_1.25fr] gap-14 lg:gap-24 items-start">
    <div><p className="section-kicker mb-5">01 — A little about me</p><h2 className="section-heading">Making the<br/><em>web make sense.</em></h2>
      <div className="mt-9 flex flex-col gap-4 text-sm text-muted-foreground">
        <span className="flex gap-3 items-center"><Briefcase size={16} className="text-primary"/> SEO Specialist at Enfity</span>
        <span className="flex gap-3 items-center"><MapPin size={16} className="text-primary"/> Lalitpur, Nepal</span>
        <span className="flex gap-3 items-center"><GraduationCap size={16} className="text-primary"/> Broadway Infosys</span>
      </div>
    </div>
    <div className="pt-2">
      <p className="about-story">Semantic SEO is how I connect search intent, meaningful topics and the pages that serve them.</p>
      <div className="mt-8 space-y-5 text-muted-foreground leading-7 max-w-2xl">
        <p>I start with the audience and the meaning behind their searches: the topics, entities, questions and intent that shape a useful site. I turn that research into keyword maps, page plans and connected site architecture, then support it with on-page improvements, off-page authority, local visibility and technical SEO.</p>
        <p>My work spans ecommerce, local and service businesses, including Shopify projects. I contribute across research, content, link opportunities, Google Business Profile optimization, technical audits and performance reporting. I also build lightweight Python tools that make SEO research and recurring tasks more efficient.</p>
      </div>
      <a href="#experience" className="project-link inline-flex items-center gap-2 mt-8 text-sm font-semibold">More about my path <ArrowUpRight size={16}/></a>
      <div className="grid grid-cols-3 gap-5 mt-14 pt-7 border-t border-border">
        {[['20+','projects worked on'],['5+','niches explored'],['2+','years in SEO']].map(([n,label])=><div key={label}><strong className="block text-3xl md:text-4xl font-semibold tracking-tight">{n}</strong><span className="text-xs text-muted-foreground">{label}</span></div>)}
      </div>
    </div>
  </div>
</section>;
export default AboutSection;
