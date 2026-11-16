import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const site = 'https://rajeshtudu.com.np';
const home = {
  title: 'Rajesh Tudu | Semantic & Entity SEO Specialist',
  description: 'SEO specialist with e-commerce and multi-industry client experience. Semantic and entity research informs on-page, technical, local, and off-page SEO.',
};
const pageMetadata: Record<string, { title: string; description: string }> = {
  '/about': {
    title: 'About Rajesh Tudu | SEO Specialist',
    description: 'Learn about Rajesh Tudu’s SEO experience across e-commerce, SaaS, health, insurance, mortgage, B2B, and professional services.',
  },
  '/services': {
    title: 'SEO Services | Semantic, Entity & Local SEO',
    description: 'SEO services for e-commerce and varied industries: semantic and entity research, on-page, technical, local and off-page SEO, audits, reporting and automation.',
  },
  '/case-studies': {
    title: 'SEO Case Studies | Rajesh Tudu',
    description: 'Anonymized SEO case studies using Search Console, GA4, and sales data. Review the work, comparison periods, outcomes, and evidence limits behind each result.',
  },
  '/case-studies/ecommerce-search-performance': {
    title: 'E-commerce SEO Case Study | Search Visibility & Clicks',
    description: 'An anonymized Search Console case study compares e-commerce impressions, clicks, and product, collection, and blog pages across two 2025 periods.',
  },
  '/case-studies/local-search-review': {
    title: 'Local SEO Case Study | Search & Analytics Review',
    description: 'An anonymized local SEO review compares pages receiving work with sitewide Search Console metrics and GA4 organic key events in Aug–Sep 2024.',
  },
  '/case-studies/ecommerce-visibility-sales': {
    title: 'E-commerce SEO Case Study | Visibility & Sales',
    description: 'An anonymized report pairs e-commerce Search Console clicks and impressions with organic sales for Jun 2024–Jan 2025, noting unknown comparison dates.',
  },
  '/contact': {
    title: 'Contact Rajesh Tudu | SEO Projects and Roles',
    description: 'Contact Rajesh Tudu in Lalitpur, Nepal about SEO roles, projects, or organic search challenges. Email directly or connect through professional social profiles.',
  },
};

function setMeta(selector: string, content: string, attribute = 'content') {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute(attribute, content);
}

export default function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = pathname.replace(/\/$/, '') || '/';
    const page = pageMetadata[route];
    const title = route === '/' ? home.title : page?.title ?? 'Page not found | Rajesh Tudu';
    const description = route === '/' ? home.description : page?.description ?? 'The page you requested could not be found. Return to Rajesh Tudu’s SEO portfolio to explore services, work, and contact details.';
    const canonicalPath = route === '/' ? '/' : `${route}/`;
    const canonical = `${site}${canonicalPath}`;

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    let canonicalTag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.append(canonicalTag);
    }
    canonicalTag.href = canonical;

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.append(robots);
    }
    robots.content = page ? 'index,follow' : route === '/' ? 'index,follow' : 'noindex,follow';

    const profileSchema = document.head.querySelector<HTMLScriptElement>('script[data-profile-schema="true"]');
    if (route === '/' && !profileSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.profileSchema = 'true';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: { '@type': 'Person', name: 'Rajesh Tudu', jobTitle: 'SEO Specialist', url: `${site}/` },
        dateModified: '2026-11-16',
      });
      document.head.append(script);
    } else if (route !== '/') {
      profileSchema?.remove();
    }

    let pageSchema = document.head.querySelector<HTMLScriptElement>('script[data-page-schema="true"]');
    if (route === '/') {
      pageSchema?.remove();
      return;
    }
    if (!pageSchema) {
      pageSchema = document.createElement('script');
      pageSchema.type = 'application/ld+json';
      pageSchema.dataset.pageSchema = 'true';
      document.head.append(pageSchema);
    }
    pageSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': route === '/' ? 'ProfilePage' : 'WebPage',
      name: title,
      description,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: 'Rajesh Tudu Portfolio', url: `${site}/` },
    });
  }, [pathname]);

  return null;
}
