import { motion } from "framer-motion";
import replitGrowth from "@/assets/replit-growth.jpeg";

const ReplitGrowthSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        This rocket growth is not just for new companies
      </motion.h1>

      {/* Chart Image */}
      <motion.div
        className="flex-1 flex items-center justify-center min-h-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={replitGrowth}
          alt="Replit Annual Recurring Revenue (ARR) Growth chart"
          className="max-w-full max-h-[420px] object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default ReplitGrowthSlide;
