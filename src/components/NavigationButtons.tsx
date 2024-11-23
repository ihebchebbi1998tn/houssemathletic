import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  nextText?: string;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onNext,
  nextDisabled = false,
  nextText = 'Suivant'
}) => {
  return (
    <div className="flex justify-between items-center mt-8">
      {onBack ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white 
                   hover:bg-white/10 transition-colors transform hover:-translate-y-1
                   shadow-lg hover:shadow-xl duration-300"
        >
          <ArrowLeft size={20} />
          Retour
        </motion.button>
      ) : <div />}

      {onNext && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          disabled={nextDisabled}
          className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold
                    transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                    transition-all duration-300 ${
                      nextDisabled
                        ? 'bg-gray-500 cursor-not-allowed opacity-50'
                        : 'bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-black hover:from-[#ffed4a] hover:to-[#ffd700]'
                    }`}
        >
          {nextText}
          <ArrowRight size={20} className={nextDisabled ? '' : 'animate-bounce'} />
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButtons;