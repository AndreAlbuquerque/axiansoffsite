import { motion } from "framer-motion";

// Inner orbit agents (on dashed gray circle)
const innerAgents = [
  { name: "PRD writing\nagent", angle: -30 },
  { name: "Design\nfeedback\nagent", angle: 30 },
  { name: "Market\nresearch\nagent", angle: 150 },
  { name: "Prio\nagent", angle: 210 },
];

// Outer orbit agents (on sky blue circle)
const outerAgents = [
  { name: "Exec Slides\nagent", angle: -70 },
  { name: "QA\nAgent", angle: 10 },
  { name: "Product\nsense\nagent", angle: 70 },
  { name: "Stakeholder\nnegotiation\nagent", angle: 210 },
];

const AgenticMindsetSlide = () => {
  const centerX = 280;
  const centerY = 240;
  const innerRadius = 120;
  const outerRadius = 185;
  const youRadius = 65;
  const grayRingRadius = 92;
  const agentSize = 75;

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The future of individual roles
      </motion.h1>

      {/* Diagram */}
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="relative" style={{ width: 560, height: 480 }}>
          {/* Outer sky blue orbit circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 480">
            <circle
              cx={centerX}
              cy={centerY}
              r={outerRadius}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />
          </svg>

          {/* Inner dashed gray orbit circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 480">
            <circle
              cx={centerX}
              cy={centerY}
              r={innerRadius}
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeDasharray="8 6"
            />
          </svg>

          {/* Gray middle ring (background for inner agents) */}
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
            className="absolute rounded-full bg-sky-500 flex items-center justify-center shadow-lg"
            style={{
              width: youRadius * 2,
              height: youRadius * 2,
              left: centerX - youRadius,
              top: centerY - youRadius,
            }}
          >
            <span className="text-white font-bold text-2xl">YOU</span>
          </div>

          {/* Inner orbit agents (on dashed gray circle) */}
          {innerAgents.map((agent, index) => {
            const angleRad = (agent.angle * Math.PI) / 180;
            const x = centerX + Math.cos(angleRad) * innerRadius - agentSize / 2;
            const y = centerY + Math.sin(angleRad) * innerRadius - agentSize / 2;

            return (
              <motion.div
                key={agent.name}
                className="absolute rounded-full flex items-center justify-center p-2 border-2 border-dashed"
                style={{
                  width: agentSize,
                  height: agentSize,
                  left: x,
                  top: y,
                  backgroundColor: "hsl(220, 14%, 20%)",
                  borderColor: "hsl(220, 10%, 40%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <span className="text-foreground text-xs text-center font-medium whitespace-pre-line leading-tight">
                  {agent.name}
                </span>
              </motion.div>
            );
          })}

          {/* Outer orbit agents (on sky blue circle) */}
          {outerAgents.map((agent, index) => {
            const angleRad = (agent.angle * Math.PI) / 180;
            const x = centerX + Math.cos(angleRad) * outerRadius - agentSize / 2;
            const y = centerY + Math.sin(angleRad) * outerRadius - agentSize / 2;

            return (
              <motion.div
                key={agent.name}
                className="absolute rounded-full flex items-center justify-center p-2 border-2 border-dashed"
                style={{
                  width: agentSize,
                  height: agentSize,
                  left: x,
                  top: y,
                  backgroundColor: "hsl(220, 14%, 20%)",
                  borderColor: "hsl(220, 10%, 40%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              >
                <span className="text-foreground text-xs text-center font-medium whitespace-pre-line leading-tight">
                  {agent.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AgenticMindsetSlide;
