import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Programme d'entraînement",
    thumbnail: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&h=600&fit=crop",
    url: "https://www.youtube.com/embed/your-video-id-1"
  },
  {
    id: 2,
    title: "Nutrition et Récupération",
    thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    url: "https://www.youtube.com/embed/your-video-id-2"
  },
  {
    id: 3,
    title: "Transformations",
    thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
    url: "https://www.youtube.com/embed/your-video-id-3"
  }
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-black/40 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Découvrez Nos <span className="text-[#ffd700]">Vidéos</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explorez nos contenus exclusifs et découvrez nos méthodes d'entraînement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-black/50"
            >
              <iframe
                src={`${selectedVideo.url}${isPlaying ? '?autoplay=1' : ''}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10 w-20 h-20 bg-[#ffd700] rounded-full flex items-center justify-center"
                  >
                    <Play size={40} className="text-black ml-2" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="space-y-4">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedVideo.id === video.id
                    ? 'bg-[#ffd700]/20 border border-[#ffd700]/30'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
                onClick={() => {
                  setSelectedVideo(video);
                  setIsPlaying(false);
                }}
              >
                <div className="flex gap-4 items-center">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    {selectedVideo.id !== video.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play size={20} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{video.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;