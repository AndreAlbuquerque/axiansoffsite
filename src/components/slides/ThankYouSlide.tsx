import { motion } from "framer-motion";

const ThankYouSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg items-center justify-center p-12">
      <motion.h1 
        className="text-7xl font-bold text-foreground mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
      >
        Thank you!
      </motion.h1>
      
      <motion.div
        className="w-24 h-1 bg-red-500 rounded-full mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
      
      <motion.p
        className="text-2xl text-muted-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Happy to answer questions
      </motion.p>
    </div>
  );
};

export default ThankYouSlide;
