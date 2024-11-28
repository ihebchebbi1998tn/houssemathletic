import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        backgroundImage: 'url("https://i.ibb.co/vmM6VF7/467509617-9386018204761354-3094294667648383955-n.jpg")',
        backgroundSize: 'contain', // Ensures the entire image is shown
        backgroundRepeat: 'no-repeat', // Prevents repetition
        backgroundPosition: 'center', // Keeps the image centered
        backgroundAttachment: 'fixed', // Stays consistent during scrolling
        width: '100vw', // Full width of the viewport
        height: '100vh', // Full height of the viewport
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional dark overlay
      }}
    />
  );
};

export default ParticleBackground;
