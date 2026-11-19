import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import InquiryForm from '@/components/InquiryForm';
import { caseStudies } from '@/data/caseStudies';

const stack = ['Google Search Console', 'Google Analytics 4', 'Semrush', 'Ahrefs', 'Screaming Frog', 'SE Ranking', 'Python', 'Shopify', 'WordPress', 'Schema.org', 'Wikidata'];

export function StackStrip() {
  return <section className="stack-strip" aria-label="SEO tools I use">
    <div className="stack-track">
      {[...stack, ...stack].map((tool, i) => <span key={tool + i} aria-hidden={i >= stack.length || undefined}>{tool}</span>)}
    </div>
  </section>;
}

const specialisms = [
  {
    term: 'Semantic SEO',
    definition: 'Semantic SEO builds pages around the questions people ask and the meaning behind them, not single keywords.',
    delivers: ['Query network grouped by intent', 'Semantic content briefs with heading order and answer format', 'Cannibalization fixes: merge, redirect or differentiate'],
  },
  {
    term: 'Entity-Based SEO',
    definition: 'Entity-based SEO makes your brand, products and people clear to search engines and AI answers, so they recognize you without guessing.',
    delivers: ['Central entity and source context brief', 'Schema with about, mentions and sameAs, checked against Wikidata', 'Consistent entity names and profiles across the web'],
  },
  {
    term: 'Topical Authority',
    definition: 'Topical authority is the trust a site earns by covering its subject fully and linking its pages logically.',
    delivers: ['Topical map with core and outer sections', 'Internal link architecture placed by section and intent', 'Coverage gaps ranked against the sites that outrank you'],
  },
];

export function Specialisms() {
  return <section id="specialisms" className="section-padding" aria-labelledby="specialisms-title">
    <div className="container-custom specialisms-layout">
      <div className="specialisms-head">
        <p className="section-kicker mb-4">Three Specialisms, One Method</p>
        <h2 id="specialisms-title" className="section-heading">How the Three Specialisms Work Together</h2>
        <p className="mt-5 text-muted-foreground leading-7">The three specialisms work as one method: semantic SEO shapes what each page means, entity-based SEO makes clear what the business is, and topical authority builds as the site covers its subject fully.</p>
        <Link to="/services/" className="project-link inline-flex items-center gap-2 mt-6">See all SEO services <ArrowUpRight size={15}/></Link>
      </div>
      <ol className="specialism-list">
        {specialisms.map((s, i) => <li key={s.term} className="specialism-row">
          <ScrollReveal delay={i * .05}>
            <span className="specialism-num">0{i + 1}</span>
            <h3>{s.term}</h3>
            <p className="specialism-def">{s.definition}</p>
            <ul className="specialism-delivers" aria-label={`${s.term} deliverables`}>{s.delivers.map(d => <li key={d}>{d}</li>)}</ul>
          </ScrollReveal>
        </li>)}
      </ol>
    </div>
  </section>;
}

const steps = [
  { t: 'Define the Central Entity and Source Context', d: 'What the business is, how it earns and what it should be known for, which sets what the map covers.', show: 'Your business becomes the central entity, and its source context sets what the map covers.' },
  { t: 'Map and Filter the Query Network', d: 'Every relevant search from Search Console, search results and competitors, grouped by what the searcher wants and filtered to the ones that matter.', show: 'Queries from Search Console, SERPs and competitors surround the entity.' },
  { t: 'Build the Core and Outer Sections', d: 'The core section covers what the business sells; the outer section covers related questions. Each question gets one page.', show: 'Queries group into core and outer sections, and each intent gets exactly one page.' },
  { t: 'Write Briefs and Publish', d: 'Every page gets a brief. The most important pages go live ahead of the rest, linked together and marked up with schema.', show: 'Internal links connect every page to its section, and schema states the entities.' },
  { t: 'Measure, Expand and Consolidate', d: 'Search Console shows which sections grew. The map then expands, and pages that compete or go stale are merged.', show: 'Sections that gained show where the map grows next, and overlapping pages are merged.' },
];

const clusters = [
  { x: 92, y: 92, label: 'Services', pages: [[30, 36], [36, 152]] },
  { x: 328, y: 92, label: 'Problems', pages: [[390, 36], [384, 152]] },
  { x: 210, y: 318, label: 'Guides', pages: [[136, 362], [284, 362]] },
];
const queries = [[150, 150], [270, 150], [140, 230], [280, 230], [210, 112], [210, 270], [118, 190], [302, 190]];

export function TopicalMapMethod() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setStep(v => (v + 1) % steps.length), 3200);
    return () => window.clearInterval(id);
  }, [auto]);
  const pick = (i: number) => { setAuto(false); setStep(i); };
  const on = (min: number) => step >= min;

  return <section id="method" className="method-section section-padding" aria-labelledby="method-title">
    <div className="container-custom method-layout">
      <div>
        <p className="section-kicker mb-4">Method</p>
        <h2 id="method-title" className="section-heading">Topical Map Process in Five Steps</h2>
        <p className="mt-4 text-muted-foreground leading-7">A topical map is built and grown in five steps, from understanding the business to measuring results. Select a step to see what it adds to the map.</p>
        <ol className="method-steps" role="list">
          {steps.map((s, i) => <li key={s.t}>
            <button type="button" className={`method-step${i === step ? ' is-active' : ''}${i < step ? ' is-done' : ''}`} aria-pressed={i === step} onClick={() => pick(i)}>
              <span className="method-num">{i + 1}</span>
              <span><span className="method-title">{s.t}</span><span className="method-desc">{s.d}</span></span>
            </button>
          </li>)}
        </ol>
      </div>
      <figure className="topical-map" aria-labelledby="map-caption">
        <div className="tm-toolbar">
          <span className="tm-stage">Step {step + 1} of {steps.length}</span>
          <button type="button" className="tm-play" onClick={() => setAuto(v => !v)} aria-pressed={auto}>{auto ? 'Pause' : 'Play'}</button>
        </div>
        <svg viewBox="0 0 420 400" role="img" aria-label="Topical map diagram that builds up step by step: central entity, query network, clusters and pages, links and schema, and measured growth">
          <g className={`tm-layer ${on(1) && !on(2) ? 'is-on' : ''}`}>
            {queries.map(([x, y]) => <g key={x + '-' + y}><line x1="210" y1="190" x2={x} y2={y} className="tm-query-line"/><circle cx={x} cy={y} r="5" className="tm-query"/></g>)}
          </g>
          <g className={`tm-layer ${on(2) ? 'is-on' : ''}`}>
            {clusters.map(c => <g key={c.label}>
              <line x1="210" y1="190" x2={c.x} y2={c.y} className={`tm-edge ${on(3) ? 'is-flow' : ''}`}/>
              {c.pages.map(([px, py]) => <g key={px + '-' + py}><line x1={c.x} y1={c.y} x2={px} y2={py} className={`tm-edge ${on(3) ? 'is-flow' : ''}`}/><rect x={px - 18} y={py - 10} width="36" height="20" rx="5" className="tm-page"/></g>)}
            </g>)}
            <line x1="92" y1="92" x2="328" y2="92" className={`tm-cross ${on(3) ? 'is-on' : ''}`}/>
            {clusters.map(c => <g key={c.label + 'n'} className={`tm-cluster-g ${on(4) && c.label !== 'Guides' ? 'is-gain' : ''}`}>
              <circle cx={c.x} cy={c.y} r="28" className="tm-cluster"/>
              <text x={c.x} y={c.y + 4} textAnchor="middle" className="tm-label">{c.label}</text>
              {on(4) && c.label !== 'Guides' && <text x={c.x + 30} y={c.y - 22} className="tm-gain">▲</text>}
            </g>)}
            {on(4) && <g className="tm-next"><rect x="300" y="300" width="96" height="28" rx="14"/><text x="348" y="318" textAnchor="middle">+ next cluster</text></g>}
          </g>
          <g className={`tm-schema ${on(3) ? 'is-on' : ''}`}><rect x="160" y="250" width="100" height="22" rx="11"/><text x="210" y="265" textAnchor="middle">JSON-LD schema</text></g>
          <circle cx="210" cy="190" r="46" className="tm-core"/>
          <text x="210" y="186" textAnchor="middle" className="tm-core-label">Central</text>
          <text x="210" y="203" textAnchor="middle" className="tm-core-label">entity</text>
        </svg>
        <figcaption id="map-caption" aria-live="polite">{steps[step].show}</figcaption>
        <div className="tm-progress" aria-hidden="true">{steps.map((_, i) => <span key={i} className={i <= step ? 'is-on' : ''}/>)}</div>
      </figure>
    </div>
  </section>;
}

const markets = ['E-commerce', 'SaaS', 'Finance', 'Insurance', 'Mortgage', 'Health', 'Law', 'HVAC', 'Home services', 'B2B', 'Professional services', 'Travel & hospitality'];

export function MarketsStrip() {
  return <section id="markets" className="markets-strip" aria-labelledby="markets-title">
    <div className="container-custom markets-strip-inner">
      <div><p className="section-kicker mb-4">Industry Experience</p><h2 id="markets-title" className="section-heading">SEO Experience Across 10+ Industries</h2><p className="markets-copy">Every industry searches differently, so the research changes while the method stays the same.</p></div>
      <ul aria-label="Markets with client SEO work">{markets.map(m => <li key={m}>{m}</li>)}</ul>
    </div>
  </section>;
}

const ctaKpis = ['Organic traffic', 'Leads and calls', 'Search visibility', 'AI citations', 'Brand mentions'];

export function ClosingCta() {
  return <section id="contact" className="closing-cta" aria-labelledby="cta-title">
    <div className="container-custom closing-cta-inner">
      <h2 id="cta-title">Turn Search Visibility Into Leads, Calls and Sales</h2>
      <p>SEO that is measured by what moves your business, from Google results to AI answers. Share your website, and I&rsquo;ll show you where to grow.</p>
      <ul className="cta-kpis" aria-label="What the work is measured by">{ctaKpis.map(k => <li key={k}>{k}</li>)}</ul>
      <Link className="closing-cta-button" to="/contact/">Get in Touch <ArrowUpRight size={17}/></Link>
    </div>
  </section>;
}

const strengths = [
  { t: 'Direct Contact', d: 'You work with the person doing the research and the implementation, not an account manager.' },
  { t: 'Plain-Language Updates', d: 'Reports explain what changed, why it matters and what comes next, without jargon.' },
  { t: 'Built on Client Work', d: 'Every method on this site comes from live client projects, not theory.' },
];

export function IntroBio() {
  return <section id="intro" className="section-padding" aria-labelledby="intro-title">
    <div className="container-custom intro-v2">
      <div>
        <p className="section-kicker mb-4">About Rajesh Tudu</p>
        <h2 id="intro-title" className="section-heading">About Rajesh Tudu, SEO Specialist at Enfity</h2>
        <p className="intro-v2-body">I&rsquo;m Rajesh Tudu, based in Lalitpur, Nepal. I started in SEO in 2024 with keyword research and link building, and today I work as an SEO Specialist at Enfity on client sites in e-commerce, SaaS, finance, law, HVAC and other industries.</p>
        <Link to="/about/" className="project-link inline-flex items-center gap-2 mt-6">Read my full SEO background <ArrowUpRight size={15}/></Link>
      </div>
      <ol className="intro-v2-list">
        {strengths.map((x, i) => <li key={x.t}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{x.t}</h3><p>{x.d}</p></div></li>)}
      </ol>
    </div>
  </section>;
}

const problems = [
  { p: 'Pages Competing for One Search', f: 'Search Console data shows which page to keep, merge or redirect.' },
  { p: 'Thin Coverage of the Topic', f: 'A topic plan shows the customer questions the site still misses, in priority order.' },
  { p: 'Search Engines Misread the Brand', f: 'Consistent names, details, schema and profiles help search engines recognize the brand.' },
  { p: 'Missing From AI Answers', f: 'Clear, direct answers and well-linked pages are easier for AI Overviews and assistants to cite.' },
  { p: 'Pages Not Indexed or Crawled', f: 'A technical review finds crawling and indexing issues and lists the affected pages.' },
  { p: 'Internal Links With No Plan', f: 'Planned internal links connect related pages and lead visitors to the pages that convert.' },
];

export function ProblemsSolved() {
  return <section id="problems" className="section-padding" aria-labelledby="problems-title">
    <div className="container-custom">
      <div className="home-section-head"><div><p className="section-kicker mb-4">Problems and Fixes</p><h2 id="problems-title" className="section-heading">Which Problems Hold Good Sites Back?</h2></div><p className="home-section-aside">The six problems that hold good sites back are competing pages, thin topic coverage, a misread brand, missing AI answers, unindexed pages and unplanned internal links. Each card shows the fix.</p></div>
      <ul className="problem-grid">
        {problems.map((x, i) => <li key={x.p} className="problem-card">
          <span className="problem-index">{String(i + 1).padStart(2, '0')}</span>
          <h3>{x.p}</h3>
          <p><strong>Fix:</strong> {x.f}</p>
        </li>)}
      </ul>
    </div>
  </section>;
}

const services = [
  { t: 'Topic & Entity Research', d: 'What your customers search for, and how it maps to your pages.' },
  { t: 'Topical Maps & Content Briefs', d: 'A content plan and clear briefs your writers can follow.' },
  { t: 'SEO Audits & Prioritization', d: 'Issues found, checked and ranked by impact and effort.' },
  { t: 'On-Page SEO', d: 'Titles, headings, content and links that match what each page is for.' },
  { t: 'Technical SEO', d: 'Crawling, indexing, structured data, speed and site health.' },
  { t: 'Local SEO', d: 'Google Business Profile, location signals and service-area pages.' },
  { t: 'E-Commerce SEO', d: 'Product and collection structure, filters and templates on Shopify and other platforms.' },
  { t: 'Off-Page SEO', d: 'Relevant mentions and links built on trust, not volume.' },
  { t: 'Measurement & Automation', d: 'Search Console and GA4 reporting, with Python to speed up repeat tasks.' },
];

export function ServicesOverview() {
  return <section id="services" className="section-padding" aria-labelledby="services-title">
    <div className="container-custom">
      <div className="home-section-head"><div><p className="section-kicker mb-4">Services</p><h2 id="services-title" className="section-heading">Nine SEO Services for Search Visibility</h2></div><Link to="/services/" className="project-link inline-flex items-center gap-2">View services, scope and outputs <ArrowUpRight size={15}/></Link></div>
      <ol className="service-index">
        {services.map((s, i) => <li key={s.t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{s.t}</h3><p>{s.d}</p></li>)}
      </ol>
    </div>
  </section>;
}

const engagements = [
  { t: 'SEO Audit', price: 'From $300', unit: 'one-time', best: 'Best for sites that need a clear starting point', d: 'A one-time technical, on-page and content review with a prioritized fix list.' },
  { t: 'Topical Map Project', price: 'From $600', unit: 'per project', best: 'Best for new sites or content resets', d: 'Research and a full content plan, with a brief for every page.' },
  { t: 'Ongoing SEO Support', price: 'From $800', unit: 'per month', best: 'Best for sites that need steady progress', d: 'Monthly SEO work and reporting on traffic, leads and visibility.' },
  { t: 'Freelance & Remote SEO', price: 'Custom', unit: 'hourly or monthly contract', best: 'Best for agencies and teams that need extra SEO hands', d: 'Remote, freelance SEO work on your projects, inside your tools, process and reporting.' },
];

export function WaysToWork() {
  return <section id="work-with-me" className="section-padding" aria-labelledby="work-title">
    <div className="container-custom">
      <div className="home-section-head"><div><p className="section-kicker mb-4">Work With Me</p><h2 id="work-title" className="section-heading">SEO Pricing and Four Ways to Work Together</h2></div><p className="home-section-aside">SEO pricing starts at $300 for a one-time audit and runs to $800 per month for ongoing support, in US dollars. The final quote depends on the size of the site and how much work it needs.</p></div>
      <ul className="engage-grid">
        {engagements.map(e => <li key={e.t} className="engage-card"><h3>{e.t}</h3><p className="engage-price"><strong>{e.price}</strong> <span>{e.unit}</span></p><p className="engage-best">{e.best}</p><p>{e.d}</p></li>)}
      </ul>
      <p className="mt-8 text-sm text-muted-foreground">Not sure which option fits? <Link to="/contact/" className="project-link font-medium">Describe your site and goal</Link> and the reply suggests one.</p>
    </div>
  </section>;
}

const caseCards = caseStudies.slice(0, 3).map(c => ({ slug: c.slug, tag: `${c.category} · ${c.date.slice(0, 4)}`, metric: c.headline.value, label: c.headline.label, title: c.title, source: c.sourceLabel.split(' · ')[0] }));

export function CaseStudyCards() {
  return <section id="evidence" className="section-padding" aria-labelledby="evidence-title">
    <div className="container-custom">
      <div className="home-section-head"><div><p className="section-kicker mb-4">Project Evidence</p><h2 id="evidence-title" className="section-heading">Case Studies With Results in Context</h2></div><div className="home-section-aside"><p>Each case study shows what changed and where the numbers come from, without claiming one SEO task caused every change.</p><Link to="/case-studies/" className="project-link inline-flex items-center gap-2 mt-4">View all case studies <ArrowUpRight size={15}/></Link></div></div>
      <ul className="case-card-grid">
        {caseCards.map(c => <li key={c.slug}>
          <Link to={`/case-studies/${c.slug}/`} className="case-card">
            <span className="case-card-tag">{c.tag}</span>
            <strong className="case-card-metric">{c.metric}</strong>
            <span className="case-card-label">{c.label}</span>
            <h3>{c.title}</h3>
            <span className="case-card-foot"><span>{c.source}</span><span className="inline-flex items-center gap-1">Read case study <ArrowUpRight size={14}/></span></span>
          </Link>
        </li>)}
      </ul>
    </div>
  </section>;
}

const limits = [
  { t: 'Change, Not Cause', d: 'Each figure shows what changed during the reporting period, not proof that one SEO task caused it.' },
  { t: 'Directional Page Data', d: 'Search Console page filters can show partial totals, so page-type figures point the way rather than add up exactly.' },
  { t: 'Outside Factors', d: 'Seasonality, competitors, site updates and tracking changes can all move the numbers.' },
];

export function EvidenceLimits() {
  return <section id="evidence-limits" className="section-padding" aria-labelledby="limits-title">
    <div className="container-custom">
      <div className="home-section-head"><div><p className="section-kicker mb-4">Evidence and Interpretation</p><h2 id="limits-title" className="section-heading">How to Read the Results</h2></div><p className="home-section-aside">The results show what changed during each reporting period. Three points apply to every figure in these case studies.</p></div>
      <ol className="service-index">
        {limits.map((l, i) => <li key={l.t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{l.t}</h3><p>{l.d}</p></li>)}
      </ol>
    </div>
  </section>;
}

const audiences = [
  { t: 'E-Commerce Stores', d: 'Shopify and WordPress catalogs that need product, collection and filter structure search engines understand.' },
  { t: 'Service Businesses', d: 'Law, HVAC, health, finance and home-service sites that need local and topical coverage for every service.' },
  { t: 'SaaS and B2B Companies', d: 'Software and B2B sites that need a topical map for long buying journeys and many feature pages.' },
  { t: 'Agencies and In-House Teams', d: 'Teams that need entity research, topical maps or audits delivered inside their own process.' },
];

export function WhoItsFor() {
  return <section id="who-its-for" className="section-padding" aria-labelledby="who-title">
    <div className="container-custom">
      <div className="home-section-head"><div><p className="section-kicker mb-4">Who These Services Are For</p><h2 id="who-title" className="section-heading">Who the SEO Services Are For</h2></div><p className="home-section-aside">The SEO services suit four kinds of sites: e-commerce stores, service businesses, SaaS and B2B companies, and agencies or in-house teams. The services help most when a site covers a complex subject or competes with larger brands.</p></div>
      <ul className="engage-grid">
        {audiences.map(a => <li key={a.t} className="engage-card"><h3>{a.t}</h3><p>{a.d}</p></li>)}
      </ul>
    </div>
  </section>;
}


export function QuoteRequest() {
  return <section id="request-quote" className="section-padding" aria-labelledby="quote-title">
    <div className="container-custom quote-layout">
      <div><p className="section-kicker mb-4">Request a Quote</p><h2 id="quote-title" className="section-heading">Request an SEO Quote</h2><p className="mt-5 text-muted-foreground leading-7">Share your website, your goals and your timeline. I&rsquo;ll review your site and reply with a recommended approach for your SEO.</p></div>
      <div className="paper-card p-7 md:p-9"><InquiryForm id="quote-form" /></div>
    </div>
  </section>;
}
