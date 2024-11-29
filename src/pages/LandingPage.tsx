import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Instagram, Phone } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import Gallery from '../components/Gallery';
import ImageCarousel from '../components/ImageCarousel';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import WelcomePopup from '../components/WelcomePopup';
import PricingSection from '../components/PricingSection';
import VideoSection from '../components/VideoSection';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <FloatingWhatsApp />
      <WelcomePopup />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8">
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center mb-16"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://i.ibb.co/QJW86KW/logo.png"
                alt="HJ Coaching"
                className="h-24 w-auto"
              />
            </div>
            <div className="flex items-center gap-6">
              <LanguageSelector />
              <motion.a 
                href="https://instagram.com" 
                className="text-white hover:text-[#ffd700] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="tel:+21600000000" 
                className="text-white hover:text-[#ffd700] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone size={24} />
              </motion.a>
            </div>
          </motion.nav>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {t('hero.title.transform')}<br />
                {t('hero.title.your')} <span className="text-[#ffd700]">{t('hero.title.body')}</span><br />
                {t('hero.title.your')} <span className="text-[#ffd700]">{t('hero.title.life')}</span>
              </motion.h1>
              <motion.p 
                className="text-gray-300 text-xl mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/inscription')}
                className="bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-black px-10 py-5 
                         rounded-full font-bold text-lg shadow-lg hover:shadow-xl 
                         transition-all duration-300 flex items-center gap-3 mx-auto lg:mx-0
                         transform hover:-translate-y-1"
              >
                {t('hero.cta')}
                <ChevronRight className="animate-bounce" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 relative hidden lg:block"
            >
              <div className="relative w-[400px] mx-auto">
                <div className="absolute inset-0 bg-[#ffd700] blur-3xl opacity-20 -z-10" />
                <img
                  src="https://i.ibb.co/r0r05g9/467859190-18284965684243085-4639842183437437601-n.jpg"
                  alt="Houssem Jlassi"
                  className="rounded-3xl shadow-2xl w-full relative z-10"
                />
              </div>
            </motion.div>

            <div className="lg:hidden w-full">
              <ImageCarousel />
            </div>
          </div>
        </div>

        {/* Video Section */}
        <VideoSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Transformations Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="py-20 bg-black/30 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              {t('transformations.title')} <span className="text-[#ffd700]">Inspirantes</span>
            </h2>
            <Gallery />
          </div>
        </motion.div>

        {/* Features Section */}
        <section className="py-20 bg-black/40 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: t('features.program.title'),
                  description: t('features.program.description')
                },
                {
                  title: t('features.nutrition.title'),
                  description: t('features.nutrition.description')
                },
                {
                  title: t('features.support.title'),
                  description: t('features.support.description')
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#242424]/80 backdrop-blur-lg p-8 rounded-2xl border border-[#ffd700]/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-20 bg-[#1a1a1a]/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                {t('cta.title')}
              </h2>
              <p className="text-gray-300 text-lg mb-12">
                {t('cta.subtitle')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/inscription')}
                className="bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-black px-12 py-6 
                         rounded-full font-bold text-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 flex items-center gap-3 mx-auto
                         transform hover:-translate-y-1"
              >
                {t('hero.cta')}
                <ChevronRight className="animate-bounce" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}