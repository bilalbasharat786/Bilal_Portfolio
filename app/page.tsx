import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CompetitionsSection } from "@/components/CompetitionsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { VerifyMyWork } from "@/components/VerifyMyWork";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <VerifyMyWork />
      <ServicesSection />
      <WhyChooseMe />
      <ProjectsSection />
      <CompetitionsSection />
      <AchievementsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
