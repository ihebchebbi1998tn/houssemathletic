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
        backgroundImage: 'url("https://i.ibb.co/drf5D6p/c0c42ef2-66a8-4b91-9886-372f2a836848.jpg")',
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
