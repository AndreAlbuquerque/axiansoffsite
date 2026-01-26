import { motion } from "framer-motion";
import { Brain, Heart, Compass, Rocket, Users, BookOpen } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Systems Thinking",
    description: "Default thinking how technology, business, human and non-human intersect",
  },
  {
    icon: Heart,
    title: "Empathetic Design",
    description: "Building solutions that hyper accelerate the humans who use them",
  },
  {
    icon: Compass,
    title: "(Strategy + Vision) * everyone",
    description: "Everyone's role is seeing beyond immediate problems and shaping long-term direction",
  },
  {
    icon: Rocket,
    title: "Fluid Execution",
    description: "Moving quickly whilst learning continuously, leveraging AI to accelerate progress",
  },
  {
    icon: Users,
    title: "Agent/Human Collab",
    description: "Speaking multiple \"languages\" to drive alignment between humans and agents",
  },
  {
    icon: BookOpen,
    title: "Lightning Continuous Learning",
    description: "Learning and executing no longer trade-offs, as each happen 10x faster",
  },
];

const SkillsGridSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Different skills, across everyone
      </motion.h1>

      {/* Skills Grid */}
      <div className="flex-1 grid grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <skill.icon className="w-8 h-8 text-sky-400" strokeWidth={1.5} />
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGridSlide;
