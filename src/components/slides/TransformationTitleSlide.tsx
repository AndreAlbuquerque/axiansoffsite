import { motion } from "framer-motion";

const TransformationTitleSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slide-bg p-12">
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-foreground text-center leading-tight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        So, how do we start our own transformation?
      </motion.h1>
    </div>
  );
};

export default TransformationTitleSlide;
