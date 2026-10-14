import { ArrowUpRight, Braces, Link2, MapPin, Network, ScanSearch, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const disciplines = [
  { number: '02', icon: ScanSearch, title: 'On-page SEO & content', detail: 'Page purpose, content briefs, internal linking, and improvements that make each page more useful for its audience.' },
  { number: '03', icon: Braces, title: 'Technical SEO', detail: 'Crawlability, indexation, architecture, structured data, migrations, and prioritized technical fixes.' },
  { number: '04', icon: Link2, title: 'Off-page SEO', detail: 'Backlink and competitor-gap reviews, relevant prospect research, and practical authority-building plans.' },
  { number: '05', icon: MapPin, title: 'Local SEO', detail: 'Local intent, Google Business Profile, citations, reviews, and service-area page recommendations.' },
  { number: '06', icon: ShoppingBag, title: 'E-commerce SEO', detail: 'Product and category architecture, taxonomy, filters, collection content, internal links, and CMS-specific checks.' },
];

export default function HomeServicesSection() {
  return <section id="home-services" className="section-padding bg-secondary/40" aria-labelledby="home-services-title">
    <div className="container-custom">
      <ScrollReveal><div className="home-section-head mb-10">
        <div><p className="section-kicker mb-4">How the work fits together</p><h2 id="home-services-title" className="section-heading">Research that informs SEO across the site.</h2></div>
        <div className="max-w-xl"><p className="text-muted-foreground leading-7">Semantic and entity research help define the search context and page relationships. I apply those findings through the SEO disciplines each site needs.</p><Link to="/services" className="project-link inline-flex items-center gap-2 mt-5">Explore SEO services and typical outputs <ArrowUpRight size={15}/></Link></div>
      </div></ScrollReveal>

      <ScrollReveal delay={0.05}>
        <article className="paper-card grid lg:grid-cols-[.9fr_1.1fr] gap-8 lg:gap-12 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-start">
            <span className="font-mono text-[10px] uppercase tracking-[.14em] text-primary">01 · Research foundation</span>
            <div className="flex items-center gap-3 mt-6"><Network size={20} className="text-primary"/><h3 className="font-sans font-semibold text-xl sm:text-2xl">Semantic & entity SEO</h3></div>
            <p className="text-sm text-muted-foreground leading-6 mt-4 max-w-xl">Understand search intent, related topics, entities, and how information should connect across the site before setting page priorities.</p>
          </div>
          <div className="flex items-center">
            <ol className="grid sm:grid-cols-3 w-full border-y border-border" aria-label="How semantic and entity research informs page planning">
              {[
                ['Search intent', 'What people need'],
                ['Topics & entities', 'What belongs together'],
                ['Page relationships', 'Where it should live'],
              ].map(([title, description], index) => <li className="relative py-5 px-4 first:pl-0 border-b last:border-0 sm:border-b-0 sm:border-r sm:last:border-0 border-border" key={title}>
                <span className="block font-mono text-[10px] text-primary mb-2">0{index + 1}</span>
                <strong className="block text-sm font-semibold">{title}</strong>
                <span className="block mt-1 text-xs leading-5 text-muted-foreground">{description}</span>
              </li>)}
            </ol>
          </div>
        </article>
      </ScrollReveal>

      <div className="mt-10">
        <div className="flex items-baseline justify-between gap-4 mb-4"><h3 className="font-sans font-semibold text-base">Applied across the SEO disciplines</h3><span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">02–06</span></div>
        <div className="grid md:grid-cols-2 gap-x-5 border-t border-border">
          {disciplines.map(({ number, icon: Icon, title, detail }, index) => <ScrollReveal key={number} delay={index * .035}>
            <article className="grid grid-cols-[32px_1fr_20px] gap-x-3 gap-y-2 items-start py-5 border-b border-border h-full">
              <span className="font-mono text-[10px] text-muted-foreground pt-1">{number}</span>
              <div><h4 className="font-sans font-semibold text-base">{title}</h4><p className="text-sm text-muted-foreground leading-6 mt-2">{detail}</p></div>
              <Icon size={17} className="text-primary mt-1" aria-hidden="true"/>
            </article>
          </ScrollReveal>)}
        </div>
      </div>
    </div>
  </section>;
}
