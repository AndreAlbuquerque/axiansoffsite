import { motion } from "framer-motion";

const codeSnippet = `// SlideShow.tsx - Built with Lovable
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, content: <WelcomeSlide /> },
  { id: 2, content: <ArrGrowthSlide /> },
  { id: 3, content: <AiNativeSlide /> },
  // ... 40+ slides created through conversation
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Slide key={currentSlide}>
        {slides[currentSlide].content}
      </Slide>
    </AnimatePresence>
  );
};`;

const CodeWindowSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-8 items-center justify-center pb-20">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-3 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        This presentation was built with code
      </motion.h1>
      
      <motion.p
        className="text-muted-foreground text-lg mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        By a non-tech, using AI — and the repo is available
      </motion.p>

      {/* Code Window */}
      <motion.div
        className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Window Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-sm ml-4 font-mono">SlideShow.tsx</span>
        </div>
        
        {/* Code Content */}
        <div className="bg-gray-900 p-4 overflow-x-auto max-h-[320px]">
          <pre className="text-xs font-mono leading-relaxed">
            <code>
              {codeSnippet.split('\n').map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.02, duration: 0.2 }}
                  className="flex"
                >
                  <span className="text-gray-500 w-6 flex-shrink-0 select-none">{i + 1}</span>
                  <span className={`${
                    line.includes('//') ? 'text-gray-500' :
                    line.includes('import') || line.includes('const') || line.includes('return') || line.includes('if') ? 'text-purple-400' :
                    line.includes('"') || line.includes("'") || line.includes('`') ? 'text-green-400' :
                    line.includes('<') && line.includes('>') ? 'text-blue-400' :
                    'text-gray-100'
                  }`}>
                    {line || ' '}
                  </span>
                </motion.div>
              ))}
            </code>
          </pre>
        </div>
      </motion.div>

      <motion.p
        className="text-muted-foreground text-sm mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        React • TypeScript • Framer Motion • Tailwind CSS
      </motion.p>
    </div>
  );
};

export default CodeWindowSlide;
