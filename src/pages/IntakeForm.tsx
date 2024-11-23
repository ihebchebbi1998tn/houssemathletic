import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { User, Calendar, Scale, Ruler, Target, MapPin, Phone, Mail } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import StepCard from '../components/StepCard';
import SelectionCard from '../components/SelectionCard';
import ObjectiveCard from '../components/ObjectiveCard';
import NavigationButtons from '../components/NavigationButtons';
import { objectives } from '../services/api';

interface FormData {
  name: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  currentState: string;
  objective: string;
  availability: string[];
  location: string;
  phone: string;
  email: string;
}

const initialFormData: FormData = {
  name: '',
  age: '',
  gender: '',
  height: '',
  weight: '',
  currentState: '',
  objective: '',
  availability: [],
  location: '',
  phone: '',
  email: ''
};

const genderOptions = [
  { 
    id: 'male', 
    title: 'Homme',
    image: 'https://i.ibb.co/4t8y6MP/shutterstock-316320002.jpg"'
  },
  { 
    id: 'female', 
    title: 'Femme',
    image: 'https://i.ibb.co/6gG0fGT/intro-programme-femme.jpg'
  }
];

const bodyTypes = [
  {
    id: 'Mince',
    title: 'Mince',
    description: 'Poids inférieur à la normale',
    image: 'https://i.ibb.co/ckqy1ym/images.jpg'
  },
  {
    id: 'Normal',
    title: 'Normal',
    description: 'Poids dans la normale',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop'
  },
  {
    id: 'En surpoids',
    title: 'En surpoids',
    description: 'Poids supérieur à la normale',
    image: 'https://i.ibb.co/hgxDyKP/les-ballons-intragastriques-de-la-marque-allurion-sont-des-dispositifs-medicaux-utilises-chez-les-pe.jpg'
  },
  {
    id: 'bodybuilder',
    title: 'Bodybuilder',
    description: 'Déjà dans le monde du bodybuilding',
    image: 'https://i.ibb.co/L8BFwC2/20190829-182254-0830192018-Bodybuilde-00336.jpg',
    fullWidth: true
  }
];

const availabilityOptions = [
  { id: 'morning', title: '6h-12h' },
  { id: 'afternoon', title: '12h-18h' },
  { id: 'evening', title: '18h-22h' }
];

export default function IntakeForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateForm = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleAvailability = (time: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(time)
        ? prev.availability.filter(t => t !== time)
        : [...prev.availability, time]
    }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = async () => {
    try {
      // Here you would typically send the formData to your backend
      console.log('Form submitted:', formData);
      navigate('/merci');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const steps = [
    {
      title: "Informations Personnelles",
      icon: <User size={24} />,
      component: (
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
              Nom Complet
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => updateForm('name', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                       focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] outline-none
                       transition-colors"
              placeholder="Votre nom complet"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-200 mb-2">
              Âge
            </label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={(e) => updateForm('age', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                       focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] outline-none
                       transition-colors"
              placeholder="Votre âge"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Genre
            </label>
            <div className="grid grid-cols-2 gap-4">
              {genderOptions.map(option => (
                <SelectionCard
                  key={option.id}
                  title={option.title}
                  image={option.image}
                  isSelected={formData.gender === option.id}
                  onClick={() => updateForm('gender', option.id)}
                />
              ))}
            </div>
          </div>
          <NavigationButtons
            onNext={formData.name && formData.age && formData.gender ? nextStep : undefined}
            nextDisabled={!formData.name || !formData.age || !formData.gender}
          />
        </div>
      )
    },
    {
      title: "Mensurations",
      icon: <Ruler size={24} />,
      component: (
        <div className="space-y-6">
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-200 mb-2">
              Taille (cm)
            </label>
            <input
              type="number"
              id="height"
              value={formData.height}
              onChange={(e) => updateForm('height', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                       focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] outline-none"
              placeholder="Votre taille en centimètres"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-200 mb-2">
              Poids (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={formData.weight}
              onChange={(e) => updateForm('weight', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                       focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] outline-none"
              placeholder="Votre poids en kilogrammes"
            />
          </div>
          <NavigationButtons
            onBack={prevStep}
            onNext={formData.height && formData.weight ? nextStep : undefined}
            nextDisabled={!formData.height || !formData.weight}
          />
        </div>
      )
    },
    {
      title: "État Actuel",
      icon: <Scale size={24} />,
      component: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {bodyTypes.map(type => (
              <SelectionCard
                key={type.id}
                title={type.title}
                description={type.description}
                image={type.image}
                isSelected={formData.currentState === type.id}
                onClick={() => updateForm('currentState', type.id)}
                className={type.fullWidth ? 'md:col-span-3' : ''}
              />
            ))}
          </div>
          <NavigationButtons
            onBack={prevStep}
            onNext={formData.currentState ? nextStep : undefined}
            nextDisabled={!formData.currentState}
          />
        </div>
      )
    },
    {
      title: "Objectif",
      icon: <Target size={24} />,
      component: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map(objective => (
              <ObjectiveCard
                key={objective.id}
                {...objective}
                isSelected={formData.objective === objective.id}
                onClick={() => updateForm('objective', objective.id)}
              />
            ))}
          </div>
          <NavigationButtons
            onBack={prevStep}
            onNext={formData.objective ? nextStep : undefined}
            nextDisabled={!formData.objective}
          />
        </div>
      )
    },
    {
      title: "Disponibilité",
      icon: <Calendar size={24} />,
      component: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {availabilityOptions.map(option => (
              <SelectionCard
                key={option.id}
                title={option.title}
                isSelected={formData.availability.includes(option.id)}
                onClick={() => toggleAvailability(option.id)}
                size="small"
              />
            ))}
          </div>
          <NavigationButtons
            onBack={prevStep}
            onNext={formData.availability.length > 0 ? nextStep : undefined}
            nextDisabled={formData.availability.length === 0}
          />
        </div>
      )
    },
    {
      title: "Contact",
      icon: <Phone size={24} />,
      component: (
        <div className="space-y-6">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-200 mb-2">
              <MapPin size={16} className="inline mr-2" />
              Ville
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => updateForm('location', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                       focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] outline-none"
              placeholder="Votre ville"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
              <Phone size={16} className="inline mr-2" />
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => updateForm('phone', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                       focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] outline-none"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              <Mail size={16} className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => updateForm('email', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                       focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] outline-none"
              placeholder="Votre adresse email"
            />
          </div>
          <NavigationButtons
            onBack={prevStep}
            onNext={formData.location && formData.phone && formData.email ? handleSubmit : undefined}
            nextDisabled={!formData.location || !formData.phone || !formData.email}
            nextText="Terminer"
          />
        </div>
      )
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mx-auto mb-8"
        >
          <div className="flex justify-center items-center gap-2 mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-[#ffd700] w-6'
                      : index < currentStep
                      ? 'bg-[#ffd700]'
                      : 'bg-white/20'
                  }`}
                />
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 transition-all duration-300 ${
                      index < currentStep ? 'bg-[#ffd700]' : 'bg-white/20'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-4xl"
          >
            <StepCard
              title={steps[currentStep].title}
              icon={steps[currentStep].icon}
            >
              {steps[currentStep].component}
            </StepCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}