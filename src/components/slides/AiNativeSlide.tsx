import { motion } from "framer-motion";
import aiNativeChart from "@/assets/ai-native-chart.png";

const AiNativeSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slide-bg p-8">
      <motion.img
        src={aiNativeChart}
        alt="AI Native companies accelerate path to $1 billion by 50%"
        className="max-w-full max-h-full object-contain rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};

export default AiNativeSlide;
