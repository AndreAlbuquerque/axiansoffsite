import { motion } from "framer-motion";

interface ArrowStepProps {
  title: string;
  description: string;
  delay: number;
  offsetX: number;
  offsetY: number;
}

const ArrowStep = ({ title, description, delay, offsetX, offsetY }: ArrowStepProps) => (
  <motion.div
    className="flex flex-col items-start"
    style={{ marginLeft: offsetX, marginTop: offsetY }}
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    {/* Arrow */}
    <svg width="280" height="50" viewBox="0 0 280 50">
      <polygon 
        points="0,10 240,10 240,0 280,25 240,50 240,40 0,40" 
        fill="#dc2626" 
      />
    </svg>
    {/* Text below */}
    <div className="mt-4">
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-[200px]">{description}</p>
    </div>
  </motion.div>
);

const HumanControlSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Keeping Humans in Control
      </motion.h1>
      
      <motion.p
        className="text-muted-foreground text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Human-in-the-loop isn't about slowing things down—it's about maintaining accountability and quality at AI speed.
      </motion.p>

      <div className="flex-1 flex flex-col justify-center pl-8">
        <ArrowStep 
          title="Agent Acts"
          description="Drafts, suggests, explores, and automates"
          delay={0.4}
          offsetX={0}
          offsetY={0}
        />
        <ArrowStep 
          title="Human Reviews"
          description="Evaluates quality, alignment, and risk"
          delay={0.6}
          offsetX={180}
          offsetY={-20}
        />
        <ArrowStep 
          title="Decision Made"
          description="Approve, correct, or escalate based on context"
          delay={0.8}
          offsetX={360}
          offsetY={-20}
        />
      </div>
    </div>
  );
};

export default HumanControlSlide;
