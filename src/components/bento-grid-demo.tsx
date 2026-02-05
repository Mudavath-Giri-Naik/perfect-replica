import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    IconBrandGithub,
    IconWorld,
} from "@tabler/icons-react";
import intentifyVideo from "@/assets/Intentify.mp4";
import { Badge } from "@/components/ui/badge";

export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    href={item.href}
                    className=""
                />
            ))}
        </BentoGrid>
    );
}
const VideoHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <video
            src={intentifyVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover group-hover/bento:scale-110 transition-transform duration-500"
        />
    </div>
);

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: (
            <div className="flex items-center gap-2">
                <span>Intentify</span>
                <Badge variant="secondary" className="text-[10px] font-medium py-0 px-1 border-neutral-200 dark:border-neutral-800 text-blue-600 dark:text-blue-400">For Recruiters</Badge>
            </div>
        ),
        description: "This tool turns simple prompts into ready-to-use coding assessments for recruiters.",
        header: <VideoHeader />,
        href: "https://intentify-v2.vercel.app/",
        icon: (
            <div className="flex items-center justify-between w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/Mudavath-Giri-Naik/Intentify-v2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-1 w-8 h-8 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-500 hover:text-black dark:hover:text-white" />
                    </a>
                    <a
                        href="https://intentify-v2.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-1 w-8 h-8 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
                    >
                        <IconWorld className="h-4 w-4 text-neutral-500 hover:text-blue-500" />
                    </a>
                </div>
                <Badge
                    variant="destructive"
                    className="flex items-center gap-1 px-1.5 py-0 text-[10px] uppercase font-bold tracking-tight shadow-sm"
                >
                    <span className="flex h-1 w-1 rounded-full bg-white animate-pulse" />
                    <span className="animate-[pulse_1s_infinite]">Live</span>
                </Badge>
            </div>
        ),
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
];
