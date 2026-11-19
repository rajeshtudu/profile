import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { Suspense, useEffect } from "react";
import SeoHead from "./components/SeoHead";
import Analytics from "./components/Analytics";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";

const queryClient = new QueryClient();
const projectPagesBase = window.location.pathname === '/profile' || window.location.pathname.startsWith('/profile/')
  ? '/profile'
  : undefined;

function TrailingSlashRedirect() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== '/' && !pathname.endsWith('/')) {
      navigate({ pathname: `${pathname}/`, search, hash }, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
}

function LegacyWorkRedirect() {
  const { caseSlug } = useParams();
  return <Navigate to={caseSlug ? `/case-studies/${caseSlug}/` : '/case-studies/'} replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={projectPagesBase}>
        <TrailingSlashRedirect />
        <SeoHead />
        <Analytics />
        <Suspense fallback={<div className="min-h-screen grid place-items-center bg-background text-muted-foreground" role="status">Loading portfolio page…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/services/" element={<ServicesPage />} />
            <Route path="/case-studies/" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:caseSlug/" element={<CaseStudyPage />} />
            <Route path="/work/" element={<LegacyWorkRedirect />} />
            <Route path="/work/:caseSlug/" element={<LegacyWorkRedirect />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/privacy/" element={<PrivacyPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
