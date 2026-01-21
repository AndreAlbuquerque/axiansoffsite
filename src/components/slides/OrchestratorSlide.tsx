import { motion } from "framer-motion";

// Mini Lego block component
const MiniLegoBlock = ({ 
  color, 
  isAi = false,
}: { 
  color: "yellow" | "red" | "blue"; 
  isAi?: boolean;
}) => {
  const colors = {
    yellow: isAi ? "bg-yellow-100 border-yellow-300" : "bg-yellow-400",
    red: isAi ? "bg-red-100 border-red-200" : "bg-red-500",
    blue: isAi ? "bg-blue-100 border-blue-200" : "bg-blue-500",
  };

  return (
    <div className="relative">
      <div className={`w-8 h-3 ${colors[color]} rounded-[2px] relative ${isAi ? 'border border-dashed' : ''}`}>
        <div className="absolute -top-1 left-0.5 flex gap-1">
          <div className={`w-1.5 h-1 ${colors[color]} rounded-t-[1px]`} />
          <div className={`w-1.5 h-1 ${colors[color]} rounded-t-[1px]`} />
          <div className={`w-1.5 h-1 ${colors[color]} rounded-t-[1px]`} />
        </div>
        {isAi && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[6px]">✦</span>
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
        <div key={i} className="flex flex-col-reverse items-center">
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

// Conductor silhouette
const ConductorSilhouette = () => (
  <svg viewBox="0 0 200 300" className="w-40 h-60 fill-foreground">
    {/* Conductor body silhouette */}
    <ellipse cx="100" cy="40" rx="20" ry="25" /> {/* Head */}
    <path d="M 60 70 Q 100 60 140 70 L 150 180 Q 100 200 50 180 Z" /> {/* Body/torso */}
    <path d="M 50 180 L 70 280 L 85 280 L 90 190 Z" /> {/* Left leg */}
    <path d="M 150 180 L 130 280 L 115 280 L 110 190 Z" /> {/* Right leg */}
    {/* Right arm raised with baton */}
    <path d="M 140 80 Q 180 40 200 20 L 195 15 Q 175 35 135 75 Z" />
    <line x1="195" y1="15" x2="220" y2="-15" stroke="currentColor" strokeWidth="3" />
    {/* Left arm extended */}
    <path d="M 60 80 Q 20 60 -10 80 L -5 90 Q 25 75 55 90 Z" />
    <line x1="-10" y1="80" x2="-40" y2="60" stroke="currentColor" strokeWidth="3" />
  </svg>
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
          fill="hsl(0, 0%, 90%)"
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
            className="absolute w-12 h-12 rounded-full bg-white border border-muted flex items-center justify-center p-1 shadow-sm"
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

// Orchestra silhouette
const OrchestraSilhouette = () => (
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-foreground" 
    style={{
      clipPath: "polygon(0% 100%, 0% 60%, 5% 50%, 10% 55%, 15% 45%, 20% 50%, 25% 40%, 30% 48%, 35% 38%, 40% 45%, 45% 35%, 50% 42%, 55% 32%, 60% 40%, 65% 35%, 70% 42%, 75% 38%, 80% 45%, 85% 40%, 90% 50%, 95% 45%, 100% 55%, 100% 100%)"
    }}
  />
);

const OrchestratorSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg relative overflow-hidden">
      <div className="p-12 flex-1 flex flex-col">
        {/* Title */}
        <motion.h1 
          className="slide-heading-lg text-foreground mb-8 text-left max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your role gains shape as an orchestrator of the ecosystem, and adding more "lego" blocks
        </motion.h1>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-between px-8 pb-24">
          {/* Left: Mini blocks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <MiniBlocksGrid />
          </motion.div>

          {/* Center: Conductor */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ConductorSilhouette />
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

      {/* Orchestra silhouette at bottom */}
      <OrchestraSilhouette />
    </div>
  );
};

export default OrchestratorSlide;
