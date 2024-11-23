import React from 'react';
import { motion } from 'framer-motion';

interface ObjectiveCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
  isSelected: boolean;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ title, description, image, onClick, isSelected }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer rounded-2xl overflow-hidden relative ${
        isSelected ? 'ring-4 ring-[#ffd700]' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative h-96">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ObjectiveCard;