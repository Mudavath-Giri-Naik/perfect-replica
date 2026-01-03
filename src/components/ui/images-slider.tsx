import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const ImagesSlider = ({
  images,
  imageData,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  autoplayInterval = 2000,
}: {
  images: string[];
  imageData?: Array<{ src: string; text: string }>;
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  autoplayInterval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (autoplay && images.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, autoplayInterval);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slideVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full flex items-center justify-center rounded-lg border border-border/50 shadow-2xl",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {images.length > 0 ? (
        <>
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="absolute w-full h-full inset-0"
            >
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {overlay && (
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-40",
                overlayClassName
              )}
            />
          )}

          {/* Animated Text at Left Bottom Corner */}
          {imageData && imageData[currentIndex] && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute left-6 md:left-8 bottom-6 md:bottom-8 z-50"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-2xl leading-tight">
                  {imageData[currentIndex].text}
                </h2>
              </motion.div>
            </AnimatePresence>
          )}

          {children && (
            <div className="absolute inset-0 z-40 flex items-center justify-center">
              {children}
            </div>
          )}

          {/* Navigation Dots */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-muted-foreground">Loading images...</div>
        </div>
      )}
    </div>
  );
};

