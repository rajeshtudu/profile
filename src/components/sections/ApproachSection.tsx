import { motion } from 'framer-motion';
import { Search, Network, Sparkles, LineChart, FileText, Link2, CircleDot } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand the search',
    description: 'Start with the business, audience, search results, intent, and the questions people need answered.',
    output: 'Audience and intent research',
  },
  {
    number: '02',
    icon: Network,
    title: 'Plan the page system',
    description: 'Group related topics, map them to the right URLs, and clarify page roles, coverage, and internal links.',
    output: 'Topic map and page plan',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Improve the experience',
    description: 'Connect useful content with on-page relevance, local visibility, off-page authority, and sound technical foundations.',
    output: 'Prioritized recommendations',
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Measure and refine',
    description: 'Set a clear baseline, track relevant queries and pages, then use what the data shows to choose the next work.',
    output: 'Measurement and next steps',
  },
];

const mapNodes = [
  { label: 'Intent', icon: Search, detail: 'What is the searcher trying to learn, compare, or do? The query is a clue to the task behind the search.' },
  { label: 'Entities', icon: CircleDot, detail: 'Which people, places, products, concepts, attributes, and relationships make this topic distinct?' },
  { label: 'Page', icon: FileText, detail: 'Which page should satisfy the need, and what information belongs together on that page?' },
  { label: 'Evidence', icon: Link2, detail: 'What internal links, credible references, structured data, and useful media help establish context?' },
];

const ApproachSection = () => {
  const [activeNode, setActiveNode] = useState(0);
  const selected = mapNodes[activeNode];

  return <section id="approach" className="section-padding">
  <div className="container-custom">
    <ScrollReveal><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">My approach</p><h2 className="section-heading">From search<br/>to <em>site structure.</em></h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">A useful SEO plan accounts for how a topic is understood across queries, entities, pages, and supporting signals. This is the working model I use to connect research with implementation.</p>
    </div></ScrollReveal>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
      {steps.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="border-r border-b border-border p-6 md:p-7 min-h-64 flex flex-col">
        <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-widest text-primary">{step.number}</span><step.icon size={19} className="text-primary"/></div>
        <h3 className="text-lg font-semibold mt-8">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-6 mt-3">{step.description}</p>
        <p className="font-mono text-[10px] tracking-wide text-primary mt-auto pt-5">{step.output}</p>
      </motion.article>)}
    </div>
    <ScrollReveal delay={0.1}>
      <div className="entity-map mt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div><p className="section-kicker mb-4">An interactive model</p><h3 className="section-heading text-3xl md:text-4xl">See the <em>connections.</em></h3></div>
          <p className="text-sm text-muted-foreground leading-6 max-w-md">Select a point to explore how a search need becomes a relevant, well-supported page.</p>
        </div>
        <div className="entity-map-panel paper-card p-5 sm:p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground mb-6">Illustrative search map · not a ranking formula</p>
          <div className="entity-map-nodes" role="group" aria-label="Explore the parts of a semantic SEO map">
            {mapNodes.map((node, index) => <div className="entity-map-item" key={node.label}>
              <button type="button" className={`entity-map-node${index === activeNode ? ' is-active' : ''}`} onClick={() => setActiveNode(index)} aria-pressed={index === activeNode}>
                <span className="entity-map-icon"><node.icon size={17} strokeWidth={1.7}/></span>
                <span className="font-medium">{node.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
              </button>
            </div>)}
          </div>
          <div className="entity-map-detail" aria-live="polite" aria-atomic="true">
            <span className="font-mono text-[10px] uppercase tracking-[.12em] text-primary">{selected.label}</span>
            <p className="text-sm sm:text-base leading-7 mt-2 text-muted-foreground">{selected.detail}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>;
};

export default ApproachSection;
