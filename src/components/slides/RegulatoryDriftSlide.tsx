import { motion } from "framer-motion";
import { ArrowRight, Eye, ShieldCheck, Zap } from "lucide-react";

const requirements = [
{ left: "Frequent regulatory updates", right: "Monitor and summarize relevant changes" },
{ left: "Unclear system impact", right: "Map changes to architecture and contracts" },
{ left: "Data & accessibility compliance risk", right: "Detect gaps against updated standards" },
{ left: "Reactive compliance processes", right: "Generate prioritized action plans" }];


const impacts = [
{ label: "Continuous visibility", sub: "compliance status", icon: Eye },
{ label: "Reduced risk", sub: "audit and regulatory", icon: ShieldCheck },
{ label: "Faster adaptation", sub: "without disruption", icon: Zap }];


const RegulatoryDriftSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg px-12 pt-8 pb-20">
      <motion.h1
        className="slide-heading-lg text-foreground mb-1 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}>Eg 3: Regulatory & Compliance Changes


      </motion.h1>

      <motion.p
        className="text-foreground text-lg font-semibold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}>
        
        Regulatory Drift Agent
      </motion.p>

      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full min-h-0">
        <motion.div
          className="flex items-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}>
          
          <span className="flex-1 text-muted-foreground font-bold text-sm uppercase tracking-wider">Human Challenge</span>
          <div className="w-10" />
          <span className="flex-1 text-muted-foreground font-bold text-sm uppercase tracking-wider">Agent Tasks</span>
        </motion.div>

        {requirements.map((item, index) =>
        <motion.div
          key={index}
          className="flex items-center mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}>
          
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
        )}

        <motion.div
          className="mt-6 bg-accent/10 border border-accent/30 rounded-2xl p-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}>
          
          <h3 className="text-accent font-bold text-lg mb-4 text-center uppercase tracking-wider">Impact</h3>
          <div className="flex gap-4">
            {impacts.map((item, index) =>
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center gap-2 bg-slide-bg rounded-xl px-4 py-4 border border-accent/20"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.12, duration: 0.4 }}>
              
                <item.icon className="text-accent w-7 h-7" />
                <span className="text-accent font-extrabold text-xl leading-tight">{item.label}</span>
                <span className="text-muted-foreground text-xs">{item.sub}</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>);

};

export default RegulatoryDriftSlide;