import { motion } from "framer-motion";
import aiEcosystemImage from "@/assets/ai-ecosystem-reference.png";

const AIAgentEcosystemSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The AI Agent Ecosystem
      </motion.h1>

      <motion.div 
        className="flex-1 flex items-center justify-center pb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <img 
          src={aiEcosystemImage} 
          alt="AI Agent Ecosystem - Tools, Observability, Knowledge Systems, LLM Layer, Analytics, User Interface" 
          className="max-h-[420px] w-auto object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default AIAgentEcosystemSlide;
