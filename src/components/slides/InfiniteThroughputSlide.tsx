import { motion } from "framer-motion";

const comparisons = [
  { before: "Drafting one document", after: "Drafting N documents" },
  { before: "Generate one tactical plan", after: "Generate N tactical scenarios" },
  { before: "Trying 1 or 2 UX approaches", after: "Test N experiences with actual users" },
  { before: "Continuous fight to include refactors", after: "Agents plan and execute refactors continuously" },
  { before: "Do basic testing coverage", after: "Guarantee high quality coverage and testing" },
];

const InfiniteThroughputSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A World of 'Infinite' Throughput
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="text-muted-foreground text-lg mb-8 max-w-2xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        In an AI-native world, throughput—the speed and volume of valuable work a team can ship through the PDLC—<span className="font-bold text-foreground">becomes infinite.</span>
      </motion.p>

      {/* Comparison boxes */}
      <div className="flex flex-col gap-4 max-w-3xl">
        {comparisons.map((item, index) => (
          <motion.div
            key={index}
            className="border-2 border-red-400 rounded-lg px-6 py-4 bg-background"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
          >
            <span className="text-foreground">{item.before}</span>
            <span className="text-muted-foreground mx-3">›</span>
            <span className="text-foreground">{item.after}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteThroughputSlide;
