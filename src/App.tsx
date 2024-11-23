import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IntakeForm from './pages/IntakeForm';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inscription" element={<IntakeForm />} />
        <Route path="/merci" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;