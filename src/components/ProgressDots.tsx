import { motion } from "framer-motion";

interface ProgressDotsProps {
  total: number;
  current: number;
}

const ProgressDots = ({ total, current }: ProgressDotsProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
            index === current ? "bg-dot-active" : "bg-dot-inactive"
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={false}
          animate={{
            scale: index === current ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
