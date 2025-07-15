// Dosya: src/components/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e0e0e0] font-mono relative scanline-overlay">
      <Navbar />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* --- ANA İÇERİK ALANI --- */}
        {/* Reklam kenar çubukları kaldırıldığı için 'main' artık tüm alanı kullanıyor */}
        <main className="w-full">
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;