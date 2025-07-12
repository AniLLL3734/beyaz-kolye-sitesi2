import React from 'react';
import AdUnit from './AdUnit';

const Footer: React.FC = () => {
  return (
    <>
      {/* --- FOOTER REKLAM ALANI --- */}
      <div className="mt-12 flex justify-center">
        <AdUnit
          key_id="41ba09b19f90fdc28d783b3692301f31"
          width={468}
          height={60}
        />
      </div>

      <footer className="bg-[#0a0a0a] border-t border-[#00ff41]/20 mt-4">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
          <p>© 2025 BEYAZ KOLYE HACK. Sınırları zorlayan kodlar.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;