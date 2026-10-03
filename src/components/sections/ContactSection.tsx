import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const ContactSection = () => <section id="contact" className="section-padding">
  <div className="container-custom grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24">
    <div><p className="section-kicker mb-5">05 — Get in touch</p><h2 className="section-heading">Have a good<br/><em>one in mind?</em></h2><p className="text-muted-foreground leading-7 mt-6 max-w-md">I’m always open to thoughtful conversations about SEO, automation and useful work on the web.</p><div className="mt-9 space-y-4 text-sm"><a href="mailto:tudurajesh34@gmail.com" className="project-link flex items-center gap-3"><Mail size={17}/> tudurajesh34@gmail.com <ArrowUpRight size={14}/></a><span className="flex items-center gap-3 text-muted-foreground"><MapPin size={17}/> Lalitpur, Nepal</span></div><div className="flex gap-5 mt-8"><a className="project-link" href="https://linkedin.com/in/rajeshtudu" aria-label="LinkedIn"><Linkedin size={18}/></a><a className="project-link" href="https://github.com/rajeshtudu" aria-label="GitHub"><Github size={18}/></a></div></div>
    <div className="paper-card p-7 md:p-10 flex flex-col justify-between"><div><p className="font-mono text-[10px] text-primary tracking-widest">CURRENTLY AVAILABLE</p><h3 className="font-serif text-3xl mt-5">Let’s make something<br/>work better.</h3><p className="text-sm text-muted-foreground leading-6 mt-4 max-w-lg">For SEO projects, collaborations or just to say hello, email is the best way to reach me. I’ll get back to you as soon as I can.</p></div><a className="button-primary mt-10 self-start" href="mailto:tudurajesh34@gmail.com?subject=Let%E2%80%99s%20talk">Send me an email <ArrowUpRight size={16}/></a></div>
  </div>
</section>;
export default ContactSection;
