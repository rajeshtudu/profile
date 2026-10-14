import { Github, Linkedin, X } from 'lucide-react';

const profiles = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rajeshtudu', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/rajeshtudu', Icon: Github },
  { label: 'X', href: 'https://x.com/rajeshtudu', Icon: X },
];

type SocialLinksProps = {
  className?: string;
  labeled?: boolean;
};

export default function SocialLinks({ className = '', labeled = false }: SocialLinksProps) {
  return (
    <nav aria-label="Social profiles" className={`social-links ${labeled ? 'social-links-labeled' : ''} ${className}`}>
      {profiles.map(({ label, href, Icon }) => (
        <a
          key={label}
          className="social-profile-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labeled ? undefined : label}
        >
          <Icon size={18} aria-hidden="true" />
          {labeled && <span>{label}</span>}
        </a>
      ))}
    </nav>
  );
}
