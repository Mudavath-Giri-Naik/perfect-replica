import developerImage from "@/assets/developer-person.png";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Highlighter } from "@/components/ui/highlighter";
import SocialIcon from "./SocialIcon";
import { ChevronDown, Github, Linkedin, Instagram, Phone } from "lucide-react";

const HeroSection = () => {
  const socialIcons = [
    {
      title: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Mudavath-Giri-Naik",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/giri-naik/",
    },
    {
      title: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/giri_nayakh/",
    },
    {
      title: "Medium",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
      href: "https://medium.com/@mr_girish",
    },
    {
      title: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      href: "https://wa.me/9652560237",
    },
    {
      title: "Phone",
      icon: <Phone className="w-5 h-5" />,
      href: "tel:9652560237",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20 px-4">
      {/* Background Text - behind image */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none select-none px-2 mt-4 md:mt-8 lg:mt-12">
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
            3rd-year{" "}
            <Highlighter action="underline" color="#ff0022">
              <span className="font-bold text-black dark:text-black">  Computer Science  </span>
            </Highlighter>
            {" "}student with full-stack experience, 12+{" "}
            <Highlighter action="highlight" color="#16a34a">
              <span className="font-bold">  hackathons  </span>
            </Highlighter>
            {", "}5K+ LinkedIn{" "}
            <Highlighter action="highlight" color="#2563eb">
              <span className="font-bold">  followers  </span>
            </Highlighter>
            {" "}currently learning AI using{" "}
            <Highlighter action="highlight" color="#2563eb">
              <span className="font-bold"> Python  </span>
            </Highlighter>
            .
          </p>
        </div>

        {/* Second and Third Paragraphs - below first paragraph (large screens only) */}
        <div className="hidden lg:flex items-start justify-between w-full mb-2 md:mb-3 px-8 gap-8">
          {/* Second Paragraph - Left */}
          <div className="flex-1 max-w-md">
            <p className="text-base lg:text-lg text-foreground leading-relaxed text-left">
              obsessed with understanding how{" "}
              <Highlighter action="highlight" color="#2563eb">
                <span className="font-bold">  things work  </span>
              </Highlighter>
              {" "}under the hood, from{" "}
              <Highlighter action="highlight" color="#16a34a">
                <span className="font-bold">  system internals  </span>
              </Highlighter>
              {" "}to{" "}
              <Highlighter action="highlight" color="#dc2626">
                <span className="font-bold">  intelligent software  </span>
              </Highlighter>
              .
            </p>
          </div>

          {/* Third Paragraph - Right */}
          <div className="flex-1 max-w-md">
            <p className="text-base lg:text-lg text-foreground leading-relaxed text-right">
              <span className="whitespace-nowrap">
                Learning in public through{" "}
                <Highlighter action="highlight" color="#16a34a">
                  <span className="font-bold">  open-source contributions  </span>
                </Highlighter>
              </span>
              {", "}
              <span className="whitespace-nowrap">
                <Highlighter action="highlight" color="#2563eb">
                  <span className="font-bold">  docs-first development  </span>
                </Highlighter>
                {", "}and{" "}
                <Highlighter action="highlight" color="#dc2626">
                  <span className="font-bold">  hands-on system building  </span>
                </Highlighter>
              </span>
              .
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
          <Highlighter action="highlight" color="#2563eb">
            <span className="font-bold">  Python  </span>
          </Highlighter>
          {" "}at scale, exploring how software and the internet really work,
        </p>
        <p className="text-sm md:text-base text-foreground leading-relaxed text-center mt-3 md:mt-4">
          and grinding{" "}
          <Highlighter action="highlight" color="#dc2626">
            <span className="font-bold">  DSA  </span>
          </Highlighter>
          {" "}in{" "}
          <Highlighter action="highlight" color="#000000">
            <span className="font-bold">  Java  </span>
          </Highlighter>
          {" "}— that post-solution rush is my superhero moment.
        </p>
      </div>

      {/* Social Icons - Mobile (original layout) */}
      <div className="relative z-30 flex items-center justify-center flex-wrap gap-3 md:gap-4 mt-2 md:mt-3 px-4 md:hidden">
        <SocialIcon type="github" url="https://github.com/Mudavath-Giri-Naik" />
        <SocialIcon type="linkedin" url="https://www.linkedin.com/in/giri-naik/" />
        <SocialIcon type="instagram" url="https://www.instagram.com/giri_nayakh/" />
        <SocialIcon type="medium" url="https://medium.com/@mr_girish" />
        <SocialIcon type="whatsapp" url="https://wa.me/9652560237" />
        <SocialIcon type="phone" url="tel:9652560237" />
      </div>

      {/* Social Icons - Desktop (Magic UI Dock) */}
      <div className="hidden md:block">
        <Dock direction="right" iconSize={40} iconMagnification={60} iconDistance={140}>
          {socialIcons.map((item, idx) => (
            <DockIcon key={idx} href={item.href}>
              {item.icon}
            </DockIcon>
          ))}
        </Dock>
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
