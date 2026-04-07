"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { motion } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type MotionCarouselProps = {
  slides: number[];
  options?: EmblaOptionsType;
  renderSlide?: (slide: number, index: number) => React.ReactNode;
  className?: string;
};

export function MotionCarousel({ slides, options, renderSlide, className }: MotionCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={`motion-carousel ${className ?? ""}`}>
      <div className="motion-carousel__viewport" ref={emblaRef}>
        <div className="motion-carousel__container">
          {slides.map((slide, idx) => (
            <div key={slide} className="motion-carousel__slide">
              <motion.div
                animate={{
                  scale: selectedIndex === idx ? 1 : 0.88,
                  opacity: selectedIndex === idx ? 1 : 0.45,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="motion-carousel__slide-inner"
              >
                {renderSlide ? renderSlide(slide, idx) : <div className="motion-carousel__fallback">Slide {slide + 1}</div>}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="motion-carousel__controls" aria-label="Carousel controls">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="motion-carousel__arrow"
          aria-label="Previous slide"
          disabled={!canScrollPrev}
        >
          <IconChevronLeft size={16} />
        </button>
        <div className="motion-carousel__dots" role="tablist" aria-label="Project slides">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={selectedIndex === index}
              className={`motion-carousel__dot ${selectedIndex === index ? "motion-carousel__dot--active" : ""}`}
              onClick={() => emblaApi?.scrollTo(index)}
            >
              {selectedIndex === index ? `Project ${index + 1}` : ""}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="motion-carousel__arrow"
          aria-label="Next slide"
          disabled={!canScrollNext}
        >
          <IconChevronRight size={16} />
        </button>
      </div>

      <style>{`
        .motion-carousel {
          position: relative;
          border: 1px solid #e4e4e7;
          border-radius: 16px;
          background: #f7f7f8;
          padding: 18px 0 16px;
        }
        .motion-carousel__viewport {
          overflow: hidden;
          width: 100%;
        }
        .motion-carousel__container {
          display: flex;
          margin-left: 0;
        }
        .motion-carousel__slide {
          min-width: 60%;
          padding-left: 0;
        }
        .motion-carousel__slide-inner {
          transform-origin: center center;
        }
        .motion-carousel__fallback {
          min-height: 160px;
          border-radius: 12px;
          border: 1px solid #e4e4e7;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #52525b;
          background: #fff;
          font-weight: 600;
        }
        .motion-carousel__controls {
          margin-top: 16px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          position: relative;
          z-index: 3;
        }
        .motion-carousel__arrow {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 0;
          background: #111;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .motion-carousel__arrow:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .motion-carousel__dots {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
          justify-content: center;
          flex: 1;
        }
        .motion-carousel__dot {
          min-width: 11px;
          height: 11px;
          border-radius: 999px;
          border: 0;
          background: #111;
          cursor: pointer;
          padding: 0;
          color: transparent;
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
          transition: all 0.28s ease;
        }
        .motion-carousel__dot--active {
          min-width: 78px;
          height: 32px;
          padding: 0 14px;
          background: #18181b;
          color: #fff;
        }
        @media (max-width: 768px) {
          .motion-carousel {
            padding: 14px 0 12px;
          }
          .motion-carousel__slide {
            min-width: 86%;
            padding-left: 0;
          }
          .motion-carousel__container {
            margin-left: 0;
          }
          .motion-carousel__controls {
            padding: 0 10px;
          }
          .motion-carousel__arrow {
            width: 34px;
            height: 34px;
            border-radius: 10px;
          }
          .motion-carousel__dot--active {
            min-width: 64px;
            height: 26px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}
