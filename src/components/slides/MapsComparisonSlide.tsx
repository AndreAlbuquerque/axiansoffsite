import { motion } from "framer-motion";
import mapsComparison from "@/assets/maps-comparison.png";

const MapsComparisonSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Building the highway is part one. But not enough
      </motion.h1>

      {/* Maps Image */}
      <motion.div
        className="flex-1 flex items-center justify-center min-h-0 pb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={mapsComparison}
          alt="Map comparison showing different routes"
          className="max-w-[85%] max-h-[85%] object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default MapsComparisonSlide;
