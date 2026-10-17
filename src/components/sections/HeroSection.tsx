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
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-20 items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="eyebrow mb-7">
              <span className="status-dot" /> SEO Specialist · Semantic &amp; Entity SEO
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="hero-title">
              Semantic and entity SEO across industries.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="hero-copy mt-7 max-w-xl">
              My experience spans e-commerce SEO and projects in SaaS, health, insurance, mortgage, B2B, professional services, and other markets. I start with how people search and how each site is organized, then apply on-page, off-page, local, and technical SEO to the needs of that business.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="flex flex-wrap gap-3 mt-9">
              <Link className="button-primary" to="/work">View case studies <ArrowUpRight size={16} /></Link>
              <Link className="button-secondary" to="/contact">Get in touch</Link>
            </motion.div>
            <div className="grid grid-cols-3 gap-4 max-w-lg mt-10 pt-6 border-t border-border">
              {[['20+', 'SEO projects'], ['5+', 'niches worked in'], ['2+', 'years in SEO']].map(([value, label]) => <div key={label}>
              <strong className="font-sans font-semibold text-2xl md:text-3xl">{value}</strong>
                <span className="block text-[10px] md:text-xs text-muted-foreground mt-1">{label}</span>
              </div>)}
            </div>
            <div className="flex gap-4 mt-10 text-muted-foreground">
              <SocialLinks className="hero-social-links" />
              <a className="social-link" href="mailto:tudurajesh34@gmail.com" aria-label="Email"><Mail size={18}/></a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .7 }} style={{ y: prefersReducedMotion ? 0 : portraitY }} className="hero-portrait-wrap">
            <div className="portrait-frame"><img src={profileImage} alt="Portrait of Rajesh Tudu, SEO Specialist focused on semantic SEO and entity SEO" className="hero-portrait" /></div>
            <div className="portrait-note"><span className="note-mark">↗</span><span>Search intent<br/>Topic + entity<br/>Page plan</span></div>
          </motion.div>
        </div>
        <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={16}/></a>
      </div>
    </section>
  );
};

export default HeroSection;
