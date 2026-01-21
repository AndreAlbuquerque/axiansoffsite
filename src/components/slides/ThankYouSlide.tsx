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

      <motion.div
        className="mt-16 flex gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-2xl">💬</span>
          </div>
          <span className="text-muted-foreground text-sm">Q&A</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl">🔗</span>
          </div>
          <span className="text-muted-foreground text-sm">Connect</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-2xl">📧</span>
          </div>
          <span className="text-muted-foreground text-sm">Email</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouSlide;
