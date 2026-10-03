import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HireMeSection from '@/components/sections/HireMeSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ServicesSection />
            <CaseStudiesSection />
            <ProjectsSection />
            <ExperienceSection />
            <HireMeSection />
            <ContactSection />
        </main>
          <Footer />
    </div>
  );
};

export default Index;
