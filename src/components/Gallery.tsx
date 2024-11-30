import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "https://i.ibb.co/2tjDN9t/468152940-18470446702050161-4099700776036128294-n.jpg",
    width: 800,
    height: 900,
    title: "Image 1"
  },
  {
    src: "https://i.ibb.co/8BQmpVd/467318711-18284965693243085-4665614552950010621-n.jpg",
    width: 800,
    height: 900,
    title: "Image 2"
  },
  {
    src: "https://i.ibb.co/1XFr8kt/467538818-18284965720243085-2225549853862629879-n.jpg",
    width: 800,
    height: 900,
    title: "Image 3"
  },
  {
    src: "https://i.ibb.co/LrPnVQH/a6feb2ca-2a30-4ed5-bdbb-78d313c64a1a.jpg",
    width: 800,
    height: 900,
    title: "AR406752"
  },
  {
    src: "https://i.ibb.co/C86L86R/467178043-18284965738243085-6012870816686190413-n.jpg",
    width: 800,
    height: 900,
    title: "Image 4"
  },
  {
    src: "https://i.ibb.co/W3KgQm8/467117849-18284965756243085-7619141833982696844-n.jpg",
    width: 800,
    height: 900,
    title: "Image 5"
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
