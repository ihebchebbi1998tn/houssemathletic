import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://i.ibb.co/wKYwXCG/467372663-9385998904763284-6882433361222578566-n.jpg",
  "https://i.ibb.co/r61Z8Hq/467318428-18284965672243085-4179149581728295560-n.jpg",
  "https://i.ibb.co/r0r05g9/467859190-18284965684243085-4639842183437437601-n.jpg"
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
  className="absolute inset-0 w-full h-full object-contain"
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