import { ArrowUpRight, MapPin } from 'lucide-react';
import PageFrame from '@/components/PageFrame';
import SocialLinks from '@/components/SocialLinks';

export default function ContactPage() {
  return <PageFrame kicker="Contact" title="Tell me what you’re working on" intro="For SEO roles, project collaborations, or a focused conversation about a search challenge, email is the best way to reach me." next={false}>
    <section className="container-custom contact-page-grid">
      <div className="paper-card p-7 md:p-10"><p className="section-kicker">Email</p><h2 className="section-heading mt-4">Discuss an SEO role or project</h2><p className="text-muted-foreground leading-7 mt-5">Share the role or search challenge, the site or business context, and what you’d like to improve. For collaborations or a professional introduction, a short note is welcome too.</p><a className="button-primary mt-8" href="mailto:tudurajesh34@gmail.com?subject=SEO%20role%20or%20project%20inquiry">Email Rajesh about an SEO opportunity <ArrowUpRight size={16}/></a></div>
      <div className="page-contact-details"><p className="flex items-center gap-3"><MapPin size={17} className="text-primary"/> Lalitpur, Nepal</p><SocialLinks labeled /></div>
    </section>
  </PageFrame>;
}
