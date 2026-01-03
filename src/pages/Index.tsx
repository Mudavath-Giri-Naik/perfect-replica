import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageSliderSection from "@/components/ImageSliderSection";
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
      <ImageSliderSection />
    </div>
  );
};

export default Index;
