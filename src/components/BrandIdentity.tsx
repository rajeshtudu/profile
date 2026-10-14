type BrandIdentityProps = {
  className?: string;
};

export const BrandSymbol = () => (
  <svg className="brand-symbol" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
    <g fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4.2">
      <path d="M10 69V11h23c14 0 22 7 22 19s-8 19-22 19H10m23 0 25 20" stroke="currentColor" />
      <path d="M44 11h30M59 11v58" stroke="var(--orange)" />
    </g>
    <circle cx="59" cy="69" r="3" fill="var(--orange)" />
  </svg>
);

export const BrandIdentity = ({ className = '' }: BrandIdentityProps) => (
  <span className={`brand-mark ${className}`.trim()}>
    <BrandSymbol />
    <span className="brand-name">Rajesh Tudu <small>SEO Specialist · Semantic &amp; Entity SEO</small></span>
  </span>
);
