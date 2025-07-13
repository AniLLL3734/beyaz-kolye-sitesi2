import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  // Link stillerini bir değişkende tutarak kodu temiz tutuyoruz
  const linkClass = "px-3 py-2 transition-colors duration-300 hover:text-[#00ff41]";
  const activeLinkClass = "nav-link-active";

  // Her link için class'ları belirleyen bir yardımcı fonksiyon
  const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return `${linkClass} ${isActive ? activeLinkClass : ''}`;
  };

  return (
    <header className="bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#00ff41]/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <NavLink to="/" className="text-xl md:text-2xl font-bold tracking-widest text-[#00ff41] text-glow">
          BEYAZ KOLYE
        </NavLink>
        <div className="text-sm md:text-base">
          <NavLink to="/" className={getLinkClassName} end>
            Ana Sayfa
          </NavLink>
          <NavLink to="/hacks" className={getLinkClassName}>
            Hileler
          </NavLink>
          {/* YENİ EKLENEN LİNK BURADA */}
          <NavLink to="/tools" className={getLinkClassName}>
            Araçlar
          </NavLink>
          <NavLink to="/about" className={getLinkClassName}>
            Yapımcılar
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;