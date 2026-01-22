import { motion } from "framer-motion";
import pieterLevels from "@/assets/pieter-levels.jpeg";
import johnRush from "@/assets/john-rush.jpeg";
import marcLou from "@/assets/marc-lou.jpg";

interface FounderCardProps {
  image: string;
  name: string;
  arr: string;
  people: string;
  businesses: string;
  delay: number;
}

const FounderCard = ({ image, name, arr, people, businesses, delay }: FounderCardProps) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/30">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
    <p className="text-xl text-primary font-semibold">{arr}</p>
    <p className="text-lg text-muted-foreground">{people}</p>
    <p className="text-lg text-muted-foreground">{businesses}</p>
  </motion.div>
);

const SoloFoundersSlide = () => {
  const founders = [
    {
      image: pieterLevels,
      name: "Pieter Levels",
      arr: "$3M ARR",
      people: "1 person",
      businesses: "9 businesses",
    },
    {
      image: johnRush,
      name: "John Rush",
      arr: "$2M ARR",
      people: "1 person",
      businesses: "22 businesses",
    },
    {
      image: marcLou,
      name: "Marc Lou",
      arr: "$1.2M ARR",
      people: "1 person",
      businesses: "6 businesses",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slide-bg p-12 pb-20">
      <div className="flex justify-center items-start gap-16">
        {founders.map((founder, index) => (
          <FounderCard
            key={founder.name}
            {...founder}
            delay={0.2 + index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default SoloFoundersSlide;
