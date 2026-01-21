import { motion } from "framer-motion";

interface AgentConfig {
  name: string;
  angle: number;
  color: string;
}

interface TeamConfig {
  innerAgents: AgentConfig[];
  outerAgents: AgentConfig[];
  position: { x: number; y: number };
}

const teamConfigs: TeamConfig[] = [
  {
    innerAgents: [
      { name: "Design", angle: -20, color: "#d4d4d4" },
      { name: "PRD", angle: 40, color: "#1f2937" },
      { name: "Market", angle: 160, color: "#d4d4d4" },
      { name: "Product", angle: 220, color: "#3b82f6" },
    ],
    outerAgents: [
      { name: "Exec Slides", angle: -60, color: "#eab308" },
      { name: "QA", angle: 20, color: "#1f2937" },
      { name: "Prio", angle: 180, color: "#fecaca" },
    ],
    position: { x: 110, y: 110 },
  },
  {
    innerAgents: [
      { name: "PRD", angle: 0, color: "#3b82f6" },
      { name: "QA", angle: 60, color: "#1f2937" },
      { name: "Market", angle: 180, color: "#1f2937" },
      { name: "Prio", angle: 240, color: "#d4d4d4" },
    ],
    outerAgents: [
      { name: "Exec Slides", angle: -40, color: "#fecaca" },
      { name: "Design", angle: 30, color: "#d4d4d4" },
      { name: "Product", angle: 120, color: "#3b82f6" },
    ],
    position: { x: 110, y: 110 },
  },
  {
    innerAgents: [
      { name: "Design", angle: 20, color: "#d4d4d4" },
      { name: "PRD", angle: 140, color: "#d4d4d4" },
      { name: "Market", angle: 220, color: "#d4d4d4" },
    ],
    outerAgents: [
      { name: "Exec Slides", angle: -80, color: "#fecaca" },
      { name: "QA", angle: -20, color: "#eab308" },
      { name: "Stakeholder", angle: 180, color: "#fecaca" },
      { name: "Product", angle: 100, color: "#d4d4d4" },
      { name: "Prio", angle: 240, color: "#d4d4d4" },
    ],
    position: { x: 110, y: 110 },
  },
  {
    innerAgents: [
      { name: "PRD", angle: -10, color: "#1f2937" },
      { name: "Market", angle: 160, color: "#d4d4d4" },
      { name: "Prio", angle: 220, color: "#d4d4d4" },
    ],
    outerAgents: [
      { name: "Exec Slides", angle: -50, color: "#d4d4d4" },
      { name: "Design", angle: 30, color: "#fecaca" },
      { name: "QA", angle: 80, color: "#fecaca" },
      { name: "Product", angle: 130, color: "#d4d4d4" },
    ],
    position: { x: 110, y: 110 },
  },
];

// Cross-team arrow connections
const crossTeamArrows = [
  // Top-left to top-right
  { from: { team: 0, orbit: "inner", angle: -20 }, to: { team: 1, orbit: "outer", angle: -40 } },
  { from: { team: 0, orbit: "outer", angle: 20 }, to: { team: 1, orbit: "inner", angle: 180 } },
  // Top-left to bottom-left
  { from: { team: 0, orbit: "inner", angle: 220 }, to: { team: 2, orbit: "outer", angle: -80 } },
  { from: { team: 0, orbit: "outer", angle: 180 }, to: { team: 2, orbit: "inner", angle: 20 } },
  // Top-right to bottom-right
  { from: { team: 1, orbit: "inner", angle: 240 }, to: { team: 3, orbit: "outer", angle: -50 } },
  { from: { team: 1, orbit: "outer", angle: 120 }, to: { team: 3, orbit: "inner", angle: -10 } },
  // Bottom-left to bottom-right
  { from: { team: 2, orbit: "inner", angle: 140 }, to: { team: 3, orbit: "outer", angle: 130 } },
  { from: { team: 2, orbit: "outer", angle: 100 }, to: { team: 3, orbit: "inner", angle: 160 } },
  // Diagonal connections
  { from: { team: 0, orbit: "inner", angle: 40 }, to: { team: 3, orbit: "outer", angle: 30 } },
  { from: { team: 1, orbit: "inner", angle: 60 }, to: { team: 2, orbit: "outer", angle: -20 } },
  { from: { team: 2, orbit: "inner", angle: 220 }, to: { team: 1, orbit: "outer", angle: 30 } },
  { from: { team: 3, orbit: "inner", angle: 220 }, to: { team: 0, orbit: "outer", angle: -60 } },
];

// Team grid positions
const teamGridPositions = [
  { x: 0, y: 0 },   // Top-left
  { x: 250, y: 0 }, // Top-right
  { x: 0, y: 250 }, // Bottom-left
  { x: 250, y: 250 }, // Bottom-right
];

interface MiniAgenticDiagramProps {
  config: TeamConfig;
  index: number;
}

const MiniAgenticDiagram = ({ config, index }: MiniAgenticDiagramProps) => {
  const centerX = 110;
  const centerY = 110;
  const innerRadius = 55;
  const outerRadius = 90;
  const youRadius = 30;
  const grayRingRadius = 42;
  const agentSize = 36;

  return (
    <motion.div 
      className="relative bg-slide-bg rounded-lg"
      style={{ width: 220, height: 220 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
    >
      {/* Outer sky blue orbit circle */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 220">
        <circle
          cx={centerX}
          cy={centerY}
          r={outerRadius}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
      </svg>

      {/* Inner dashed gray orbit circle */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 220">
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      </svg>

      {/* Gray middle ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: grayRingRadius * 2,
          height: grayRingRadius * 2,
          left: centerX - grayRingRadius,
          top: centerY - grayRingRadius,
          backgroundColor: "hsl(220, 14%, 25%)",
        }}
      />

      {/* Center YOU circle */}
      <div
        className="absolute rounded-full bg-sky-500 flex items-center justify-center"
        style={{
          width: youRadius * 2,
          height: youRadius * 2,
          left: centerX - youRadius,
          top: centerY - youRadius,
        }}
      >
        <span className="text-white font-bold text-xs">YOU</span>
      </div>

      {/* Inner orbit agents */}
      {config.innerAgents.map((agent) => {
        const angleRad = (agent.angle * Math.PI) / 180;
        const x = centerX + Math.cos(angleRad) * innerRadius - agentSize / 2;
        const y = centerY + Math.sin(angleRad) * innerRadius - agentSize / 2;

        return (
          <div
            key={`inner-${agent.name}`}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: agentSize,
              height: agentSize,
              left: x,
              top: y,
              backgroundColor: agent.color,
            }}
          >
            <span className="text-white text-[7px] text-center font-medium leading-tight">
              {agent.name}
            </span>
          </div>
        );
      })}

      {/* Outer orbit agents */}
      {config.outerAgents.map((agent) => {
        const angleRad = (agent.angle * Math.PI) / 180;
        const x = centerX + Math.cos(angleRad) * outerRadius - agentSize / 2;
        const y = centerY + Math.sin(angleRad) * outerRadius - agentSize / 2;

        return (
          <div
            key={`outer-${agent.name}`}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: agentSize,
              height: agentSize,
              left: x,
              top: y,
              backgroundColor: agent.color,
            }}
          >
            <span className="text-white text-[7px] text-center font-medium leading-tight">
              {agent.name}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const ConnectedTeamsSlide = () => {
  const innerRadius = 55;
  const outerRadius = 90;

  // Calculate actual agent positions for arrows
  const getAgentPosition = (teamIndex: number, orbit: string, angle: number) => {
    const gridPos = teamGridPositions[teamIndex];
    const centerX = gridPos.x + 110;
    const centerY = gridPos.y + 110;
    const radius = orbit === "inner" ? innerRadius : outerRadius;
    const angleRad = (angle * Math.PI) / 180;
    return {
      x: centerX + Math.cos(angleRad) * radius,
      y: centerY + Math.sin(angleRad) * radius,
    };
  };

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The best teams will focus on agent communication
      </motion.h1>

      {/* 4 Diagrams Grid with Arrows */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative" style={{ width: 470, height: 470 }}>
          {/* Grid of team diagrams */}
          <div className="grid grid-cols-2 gap-8">
            {teamConfigs.map((config, index) => (
              <MiniAgenticDiagram key={index} config={config} index={index} />
            ))}
          </div>

          {/* Cross-team connection arrows */}
          <svg 
            className="absolute inset-0 pointer-events-none" 
            style={{ width: 470, height: 470, zIndex: 10 }}
            viewBox="0 0 470 470"
          >
            <defs>
              <marker id="arrowhead3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
              </marker>
            </defs>
            {crossTeamArrows.map((arrow, i) => {
              const from = getAgentPosition(arrow.from.team, arrow.from.orbit, arrow.from.angle);
              const to = getAgentPosition(arrow.to.team, arrow.to.orbit, arrow.to.angle);
              
              return (
                <motion.line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#6b7280"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowhead3)"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 0.7, pathLength: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ConnectedTeamsSlide;
