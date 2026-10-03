import { motion } from 'framer-motion';
import { Search, Network, Sparkles, LineChart } from 'lucide-react';

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

const ApproachSection = () => <section id="approach" className="section-padding">
  <div className="container-custom">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 mb-12 items-end">
      <div><p className="section-kicker mb-5">My approach</p><h2 className="section-heading">From search<br/>to <em>site structure.</em></h2></div>
      <p className="text-muted-foreground leading-7 max-w-xl">Semantic SEO is the research layer that helps connect the disciplines. It clarifies what people need, which pages should meet that need, and how those pages work together.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
      {steps.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="border-r border-b border-border p-6 md:p-7 min-h-64 flex flex-col">
        <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-widest text-primary">{step.number}</span><step.icon size={19} className="text-primary"/></div>
        <h3 className="text-lg font-semibold mt-8">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-6 mt-3">{step.description}</p>
        <p className="font-mono text-[10px] tracking-wide text-primary mt-auto pt-5">{step.output}</p>
      </motion.article>)}
    </div>
  </div>
</section>;

export default ApproachSection;
