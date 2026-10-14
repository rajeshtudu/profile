import { ArrowUpRight, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const AboutSection = () => <section id="about" className="section-padding">
    <div className="container-custom grid lg:grid-cols-[.75fr_1.25fr] gap-14 lg:gap-24 items-start">
    <ScrollReveal><div><p className="section-kicker mb-5">01 — My journey</p><h2 className="section-heading">From keyword research to a wider SEO view</h2>
      <div className="mt-9 flex flex-col gap-4 text-sm text-muted-foreground">
        <span className="flex gap-3 items-center"><Briefcase size={16} className="text-primary"/> SEO Specialist at Enfity</span>
        <span className="flex gap-3 items-center"><MapPin size={16} className="text-primary"/> Lalitpur, Nepal</span>
        <span className="flex gap-3 items-center"><GraduationCap size={16} className="text-primary"/> Broadway Infosys</span>
      </div>
    </div></ScrollReveal>
    <ScrollReveal delay={0.1}><div className="pt-2">
      <div className="space-y-5 text-muted-foreground leading-7 max-w-2xl">
        <p>I started in SEO with keyword research, on-page updates, and reporting. As my work widened, I began looking at how content, links, local visibility, technical health, and e-commerce structure fit together.</p>
        <p>I use search data to investigate what changed, and I’m continuing to develop my semantic and entity SEO research through practical work and small Python tools.</p>
      </div>
      <a href="#experience" className="project-link inline-flex items-center gap-2 mt-8 text-sm font-semibold">More about my path <ArrowUpRight size={16}/></a>
    </div></ScrollReveal>
  </div>
</section>;
export default AboutSection;
