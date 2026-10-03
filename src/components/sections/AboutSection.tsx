import { ArrowUpRight, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => <section id="about" className="section-padding">
  <div className="container-custom grid lg:grid-cols-[.75fr_1.25fr] gap-14 lg:gap-24 items-start">
    <div><p className="section-kicker mb-5">01 — About Rajesh</p><h2 className="section-heading">Strategy starts<br/><em>with the search.</em></h2>
      <div className="mt-9 flex flex-col gap-4 text-sm text-muted-foreground">
        <span className="flex gap-3 items-center"><Briefcase size={16} className="text-primary"/> SEO Specialist at Enfity</span>
        <span className="flex gap-3 items-center"><MapPin size={16} className="text-primary"/> Lalitpur, Nepal</span>
        <span className="flex gap-3 items-center"><GraduationCap size={16} className="text-primary"/> Broadway Infosys</span>
      </div>
    </div>
    <div className="pt-2">
      <p className="about-story">I study how people search, then map that demand to the pages a site needs.</p>
      <div className="mt-8 space-y-5 text-muted-foreground leading-7 max-w-2xl">
        <p>My process begins with the business, its audience and the questions behind search demand. I use that research to build topic and keyword maps, plan useful pages, and connect them through clear site architecture and internal links.</p>
        <p>Then I help improve the whole search experience: content and on-page relevance, local visibility, off-page authority, technical foundations, and ecommerce discovery on platforms such as Shopify. I also build lightweight Python tools for SEO research and recurring workflows.</p>
      </div>
      <a href="#experience" className="project-link inline-flex items-center gap-2 mt-8 text-sm font-semibold">More about my path <ArrowUpRight size={16}/></a>
    </div>
  </div>
</section>;
export default AboutSection;
