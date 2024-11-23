import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        backgroundImage: 'url("https://i.ibb.co/vmM6VF7/467509617-9386018204761354-3094294667648383955-n.jpg")',
        backgroundSize: '80%', // Slightly increases the width beyond the container
        backgroundRepeat: 'no-repeat', // Prevents repetition
        backgroundPosition: 'center', // Keeps the image centered
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional dark overlay
      }}
    />
  );
};

export default ParticleBackground;
