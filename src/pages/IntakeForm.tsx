import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Ruler, Target, Clock } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import StepCard from '../components/StepCard';
import NavigationButtons from '../components/NavigationButtons';
import ObjectiveCard from '../components/ObjectiveCard';
import SelectionCard from '../components/SelectionCard';
import { objectives } from '../services/api';

type Step = 'personal' | 'measurements' | 'objective' | 'availability';

export default function IntakeForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    height: '',
    weight: '',
    objective: '',
    location: '',
    availability: [] as string[]
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 'personal':
        return formData.name && formData.age && formData.gender && formData.email && formData.phone && formData.location;
      case 'measurements':
        return formData.height && formData.weight;
      case 'objective':
        return formData.objective;
      case 'availability':
        return formData.availability.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    const steps: Step[] = ['personal', 'measurements', 'objective', 'availability'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    } else {
      navigate('/merci', { state: { formData } });
    }
  };

  const handleBack = () => {
    const steps: Step[] = ['personal', 'measurements', 'objective', 'availability'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'personal':
        return (
          <StepCard title="Informations Personnelles" icon={<User size={24} />}>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom Complet"
                value={formData.name}
                onChange={(e) => updateFormData({ name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                         focus:outline-none focus:border-[#ffd700]/50 transition-colors"
              />
              <input
                type="number"
                placeholder="Âge"
                value={formData.age}
                onChange={(e) => updateFormData({ age: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                         focus:outline-none focus:border-[#ffd700]/50 transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <SelectionCard
                  title="Homme"
                  onClick={() => updateFormData({ gender: 'male' })}
                  isSelected={formData.gender === 'male'}
                  size="small"
                />
                <SelectionCard
                  title="Femme"
                  onClick={() => updateFormData({ gender: 'female' })}
                  isSelected={formData.gender === 'female'}
                  size="small"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateFormData({ email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                         focus:outline-none focus:border-[#ffd700]/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={(e) => updateFormData({ phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                         focus:outline-none focus:border-[#ffd700]/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Ville"
                value={formData.location}
                onChange={(e) => updateFormData({ location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                         focus:outline-none focus:border-[#ffd700]/50 transition-colors"
              />
            </div>
          </StepCard>
        );

      case 'measurements':
        return (
          <StepCard title="Vos Mensurations" icon={<Ruler size={24} />}>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="number"
                  placeholder="Taille (cm)"
                  value={formData.height}
                  onChange={(e) => updateFormData({ height: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                           focus:outline-none focus:border-[#ffd700]/50 transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">cm</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Poids (kg)"
                  value={formData.weight}
                  onChange={(e) => updateFormData({ weight: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                           focus:outline-none focus:border-[#ffd700]/50 transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">kg</span>
              </div>
            </div>
          </StepCard>
        );

      case 'objective':
        return (
          <StepCard title="Votre Objectif" icon={<Target size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((objective) => (
                <ObjectiveCard
                  key={objective.id}
                  title={objective.title}
                  description={objective.description}
                  image={objective.image}
                  onClick={() => updateFormData({ objective: objective.id })}
                  isSelected={formData.objective === objective.id}
                />
              ))}
            </div>
          </StepCard>
        );

      case 'availability':
        return (
          <StepCard title="Vos Disponibilités" icon={<Clock size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'morning', title: '6h-12h' },
                { id: 'afternoon', title: '12h-18h' },
                { id: 'evening', title: '18h-22h' }
              ].map((time) => (
                <SelectionCard
                  key={time.id}
                  title={time.title}
                  onClick={() => {
                    const newAvailability = formData.availability.includes(time.id)
                      ? formData.availability.filter(t => t !== time.id)
                      : [...formData.availability, time.id];
                    updateFormData({ availability: newAvailability });
                  }}
                  isSelected={formData.availability.includes(time.id)}
                  size="small"
                />
              ))}
            </div>
          </StepCard>
        );
    }
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Commencez Votre <span className="text-[#ffd700]">Transformation</span>
          </h1>
          <p className="text-gray-300">
            Remplissez ce formulaire pour recevoir votre programme personnalisé
          </p>
        </motion.div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="max-w-4xl mx-auto w-full"
        >
          {renderStep()}
          
          <NavigationButtons
            onBack={currentStep !== 'personal' ? handleBack : undefined}
            onNext={handleNext}
            nextDisabled={!isStepValid()}
            nextText={currentStep === 'availability' ? 'Terminer' : 'Suivant'}
          />
        </motion.div>
      </div>
    </div>
  );
}