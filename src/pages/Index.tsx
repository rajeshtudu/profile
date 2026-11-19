import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import HomeSections from '@/components/sections/HomeSections';
import Footer from '@/components/Footer';
import { MotionConfig } from 'framer-motion';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ScrollProgress />
        <Navigation />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-background focus:px-4 focus:py-2 focus:ring-2 focus:ring-primary">Skip to content</a>
        <main id="main">
          <HeroSection />
          <HomeSections />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;
