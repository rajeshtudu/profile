import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const site = 'https://rajeshtudu.com.np';
const home = {
  title: 'Rajesh Tudu | Semantic & Entity SEO Specialist',
  description: 'Semantic and entity SEO across e-commerce and varied industries. Explore on-page, off-page, local, and technical SEO, plus services and documented work.',
};
const pageMetadata: Record<string, { title: string; description: string }> = {
  '/about': {
    title: 'About Rajesh Tudu | SEO Specialist Experience',
    description: 'Explore Rajesh Tudu’s SEO experience across e-commerce and varied niches, plus training and work in semantic, on-page, technical, local, and off-page SEO.',
  },
  '/services': {
    title: 'SEO Services | Semantic, Entity & Local SEO',
    description: 'Semantic and entity research, on-page, technical, off-page, local and e-commerce SEO, reporting, and automation. Scope reflects your site, goals, and evidence.',
  },
  '/work': {
    title: 'SEO Case Studies and Work | Rajesh Tudu',
    description: 'Explore anonymized SEO case studies with data sources, comparison periods, documented work, reported outcomes, evidence limitations, and reporting context.',
  },
  '/work/ecommerce-search-performance': {
    title: 'E-commerce SEO Case Study | Search Visibility & Clicks',
    description: 'See an anonymized Search Console comparison of e-commerce visibility, clicks, and page types, with reported changes, source periods, and evidence limitations.',
  },
  '/work/local-search-review': {
    title: 'Local SEO Case Study | Search & Analytics Review',
    description: 'Review an anonymized local SEO report comparing Search Console visibility, pages receiving work, and GA4 organic key events month over month.',
  },
  '/work/ecommerce-visibility-sales': {
    title: 'E-commerce SEO Case Study | Visibility & Sales',
    description: 'Review an anonymized e-commerce report of Search Console clicks and impressions alongside organic sales, with source dates and comparison limits.',
  },
  '/contact': {
    title: 'Contact Rajesh Tudu | SEO Projects and Roles',
    description: 'Contact Rajesh Tudu in Lalitpur, Nepal about SEO roles, project collaborations, or a search challenge. Email or connect through professional social profiles.',
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
        dateModified: '2026-10-17',
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
