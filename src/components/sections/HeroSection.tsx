import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/rajesh-profile.jpg';

const HeroSection = () => (
  <section id="home" className="hero-section relative min-h-[92svh] flex items-center overflow-hidden pt-24">
    <div className="hero-grid absolute inset-0 pointer-events-none" />
    <div className="container-custom relative z-10 py-20">
      <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-20 items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="eyebrow mb-7">
            <span className="status-dot" /> SEO specialist · Semantic SEO researcher · Lalitpur, Nepal
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="hero-title">
            <span className="hidden sm:inline">SEO built around<br />how people <em>search.</em></span>
            <span className="sm:hidden">Search intent.<br /><em>Right page.</em></span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="hero-copy mt-7 max-w-xl">
            I’m Rajesh Tudu, an SEO specialist and semantic SEO researcher. I turn search intent into clear page plans, then bring content, on-page, off-page, local and technical SEO together to help people find the right pages.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="flex flex-wrap gap-3 mt-9">
            <a className="button-primary" href="#case-studies">See selected work <ArrowUpRight size={16} /></a>
            <a className="button-secondary" href="#services">Explore services</a>
          </motion.div>
          <div className="grid grid-cols-3 gap-4 max-w-lg mt-10 pt-6 border-t border-border">
            {[['20+', 'projects'], ['5+', 'niches'], ['2+', 'years in SEO']].map(([value, label]) => <div key={label}>
              <strong className="font-serif text-2xl md:text-3xl">{value}</strong>
              <span className="block text-[10px] md:text-xs text-muted-foreground mt-1">{label}</span>
            </div>)}
          </div>
          <div className="flex gap-4 mt-10 text-muted-foreground">
            <a className="social-link" href="https://linkedin.com/in/rajeshtudu" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a className="social-link" href="https://github.com/rajeshtudu" aria-label="GitHub"><Github size={18}/></a>
            <a className="social-link" href="mailto:tudurajesh34@gmail.com" aria-label="Email"><Mail size={18}/></a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .7 }} className="hero-portrait-wrap">
          <div className="portrait-frame"><img src={profileImage} alt="Rajesh Tudu" className="hero-portrait" /></div>
          <div className="portrait-note"><span className="note-mark">✳</span><span>Understand the search.<br/>Plan the right page.</span></div>
          <span className="portrait-index">01 / 04</span>
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={16}/></a>
    </div>
  </section>
);

export default HeroSection;
