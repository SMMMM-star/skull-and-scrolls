import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "Treasure Hunter Dashboard",
    description: "A React-based analytics dashboard that helps captains track their digital treasures across multiple repositories.",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    status: "Live",
    type: "Web Application"
  },
  {
    title: "Pirate's Code Generator",
    description: "An AI-powered tool that generates clean, scalable code following the ancient pirate principles of software architecture.",
    tech: ["Python", "OpenAI API", "FastAPI", "React"],
    status: "In Progress",
    type: "AI Tool"
  },
  {
    title: "Captain's Log Mobile",
    description: "A mobile app for developers to track their coding adventures, bugs conquered, and skills acquired on their journey.",
    tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    status: "Planning",
    type: "Mobile App"
  },
  {
    title: "Seafarer's UI Kit",
    description: "A comprehensive design system and component library inspired by nautical themes for modern web applications.",
    tech: ["React", "Tailwind CSS", "Storybook", "Framer Motion"],
    status: "Live",
    type: "Design System"
  }
];

const ProjectsSection = () => {
  const [openChest, setOpenChest] = useState<number | null>(null);

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
          🏝️ Treasure Trove Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              onHoverStart={() => setOpenChest(index)}
              onHoverEnd={() => setOpenChest(null)}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical hover:shadow-treasure transition-mystical h-full">
                <div className="relative">
                  {/* Treasure chest icon */}
                  <motion.div
                    className="text-6xl mb-4 text-center"
                    animate={{
                      rotateY: openChest === index ? 180 : 0,
                      scale: openChest === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {openChest === index ? "📦" : "🗝️"}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: openChest === index ? 1 : 0.8,
                      y: openChest === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-pirate text-pirate-gold">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-royal font-semibold ${
                        project.status === 'Live' 
                          ? 'bg-green-600 text-white' 
                          : project.status === 'In Progress'
                          ? 'bg-yellow-600 text-white'
                          : 'bg-blue-600 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-pirate-parchment font-royal text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-pirate-gold font-royal font-semibold text-sm mb-2">
                        Type: {project.type}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-pirate-brown text-pirate-parchment font-royal text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: openChest === index ? 1 : 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-pirate-gold text-pirate-gold hover:bg-pirate-gold hover:text-pirate-brown"
                        >
                          View Treasure
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-pirate-gold text-pirate-gold hover:bg-pirate-gold hover:text-pirate-brown"
                        >
                          Source Code
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-pirate-parchment font-royal text-lg mb-4">
            Ready to embark on a new adventure together?
          </p>
          <Button 
            className="bg-pirate-gold text-pirate-brown hover:bg-pirate-gold-dark font-royal font-semibold px-8 py-3 text-lg shadow-treasure"
          >
            🏴‍☠️ Start a New Quest
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;