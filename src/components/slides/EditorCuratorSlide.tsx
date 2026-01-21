import { motion } from "framer-motion";

interface FlowBoxProps {
  text: string;
  variant?: "default" | "primary";
  delay: number;
  className?: string;
}

const FlowBox = ({ text, variant = "default", delay, className = "" }: FlowBoxProps) => (
  <motion.div
    className={`px-4 py-3 rounded-lg text-center text-sm font-medium ${
      variant === "primary" 
        ? "bg-sky-500 text-white" 
        : "border-2 border-muted-foreground/40 text-foreground bg-slide-bg"
    } ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
  >
    {text}
  </motion.div>
);

const EditorCuratorSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-24">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        You become a curator and editor
      </motion.h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-3xl" style={{ height: '360px' }}>
          {/* SVG Arrows Layer - positioned behind boxes */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 700 360"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker id="arrow-gray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#9ca3af" />
              </marker>
              <marker id="arrow-yellow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#eab308" />
              </marker>
              <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#22c55e" />
              </marker>
            </defs>
            
            {/* Human prompts -> Agent acts (curved up-right) */}
            <motion.path
              d="M 130 85 C 130 30, 280 15, 310 25"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            
            {/* Agent acts -> Human edits (yellow, down) */}
            <motion.path
              d="M 350 55 L 350 130"
              stroke="#eab308"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-yellow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            />
            
            {/* Agent acts -> Orchestration (curved right) */}
            <motion.path
              d="M 400 25 C 500 15, 560 30, 560 70"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
            />
            
            {/* Orchestration -> Human edits (yellow, diagonal) */}
            <motion.path
              d="M 530 100 L 450 145"
              stroke="#eab308"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-yellow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            />
            
            {/* Human edits -> Process runs (green dashed, down-left) */}
            <motion.path
              d="M 290 210 C 230 250, 170 270, 130 285"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
              markerEnd="url(#arrow-green)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
            
            {/* Human edits -> No go (down-right) */}
            <motion.path
              d="M 420 210 C 480 250, 530 270, 565 285"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.5 }}
            />
            
            {/* No go -> Orchestration (loop back up on right side) */}
            <motion.path
              d="M 630 300 C 680 250, 680 150, 620 110"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
          </svg>

          {/* Agent acts - Top Center */}
          <FlowBox 
            text="Agent acts" 
            delay={0.3} 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-36"
          />
          
          {/* Human prompts / Event triggers - Left */}
          <FlowBox 
            text="Human prompts Event triggers" 
            delay={0.35} 
            className="absolute left-0 top-16 w-32 text-xs"
          />
          
          {/* Orchestration to fix, improve - Right */}
          <FlowBox 
            text="Orchestration to fix, improve" 
            delay={0.4} 
            className="absolute right-0 top-16 w-36 text-xs"
          />
          
          {/* Central - Human edits */}
          <FlowBox 
            text="Human edits, reviews, tests, measures expectations, QAs" 
            variant="primary"
            delay={0.5} 
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-56 py-5"
          />
          
          {/* "This is good enough" - Left italic */}
          <motion.p
            className="absolute left-2 top-[200px] text-muted-foreground text-xs italic max-w-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            "This is good enough to move forward"
          </motion.p>
          
          {/* "This is not what we want" - Right italic */}
          <motion.p
            className="absolute right-2 top-[200px] text-muted-foreground text-xs italic max-w-24 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
          >
            "This is not what we want—let's correct it"
          </motion.p>
          
          {/* Process runs - Bottom Left */}
          <FlowBox 
            text="Process runs, action is completed" 
            delay={0.6} 
            className="absolute left-4 bottom-0 w-36 text-xs"
          />
          
          {/* No go - Bottom Right */}
          <FlowBox 
            text="No go, improvements, didn't work, failed guardrails" 
            delay={0.65} 
            className="absolute right-4 bottom-0 w-40 text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default EditorCuratorSlide;
