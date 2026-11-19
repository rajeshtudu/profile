import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import Index from './pages/Index';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

// Build-time only: renders a route to static HTML so crawlers get the full page body.
export const render = (url: string) => renderToString(
  <TooltipProvider>
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/case-studies/" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:caseSlug/" element={<CaseStudyPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/privacy/" element={<PrivacyPage />} />
      </Routes>
    </StaticRouter>
  </TooltipProvider>
);
