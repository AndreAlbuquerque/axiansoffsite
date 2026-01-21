import { motion } from "framer-motion";

// Grid-based Lego block component
const LegoBlock = ({ 
  delay = 0 
}: { 
  delay?: number;
}) => {
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <div className="w-full h-full rounded-[2px] relative flex items-center justify-center">
        {/* Studs on top */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-2 h-1.5 rounded-t-[2px] bg-inherit" style={{ boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.1)" }} />
          <div className="w-2 h-1.5 rounded-t-[2px] bg-inherit" style={{ boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.1)" }} />
        </div>
      </div>
    </motion.div>
  );
};

// Define grid positions for each phase (0-8 columns) and each color
// Grid is 9 columns × 9 rows (row 0 = top, row 8 = bottom)
// Based on reference image: Yellow = rows 0-2, Red = rows 3-5, Blue = rows 6-8
type BlockPosition = { col: number; row: number };

const yellowBlocks: BlockPosition[] = [
  // Deciding: 1 yellow at row 0
  { col: 0, row: 0 },
  // Ideating: 2 yellows at rows 0, 1
  { col: 1, row: 0 }, { col: 1, row: 1 },
  // Scoping: 2 yellows at rows 0, 1
  { col: 2, row: 0 }, { col: 2, row: 1 },
  // Designing: none
  // Building: none
  // Testing: none
  // Delivering: 1 yellow at row 0
  { col: 6, row: 0 },
  // Enabling: none
  // Measuring: none
];

const redBlocks: BlockPosition[] = [
  // Deciding: none
  // Ideating: none
  // Scoping: none
  // Designing: 2 reds at rows 3, 4
  { col: 3, row: 3 }, { col: 3, row: 4 },
  // Building: 1 red at row 3
  { col: 4, row: 3 },
  // Testing: none
  // Delivering: 1 red at row 4
  { col: 6, row: 4 },
  // Enabling: none
  // Measuring: none
];

const blueBlocks: BlockPosition[] = [
  // Deciding: none
  // Ideating: none
  // Scoping: none
  // Designing: none
  // Building: 2 blues at rows 6, 7
  { col: 4, row: 6 }, { col: 4, row: 7 },
  // Testing: 2 blues at rows 6, 7
  { col: 5, row: 6 }, { col: 5, row: 7 },
  // Delivering: none
  // Enabling: none
  // Measuring: none
];

const phases = [
  "Deciding", "Ideating", "Scoping", "Designing", 
  "Building", "Testing", "Delivering", "Enabling", "Measuring"
];

const CapacityBlocksSlide = () => {
  const cellWidth = 60;
  const cellHeight = 24;
  const gridRows = 9;
  const gridCols = 9;

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Imagine you have 5 lego blocks of capacity
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
          {yellowBlocks.map((pos, i) => (
            <motion.div
              key={`yellow-${i}`}
              className="absolute bg-yellow-400"
              style={{
                left: pos.col * cellWidth + 4,
                top: pos.row * cellHeight + 4,
                width: cellWidth - 8,
                height: cellHeight - 4,
                borderRadius: 2,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5">
                <div className="w-2.5 h-1 bg-yellow-400 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
                <div className="w-2.5 h-1 bg-yellow-400 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
                <div className="w-2.5 h-1 bg-yellow-400 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
              </div>
            </motion.div>
          ))}

          {/* Red blocks */}
          {redBlocks.map((pos, i) => (
            <motion.div
              key={`red-${i}`}
              className="absolute bg-red-500"
              style={{
                left: pos.col * cellWidth + 4,
                top: pos.row * cellHeight + 4,
                width: cellWidth - 8,
                height: cellHeight - 4,
                borderRadius: 2,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5">
                <div className="w-2.5 h-1 bg-red-500 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
                <div className="w-2.5 h-1 bg-red-500 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
                <div className="w-2.5 h-1 bg-red-500 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
              </div>
            </motion.div>
          ))}

          {/* Blue blocks */}
          {blueBlocks.map((pos, i) => (
            <motion.div
              key={`blue-${i}`}
              className="absolute bg-blue-500"
              style={{
                left: pos.col * cellWidth + 4,
                top: pos.row * cellHeight + 4,
                width: cellWidth - 8,
                height: cellHeight - 4,
                borderRadius: 2,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5">
                <div className="w-2.5 h-1 bg-blue-500 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
                <div className="w-2.5 h-1 bg-blue-500 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
                <div className="w-2.5 h-1 bg-blue-500 rounded-t-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }} />
              </div>
            </motion.div>
          ))}
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

export default CapacityBlocksSlide;