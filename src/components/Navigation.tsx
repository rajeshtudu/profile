import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { name: 'About', href: '#about' }, { name: 'Approach', href: '#approach' },
  { name: 'Services', href: '#services' }, { name: 'Selected work', href: '#case-studies' },
  { name: 'Experience', href: '#experience' }, { name: 'Tools', href: '#projects' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const go = (href: string) => { setOpen(false); document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' }); };
  return <header className="site-header">
    <nav className="container-custom nav-inner" aria-label="Main navigation">
      <a href="#home" onClick={e => { e.preventDefault(); go('#home'); }} className="brand-mark"><span>RT</span><span className="brand-name">Rajesh Tudu <small>SEO Specialist · Semantic SEO Researcher</small></span></a>
      <div className="nav-links">{navItems.map(item => <a key={item.href} href={item.href} onClick={e => { e.preventDefault(); go(item.href); }}>{item.name}</a>)}</div>
      <a className="nav-contact" href="#contact" onClick={e => { e.preventDefault(); go('#contact'); }}>Let’s talk <ArrowUpRight size={15}/></a>
      <div className="desktop-theme"><ThemeToggle /></div>
      <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
    </nav>
    {open && <div className="mobile-nav">{navItems.map(item => <a key={item.href} href={item.href} onClick={e => { e.preventDefault(); go(item.href); }}>{item.name}</a>)}<a href="#contact" onClick={e => {e.preventDefault();go('#contact')}}>Let’s talk ↗</a></div>}
  </header>;
};
export default Navigation;
