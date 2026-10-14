import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { BrandIdentity } from '@/components/BrandIdentity';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pageHref = (path: string) => path;
  const close = () => setOpen(false);
  return <header className="site-header">
    <nav className="container-custom nav-inner" aria-label="Main navigation">
      <Link to={pageHref('/')} onClick={close} aria-label="Rajesh Tudu, home"><BrandIdentity /></Link>
      <div className="nav-links">{navItems.map(item => <Link key={item.href} to={pageHref(item.href)} onClick={close} aria-current={location.pathname === pageHref(item.href) ? 'page' : undefined}>{item.name}</Link>)}</div>
      <Link className="nav-contact" to={pageHref('/contact')} onClick={close}>Let’s talk <ArrowUpRight size={15}/></Link>
      <div className="desktop-theme"><ThemeToggle /></div>
      <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
    </nav>
    {open && <div className="mobile-nav">{navItems.map(item => <Link key={item.href} to={pageHref(item.href)} onClick={close}>{item.name}</Link>)}<Link to={pageHref('/contact')} onClick={close}>Let’s talk ↗</Link></div>}
  </header>;
};
export default Navigation;
