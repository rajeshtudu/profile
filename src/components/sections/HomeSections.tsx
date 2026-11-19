import HomeExperienceToolsSection from '@/components/sections/HomeExperienceToolsSection';
import { CaseStudyCards, StackStrip, IntroBio, Specialisms, ProblemsSolved, ServicesOverview, TopicalMapMethod, MarketsStrip, WaysToWork, ClosingCta } from '@/components/sections/HomeSpecialistSections';

const HomeSections = () => <>
  <StackStrip />
  <IntroBio />
  <Specialisms />
  <ProblemsSolved />
  <ServicesOverview />
  <TopicalMapMethod />

  <CaseStudyCards />

  <MarketsStrip />
  <HomeExperienceToolsSection />
  <WaysToWork />
  <ClosingCta />
</>;

export default HomeSections;
