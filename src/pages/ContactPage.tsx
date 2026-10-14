import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import PageFrame from '@/components/PageFrame';

export default function ContactPage() {
  return <PageFrame kicker="Contact" title="Tell me what you’re working on" intro="For SEO roles, project collaborations, or a focused conversation about a search challenge, email is the best way to reach me.">
    <section className="container-custom contact-page-grid">
      <div className="paper-card p-7 md:p-10"><p className="section-kicker">Email</p><h2 className="section-heading mt-4">Start with a short note</h2><p className="text-muted-foreground leading-7 mt-5">A few details about the site, the goal, and what you have already tried will help me understand the context.</p><a className="button-primary mt-8" href="mailto:tudurajesh34@gmail.com?subject=Portfolio%20inquiry">tudurajesh34@gmail.com <ArrowUpRight size={16}/></a></div>
      <div className="page-contact-details"><p className="flex items-center gap-3"><MapPin size={17} className="text-primary"/> Lalitpur, Nepal</p><a className="flex items-center gap-3" href="mailto:tudurajesh34@gmail.com"><Mail size={17} className="text-primary"/> Send an email</a><a href="https://linkedin.com/in/rajeshtudu" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a></div>
    </section>
  </PageFrame>;
}
