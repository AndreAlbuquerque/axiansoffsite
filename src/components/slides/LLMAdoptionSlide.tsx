import { motion } from "framer-motion";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  delay: number;
  iconType: "audit" | "roadmap" | "action" | "plan";
}

const StepIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    audit: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 20 Q15 15 20 20 Q25 25 30 20" stroke="#0d9488" strokeWidth="2" fill="none"/>
        <path d="M10 25 Q15 20 20 25 Q25 30 30 25" stroke="#0d9488" strokeWidth="2" fill="none"/>
      </svg>
    ),
    roadmap: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="12" stroke="#0d9488" strokeWidth="2" fill="none"/>
        <path d="M20 12 L20 8 M28 20 L32 20" stroke="#0d9488" strokeWidth="2"/>
      </svg>
    ),
    action: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 20 L15 20 L18 12 L22 28 L25 20 L32 20" stroke="#fff" strokeWidth="2" fill="none"/>
        <path d="M28 15 L32 20 L28 25" stroke="#fff" strokeWidth="2" fill="none"/>
      </svg>
    ),
    plan: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 30 L20 10 M15 30 L25 10 M20 30 L30 10" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

const StepCard = ({ number, title, description, delay, iconType }: StepCardProps) => {
  const isOrange = iconType === "action" || iconType === "plan";
  
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className={`flex items-center gap-2 mb-4 ${isOrange ? "text-white" : "text-teal-600"}`}>
        <span className="text-4xl font-bold">{number}</span>
        <div className={`w-12 h-12 rounded-full ${isOrange ? "bg-orange-500" : "bg-teal-50"} flex items-center justify-center`}>
          <StepIcon type={iconType} />
        </div>
      </div>
      <h3 className={`font-bold text-lg mb-2 ${isOrange ? "text-white" : "text-teal-700"}`}>{title}</h3>
      <p className={`text-sm text-center max-w-[180px] ${isOrange ? "text-orange-100" : "text-gray-600"}`}>
        {description}
      </p>
    </motion.div>
  );
};

const LLMAdoptionSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-amber-50 p-12">
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Four steps to LLM adoption
      </motion.h1>

      <div className="flex-1 flex flex-col">
        {/* Headers */}
        <div className="flex mb-2">
          <motion.div 
            className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-l-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="font-bold">ANALYZE</span>
          </motion.div>
          <motion.div 
            className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-r-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="font-bold">BUILD</span>
          </motion.div>
        </div>

        {/* Subheaders */}
        <div className="flex mb-8">
          <div className="flex-1 flex">
            <motion.p 
              className="flex-1 text-teal-600 text-sm italic px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Self-evaluation: inner workings of your company & Product
            </motion.p>
          </div>
          <div className="flex-1 flex">
            <motion.p 
              className="flex-1 text-orange-600 text-sm italic px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experimental action
            </motion.p>
            <motion.p 
              className="flex-1 text-orange-600 text-sm italic px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Long-term strategy
            </motion.p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="flex-1 flex">
          {/* Analyze section */}
          <div className="flex-1 flex gap-8 justify-center items-start py-8 bg-amber-100/50 rounded-l-xl">
            <StepCard
              number="1."
              iconType="audit"
              title="Internal audit:"
              description="Look inside - identify departments and functions where AI tools can have most impact"
              delay={0.5}
            />
            <StepCard
              number="2."
              iconType="roadmap"
              title="Reevaluate the product roadmap:"
              description="Use first principles and an AI-native lens to assess product roadmap"
              delay={0.6}
            />
          </div>
          
          {/* Build section */}
          <div className="flex-1 flex gap-8 justify-center items-start py-8 bg-orange-400 rounded-r-xl">
            <StepCard
              number="3."
              iconType="action"
              title="Take first steps:"
              description="Choose actionable projects and get busy road-testing capabilities"
              delay={0.7}
            />
            <StepCard
              number="4."
              iconType="plan"
              title="Build a long-term plan:"
              description="Consider downstream implications for competition and defensibility (what's your AI 'next act')"
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMAdoptionSlide;
