import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div 
      style={{ 
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundImage: 'url("https://i.ibb.co/vmM6VF7/467509617-9386018204761354-3094294667648383955-n.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'black', // Changed to black
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay
        }}
      />
    </div>
  );
};

export default ParticleBackground;