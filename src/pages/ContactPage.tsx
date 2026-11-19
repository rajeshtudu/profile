import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import PageFrame from '@/components/PageFrame';
import SocialLinks from '@/components/SocialLinks';
import InquiryForm from '@/components/InquiryForm';

const googleBusinessProfileUrl = 'https://www.google.com/search?q=Rajesh+Tudu&stick=H4sIAAAAAAAA_-NgU1I1qDC2TE0yNEw2SzU1tjBMTja2MqhITDJPtky0SDNLtDRMTTFMWcTKHZSYlVqcoRBSmlIKALswBZY3AAAA&hl=en-GB&mat=CWYurx6sIxb7ElcBzAmVZpk2_1GRgRhvGdJmGKJPhYqYUjCh7ZkH0CpmRSos45La1q8UdCq-G6iNCKRrIefuIQVfl6A2kNay9VFQ-SheMRHM-aZ5AGexqATK3tmClZtwlu8&authuser=0&ved=2ahUKEwjslfm2jY2YAxUrXmwGHTObEjsQ-MgIegQIHRAb';
const email = 'tudurajesh34@gmail.com';
const mailto = `mailto:${email}?subject=SEO%20project%20inquiry`;

const topics = [
  { t: 'SEO Strategy & Topical Maps', d: 'A plan for everything your site should rank for, and the pages that get it there.' },
  { t: 'SEO Audit', d: 'A clear review of technical, on-page and content issues, in priority order.' },
  { t: 'Ongoing SEO', d: 'Monthly work and reporting on organic traffic, leads and search visibility.' },
  { t: 'Freelance & Remote SEO', d: 'Hands-on SEO support for agencies and in-house teams.' },
];

const steps = [
  { t: 'Share Your Website', d: 'Send your website and goals through the form, by email or by phone.' },
  { t: 'Site Review', d: 'I review your site, its search presence and any data you can share.' },
  { t: 'Recommended Plan', d: 'You receive a clear plan with priorities, a timeline and next steps.' },
];

export default function ContactPage() {
  return <PageFrame
    kicker="Contact"
    title="Contact Rajesh Tudu"
    intro="Get in touch about an SEO project, an audit, ongoing support or freelance work. Use the form, send an email or call, and I&rsquo;ll reply with the next steps."
    actions={[
      { label: 'Email Rajesh Tudu', href: mailto, primary: true },
      { label: 'View SEO Services', href: '/services/' },
    ]}
    next={false}
  >
    <section id="contact-details" className="section-padding" aria-labelledby="first-message-title">
      <div className="container-custom contact-page-grid">
        <article className="paper-card p-7 md:p-10">
          <p className="section-kicker">Send a Message</p>
          <h2 id="first-message-title" className="section-heading mt-4">Tell Me About Your Website</h2>
          <p className="text-muted-foreground leading-7 mt-5">Tell me about your website, your goals and what you want to improve, whether that is organic traffic, leads or visibility in AI answers.</p>
          <div className="mt-8"><InquiryForm id="contact-form" /></div>
        </article>
        <address className="contact-aside not-italic" aria-label="Contact details">
          <a className="contact-line" href={mailto}><Mail size={17} className="text-primary"/> {email}</a>
          <a className="contact-line" href="tel:+9779825672407"><Phone size={17} className="text-primary"/> +977 982-5672407</a>
          <a className="contact-line" href="tel:+9779746228029"><Phone size={17} className="text-primary"/> +977 974-6228029</a>
          <p className="contact-line"><MapPin size={17} className="text-primary"/> Lalitpur, Nepal · Nepal Time (UTC+5:45)</p>
          <p className="contact-line"><Clock size={17} className="text-primary"/> Available 8:00 AM – 12:00 PM, Nepal Time</p>
          <a className="project-link inline-flex items-center gap-2" href={googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer">View my Google Business Profile <ArrowUpRight size={15}/></a>
          <div><p className="section-kicker mb-3">Profiles</p><SocialLinks /></div>
        </address>
      </div>
    </section>

    <section id="contact-topics" className="section-padding" aria-labelledby="topics-title">
      <div className="container-custom">
        <div className="home-section-head"><div><p className="section-kicker mb-4">How I Can Help</p><h2 id="topics-title" className="section-heading">Four Ways I Can Help</h2></div></div>
        <ul className="engage-grid">
          {topics.map(x => <li key={x.t} className="engage-card"><h3>{x.t}</h3><p>{x.d}</p></li>)}
        </ul>
      </div>
    </section>

    <section id="next-steps" className="section-padding" aria-labelledby="steps-title">
      <div className="container-custom">
        <div className="home-section-head"><div><p className="section-kicker mb-4">Next Steps</p><h2 id="steps-title" className="section-heading">Three Steps After You Get in Touch</h2></div></div>
        <ol className="service-index">
          {steps.map((s, i) => <li key={s.t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{s.t}</h3><p>{s.d}</p></li>)}
        </ol>
      </div>
    </section>
  </PageFrame>;
}
