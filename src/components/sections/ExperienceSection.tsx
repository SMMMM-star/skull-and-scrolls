import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Frontend Buccaneer",
    company: "Digital Seas Corp",
    period: "2022 - Present",
    description: "Leading raids on complex React applications, navigating through stormy codebases and emerging victorious with scalable solutions.",
    achievements: ["Conquered 3 major frontend overhauls", "Mentored junior pirates", "Implemented treasure-worthy design systems"]
  },
  {
    title: "Full Stack Corsair",
    company: "Tech Treasure Island",
    period: "2020 - 2022",
    description: "Sailed the full stack seas, from frontend shores to backend depths, creating end-to-end digital adventures.",
    achievements: ["Built 5 successful web applications", "Optimized database performance by 60%", "Led cross-functional crews"]
  },
  {
    title: "JavaScript Navigator",
    company: "Code Cove Studios",
    period: "2018 - 2020",
    description: "Charted new territories in JavaScript frameworks, discovering hidden gems in Vue.js and React ecosystems.",
    achievements: ["Developed interactive user experiences", "Reduced load times by 40%", "Established coding best practices"]
  }
];

const ExperienceSection = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-6xl font-pirate text-pirate-gold text-center mb-12 animate-flicker"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          ⚔️ Battle-Tested Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical hover:shadow-treasure transition-mystical">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <motion.div
                      className="text-pirate-gold font-pirate text-2xl mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.title}
                    </motion.div>
                    <div className="text-pirate-parchment font-royal text-lg mb-2">
                      {exp.company}
                    </div>
                    <div className="text-pirate-gold font-royal text-sm">
                      {exp.period}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-pirate-parchment font-royal text-lg mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-pirate-gold font-royal font-semibold mb-2">
                        Key Victories:
                      </h4>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-pirate-parchment font-royal"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                        >
                          <span className="text-pirate-gold mr-2">⚡</span>
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pirate quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <blockquote className="text-xl font-pirate text-pirate-gold italic">
            "The problem is not the problem. The problem is your attitude about the problem."
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;