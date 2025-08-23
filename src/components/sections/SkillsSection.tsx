import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Arsenal",
    icon: "⚔️",
    skills: [
      { name: "React", level: 95, weapon: "Cutlass" },
      { name: "TypeScript", level: 90, weapon: "Rapier" },
      { name: "Vue.js", level: 85, weapon: "Saber" },
      { name: "Tailwind CSS", level: 90, weapon: "Dagger" }
    ]
  },
  {
    title: "Backend Cannons",
    icon: "🔫",
    skills: [
      { name: "Node.js", level: 88, weapon: "Cannon" },
      { name: "Python", level: 82, weapon: "Musket" },
      { name: "PostgreSQL", level: 85, weapon: "Blunderbuss" },
      { name: "MongoDB", level: 80, weapon: "Pistol" }
    ]
  },
  {
    title: "Navigation Tools",
    icon: "🧭",
    skills: [
      { name: "Git", level: 95, weapon: "Compass" },
      { name: "Docker", level: 78, weapon: "Telescope" },
      { name: "AWS", level: 75, weapon: "Sextant" },
      { name: "Linux", level: 82, weapon: "Anchor" }
    ]
  },
  {
    title: "Treasure Maps",
    icon: "🗺️",
    skills: [
      { name: "UI/UX Design", level: 88, weapon: "Quill" },
      { name: "Figma", level: 85, weapon: "Parchment" },
      { name: "Adobe Creative", level: 80, weapon: "Inkwell" },
      { name: "Prototyping", level: 90, weapon: "Scroll" }
    ]
  }
];

const SkillsSection = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-6xl font-pirate text-pirate-gold text-center mb-12 animate-flicker"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          📜 Captain's Arsenal
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + categoryIndex * 0.2, duration: 0.8 }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical hover:shadow-treasure transition-mystical h-full">
                <div className="text-center mb-6">
                  <motion.div
                    className="text-4xl mb-2"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-pirate text-pirate-gold">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.5 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-pirate-parchment font-royal font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-pirate-gold font-royal text-sm">
                          {skill.weapon}
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-pirate-brown-dark rounded-full h-3">
                          <motion.div
                            className="bg-gradient-to-r from-pirate-gold to-pirate-gold-dark h-3 rounded-full shadow-treasure"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1, 
                              duration: 1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                        <span className="absolute right-2 top-0 text-xs text-pirate-brown font-royal font-bold">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Card className="p-8 bg-card/60 backdrop-blur-sm border-pirate-gold shadow-mystical inline-block">
            <h3 className="text-2xl font-pirate text-pirate-gold mb-4">
              Years of Adventure
            </h3>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-pirate text-pirate-gold">5+</div>
                <div className="text-pirate-parchment font-royal">Years Coding</div>
              </div>
              <div>
                <div className="text-3xl font-pirate text-pirate-gold">50+</div>
                <div className="text-pirate-parchment font-royal">Projects Conquered</div>
              </div>
              <div>
                <div className="text-3xl font-pirate text-pirate-gold">20+</div>
                <div className="text-pirate-parchment font-royal">Technologies Mastered</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;