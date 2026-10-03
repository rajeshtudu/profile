import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  { date:'JAN 2026 — NOW', title:'Jr. SEO Specialist', org:'Enfity', place:'Lalitpur, Nepal', note:'Contribute across on-page, technical and e-commerce SEO, with research, optimization and performance reporting.' },
  { date:'DEC 2025 — JAN 2026', title:'Jr. SEO Specialist', org:'NEPA Works', place:'Kathmandu, Nepal', note:'Supported client SEO through content and on-page improvements, research and technical site checks.' },
  { date:'JUL 2024 — JUN 2025', title:'SEO Executive', org:'RankMeTop', place:'Kathmandu, Nepal', note:'Worked across keyword research, on-page improvements and link acquisition; supported optimization of 50+ pages and documented organic search performance.' },
  { date:'JAN 2024 — JUN 2024', title:'SEO Intern', org:'RankMeTop', place:'Kathmandu, Nepal', note:'Supported keyword research, campaign execution and foundational technical and on-page SEO.' },
  { date:'DEC 2023 — JAN 2024', title:'Data Entry Specialist', org:'RankMeTop', place:'Kathmandu, Nepal', note:'Maintained and validated data and prepared Excel reports.' },
];
const learning = ['AI Training','Data Science Training','Python & Django Training','Web Design Training'];
const ExperienceSection = () => <section id="experience" className="section-padding bg-secondary/40">
  <div className="container-custom"><div className="mb-14"><p className="section-kicker mb-5">06 — The journey</p><h2 className="section-heading">Learning by <em>doing.</em></h2></div>
    <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-16">
      <div><h3 className="flex items-center gap-3 font-semibold mb-8"><BriefcaseBusiness size={18} className="text-primary"/> Experience</h3><div>{roles.map((role,i)=><motion.article key={role.title+role.date} initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.06}} className="timeline-item"><div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"><div><p className="font-semibold">{role.title}</p><span className="text-sm mt-1 text-muted-foreground">{role.org}</span><p className="text-xs text-muted-foreground mt-1">{role.place}</p></div><span className="font-mono text-[10px] tracking-wider text-primary">{role.date}</span></div><p className="text-sm text-muted-foreground mt-3 leading-6">{role.note}</p></motion.article>)}</div></div>
      <div><h3 className="flex items-center gap-3 font-semibold mb-8"><GraduationCap size={18} className="text-primary"/> Training & foundations</h3><p className="text-muted-foreground text-sm leading-6 mb-6">Training at Broadway Infosys helped me build a foundation across data, programming and the web.</p><div className="grid gap-3">{learning.map((item,i)=><div className="paper-card p-4 flex items-center justify-between" key={item}><span className="text-sm font-medium">{item}</span><span className="text-[10px] font-mono text-muted-foreground">2023 · 0{i+1}</span></div>)}</div></div>
    </div>
  </div>
</section>;
export default ExperienceSection;
