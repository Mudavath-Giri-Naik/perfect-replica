import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import ProjectsSection from "@/components/ProjectsSection";
import { GridBackground } from "@/components/GridBackground";
import { DotBackground } from "@/components/DotBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <GridBackground>
        <DotBackground>
          <HeroSection />
        </DotBackground>
      </GridBackground>
      <ProjectsSection />

      <div id="certifications">
        <ImageSliderSection />
      </div>

      {/* Placeholders for potentially future content so scrollspy has targets */}
      <div id="open-source" />
      <div id="blogs" />
    </div>
  );
};

export default Index;
