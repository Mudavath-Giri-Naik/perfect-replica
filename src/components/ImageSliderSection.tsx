import { ImagesSlider } from "@/components/ui/images-slider";

const ImageSliderSection = () => {
  // ============================================
  // ADD YOUR IMAGES HERE
  // ============================================
  // 1. Place your images in the public/images folder
  // 2. Update the array below with your image file names
  // 3. Supported formats: .jpg, .jpeg, .png, .webp
  // ============================================
  // Image paths with corresponding text labels
  const imageData = [
    { src: "/images/image.png", text: "Devfest 2024 , Vizag GDG community" },
    { src: "/images/IMG_20241208_172556~2.jpg", text: "Meeting Developers" },
    { src: "/images/IMG_20241209_075612~2.jpg", text: "Achievements & Certificates" },
    { src: "/images/IMG_20250823_195228.jpg", text: "Networking Events" },
    { src: "/images/IMG_20250914_030725.jpg", text: "Hackathon at VIIT Vizag " },
    { src: "/images/IMG_20250914_035115.jpg", text: "Building Connections" },
    { src: "/images/IMG_20250914_084343.jpg", text: "Team Collaboration" },
    { src: "/images/IMG_20250927_191458~2.jpg", text: "Tech Influencer" },
    { src: "/images/IMG_20250927_191626.jpg", text: "Again two more tech Influencers" },
    { src: "/images/IMG_20250928_175548.jpg", text: "Creators Summit @ T-hub Hyderabad" },
    { src: "/images/IMG_20250929_161411~2.jpg", text: "Software Engineer at Student Tribe (HYD)" },
    { src: "/images/IMG_20250929_163728~2.jpg", text: "Founder of Student Tribe (HYD)" },
    { src: "/images/1760863321410.jpeg", text: "Buildathon Hackathon at RITH vizag" },
    { src: "/images/aifor.jpeg", text: "AI for Vizag meetup" },
    { src: "/images/wehub.jpeg", text: "OpenMic meetup at WeHub Hyderabad " },
    { src: "/images/learn.png", text: "Received Bag as Prize for DSA competition" },
    { src: "/images/creators.jpeg", text: "Panel of Creators summit at T-hub Hyderabad" },
  ];

  const images = imageData.map((item) => item.src);

  // If no images are found, show a placeholder message
  if (images.length === 0) {
    return (
      <section className="w-full py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20 border-2 border-dashed border-border rounded-lg">
            <p className="text-muted-foreground text-lg">
              Add your images to the <code className="bg-muted px-2 py-1 rounded">public/images</code> folder
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Supported formats: JPG, PNG, WebP
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-[400px] md:h-[500px] lg:h-[550px]">
          <ImagesSlider
            images={images}
            imageData={imageData}
            autoplay={true}
            autoplayInterval={3000}
            direction="up"
            overlay={true}
            className="rounded-2xl border-4 border-primary/20 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSliderSection;

