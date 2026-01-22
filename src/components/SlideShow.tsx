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
import AiVsSaasSlide from "./slides/AiVsSaasSlide";
import SoloFounderSlide from "./slides/SoloFounderSlide";
import SoloFoundersSlide from "./slides/SoloFoundersSlide";
import ReplitGrowthSlide from "./slides/ReplitGrowthSlide";
import ConstructionSlide from "./slides/ConstructionSlide";
import LinkedInPostSlide from "./slides/LinkedInPostSlide";
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
import ConstraintShiftSlide from "./slides/ConstraintShiftSlide";
import DependencyTimelineSlide from "./slides/DependencyTimelineSlide";
import AiFilledTimelineSlide from "./slides/AiFilledTimelineSlide";
import Level1TitleSlide from "./slides/Level1TitleSlide";
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
import LLMAdoptionSlide from "./slides/LLMAdoptionSlide";
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
  { id: 6, content: <AiVsSaasSlide /> },
  { id: 7, content: <ReplitGrowthSlide /> },
  { id: 8, content: <LinkedInPostSlide /> },
  { id: 9, content: <ConstructionSlide /> },
  { id: 10, content: <HugeProjectsSlide /> },
  { id: 11, content: <SoloFoundersSlide /> },
  { id: 12, content: <SoloFounderSlide /> },
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
  { id: 28, content: <ConstraintShiftSlide /> },
  { id: 29, content: <DependencyTimelineSlide /> },
  { id: 30, content: <AiFilledTimelineSlide /> },
  { id: 31, content: <Level1TitleSlide /> },
  { id: 32, content: <AiLevelsSlide /> },
  { id: 33, content: <Level7LooksLikeSlide /> },
  { id: 34, content: <OrchestratorAgentSlide /> },
  { id: 35, content: <AIAgentEcosystemSlide /> },
  { id: 36, content: <AnthropicVideoSlide /> },
  { id: 37, content: <ClaudeCodeSlide /> },
  { id: 38, content: <HumanDoingSlide /> },
  { id: 39, content: <FactoryRobotsSlide /> },
  { id: 40, content: <LayerArchitectureSlide /> },
  { id: 41, content: <ConnectedTeamsSlide /> },
  { id: 42, content: <AgentQuestionsSlide /> },
  { id: 43, content: <HumanControlSlide /> },
  { id: 44, content: <EditorCuratorSlide /> },
  { id: 45, content: <TransformationTitleSlide /> },
  { id: 46, content: <LLMAdoptionSlide /> },
  { id: 47, content: <AgenticOpportunitiesSlide /> },
  { id: 48, content: <ChoicesSlide /> },
  { id: 49, content: <CodeWindowSlide /> },
  { id: 50, content: <ThankYouSlide /> },
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
