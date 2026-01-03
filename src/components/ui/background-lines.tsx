import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BackgroundLines = ({
  className,
  children,
  svgOptions = { duration: 10 },
}: {
  className?: string;
  children: React.ReactNode;
  svgOptions?: { duration?: number };
}) => {
  const duration = svgOptions?.duration || 10;

  return (
    <div className={cn("relative flex w-full items-center justify-center overflow-hidden", className)}>
      {/* Animated SVG Background Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          
          {/* Multiple animated wave paths */}
          <motion.path
            d="M 0,400 Q 300,350 600,400 T 1200,400"
            stroke="url(#line-gradient-1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M 0,500 Q 300,450 600,500 T 1200,500"
            stroke="url(#line-gradient-2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: duration + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.path
            d="M 0,300 Q 300,250 600,300 T 1200,300"
            stroke="url(#line-gradient-2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: duration - 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.path
            d="M 0,600 Q 300,550 600,600 T 1200,600"
            stroke="url(#line-gradient-2)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: duration + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.path
            d="M 0,200 Q 300,150 600,200 T 1200,200"
            stroke="url(#line-gradient-2)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: duration - 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </svg>
      </div>
      
      {/* Content on top */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

