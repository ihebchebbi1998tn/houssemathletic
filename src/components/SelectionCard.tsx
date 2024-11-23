import React from 'react';
import { motion } from 'framer-motion';

interface SelectionCardProps {
  title: string;
  description?: string;
  image?: string;
  onClick: () => void;
  isSelected: boolean;
  size?: 'small' | 'large';
  className?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ 
  title, 
  description, 
  image, 
  onClick, 
  isSelected,
  size = 'large',
  className = ''
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer rounded-2xl overflow-hidden relative ${
        isSelected ? 'ring-4 ring-[#ffd700]' : ''
      } ${size === 'small' ? 'h-32' : 'h-64'} ${className}`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424] to-[#1a1a1a]" />
      )}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-gray-200 text-sm">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default SelectionCard;