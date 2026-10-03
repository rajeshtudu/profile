import { ArrowUpRight, Play } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const HireMeSection = () => <section id="hire-me" className="section-padding">
  <div className="container-custom"><div className="relative overflow-hidden bg-foreground text-background p-8 md:p-14 lg:p-20 grid lg:grid-cols-[1fr_.75fr] gap-12 items-center">
    <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full border border-background/10"/><div className="absolute -right-4 -top-8 w-64 h-64 rounded-full border border-background/10"/>
    <div className="relative z-10"><p className="text-primary font-mono text-[10px] tracking-[.16em] uppercase mb-5">Open to the right opportunity</p><h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight">Good work starts<br/>with a <em className="text-primary">conversation.</em></h2><p className="text-background/65 max-w-lg leading-7 mt-5">Need help making organic search clearer and more effective? Let’s talk about what you’re working on.</p><a href="#contact" className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-5 py-3 text-sm">Start a conversation <ArrowUpRight size={16}/></a></div>
    <div className="relative z-10 border border-background/20 p-2"><video className="w-full aspect-video object-cover bg-background/10" controls preload="metadata"><source src={`${baseUrl}intro.mp4`} type="video/mp4"/>Your browser does not support embedded video.</video><p className="text-[10px] font-mono tracking-widest text-background/55 px-3 py-3 flex gap-2 items-center"><Play size={12}/> A QUICK INTRODUCTION</p></div>
  </div></div>
</section>;
export default HireMeSection;
