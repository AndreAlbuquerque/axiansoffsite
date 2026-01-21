import { motion } from "framer-motion";

// AI gradient block component
const AiGradientBlock = ({ 
  width, 
  delay = 0 
}: { 
  width: number;
  delay?: number;
}) => {
  return (
    <motion.div
      className="h-8 rounded-md"
      style={{ 
        width,
        background: "linear-gradient(90deg, #a78bfa, #60a5fa, #34d399, #fbbf24, #fb7185)"
      }}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    />
  );
};

// Regular work block
const WorkBlock = ({ 
  width, 
  delay = 0 
}: { 
  width: number;
  delay?: number;
}) => {
  return (
    <motion.div
      className="h-8 bg-red-500 rounded-md"
      style={{ width }}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
    />
  );
};

const AiFilledTimelineSlide = () => {
  const rowHeight = 50;
  const startY = 60;
  
  // PM row: work blocks with AI gaps
  const pmRow = [
    { type: "work" as const, x: 80, width: 50 },
    { type: "ai" as const, x: 130, width: 60 },
    { type: "work" as const, x: 190, width: 50 },
    { type: "ai" as const, x: 240, width: 130 },
    { type: "work" as const, x: 370, width: 40 },
    { type: "ai" as const, x: 410, width: 120 },
    { type: "work" as const, x: 530, width: 50 },
    { type: "ai" as const, x: 580, width: 50 },
  ];
  
  // Design row
  const designRow = [
    { type: "work" as const, x: 80, width: 50 },
    { type: "ai" as const, x: 130, width: 80 },
    { type: "work" as const, x: 210, width: 50 },
    { type: "ai" as const, x: 260, width: 110 },
    { type: "work" as const, x: 370, width: 40 },
    { type: "ai" as const, x: 410, width: 170 },
    { type: "work" as const, x: 580, width: 50 },
  ];
  
  // Engineering row
  const engRow = [
    { type: "ai" as const, x: 80, width: 130 },
    { type: "work" as const, x: 210, width: 50 },
    { type: "ai" as const, x: 260, width: 110 },
    { type: "work" as const, x: 370, width: 40 },
    { type: "ai" as const, x: 410, width: 170 },
    { type: "work" as const, x: 580, width: 50 },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        AI can reduce (or eliminate) buffers, lead times, dependencies
      </motion.h1>

      {/* Main diagram */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative" style={{ width: 700, height: 220 }}>
          {/* Row labels */}
          <motion.div 
            className="absolute left-0 text-muted-foreground font-medium"
            style={{ top: startY + 4 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            PM
          </motion.div>
          <motion.div 
            className="absolute left-0 text-muted-foreground font-medium"
            style={{ top: startY + rowHeight + 4 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Design
          </motion.div>
          <motion.div 
            className="absolute left-0 text-muted-foreground font-medium"
            style={{ top: startY + rowHeight * 2 + 4 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Engineering
          </motion.div>

          {/* PM row */}
          {pmRow.map((block, i) => (
            <div
              key={`pm-${i}`}
              className="absolute"
              style={{ left: block.x, top: startY }}
            >
              {block.type === "ai" ? (
                <AiGradientBlock width={block.width} delay={0.4 + i * 0.05} />
              ) : (
                <WorkBlock width={block.width} delay={0.4 + i * 0.05} />
              )}
            </div>
          ))}

          {/* Design row */}
          {designRow.map((block, i) => (
            <div
              key={`design-${i}`}
              className="absolute"
              style={{ left: block.x, top: startY + rowHeight }}
            >
              {block.type === "ai" ? (
                <AiGradientBlock width={block.width} delay={0.6 + i * 0.05} />
              ) : (
                <WorkBlock width={block.width} delay={0.6 + i * 0.05} />
              )}
            </div>
          ))}

          {/* Engineering row */}
          {engRow.map((block, i) => (
            <div
              key={`eng-${i}`}
              className="absolute"
              style={{ left: block.x, top: startY + rowHeight * 2 }}
            >
              {block.type === "ai" ? (
                <AiGradientBlock width={block.width} delay={0.8 + i * 0.05} />
              ) : (
                <WorkBlock width={block.width} delay={0.8 + i * 0.05} />
              )}
            </div>
          ))}

          {/* Legend */}
          <motion.div 
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-red-500 rounded" />
              <span className="text-sm text-muted-foreground">Human work</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-4 rounded"
                style={{ background: "linear-gradient(90deg, #a78bfa, #60a5fa, #34d399)" }}
              />
              <span className="text-sm text-muted-foreground">AI fills gaps</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AiFilledTimelineSlide;