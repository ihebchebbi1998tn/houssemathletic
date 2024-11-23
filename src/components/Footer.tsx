import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-black/40 backdrop-blur-sm py-3 mt-auto"
    >
      <a
        href="https://www.instagram.com/ihebchebbi1998/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-white/70 hover:text-white transition-colors text-sm font-light hover:underline"
      >
        Developed by Iheb Chebbi
      </a>
    </motion.div>
  );
};

export default Footer;