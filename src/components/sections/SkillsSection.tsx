import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { skillGroups } from '@/data/skills';

const SkillsSection = () => <section id="skills" className="section-padding" aria-labelledby="skills-title">
  <div className="container-custom">
    <ScrollReveal><div className="home-section-head"><div><p className="section-kicker mb-4">Skills and Toolkit</p><h2 id="skills-title" className="section-heading">SEO Skills and Tools</h2></div><p className="home-section-aside">SEO skills fall into two groups and tools into four. The mix changes with each site and project.</p></div></ScrollReveal>
    <div className="skills-grid-v2">{skillGroups.map((group, index) => <motion.div key={group.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}} className={`skill-card ${group.kind === 'skill' ? 'is-skill' : ''}`}>
      <div className="skill-card-head"><span className="skill-icon"><group.icon size={17} aria-hidden="true"/></span><h3>{group.title}</h3><span className="skill-kind">{group.kind === 'skill' ? 'Skill' : 'Tools'}</span></div>
      <p className="skill-detail">{group.detail}</p>
      <ul className="skill-tags" aria-label={group.title}>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
    </motion.div>)}</div>
  </div>
</section>;
export default SkillsSection;
