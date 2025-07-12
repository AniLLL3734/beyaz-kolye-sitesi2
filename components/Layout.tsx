import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AdUnit from './AdUnit';

const Layout: React.FC = () => {
  const generalScriptsLoaded = useRef(false);

  useEffect(() => {
    // Sadece bir kez yüklenmesi gereken global scriptler (Popunder, Social Bar vb.)
    if (generalScriptsLoaded.current) return;

    // Popunder Reklamı
    const popunderScript = document.createElement('script');
    popunderScript.type = 'text/javascript';
    popunderScript.src = '//pl27147596.profitableratecpm.com/61/18/9f/61189f0779d84476c1bc9922e83a22a5.js';
    popunderScript.async = true;
    document.body.appendChild(popunderScript);

    // Social Bar Reklamı
    const socialBarScript = document.createElement('script');
    socialBarScript.type = 'text/javascript';
    socialBarScript.src = '//pl27147655.profitableratecpm.com/84/92/dc/8492dcff2a2ca88b7bb0b0d125b7a0b4.js';
    socialBarScript.async = true;
    document.body.appendChild(socialBarScript);
    
    generalScriptsLoaded.current = true;

  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e0e0e0] font-mono relative scanline-overlay">
      <Navbar />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between">
        {/* --- SOL KENAR ÇUBUĞU REKLAMI (Geniş ekranlarda görünür) --- */}
        <aside className="hidden lg:block w-[160px] flex-shrink-0 mr-8 sticky top-24 self-start">
          <AdUnit 
            key_id="ab8f9fb2ee61cc587d75fe5329a1a9c3" // 160x600 Banner Kodun
            width={160}
            height={600}
          />
        </aside>

        {/* --- ANA İÇERİK ALANI --- */}
        <main className="w-full lg:max-w-4xl flex-grow">
          <Outlet />
        </main>

        {/* --- SAĞ KENAR ÇUBUĞU REKLAMI (Geniş ekranlarda görünür) --- */}
        <aside className="hidden lg:block w-[160px] flex-shrink-0 ml-8 sticky top-24 self-start">
           <AdUnit 
            key_id="ab8f9fb2ee61cc587d75fe5329a1a9c3" // Sol taraftaki ile aynı 160x600 reklam kodunu kullanabiliriz
            width={160}
            height={600}
          />
        </aside>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;