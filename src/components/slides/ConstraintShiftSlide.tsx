import { motion } from "framer-motion";
import { Brain, Palette, Users, Target } from "lucide-react";

const constraints = [
  {
    icon: Brain,
    title: "Judgment",
    description: "The ability to evaluate options and make sound decisions",
  },
  {
    icon: Palette,
    title: "Product Taste",
    description: "Knowing what great looks like and why it matters",
  },
  {
    icon: Users,
    title: "Understanding of Customers",
    description: "Deep empathy for user needs and context",
  },
  {
    icon: Target,
    title: "Clear Goal-Setting",
    description: "The ability to define what success means",
  },
];

const ConstraintShiftSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-12 max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        When throughput becomes nearly unlimited, the constraint shifts.
      </motion.h1>

      {/* Constraint cards - stacked with overlap */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[500px]">
          {constraints.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative bg-muted/80 rounded-lg p-5 mb-[-8px] shadow-sm"
              style={{
                marginLeft: index * 4,
                zIndex: constraints.length - index,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mb-2">
                <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h3 className="text-foreground font-bold text-lg mb-1">{item.title}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstraintShiftSlide;
