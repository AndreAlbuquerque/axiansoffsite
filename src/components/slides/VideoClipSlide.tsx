import { motion } from "framer-motion";

const VideoClipSlide = () => {
  // Start at 28:00 (1680 seconds), end at 28:20 (1700 seconds)
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Learning from the Best
      </motion.h1>

      {/* Video */}
      <motion.div
        className="flex-1 flex items-center justify-center min-h-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/b3c4a1xxV88?autoplay=1&mute=1&start=1680&end=1700&controls=1"
            title="Video clip"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoClipSlide;
