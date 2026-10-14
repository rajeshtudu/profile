import { Search, FileText, Link2, CircleDot } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const mapNodes = [
  { label: 'Intent', icon: Search, detail: 'What is the searcher trying to learn, compare, or do? The query is a clue to the task behind the search.' },
  { label: 'Entities', icon: CircleDot, detail: 'Which people, places, products, concepts, attributes, and relationships make this topic distinct?' },
  { label: 'Page', icon: FileText, detail: 'Which page should satisfy the need, and what information belongs together on that page?' },
  { label: 'Evidence', icon: Link2, detail: 'What internal links, credible references, structured data, and useful media help establish context?' },
];

const ApproachSection = () => {
  const [activeNode, setActiveNode] = useState(0);
  const selected = mapNodes[activeNode];

  return <section id="approach" className="home-method section-padding">
  <div className="container-custom">
    <ScrollReveal><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">A working model</p><h2 className="section-heading">From a search need to a page that makes sense.</h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">I use this simple map to connect intent, entities, page purpose, and evidence. It guides research; it is not a ranking formula.</p>
    </div></ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="entity-map">
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
