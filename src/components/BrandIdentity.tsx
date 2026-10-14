type BrandIdentityProps = {
  className?: string;
};

export const BrandSymbol = () => (
  <svg className="brand-symbol" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.7">
      <path d="M11 67V13h20c14 0 22 7 22 19s-8 19-22 19H11m20 0 25 17" stroke="currentColor" />
      <path d="M45 13h25M57.5 13v54" stroke="var(--orange)" />
    </g>
  </svg>
);

export const BrandIdentity = ({ className = '' }: BrandIdentityProps) => (
  <span className={`brand-mark ${className}`.trim()}>
    <BrandSymbol />
    <span className="brand-name">Rajesh Tudu <small>SEO Specialist · Semantic &amp; Entity SEO</small></span>
  </span>
);
