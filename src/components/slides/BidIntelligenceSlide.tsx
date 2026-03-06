import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Users } from "lucide-react";

const requirements = [
  { left: "Large, complex tender documents", right: "Parse and structure into traceable requirements" },
  { left: "Mandatory compliance matrices", right: "Auto-generate live compliance mapping" },
  { left: "Repetitive proposal content", right: "Retrieve and adapt validated past submissions" },
  { left: "Risk of omissions or misreads", right: "Run completeness checks and flag risky clauses" },
];

const impacts = [
  { label: "60–80% faster", sub: "bid preparation", icon: Zap },
  { label: "Fewer errors", sub: "in compliance", icon: ShieldCheck },
  { label: "Leaner teams", sub: "handling more tenders", icon: Users },
];

const BidIntelligenceSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg px-12 pt-8 pb-20">
      {/* Title */}
      <motion.h1
        className="slide-heading-lg text-foreground mb-1 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Example 1: Dealing with Public Procurement Documentation Overload
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-foreground text-lg font-semibold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Bid Intelligence Agent
      </motion.p>

      {/* Table */}
      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full min-h-0">
        {/* Header row */}
        <motion.div
          className="flex items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <span className="flex-1 text-muted-foreground font-bold text-sm uppercase tracking-wider">Human Challenge</span>
          <div className="w-10" />
          <span className="flex-1 text-muted-foreground font-bold text-sm uppercase tracking-wider">Agent Tasks</span>
        </motion.div>

        {/* Rows */}
        {requirements.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
          >
            <div className="flex-1 border border-muted-foreground/30 rounded-lg px-4 py-3 bg-secondary/40 text-foreground text-sm">
              {item.left}
            </div>
            <div className="w-10 flex items-center justify-center">
              <ArrowRight className="text-accent w-5 h-5" />
            </div>
            <div className="flex-1 border border-accent/40 rounded-lg px-4 py-3 bg-accent/10 text-foreground text-sm">
              {item.right}
            </div>
          </motion.div>
        ))}

        {/* Impact */}
        <motion.div
          className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="text-blue-400 font-bold text-sm mb-2 text-center uppercase tracking-wider">Impact</h3>
          <div className="flex gap-3">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1 flex items-center gap-3 bg-slide-bg rounded-lg px-3 py-2 border border-blue-500/20"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.12, duration: 0.4 }}
              >
                <item.icon className="text-blue-400 w-5 h-5 shrink-0" />
                <div>
                  <span className="text-blue-400 font-extrabold text-base leading-tight block">{item.label}</span>
                  <span className="text-muted-foreground text-xs">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BidIntelligenceSlide;
