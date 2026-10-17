type BrandIdentityProps = {
  className?: string;
};

export const BrandSymbol = () => (
  <svg className="brand-symbol" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
    <path fill="currentColor" fillRule="evenodd" d="M9 10h31c15 0 23 8 23 21S55 52 40 52H9V10Zm13 12h17c7 0 11 3 11 9s-4 9-11 9H22V22Z" />
    <path fill="currentColor" d="M9 48h14v42H9zM18 48h14l33 42H48zM64 29h13v61H64z" />
    <path fill="var(--orange)" d="M59 10h32L76 28H59z" />
  </svg>
);

export const BrandIdentity = ({ className = '' }: BrandIdentityProps) => (
  <span className={`brand-mark ${className}`.trim()}>
    <BrandSymbol />
    <span className="brand-name">Rajesh Tudu <small>SEO Specialist · Semantic &amp; Entity SEO</small></span>
  </span>
);
