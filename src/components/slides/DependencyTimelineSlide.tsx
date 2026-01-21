import { motion } from "framer-motion";

// Work block component - now using sky blue
const WorkBlock = ({ 
  width, 
  color = "blue",
  delay = 0,
  opacity = 1
}: { 
  width: number;
  color?: "blue" | "lightblue";
  delay?: number;
  opacity?: number;
}) => {
  const colorClass = color === "blue" ? "bg-sky-500" : "bg-sky-300";
  
  return (
    <motion.div
      className={`h-8 ${colorClass} rounded-md`}
      style={{ width, opacity }}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
    />
  );
};

// Dependency connector line
const Connector = ({ 
  startX, 
  startY, 
  endX, 
  endY, 
  delay = 0 
}: { 
  startX: number; 
  startY: number; 
  endX: number; 
  endY: number;
  delay?: number;
}) => {
  const midY = (startY + endY) / 2;
  
  return (
    <motion.path
      d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="1.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay, duration: 0.5 }}
    />
  );
};

const DependencyTimelineSlide = () => {
  const rowHeight = 50;
  const startY = 60;
  
  // PM blocks
  const pmBlocks = [
    { x: 80, width: 70, color: "blue" as const },
    { x: 200, width: 80, color: "blue" as const },
    { x: 390, width: 70, color: "lightblue" as const },
    { x: 540, width: 50, color: "lightblue" as const },
  ];
  
  // Design blocks
  const designBlocks = [
    { x: 140, width: 50, color: "lightblue" as const },
    { x: 260, width: 100, color: "lightblue" as const },
    { x: 460, width: 80, color: "lightblue" as const },
    { x: 590, width: 40, color: "lightblue" as const },
  ];
  
  // Engineering blocks
  const engBlocks = [
    { x: 300, width: 120, color: "blue" as const },
    { x: 480, width: 130, color: "blue" as const },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Traditional workflows create dependencies and wait times
      </motion.h1>

      {/* Main diagram */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative" style={{ width: 700, height: 220 }}>
          {/* SVG for connectors */}
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            {/* PM to Design connectors */}
            <Connector startX={150} startY={startY + 16} endX={165} endY={startY + rowHeight + 16} delay={0.6} />
            <Connector startX={280} startY={startY + 16} endX={285} endY={startY + rowHeight + 16} delay={0.7} />
            
            {/* Design to Engineering connectors */}
            <Connector startX={360} startY={startY + rowHeight + 16} endX={320} endY={startY + rowHeight * 2 + 16} delay={0.8} />
            <Connector startX={540} startY={startY + rowHeight + 16} endX={500} endY={startY + rowHeight * 2 + 16} delay={0.9} />
          </svg>

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

          {/* PM blocks */}
          {pmBlocks.map((block, i) => (
            <div
              key={`pm-${i}`}
              className="absolute"
              style={{ left: block.x, top: startY }}
            >
              <WorkBlock width={block.width} color={block.color} delay={0.3 + i * 0.1} />
            </div>
          ))}

          {/* Design blocks */}
          {designBlocks.map((block, i) => (
            <div
              key={`design-${i}`}
              className="absolute"
              style={{ left: block.x, top: startY + rowHeight }}
            >
              <WorkBlock width={block.width} color={block.color} delay={0.5 + i * 0.1} />
            </div>
          ))}

          {/* Engineering blocks */}
          {engBlocks.map((block, i) => (
            <div
              key={`eng-${i}`}
              className="absolute"
              style={{ left: block.x, top: startY + rowHeight * 2 }}
            >
              <WorkBlock width={block.width} color={block.color} delay={0.7 + i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DependencyTimelineSlide;
