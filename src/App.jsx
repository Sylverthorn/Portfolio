import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import GameHUD from './components/layout/GameHUD';

// Pages
import Home from './pages/Home';
import CharacterSheet from './pages/CharacterSheet';
import SkillTree from './pages/SkillTree';
import QuestLog from './pages/QuestLog';
import SummoningShrine from './pages/SummoningShrine';

function App() {
  const location = useLocation();

  return (
    <>
      <GameHUD />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<CharacterSheet />} />
            <Route path="/skills" element={<SkillTree />} />
            <Route path="/quests" element={<QuestLog />} />
            <Route path="/shrine" element={<SummoningShrine />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
