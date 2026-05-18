import { motion } from "motion/react";

export const CircleLoading = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
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
