
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hacks from './pages/Hacks';
import About from './pages/About';
import HackDetail from './pages/HackDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hacks" element={<Hacks />} />
        <Route path="hacks/:hackId" element={<HackDetail />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
