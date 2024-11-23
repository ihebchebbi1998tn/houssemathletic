import React from 'react';
import { motion } from 'framer-motion';
import { WhatsappLogo } from 'phosphor-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/21600000000"
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg relative">
        <WhatsappLogo size={32} weight="fill" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          1
        </span>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;