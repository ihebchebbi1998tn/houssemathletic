import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, X } from 'lucide-react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const videos = [
  {
    id: 1,
    title: "videos.items.training",
    thumbnail: "https://i.ibb.co/hRzj9y9/image.png",
    url:  "https://draminesaid.com/v1.mp4"
  },
  {
    id: 2,
    title: "form.objectives.competition",
    thumbnail: "https://i.ibb.co/Lk6Jctf/image.png",
    url:  "https://draminesaid.com/v2.mp4"
  },
   {
    id: 3,
    title: "form.objectives.competition",
    thumbnail: "https://i.ibb.co/k6G5ZmB/image.png",
    url:  "https://talelgym.tn/v3.mp4"
  }
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { t } = useTranslation();

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

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
            {t('videos.title')} <span className="text-[#ffd700]">{t('videos.subtitle')}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-black/50"
            >
              {isPlaying ? (
                <ReactPlayer
                  url={selectedVideo.url}
                  playing={isPlaying}
                  controls
                  width="100%"
                  height="100%"
                  onEnded={handleVideoEnd}
                  className="absolute top-0 left-0"
                />
              ) : (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={selectedVideo.thumbnail}
                    alt={t(selectedVideo.title)}
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
                      alt={t(video.title)}
                      className="w-full h-full object-cover"
                    />
                    {selectedVideo.id !== video.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play size={20} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{t(video.title)}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:text-[#ffd700] transition-colors"
          >
            <X size={24} />
          </button>
          <ReactPlayer
            url={selectedVideo.url}
            playing={true}
            controls
            width="90vw"
            height="90vh"
            onEnded={handleVideoEnd}
          />
        </div>
      )}
    </section>
  );
};

export default VideoSection;
