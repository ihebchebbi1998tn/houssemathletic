import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Instagram, Phone, Dumbbell, Target, Clock, Check, ArrowRight } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import Gallery from '../components/Gallery';
import ImageCarousel from '../components/ImageCarousel';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import WelcomePopup from '../components/WelcomePopup';

const PriceCard = ({ duration, priceEUR, priceTND }: { duration: string; priceEUR: string; priceTND: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="bg-gradient-to-b from-[#242424]/80 to-[#1a1a1a]/80 backdrop-blur-lg p-8 rounded-2xl
               border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-300
               shadow-lg hover:shadow-xl"
  >
    <h3 className="text-2xl font-bold text-white mb-6">{duration}</h3>
    <div className="space-y-4 mb-8">
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold text-[#ffd700]">{priceEUR}€</div>
        <div className="text-gray-400">EUR</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold text-[#ffd700]">{priceTND}</div>
        <div className="text-gray-400">TND</div>
      </div>
    </div>
    <ul className="space-y-3 mb-8">
      <li className="flex items-center gap-2 text-gray-300">
        <Check className="text-[#ffd700] w-5 h-5" />
        Programme personnalisé
      </li>
      <li className="flex items-center gap-2 text-gray-300">
        <Check className="text-[#ffd700] w-5 h-5" />
        Suivi nutritionnel
      </li>
      <li className="flex items-center gap-2 text-gray-300">
        <Check className="text-[#ffd700] w-5 h-5" />
        Support WhatsApp
      </li>
    </ul>
    <a
      href="https://api.whatsapp.com/send/?phone=%2B21624683015&text=aa&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-[#ffd700] text-black px-6 py-3 rounded-xl
                 hover:bg-[#ffed4a] transition-all duration-300 font-medium"
    >
      Réserver Maintenant
    </a>
  </motion.div>
);


export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <FloatingWhatsApp />
      <WelcomePopup />

      <div className="relative z-10">
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
            <div className="flex gap-6">
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
                Transformez<br />
                Votre <span className="text-[#ffd700]">Corps</span><br />
                Votre <span className="text-[#ffd700]">Vie</span>
              </motion.h1>
              <motion.p 
                className="text-gray-300 text-xl mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Découvrez votre meilleure version avec des programmes<br />
                personnalisés et un suivi professionnel.
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
                Commencer Maintenant
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

           {/* Pricing Section */}
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
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Pour réserver vos places et avoir plus de renseignements sur les offres et les modes de paiement,
                il suffit juste d'envoyer un message sur whatsapp.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PriceCard duration="6 Semaines" priceEUR="150.00" priceTND="500.00" />
              <PriceCard duration="12 Semaines" priceEUR="350.00" priceTND="1150.00" />
              <PriceCard duration="6 Mois" priceEUR="550.00" priceTND="1800.00" />
              <PriceCard duration="12 Mois" priceEUR="950.00" priceTND="3100.00" />
            </div>
          </div>
        </section>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="py-20 bg-black/30 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Transformations <span className="text-[#ffd700]">Inspirantes</span>
            </h2>
            <Gallery />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="w-8 h-8" />,
                title: "Programmes Sur Mesure",
                description: "Adaptés à vos objectifs et votre mode de vie"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Objectifs Atteints",
                description: "Une méthode éprouvée pour des résultats garantis"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Suivi Constant",
                description: "Un accompagnement personnalisé pour votre réussite"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-[#242424]/80 to-[#1a1a1a]/80 backdrop-blur-lg p-8 rounded-2xl
                         border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-300
                         shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/10 
                             rounded-xl flex items-center justify-center text-[#ffd700] mb-6
                             transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-[#ffd700] text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <section className="relative z-10 py-20 bg-[#1a1a1a]/50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Prêt à Commencer?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Rejoignez notre programme et transformez votre vie dès aujourd'hui.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/21600000000"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl
                       hover:bg-green-700 transition-all duration-300 text-lg font-medium"
            >
              <Phone className="w-6 h-6" />
              Contactez-nous
            </motion.a>

            <motion.a
              href="https://www.instagram.com/coach_houssem_jlassi/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                       px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg font-medium"
            >
              <Instagram className="w-6 h-6" />
              Suivez-nous
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}