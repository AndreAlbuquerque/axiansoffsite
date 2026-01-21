import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Slide from "./Slide";
import ProgressDots from "./ProgressDots";

const slides = [
  {
    id: 1,
    content: (
      <>
        <h1 className="slide-heading-xl text-foreground mb-6">
          Welcome to Slides
        </h1>
        <p className="slide-body-lg text-muted-foreground max-w-2xl mx-auto">
          A minimal presentation app with smooth transitions. 
          Use arrow keys to navigate.
        </p>
      </>
    ),
  },
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          event.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          prevSlide();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <Slide key={currentSlide}>
          {slides[currentSlide].content}
        </Slide>
      </AnimatePresence>
      
      <ProgressDots total={slides.length} current={currentSlide} />
      
      {/* Navigation hint */}
      <div className="fixed bottom-8 right-8 text-muted-foreground text-sm opacity-50">
        Press ← → to navigate
      </div>
    </div>
  );
};

export default SlideShow;
