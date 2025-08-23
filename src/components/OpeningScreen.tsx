import { motion } from "framer-motion";
import { useState } from "react";
import skullImage from "@/assets/skull-crossbones.png";

interface OpeningScreenProps {
  onStartJourney: () => void;
}

const OpeningScreen = ({ onStartJourney }: OpeningScreenProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black via-pirate-brown-dark to-pirate-ocean-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={onStartJourney}
        >
          <motion.img
            src={skullImage}
            alt="Pirate Skull"
            className="w-48 h-48 mx-auto filter drop-shadow-2xl"
            animate={{
              rotateZ: isHovered ? [0, -5, 5, 0] : 0,
              filter: isHovered 
                ? "drop-shadow(0 0 30px hsl(45, 65%, 55%)) brightness(1.2)" 
                : "drop-shadow(0 0 10px rgba(0,0,0,0.8))"
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Mystical glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-pirate-gold opacity-20"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.2, 0.4, 0.2] : 0.2
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
        </motion.div>

        <motion.h1
          className="font-pirate text-6xl text-pirate-gold mb-4 animate-flicker"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Captain's Portfolio
        </motion.h1>
        
        <motion.p
          className="font-royal text-2xl text-pirate-parchment mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Set Sail to My Portfolio
        </motion.p>

        <motion.div
          className="text-pirate-gold font-royal text-lg animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          ⚔️ Click the skull to begin your adventure ⚔️
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pirate-gold rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OpeningScreen;