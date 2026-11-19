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
              <span className="status-dot" /> SEO Specialist · Lalitpur, Nepal
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="hero-title">
              <em>Semantic SEO Specialist</em> Building Topical Authority With Entity-Based SEO
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="hero-copy mt-7 max-w-xl">
              I help businesses show up for every search their customers make, in Google and in AI answers. I plan what your site should cover, then fix what holds it back with content, internal links, schema and technical SEO. My work spans 10+ industries and four SEO roles since 2024, with results you can check in the case studies and support from a one-time audit to ongoing work.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="flex flex-wrap gap-3 mt-9">
              <Link className="button-primary" to="/case-studies/">View Case Studies <ArrowUpRight size={16} /></Link>
              <Link className="button-secondary" to="/contact/">Discuss an SEO Project</Link>
            </motion.div>
            <div className="hero-credentials mt-10" aria-label="Professional experience highlights">
              {[['20+', 'SEO Projects'], ['10+', 'Industries'], ['2', 'SEO Tools Built']].map(([value, label]) => <div className="hero-credential" key={label}>
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
            <div className="portrait-frame"><img src={profileImage} alt="Portrait of Rajesh Tudu, SEO specialist" className="hero-portrait" /></div>
            <figcaption className="portrait-caption"><strong>Rajesh Tudu</strong><span>SEO Specialist · Enfity</span></figcaption>
            <figure className="entity-card" aria-label="Example entity map: a brand linked to its service, topic, location and profiles by named relationships">
              <figcaption className="em-head"><span>Entity map</span><span className="em-live">● live</span></figcaption>
              <svg viewBox="0 0 260 170" aria-hidden="true">
                {[
                  { x: 130, y: 22, label: 'Service', rel: 'offers' },
                  { x: 236, y: 70, label: 'Topic', rel: 'about' },
                  { x: 200, y: 150, label: 'Location', rel: 'areaServed' },
                  { x: 60, y: 150, label: 'Wikidata', rel: 'sameAs' },
                  { x: 24, y: 70, label: 'Author', rel: 'founder' },
                ].map((n, i) => <g key={n.label} className="em-edge" style={{ animationDelay: `${i * 0.6}s` }}>
                  <line x1="130" y1="88" x2={n.x} y2={n.y} />
                  <text x={(130 + n.x) / 2} y={(88 + n.y) / 2 - 3} textAnchor="middle" className="em-rel">{n.rel}</text>
                  <circle cx={n.x} cy={n.y} r="5" className="em-node" />
                  <text x={n.x} y={n.y + (n.y > 88 ? -10 : 15)} textAnchor="middle" className="em-label">{n.label}</text>
                </g>)}
                <circle cx="130" cy="88" r="18" className="em-core" />
                <text x="130" y="91" textAnchor="middle" className="em-core-label">Brand</text>
              </svg>
              <p className="em-foot">subject → predicate → object</p>
            </figure>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
