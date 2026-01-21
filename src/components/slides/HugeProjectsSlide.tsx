import { motion } from "framer-motion";

const projects = [
  { name: "EIFFEL TOWER", year: "1889", days: 793, barWidth: "85%" },
  { name: "EMPIRE STATE", year: "1931", days: 410, barWidth: "55%" },
  { name: "DISNEYLAND", year: "1955", days: 366, barWidth: "48%" },
  { name: "IPOD", year: "2001", days: 290, barWidth: "40%" },
  { name: "AMAZON PRIME", year: "2005", days: 42, barWidth: "15%" },
];

const ZigzagBar = ({ width }: { width: string }) => (
  <div className="relative h-8" style={{ width }}>
    <svg className="w-full h-full" viewBox="0 0 400 32" preserveAspectRatio="none">
      <path
        d="M0,16 L10,6 L20,26 L30,6 L40,26 L50,6 L60,26 L70,6 L80,26 L90,6 L100,26 L110,6 L120,26 L130,6 L140,26 L150,6 L160,26 L170,6 L180,26 L190,6 L200,26 L210,6 L220,26 L230,6 L240,26 L250,6 L260,26 L270,6 L280,26 L290,6 L300,26 L310,6 L320,26 L330,6 L340,26 L350,6 L360,26 L370,6 L380,26 L390,6 L400,16"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const EiffelTowerIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M32 4 L28 20 L24 40 L20 60 L44 60 L40 40 L36 20 L32 4Z" />
    <path d="M24 20 L40 20" />
    <path d="M22 35 L42 35" />
    <path d="M20 50 L44 50" />
    <path d="M28 60 L28 64" />
    <path d="M36 60 L36 64" />
  </svg>
);

const EmpireStateIcon = () => (
  <svg viewBox="0 0 48 80" className="w-8 h-12" fill="none" stroke="white" strokeWidth="1.5">
    <rect x="12" y="25" width="24" height="55" fill="#6b7280" stroke="white" />
    <rect x="16" y="15" width="16" height="10" fill="#6b7280" stroke="white" />
    <rect x="20" y="8" width="8" height="7" fill="#6b7280" stroke="white" />
    <line x1="24" y1="0" x2="24" y2="8" stroke="white" strokeWidth="2" />
    <line x1="15" y1="30" x2="15" y2="75" stroke="white" strokeWidth="0.5" />
    <line x1="20" y1="30" x2="20" y2="75" stroke="white" strokeWidth="0.5" />
    <line x1="28" y1="30" x2="28" y2="75" stroke="white" strokeWidth="0.5" />
    <line x1="33" y1="30" x2="33" y2="75" stroke="white" strokeWidth="0.5" />
  </svg>
);

const DisneylandIcon = () => (
  <div className="text-4xl">🏰</div>
);

const IPodIcon = () => (
  <div className="w-8 h-12 bg-gray-700 rounded-lg flex flex-col items-center justify-center border-2 border-gray-500">
    <div className="w-5 h-3 bg-gray-900 rounded-sm mb-1" />
    <div className="w-4 h-4 rounded-full border-2 border-gray-500" />
  </div>
);

const AmazonPrimeIcon = () => (
  <div className="flex items-center gap-1">
    <svg viewBox="0 0 100 40" className="w-12 h-6">
      <path
        d="M10,25 Q30,35 50,25"
        fill="none"
        stroke="#ff9900"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50,22 L55,27 L50,25"
        fill="#ff9900"
      />
    </svg>
    <span className="text-white font-bold text-sm">prime</span>
  </div>
);

const ProjectIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "EIFFEL TOWER":
      return <EiffelTowerIcon />;
    case "EMPIRE STATE":
      return <EmpireStateIcon />;
    case "DISNEYLAND":
      return <DisneylandIcon />;
    case "IPOD":
      return <IPodIcon />;
    case "AMAZON PRIME":
      return <AmazonPrimeIcon />;
    default:
      return null;
  }
};

const HugeProjectsSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title - Handwritten style */}
      <motion.h1 
        className="text-4xl md:text-5xl text-foreground mb-12 text-center"
        style={{ fontFamily: "'Comic Sans MS', 'Marker Felt', cursive" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Every "HUGE" project delivered in aggressive timelines
      </motion.h1>

      {/* Projects List */}
      <div className="flex-1 flex flex-col justify-center gap-6 max-w-5xl mx-auto w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            {/* Label */}
            <div className="w-40 text-right">
              <p className="text-foreground font-semibold text-sm tracking-wider">{project.name}</p>
              <p className="text-muted-foreground text-xs">{project.year}</p>
            </div>

            {/* Zigzag Bar */}
            <div className="flex-1 flex items-center gap-3">
              <ZigzagBar width={project.barWidth} />
              
              {/* Icon */}
              <div className="flex-shrink-0">
                <ProjectIcon name={project.name} />
              </div>

              {/* Days */}
              <span 
                className="text-foreground font-bold text-xl whitespace-nowrap"
                style={{ fontFamily: "'Comic Sans MS', 'Marker Felt', cursive" }}
              >
                {project.days} Days
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HugeProjectsSlide;
