import { motion } from "framer-motion";

interface OpportunityCardProps {
  tag: string;
  tagColor: "red" | "gray";
  text: string;
  delay: number;
  hasRobot?: boolean;
}

const OpportunityCard = ({ tag, tagColor, text, delay, hasRobot = false }: OpportunityCardProps) => (
  <motion.div
    className="relative flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    {/* Tag */}
    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium z-10 ${
      tagColor === "red" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
    }`}>
      {tag}
    </div>
    
    {/* Card */}
    <div className="bg-white border-2 border-red-400 rounded-xl px-4 py-6 pt-5 text-center min-h-[100px] flex items-center justify-center">
      <span className="text-gray-800 text-sm">
        {hasRobot && <span className="mr-1">🤖</span>}
        {text}
      </span>
    </div>
  </motion.div>
);

const opportunities = [
  { tag: "Multi-agent", tagColor: "red" as const, text: "Synthesising user research & feedback", hasRobot: true },
  { tag: "Event-driven", tagColor: "red" as const, text: "Writing and maintaining product documentation", hasRobot: true },
  { tag: "Orchestrator", tagColor: "gray" as const, text: "Backlog creation and refinement", hasRobot: true },
  { tag: "Multi-agent", tagColor: "red" as const, text: "Status reporting and stakeholder updates", hasRobot: true },
  { tag: "Event-driven", tagColor: "red" as const, text: "Metrics tracking and insight generation", hasRobot: true },
  { tag: "Single-agent", tagColor: "red" as const, text: "Competitive, market and scenario analysis", hasRobot: true },
];

const staticCards = [
  { text: "Influence, alignment, and accountability", hasRobot: false },
  { text: "Decision-making on trade-offs and prio", hasRobot: false },
];

const AgenticOpportunitiesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Identify the agentic opportunities in your process
      </motion.h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-6 gap-y-10 max-w-5xl">
          {/* Row 1 */}
          <OpportunityCard {...opportunities[0]} delay={0.3} />
          <OpportunityCard {...opportunities[1]} delay={0.4} />
          <OpportunityCard {...opportunities[2]} delay={0.5} />
          <OpportunityCard {...opportunities[3]} delay={0.6} />
          
          {/* Row 2 */}
          <motion.div
            className="bg-white border-2 border-gray-300 rounded-xl px-4 py-6 text-center flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <span className="text-gray-800 text-sm">{staticCards[0].text}</span>
          </motion.div>
          <OpportunityCard {...opportunities[4]} delay={0.8} />
          <motion.div
            className="bg-white border-2 border-gray-300 rounded-xl px-4 py-6 text-center flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <span className="text-gray-800 text-sm">{staticCards[1].text}</span>
          </motion.div>
          <OpportunityCard {...opportunities[5]} delay={1.0} />
        </div>
      </div>
    </div>
  );
};

export default AgenticOpportunitiesSlide;
