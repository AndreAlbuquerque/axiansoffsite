import { motion } from "framer-motion";
import aiNativeChart from "@/assets/ai-native-chart.png";

const AiNativeSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        and they're 10x that in another 18 months
      </motion.h1>

      {/* Chart Image */}
      <motion.div
        className="flex-1 flex items-center justify-center min-h-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={aiNativeChart}
          alt="AI Native companies accelerate path to $1 billion by 50%"
          className="max-w-full max-h-[380px] object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default AiNativeSlide;
