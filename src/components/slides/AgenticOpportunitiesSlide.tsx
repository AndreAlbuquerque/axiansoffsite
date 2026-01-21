import { motion } from "framer-motion";

interface OpportunityCardProps {
  tag: string;
  text: string;
  delay: number;
  hasBot?: boolean;
}

const OpportunityCard = ({ tag, text, delay, hasBot = false }: OpportunityCardProps) => (
  <motion.div
    className="border border-muted-foreground/20 rounded-lg p-4 bg-muted/5 hover:bg-muted/10 transition-colors"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <div className="flex items-start gap-3">
      <span className="px-2 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400 whitespace-nowrap">
        {tag}
      </span>
      <span className="text-foreground text-sm flex-1">
        {text}
        {hasBot && <span className="ml-1">🤖</span>}
      </span>
    </div>
  </motion.div>
);

const opportunities = [
  { tag: "Multi-agent", text: "Multiple specialized agents working together" },
  { tag: "Event-driven", text: "Triggers based on events or schedules" },
  { tag: "Human-loop", text: "Critical decisions require human approval", hasBot: true },
  { tag: "Autonomous", text: "Fully automated within defined guardrails" },
  { tag: "RAG-powered", text: "Retrieval-augmented generation for accuracy" },
  { tag: "Tool-using", text: "Agents that can call APIs and external tools" },
  { tag: "Memory", text: "Persistent context across conversations", hasBot: true },
  { tag: "Observability", text: "Full tracing and monitoring of agent actions" },
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

      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 max-w-3xl w-full">
          {opportunities.map((opp, index) => (
            <OpportunityCard
              key={index}
              tag={opp.tag}
              text={opp.text}
              hasBot={opp.hasBot}
              delay={0.3 + index * 0.08}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgenticOpportunitiesSlide;
