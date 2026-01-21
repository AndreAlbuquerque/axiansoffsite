import { motion } from "framer-motion";

const RaiseYourHandAISlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slide-bg p-12 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-muted/20" />
      <div className="absolute bottom-10 right-40 w-40 h-40 rounded-full bg-muted/10" />

      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground text-center max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Raise your hand ✋ again if you're using AI as part of your work
      </motion.h1>
    </div>
  );
};

export default RaiseYourHandAISlide;
