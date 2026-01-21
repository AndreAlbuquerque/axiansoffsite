import { motion } from "framer-motion";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  phase: "analyze" | "build";
}

const StepCard = ({ number, title, description, delay, phase }: StepCardProps) => (
  <motion.div
    className="flex gap-4 items-start"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
      phase === "analyze" ? "bg-teal-500/20 text-teal-400" : "bg-orange-500/20 text-orange-400"
    }`}>
      <span className="font-bold text-lg">{number}</span>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const LLMAdoptionSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Four steps to LLM adoption
      </motion.h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
          {/* ANALYZE Phase */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-teal-400 font-semibold text-sm uppercase tracking-wide">Analyze</span>
            </div>
            
            <div className="space-y-6">
              <StepCard
                number={1}
                title="Identify Opportunities"
                description="Analyze workflows to find where AI can add value: automation, insights, or augmentation."
                delay={0.4}
                phase="analyze"
              />
              <StepCard
                number={2}
                title="Define Success Metrics"
                description="Establish clear KPIs to measure impact: time saved, accuracy improved, or cost reduced."
                delay={0.5}
                phase="analyze"
              />
            </div>
          </motion.div>

          {/* BUILD Phase */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Build</span>
            </div>
            
            <div className="space-y-6">
              <StepCard
                number={3}
                title="Prototype & Iterate"
                description="Start with MVPs, gather feedback, and refine. Speed matters more than perfection."
                delay={0.6}
                phase="build"
              />
              <StepCard
                number={4}
                title="Scale & Monitor"
                description="Deploy to production with observability. Track performance and continuously improve."
                delay={0.7}
                phase="build"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LLMAdoptionSlide;
