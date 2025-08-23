import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import treasureMapImage from "@/assets/treasure-map.png";

const AboutSection = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-6xl font-pirate text-pirate-gold text-center mb-12 animate-flicker"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          🏴‍☠️ About This Captain
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={treasureMapImage}
              alt="Treasure Map"
              className="w-full h-auto rounded-lg shadow-deep animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical">
              <div className="space-y-6">
                <motion.div
                  className="text-pirate-parchment font-royal text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <p className="mb-4">
                    Ahoy there, brave soul! I be a seasoned captain of the digital seas, 
                    navigating through treacherous codes and conquering the most challenging 
                    technology storms.
                  </p>
                  <p className="mb-4">
                    With years of experience plundering the depths of software development, 
                    I've amassed a treasure trove of skills in web technologies, creating 
                    digital experiences that would make even Blackbeard himself proud.
                  </p>
                  <p>
                    When I'm not coding, you'll find me charting new courses in the 
                    ever-expanding ocean of technology, always ready for the next adventure!
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  {["React Navigator", "TypeScript Buccaneer", "Node.js Corsair", "UI/UX Treasure Hunter"].map((skill, i) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-pirate-gold text-pirate-brown-dark font-royal font-semibold rounded-full text-sm shadow-mystical"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Floating quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <blockquote className="text-2xl font-pirate text-pirate-gold italic">
            "Not all treasure is silver and gold, mate."
          </blockquote>
          <p className="text-pirate-parchment font-royal mt-2">- Captain Jack Sparrow</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;