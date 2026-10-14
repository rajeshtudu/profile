import { ArrowUpRight, Braces, Link2, MapPin, Network, ScanSearch, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  { number: '01', icon: Network, title: 'Semantic & entity SEO', detail: 'Search intent, topic and entity research, query mapping, and the page relationships that support a clear site structure.' },
  { number: '02', icon: ScanSearch, title: 'On-page SEO & content', detail: 'Page purpose, content briefs, page improvements, internal linking, and useful information architecture.' },
  { number: '03', icon: Braces, title: 'Technical SEO', detail: 'Crawlability, indexation, site architecture, structured data, migrations, and prioritized technical fixes.' },
  { number: '04', icon: Link2, title: 'Off-page SEO', detail: 'Backlink and competitor-gap reviews, relevant prospect research, and practical authority-building plans.' },
  { number: '05', icon: MapPin, title: 'Local SEO', detail: 'Local intent, Google Business Profile, citations, reviews, and service-area page recommendations.' },
  { number: '06', icon: ShoppingBag, title: 'E-commerce SEO', detail: 'Product and category architecture, taxonomy, filters, collection content, internal links, and CMS-specific checks.' },
];

export default function HomeServicesSection() {
  return <section id="home-services" className="section-padding bg-secondary/40" aria-labelledby="home-services-title">
    <div className="container-custom">
      <ScrollReveal><div className="home-section-head mb-10">
        <div><p className="section-kicker mb-4">Services</p><h2 id="home-services-title" className="section-heading">SEO across the parts of a site.</h2></div>
        <div className="max-w-xl"><p className="text-muted-foreground leading-7">Semantic and entity research inform the work. On-page, off-page, local, technical, and e-commerce SEO help put it into practice.</p><Link to="/services" className="project-link inline-flex items-center gap-2 mt-5">Review services and typical outputs <ArrowUpRight size={15}/></Link></div>
      </div></ScrollReveal>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {services.map(({ number, icon: Icon, title, detail }, index) => <ScrollReveal key={number} delay={index * .04}>
          <article className="paper-card p-6 h-full min-h-52 flex flex-col">
            <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-widest text-muted-foreground">{number}</span><Icon size={18} className="text-primary"/></div>
            <h3 className="font-sans font-semibold text-lg mt-7">{title}</h3>
            <p className="text-sm text-muted-foreground leading-6 mt-3">{detail}</p>
          </article>
        </ScrollReveal>)}
      </div>
    </div>
  </section>;
}
