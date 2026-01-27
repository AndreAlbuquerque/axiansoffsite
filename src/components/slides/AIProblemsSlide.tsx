import { motion } from "framer-motion";
import gigoImage from "@/assets/gigo-problem.png";
import hallucinationsImage from "@/assets/ai-hallucinations.png";
import slopImage from "@/assets/ai-slop.png";

const problems = [
  {
    image: gigoImage,
    caption: "The GIGO problem",
  },
  {
    image: hallucinationsImage,
    caption: "AI Hallucinations",
  },
  {
    image: slopImage,
    caption: "The wave of AI product slop",
  },
];

const AIProblemsSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slide-bg p-12">
      {/* Three images in a row */}
      <div className="flex items-end justify-center gap-16 max-w-5xl w-full">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
          >
            <img
              src={problem.image}
              alt={problem.caption}
              className="h-40 object-contain mb-6"
            />
            <p className="text-foreground text-lg text-center">{problem.caption}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIProblemsSlide;
