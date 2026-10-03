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
            <span className="status-dot" /> SEO specialist · Semantic SEO researcher · Kathmandu, Nepal
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="hero-title">
            SEO built around<br />how people <em>search.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="hero-copy mt-7 max-w-xl">
            I’m Rajesh Tudu, an SEO specialist using semantic research to connect search intent, site architecture and useful content—with on-page, off-page, local and technical SEO working together to support organic growth.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="flex flex-wrap gap-3 mt-9">
            <a className="button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
            <a className="button-secondary" href="#contact">Get in touch</a>
          </motion.div>
          <div className="flex gap-4 mt-10 text-muted-foreground">
            <a className="social-link" href="https://linkedin.com/in/rajeshtudu" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a className="social-link" href="https://github.com/rajeshtudu" aria-label="GitHub"><Github size={18}/></a>
            <a className="social-link" href="mailto:tudurajesh34@gmail.com" aria-label="Email"><Mail size={18}/></a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .7 }} className="hero-portrait-wrap">
          <div className="portrait-frame"><img src={profileImage} alt="Rajesh Tudu" className="hero-portrait" /></div>
          <div className="portrait-note"><span className="note-mark">✳</span><span>Curious by nature.<br/>Search-focused by craft.</span></div>
          <span className="portrait-index">01 / 04</span>
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={16}/></a>
    </div>
  </section>
);

export default HeroSection;
