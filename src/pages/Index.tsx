import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ApproachSection from '@/components/sections/ApproachSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HireMeSection from '@/components/sections/HireMeSection';
import ContactSection from '@/components/sections/ContactSection';
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
          <AboutSection />
          <ApproachSection />
          <SkillsSection />
          <ServicesSection />
          <CaseStudiesSection />
          <ExperienceSection />
          <ProjectsSection />
          <HireMeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;
