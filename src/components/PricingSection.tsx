import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PriceCard from './PriceCard';
import { useTranslation } from 'react-i18next';

type Currency = 'TND' | 'EUR' | 'USD';

const CurrencyButton: React.FC<{
  currency: Currency;
  selected: boolean;
  onClick: () => void;
}> = ({ currency, selected, onClick }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        selected
          ? 'bg-[#ffd700] text-black'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      {t(`pricingSection.currency.${currency}`)}
    </button>
  );
};

const features = [
  'pricingSection.features.0',
  'pricingSection.features.1',
  'pricingSection.features.2',
  'pricingSection.features.3'
];

const PricingSection = () => {
  const { t } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('TND');

  const prices = [
    { duration: '1mois', priceTND: 150 },
    { duration: '2mois', priceTND: 250 },
    { duration: '3mois', priceTND: 350 },
    { duration: '6mois', priceTND: 650 },
    { duration: '12mois', priceTND: 950 }
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
            {t('pricingSection.title')} <span className="text-[#ffd700]">{t('pricingSection.subtitle')}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            {t('pricingSection.subtitle')}
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
              features={features.map(feature => t(feature))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;