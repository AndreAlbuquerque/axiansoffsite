import { motion } from "framer-motion";

const levels = [
  { level: 1, label: "LLM", x: 80, y: 300 },
  { level: 2, label: "LLM + good\nprompting", x: 160, y: 260 },
  { level: 3, label: "Custom LLM\nw/ Knowledge\n+ instructions", x: 260, y: 200 },
  { level: 4, label: "+ connectors\n/MCPs", x: 380, y: 150 },
  { level: 5, label: "Orchestration\nand workflows", x: 500, y: 100 },
  { level: 6, label: "Full Agentic\nsystems", x: 620, y: 50 },
];

const AiLevelsSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The AI Maturity Ladder
      </motion.h1>

      {/* Diagram */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative" style={{ width: 750, height: 400 }}>
          {/* Horizontal level lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[0, 1, 2, 3, 4, 5, 6].map((lvl) => (
              <motion.line
                key={lvl}
                x1={50}
                y1={340 - lvl * 45}
                x2={700}
                y2={340 - lvl * 45}
                stroke="hsl(0, 70%, 50%)"
                strokeWidth="1"
                opacity={0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3 + lvl * 0.05, duration: 0.4 }}
              />
            ))}
          </svg>

          {/* Level labels on left */}
          {[0, 1, 2, 3, 4, 5, 6].map((lvl) => (
            <motion.div
              key={`label-${lvl}`}
              className="absolute text-sm text-muted-foreground"
              style={{ left: 10, top: 340 - lvl * 45 - 8 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + lvl * 0.05 }}
            >
              {lvl === 0 ? "Lvl 0" : `Lvl ${lvl}`}
            </motion.div>
          ))}

          {/* Bottom baseline label */}
          <motion.div
            className="absolute bottom-0 left-12 right-12 border-t border-muted-foreground/30 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-sm text-muted-foreground">Lvl 0 - Traditional PDLC</span>
          </motion.div>

          {/* Level circles */}
          {levels.map((item, index) => {
            // Calculate size based on level
            const size = 70 + index * 8;
            
            return (
              <motion.div
                key={item.level}
                className="absolute flex items-center justify-center bg-red-500 rounded-full p-2"
                style={{
                  left: item.x - size / 2,
                  top: item.y - size / 2,
                  width: size,
                  height: size,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 0.5 + index * 0.15, 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <span className="text-white text-xs text-center font-medium leading-tight whitespace-pre-line">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AiLevelsSlide;