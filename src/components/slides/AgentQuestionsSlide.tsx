import { motion } from "framer-motion";
import { Play, Clock, TrendingUp, AlertTriangle, Database, FileEdit, Users } from "lucide-react";

const questions = [
  { icon: Play, text: "What tasks are they running?" },
  { icon: Clock, text: "How long do they take?" },
  { icon: TrendingUp, text: "How often do they succeed or get escalated to a human?" },
  { icon: AlertTriangle, text: "Where are they getting stuck?" },
  { icon: Database, text: "Which data did they access?" },
  { icon: FileEdit, text: "What changes to what systems happened?" },
  { icon: Users, text: "Who approved this action?" },
];

const AgentQuestionsSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12 pb-20">
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Key Questions for Agent Observability
      </motion.h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 max-w-4xl w-full">
          {questions.map((q, index) => {
            const Icon = q.icon;
            return (
              <motion.div
                key={index}
                className={`flex items-center gap-4 px-5 py-4 rounded-lg border-2 border-sky-500/40 bg-sky-500/10 ${index === 6 ? 'col-span-2 max-w-[60%] mx-auto' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
              >
                <Icon className="w-6 h-6 text-sky-500 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-foreground text-base">{q.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgentQuestionsSlide;
