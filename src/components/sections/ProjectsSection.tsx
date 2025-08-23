import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Machine learning model to predict customer churn for a telecom company using classification algorithms and feature engineering.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    status: "Live",
    type: "ML Project"
  },
  {
    title: "Sales Forecasting Dashboard",
    description: "Interactive dashboard for sales trend analysis and forecasting using time series models and statistical methods.",
    tech: ["Python", "Plotly", "Streamlit", "ARIMA"],
    status: "Live",
    type: "Data Visualization"
  },
  {
    title: "Sentiment Analysis Tool",
    description: "NLP model to analyze customer reviews and social media sentiment for brand monitoring using natural language processing.",
    tech: ["Python", "NLTK", "TextBlob", "Flask"],
    status: "In Progress",
    type: "NLP Project"
  },
  {
    title: "Fraud Detection System",
    description: "Anomaly detection model to identify fraudulent transactions using unsupervised learning and statistical analysis.",
    tech: ["Python", "Isolation Forest", "PostgreSQL", "Docker"],
    status: "Planning",
    type: "ML System"
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
          🏝️ Data Science Treasure Trove
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
            Ready to embark on a new data science adventure together?
          </p>
          <Button 
            className="bg-pirate-gold text-pirate-brown hover:bg-pirate-gold-dark font-royal font-semibold px-8 py-3 text-lg shadow-treasure"
          >
            🏴‍☠️ Start a New Data Quest
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;