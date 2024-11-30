import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send } from 'lucide-react';

const FloatingWhatsApp = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      window.open(`https://wa.me/21624683015?text=${encodeURIComponent(message)}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-5 mb-4 w-80 bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="bg-green-600 p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.ibb.co/r0r05g9/467859190-18284965684243085-4639842183437437601-n.jpg"
                  alt="Coach Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h3 className="text-white font-semibold">Coach Houssem</h3>
                  <p className="text-green-100 text-sm">{t('whatsappPopup.greeting')}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('whatsappPopup.placeholder')}
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Send size={20} />
                  {t('whatsappPopup.cta')}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg relative hover:bg-green-700"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageCircle size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              1
            </span>
          </>
        )}
      </motion.button>
    </>
  );
};

export default FloatingWhatsApp;