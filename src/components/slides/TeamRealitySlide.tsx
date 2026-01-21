import { motion } from "framer-motion";

interface AgentCircleProps {
  name: string;
  x: number;
  y: number;
  color: string;
  delay: number;
}

const AgentCircle = ({ name, x, y, color, delay }: AgentCircleProps) => (
  <motion.div
    className="absolute w-[50px] h-[50px] rounded-full flex items-center justify-center p-1"
    style={{ left: x, top: y, backgroundColor: color }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
  >
    <span className="text-white text-[6px] text-center font-medium leading-tight">
      {name}
    </span>
  </motion.div>
);

interface TeamDiagramProps {
  agents: Array<{ name: string; angle: number; color: string }>;
  bgTint?: string;
}

const TeamDiagram = ({ agents, bgTint = "white" }: TeamDiagramProps) => {
  const centerX = 120;
  const centerY = 120;
  const radius = 90;

  return (
    <div className="relative w-[240px] h-[240px]" style={{ backgroundColor: bgTint }}>
      {/* Red arc */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 240">
        <path
          d="M 30 120 A 90 90 0 1 1 210 120"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        />
      </svg>

      {/* Gray ring */}
      <div
        className="absolute rounded-full bg-gray-200"
        style={{
          width: 80,
          height: 80,
          left: centerX - 40,
          top: centerY - 40,
        }}
      />

      {/* Center YOU */}
      <div
        className="absolute rounded-full bg-red-500 flex items-center justify-center"
        style={{
          width: 60,
          height: 60,
          left: centerX - 30,
          top: centerY - 30,
        }}
      >
        <span className="text-white font-bold text-sm">YOU</span>
      </div>

      {/* Agent circles */}
      {agents.map((agent, index) => {
        const angleRad = (agent.angle * Math.PI) / 180;
        const x = centerX + Math.cos(angleRad) * radius - 25;
        const y = centerY + Math.sin(angleRad) * radius - 25;

        return (
          <AgentCircle
            key={`${agent.name}-${index}`}
            name={agent.name}
            x={x}
            y={y}
            color={agent.color}
            delay={0.5 + index * 0.05}
          />
        );
      })}
    </div>
  );
};

const teamConfigs = [
  {
    bgTint: "#fff",
    agents: [
      { name: "Exec Slides", angle: -80, color: "#eab308" },
      { name: "Design", angle: -30, color: "#d4d4d4" },
      { name: "PRD", angle: 10, color: "#1f2937" },
      { name: "QA", angle: 60, color: "#1f2937" },
      { name: "Prio", angle: 180, color: "#fecaca" },
      { name: "Market", angle: 220, color: "#d4d4d4" },
      { name: "Product", angle: 120, color: "#3b82f6" },
    ],
  },
  {
    bgTint: "#fff",
    agents: [
      { name: "Exec Slides", angle: -60, color: "#fecaca" },
      { name: "PRD", angle: -10, color: "#3b82f6" },
      { name: "Design", angle: 40, color: "#d4d4d4" },
      { name: "QA", angle: 80, color: "#1f2937" },
      { name: "Prio", angle: 160, color: "#d4d4d4" },
      { name: "Market", angle: 200, color: "#1f2937" },
      { name: "Product", angle: 130, color: "#3b82f6" },
    ],
  },
  {
    bgTint: "#fef2f2",
    agents: [
      { name: "Exec Slides", angle: -90, color: "#fecaca" },
      { name: "QA", angle: -30, color: "#eab308" },
      { name: "Design", angle: 30, color: "#d4d4d4" },
      { name: "PRD", angle: 140, color: "#d4d4d4" },
      { name: "Prio", angle: 180, color: "#d4d4d4" },
      { name: "Stakeholder", angle: 220, color: "#fecaca" },
      { name: "Market", angle: 260, color: "#d4d4d4" },
      { name: "Product", angle: 100, color: "#d4d4d4" },
    ],
  },
  {
    bgTint: "#fff",
    agents: [
      { name: "Exec Slides", angle: -50, color: "#d4d4d4" },
      { name: "PRD", angle: 0, color: "#1f2937" },
      { name: "Design", angle: 50, color: "#fecaca" },
      { name: "QA", angle: 90, color: "#fecaca" },
      { name: "Prio", angle: 170, color: "#d4d4d4" },
      { name: "Market", angle: 210, color: "#d4d4d4" },
      { name: "Product", angle: 130, color: "#d4d4d4" },
    ],
  },
];

const TeamRealitySlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white p-12">
      {/* Title */}
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Now image a reality where every team looks like this
      </motion.h1>

      {/* 4 Diagrams Grid */}
      <motion.div 
        className="flex-1 grid grid-cols-2 gap-8 place-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {teamConfigs.map((config, index) => (
          <TeamDiagram key={index} agents={config.agents} bgTint={config.bgTint} />
        ))}
      </motion.div>
    </div>
  );
};

export default TeamRealitySlide;
