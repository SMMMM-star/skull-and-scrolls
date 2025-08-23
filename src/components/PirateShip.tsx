import { motion } from "framer-motion";
import shipImage from "@/assets/pirate-ship.png";

interface PirateShipProps {
  currentSection: number;
  totalSections: number;
}

const PirateShip = ({ currentSection, totalSections }: PirateShipProps) => {
  const progressPercentage = (currentSection / (totalSections - 1)) * 100;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-40 pointer-events-none">
      <div className="relative w-full h-24">
        {/* Ocean waves */}
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-pirate-ocean to-pirate-ocean-dark opacity-60 animate-wave" />
        
        {/* Ship */}
        <motion.div
          className="absolute bottom-8 w-20 h-16"
          animate={{
            left: `${progressPercentage}%`,
            x: "-50%"
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <motion.img
            src={shipImage}
            alt="Pirate Ship"
            className="w-full h-full object-contain filter drop-shadow-lg"
            animate={{
              y: [-2, 2, -2],
              rotateZ: [-1, 1, -1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Ship wake */}
          <motion.div
            className="absolute -left-8 top-1/2 w-16 h-1 bg-white opacity-30 rounded-full"
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Progress islands */}
        <div className="absolute bottom-0 w-full flex justify-between px-10">
          {Array.from({ length: totalSections }, (_, i) => (
            <motion.div
              key={i}
              className={`w-6 h-6 rounded-full border-2 ${
                i <= currentSection 
                  ? 'bg-pirate-gold border-pirate-gold shadow-treasure' 
                  : 'bg-pirate-brown border-pirate-gold'
              }`}
              animate={{
                scale: i === currentSection ? [1, 1.2, 1] : 1,
                boxShadow: i === currentSection 
                  ? ["0 0 10px hsl(45, 65%, 55%)", "0 0 20px hsl(45, 65%, 55%)", "0 0 10px hsl(45, 65%, 55%)"]
                  : "0 0 5px rgba(0,0,0,0.3)"
              }}
              transition={{
                duration: 2,
                repeat: i === currentSection ? Infinity : 0
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PirateShip;