import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Ana şablonumuz
import Home from './pages/Home';
import Hacks from './pages/Hacks';
import About from './pages/About';
import HackDetail from './pages/HackDetail';
import Tools from './pages/Tools'; // Yeni sayfa

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* <-- Tüm sayfalar bu Layout'un içinde render edilir */}
        <Route index element={<Home />} />
        <Route path="hacks" element={<Hacks />} />
        <Route path="hacks/:hackId" element={<HackDetail />} />
        <Route path="tools" element={<Tools />} /> {/* <-- Bu satırın burada olduğundan emin ol */}
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;