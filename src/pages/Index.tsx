import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ApproachSection from '@/components/sections/ApproachSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
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
        <main>
          <HeroSection />
          <HomeSections>
            <ApproachSection />
            <ProjectsSection />
          </HomeSections>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;
