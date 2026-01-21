import { motion } from "framer-motion";

const TitleSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        The Age of Infinite Throughput
      </motion.h1>
      <motion.p 
        className="slide-body-lg text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        A presentation for Axians by André Albuquerque
      </motion.p>
    </div>
  );
};

export default TitleSlide;
