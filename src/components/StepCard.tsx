import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ children, title, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md mx-auto bg-[#242424]/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-[#ffd700]/10"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700]">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default StepCard;