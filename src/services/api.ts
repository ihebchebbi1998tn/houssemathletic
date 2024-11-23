import axios from 'axios';

const api = axios.create({
  baseURL: 'YOUR_API_ENDPOINT', // Replace with your actual API endpoint
});

export const submitClientData = async (formData: any) => {
  try {
    const response = await api.post('/clients', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting client data:', error);
    throw error;
  }
};

export const objectives = [
  {
    id: 'stronger',
    title: 'Devenir Plus Fort',
    description: 'Développez votre force et votre puissance musculaire',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop'
  },
  {
    id: 'healthier',
    title: 'Mode de Vie Sain',
    description: 'Améliorez votre santé et votre bien-être général',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop'
  },
  {
    id: 'skinnier',
    title: 'Perte de Poids',
    description: 'Atteignez votre poids idéal avec un programme adapté',
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800&h=600&fit=crop'
  },
  {
    id: 'competition',
    title: 'Compétition',
    description: 'Préparez-vous pour les compétitions de bodybuilding',
    image: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=800&h=600&fit=crop'
  }
];