import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import TypingAnimation from '../components/TypingAnimation';
import { CHEATS_DATA } from '../constants';

const Home: React.FC = () => {
  const featuredHacks = CHEATS_DATA.slice(0, 3);

  return (
    <>
      {/* --- REACT 19 SEO ETİKETLERİ --- */}
      <title>Beyaz Kolye Hack - En Güncel ve Güvenilir Oyun Hileleri</title>
      <meta name="description" content="Beyaz Kolye Hack ekibinden CS 1.6 ve diğer popüler oyunlar için en güncel, stabil ve ücretsiz hileleri indirin. Aimbot, Wallhack ve daha fazlası." />

      <div className="flex flex-col items-center text-center">
        <div className="my-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-[#e0e0e0]">BEYAZ KOLYE HACK</h1>
          <h2 className="text-xl md:text-2xl mt-4 text-[#00ff41]">
            <TypingAnimation text="OYUN KURALLARINI YENIDEN YAZIYORUZ" />
          </h2>
        </div>

        <div className="w-full my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-glow">Öne Çıkan Hileler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHacks.map(hack => (
              <Card key={hack.id} hack={hack} />
            ))}
          </div>
        </div>
        
        <Link 
          to="/hacks" 
          className="mt-8 bg-[#00ff41] text-[#0a0a0a] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-transparent hover:text-[#00ff41] border-2 border-[#00ff41] hover:shadow-[0_0_15px_#00ff41]"
        >
          Tüm Hileleri Gör
        </Link>
      </div>
    </>
  );
};

export default Home;