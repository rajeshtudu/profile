import { Search, FileText, Network, ListChecks, Wrench, ChartNoAxesCombined } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const mapNodes = [
  { label: 'Audit', icon: Search, detail: 'Review the business goal, existing pages, Search Console and Analytics data, crawl findings, and implementation constraints.', output: 'A baseline and an evidence-led opportunity list' },
  { label: 'Research', icon: FileText, detail: 'Examine how people search, what the results provide, and which topics, entities, and attributes matter in the market.', output: 'Search intent and topic research' },
  { label: 'Structure', icon: Network, detail: 'Connect search needs to page roles. Decide where to improve, create, consolidate, or internally link content.', output: 'A topic-to-page plan' },
  { label: 'Prioritize', icon: ListChecks, detail: 'Sequence recommendations by relevance, supporting evidence, effort, dependencies, and what the team can implement.', output: 'A practical recommendation backlog' },
  { label: 'Implement', icon: Wrench, detail: 'Apply the agreed on-page, content, technical, local, e-commerce, or off-page work with the relevant team.', output: 'Scoped changes and implementation notes' },
  { label: 'Measure', icon: ChartNoAxesCombined, detail: 'Compare the agreed metrics across defined periods, document what changed, and identify what needs more investigation.', output: 'A results review with limitations and next steps' },
];

const ApproachSection = () => {
  const [activeNode, setActiveNode] = useState(0);
  const selected = mapNodes[activeNode];

  return <section id="approach" className="home-method section-padding">
  <div className="container-custom">
    <ScrollReveal><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">My Working Method</p><h2 className="section-heading">From Search Analysis to Measured SEO Work</h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">Each recommendation should connect a search need to a page, an action, and a way to review the outcome. Select a stage to see its focus and output.</p>
    </div></ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="entity-map">
        <div className="entity-map-panel paper-card p-5 sm:p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground mb-6">A practical sequence · scoped to each site</p>
          <div className="entity-map-nodes" role="group" aria-label="Explore the stages of my SEO process">
            {mapNodes.map((node, index) => <div className="entity-map-item" key={node.label}>
              <button type="button" className={`entity-map-node${index === activeNode ? ' is-active' : ''}`} onClick={() => setActiveNode(index)} aria-pressed={index === activeNode}>
                <span className="entity-map-icon"><node.icon size={17} strokeWidth={1.7}/></span>
                <span className="font-medium">{node.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
              </button>
            </div>)}
          </div>
          <div className="entity-map-detail" aria-live="polite" aria-atomic="true">
            <div><span className="font-mono text-[10px] uppercase tracking-[.12em] text-primary">{selected.label}</span><p className="text-sm sm:text-base leading-7 mt-2 text-muted-foreground">{selected.detail}</p></div>
            <p className="entity-map-output"><span>Typical Output</span><strong>{selected.output}</strong></p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>;
};

export default ApproachSection;
