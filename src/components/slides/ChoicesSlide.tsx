import { motion } from "framer-motion";

const TangledPath = ({ delay }: { delay: number }) => (
  <motion.svg 
    width="120" 
    height="120" 
    viewBox="0 0 120 120"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    <motion.path
      d="M60,20 C20,20 20,60 60,60 C100,60 100,20 60,20 M60,40 C40,40 40,80 60,80 C80,80 80,40 60,40 M50,50 C30,50 30,90 60,90 C90,90 90,50 70,50"
      stroke="#dc2626"
      strokeWidth="2.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: delay + 0.2, duration: 1.5 }}
    />
    <motion.path
      d="M30,60 C10,60 10,100 50,100 C90,100 90,60 70,60 M40,30 C20,30 20,70 40,70 C60,70 60,30 40,30"
      stroke="#dc2626"
      strokeWidth="2.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: delay + 0.4, duration: 1.2 }}
    />
  </motion.svg>
);

const WavyLine = ({ fromRed, delay }: { fromRed: boolean; delay: number }) => (
  <motion.svg 
    width="300" 
    height="80" 
    viewBox="0 0 300 80"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    <defs>
      <linearGradient id={fromRed ? "redToGreen" : "greenToRed"} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={fromRed ? "#dc2626" : "#22c55e"} />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor={fromRed ? "#22c55e" : "#dc2626"} />
      </linearGradient>
    </defs>
    <motion.path
      d={fromRed 
        ? "M0,40 Q30,20 60,40 Q90,60 120,40 Q150,20 180,40 Q210,50 240,40 Q270,35 300,40"
        : "M0,40 Q30,45 60,40 Q90,30 120,40 Q150,60 180,40 Q210,20 240,40 Q270,60 300,40"
      }
      stroke={`url(#${fromRed ? "redToGreen" : "greenToRed"})`}
      strokeWidth="3"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: delay + 0.3, duration: 1.5 }}
    />
  </motion.svg>
);

const ChoicesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Each one of us has to decide what's ahead
      </motion.h1>

      <div className="flex-1 flex flex-col justify-center gap-20">
        {/* Top row: Hard choices → Easy life */}
        <div className="flex items-center justify-center gap-4">
          <motion.span 
            className="text-foreground text-xl font-medium w-24 text-right"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hard<br/>choices
          </motion.span>
          <TangledPath delay={0.4} />
          <WavyLine fromRed={true} delay={0.6} />
          <motion.span 
            className="text-green-400 text-xl font-medium w-24"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            Easy<br/>Life
          </motion.span>
        </div>

        {/* Bottom row: Easy choices → Hard life */}
        <div className="flex items-center justify-center gap-4">
          <motion.span 
            className="text-green-500 text-xl font-medium w-24 text-right"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Easy<br/>choices
          </motion.span>
          <WavyLine fromRed={false} delay={0.7} />
          <TangledPath delay={0.9} />
          <motion.span 
            className="text-red-500 text-xl font-medium w-24"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            Hard<br/>Life
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ChoicesSlide;
