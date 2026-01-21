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
        ? "bg-red-500 text-white" 
        : "border-2 border-red-500 text-foreground bg-slide-bg"
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
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Your Role as Editor and Curator
      </motion.h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-3xl h-[340px]">
          {/* Agent acts - Top */}
          <FlowBox 
            text="Agent acts" 
            delay={0.3} 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-36"
          />
          
          {/* Human prompts / Event triggers - Left */}
          <FlowBox 
            text="Human prompts / Event triggers" 
            delay={0.4} 
            className="absolute left-0 top-20 w-40"
          />
          
          {/* Orchestration to fix, improve - Right */}
          <FlowBox 
            text="Orchestration to fix, improve" 
            delay={0.5} 
            className="absolute right-0 top-20 w-40"
          />
          
          {/* Central - Human edits */}
          <FlowBox 
            text="Human edits, reviews, tests, measures expectations, QAs" 
            variant="primary"
            delay={0.6} 
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-52 py-4"
          />
          
          {/* "This is good enough" - Left italic */}
          <motion.p
            className="absolute left-4 top-[58%] text-muted-foreground text-xs italic max-w-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            "This is good enough to move forward"
          </motion.p>
          
          {/* "This is not what we want" - Right italic */}
          <motion.p
            className="absolute right-4 top-[58%] text-muted-foreground text-xs italic max-w-28 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            "This is not what we want—let's correct it"
          </motion.p>
          
          {/* Process runs - Bottom Left */}
          <FlowBox 
            text="Process runs, action is completed" 
            delay={0.7} 
            className="absolute left-8 bottom-0 w-40"
          />
          
          {/* No go - Bottom Right */}
          <FlowBox 
            text="No go, improvements, didn't work, failed guardrails" 
            delay={0.8} 
            className="absolute right-8 bottom-0 w-40"
          />

          {/* Arrows - SVG paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            <defs>
              <marker id="arrow-gray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
              </marker>
              <marker id="arrow-yellow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#eab308" />
              </marker>
              <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#22c55e" />
              </marker>
            </defs>
            
            {/* Human prompts -> Agent acts */}
            <motion.path
              d="M 100 85 Q 100 30, 280 30"
              stroke="#6b7280"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            
            {/* Agent acts -> Human edits (yellow) */}
            <motion.path
              d="M 370 45 L 370 125"
              stroke="#eab308"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-yellow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            />
            
            {/* Agent acts -> Orchestration */}
            <motion.path
              d="M 430 30 Q 550 30, 550 85"
              stroke="#6b7280"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            />
            
            {/* Orchestration -> Human edits (yellow) */}
            <motion.path
              d="M 520 120 L 450 150"
              stroke="#eab308"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-yellow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            />
            
            {/* Human edits -> Process runs (green dashed) */}
            <motion.path
              d="M 300 210 Q 200 260, 130 280"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
              markerEnd="url(#arrow-green)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            
            {/* Human edits -> No go */}
            <motion.path
              d="M 440 210 Q 520 260, 550 280"
              stroke="#6b7280"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            
            {/* No go -> Orchestration (loop back) */}
            <motion.path
              d="M 600 280 Q 650 180, 600 120"
              stroke="#6b7280"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-gray)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EditorCuratorSlide;
