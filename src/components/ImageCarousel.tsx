import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/467372663_9385998904763284_6882433361222578566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=G5Y5hlgX-tUQ7kNvgE72iD0&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AWfDDFwKrvRUzsGQcNq5P-M&oh=00_AYBLYBbJClb_vxWIyIfZ4Y3WYfrhPQvxv2GHhjO-zcG0yg&oe=674778E6",
  "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/467372663_9385998904763284_6882433361222578566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=G5Y5hlgX-tUQ7kNvgE72iD0&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AWfDDFwKrvRUzsGQcNq5P-M&oh=00_AYBLYBbJClb_vxWIyIfZ4Y3WYfrhPQvxv2GHhjO-zcG0yg&oe=674778E6",
  "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/467372663_9385998904763284_6882433361222578566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=G5Y5hlgX-tUQ7kNvgE72iD0&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AWfDDFwKrvRUzsGQcNq5P-M&oh=00_AYBLYBbJClb_vxWIyIfZ4Y3WYfrhPQvxv2GHhjO-zcG0yg&oe=674778E6"
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // Changed to 10 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Coach image ${currentIndex + 1}`}
        />
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full
                 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300
                 hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full
                 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300
                 hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#ffd700] w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;