import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import OpeningScreen from "./OpeningScreen";
import PirateShip from "./PirateShip";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import oceanBackground from "@/assets/ocean-background.jpg";

const sections = [
  { id: 0, name: "About", icon: "🏴‍☠️", component: AboutSection },
  { id: 1, name: "Experience", icon: "⚔️", component: ExperienceSection },
  { id: 2, name: "Projects", icon: "🏝️", component: ProjectsSection },
  { id: 3, name: "Skills", icon: "📜", component: SkillsSection },
  { id: 4, name: "Contact", icon: "☠️", component: ContactSection },
];

const PiratePortfolio = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [backgroundMusicVolume, setBackgroundMusicVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);

  const handleStartJourney = () => {
    setShowOpening(false);
    // Start background music when journey begins
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.play().catch(console.error);
    }
  };

  useEffect(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = isMuted ? 0 : backgroundMusicVolume;
    }
  }, [backgroundMusicVolume, isMuted]);

  const toggleBackgroundMusic = () => {
    setIsMuted(!isMuted);
  };

  const navigateToSection = (sectionId: number) => {
    if (sectionId === currentSection || isNavigating) return;
    
    setIsNavigating(true);
    setCurrentSection(sectionId);
    
    // Reset navigation lock after transition
    setTimeout(() => {
      setIsNavigating(false);
    }, 1500);
  };

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src={oceanBackground}
          alt="Mystical Ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        
        {/* Enhanced Floating particles with multiple layers */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 6 === 0 ? 'w-3 h-3 bg-pirate-gold shadow-treasure' : 
              i % 6 === 1 ? 'w-1 h-1 bg-pirate-parchment' :
              i % 6 === 2 ? 'w-2 h-2 bg-pirate-gold opacity-60' :
              i % 6 === 3 ? 'w-0.5 h-0.5 bg-white' :
              i % 6 === 4 ? 'w-1.5 h-1.5 bg-pirate-gold/80' :
              'w-4 h-4 bg-gradient-to-r from-pirate-gold to-pirate-gold-dark opacity-40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: Math.random() > 0.5 ? 5 : 15,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-15, 15, -15],
              opacity: [0.1, 1, 0.1],
              scale: [0.2, 1.5, 0.2],
              rotate: [0, 720, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating treasure coins */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`coin-${i}`}
            className="absolute w-6 h-6 rounded-full bg-pirate-treasure border-2 border-pirate-gold-dark shadow-treasure text-center text-xs leading-6 font-bold text-pirate-brown"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360, 720],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ⚡
          </motion.div>
        ))}

        {/* Enhanced Lightning effects */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(${Math.random() * 360}deg, 
                rgba(255, 215, 0, 0.1), 
                transparent 30%, 
                rgba(255, 215, 0, 0.05), 
                transparent 70%)`
            }}
            animate={{
              opacity: [0, 0, 0, 0.4, 0.8, 0, 0, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: i * 20 + Math.random() * 15,
            }}
          />
        ))}

        {/* Mystical energy waves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `conic-gradient(from ${i * 90}deg, 
                transparent, 
                rgba(255, 215, 0, 0.1), 
                transparent, 
                rgba(255, 215, 0, 0.05), 
                transparent)`
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Floating mystical orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-12 h-12 rounded-full bg-mystical-glow border border-pirate-gold/30 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-r from-pirate-gold/20 to-transparent"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}

        {/* Sparkling stars */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-pirate-gold text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Background Music */}
      <audio
        ref={backgroundAudioRef}
        src="/Pirates-Of-The-Caribbean-Theme.mp3"
        loop
        preload="auto"
      />

      {/* Opening Screen */}
      <AnimatePresence>
        {showOpening && (
          <OpeningScreen onStartJourney={handleStartJourney} />
        )}
      </AnimatePresence>

      {/* Main Portfolio */}
      <AnimatePresence mode="wait">
        {!showOpening && (
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Music Control */}
            <motion.div
              className="fixed top-8 right-8 z-50"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button
                onClick={toggleBackgroundMusic}
                variant="ghost"
                size="sm"
                className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-pirate-gold/30 text-pirate-gold hover:bg-pirate-gold/20 hover:text-pirate-parchment transition-mystical"
              >
                {isMuted ? "🔇" : "🎵"}
              </Button>
            </motion.div>

            {/* Enhanced Navigation */}
            <motion.nav
              className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex space-x-2 bg-black/30 backdrop-blur-md rounded-full p-3 border-2 border-pirate-gold/40 shadow-mystical">
                {sections.map((section) => (
                  <motion.div key={section.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateToSection(section.id)}
                      className={`px-4 py-2 rounded-full font-royal font-semibold transition-mystical relative overflow-hidden ${
                        currentSection === section.id
                          ? 'bg-pirate-gold text-pirate-brown shadow-treasure border border-pirate-gold/50'
                          : 'text-pirate-gold hover:bg-pirate-gold/20 hover:text-pirate-parchment hover:shadow-treasure'
                      }`}
                      disabled={isNavigating}
                    >
                      {currentSection === section.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pirate-gold/20 via-pirate-gold/40 to-pirate-gold/20"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                      <span className="mr-2 relative z-10">{section.icon}</span>
                      <span className="relative z-10">{section.name}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.nav>

            {/* Section Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="pt-24"
              >
                <CurrentSectionComponent />
              </motion.div>
            </AnimatePresence>

            {/* Ship Navigation */}
            <PirateShip 
              currentSection={currentSection} 
              totalSections={sections.length} 
            />

            {/* Enhanced Pirate Quotes */}
            <motion.div
              className="fixed bottom-4 left-4 max-w-sm z-30"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.div
                className="bg-black/50 backdrop-blur-md rounded-lg p-6 border-2 border-pirate-gold/40 shadow-mystical relative overflow-hidden"
                animate={{ 
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 20px rgba(255, 215, 0, 0.3)",
                    "0 0 30px rgba(255, 215, 0, 0.5)",
                    "0 0 20px rgba(255, 215, 0, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-pirate-gold/60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10">
                  <p className="text-pirate-parchment font-royal text-sm italic leading-relaxed">
                    {currentSection === 0 && "\"Ahoy! Captain Sahil here - Data be the new treasure, but like gold, it's valuable only when refined by skilled hands.\""}
                    {currentSection === 1 && "\"In the vast seas of data science, experience be the best compass for navigating statistical storms.\""}
                    {currentSection === 2 && "\"Every dataset tells a tale of adventure; this data scientist's job is to listen to its secrets.\""}
                    {currentSection === 3 && "\"A pirate's skills be like his weapons - what ye show is impressive, but what ye conceal is legendary.\""}
                    {currentSection === 4 && "\"The best way to find a trustworthy crew mate is to trust them with yer first treasure map.\""}
                  </p>
                  <div className="flex items-center mt-3">
                    <motion.div
                      className="w-2 h-2 bg-pirate-gold rounded-full mr-2"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-pirate-gold font-royal text-xs">~ Captain Sahil's Wisdom</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Section Progress */}
            <motion.div
              className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex flex-col space-y-4">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => navigateToSection(section.id)}
                    className={`w-4 h-4 rounded-full border-2 transition-mystical ${
                      currentSection === section.id
                        ? 'bg-pirate-gold border-pirate-gold shadow-treasure'
                        : 'bg-transparent border-pirate-gold/50 hover:border-pirate-gold'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isNavigating}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PiratePortfolio;