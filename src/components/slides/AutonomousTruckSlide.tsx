import { motion } from "framer-motion";
import autonomousTruck from "@/assets/autonomous-truck.png";

const AutonomousTruckSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The Future of Autonomous Systems
      </motion.h1>

      {/* Image */}
      <motion.div
        className="flex-1 flex items-center justify-center min-h-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={autonomousTruck}
          alt="Autonomous truck"
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default AutonomousTruckSlide;
