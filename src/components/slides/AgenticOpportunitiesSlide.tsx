import { motion } from "framer-motion";

interface OpportunityCardProps {
  tag: string;
  text: string;
  delay: number;
  hasBot?: boolean;
}

const OpportunityCard = ({ tag, text, delay, hasBot = false }: OpportunityCardProps) => (
  <motion.div
    className="rounded-xl border-2 border-red-500/50 bg-slide-bg p-4 flex flex-col"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <div className="mb-2">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
        {tag}
      </span>
    </div>
    <p className="text-foreground text-sm leading-relaxed">
      {hasBot && <span className="mr-1">🤖</span>}
      {text}
    </p>
  </motion.div>
);

const opportunities = [
  { tag: "Multi-agent", text: "Synthesising user research & feedback", hasBot: true },
  { tag: "Event-driven", text: "Writing and maintaining product documentation", hasBot: true },
  { tag: "Orchestrator", text: "Backlog creation and refinement", hasBot: true },
  { tag: "Multi-agent", text: "Status reporting and stakeholder updates", hasBot: true },
  { tag: "Event-driven", text: "Metrics tracking and insight generation", hasBot: true },
  { tag: "Single-agent", text: "Competitive, market and scenario analysis", hasBot: true },
];

const bottomRow = [
  { text: "Influence, alignment, and accountability" },
  { text: "Decision-making on trade-offs and prio" },
];

const AgenticOpportunitiesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Identify the agentic opportunities in your process
      </motion.h1>

      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        {/* Top row - 4 cards */}
        <div className="grid grid-cols-4 gap-4 max-w-4xl w-full">
          {opportunities.slice(0, 4).map((opp, index) => (
            <OpportunityCard
              key={index}
              tag={opp.tag}
              text={opp.text}
              hasBot={opp.hasBot}
              delay={0.3 + index * 0.08}
            />
          ))}
        </div>

        {/* Bottom row - 2 tagged + 2 plain */}
        <div className="grid grid-cols-4 gap-4 max-w-4xl w-full">
          {/* Plain cards (no tag) */}
          <motion.div
            className="rounded-xl border-2 border-red-500/50 bg-slide-bg p-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.4 }}
          >
            <p className="text-foreground text-sm leading-relaxed">{bottomRow[0].text}</p>
          </motion.div>

          {opportunities.slice(4, 6).map((opp, index) => (
            <OpportunityCard
              key={index + 4}
              tag={opp.tag}
              text={opp.text}
              hasBot={opp.hasBot}
              delay={0.7 + index * 0.08}
            />
          ))}

          <motion.div
            className="rounded-xl border-2 border-red-500/50 bg-slide-bg p-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.4 }}
          >
            <p className="text-foreground text-sm leading-relaxed">{bottomRow[1].text}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgenticOpportunitiesSlide;
