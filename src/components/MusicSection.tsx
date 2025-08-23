import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const musicTracks = [
  {
    title: "Pirates of the Caribbean Theme",
    artist: "Hans Zimmer",
    file: "/Pirates-Of-The-Caribbean-Theme.mp3"
  },
  {
    title: "Ocean Waves Ambience",
    artist: "Nature Sounds",
    file: "/ocean-ambience.mp3"
  },
  {
    title: "Mystical Adventure",
    artist: "Epic Music",
    file: "/mystical-adventure.mp3"
  }
];

const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto w-full">
        <motion.h2
          className="text-6xl font-pirate text-pirate-gold text-center mb-12 animate-flicker"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          🎵 Captain's Music Box
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-pirate-gold shadow-mystical">
            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={musicTracks[currentTrack].file}
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Current Track Display */}
            <div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-4 bg-pirate-gold/20 rounded-full flex items-center justify-center border-4 border-pirate-gold"
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 10, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              >
                <span className="text-4xl">🎼</span>
              </motion.div>
              <h3 className="text-2xl font-pirate text-pirate-gold mb-2">
                {musicTracks[currentTrack].title}
              </h3>
              <p className="text-pirate-parchment font-royal">
                {musicTracks[currentTrack].artist}
              </p>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Button
                onClick={togglePlay}
                variant="pirate"
                size="lg"
                className="w-16 h-16 rounded-full"
              >
                {isPlaying ? "⏸️" : "▶️"}
              </Button>
            </div>

            {/* Volume Control */}
            <div className="mb-8">
              <label className="block text-pirate-gold font-royal mb-2 text-center">
                Volume: {Math.round(volume * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-pirate-brown-dark rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Track List */}
            <div className="space-y-3">
              <h4 className="text-pirate-gold font-royal font-semibold text-center mb-4">
                Available Tracks:
              </h4>
              {musicTracks.map((track, index) => (
                <motion.button
                  key={index}
                  onClick={() => changeTrack(index)}
                  className={`w-full p-3 rounded-lg font-royal transition-mystical ${
                    currentTrack === index
                      ? 'bg-pirate-gold/20 text-pirate-gold border border-pirate-gold'
                      : 'bg-pirate-brown-dark/30 text-pirate-parchment hover:bg-pirate-gold/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="font-semibold">{track.title}</div>
                      <div className="text-sm opacity-75">{track.artist}</div>
                    </div>
                    {currentTrack === index && isPlaying && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        🎵
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Music Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <blockquote className="text-xl font-pirate text-pirate-gold italic">
            "Music be the food of love, play on, give me excess of it!"
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MusicSection;