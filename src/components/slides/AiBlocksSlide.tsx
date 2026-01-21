import { motion } from "framer-motion";

// Lego block component with AI variant
const LegoBlock = ({ 
  color, 
  isAi = false,
  delay = 0 
}: { 
  color: "yellow" | "red" | "blue"; 
  isAi?: boolean;
  delay?: number;
}) => {
  const colors = {
    yellow: isAi ? "bg-yellow-100 border-yellow-300" : "bg-yellow-400 border-yellow-500",
    red: isAi ? "bg-red-100 border-red-200" : "bg-red-500 border-red-600",
    blue: isAi ? "bg-blue-100 border-blue-200" : "bg-blue-500 border-blue-600",
  };

  const studColors = {
    yellow: isAi ? "bg-yellow-100" : "bg-yellow-400",
    red: isAi ? "bg-red-100" : "bg-red-500",
    blue: isAi ? "bg-blue-100" : "bg-blue-500",
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      {/* Block body */}
      <div className={`w-16 h-6 ${colors[color]} rounded-sm relative ${isAi ? 'border border-dashed' : ''}`}>
        {/* Studs on top */}
        <div className="absolute -top-2 left-1 flex gap-2">
          <div className={`w-3 h-2 ${studColors[color]} rounded-t-sm border-t border-l border-r border-black/10`} />
          <div className={`w-3 h-2 ${studColors[color]} rounded-t-sm border-t border-l border-r border-black/10`} />
          <div className={`w-3 h-2 ${studColors[color]} rounded-t-sm border-t border-l border-r border-black/10`} />
        </div>
        {/* AI sparkle */}
        {isAi && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px]">✦✦</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Column of blocks for a phase - now with AI blocks
const PhaseColumn = ({ 
  phase, 
  yellow = 0, 
  red = 0, 
  blue = 0,
  yellowAi = 0,
  redAi = 0,
  blueAi = 0,
  baseDelay = 0
}: { 
  phase: string;
  yellow?: number;
  red?: number;
  blue?: number;
  yellowAi?: number;
  redAi?: number;
  blueAi?: number;
  baseDelay?: number;
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Blocks stack (bottom to top: blue, red, yellow) */}
      <div className="flex flex-col-reverse items-center min-h-[160px] justify-start">
        {/* Blue blocks */}
        {Array.from({ length: blue }).map((_, i) => (
          <LegoBlock key={`blue-${i}`} color="blue" delay={baseDelay + 0.05 * i} />
        ))}
        {/* Blue AI blocks */}
        {Array.from({ length: blueAi }).map((_, i) => (
          <LegoBlock key={`blue-ai-${i}`} color="blue" isAi delay={baseDelay + 0.05 * (blue + i)} />
        ))}
        {/* Red blocks */}
        {Array.from({ length: red }).map((_, i) => (
          <LegoBlock key={`red-${i}`} color="red" delay={baseDelay + 0.05 * (blue + blueAi + i)} />
        ))}
        {/* Red AI blocks */}
        {Array.from({ length: redAi }).map((_, i) => (
          <LegoBlock key={`red-ai-${i}`} color="red" isAi delay={baseDelay + 0.05 * (blue + blueAi + red + i)} />
        ))}
        {/* Yellow blocks */}
        {Array.from({ length: yellow }).map((_, i) => (
          <LegoBlock key={`yellow-${i}`} color="yellow" delay={baseDelay + 0.05 * (blue + blueAi + red + redAi + i)} />
        ))}
        {/* Yellow AI blocks */}
        {Array.from({ length: yellowAi }).map((_, i) => (
          <LegoBlock key={`yellow-ai-${i}`} color="yellow" isAi delay={baseDelay + 0.05 * (blue + blueAi + red + redAi + yellow + i)} />
        ))}
      </div>
    </div>
  );
};

const phases = [
  { name: "Deciding", yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
  { name: "Ideating", yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
  { name: "Scoping", yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
  { name: "Designing", yellow: 0, red: 1, blue: 0, yellowAi: 1, redAi: 1, blueAi: 0 },
  { name: "Building", yellow: 0, red: 0, blue: 1, yellowAi: 0, redAi: 1, blueAi: 1 },
  { name: "Testing", yellow: 0, red: 0, blue: 1, yellowAi: 0, redAi: 1, blueAi: 1 },
  { name: "Delivering", yellow: 1, red: 1, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
  { name: "Enabling", yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
  { name: "Measuring", yellow: 1, red: 0, blue: 0, yellowAi: 1, redAi: 0, blueAi: 0 },
];

const AiBlocksSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        AI creates more blocks, and helps you re-allocate your own
      </motion.h1>

      {/* Main content area */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Blocks grid */}
        <div className="flex justify-start gap-1 mb-4 ml-8">
          {phases.map((phase, index) => (
            <PhaseColumn 
              key={phase.name}
              phase={phase.name}
              yellow={phase.yellow}
              red={phase.red}
              blue={phase.blue}
              yellowAi={phase.yellowAi}
              redAi={phase.redAi}
              blueAi={phase.blueAi}
              baseDelay={0.3 + index * 0.03}
            />
          ))}
        </div>

        {/* Timeline */}
        <motion.div 
          className="relative ml-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {/* Line */}
          <div className="w-[650px] h-px bg-muted-foreground/50" />
          
          {/* Phase labels */}
          <div className="flex justify-start gap-1 mt-2">
            {phases.map((phase) => (
              <div key={phase.name} className="w-16 text-center">
                <span className="text-xs text-muted-foreground italic">{phase.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div 
          className="absolute right-16 bottom-28 flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-yellow-400 rounded-sm" />
            <span className="text-sm text-muted-foreground">Product capacity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-red-500 rounded-sm" />
            <span className="text-sm text-muted-foreground">Design capacity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-blue-500 rounded-sm" />
            <span className="text-sm text-muted-foreground">Eng capacity</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AiBlocksSlide;
