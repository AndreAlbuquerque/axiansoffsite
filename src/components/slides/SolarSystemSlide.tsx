import { motion } from "framer-motion";

const planets = [
  { name: "Mercury", orbit: 40, size: 6, duration: 8, hasRings: false },
  { name: "Venus", orbit: 60, size: 8, duration: 12, hasRings: false },
  { name: "Earth", orbit: 80, size: 10, duration: 16, hasRings: false },
  { name: "Mars", orbit: 105, size: 7, duration: 20, hasRings: false },
  { name: "Jupiter", orbit: 135, size: 18, duration: 28, hasRings: false },
  { name: "Saturn", orbit: 170, size: 16, duration: 36, hasRings: true },
  { name: "Uranus", orbit: 200, size: 12, duration: 44, hasRings: true },
  { name: "Neptune", orbit: 230, size: 11, duration: 52, hasRings: false },
];

const WireframeSphere = ({ size, hasRings }: { size: number; hasRings?: boolean }) => (
  <div className="relative" style={{ width: size, height: size }}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" />
      <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="white" strokeWidth="0.8" opacity="0.5" />
    </svg>
    {hasRings && (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: size * 1.8, height: size * 0.5 }}>
        <svg viewBox="0 0 100 30" className="w-full h-full">
          <ellipse cx="50" cy="15" rx="48" ry="12" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
        </svg>
      </div>
    )}
  </div>
);

const SolarSystemSlide = () => {
  return (
    <div className="w-full h-full flex flex-col bg-slide-bg p-12">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Every person needs their own solar system
      </motion.h1>

      {/* Solar System */}
      <motion.div 
        className="flex-1 flex items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="relative" style={{ width: 500, height: 500 }}>
          {/* Orbits */}
          {planets.map((planet) => (
            <div
              key={`orbit-${planet.name}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
              style={{
                width: planet.orbit * 2,
                height: planet.orbit * 2,
              }}
            />
          ))}

          {/* Sun */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <WireframeSphere size={35} />
          </div>

          {/* Planets */}
          {planets.map((planet) => (
            <div
              key={planet.name}
              className="absolute top-1/2 left-1/2"
              style={{
                width: planet.orbit * 2,
                height: planet.orbit * 2,
                marginLeft: -planet.orbit,
                marginTop: -planet.orbit,
                animation: `spin ${planet.duration}s linear infinite`,
              }}
            >
              <div
                className="absolute"
                style={{
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <WireframeSphere size={planet.size} hasRings={planet.hasRings} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SolarSystemSlide;
