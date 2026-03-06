import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Slide from "./Slide";
import ProgressDots from "./ProgressDots";
import logo from "@/assets/logo.png";
import TitleSlide from "./slides/TitleSlide";
import AboutMeSlide from "./slides/AboutMeSlide";
import ArrGrowthSlide from "./slides/ArrGrowthSlide";
import AiNativeSlide from "./slides/AiNativeSlide";
import UserGrowthSlide from "./slides/UserGrowthSlide";
import SoloFounderSlide from "./slides/SoloFounderSlide";
import SoloFoundersSlide from "./slides/SoloFoundersSlide";
import ReplitGrowthSlide from "./slides/ReplitGrowthSlide";
import ConstructionSlide from "./slides/ConstructionSlide";
import HugeProjectsSlide from "./slides/HugeProjectsSlide";
import BuiltDifferentlySlide from "./slides/BuiltDifferentlySlide";
import SkillsGridSlide from "./slides/SkillsGridSlide";
import RaiseYourHandSlide from "./slides/RaiseYourHandSlide";
import RaiseYourHandAISlide from "./slides/RaiseYourHandAISlide";
import MapsComparisonSlide from "./slides/MapsComparisonSlide";
import SolarSystemSlide from "./slides/SolarSystemSlide";
import AgenticMindsetSlide from "./slides/AgenticMindsetSlide";
import TeamRealitySlide from "./slides/TeamRealitySlide";
import AutonomousTruckSlide from "./slides/AutonomousTruckSlide";
import VideoClipSlide from "./slides/VideoClipSlide";
import FactoryRobotsSlide from "./slides/FactoryRobotsSlide";
import CapacityBlocksSlide from "./slides/CapacityBlocksSlide";
import AiBlocksSlide from "./slides/AiBlocksSlide";
import OrchestratorSlide from "./slides/OrchestratorSlide";
import InfiniteThroughputTitleSlide from "./slides/InfiniteThroughputTitleSlide";
import InfiniteThroughputSlide from "./slides/InfiniteThroughputSlide";
import BidIntelligenceSlide from "./slides/BidIntelligenceSlide";
import ContractRiskSlide from "./slides/ContractRiskSlide";
import RegulatoryDriftSlide from "./slides/RegulatoryDriftSlide";
import AIProblemsSlide from "./slides/AIProblemsSlide";
import ConstraintShiftSlide from "./slides/ConstraintShiftSlide";
import DependencyTimelineSlide from "./slides/DependencyTimelineSlide";
import AiFilledTimelineSlide from "./slides/AiFilledTimelineSlide";

import AiLevelsSlide from "./slides/AiLevelsSlide";
import Level7LooksLikeSlide from "./slides/Level7LooksLikeSlide";
import AnthropicVideoSlide from "./slides/AnthropicVideoSlide";
import ClaudeCodeSlide from "./slides/ClaudeCodeSlide";
import LayerArchitectureSlide from "./slides/LayerArchitectureSlide";
import OrchestratorAgentSlide from "./slides/OrchestratorAgentSlide";
import AIAgentEcosystemSlide from "./slides/AIAgentEcosystemSlide";
import HumanDoingSlide from "./slides/HumanDoingSlide";
import ConnectedTeamsSlide from "./slides/ConnectedTeamsSlide";
import AgentQuestionsSlide from "./slides/AgentQuestionsSlide";
import HumanControlSlide from "./slides/HumanControlSlide";
import EditorCuratorSlide from "./slides/EditorCuratorSlide";

import AgenticOpportunitiesSlide from "./slides/AgenticOpportunitiesSlide";
import ChoicesSlide from "./slides/ChoicesSlide";
import CodeWindowSlide from "./slides/CodeWindowSlide";
import ThankYouSlide from "./slides/ThankYouSlide";
import TransformationTitleSlide from "./slides/TransformationTitleSlide";

const slides = [
  { id: 1, content: <TitleSlide /> },
  { id: 2, content: <AboutMeSlide /> },
  { id: 3, content: <ArrGrowthSlide /> },
  { id: 4, content: <AiNativeSlide /> },
  { id: 5, content: <UserGrowthSlide /> },
  { id: 6, content: <ReplitGrowthSlide /> },
  { id: 9, content: <ConstructionSlide /> },
  { id: 10, content: <HugeProjectsSlide /> },
  { id: 11, content: <SoloFoundersSlide /> },
  
  { id: 13, content: <BuiltDifferentlySlide /> },
  { id: 14, content: <SkillsGridSlide /> },
  { id: 15, content: <RaiseYourHandSlide /> },
  { id: 16, content: <RaiseYourHandAISlide /> },
  { id: 17, content: <MapsComparisonSlide /> },
  { id: 18, content: <SolarSystemSlide /> },
  { id: 19, content: <AgenticMindsetSlide /> },
  { id: 20, content: <TeamRealitySlide /> },
  { id: 21, content: <AutonomousTruckSlide /> },
  { id: 22, content: <VideoClipSlide /> },
  { id: 23, content: <CapacityBlocksSlide /> },
  { id: 24, content: <AiBlocksSlide /> },
  { id: 25, content: <OrchestratorSlide /> },
  { id: 26, content: <InfiniteThroughputTitleSlide /> },
  { id: 27, content: <InfiniteThroughputSlide /> },
  { id: 271, content: <BidIntelligenceSlide /> },
  { id: 28, content: <AIProblemsSlide /> },
  { id: 29, content: <ConstraintShiftSlide /> },
  { id: 30, content: <DependencyTimelineSlide /> },
  { id: 31, content: <AiFilledTimelineSlide /> },
  
  { id: 33, content: <AiLevelsSlide /> },
  { id: 34, content: <Level7LooksLikeSlide /> },
  { id: 35, content: <OrchestratorAgentSlide /> },
  { id: 36, content: <AIAgentEcosystemSlide /> },
  { id: 37, content: <AnthropicVideoSlide /> },
  { id: 38, content: <ClaudeCodeSlide /> },
  { id: 39, content: <HumanDoingSlide /> },
  { id: 40, content: <FactoryRobotsSlide /> },
  { id: 41, content: <LayerArchitectureSlide /> },
  { id: 42, content: <ConnectedTeamsSlide /> },
  { id: 43, content: <AgentQuestionsSlide /> },
  { id: 44, content: <HumanControlSlide /> },
  { id: 45, content: <EditorCuratorSlide /> },
  { id: 46, content: <TransformationTitleSlide /> },
  
  { id: 48, content: <AgenticOpportunitiesSlide /> },
  { id: 49, content: <ChoicesSlide /> },
  { id: 50, content: <CodeWindowSlide /> },
  { id: 51, content: <ThankYouSlide /> },
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

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
    <div 
      className="relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Persistent Header with logo and navigation hint */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 pb-2 bg-slide-bg">
        <img src={logo} alt="Logo" className="h-8 object-contain" />
        <span className="text-muted-foreground text-xs opacity-50 mt-1">
          Press ← → to navigate
        </span>
      </div>

      <AnimatePresence mode="wait">
        <Slide key={currentSlide}>
          {slides[currentSlide].content}
        </Slide>
      </AnimatePresence>
      
      <ProgressDots total={slides.length} current={currentSlide} />
    </div>
  );
};

export default SlideShow;
