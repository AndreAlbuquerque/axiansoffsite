import { motion } from "framer-motion";
import logoOneMonth from "@/assets/logo-one-month.png";
import logoSuperOperator from "@/assets/logo-super-operator.png";
import logoBigProduct from "@/assets/logo-big-product.png";
import logoProducthon from "@/assets/logo-producthon.png";
import logoKitch from "@/assets/logo-kitch.png";
import logoUniplaces from "@/assets/logo-uniplaces.png";
import logoGoogle from "@/assets/logo-google.png";

const AboutMeSlide = () => {
  const currentLogos = [
    { src: logoOneMonth, alt: "One Month PM" },
    { src: logoSuperOperator, alt: "Super Operator" },
    { src: logoBigProduct, alt: "The Big Product Company" },
    { src: logoProducthon, alt: "Producthon" },
  ];

  const previousLogos = [
    { src: logoKitch, alt: "Kitch", className: "h-14 mix-blend-lighten" },
    { src: logoUniplaces, alt: "Uniplaces", className: "h-10" },
    { src: logoGoogle, alt: "Google", className: "h-6" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1
        className="slide-heading-lg text-foreground mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Who am I?
      </motion.h1>

      {/* Current Logos Row */}
      <motion.div
        className="flex items-center justify-center gap-12 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {currentLogos.map((logo, index) => (
          <motion.img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          />
        ))}
      </motion.div>

      {/* Previously Label */}
      <motion.p
        className="text-muted-foreground text-lg mb-8 uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        Previously
      </motion.p>

      {/* Previous Logos Row */}
      <motion.div
        className="flex items-center justify-center gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        {previousLogos.map((logo, index) => (
          <motion.img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`w-auto object-contain opacity-70 ${logo.className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMeSlide;
