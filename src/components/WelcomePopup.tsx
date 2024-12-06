import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, WhatsappLogo } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <motion.div 
            className="relative bg-[#242424] rounded-2xl p-8 max-w-md w-full border border-[#ffd700]/20"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-[#ffd700]/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <img
                  src="https://i.ibb.co/r0r05g9/467859190-18284965684243085-4639842183437437601-n.jpg"
                  alt="Coach Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </motion.div>

              <h2 className="text-2xl font-bold text-white mb-4">
                {t('popup.title')}
              </h2>
              
              <p className="text-gray-300 mb-8">
                {t('popup.description')}
              </p>

              <motion.a
                href="https://wa.me/21624683015"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl
                         hover:bg-green-700 transition-all duration-300 text-lg font-medium w-full"
              >
                <WhatsappLogo size={24} weight="fill" />
                {t('popup.cta')}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
