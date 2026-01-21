import { motion } from "framer-motion";

interface FeatureBoxProps {
  title: string;
  description?: string;
  color: "green" | "pink" | "blue";
  delay: number;
}

const FeatureBox = ({ title, description, color, delay }: FeatureBoxProps) => {
  const bgColors = {
    green: "bg-green-100 border-green-300",
    pink: "bg-red-100 border-red-300",
    blue: "bg-blue-100 border-blue-300",
  };

  return (
    <motion.div
      className={`px-4 py-3 rounded-lg border-2 ${bgColors[color]} text-center`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
    >
      <p className="text-gray-800 font-semibold text-sm">{title}</p>
      {description && (
        <p className="text-gray-600 text-xs mt-1">{description}</p>
      )}
    </motion.div>
  );
};

interface WorkerBoxProps {
  delay: number;
}

const WorkerBox = ({ delay }: WorkerBoxProps) => (
  <motion.div
    className="flex flex-col items-center gap-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <div className="bg-blue-200 border-2 border-blue-300 px-6 py-2 rounded-lg">
      <span className="text-gray-800 font-medium text-sm">Worker</span>
    </div>
    <div className="bg-green-100 border-2 border-green-300 px-4 py-2 rounded-lg">
      <span className="text-gray-700 text-xs">Agent Memory</span>
    </div>
  </motion.div>
);

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

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-[450px]">
          {/* Shared Memory Management - Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <motion.div
              className="bg-red-200 border-2 border-red-300 px-6 py-4 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="text-gray-800 font-semibold text-sm text-center">Shared<br />Memory<br />Management</p>
            </motion.div>
          </div>

          {/* Context Continuity - Top Right */}
          <div className="absolute top-4 right-0">
            <FeatureBox 
              title="Context Continuity:" 
              description="Remember what has been decided"
              color="green" 
              delay={0.4} 
            />
          </div>

          {/* Concurrency - Left */}
          <div className="absolute top-28 left-0">
            <FeatureBox 
              title="Concurrency:" 
              description="Schedule and run tasks effectively"
              color="green" 
              delay={0.5} 
            />
          </div>

          {/* Error Handling - Bottom Left */}
          <div className="absolute top-56 left-0">
            <FeatureBox 
              title="Error Handling:" 
              description="Detect failures and recover"
              color="green" 
              delay={0.6} 
            />
          </div>

          {/* Orchestrator Agent - Center */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 border-2 border-blue-300 px-10 py-5 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <span className="text-gray-800 font-bold text-lg">Orchestrator Agent</span>
          </motion.div>

          {/* Dynamic Routing - Right */}
          <div className="absolute top-36 right-0">
            <FeatureBox 
              title="Dynamic Routing:" 
              description="Decide which worker should handle a task"
              color="green" 
              delay={0.7} 
            />
          </div>

          {/* Handoffs - Bottom Right */}
          <div className="absolute top-64 right-0">
            <FeatureBox 
              title="Handoffs:" 
              description="Transfer task without losing context"
              color="green" 
              delay={0.8} 
            />
          </div>

          {/* Workers - Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-8">
            <WorkerBox delay={0.9} />
            <WorkerBox delay={1.0} />
            <WorkerBox delay={1.1} />
          </div>

          {/* SVG Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            {/* Arrow from Shared Memory to Orchestrator */}
            <motion.path
              d="M 400 90 L 400 170"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            {/* Arrow from Orchestrator to Workers */}
            <motion.path
              d="M 400 260 L 400 320"
              stroke="#9ca3af"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OrchestratorAgentSlide;
