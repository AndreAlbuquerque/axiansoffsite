import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";

// Mini Lego block component
const MiniLegoBlock = ({ 
  color, 
  isAi = false,
}: { 
  color: "yellow" | "red" | "blue"; 
  isAi?: boolean;
}) => {
  const colors = {
    yellow: isAi ? "bg-yellow-200 border-yellow-400" : "bg-yellow-400",
    red: isAi ? "bg-red-200 border-red-400" : "bg-red-500",
    blue: isAi ? "bg-blue-200 border-blue-400" : "bg-blue-500",
  };

  return (
    <div className="relative">
      <div className={`w-6 h-2.5 ${colors[color]} rounded-[1px] relative ${isAi ? 'border border-dashed' : ''}`}>
        <div className="absolute -top-0.5 left-0.5 flex gap-0.5">
          <div className={`w-1 h-0.5 ${colors[color]} rounded-t-[1px]`} />
          <div className={`w-1 h-0.5 ${colors[color]} rounded-t-[1px]`} />
        </div>
        {isAi && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[4px] text-gray-600">✦</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Mini blocks grid component
const MiniBlocksGrid = () => {
  const phases = [
    { yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
    { yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
    { yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
    { yellow: 0, red: 1, blue: 0, yellowAi: 1, redAi: 1, blueAi: 0 },
    { yellow: 0, red: 0, blue: 1, yellowAi: 0, redAi: 1, blueAi: 1 },
    { yellow: 0, red: 0, blue: 1, yellowAi: 0, redAi: 1, blueAi: 1 },
  ];

  return (
    <div className="flex gap-0.5">
      {phases.map((phase, i) => (
        <div key={i} className="flex flex-col-reverse items-center gap-0.5">
          {Array.from({ length: phase.blue }).map((_, j) => (
            <MiniLegoBlock key={`b${j}`} color="blue" />
          ))}
          {Array.from({ length: phase.blueAi }).map((_, j) => (
            <MiniLegoBlock key={`ba${j}`} color="blue" isAi />
          ))}
          {Array.from({ length: phase.red }).map((_, j) => (
            <MiniLegoBlock key={`r${j}`} color="red" />
          ))}
          {Array.from({ length: phase.redAi }).map((_, j) => (
            <MiniLegoBlock key={`ra${j}`} color="red" isAi />
          ))}
          {Array.from({ length: phase.yellow }).map((_, j) => (
            <MiniLegoBlock key={`y${j}`} color="yellow" />
          ))}
          {Array.from({ length: phase.yellowAi }).map((_, j) => (
            <MiniLegoBlock key={`ya${j}`} color="yellow" isAi />
          ))}
        </div>
      ))}
    </div>
  );
};

// Conductor icon - using a magic wand style representation
const ConductorIcon = () => (
  <div className="relative flex flex-col items-center">
    {/* Circular glow background */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-2xl" />
    
    {/* Central icon */}
    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center border border-muted-foreground/20">
      <Wand2 className="w-16 h-16 text-foreground" strokeWidth={1.5} />
    </div>
    
    {/* Label */}
    <span className="mt-4 text-lg font-medium text-foreground">Orchestrator</span>
  </div>
);

// Agentic diagram component
const AgenticDiagram = () => {
  const agents = [
    { name: "Exec Slides\nagent", angle: -60 },
    { name: "PRD writing\nagent", angle: -20 },
    { name: "QA\nAgent", angle: 20 },
    { name: "Design\nfeedback\nagent", angle: 60 },
    { name: "Product\nsense\nagent", angle: 100 },
    { name: "Market\nresearch\nagent", angle: 140 },
    { name: "Stakeholder\nnegotiation\nagent", angle: 180 },
    { name: "Prio\nagent", angle: 220 },
  ];

  const outerRadius = 90;
  const innerRadius = 50;
  const centerX = 120;
  const centerY = 120;

  return (
    <div className="relative w-[240px] h-[240px]">
      {/* SVG for orbital rings */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Outer red ring */}
        <circle
          cx={centerX}
          cy={centerY}
          r={outerRadius}
          fill="none"
          stroke="hsl(0, 70%, 50%)"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* Inner gray ring */}
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="hsl(220, 14%, 25%)"
          stroke="none"
        />
      </svg>

      {/* Center YOU circle */}
      <div
        className="absolute w-16 h-16 rounded-full bg-red-500 flex items-center justify-center"
        style={{
          left: centerX - 32,
          top: centerY - 32,
        }}
      >
        <span className="text-white font-bold text-sm">YOU</span>
      </div>

      {/* Agent circles */}
      {agents.map((agent, index) => {
        const rad = (agent.angle * Math.PI) / 180;
        const x = centerX + Math.cos(rad) * outerRadius - 24;
        const y = centerY + Math.sin(rad) * outerRadius - 24;

        return (
          <div
            key={index}
            className="absolute w-12 h-12 rounded-full bg-secondary border border-muted-foreground/30 flex items-center justify-center p-1"
            style={{ left: x, top: y }}
          >
            <span className="text-[6px] text-center text-muted-foreground leading-tight whitespace-pre-line">
              {agent.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const OrchestratorSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg relative overflow-hidden">
      <div className="p-12 flex-1 flex flex-col">
        {/* Title */}
        <motion.h1 
          className="slide-heading-lg text-foreground mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your role gains shape as an orchestrator of the ecosystem
        </motion.h1>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center gap-16">
          {/* Left: Mini blocks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <MiniBlocksGrid />
          </motion.div>

          {/* Center: Conductor icon */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ConductorIcon />
          </motion.div>

          {/* Right: Agentic diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <AgenticDiagram />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrchestratorSlide;