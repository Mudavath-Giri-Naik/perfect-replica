import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-black z-[100] origin-left",
                className,
            )}
            style={{
                scaleX,
            }}
        />
    );
}
