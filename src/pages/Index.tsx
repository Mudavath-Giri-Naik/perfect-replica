import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageSliderSection from "@/components/ImageSliderSection";
import { BentoGridDemo } from "@/components/bento-grid-demo";
import { GridBackground } from "@/components/GridBackground";
import { DotBackground } from "@/components/DotBackground";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <GridBackground>
        <DotBackground>
          <HeroSection />
        </DotBackground>
      </GridBackground>
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-b from-neutral-800 to-neutral-500 bg-clip-text text-transparent dark:from-neutral-200 dark:to-neutral-500">
            Featured Projects
          </h2>
          <BentoGridDemo />
        </div>
      </section>

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
