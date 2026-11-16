import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/rajesh-profile.jpg';
import SocialLinks from '@/components/SocialLinks';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={sectionRef} id="home" className="hero-section relative min-h-[92svh] flex items-center overflow-hidden pt-24">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="container-custom relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-20 items-center">
          <div className="min-w-0">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="eyebrow mb-7">
              <span className="status-dot" /> SEO specialist · Semantic &amp; entity SEO
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="hero-title">
              Understand search intent. Plan the right pages.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="hero-copy mt-7 max-w-xl">
              I work across e-commerce and a range of other industries, using semantic and entity research to guide practical on-page, technical, local, and off-page SEO. The priorities change with each business, audience, and site.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="flex flex-wrap gap-3 mt-9">
              <Link className="button-primary" to="/work">View case studies <ArrowUpRight size={16} /></Link>
              <Link className="button-secondary" to="/contact">Discuss an SEO project</Link>
            </motion.div>
            <div className="grid grid-cols-3 gap-4 max-w-lg mt-10 pt-6 border-t border-border">
              {[['20+', 'SEO projects'], ['5+', 'niches worked in'], ['2', 'SEO tools built']].map(([value, label]) => <div key={label}>
              <strong className="font-sans font-semibold text-2xl md:text-3xl">{value}</strong>
                <span className="block text-[10px] md:text-xs text-muted-foreground mt-1">{label}</span>
              </div>)}
            </div>
            <div className="flex gap-4 mt-10 text-muted-foreground">
              <SocialLinks className="hero-social-links" />
              <a className="social-link" href="mailto:tudurajesh34@gmail.com" aria-label="Email"><Mail size={18}/></a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .7 }} style={{ y: prefersReducedMotion ? 0 : portraitY }} className="hero-portrait-wrap min-w-0">
            <div className="portrait-frame"><img src={profileImage} alt="Rajesh Tudu, SEO specialist" className="hero-portrait" /></div>
            <div className="portrait-note"><span className="note-mark">↗</span><span>Research<br/>Page plan<br/>Measure</span></div>
          </motion.div>
        </div>
        <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={16}/></a>
      </div>
    </section>
  );
};

export default HeroSection;
