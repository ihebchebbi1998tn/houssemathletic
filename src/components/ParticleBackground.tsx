import React, { useState, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      style={{ 
        margin: 0,
        padding: 0,
        width: isMobile ? '100vw' : '70vw', // Full width on mobile, 70% width on web
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: '50%',  // Center horizontally for non-mobile screens
        transform: 'translateX(-50%)', // Ensure it's centered on larger screens
        zIndex: -1,
        backgroundImage: 'url("https://i.ibb.co/drf5D6p/c0c42ef2-66a8-4b91-9886-372f2a836848.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'black',  // Black background
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Darker overlay
        }}
      />
    </div>
  );
};

export default ParticleBackground;
