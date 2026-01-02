"use client";

import React from "react";
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      {/* Desktop Dock */}
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform md:hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-2 rounded-2xl",
          "bg-background/90 backdrop-blur-lg",
          "border border-border",
          "px-3 py-2 shadow-lg"
        )}
      >
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={cn(
              "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg",
              "bg-background/50 hover:bg-background/80",
              "border border-border/50",
              "transition-all duration-200 active:scale-95"
            )}
            aria-label={item.title}
          >
            <div className="h-4 w-4 text-foreground">{item.icon}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 transform md:flex",
        className
      )}
    >
      <div
        className={cn(
          "flex items-end gap-4 rounded-2xl",
          "bg-background/80 backdrop-blur-lg",
          "border border-border",
          "px-4 pb-3 pt-3"
        )}
      >
        {items.map((item, idx) => (
          <IconContainer mouseX={mouseX} key={idx} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

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

  const [hovered, setHovered] = React.useState(false);

  const isExternalLink = href.startsWith("http");
  const linkProps = isExternalLink
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...linkProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center"
      aria-label={title}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className="relative flex items-center justify-center rounded-full bg-background/80 backdrop-blur-lg border border-border transition-colors duration-300 hover:bg-background"
      >
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ width: 40, height: 40 }}
        >
          {icon}
        </div>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            className="absolute -top-8 left-1/2 whitespace-pre rounded-md border border-border bg-background px-2 py-0.5 text-xs text-foreground"
          >
            {title}
          </motion.div>
        )}
      </motion.div>
    </a>
  );
}

