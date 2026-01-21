import { motion } from "framer-motion";

// Define grid positions for each phase (0-8 columns)
// Grid is 9 columns × 9 rows (row 0 = top, row 8 = bottom)
// Yellow = rows 0-2, Red = rows 3-5, Blue = rows 6-8
type BlockPosition = { col: number; row: number; isAi?: boolean };

// Based on second reference image with AI blocks added
const yellowBlocks: BlockPosition[] = [
  // Deciding: 1 regular + 1 AI
  { col: 0, row: 0 }, { col: 0, row: 1, isAi: true },
  // Ideating: 1 regular + 1 AI
  { col: 1, row: 0 }, { col: 1, row: 1, isAi: true },
  // Scoping: 1 regular + 1 AI
  { col: 2, row: 0 }, { col: 2, row: 1, isAi: true },
  // Designing: 1 AI only
  { col: 3, row: 0, isAi: true },
  // Building: 1 AI only
  { col: 4, row: 0, isAi: true },
  // Testing: none
  // Delivering: 1 regular + 1 AI
  { col: 6, row: 0 }, { col: 6, row: 1, isAi: true },
  // Enabling: 1 regular + 1 AI
  { col: 7, row: 0 }, { col: 7, row: 1, isAi: true },
  // Measuring: 1 regular + 1 AI
  { col: 8, row: 0 }, { col: 8, row: 1, isAi: true },
];

const redBlocks: BlockPosition[] = [
  // Designing: 1 regular + 1 AI
  { col: 3, row: 3 }, { col: 3, row: 4, isAi: true },
  // Building: 1 AI
  { col: 4, row: 3, isAi: true },
  // Testing: 1 AI
  { col: 5, row: 4, isAi: true },
  // Delivering: 1 regular
  { col: 6, row: 4 },
];

const blueBlocks: BlockPosition[] = [
  // Building: 1 regular + 1 AI
  { col: 4, row: 6 }, { col: 4, row: 7, isAi: true },
  // Testing: 1 regular + 2 AI
  { col: 5, row: 6 }, { col: 5, row: 7, isAi: true }, { col: 5, row: 8, isAi: true },
];

const phases = [
  "Deciding", "Ideating", "Scoping", "Designing", 
  "Building", "Testing", "Delivering", "Enabling", "Measuring"
];

const AiBlocksSlide = () => {
  const cellWidth = 60;
  const cellHeight = 24;
  const gridRows = 9;
  const gridCols = 9;

  const renderBlock = (
    pos: BlockPosition, 
    color: "yellow" | "red" | "blue", 
    index: number, 
    baseDelay: number
  ) => {
    const colorClasses = {
      yellow: pos.isAi ? "bg-yellow-200 border-2 border-dashed border-yellow-400" : "bg-yellow-400",
      red: pos.isAi ? "bg-red-200 border-2 border-dashed border-red-400" : "bg-red-500",
      blue: pos.isAi ? "bg-blue-200 border-2 border-dashed border-blue-400" : "bg-blue-500",
    };
    const studColor = {
      yellow: pos.isAi ? "bg-yellow-200" : "bg-yellow-400",
      red: pos.isAi ? "bg-red-200" : "bg-red-500",
      blue: pos.isAi ? "bg-blue-200" : "bg-blue-500",
    };

    return (
      <motion.div
        key={`${color}-${index}`}
        className={`absolute ${colorClasses[color]} flex items-center justify-center`}
        style={{
          left: pos.col * cellWidth + 4,
          top: pos.row * cellHeight + 4,
          width: cellWidth - 8,
          height: cellHeight - 4,
          borderRadius: 2,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: baseDelay + index * 0.03, duration: 0.3 }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className={`w-2.5 h-1 ${studColor[color]} rounded-t-sm`} />
          <div className={`w-2.5 h-1 ${studColor[color]} rounded-t-sm`} />
          <div className={`w-2.5 h-1 ${studColor[color]} rounded-t-sm`} />
        </div>
        {pos.isAi && (
          <span className="text-[10px] text-gray-600">✦✦</span>
        )}
      </motion.div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        AI creates more blocks, and helps you re-allocate your own
      </motion.h1>

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Grid container */}
        <div 
          className="relative"
          style={{ 
            width: gridCols * cellWidth, 
            height: gridRows * cellHeight 
          }}
        >
          {/* Yellow blocks */}
          {yellowBlocks.map((pos, i) => renderBlock(pos, "yellow", i, 0.3))}
          
          {/* Red blocks */}
          {redBlocks.map((pos, i) => renderBlock(pos, "red", i, 0.5))}
          
          {/* Blue blocks */}
          {blueBlocks.map((pos, i) => renderBlock(pos, "blue", i, 0.7))}
        </div>

        {/* Timeline */}
        <motion.div 
          className="mt-4"
          style={{ width: gridCols * cellWidth }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {/* Line */}
          <div className="w-full h-px bg-muted-foreground/50" />
          
          {/* Phase labels */}
          <div className="flex mt-2">
            {phases.map((phase) => (
              <div key={phase} style={{ width: cellWidth }} className="text-center">
                <span className="text-xs text-muted-foreground italic">{phase}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div 
          className="absolute right-16 bottom-24 flex flex-col gap-2"
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