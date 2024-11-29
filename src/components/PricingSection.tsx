import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PriceCard from './PriceCard';

type Currency = 'TND' | 'EUR' | 'USD';

const CurrencyButton: React.FC<{
  currency: Currency;
  selected: boolean;
  onClick: () => void;
}> = ({ currency, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      selected
        ? 'bg-[#ffd700] text-black'
        : 'bg-white/10 text-white hover:bg-white/20'
    }`}
  >
    {currency}
  </button>
);

const features = [
  'Programme personnalisé',
  'Suivi nutritionnel',
  'Support WhatsApp',
  'Accès aux vidéos exclusives'
];

const PricingSection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('TND');

  const prices = [
    { duration: '6 Semaines', priceTND: 250 },
    { duration: '12 Semaines', priceTND: 450 },
    { duration: '6 Mois', priceTND: 850 },
    { duration: '12 Mois', priceTND: 1500 }
  ];

  return (
    <section className="py-20 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Mes <span className="text-[#ffd700]">Formules</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Choisissez le programme qui correspond le mieux à vos objectifs.
            Tous les prix incluent un suivi personnalisé et un accès illimité au support.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            {(['TND', 'EUR', 'USD'] as Currency[]).map((currency) => (
              <CurrencyButton
                key={currency}
                currency={currency}
                selected={selectedCurrency === currency}
                onClick={() => setSelectedCurrency(currency)}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prices.map((price) => (
            <PriceCard
              key={price.duration}
              duration={price.duration}
              priceTND={price.priceTND}
              currency={selectedCurrency}
              features={features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;