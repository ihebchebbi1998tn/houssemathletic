import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsappLogo, House } from 'phosphor-react';
import { useNavigate, useLocation } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirecting, setRedirecting] = useState(false);
  const formData = location.state?.formData;

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
        case 'morning': return '6h-12h';
        case 'afternoon': return '12h-18h';
        case 'evening': return '18h-22h';
        default: return time;
      }
    }).join(', ');

    const objective = {
      stronger: 'Devenir Plus Fort',
      healthier: 'Mode de Vie Sain',
      skinnier: 'Perte de Poids',
      competition: 'Compétition'
    }[data.objective] || data.objective;

    return `🏋️‍♂️ *Nouvelle Inscription au Programme de Coaching* 🏋️‍♂️

👤 *Informations Personnelles*
- Nom: ${data.name}
- Âge: ${data.age} ans
- Genre: ${data.gender === 'male' ? 'Homme' : 'Femme'}

📏 *Mensurations*
- Taille: ${data.height} cm
- Poids: ${data.weight} kg

🎯 *Objectif*: ${objective}

⏰ *Disponibilités*: ${availability}

📍 *Localisation*: ${data.location}

📞 *Contact*
- Téléphone: ${data.phone}
- Email: ${data.email}

💪 Je souhaite commencer mon programme de coaching personnalisé !`;
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

          <h2 className="text-4xl font-bold mb-6 text-white">Merci pour votre inscription!</h2>
          
          {redirecting ? (
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Redirection vers WhatsApp en cours...
            </p>
          ) : (
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Dans quelques secondes, vous serez redirigé vers WhatsApp pour finaliser votre inscription.
              Je vous contacterai personnellement très bientôt pour discuter de votre programme personnalisé.
            </p>
          )}

         
        </motion.div>
      </div>
    </div>
  );
}