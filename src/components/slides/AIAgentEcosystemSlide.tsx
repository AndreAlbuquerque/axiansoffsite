import { motion } from "framer-motion";
import { Database, BarChart3, MessageSquare, Search, Mail, Share2, Activity, GitBranch, Brain } from "lucide-react";

interface SystemBoxProps {
  title: string;
  items?: string[];
  icons?: React.ReactNode[];
  delay: number;
  position: { x: number; y: number };
}

const SystemBox = ({ title, items, icons, delay, position }: SystemBoxProps) => (
  <motion.div
    className="absolute bg-white border-2 border-gray-800 rounded-lg p-3 shadow-md"
    style={{ left: position.x, top: position.y }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
  >
    <p className="font-bold text-gray-800 text-sm mb-2">{title}</p>
    {items && (
      <div className="flex flex-wrap gap-1">
        {items.map((item, i) => (
          <span key={i} className="bg-gray-100 border border-gray-300 px-2 py-1 text-xs rounded">
            {item}
          </span>
        ))}
      </div>
    )}
    {icons && (
      <div className="flex gap-2 mt-2">
        {icons}
      </div>
    )}
  </motion.div>
);

const AIAgentEcosystemSlide = () => {
  const centerX = 400;
  const centerY = 225;

  // Calculate arrow endpoints
  const arrows = [
    { angle: -90, length: 80 },   // Top - Tools
    { angle: -45, length: 100 },  // Top Right - Observability
    { angle: 0, length: 120 },    // Right - Internal Knowledge
    { angle: 45, length: 100 },   // Bottom Right - External Knowledge
    { angle: 90, length: 80 },    // Bottom - LLM Layer
    { angle: 135, length: 100 },  // Bottom Left - Analytics
    { angle: 180, length: 120 },  // Left - User
  ];

  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The AI Agent Ecosystem
      </motion.h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[500px]">
          {/* Central AI Agent */}
          <motion.div
            className="absolute bg-blue-200 border-2 border-blue-400 rounded-xl px-8 py-4 shadow-lg"
            style={{ left: centerX - 60, top: centerY - 20 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-gray-800 font-bold text-lg">AI Agent</span>
          </motion.div>

          {/* User / User Interface */}
          <SystemBox
            title="User"
            items={["User Interface", "Feedback Loop"]}
            delay={0.4}
            position={{ x: 20, y: 80 }}
          />

          {/* Tools */}
          <SystemBox
            title="Tools"
            items={["CRM", "Email", "Social", "External APIs"]}
            delay={0.5}
            position={{ x: 300, y: 20 }}
          />

          {/* Observability */}
          <SystemBox
            title="Observability"
            items={["Logging", "Tracing", "Monitoring"]}
            delay={0.6}
            position={{ x: 580, y: 40 }}
          />

          {/* Internal Knowledge Systems */}
          <motion.div
            className="absolute bg-white border-2 border-gray-800 rounded-lg p-3 shadow-md"
            style={{ left: 620, top: 180 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <p className="font-bold text-gray-800 text-sm mb-2">Internal Knowledge Systems</p>
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <GitBranch className="w-6 h-6 text-green-600" />
                <span className="text-xs text-gray-600">Graph</span>
              </div>
              <div className="flex flex-col items-center">
                <Database className="w-6 h-6 text-blue-600" />
                <span className="text-xs text-gray-600">Vector</span>
              </div>
              <div className="flex flex-col items-center">
                <Database className="w-6 h-6 text-gray-600" />
                <span className="text-xs text-gray-600">Relational</span>
              </div>
            </div>
          </motion.div>

          {/* External Knowledge Systems */}
          <motion.div
            className="absolute bg-white border-2 border-gray-800 rounded-lg p-3 shadow-md"
            style={{ left: 560, top: 340 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <p className="font-bold text-gray-800 text-sm mb-2">External Knowledge Systems</p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <Share2 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </motion.div>

          {/* LLM Layer */}
          <SystemBox
            title="LLM Layer"
            items={["GPT-4", "Whisper", "DALL-E", "Custom"]}
            delay={0.9}
            position={{ x: 300, y: 400 }}
          />

          {/* Analytics & BI */}
          <motion.div
            className="absolute bg-white border-2 border-gray-800 rounded-lg p-3 shadow-md"
            style={{ left: 20, top: 280 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          >
            <p className="font-bold text-gray-800 text-sm mb-2">Analytics & BI</p>
            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <BarChart3 className="w-5 h-5 text-orange-500" />
                <span className="text-xs text-gray-600">Analytics</span>
              </div>
              <div className="flex flex-col items-center">
                <Database className="w-5 h-5 text-blue-500" />
                <span className="text-xs text-gray-600">Storage</span>
              </div>
              <div className="flex flex-col items-center">
                <Activity className="w-5 h-5 text-purple-500" />
                <span className="text-xs text-gray-600">Warehouse</span>
              </div>
            </div>
          </motion.div>

          {/* Arrows SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
              </marker>
            </defs>
            {/* Arrow lines from center to each system */}
            <motion.line x1={centerX} y1={centerY - 30} x2={centerX} y2={80} stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
            <motion.line x1={centerX + 60} y1={centerY - 10} x2={600} y2={100} stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
            <motion.line x1={centerX + 70} y1={centerY + 10} x2={610} y2={200} stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
            <motion.line x1={centerX + 50} y1={centerY + 30} x2={560} y2={360} stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} />
            <motion.line x1={centerX} y1={centerY + 40} x2={centerX} y2={390} stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
            <motion.line x1={centerX - 70} y1={centerY + 20} x2={180} y2={300} stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
            <motion.line x1={centerX - 70} y1={centerY - 10} x2={180} y2={120} stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead2)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AIAgentEcosystemSlide;
