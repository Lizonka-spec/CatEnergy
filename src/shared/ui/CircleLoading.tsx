import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type CircleLoadingType = {
    className?: string;
};

export const CircleLoading = ({ className }: CircleLoadingType) => {
    return (
        <div
            className={(cn("w-full h-screen flex flex-col justify-center items-center"), className)}
        >
            <motion.div
                className="size-15 rounded-full border-4 border-gray-200 border-t-[#68B738]"
                animate={{ transform: "rotate(360deg)" }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};
