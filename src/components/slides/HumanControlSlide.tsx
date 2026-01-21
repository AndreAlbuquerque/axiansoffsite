import { motion } from "framer-motion";

interface ArrowStepProps {
  title: string;
  description: string;
  delay: number;
}

const ArrowStep = ({ title, description, delay }: ArrowStepProps) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    {/* Arrow */}
    <svg width="200" height="50" viewBox="0 0 200 50">
      <polygon 
        points="0,12 160,12 160,0 200,25 160,50 160,38 0,38" 
        fill="#38bdf8" 
      />
    </svg>
    {/* Text below */}
    <div className="mt-3 text-center">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-[180px]">{description}</p>
    </div>
  </motion.div>
);

const HumanControlSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Keeping Humans in Control
      </motion.h1>
      
      <motion.p
        className="text-muted-foreground text-lg mb-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Human-in-the-loop isn't about slowing things down—it's about maintaining accountability and quality at AI speed.
      </motion.p>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-start gap-6">
          <ArrowStep 
            title="Agent Acts"
            description="Drafts, suggests, explores, and automates"
            delay={0.4}
          />
          <ArrowStep 
            title="Human Reviews"
            description="Evaluates quality, alignment, and risk"
            delay={0.6}
          />
          <ArrowStep 
            title="Decision Made"
            description="Approve, correct, or escalate based on context"
            delay={0.8}
          />
        </div>
      </div>
    </div>
  );
};

export default HumanControlSlide;
