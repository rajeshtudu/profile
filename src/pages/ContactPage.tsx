import { ArrowUpRight, MapPin } from 'lucide-react';
import PageFrame from '@/components/PageFrame';
import SocialLinks from '@/components/SocialLinks';

const googleBusinessProfileUrl = 'https://www.google.com/search?q=Rajesh+Tudu&stick=H4sIAAAAAAAA_-NgU1I1qDC2TE0yNEw2SzU1tjBMTja2MqhITDJPtky0SDNLtDRMTTFMWcTKHZSYlVqcoRBSmlIKALswBZY3AAAA&hl=en-GB&mat=CWYurx6sIxb7ElcBzAmVZpk2_1GRgRhvGdJmGKJPhYqYUjCh7ZkH0CpmRSos45La1q8UdCq-G6iNCKRrIefuIQVfl6A2kNay9VFQ-SheMRHM-aZ5AGexqATK3tmClZtwlu8&authuser=0&ved=2ahUKEwjslfm2jY2YAxUrXmwGHTObEjsQ-MgIegQIHRAb';

export default function ContactPage() {
  return <PageFrame
    kicker="Contact"
    title="Contact Rajesh Tudu About SEO Work"
    intro="Email me about an SEO role, a project collaboration, or a specific organic search challenge. A short note about your business, website, target market, and goal helps me understand the context."
    actions={[
      { label: 'Email Rajesh Tudu', href: 'mailto:tudurajesh34@gmail.com?subject=SEO%20role%20or%20project%20inquiry', primary: true },
      { label: 'Review SEO Services', href: '/services/' },
    ]}
    next={false}
  >
    <section className="container-custom contact-page-grid">
      <article className="paper-card p-7 md:p-10">
        <p className="section-kicker">A Useful First Message</p>
        <h2 className="section-heading mt-4">Share The Context Behind The Search Challenge</h2>
        <p className="text-muted-foreground leading-7 mt-5">You do not need a formal brief. A few details help me understand whether I can help and where a useful conversation should begin.</p>
        <ul className="grid gap-3 mt-6 text-sm leading-6 text-muted-foreground">
          <li><strong className="text-foreground">The site and market:</strong> include the website, business model, and audience you want to reach.</li>
          <li><strong className="text-foreground">The priority:</strong> explain what you want to improve or what is currently getting in the way.</li>
          <li><strong className="text-foreground">The work so far:</strong> mention relevant changes, reporting periods, or available Search Console and analytics data.</li>
        </ul>
        <a className="project-link inline-flex items-center gap-2 mt-8 font-semibold" href="mailto:tudurajesh34@gmail.com?subject=SEO%20role%20or%20project%20inquiry">Send an email <ArrowUpRight size={15}/></a>
      </article>
      <aside className="page-contact-details">
        <p className="flex items-center gap-3"><MapPin size={17} className="text-primary"/> Lalitpur, Nepal</p>
        <a className="project-link inline-flex items-center gap-2" href={googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer">View my Google Business Profile <ArrowUpRight size={15}/></a>
        <SocialLinks />
      </aside>
    </section>
  </PageFrame>;
}
