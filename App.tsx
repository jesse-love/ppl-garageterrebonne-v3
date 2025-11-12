
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AlexLandingPage from './pages/AlexLandingPage';
import SophieLandingPage from './pages/SophieLandingPage';
import MartinLandingPage from './pages/MartinLandingPage';
import MerciPage from './pages/MerciPage';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Routes>
        <Route path="/" element={<Navigate to="/offre" />} />
        <Route path="/offre" element={<AlexLandingPage />} />
        <Route path="/bilan" element={<SophieLandingPage />} />
        <Route path="/pneus" element={<MartinLandingPage />} />
        <Route path="/merci" element={<MerciPage />} />
      </Routes>
    </div>
  );
};

export default App;
