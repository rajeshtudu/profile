import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import { caseStudies, caseCategories } from '@/data/caseStudies';

export function CaseCard({ c }: { c: (typeof caseStudies)[number] }) {
  return <Link to={`/case-studies/${c.slug}/`} className="cs-card">
    <span className="cs-card-tag">{c.category} · {c.industry}</span>
    <strong className="cs-card-metric">{c.headline.value}</strong>
    <span className="cs-card-metric-label">{c.headline.label}</span>
    <h3>{c.title}</h3>
    <p>{c.summary}</p>
    <dl className="cs-card-readings">{c.readings.map(([l, v]) => <div key={l}><dt>{l}</dt><dd>{v}</dd></div>)}</dl>
    <span className="cs-card-foot"><span>{c.date.slice(0, 4)} · Anonymized</span><span className="inline-flex items-center gap-1">Read case study <ArrowUpRight size={14}/></span></span>
  </Link>;
}

const CaseStudiesSection = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', ...caseCategories];
  const count = (f: string) => f === 'All' ? caseStudies.length : caseStudies.filter(c => c.category === f).length;

  return <section id="case-studies" className="section-padding" aria-labelledby="cases-title">
    <div className="container-custom">
      <ScrollReveal><div className="home-section-head"><div><p className="section-kicker mb-4">Case Studies</p><h2 id="cases-title" className="section-heading">Client Case Studies</h2></div><p className="home-section-aside">Each client case study shows what was done, what changed and where the numbers come from, with the newest case at the top.</p></div></ScrollReveal>

      {filters.length > 2 && <div className="cs-filters" role="group" aria-label="Filter case studies by type">
        {filters.map(f => <button key={f} type="button" className={'cs-filter' + (f === filter ? ' is-active' : '')} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f} <span>{count(f)}</span></button>)}
      </div>}

      {/* Every card stays in the HTML; filtering only hides cards, so crawlers still see all case studies. */}
      <ul className="cs-grid">
        {caseStudies.map((c, i) => <motion.li key={c.slug} hidden={filter !== 'All' && c.category !== filter} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i % 3)*.06}}>
          <CaseCard c={c} />
        </motion.li>)}
      </ul>

      <motion.article initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="cs-sample">
        <div className="cs-sample-side"><p className="section-kicker">Work Sample · Shopify</p><h3>Catalog Structure for Shopify Stores</h3><ShoppingBag size={22} className="text-primary mt-6" aria-hidden="true"/></div>
        <div className="cs-sample-body"><p>For e-commerce sites, I map products to collections and search intent, then plan collection and product page content, internal links, and filter structure. The goal is a catalog that is easier for customers to navigate and easier for search engines to understand.</p><ul>{['Product-to-collection mapping','Collection page planning','Internal linking','Filter architecture'].map(item=><li key={item}>{item}</li>)}</ul><p className="cs-sample-note">A planning sample, not a client case study.</p></div>
      </motion.article>
    </div>
  </section>;
};

export default CaseStudiesSection;
