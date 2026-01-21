import { motion } from "framer-motion";
import layerArchitecture from "@/assets/layer-architecture.png";

const LayerArchitectureSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Everyone will work in each "organ" of agents
      </motion.h1>

      {/* Image */}
      <motion.div 
        className="flex-1 flex items-center justify-center pb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <img 
          src={layerArchitecture} 
          alt="Agent Architecture - Tool/Retrieval Layer, Action/Orchestration Layer, Reasoning Layer"
          className="max-h-[380px] w-auto rounded-xl shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default LayerArchitectureSlide;
