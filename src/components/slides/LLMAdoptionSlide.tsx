import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Internal audit:",
    description: "Look inside - identify departments and functions where AI tools can have most impact",
    phase: "analyze" as const,
  },
  {
    number: 2,
    title: "Reevaluate the product roadmap:",
    description: "Use first principles and an AI-native lens to assess product roadmap",
    phase: "analyze" as const,
  },
  {
    number: 3,
    title: "Take first steps:",
    description: "Choose actionable projects and get busy road-testing capabilities",
    phase: "build" as const,
  },
  {
    number: 4,
    title: "Build a long-term plan:",
    description: "Consider downstream implications for competition and defensibility (what's your AI \"next act\")",
    phase: "build" as const,
  },
];

const LLMAdoptionSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">

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
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
            >
              <span className={`text-4xl font-bold mb-3 ${
                step.phase === "analyze" ? "text-violet-500" : "text-sky-500"
              }`}>
                {step.number}.
              </span>
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
