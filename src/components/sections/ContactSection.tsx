import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Message in a bottle sent:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          ☠️ Send a Message in a Bottle
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical">
              <motion.div
                className="text-center mb-6"
                animate={{ rotateY: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-6xl mb-4">🍃</div>
                <h3 className="text-2xl font-pirate text-pirate-gold">Cast Your Message</h3>
                <p className="text-pirate-parchment font-royal mt-2">
                  Send your message across the digital seas
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <label className="block text-pirate-gold font-royal font-semibold mb-2">
                    Captain's Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-pirate-brown/20 border-pirate-gold text-pirate-parchment placeholder:text-pirate-parchment/50 font-royal"
                    placeholder="Enter your name, brave sailor..."
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <label className="block text-pirate-gold font-royal font-semibold mb-2">
                    Message Coordinates (Email)
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-pirate-brown/20 border-pirate-gold text-pirate-parchment placeholder:text-pirate-parchment/50 font-royal"
                    placeholder="your.email@treasure.cove"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <label className="block text-pirate-gold font-royal font-semibold mb-2">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-pirate-brown/20 border-pirate-gold text-pirate-parchment placeholder:text-pirate-parchment/50 font-royal min-h-[120px] resize-none"
                    placeholder="Share your adventure ideas, collaboration opportunities, or just say ahoy..."
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-pirate-gold text-pirate-brown hover:bg-pirate-gold-dark font-royal font-semibold py-3 text-lg shadow-treasure transition-mystical"
                  >
                    🏴‍☠️ Launch Message Bottle
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Direct Contact */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical">
              <h3 className="text-2xl font-pirate text-pirate-gold mb-4 text-center">
                Find Me at These Harbors
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "📧", label: "Message Scroll", value: "captain@portfolio.sea" },
                  { icon: "🐙", label: "GitHub Port", value: "github.com/captain-code" },
                  { icon: "⚓", label: "LinkedIn Harbor", value: "linkedin.com/in/captain" },
                  { icon: "🐦", label: "Twitter Crow's Nest", value: "@CaptainDev" }
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-4 text-pirate-parchment font-royal hover:text-pirate-gold transition-mystical cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <div className="font-semibold">{contact.label}</div>
                      <div className="text-sm">{contact.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-pirate-gold shadow-mystical">
                <div className="text-center">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotateZ: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                  <h3 className="text-xl font-pirate text-pirate-gold mb-2">
                    Currently Available for Adventures
                  </h3>
                  <p className="text-pirate-parchment font-royal text-sm">
                    Ready to embark on new projects and collaborations!
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Final Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <blockquote className="text-2xl font-pirate text-pirate-gold italic mb-4">
            "A ship in harbor is safe, but that is not what ships are built for."
          </blockquote>
          <p className="text-pirate-parchment font-royal">
            Let's set sail on your next digital adventure! 🏴‍☠️
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;