import { motion } from "framer-motion";
import claudeCodeTweet from "@/assets/claude-code-tweet.png";

const ClaudeCodeSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Claude Code wrote autonomously 100% of the code of Claude Cowork in 1.5 weeks
      </motion.h1>

      {/* Image */}
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <img 
          src={claudeCodeTweet} 
          alt="Claude Code tweet showing 100% autonomous code generation"
          className="max-h-[400px] w-auto rounded-xl shadow-2xl border border-muted"
        />
      </motion.div>
    </div>
  );
};

export default ClaudeCodeSlide;