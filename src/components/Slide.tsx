import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
}

const slideVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const Slide = ({ children }: SlideProps) => {
  return (
    <motion.div
      className="w-screen h-screen bg-slide-bg flex flex-col pt-16"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-16 pb-8">
        <div className="max-w-5xl w-full text-center">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Slide;
