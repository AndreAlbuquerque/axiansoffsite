import { motion } from "framer-motion";

const Level7LooksLikeSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slide-bg p-12">
      <motion.h1
        className="slide-heading-lg text-foreground text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        What does level 6 look like?
      </motion.h1>
    </div>
  );
};

export default Level7LooksLikeSlide;
