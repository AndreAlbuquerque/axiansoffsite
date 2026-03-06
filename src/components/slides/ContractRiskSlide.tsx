import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert, Handshake, Scale } from "lucide-react";

const requirements = [
  { left: "Ambiguous or conflicting clauses", right: "Extract and normalize obligations by party" },
  { left: "Hidden penalties and exposure", right: "Detect and quantify financial risk triggers" },
  { left: "Unclear ownership across stakeholders", right: "Generate structured responsibility matrix" },
  { left: "Ongoing amendments and addenda", right: "Maintain live obligation and milestone map" },
];

const impacts = [
  { label: "Lower exposure", sub: "legal and financial", icon: ShieldAlert },
  { label: "Faster alignment", sub: "fewer disputes", icon: Handshake },
  { label: "Strategic focus", sub: "not parsing", icon: Scale },
];

const ContractRiskSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg px-12 pt-8 pb-20">
      <motion.h1
        className="slide-heading-lg text-foreground mb-1 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Eg 2: Contract Ambiguity & Legal Risk
      </motion.h1>

      <motion.p
        className="text-foreground text-lg font-semibold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Contract Risk & Obligation Agent
      </motion.p>

      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full min-h-0">
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

        <motion.div
          className="mt-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="text-emerald-400 font-bold text-sm mb-2 text-center uppercase tracking-wider">Impact</h3>
          <div className="flex gap-3">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1 flex items-center gap-3 bg-slide-bg rounded-lg px-3 py-2 border border-emerald-500/20"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.12, duration: 0.4 }}
              >
                <item.icon className="text-emerald-400 w-5 h-5 shrink-0" />
                <div>
                  <span className="text-emerald-400 font-extrabold text-base leading-tight block">{item.label}</span>
                  <span className="text-emerald-400 text-xs">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContractRiskSlide;
