import { motion } from "framer-motion";

const BuiltDifferentlySlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-xl text-foreground text-center max-w-4xl leading-tight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        This is done by people who are built differently, and build differently
      </motion.h1>
    </div>
  );
};

export default BuiltDifferentlySlide;
