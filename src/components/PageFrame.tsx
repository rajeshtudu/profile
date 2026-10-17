import { ReactNode, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MotionConfig } from 'framer-motion';
import ScrollProgress from '@/components/ScrollProgress';

type PageFrameProps = { kicker: string; title: string; intro: string; children: ReactNode; titleTag?: string; metaDescription?: string; actions?: Array<{ label: string; href: string; primary?: boolean; external?: boolean }>; next?: { title: string; href: string; label: string } | false };

export default function PageFrame({ kicker, title, intro, children, titleTag, metaDescription, actions = [], next }: PageFrameProps) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const pageTitle = titleTag ?? `${title} | Rajesh Tudu`;
    document.title = pageTitle;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', metaDescription ?? intro);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`;
  }, [intro, location.pathname, metaDescription, title, titleTag]);

  return <MotionConfig reducedMotion="user"><div className="min-h-screen bg-background text-foreground">
    <ScrollProgress/><Navigation/>
    <main className="page-main">
      <header className="page-intro container-custom">
        <p className="section-kicker">{kicker}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-lede">{intro}</p>
        {actions.length > 0 && <div className="page-intro-actions">{actions.map(action => {
          const className = action.primary ? 'button-primary' : 'button-secondary';
          const content = <>{action.label}<ArrowUpRight size={16}/></>;
          return action.external || action.href.startsWith('mailto:')
            ? <a key={action.label} className={className} href={action.href} target={action.external ? '_blank' : undefined} rel={action.external ? 'noreferrer' : undefined}>{content}</a>
            : <Link key={action.label} className={className} to={action.href}>{content}</Link>;
        })}</div>}
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
      </header>
      {children}
      {next && <section className="page-next container-custom" aria-label="Continue exploring">
        <p className="section-kicker">Next step</p>
        <h2>{next.title}</h2>
        <Link to={next.href} className="project-link inline-flex items-center gap-2">{next.label} <ArrowUpRight size={16}/></Link>
      </section>}
    </main>
    <Footer/>
  </div></MotionConfig>;
}
