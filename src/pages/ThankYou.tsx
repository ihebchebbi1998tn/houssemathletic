import React from 'react';
import { motion } from 'framer-motion';
import { WhatsappLogo, House } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-xl bg-[#242424]/80 backdrop-blur-lg p-12 rounded-2xl border border-[#ffd700]/10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-[#ffd700] rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h2 className="text-4xl font-bold mb-6 text-white">Merci pour votre inscription!</h2>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Je vous contacterai personnellement très bientôt pour discuter de votre programme personnalisé.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/21600000000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl
                       hover:bg-green-700 transition-all duration-300 text-lg font-medium"
            >
              <WhatsappLogo size={24} weight="fill" />
              Me contacter sur WhatsApp
            </motion.a>

            <motion.button
              onClick={() => navigate('/')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-[#ffd700] text-black px-8 py-4 rounded-xl
                       hover:bg-[#ffed4a] transition-all duration-300 text-lg font-medium"
            >
              <House size={24} weight="fill" />
              Retour
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}