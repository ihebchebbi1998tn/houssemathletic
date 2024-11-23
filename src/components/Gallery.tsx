import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    width: 800,
    height: 600,
    title: "Transformation"
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop",
    width: 800,
    height: 600,
    title: "Equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop",
    width: 800,
    height: 600,
    title: "Workout"
  },
  {
    src: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=800&h=600&fit=crop",
    width: 800,
    height: 600,
    title: "Results"
  },
  {
    src: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800&h=600&fit=crop",
    width: 800,
    height: 600,
    title: "Gym"
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
    width: 800,
    height: 600,
    title: "Progress"
  }
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((image, idx) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setIndex(idx)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
      />
    </>
  );
};

export default Gallery;