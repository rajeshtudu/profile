import { ArrowUpRight, Braces, Link2, MapPin, Network, ScanSearch, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const disciplines = [
  { icon: ScanSearch, title: 'On-Page SEO & Content', detail: 'Page intent, content quality, internal links, and opportunities to improve existing pages.' },
  { icon: Braces, title: 'Technical SEO', detail: 'Crawling, indexation, site structure, structured data, and technical priorities.' },
  { icon: MapPin, title: 'Local SEO', detail: 'Local search intent, Business Profile, location signals, and service-area pages.' },
  { icon: Link2, title: 'Off-Page SEO', detail: 'Backlink profiles, relevant opportunities, and plans to strengthen authority.' },
  { icon: ShoppingBag, title: 'E-Commerce SEO', detail: 'Product and category architecture, collections, filters, and internal links across Shopify, WordPress, and other CMS platforms.' },
];

export default function HomeServicesSection() {
  return <section id="seo-practice" className="home-services section-padding" aria-labelledby="home-services-title">
    <div className="container-custom">
      <ScrollReveal>
        <div className="home-section-head home-services-head">
          <div><p className="section-kicker mb-4">How Semantic &amp; Entity SEO Fits</p><h2 id="home-services-title" className="section-heading">Research Connects Search Demand to SEO Delivery</h2></div>
          <div className="home-section-aside"><p>Semantic and entity research helps clarify the topics a business should cover, how they relate, and which pages should serve each search need. That research informs the SEO work a site requires.</p><Link to="/services/" className="project-link inline-flex items-center gap-2 mt-5">Explore SEO services and deliverables <ArrowUpRight size={15}/></Link></div>
        </div>
      </ScrollReveal>

      <div className="home-services-model">
        <ScrollReveal>
          <article className="home-research-foundation">
            <span className="home-model-label">Research Foundation</span>
            <div className="home-research-title"><Network size={21} aria-hidden="true"/><h3>Semantic &amp; Entity SEO</h3></div>
            <p>Connect what people search for with the business, topics, entities, attributes, and pages that belong in the site.</p>
            <ol className="home-research-sequence">
              <li><span>01</span><strong>Search Intent</strong></li>
              <li><span>02</span><strong>Topics &amp; Entities</strong></li>
              <li><span>03</span><strong>Page Roles &amp; Relationships</strong></li>
            </ol>
          </article>
        </ScrollReveal>

        <div className="home-applied-work">
          <div className="home-applied-heading"><span className="home-model-label">Applied Through</span><h3>SEO Disciplines</h3></div>
          <div className="home-discipline-grid">
            {disciplines.map(({ icon: Icon, title, detail }, index) => <ScrollReveal key={title} delay={index * .035}>
              <article className="home-discipline-card"><span>0{index + 1}</span><Icon size={18} aria-hidden="true"/><h4>{title}</h4><p>{detail}</p></article>
            </ScrollReveal>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
