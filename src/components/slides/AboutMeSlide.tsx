import { motion } from "framer-motion";
import profileImage from "@/assets/andre-profile.png";

const AboutMeSlide = () => {
  const companies = [
    { name: "ONE MONTH PRODUCT", style: "font-bold text-2xl tracking-tight", hasArrow: true },
    { name: "SUPER OPERATOR", style: "font-bold text-xl tracking-widest border-t-2 border-b-2 border-white py-1", hasArrow: true },
    { name: "PRODUCTHON", style: "font-bold text-2xl tracking-[0.3em] font-mono", highlight: true },
    { name: "KITCH", style: "font-bold text-3xl bg-[#ff1493] px-3 py-1 inline-block", isPink: true },
    { name: "uniplaces", style: "text-2xl font-light tracking-wide" },
    { name: "Google", style: "text-3xl font-medium" },
  ];

  return (
    <div className="w-full h-full flex bg-slide-bg">
      {/* Left side - Companies */}
      <div className="flex-1 flex flex-col justify-center pl-16 pr-8 relative">
        <div className="space-y-4">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            >
              {company.isPink ? (
                <span className={`text-white ${company.style}`}>
                  {company.name}
                </span>
              ) : company.name === "uniplaces" ? (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-slide-bg" />
                  </div>
                  <span className={`text-foreground ${company.style}`}>{company.name}</span>
                </div>
              ) : (
                <span className={`text-foreground ${company.style} ${company.highlight ? 'opacity-80' : ''}`}>
                  {company.name}
                </span>
              )}
              
              {company.hasArrow && (
                <svg 
                  viewBox="0 0 60 30" 
                  className="w-16 h-8 text-white ml-2"
                  style={{ transform: 'rotate(-15deg)' }}
                >
                  <path 
                    d="M5 25 Q 30 5, 55 10" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M50 5 L55 10 L48 12" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* The Very Big Product Company badge */}
        <motion.div
          className="absolute top-1/4 right-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <div className="bg-white text-black px-4 py-3 rounded-lg text-center transform rotate-3">
            <p className="text-xs uppercase tracking-wider">The Very</p>
            <p className="text-2xl font-black">BIG</p>
            <p className="text-xs uppercase tracking-wide">Product</p>
            <p className="text-xs uppercase tracking-wide">Company</p>
          </div>
        </motion.div>
      </div>

      {/* Right side - Photo */}
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img 
          src={profileImage} 
          alt="André Albuquerque" 
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default AboutMeSlide;
