import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import InquiryDialog from '@/components/InquiryDialog';
import { BrandIdentity } from '@/components/BrandIdentity';

const navItems = [
  { name: 'About', href: '/about/' },
  { name: 'Services', href: '/services/' },
  { name: 'Case Studies', href: '/case-studies/' },
  { name: 'Contact', href: '/contact/' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);
  const openTalk = () => { setOpen(false); setTalkOpen(true); };
  const location = useLocation();
  const pageHref = (path: string) => path === '/' || path.endsWith('/') || path.includes('#') ? path : `${path}/`;
  const currentPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const close = () => setOpen(false);
  return <header className="site-header">
    <nav className="container-custom nav-inner" aria-label="Main navigation">
      <Link to={pageHref('/')} onClick={close} aria-label="Rajesh Tudu, home"><BrandIdentity /></Link>
      <div className="nav-links">{navItems.map(item => <Link key={item.href} to={pageHref(item.href)} onClick={close} aria-current={currentPath === pageHref(item.href) ? 'page' : undefined}>{item.name}</Link>)}</div>
      <button type="button" className="nav-contact" onClick={openTalk}>Let’s talk <ArrowUpRight size={15}/></button>
      <div className="desktop-theme"><ThemeToggle /></div>
      <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
    </nav>
    {open && <div className="mobile-nav">{navItems.map(item => <Link key={item.href} to={pageHref(item.href)} onClick={close}>{item.name}</Link>)}<button type="button" className="mobile-nav-cta" onClick={openTalk}>Let’s talk ↗</button></div>}
    <InquiryDialog open={talkOpen} onOpenChange={setTalkOpen} />
  </header>;
};
export default Navigation;
