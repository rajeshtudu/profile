import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/rajesh-profile.jpg';
import SocialLinks from '@/components/SocialLinks';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={sectionRef} id="home" className="hero-section relative min-h-[88svh] flex items-center overflow-hidden pt-24">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="container-custom relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-20 items-center">
          <div className="min-w-0">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="eyebrow mb-7">
              <span className="status-dot" /> Rajesh Tudu · SEO Specialist · Semantic &amp; Entity SEO
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="hero-title">
              SEO Strategy Across E-commerce and Diverse Client Industries
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="hero-copy mt-7 max-w-xl">
              My experience spans e-commerce SEO and client work across varied markets. I use semantic and entity research to connect audience needs with page strategy, then apply on-page, technical, local, and off-page SEO to each site’s priorities.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="flex flex-wrap gap-3 mt-9">
              <Link className="button-primary" to="/work/">View Case Studies <ArrowUpRight size={16} /></Link>
              <Link className="button-secondary" to="/contact/">Discuss an SEO Project</Link>
            </motion.div>
            <div className="hero-credentials mt-10" aria-label="Professional experience highlights">
              {[['20+', 'SEO Projects'], ['5+', 'Markets'], ['2', 'SEO Tools Built']].map(([value, label]) => <div className="hero-credential" key={label}>
              <strong>{value}</strong>
                <span>{label}</span>
              </div>)}
            </div>
            <div className="flex gap-4 mt-10 text-muted-foreground">
              <SocialLinks className="hero-social-links" />
              <a className="social-link" href="mailto:tudurajesh34@gmail.com" aria-label="Email"><Mail size={18}/></a>
            </div>
          </div>
          <motion.figure initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .7 }} style={{ y: prefersReducedMotion ? 0 : portraitY }} className="hero-portrait-wrap min-w-0">
            <div className="portrait-frame"><img src={profileImage} alt="Portrait of Rajesh Tudu" className="hero-portrait" /></div>
            <figcaption className="portrait-caption"><strong>Rajesh Tudu</strong><span>SEO Specialist · Lalitpur, Nepal</span></figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
