import { motion } from "framer-motion";
import orchestratorImage from "@/assets/orchestrator-agent.png";

const OrchestratorAgentSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Multi-Agent Orchestration
      </motion.h1>

      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <img 
          src={orchestratorImage} 
          alt="Multi-Agent Orchestration Diagram" 
          className="max-h-[70vh] w-auto object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default OrchestratorAgentSlide;
