import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandIdentity } from '@/components/BrandIdentity';
import SocialLinks from '@/components/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container-custom">
        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_.8fr_1fr] md:gap-12">
          <div>
            <Link to="/" aria-label="Rajesh Tudu, home"><BrandIdentity /></Link>
            <p className="mt-4 text-sm font-medium text-foreground">SEO Specialist · Semantic &amp; Entity SEO</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">E-commerce SEO experience and client work across a range of industries and business types.</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="section-kicker mb-4">Explore</h2>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/about">About</Link></li>
              <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/services">SEO services</Link></li>
              <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/work">Case studies</Link></li>
              <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/#projects">SEO tools and experiments</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="section-kicker mb-4">Contact</h2>
            <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="mailto:tudurajesh34@gmail.com">tudurajesh34@gmail.com</a>
            <SocialLinks className="mt-4" />
            <Link className="button-primary mt-5 inline-flex" to="/contact">Discuss an SEO project <ArrowUpRight size={15}/></Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Rajesh Tudu. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 self-start transition-colors hover:text-primary sm:self-auto" type="button">Back to top <ArrowUp size={13}/></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
