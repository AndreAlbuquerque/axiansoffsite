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
import ConstructionSlide from "./slides/ConstructionSlide";
import LinkedInPostSlide from "./slides/LinkedInPostSlide";
import HugeProjectsSlide from "./slides/HugeProjectsSlide";
import BuiltDifferentlySlide from "./slides/BuiltDifferentlySlide";
import SkillsGridSlide from "./slides/SkillsGridSlide";
import RaiseYourHandSlide from "./slides/RaiseYourHandSlide";
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
import AnthropicVideoSlide from "./slides/AnthropicVideoSlide";
import ClaudeCodeSlide from "./slides/ClaudeCodeSlide";
import LayerArchitectureSlide from "./slides/LayerArchitectureSlide";
import OrchestratorAgentSlide from "./slides/OrchestratorAgentSlide";
import AIAgentEcosystemSlide from "./slides/AIAgentEcosystemSlide";
import ConnectedTeamsSlide from "./slides/ConnectedTeamsSlide";
import AgentQuestionsSlide from "./slides/AgentQuestionsSlide";
import HumanControlSlide from "./slides/HumanControlSlide";
import EditorCuratorSlide from "./slides/EditorCuratorSlide";
import LLMAdoptionSlide from "./slides/LLMAdoptionSlide";
import AgenticOpportunitiesSlide from "./slides/AgenticOpportunitiesSlide";
import ChoicesSlide from "./slides/ChoicesSlide";
import CodeWindowSlide from "./slides/CodeWindowSlide";
import ThankYouSlide from "./slides/ThankYouSlide";

const slides = [
  {
    id: 1,
    content: <TitleSlide />,
  },
  {
    id: 2,
    content: <AboutMeSlide />,
  },
  {
    id: 3,
    content: <ArrGrowthSlide />,
  },
  {
    id: 3,
    content: <AiNativeSlide />,
  },
  {
    id: 4,
    content: <UserGrowthSlide />,
  },
  {
    id: 5,
    content: <AiVsSaasSlide />,
  },
  {
    id: 6,
    content: <SoloFounderSlide />,
  },
  {
    id: 7,
    content: <LinkedInPostSlide />,
  },
  {
    id: 8,
    content: <ConstructionSlide />,
  },
  {
    id: 9,
    content: <HugeProjectsSlide />,
  },
  {
    id: 10,
    content: <BuiltDifferentlySlide />,
  },
  {
    id: 11,
    content: <SkillsGridSlide />,
  },
  {
    id: 12,
    content: <RaiseYourHandSlide />,
  },
  {
    id: 13,
    content: <MapsComparisonSlide />,
  },
  {
    id: 14,
    content: <SolarSystemSlide />,
  },
  {
    id: 15,
    content: <AgenticMindsetSlide />,
  },
  {
    id: 16,
    content: <TeamRealitySlide />,
  },
  {
    id: 17,
    content: <AutonomousTruckSlide />,
  },
  {
    id: 18,
    content: <VideoClipSlide />,
  },
  {
    id: 19,
    content: <FactoryRobotsSlide />,
  },
  {
    id: 20,
    content: <CapacityBlocksSlide />,
  },
  {
    id: 21,
    content: <AiBlocksSlide />,
  },
  {
    id: 22,
    content: <OrchestratorSlide />,
  },
  {
    id: 23,
    content: <InfiniteThroughputTitleSlide />,
  },
  {
    id: 24,
    content: <InfiniteThroughputSlide />,
  },
  {
    id: 25,
    content: <ConstraintShiftSlide />,
  },
  {
    id: 26,
    content: <DependencyTimelineSlide />,
  },
  {
    id: 27,
    content: <AiFilledTimelineSlide />,
  },
  {
    id: 28,
    content: <Level1TitleSlide />,
  },
  {
    id: 29,
    content: <AiLevelsSlide />,
  },
  {
    id: 30,
    content: <AnthropicVideoSlide />,
  },
  {
    id: 31,
    content: <ClaudeCodeSlide />,
  },
  {
    id: 32,
    content: <LayerArchitectureSlide />,
  },
  {
    id: 33,
    content: <OrchestratorAgentSlide />,
  },
  {
    id: 34,
    content: <AIAgentEcosystemSlide />,
  },
  {
    id: 35,
    content: <ConnectedTeamsSlide />,
  },
  {
    id: 36,
    content: <AgentQuestionsSlide />,
  },
  {
    id: 37,
    content: <HumanControlSlide />,
  },
  {
    id: 38,
    content: <EditorCuratorSlide />,
  },
  {
    id: 39,
    content: <LLMAdoptionSlide />,
  },
  {
    id: 40,
    content: <AgenticOpportunitiesSlide />,
  },
  {
    id: 41,
    content: <ChoicesSlide />,
  },
  {
    id: 42,
    content: <CodeWindowSlide />,
  },
  {
    id: 43,
    content: <ThankYouSlide />,
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
