import { motion } from "framer-motion";
import claudeCodeTweet from "@/assets/claude-code-tweet.png";
import roonTweet from "@/assets/roon-tweet.png";

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
        The best companies in the world are already doing it differently
      </motion.h1>

      {/* Images side by side */}
      <motion.div 
        className="flex-1 flex items-center justify-center gap-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <img 
          src={claudeCodeTweet} 
          alt="Claude Code tweet showing 100% autonomous code generation"
          className="max-h-[380px] w-auto rounded-xl shadow-2xl border border-muted"
        />
        <img 
          src={roonTweet} 
          alt="Roon tweet about 100% AI coding"
          className="max-h-[380px] w-auto rounded-xl shadow-2xl border border-muted"
        />
      </motion.div>
    </div>
  );
};

export default ClaudeCodeSlide;