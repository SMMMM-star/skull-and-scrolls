import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import OpeningScreen from "./OpeningScreen";
import PirateShip from "./PirateShip";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import MusicSection from "./MusicSection";
import oceanBackground from "@/assets/ocean-background.jpg";

const sections = [
  { id: 0, name: "About", icon: "🏴‍☠️", component: AboutSection },
  { id: 1, name: "Experience", icon: "⚔️", component: ExperienceSection },
  { id: 2, name: "Projects", icon: "🏝️", component: ProjectsSection },
  { id: 3, name: "Skills", icon: "📜", component: SkillsSection },
  { id: 4, name: "Music", icon: "🎵", component: MusicSection },
  { id: 5, name: "Contact", icon: "☠️", component: ContactSection },
];

const PiratePortfolio = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleStartJourney = () => {
    setShowOpening(false);
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
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pirate-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

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
            {/* Navigation */}
            <motion.nav
              className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex space-x-2 bg-black/20 backdrop-blur-md rounded-full p-2 border border-pirate-gold/30">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateToSection(section.id)}
                    className={`px-4 py-2 rounded-full font-royal font-semibold transition-mystical ${
                      currentSection === section.id
                        ? 'bg-pirate-gold text-pirate-brown shadow-treasure'
                        : 'text-pirate-gold hover:bg-pirate-gold/20 hover:text-pirate-parchment'
                    }`}
                    disabled={isNavigating}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.name}
                  </Button>
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

            {/* Pirate Quotes */}
            <motion.div
              className="fixed bottom-4 left-4 max-w-xs z-30"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.div
                className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-pirate-gold/30"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-pirate-parchment font-royal text-sm italic">
                  {currentSection === 0 && "\"Data is the new oil, but like oil, it's valuable only when refined.\""}
                  {currentSection === 1 && "\"In data science, experience is the best teacher of statistical intuition.\""}
                  {currentSection === 2 && "\"Every dataset tells a story; the data scientist's job is to listen.\""}
                  {currentSection === 3 && "\"Statistics are like a bikini - what they reveal is suggestive, but what they conceal is vital.\""}
                  {currentSection === 4 && "\"Music gives soul to the universe, wings to the mind, and life to everything.\""}
                  {currentSection === 5 && "\"The best way to find out if you can trust somebody is to trust them.\""}
                </p>
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