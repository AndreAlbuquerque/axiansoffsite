import { motion } from "framer-motion";

const AnthropicVideoSlide = () => {
  // Video: K27diMbCsuw, start at 1:33 (93s), end at 2:10 (130s)
  const videoId = "K27diMbCsuw";
  const startTime = 93;
  const endTime = 130;

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Anthropic's Vision
      </motion.h1>

      {/* Video embed */}
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}&autoplay=1&mute=1&controls=1&rel=0`}
            title="Anthropic Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AnthropicVideoSlide;