"use client";

import * as React from "react";
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_ICON_SIZE = 40;
const DEFAULT_ICON_MAGNIFICATION = 60;
const DEFAULT_ICON_DISTANCE = 140;

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "bottom" | "middle" | "right";
  disableMagnification?: boolean;
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      iconSize = DEFAULT_ICON_SIZE,
      iconMagnification = DEFAULT_ICON_MAGNIFICATION,
      iconDistance = DEFAULT_ICON_DISTANCE,
      direction = "middle",
      disableMagnification = false,
      children,
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    const directionClasses = {
      top: "top-4 left-1/2 -translate-x-1/2",
      bottom: "bottom-4 left-1/2 -translate-x-1/2",
      middle: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      right: "right-4 top-1/2 -translate-y-1/2",
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          if (direction === "right") {
            mouseY.set(e.pageY);
          } else {
            mouseX.set(e.pageX);
          }
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          mouseY.set(Infinity);
        }}
        className={cn(
          "fixed z-50",
          directionClasses[direction],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            direction === "right" 
              ? "flex flex-col items-center gap-3 rounded-2xl px-3 py-4"
              : "flex items-end gap-4 rounded-2xl px-4 pb-3 pt-3",
            "bg-white/10 dark:bg-white/5 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl",
            "border border-white/25 dark:border-white/15",
            "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
            "ring-1 ring-white/10"
          )}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                size: iconSize,
                magnification: iconMagnification,
                distance: iconDistance,
                mouseX: direction === "right" ? mouseY : mouseX,
                disableMagnification: disableMagnification,
              } as any);
            }
            return child;
          })}
        </div>
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

interface DockIconProps extends React.HTMLAttributes<HTMLAnchorElement> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>; // For horizontal docks, this is mouseX; for vertical docks, this is mouseY
  disableMagnification?: boolean;
  href?: string;
}

const DockIcon = React.forwardRef<HTMLAnchorElement, DockIconProps>(
  (
    {
      size = DEFAULT_ICON_SIZE,
      magnification = DEFAULT_ICON_MAGNIFICATION,
      distance = DEFAULT_ICON_DISTANCE,
      mouseX,
      disableMagnification = false,
      className,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const iconRef = React.useRef<HTMLDivElement>(null);

    const distanceTransform = useTransform(mouseX || useMotionValue(Infinity), (val) => {
      const bounds = iconRef.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
      // For vertical docks (right side), use y position; for horizontal, use x position
      // We determine this by checking if the parent container is vertical
      const parent = iconRef.current?.parentElement?.parentElement;
      const isVertical = parent?.classList.contains("flex-col");
      if (isVertical) {
        return val - bounds.y - bounds.height / 2;
      }
      return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(
      distanceTransform,
      [-distance, 0, distance],
      [size, magnification, size]
    );
    const heightTransform = useTransform(
      distanceTransform,
      [-distance, 0, distance],
      [size, magnification, size]
    );

    const width = useSpring(widthTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    const height = useSpring(heightTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    const isExternalLink = href?.startsWith("http");
    const linkProps = isExternalLink
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a
        ref={ref}
        href={href}
        {...linkProps}
        className={cn("relative flex items-center justify-center", className)}
        {...props}
      >
        <motion.div
          ref={iconRef}
          style={
            disableMagnification
              ? { width: size, height: size }
              : {
                  width,
                  height,
                }
          }
          className={cn(
            "relative flex items-center justify-center rounded-full",
            "bg-white/15 dark:bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl",
            "border border-white/30 dark:border-white/20",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
            "transition-colors duration-300 hover:bg-white/25 dark:hover:bg-white/15"
          )}
        >
          <div
            className="relative z-10 flex items-center justify-center text-foreground"
            style={{ width: size, height: size }}
          >
            {children}
          </div>
        </motion.div>
      </a>
    );
  }
);

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };

