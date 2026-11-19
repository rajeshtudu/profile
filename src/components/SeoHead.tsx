import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { caseStudies } from '@/data/caseStudies';

const site = 'https://rajeshtudu.com.np';
const home = {
  title: 'Rajesh Tudu | Semantic SEO Specialist',
  description: 'Rajesh Tudu is an SEO specialist who plans websites around entities and topical maps, with schema, internal links and content.',
};
const pageMetadata: Record<string, { title: string; description: string }> = {
  ...Object.fromEntries(caseStudies.map(c => [`/case-studies/${c.slug}`, { title: c.seoTitle, description: c.seoDescription }])),
  '/about': {
    title: 'About Rajesh Tudu | SEO Specialist in Lalitpur',
    description: 'Rajesh Tudu plans client websites around entities and topical maps, with work across e-commerce, SaaS, health, insurance, B2B and more.',
  },
  '/services': {
    title: 'Semantic SEO Services | Rajesh Tudu',
    description: 'SEO services built on entity research and topical maps: audits, internal linking, schema, content and technical SEO.',
  },
  '/case-studies': {
    title: 'SEO Case Studies | Rajesh Tudu',
    description: 'SEO case studies from real client work, showing changes in organic traffic, search visibility, leads and sales, with the data source behind every figure.',
  },
  '/privacy': {
    title: 'Privacy Policy | Rajesh Tudu',
    description: 'How rajeshtudu.com.np uses Google Analytics data and email you send, and how to opt out or ask for your email correspondence to be deleted.',
  },
  '/contact': {
    title: 'Contact Rajesh Tudu | SEO Projects',
    description: 'Contact Rajesh Tudu about an SEO project, an audit, ongoing support or freelance work. Use the form, send an email or call.',
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
        dateModified: '2026-11-19',
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
