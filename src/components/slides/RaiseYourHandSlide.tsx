import { motion } from "framer-motion";

const statements = [
  "I can't deliver most roadmaps, it's too much stuff",
  "I could do stuff with much more quality, but I don't have the time",
  "I have ideas that could be amazing to try, but there's no space in the backlog",
  "I'm always running, barely have time to think",
];

const RaiseYourHandSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slide-bg p-12 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-muted/20" />
      <div className="absolute bottom-10 right-40 w-40 h-40 rounded-full bg-muted/10" />

      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-12 text-center max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Raise your hand ✋ if you ever thought this
      </motion.h1>

      {/* Statements */}
      <div className="max-w-3xl w-full space-y-6">
        {statements.map((statement, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
          >
            <span className="text-muted-foreground font-medium text-lg">{index + 1}.</span>
            <p className="text-foreground text-xl italic">"{statement}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RaiseYourHandSlide;
