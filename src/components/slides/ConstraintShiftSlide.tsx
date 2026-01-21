import { motion } from "framer-motion";
import { Brain, Palette, Users, Target } from "lucide-react";

const constraints = [
  {
    icon: Brain,
    title: "Judgment",
    description: "The ability to evaluate options and make sound decisions",
    gradient: "from-violet-500/20 to-violet-600/10",
    iconBg: "bg-violet-500",
  },
  {
    icon: Palette,
    title: "Product Taste",
    description: "Knowing what great looks like and why it matters",
    gradient: "from-blue-500/20 to-blue-600/10",
    iconBg: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Understanding of Customers",
    description: "Deep empathy for user needs and context",
    gradient: "from-emerald-500/20 to-emerald-600/10",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Target,
    title: "Clear Goal-Setting",
    description: "The ability to define what success means",
    gradient: "from-amber-500/20 to-amber-600/10",
    iconBg: "bg-amber-500",
  },
];

const ConstraintShiftSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-12 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        When throughput becomes nearly unlimited, the constraint shifts.
      </motion.h1>

      {/* Constraint cards - horizontal layout */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-6 max-w-5xl">
          {constraints.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              
              {/* Decorative number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-white/5">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstraintShiftSlide;