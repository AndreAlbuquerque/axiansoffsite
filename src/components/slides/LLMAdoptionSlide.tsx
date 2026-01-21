import { motion } from "framer-motion";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  phase: "analyze" | "build";
}

// Custom arrow icons matching the reference
const InternalAuditIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <path d="M20 5 Q35 20, 20 35 Q5 20, 20 5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M20 35 L17 30 M20 35 L23 30" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ReevaluateIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <path d="M8 20 C8 12, 20 8, 28 12" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M28 12 L25 8 M28 12 L32 10" stroke="currentColor" strokeWidth="2" />
    <path d="M32 22 C32 30, 20 34, 12 28" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 28 L15 32 M12 28 L8 30" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const TakeStepsIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <path d="M5 30 Q15 25, 15 20 Q15 15, 25 12 Q32 10, 35 5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M35 5 L30 8 M35 5 L32 10" stroke="currentColor" strokeWidth="2" />
    <path d="M10 25 Q18 22, 20 18" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
  </svg>
);

const LongTermIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10">
    <line x1="5" y1="35" x2="35" y2="5" stroke="currentColor" strokeWidth="2" />
    <line x1="10" y1="35" x2="35" y2="10" stroke="currentColor" strokeWidth="2" />
    <line x1="15" y1="35" x2="35" y2="15" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const steps = [
  {
    number: 1,
    title: "Internal audit:",
    description: "Look inside - identify departments and functions where AI tools can have most impact",
    phase: "analyze" as const,
    Icon: InternalAuditIcon,
  },
  {
    number: 2,
    title: "Reevaluate the product roadmap:",
    description: "Use first principles and an AI-native lens to assess product roadmap",
    phase: "analyze" as const,
    Icon: ReevaluateIcon,
  },
  {
    number: 3,
    title: "Take first steps:",
    description: "Choose actionable projects and get busy road-testing capabilities",
    phase: "build" as const,
    Icon: TakeStepsIcon,
  },
  {
    number: 4,
    title: "Build a long-term plan:",
    description: "Consider downstream implications for competition and defensibility (what's your AI \"next act\")",
    phase: "build" as const,
    Icon: LongTermIcon,
  },
];

const LLMAdoptionSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Four steps to AI native adoption
      </motion.h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Phase Headers */}
        <motion.div 
          className="w-full max-w-4xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-t-lg overflow-hidden">
              <div className="bg-violet-600 text-white font-semibold px-4 py-2 text-sm uppercase tracking-wide">
                Analyze
              </div>
              <div className="bg-violet-600/20 px-4 py-2">
                <p className="text-violet-300 text-sm font-medium">Self-evaluation: inner workings of your company & Product</p>
              </div>
            </div>
            <div className="rounded-t-lg overflow-hidden">
              <div className="bg-sky-500 text-white font-semibold px-4 py-2 text-sm uppercase tracking-wide">
                Build
              </div>
              <div className="bg-sky-500/20 px-4 py-2 grid grid-cols-2 gap-2">
                <p className="text-sky-300 text-sm font-medium">Experimental action</p>
                <p className="text-sky-300 text-sm font-medium">Long-term strategy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="w-full max-w-4xl grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
            >
              <div className={`flex items-center gap-2 mb-3 ${
                step.phase === "analyze" ? "text-violet-500" : "text-sky-500"
              }`}>
                <span className="text-3xl font-bold">{step.number}.</span>
                <step.Icon />
              </div>
              <h3 className="text-foreground font-semibold text-sm mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LLMAdoptionSlide;
