import { Github, Linkedin, X } from 'lucide-react';

const profiles = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rajeshtudu', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/rajeshtudu', Icon: Github },
  { label: 'X', href: 'https://x.com/rajeshtudu', Icon: X },
];

type SocialLinksProps = { className?: string };

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <nav aria-label="Social profiles" className={`social-links ${className}`}>
      {profiles.map(({ label, href, Icon }) => (
        <a
          key={label}
          className="social-profile-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
