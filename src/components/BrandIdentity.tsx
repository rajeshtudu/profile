type BrandIdentityProps = {
  className?: string;
};

export const BrandSymbol = () => (
  <svg className="brand-symbol" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <rect x="1" y="1" width="46" height="46" rx="2" fill="none" stroke="var(--orange)" strokeWidth="1.25" />
    <text x="24" y="29" textAnchor="middle" fill="currentColor" fontFamily="'DM Mono', monospace" fontSize="17" fontWeight="500" letterSpacing="-1.4">RT</text>
    <circle cx="39" cy="9" r="2" fill="var(--orange)" />
  </svg>
);

export const BrandIdentity = ({ className = '' }: BrandIdentityProps) => (
  <span className={`brand-mark ${className}`.trim()}>
    <BrandSymbol />
    <span className="brand-name">Rajesh Tudu <small>SEO · Semantic &amp; Entity Research</small></span>
  </span>
);
