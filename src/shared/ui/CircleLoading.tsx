import { motion } from "motion/react";

export const CircleLoading = () => {
    return (
        <motion.div
            className="size-15 rounded-[50%] border-4 border-[#68B738]"
            animate={{ transform: "rotate(360deg)" }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
};
