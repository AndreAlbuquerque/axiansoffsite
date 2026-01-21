import { motion } from "framer-motion";

const agents = [
  { name: "Exec Slides\nagent", angle: -60 },
  { name: "PRD writing\nagent", angle: -20 },
  { name: "QA\nAgent", angle: 20 },
  { name: "Design\nfeedback\nagent", angle: 60 },
  { name: "Product\nsense\nagent", angle: 100 },
  { name: "Market\nresearch\nagent", angle: 150 },
  { name: "Stakeholder\nnegotiation\nagent", angle: 200 },
  { name: "Prio\nagent", angle: 250 },
];

const AgenticMindsetSlide = () => {
  const centerX = 300;
  const centerY = 280;
  const innerRadius = 140;
  const outerRadius = 220;

  return (
    <div className="w-full h-full flex flex-col bg-white p-12">
      {/* Title */}
      <motion.h1 
        className="text-5xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The Agentic Mindset
      </motion.h1>

      {/* Diagram */}
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="relative" style={{ width: 600, height: 560 }}>
          {/* Outer red circle arc */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 560">
            <path
              d="M 80 280 A 220 220 0 1 1 520 280"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <path
              d="M 100 400 A 180 180 0 0 0 500 400"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />
          </svg>

          {/* Gray middle ring */}
          <div
            className="absolute rounded-full bg-gray-200"
            style={{
              width: innerRadius * 2,
              height: innerRadius * 2,
              left: centerX - innerRadius,
              top: centerY - innerRadius,
            }}
          />

          {/* Center YOU circle */}
          <div
            className="absolute rounded-full bg-red-500 flex items-center justify-center"
            style={{
              width: 120,
              height: 120,
              left: centerX - 60,
              top: centerY - 60,
            }}
          >
            <span className="text-white font-bold text-2xl">YOU</span>
          </div>

          {/* Agent circles */}
          {agents.map((agent, index) => {
            const angleRad = (agent.angle * Math.PI) / 180;
            const x = centerX + Math.cos(angleRad) * outerRadius - 45;
            const y = centerY + Math.sin(angleRad) * outerRadius - 45;

            return (
              <motion.div
                key={agent.name}
                className="absolute w-[90px] h-[90px] rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center p-2"
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <span className="text-gray-700 text-xs text-center font-medium whitespace-pre-line leading-tight">
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
