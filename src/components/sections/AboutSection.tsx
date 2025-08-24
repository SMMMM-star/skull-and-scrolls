import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import treasureMapImage from "@/assets/treasure-map.png";
import sahilProfile from "@/assets/sahil-profile.png";

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
          🏴‍☠️ Captain Sahil Mujumdar
        </motion.h2>

        {/* Profile Photo */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
        >
          <div className="relative">
            <motion.div
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-pirate-gold shadow-treasure relative z-10"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={sahilProfile}
                alt="Captain Sahil Mujumdar"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Glowing ring effect */}
            <motion.div
              className="absolute inset-0 w-48 h-48 rounded-full border-2 border-pirate-gold opacity-50"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            {/* Floating particles around profile */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-pirate-gold rounded-full"
                style={{
                  left: `${Math.cos((i * Math.PI * 2) / 8) * 120 + 96}px`,
                  top: `${Math.sin((i * Math.PI * 2) / 8) * 120 + 96}px`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          {/* Background decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 border-2 border-pirate-gold/20 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-16 h-16 border border-pirate-gold/30 rounded-full"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
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
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical relative overflow-hidden animate-treasure-glow">
              {/* Card background effects */}
              <motion.div
                className="absolute inset-0 bg-treasure-shimmer opacity-20"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pirate-gold to-transparent"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <div className="space-y-6 relative z-10">
                <motion.div
                  className="text-pirate-parchment font-royal text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <p className="mb-4">
                    Ahoy there, brave soul! I be Captain Sahil Mujumdar, a skilled junior data scientist 
                    navigating the vast oceans of data, with a passion for discovering hidden treasures in datasets. 
                    My ship is equipped with Python, SQL, machine learning algorithms, and statistical analysis tools.
                  </p>
                  <p className="mb-4">
                    From data exploration to predictive modeling, I've embarked on exciting voyages through 
                    various data science projects. When I'm not analyzing data, you'll find me learning new 
                    techniques and contributing to the data science community.
                  </p>
                  <p>
                    Currently charting new courses in machine learning and artificial intelligence, 
                    always ready for the next data adventure on the seven seas of data!
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  {["Python Navigator", "Machine Learning Buccaneer", "Data Visualization Corsair", "Statistical Analysis Treasure Hunter"].map((skill, i) => (
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
            "Data is the new oil, but like oil, it's valuable only when refined."
          </blockquote>
          <p className="text-pirate-parchment font-royal mt-2">- Data Science Wisdom</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;