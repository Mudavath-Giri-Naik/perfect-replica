import developerImage from "@/assets/developer-person.png";
import SocialIcon from "./SocialIcon";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20 px-4">
      {/* Background Text - behind image */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none select-none px-2 -mt-8 md:-mt-16 lg:-mt-4">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none tracking-tight text-hero-primary text-center dark:font-extrabold dark:tracking-[-0.02em]">
          Student
        </h1>
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none tracking-tight text-hero-secondary -mt-4 sm:-mt-6 md:-mt-10 lg:-mt-14 text-center dark:font-extrabold dark:tracking-[-0.02em]">
          Developer
        </h1>
      </div>

      {/* Text Content Section - Top */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
        {/* First Paragraph - above image (all screens) */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto -mt-8 md:mt-0 mb-2 md:mb-3">
          <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed text-center">
            21-year-old Computer Science student building projects through{" "}
            <span className="font-bold text-blue-600 dark:text-blue-500">vibe coding</span>
            {", "}aiming for{" "}
            <span className="font-bold text-green-600 dark:text-green-500">GSoC</span>
            {" "}while strengthening core fundamentals from the{" "}
            <span className="font-bold text-black dark:text-white">kernel</span> up.
          </p>
        </div>

        {/* Second and Third Paragraphs - below first paragraph (large screens only) */}
        <div className="hidden lg:flex items-start justify-between w-full mb-2 md:mb-3 px-8 gap-8">
          {/* Second Paragraph - Left */}
          <div className="flex-1 max-w-md">
            <p className="text-base lg:text-lg text-foreground leading-relaxed text-left">
              Learning{" "}
              <span className="font-bold text-blue-600 dark:text-blue-500">Python</span>
              {" "}at scale, exploring how software and the internet really work,
            </p>
          </div>

          {/* Third Paragraph - Right */}
          <div className="flex-1 max-w-md">
            <p className="text-base lg:text-lg text-foreground leading-relaxed text-right">
              and grinding{" "}
              <span className="font-bold text-red-600 dark:text-red-500">DSA</span>
              {" "}in{" "}
              <span className="font-bold text-black dark:text-white">Java</span>
              {" "}— that post-solution rush is my superhero moment.
            </p>
          </div>
        </div>
      </div>

      {/* Developer Image - on top of background text */}
      <div className="relative z-20 flex items-center justify-center w-full mt-0 md:-mt-4 lg:-mt-8">
        <img
          src={developerImage}
          alt="Student Developer working on laptop"
          className="h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] object-contain"
        />
      </div>

      {/* Mobile view - show paragraphs below image */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 mt-6">
        <p className="text-sm md:text-base text-foreground leading-relaxed text-center">
          Learning{" "}
          <span className="font-bold text-blue-600 dark:text-blue-500">Python</span>
          {" "}at scale, exploring how software and the internet really work,
        </p>
        <p className="text-sm md:text-base text-foreground leading-relaxed text-center mt-3 md:mt-4">
          and grinding{" "}
          <span className="font-bold text-red-600 dark:text-red-500">DSA</span>
          {" "}in{" "}
          <span className="font-bold text-black dark:text-white">Java</span>
          {" "}— that post-solution rush is my superhero moment.
        </p>
      </div>

      {/* Social Icons */}
      <div className="relative z-30 flex items-center justify-center flex-wrap gap-3 md:gap-4
       mt-2 md:mt-3 px-4">
        <SocialIcon type="github" url="https://github.com/Mudavath-Giri-Naik" />
        <SocialIcon type="linkedin" url="https://www.linkedin.com/in/giri-naik/" />
        <SocialIcon type="instagram" url="https://www.instagram.com/giri_nayakh/" />
        <SocialIcon type="medium" url="https://medium.com/@mr_girish" />
        <SocialIcon type="whatsapp" url="https://wa.me/9652560237" />
        <SocialIcon type="phone" url="tel:9652560237" />
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-30 flex flex-col items-center gap-2 mt-8 animate-pulse-soft">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
