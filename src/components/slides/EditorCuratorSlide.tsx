import { motion } from "framer-motion";

interface FlowBoxProps {
  text: string;
  variant?: "default" | "primary";
  delay: number;
  className?: string;
}

const FlowBox = ({ text, variant = "default", delay, className = "" }: FlowBoxProps) => (
  <motion.div
    className={`px-4 py-3 rounded-xl text-center ${
      variant === "primary" 
        ? "bg-red-500 text-white border-2 border-red-600" 
        : "bg-white text-gray-800 border-2 border-red-300"
    } ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
  >
    <span className="text-sm font-medium">{text}</span>
  </motion.div>
);

const EditorCuratorSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Your Role as Editor and Curator
      </motion.h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-[400px]">
          {/* Top: Agent acts */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <FlowBox text="Agent acts" delay={0.3} />
          </div>

          {/* Left: Human prompts */}
          <div className="absolute top-24 left-4">
            <FlowBox text="Human prompts Event triggers" delay={0.4} />
          </div>

          {/* Right: Orchestration */}
          <div className="absolute top-24 right-4">
            <FlowBox text="Orchestration to fix, improve" delay={0.5} />
          </div>

          {/* Center: Human edits (primary) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <FlowBox 
              text="Human edits, reviews, tests, measures expectations, QAs" 
              variant="primary" 
              delay={0.6}
              className="w-48"
            />
          </div>

          {/* Bottom Left: Process runs */}
          <div className="absolute bottom-8 left-16">
            <FlowBox text="Process runs, action is completed" delay={0.7} />
            <motion.p 
              className="text-sm italic text-muted-foreground mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              "This is good enough to move forward"
            </motion.p>
          </div>

          {/* Bottom Right: No go */}
          <div className="absolute bottom-8 right-16">
            <FlowBox text="No go, improvements, didn't work, failed guardrails" delay={0.8} />
            <motion.p 
              className="text-sm italic text-muted-foreground mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              "This is not what we want—let's correct it"
            </motion.p>
          </div>

          {/* SVG Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            {/* Human prompts to Agent acts */}
            <motion.path
              d="M 130 130 Q 200 80 320 60"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            {/* Agent acts to center */}
            <motion.path
              d="M 400 55 L 400 150"
              stroke="#eab308"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowYellow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            />
            {/* Center to Process runs (left) */}
            <motion.path
              d="M 350 220 Q 280 280 180 300"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              markerEnd="url(#arrowGreen)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            {/* Center to No go (right) */}
            <motion.path
              d="M 450 220 Q 520 280 600 300"
              stroke="#eab308"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowYellow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            {/* No go to Orchestration */}
            <motion.path
              d="M 650 290 Q 700 200 650 130"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            />
            {/* Orchestration to Agent acts */}
            <motion.path
              d="M 620 110 Q 550 60 480 50"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
              </marker>
              <marker id="arrowYellow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#eab308" />
              </marker>
              <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EditorCuratorSlide;
