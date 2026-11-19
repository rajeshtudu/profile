import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageFrame from '@/components/PageFrame';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';
import { ClosingCta } from '@/components/sections/HomeSpecialistSections';

const publicBase = typeof window !== 'undefined' && (window.location.pathname === '/profile' || window.location.pathname.startsWith('/profile/')) ? '/profile' : '';

export default function CaseStudyPage() {
  const { caseSlug } = useParams();
  const study = getCaseStudy(caseSlug);

  if (!study) return <Navigate to="/case-studies/" replace />;

  const idx = caseStudies.findIndex(c => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const nextSlug = next.slug;
  const image = study.image ? `${publicBase}/${study.image}` : null;

  return <PageFrame
    kicker={study.type}
    title={study.title}
    intro={study.intro}
    actions={[{ label: 'Discuss a Similar Project', href: '/contact/', primary: true }, { label: 'All Case Studies', href: '/case-studies/' }]}
    next={false}
  >
    <section className="cs-metric-band" aria-label="Reported measures">
      <div className="container-custom">
        <dl className="cs-metric-strip">
          {study.metrics.map(m => <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd><span>{m.comparison}</span></div>)}
        </dl>
      </div>
    </section>

    <section className="section-padding" aria-label="Case study">
      <div className="container-custom cs-detail-layout">
        <article className="cs-article">
          <section className="cs-block">
            <span className="cs-step">01</span>
            <h2>The Goal</h2>
            <p>{study.question}</p>
          </section>
          <section className="cs-block">
            <span className="cs-step">02</span>
            <h2>What Was Done</h2>
            <ul className="cs-checklist">{study.reviewed.map(item => <li key={item}>{item}</li>)}</ul>
          </section>
          {image && <figure className="cs-figure">
            <img src={image} alt={study.imageAlt} width={1200} height={900} loading="lazy" />
            <figcaption>Anonymized report snapshot. The reporting period is listed beside the article.</figcaption>
          </figure>}
          <section className="cs-block">
            <span className="cs-step">03</span>
            <h2>What the Results Show</h2>
            <p>{study.interpretation}</p>
            <aside className="case-study-caveat"><strong>Keep in mind:</strong> {study.limitations}</aside>
          </section>
        </article>

        <aside className="cs-sidebar" aria-label="Case study facts">
          <dl>
            <div><dt>Project type</dt><dd>{study.type}</dd></div>
            <div><dt>Reporting period</dt><dd>{study.period}</dd></div>
            <div><dt>Data source</dt><dd>{study.source}</dd></div>
          </dl>
          <Link to="/contact/" className="button-primary w-full justify-center mt-6">Discuss a Similar Project <ArrowUpRight size={15}/></Link>
        </aside>
      </div>

      <div className="container-custom">
        <nav className="cs-next" aria-label="More case studies">
          <Link to="/case-studies/" className="project-link inline-flex items-center gap-2"><ArrowLeft size={15}/> All case studies</Link>
          <Link to={`/case-studies/${nextSlug}/`} className="cs-next-card"><span>Next case study</span><strong>{next.title}</strong><ArrowUpRight size={18}/></Link>
        </nav>
      </div>
    </section>
    <ClosingCta />
  </PageFrame>;
}
