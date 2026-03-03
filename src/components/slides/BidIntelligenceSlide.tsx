import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const requirements = [
  { left: "Large, complex tender documents", right: "Parse and structure into traceable requirements" },
  { left: "Mandatory compliance matrices", right: "Auto-generate live compliance mapping" },
  { left: "Repetitive proposal content", right: "Retrieve and adapt validated past submissions" },
  { left: "Risk of omissions or misreads", right: "Run completeness checks and flag risky clauses" },
];

const impacts = [
  "60–80% faster bid preparation",
  "Fewer compliance errors",
  "Leaner teams handling more tenders",
];

const BidIntelligenceSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg px-12 pt-8 pb-20">
      {/* Title */}
      <motion.h1
        className="slide-heading-lg text-foreground mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Example 1: Bid Intelligence Agent
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-accent text-lg font-semibold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Public Procurement Documentation Overload
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
          <span className="flex-1 text-muted-foreground font-bold text-sm uppercase tracking-wider">Requirements</span>
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

        {/* Divider */}
        <motion.div
          className="border-t border-muted-foreground/20 my-5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="text-foreground font-bold text-lg mb-3">Impact</h3>
          <div className="flex gap-3">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1 bg-accent/15 border border-accent/30 rounded-xl px-4 py-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
              >
                <span className="text-accent font-bold text-lg mr-2">{index + 1}.</span>
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BidIntelligenceSlide;
