import React from "react";
import { cn } from "@/lib/utils";

export interface RainbowButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function RainbowButton({
    children,
    className,
    ...props
}: RainbowButtonProps) {
    return (
        <button
            className={cn(
                "group relative inline-flex h-11 animate-rainbow items-center justify-center rounded-full border-2 border-transparent bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-image:linear-gradient(#000,#000),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] [background-clip:padding-box,border-box] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[-1] before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:opacity-50 before:blur-2xl before:content-[''] hover:opacity-90",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
