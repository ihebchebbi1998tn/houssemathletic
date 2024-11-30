import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PriceCardProps {
  duration: string;
  priceTND: number;
  currency: 'TND' | 'EUR' | 'USD';
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({ duration, priceTND, currency, features }) => {
  const { t } = useTranslation();
  
  const getConvertedPrice = () => {
    switch (currency) {
      case 'EUR':
        return (priceTND / 3.5).toFixed(2);
      case 'USD':
        return (priceTND / 2.5).toFixed(2);
      default:
        return priceTND.toFixed(2);
    }
  };

  const getCurrencySymbol = () => {
    switch (currency) {
      case 'EUR':
        return '€';
      case 'USD':
        return '$';
      default:
        return 'TND';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-b from-[#242424]/80 to-[#1a1a1a]/80 backdrop-blur-lg p-8 rounded-2xl
                 border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-300
                 shadow-lg hover:shadow-xl"
    >
      <h3 className="text-2xl font-bold text-white mb-6">{t(`pricing.durations.${duration}`)}</h3>
      <div className="space-y-4 mb-8">
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-bold text-[#ffd700]">
            {getConvertedPrice()}
          </div>
          <div className="text-gray-400 text-xl">{getCurrencySymbol()}</div>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <Check className="text-[#ffd700] w-5 h-5" />
            {t(`pricing.features.${index}`)}
          </li>
        ))}
      </ul>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B21624683015&text=Je suis intéressé(e) par le programme de coaching"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-[#ffd700] text-black px-6 py-3 rounded-xl
                   hover:bg-[#ffed4a] transition-all duration-300 font-medium"
      >
        {t('pricing.cta')}
      </a>
    </motion.div>
  );
};

export default PriceCard;