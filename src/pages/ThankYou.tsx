import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsappLogo, House } from 'phosphor-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ParticleBackground from '../components/ParticleBackground';

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirecting, setRedirecting] = useState(false);
  const formData = location.state?.formData;
  const { t } = useTranslation();

  useEffect(() => {
    if (formData) {
      const timer = setTimeout(() => {
        setRedirecting(true);
        const message = formatWhatsAppMessage(formData);
        window.location.href = `https://api.whatsapp.com/send/?phone=%2B21624683015&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formData]);

  const formatWhatsAppMessage = (data: any) => {
    const availability = data.availability.map((time: string) => {
      switch (time) {
        case 'morning': return t('form.time.morning');
        case 'afternoon': return t('form.time.afternoon');
        case 'evening': return t('form.time.evening');
        default: return time;
      }
    }).join(', ');

    const objective = {
      stronger: t('form.objectives.stronger'),
      healthier: t('form.objectives.healthier'),
      skinnier: t('form.objectives.skinnier'),
      competition: t('form.objectives.competition')
    }[data.objective] || data.objective;

    return t('form.whatsapp.message', {
      name: data.name,
      age: data.age,
      gender: data.gender === 'male' ? t('form.gender.male') : t('form.gender.female'),
      height: data.height,
      weight: data.weight,
      objective: objective,
      availability: availability,
      location: data.location,
      phone: data.phone,
      email: data.email
    });
  };

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

          <h2 className="text-4xl font-bold mb-6 text-white">{t('thankyou.title')}</h2>
          
          {redirecting ? (
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              {t('thankyou.redirecting')}
            </p>
          ) : (
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              {t('thankyou.message')}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}