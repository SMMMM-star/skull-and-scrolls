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
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black via-pirate-brown-dark to-pirate-ocean-dark overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Enhanced background effects */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`bg-particle-${i}`}
          className={`absolute rounded-full ${
            i % 5 === 0 ? 'w-2 h-2 bg-pirate-gold' :
            i % 5 === 1 ? 'w-1 h-1 bg-pirate-parchment' :
            i % 5 === 2 ? 'w-1.5 h-1.5 bg-pirate-gold opacity-60' :
            i % 5 === 3 ? 'w-0.5 h-0.5 bg-white' :
            'w-3 h-3 bg-gradient-to-r from-pirate-gold to-pirate-gold-dark opacity-40'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 2, 0.5],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Multiple mystical energy rings */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute border border-pirate-gold/20 rounded-full"
          style={{
            width: `${150 + i * 80}px`,
            height: `${150 + i * 80}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Lightning bolts */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`lightning-${i}`}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(${45 + i * 90}deg, 
              transparent 40%, 
              rgba(255, 215, 0, 0.3) 50%, 
              transparent 60%)`
          }}
          animate={{
            opacity: [0, 0, 0.8, 0, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 12 + Math.random() * 8,
          }}
        />
      ))}

      {/* Floating mystical orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-8 h-8 rounded-full bg-pirate-gold/20 border border-pirate-gold/50 backdrop-blur-sm"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="text-center relative z-10">
        {/* Enhanced Skull Animation */}
        <motion.div
          className="relative mb-8 cursor-pointer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={onStartJourney}
        >
          <motion.img
            src={skullImage}
            alt="Pirate Skull"
            className="w-56 h-56 mx-auto filter relative z-20"
            animate={{
              rotateZ: isHovered ? [0, -10, 10, 0] : [0, -2, 2, 0],
              y: [-5, 5, -5],
              filter: isHovered 
                ? [
                    "drop-shadow(0 0 40px hsl(45, 65%, 55%)) brightness(1.3)",
                    "drop-shadow(0 0 80px hsl(45, 65%, 55%)) brightness(1.5)", 
                    "drop-shadow(0 0 40px hsl(45, 65%, 55%)) brightness(1.3)"
                  ]
                : [
                    "drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))",
                    "drop-shadow(0 0 40px rgba(255, 215, 0, 0.8))",
                    "drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))"
                  ]
            }}
            transition={{ 
              duration: isHovered ? 0.8 : 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          {/* Multiple glowing rings around skull */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`skull-ring-${i}`}
              className="absolute inset-0 border border-pirate-gold rounded-full"
              style={{ 
                transform: `scale(${1 + i * 0.3})`,
                opacity: 0.4 - i * 0.06
              }}
              animate={{ 
                scale: [1 + i * 0.3, 1.8 + i * 0.3, 1 + i * 0.3],
                opacity: [0.4 - i * 0.06, 0.8 - i * 0.1, 0.4 - i * 0.06],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 5 + i * 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
            />
          ))}

          {/* Energy bursts */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              className="absolute w-1 h-16 bg-gradient-to-t from-pirate-gold to-transparent origin-bottom"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 45}deg) translateY(-120px)`,
              }}
              animate={{
                scaleY: [0.5, 2, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Sparkling particles orbiting skull */}
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={`skull-particle-${i}`}
              className="absolute w-3 h-3 bg-pirate-gold rounded-full"
              style={{
                left: `${Math.cos((i * Math.PI * 2) / 16) * 120 + 110}px`,
                top: `${Math.sin((i * Math.PI * 2) / 16) * 120 + 110}px`,
              }}
              animate={{
                scale: [0.3, 1.5, 0.3],
                opacity: [0.4, 1, 0.4],
                rotate: [0, 360],
                x: [0, Math.cos((i * Math.PI * 2) / 16) * 20, 0],
                y: [0, Math.sin((i * Math.PI * 2) / 16) * 20, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Mystical aura */}
          <motion.div
            className="absolute inset-0 rounded-full bg-mystical-glow"
            animate={{
              scale: isHovered ? [1, 1.5, 1] : [1, 1.3, 1],
              opacity: isHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </motion.div>

        <motion.h1
          className="font-pirate text-7xl text-pirate-gold mb-6 animate-flicker relative"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 215, 0, 0.5)",
                "0 0 40px rgba(255, 215, 0, 0.8)",
                "0 0 20px rgba(255, 215, 0, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Captain's Portfolio
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="font-royal text-3xl text-pirate-parchment mb-8 relative"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.span
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Set Sail to My Portfolio
          </motion.span>
        </motion.p>

        <motion.div
          className="text-pirate-gold font-royal text-xl animate-pulse-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚔️ Click the skull to begin your adventure ⚔️
          </motion.span>
        </motion.div>

        {/* Enhanced floating treasure particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`treasure-${i}`}
            className="absolute text-2xl"
            style={{
              left: `${10 + i * 7}%`,
              top: `${20 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          >
            {i % 4 === 0 ? '💎' : i % 4 === 1 ? '⚡' : i % 4 === 2 ? '✨' : '🔱'}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OpeningScreen;