import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import SeoHead from "./components/SeoHead";
import Analytics from "./components/Analytics";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

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
            <Route path="/work/" element={<WorkPage />} />
            <Route path="/work/:caseSlug/" element={<CaseStudyPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
